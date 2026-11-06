// Turns a fetched document (HTML page, PDF or Excel workbook) into plain text, so quotes and
// numbers can be checked against it. PDF and Excel support need `pdfjs-dist` and `xlsx`
// installed (the GitHub workflow installs them with --no-save); without them those formats return null.

export const norm = (s) => String(s || '')
  .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;|&#39;|’|‘/g, "'")
  .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;|&quot;|[“”]/g, '"').replace(/&#8211;|&#8212;|&ndash;|&mdash;|[–—]/g, '-')
  .replace(/ /g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();

// Letters, digits, %, $ and . only: survives table cells being split or re-spaced by PDF extraction.
export const squash = (s) => norm(s).replace(/[^a-z0-9%$.]/g, '');

export function kindOf(buf, contentType = '', url = '') {
  const head = buf.subarray(0, 5).toString('latin1');
  if (head.startsWith('%PDF') || /pdf/i.test(contentType)) return 'pdf';
  if ((head.startsWith('PK') && /wordprocessingml/i.test(contentType)) || /\.docx($|\?)/i.test(url)) return 'docx';
  if ((head.startsWith('PK') && /sheet|excel|officedocument|octet/i.test(contentType)) || /\.xlsx?($|\?)/i.test(url)) return 'xlsx';
  return 'html';
}

// Each document also yields `rows`: arrays of cells { x, s } in reading order, used to tell which
// column of a table a checkmark sits in (the CDS C7 grid). x is a page position for PDFs and a
// column index for spreadsheets and HTML tables.
async function pdfDoc(buf) {
  let pdfjs;
  try { pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs'); } catch { return null; }
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf), useSystemFonts: true, isEvalSupported: false }).promise;
  const out = [], rowsOut = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const tc = await page.getTextContent();
    // Rebuild lines from text items using their y position, so table rows read left to right.
    const rows = new Map();
    for (const it of tc.items) {
      if (!('str' in it)) continue;
      const y = Math.round(it.transform[5]);
      if (!rows.has(y)) rows.set(y, []);
      rows.get(y).push({ x: it.transform[4], s: it.str });
    }
    // Fillable CDS forms keep their numbers and checkmarks in form fields, not page text: add them
    // as cells at the field's position (a checked box becomes "X").
    try {
      for (const a of await page.getAnnotations({ intent: 'display' })) {
        if (a.subtype !== 'Widget' || !a.rect) continue;
        let v = null;
        if (a.fieldType === 'Tx' && a.fieldValue != null && String(a.fieldValue).trim()) v = String(a.fieldValue).trim();
        else if (a.fieldType === 'Btn' && (a.checkBox || a.radioButton) && a.fieldValue && a.fieldValue !== 'Off'
          && (!a.radioButton || a.fieldValue === a.buttonValue)) v = 'X';
        if (!v) continue;
        const y = Math.round(a.rect[1] + 2);
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y).push({ x: a.rect[0] + 1, s: v });
      }
    } catch { /* no form fields */ }
    // Merge items whose y differs by a point or two (same visual line).
    const ys = [...rows.keys()].sort((a, b) => b - a);
    const merged = [];
    for (const y of ys) {
      const last = merged[merged.length - 1];
      if (last && Math.abs(last.y - y) <= 3) last.cells.push(...rows.get(y));
      else merged.push({ y, cells: [...rows.get(y)] });
    }
    for (const m of merged) {
      const cells = m.cells.sort((a, b) => a.x - b.x).filter((c) => c.s.trim());
      out.push(cells.map((c) => c.s).join(' '));
      rowsOut.push(cells.map((c) => ({ x: c.x, s: c.s.trim() })));
    }
  }
  return { raw: out.join('\n'), rows: rowsOut };
}

async function xlsxDoc(buf) {
  let XLSX;
  try { XLSX = (await import('xlsx')).default; } catch { return null; }
  const wb = XLSX.read(buf, { type: 'buffer' });
  const rows = [];
  for (const n of wb.SheetNames) {
    for (const r of XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1, blankrows: false, defval: '' })) {
      const cells = r.map((v, x) => ({ x, s: String(v).trim() })).filter((c) => c.s);
      if (cells.length) rows.push(cells);
    }
  }
  return { raw: rows.map((r) => r.map((c) => c.s).join(' ')).join('\n'), rows };
}

// Word (.docx): read word/document.xml from the zip (SheetJS ships a zip reader) and turn each table
// row into cells and each paragraph into a one-cell row. Ticked checkboxes count as "X".
async function docxDoc(buf) {
  let XLSX;
  try { XLSX = (await import('xlsx')).default; } catch { return null; }
  const zip = XLSX.CFB.read(buf, { type: 'buffer' });
  const entry = XLSX.CFB.find(zip, 'word/document.xml') || XLSX.CFB.find(zip, '/word/document.xml');
  if (!entry) return null;
  const xml = Buffer.from(entry.content).toString('utf8');
  const unesc = (t) => t.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
  const text = (frag) => {
    let t = [...frag.matchAll(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>|<w:tab\/>|<w:br\/>/g)].map((m) => (m[1] != null ? unesc(m[1]) : ' ')).join('');
    if (!/[☒☑✓✔x]/i.test(t) && /w14:checked w14:val="(1|true)"|<w:checked\/>|<w:checkBox>[\s\S]*?<w:default w:val="1"/.test(frag)) t = `${t} X`;
    return t.replace(/\s+/g, ' ').trim();
  };
  const rows = [];
  for (const m of xml.matchAll(/<w:tbl>[\s\S]*?<\/w:tbl>|<w:p[ >][\s\S]*?<\/w:p>/g)) {
    const block = m[0];
    if (block.startsWith('<w:tbl>')) {
      for (const tr of block.match(/<w:tr[ >][\s\S]*?<\/w:tr>/g) || []) {
        let x = 0; const cells = [];
        for (const tc of tr.match(/<w:tc>[\s\S]*?<\/w:tc>/g) || []) {
          const span = Number((tc.match(/<w:gridSpan w:val="(\d+)"/) || [])[1] || 1);
          const s = text(tc);
          if (s) cells.push({ x: x * 100, s });
          x += span;
        }
        if (cells.length) rows.push(cells);
      }
    } else {
      const s = text(block);
      if (s) rows.push([{ x: 0, s }]);
    }
  }
  return { raw: rows.map((r) => r.map((c) => c.s).join(' ')).join('\n'), rows };
}

function htmlDoc(html) {
  const rows = [];
  for (const tr of html.match(/<tr[\s\S]*?<\/tr>/gi) || []) {
    let x = 0; const cells = [];
    for (const m of tr.matchAll(/<t([dh])([^>]*)>([\s\S]*?)<\/t[dh]>/gi)) {
      const span = Number((m[2].match(/colspan\s*=\s*"?(\d+)/i) || [])[1] || 1);
      const s = norm(m[3]);
      if (s) cells.push({ x, s });
      x += span;
    }
    if (cells.length) rows.push(cells);
  }
  return { raw: html, rows };
}

// Parses an already-downloaded document (used by the browser fallback too).
export async function docFromBuffer(buf, contentType = '', url = '') {
  const kind = kindOf(buf, contentType, url);
  let doc = null;
  try { doc = kind === 'pdf' ? await pdfDoc(buf) : kind === 'xlsx' ? await xlsxDoc(buf) : kind === 'docx' ? await docxDoc(buf) : htmlDoc(buf.toString('utf8')); } catch { /* unreadable */ }
  return { kind, text: doc ? norm(doc.raw) : null, rows: doc ? doc.rows : null };
}

// Returns { text, rows, kind, status, finalUrl }; text is normalized (lowercase, single spaces) or null.
export async function fetchDocText(url, { timeout = 30000 } = {}) {
  let status = 0, finalUrl = url, text = null, kind = null, rows = null;
  try {
    const r = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; afterhighschool-factcheck/1.0; +https://afterhighschool.me/methodology)' },
      signal: AbortSignal.timeout(timeout)
    });
    status = r.status; finalUrl = r.url;
    if (r.ok) {
      const buf = Buffer.from(await r.arrayBuffer());
      ({ text, rows, kind } = await docFromBuffer(buf, r.headers.get('content-type') || '', finalUrl));
    }
  } catch { /* network or parse error: text stays null */ }
  return { text, rows, kind, status, finalUrl };
}
