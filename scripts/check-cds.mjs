// Checks Common Data Set drafts (data/cds/drafts/<slug>.json) against the school's own CDS document.
// Usage: node scripts/check-cds.mjs [--all]   (runs in GitHub Actions; needs pdfjs-dist and xlsx installed)
// Numbers: the quoted CDS line must appear in the document and contain the value ("quote"), or the
//   value must sit right after the quoted label in the document ("near").
// C7 factors: the checkmark in the factor's row must sit under the column Gemini claimed ("layout").
// Sets values[key].found = true | false | null (document unreadable) and values[key].how.
import fs from 'node:fs';
import { squash, norm } from './lib/doc-text.mjs';
import { resolveCds, closeBrowser } from './lib/cds-resolve.mjs';
import { CDS_FIELDS, CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const DIR = 'data/cds/drafts';
const all = process.argv.includes('--all');
const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter((f) => f.endsWith('.json')) : [];

const fmt = (v) => squash(typeof v === 'number' ? String(v) : String(v).replace(/,/g, ''));

function checkNumber(text, item) {
  const q = squash(item.quote || ''), v = fmt(item.value);
  if (!q || !v) return { found: false };
  if (!q.includes(v)) return { found: false, note: 'value not in quote' };
  if (text.includes(q)) return { found: true, how: 'quote' };
  const label = q.slice(0, q.indexOf(v));
  if (label.length >= 12) {
    let i = text.indexOf(label);
    while (i > -1) {
      // The value must follow the label directly, with at most other numbers in between (the other
      // percentiles on a score row). Letters in the gap mean the next row's label: the school left this
      // row blank and the number belongs to the row below (Harvard's wait list, 2025-26).
      const after = text.slice(i + label.length, i + label.length + 150), at = after.indexOf(v);
      if (at > -1 && !/[a-z]/.test(after.slice(0, at))) return { found: true, how: 'near' };
      i = text.indexOf(label, i + 1);
    }
  }
  return { found: false };
}

const MARK = /^(x|✓|✔|√|☒|■|●|•|yes)$/i;
function factorColumns(rows) {
  // Header row: the four levels in order, possibly split as "Very / Not" above "Important Important Considered Considered".
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].filter((c) => /important|considered/i.test(c.s));
    if (cells.length >= 4) {
      const four = cells.slice(0, 4).sort((a, b) => a.x - b.x);
      return { at: i, cols: four.map((c, k) => ({ x: c.x, level: FACTOR_LEVELS[k] })) };
    }
    const joined = norm(rows[i].map((c) => c.s).join(' '));
    if (joined.includes('very important') && joined.includes('not considered')) {
      const cols = [];
      for (const lv of FACTOR_LEVELS) {
        const c = rows[i].find((c) => norm(c.s) === lv.toLowerCase());
        if (c) cols.push({ x: c.x, level: lv });
      }
      if (cols.length === 4) return { at: i, cols };
    }
  }
  return null;
}

function checkFactors(rows, values) {
  const head = factorColumns(rows || []);
  const out = {};
  for (const [key, label] of Object.entries(CDS_FACTORS)) {
    const item = values[key];
    if (!item) continue;
    if (!head) { out[key] = { found: null, note: 'factor table not readable' }; continue; }
    const l = squash(label).slice(0, 14);
    const row = rows.slice(head.at + 1, head.at + 60).find((r) => squash(r.map((c) => c.s).join(' ')).startsWith(l));
    const mark = row && row.find((c) => MARK.test(c.s));
    if (!mark) { out[key] = { found: null, note: 'no checkmark found' }; continue; }
    const col = head.cols.reduce((a, b) => (Math.abs(b.x - mark.x) < Math.abs(a.x - mark.x) ? b : a));
    out[key] = col.level.toLowerCase() === String(item.value).toLowerCase()
      ? { found: true, how: 'layout' }
      : { found: false, note: `document shows ${col.level}` };
  }
  return out;
}

const cache = new Map();
const doc = (url) => { if (!cache.has(url)) cache.set(url, resolveCds(url)); return cache.get(url); };

const report = [];
for (const f of files) {
  const d = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  if (!all && d.checkedAt) continue;
  const res = await doc(d.source.url);
  const r = res.doc;
  // A page that links to the CDS: cite the document itself, keep the page for reference.
  if (res.url && res.url !== d.source.url && r.text) { d.source.page = d.source.url; d.source.url = res.url; }
  d.httpStatus = r.status; d.finalUrl = r.finalUrl; d.docKind = r.kind;
  const factors = r.text == null ? {} : checkFactors(r.rows, d.values);
  for (const [key, item] of Object.entries(d.values)) {
    let res;
    if (r.text == null) res = { found: null, note: 'document failed to load' };
    else if (CDS_FACTORS[key]) res = factors[key] || { found: null };
    else if (CDS_FIELDS[key]?.type === 'yesno') res = { found: null, note: 'derived from counts, not checked directly' };
    else res = checkNumber(squash(r.text), item);
    Object.assign(item, { found: res.found, how: res.how || null, note: res.note || null });
  }
  d.checkedAt = new Date().toISOString().slice(0, 10);
  d.verified = Object.values(d.values).filter((v) => v.found === true).length;
  d.total = Object.keys(d.values).length;
  fs.writeFileSync(`${DIR}/${f}`, JSON.stringify(d, null, 2) + '\n');
  report.push(`| ${d.slug} | ${d.docKind || '-'} | ${d.httpStatus} | ${d.verified} of ${d.total} |`);
}
const md = ['# CDS check', '', `Checked ${report.length} schools on ${new Date().toISOString().slice(0, 10)}.`, '',
  '| School | Document | Status | Values confirmed |', '| --- | --- | --- | --- |', ...report].join('\n');
if (report.length) fs.writeFileSync(`${DIR}/_cds-check.md`, md + '\n');
console.log(`checked ${report.length} schools`);
await closeBrowser();
