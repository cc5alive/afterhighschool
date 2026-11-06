// Reads each school's Common Data Set document straight from its URL and pulls out the standard
// CDS values by their printed labels, so every value comes with the exact line it was read from.
// Usage: node scripts/extract-cds.mjs   (reads data/cds/sources.json: { "<slug>": { "url", "year", "title" } };
//        skips schools that already have a draft; runs in GitHub Actions with pdfjs-dist and xlsx installed)
// Writes data/cds/extracted/<slug>.json (same shape as Gemini drafts). Every value is read from the document
// itself, with the row it came from as its quote; scripts/build-cds.mjs sanity-checks and publishes.
import fs from 'node:fs';
import { norm, docFromBuffer } from './lib/doc-text.mjs';
import { resolveCds, yearOf, looksLikeCds, closeBrowser, downloadUrl } from './lib/cds-resolve.mjs';
import { CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const SOURCES = 'data/cds/sources.json';
const DIR = 'data/cds/extracted';
fs.mkdirSync(DIR, { recursive: true });
const sources = JSON.parse(fs.readFileSync(SOURCES, 'utf8'));
const force = process.argv.includes('--force');
const pages = process.argv.includes('--pages'); // monthly refresh: re-read sources that are school pages, in case a newer CDS was posted
// Bump when the reading rules change: schools read by an older version are read again.
const READER_VERSION = 7; // 6: D2 transfer admissions; 7: C18 deferred admission
// A school needs a fresh read when the reader changed or its listed source changed.
const isFile = (u) => /\.(pdf|xlsx?|docx)(\?|$)/i.test(u) || !!downloadUrl(u);
const current = (slug, src) => {
  try {
    const e = JSON.parse(fs.readFileSync(`${DIR}/${slug}.json`, 'utf8'));
    if (e.readerVersion !== READER_VERSION) return false;
    if (src.mirror && e.mirror !== src.mirror) return false;
    if (e.sourceUrl) return e.sourceUrl === src.url;
    return !isFile(src.url) || e.source?.url === src.url;
  } catch { return false; }
};
// Sources that failed are remembered so each run doesn't spend minutes re-trying them.
// A failed school is tried again when its URL in sources.json changes, after 14 days, or with --retry.
const FAILED = 'data/cds/_failed.json';
const failed = fs.existsSync(FAILED) ? JSON.parse(fs.readFileSync(FAILED, 'utf8')) : {};
const retry = force || process.argv.includes('--retry');
const today = new Date().toISOString().slice(0, 10);
const fresh = (f, url) => f && f.url === url && (Date.now() - Date.parse(f.at)) < 14 * 864e5;
const fail = (slug, url, reason) => { failed[slug] = { url, at: today, reason }; log.push(`${slug}: ${reason}`); };

// Each CDS value is read from the table row that carries its printed label. Values in the same
// row (or a numbers-only row right below, as wrapped PDF tables often have) are the candidates.
// pick: 'first' = first number after the label; 'last' = rightmost column (the C1 "Total" column).
const ROWS = {
  applied_total: [/^total first-time, first-year (?:\(degree-seeking\) )?(?:students )?who applied/, 'count', 'last'],
  admitted_total: [/^total first-time, first-year (?:\(degree-seeking\) )?(?:students )?who were admitted/, 'count', 'last'],
  enrolled_total: [/^total (?:full-time )?first-time, first-year (?:\(degree-seeking\) )?(?:students )?(?:who )?enrolled/, 'count', 'last'],
  waitlist_offered: [/^number of qualified applicants offered a place on wait ?list/, 'count', 'first'],
  waitlist_accepted: [/^number accepting a place on the wait ?list/, 'count', 'first'],
  waitlist_admitted: [/^number of wait-?listed students admitted/, 'count', 'first'],
  sat_submit_pct: [/^percent submitting sat scores/, 'pct', 'first'],
  act_submit_pct: [/^percent submitting act scores/, 'pct', 'first'],
  rank_top10_pct: [/^percent in top tenth of high school graduating class/, 'pct', 'first'],
  rank_top25_pct: [/^percent in top quarter of high school graduating class/, 'pct', 'first'],
  rank_submit_pct: [/^percent of total first-time, first-year students who submitted high school class rank/, 'pct', 'first'],
  gpa_400_pct: [/^percent who had gpa of 4\.0/, 'pct', 'first'],
  gpa_375_pct: [/^percent who had gpa between 3\.75 and 3\.99/, 'pct', 'first'],
  gpa_350_pct: [/^percent who had gpa between 3\.50 and 3\.74/, 'pct', 'first'],
  gpa_325_pct: [/^percent who had gpa between 3\.25 and 3\.49/, 'pct', 'first'],
  gpa_300_pct: [/^percent who had gpa between 3\.00 and 3\.24/, 'pct', 'first'],
  gpa_250_pct: [/^percent who had gpa between 2\.50 and 2\.99/, 'pct', 'first'],
  gpa_200_pct: [/^percent who had gpa between 2\.0 and 2\.49/, 'pct', 'first'],
  gpa_100_pct: [/^percent who had gpa between 1\.0 and 1\.99/, 'pct', 'first'],
  gpa_below1_pct: [/^percent who had gpa below 1\.0/, 'pct', 'first'],
  gpa_average: [/^average high school gpa\b/, 'gpa', 'first'],
  gpa_submit_pct: [/^percent (?:of total first-time, first-year students who submitted high school gpa|submitting gpa)/, 'pct', 'first'],
  ed_applied: [/^number of early decision applications received by (?:your|the) institution/, 'count', 'first'],
  ed_admitted: [/^number of applicants admitted under early decision plan/, 'count', 'first'],
  ea_applied: [/^number of early action applications received by (?:your|the) institution/, 'count', 'first'],
  ea_admitted: [/^number of applicants admitted under early action plan/, 'count', 'first']
};

const parse = (s, type) => {
  const t = s.replace(/[,\s]/g, '').replace(/%$/, '');
  if (!/^\d+(\.\d+)?$/.test(t)) return null;
  const v = Number(t);
  if (type === 'pct') return v <= 100 ? v : null;
  if (type === 'gpa') return v >= 1 && v <= 5 && t.includes('.') ? v : null;
  return Number.isInteger(v) ? v : null;
};
const rowText = (r) => norm(r.map((c) => c.s).join(' '));
// Some PDFs print the item code (C1, C11 …) in front of each row's label, and some say "(freshman)".
const labelText = (r) => rowText(r).replace(/^c\d{1,2}[a-z]?\.?\s+/, '').replace(/\s*\(freshmen?\)/g, '');
const isNumbersOnly = (r) => r.length > 0 && r.every((c) => /^[\d,.\s%]+$/.test(c.s));
const isFooter = (r) => /common data set|page \d|^totals? should/.test(rowText(r));

function readRows(rows) {
  const out = {};
  if (!rows) return out;
  const gpaCols = {};
  for (const [key, [re, type, pick]] of Object.entries(ROWS)) {
    for (let i = 0; i < rows.length && !out[key]; i++) {
      const text = labelText(rows[i]);
      if (!re.test(text)) continue;
      let cells = rows[i], quoteRows = [rows[i]];
      if (!cells.some((c) => parse(c.s, type) != null) && rows[i + 1] && !isFooter(rows[i + 1])
          && (isNumbersOnly(rows[i + 1]) || rowText(rows[i + 1]).replace(/[\d.,%\s]/g, '').length < 40)) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      } else if (pick === 'last' && rows[i + 1] && isNumbersOnly(rows[i + 1]) && !isFooter(rows[i + 1])) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      }
      // Numbers that are part of the label itself ("4.0", "3.75 and 3.99") can sit in their own cells:
      // skip the cells that make up the matched label, then only cells further right count.
      const matchLen = (text.match(re) || [''])[0].replace(/\s/g, '').length;
      let used = 0, k = 0;
      const label = rows[i].map((c) => norm(c.s).replace(/^c\d{1,2}[a-z]?\.?$/, '')).map((t) => t.replace(/\s*\(freshmen?\)/g, ''));
      while (k < rows[i].length && used < matchLen) { used += label[k].replace(/\s/g, '').length; k++; }
      const labelEndX = rows[i][Math.max(0, k - 1)].x;
      const nums = cells.filter((c, ci) => (ci >= k || cells !== rows[i] && ci >= rows[i].length) && c.x > labelEndX && parse(c.s, type) != null).sort((a, b) => a.x - b.x);
      if (!nums.length) continue;
      let value = parse(nums[0].s, type);
      if (/^gpa_\d|^gpa_below/.test(key)) { gpaCols[key] = nums.map((c) => parse(c.s, type)); }
      if (pick === 'last') {
        // C1 rows list men, women, another gender and a total, but schools order the columns differently
        // (total first in the 2025-26 template, last in older ones). The total is the number that equals
        // the sum of the others; failing that, the largest.
        const vals = nums.map((c) => parse(c.s, type));
        const sum = vals.reduce((a, b) => a + b, 0);
        value = vals.length === 1 ? vals[0] : (vals.find((x) => vals.length > 2 && Math.abs(x * 2 - sum) <= 2) ?? null);
        if (!value) continue; // a blank or broken total field: C1 falls back to the gender rows below
      }
      out[key] = { value, quote: quoteRows.map(rowText).join(' ') };
    }
  }
  // C11 now has up to three columns (students who sent test scores, who didn't, and all students).
  // Use the column that adds up to 100% — the rightmost one ("all students") when several do.
  const keys = Object.keys(gpaCols);
  const width = Math.max(0, ...keys.map((k) => gpaCols[k].length));
  if (width > 1) {
    const ok = (t) => (t >= 95 && t <= 105) || (t >= 0.95 && t <= 1.05);
    for (let j = width - 1; j >= 0; j--) {
      const t = keys.reduce((a, k) => a + (gpaCols[k][j] ?? 0), 0);
      if (ok(t)) { for (const k of keys) if (gpaCols[k][j] != null) out[k].value = gpaCols[k][j]; break; }
    }
  }
  return out;
}

// C1 also lists applicants, admits and enrollees by gender. When the total row is blank, broken ("##")
// or reads 0, the total is the sum of those rows.
const C1_VERB = { applied_total: /who applied$/, admitted_total: /who were admitted$/, enrolled_total: /(who )?enrolled$/ };
function c1FromGender(rows, out) {
  for (const [key, verb] of Object.entries(C1_VERB)) {
    if (out[key]?.value) continue;
    let sum = 0, n = 0; const quote = [];
    for (let i = 0; i < (rows || []).length; i++) {
      let r = rows[i];
      if (!/^total first-time, first-year (men|women|males|females|students of|of another|of unknown|another|unknown)/.test(labelText(r))) continue;
      // Long labels wrap: the number and the rest of the label can sit on the next one or two rows.
      for (let j = i + 1; j <= i + 2 && rows[j]; j++) {
        const t = rowText(rows[j]);
        if (/^total |first-time, first-year student/.test(t) || isFooter(rows[j])) break;
        if (isNumbersOnly(rows[j]) || t.replace(/[\d,]/g, '').trim().length < 25) r = r.concat(rows[j]); else break;
      }
      const text = labelText(r.filter((c) => parse(c.s, 'count') == null)).trim();
      if (!verb.test(text)) continue;
      const nums = r.slice(1).map((c) => parse(c.s, 'count')).filter((x) => x != null);
      if (nums.length) sum += nums[nums.length - 1];
      n++; quote.push(rowText(r));
    }
    if (n >= 2 && sum > 0) out[key] = { value: sum, quote: quote.join(' / '), how: 'sum of gender rows' };
  }
  return out;
}

// SAT/ACT composite rows: three scores (25th, 50th, 75th percentile).
function readScores(rows) {
  const out = {};
  for (const [name, lo, hi] of [['sat', 400, 1600], ['act', 1, 36]]) {
    for (const r of rows || []) {
      if (!new RegExp(`^${name} composite\\b`).test(labelText(r))) continue;
      const v = r.slice(1).map((c) => parse(c.s, 'count')).filter((x) => x != null && x >= lo && x <= hi);
      if (v.length < 3 || !(v[0] <= v[1] && v[1] <= v[2])) continue;
      const q = rowText(r);
      out[`${name}_p25`] = { value: v[0], quote: q }; out[`${name}_p50`] = { value: v[1], quote: q }; out[`${name}_p75`] = { value: v[2], quote: q };
      break;
    }
  }
  return out;
}

// C18: deferred admission. Yes/No (a ticked box, or the only Yes or No given) and the longest postponement, in the school's words.
const TICK = '(?:x|☒|☑|■|✓|✔)';
function readDeferral(rows) {
  if (!rows) return {};
  let best = null;
  rows.forEach((r, i) => {
    const k = r.findIndex((c) => /postpone enrollment after/.test(norm(c.s)));
    if (k >= 0 && !/practice of permitting/.test(rowText(r)) && (!best || k < best.k)) best = { i, k };
  });
  if (!best) return {};
  let end = best.i + 1;
  while (end < Math.min(rows.length, best.i + 5) && !/maximum period of postponement|^c19\b|early admission/.test(rowText(rows[end]))) end++;
  const cells = [...rows[best.i].slice(best.k), ...rows.slice(best.i + 1, end).flat()];
  const text = norm(cells.map((c) => c.s).join(' ')).replace(/\(?yes or no\)?/g, ' ');
  let answer = null;
  const yesTick = new RegExp(`${TICK}\\s*yes\\b`).test(text), noTick = new RegExp(`${TICK}\\s*no\\b`).test(text);
  if (yesTick !== noTick) answer = yesTick ? 'yes' : 'no';
  else if (!/[☐□]/.test(text)) {
    const y = /\byes\b/.test(text), n = /\bno\b/.test(text);
    if (y !== n) answer = y ? 'yes' : 'no';
  }
  if (!answer) return {};
  const out = { deferral_allowed: { value: answer, quote: `C18 ${text.slice(0, 160)}` } };
  const m = rows[end] && /maximum period of postponement/.test(rowText(rows[end])) ? end : -1;
  if (answer === 'yes' && m < 0) {
    // Some files drop the "maximum period" label and leave only the answer ("One academic year").
    const r = rows.slice(best.i + 1, end).find((x) => rowText(x).length < 80 && /\b(years?|semesters?|terms?|months?)\b/.test(rowText(x)) && !/postpone/.test(rowText(x)));
    if (r) { const period = r.map((c) => c.s).join(' ').replace(/\s+/g, ' ').trim().replace(/\.$/, ''); out.deferral_max = { value: period[0].toUpperCase() + period.slice(1), quote: `C18 ${period}` }; }
  }
  if (answer === 'yes' && m >= 0) {
    const r = rows[m];
    const at = r.findIndex((c) => /maximum period/.test(norm(c.s)));
    let period = r.slice(at + 1).map((c) => c.s).join(' ').replace(/^[\s:]+/, '').trim();
    const next = rows[m + 1];
    if (!period && next && !/^c19\b|early admission|^c\d/.test(rowText(next)) && rowText(next).length <= 200) period = next.map((c) => c.s).join(' ').trim();
    period = period.replace(/\s+/g, ' ').replace(/\.$/, '');
    if (period && period.length <= 200 && /[a-z]/i.test(period) && !/common data set|\bcds\b|page \d/i.test(period)) out.deferral_max = { value: period[0].toUpperCase() + period.slice(1), quote: `C18 maximum period of postponement: ${period}` };
  }
  return out;
}

// D2: transfer applicants, admits and enrollees. The "Total" row in the few rows after the D2 heading,
// read left to right (applicants, admitted, enrolled).
function readTransfer(rows) {
  if (!rows) return {};
  const start = rows.findIndex((r) => /degree ?-? ?seeking transfer\b|enrolled as degree ?-?$/.test(rowText(r)));
  if (start < 0) return {};
  for (let j = start + 1; j < Math.min(rows.length, start + 16); j++) {
    const t = rowText(rows[j]);
    if (/^d3\b|application for admission|indicate terms/.test(t)) break;
    // The row's own label must be "Total" (some spreadsheets carry a second, unrelated table to the right).
    const k = rows[j].findIndex((c) => /^total:?$/.test(norm(c.s)));
    if (k < 0 || rows[j].slice(0, k).some((c) => parse(c.s, 'count') != null)) continue;
    const nums = rows[j].slice(k + 1).map((c) => parse(c.s, 'count')).filter((x) => x != null).slice(0, 3);
    if (nums.length < 3) continue;
    const [a, b, e] = nums;
    if (!(a > 0 && b <= a && e <= b)) return {};
    const quote = `D2 ${rowText(rows[j].slice(k, k + 4))}`;
    return { transfer_applied: { value: a, quote }, transfer_admitted: { value: b, quote }, transfer_enrolled: { value: e, quote } };
  }
  return {};
}

// C7 grid: the column of each factor row's checkmark, using cell positions.
const MARK = /^(x|✓|✔|√|☒|■|●|•)$/i;
function factors(rows) {
  if (!rows) return {};
  let head = null;
  // The column headings can sit on one row or be split over up to three ("Very | Not" / "Important |
  // Considered" / "Important | Considered"): gather heading words and group them by position.
  for (let i = 0; i < rows.length && !head; i++) {
    if (!rows[i].some((c) => /important|considered/i.test(c.s))) continue;
    const words = rows.slice(i, i + 3).flatMap((r) => r.filter((c) => /^(very|not)?\s*(important|considered)$|^(very|not)$/i.test(c.s.trim())));
    const cols = [];
    for (const c of words.sort((a, b) => a.x - b.x)) {
      const last = cols[cols.length - 1];
      if (last && c.x - last.x1 < 25) { last.x1 = c.x; last.xs.push(c.x); } else cols.push({ x1: c.x, xs: [c.x] });
    }
    if (cols.length === 4) {
      const at = i + rows.slice(i, i + 3).reduce((n, r, k) => (r.some((c) => /important|considered/i.test(c.s)) ? k : n), 0);
      head = { at, cols: cols.map((g, k) => ({ x: g.xs.reduce((a, b) => a + b, 0) / g.xs.length, level: FACTOR_LEVELS[k] })) };
    }
  }
  if (!head) return {};
  const out = {};
  const sq = (s) => norm(s).replace(/[^a-z0-9]/g, '');
  for (const [key, label] of Object.entries(CDS_FACTORS)) {
    const l = sq(label).slice(0, 14);
    const row = rows.slice(head.at + 1, head.at + 60).find((r) => sq(labelText(r)).startsWith(l));
    const marks = row ? row.filter((c) => MARK.test(c.s)) : [];
    if (marks.length !== 1) continue; // none or ambiguous
    const col = head.cols.reduce((a, b) => (Math.abs(b.x - marks[0].x) < Math.abs(a.x - marks[0].x) ? b : a));
    out[key] = { value: col.level, quote: label };
  }
  return out;
}

const log = [];
export { readRows, readScores, factors, c1FromGender, readTransfer, readDeferral };
// Run only when called directly (tests import the readers above).
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  let made = 0;
  for (const [slug, src] of Object.entries(sources)) {
    if (!force && current(slug, src) && !(pages && !isFile(src.url))) continue;
    if (!retry && !src.mirror && fresh(failed[slug], src.url)) continue;
    let resolved;
    try {
      // Some schools block automated downloads (bot checks). For those, a person downloads the official file
      // and we keep a copy in data/cds/mirror/; the page still cites the school's own link (src.url).
      if (src.mirror && fs.existsSync(src.mirror) && src.mirror.endsWith('.rows.json')) {
        // A scanned report: rows made by OCR (scripts/ocr-cds.py), checked by the same consistency rules.
        const rows = JSON.parse(fs.readFileSync(src.mirror, 'utf8'));
        resolved = { doc: { kind: 'ocr', status: 200, rows, text: norm(rows.map((r) => r.map((c) => c.s).join(' ')).join(' ')) }, url: src.url };
      } else if (src.mirror && fs.existsSync(src.mirror)) {
        const buf = fs.readFileSync(src.mirror);
        const ext = src.mirror.split('.').pop().toLowerCase();
        const type = { pdf: 'application/pdf', xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', xls: 'application/vnd.ms-excel', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }[ext] || '';
        resolved = { doc: { ...(await docFromBuffer(buf, type, src.mirror)), status: 200 }, url: src.url };
      } else resolved = await resolveCds(src.url);
    } catch (err) { fail(slug, src.url, `error ${err.message}`); continue; }
    const doc = resolved.doc;
    if (doc.text == null) { fail(slug, src.url, `document failed to load (HTTP ${doc.status})`); continue; }
    if (!looksLikeCds(doc.text)) { fail(slug, src.url, `no CDS document found from ${src.url}`); continue; }
    delete failed[slug];
    const values = { ...c1FromGender(doc.rows, readRows(doc.rows)), ...readScores(doc.rows), ...factors(doc.rows), ...readTransfer(doc.rows), ...readDeferral(doc.rows) };
    if (values.ed_applied) values.ed_offered = { value: 'yes', quote: null };
    if (values.ea_applied) values.ea_offered = { value: 'yes', quote: null };
    // Temporary download hosts (Box, Google) expire: cite the listed link instead.
    const docUrl = resolved.url && !/boxcloud\.com|googleusercontent\.com/.test(resolved.url) ? resolved.url : src.url;
    const d = { slug, cdsYear: (isFile(src.url) && src.year) || resolved.year || (yearOf(docUrl) ? `${yearOf(docUrl)}-${yearOf(docUrl) + 1}` : null) || src.year || null, source: { title: src.title || 'Common Data Set', url: docUrl }, sourceUrl: src.url, mirror: src.mirror || undefined,
      researchedAt: new Date().toISOString().slice(0, 10), extractedBy: 'extract-cds', readerVersion: READER_VERSION, docKind: doc.kind, values, concerns: null };
    if (!Object.keys(values).length) d.concerns = 'no CDS values recognized (document may be scanned or laid out unusually)';
    fs.writeFileSync(`${DIR}/${slug}.json`, JSON.stringify(d, null, 2) + '\n');
    made++;
    log.push(`${slug}: ${doc.kind}, ${Object.keys(values).length} values`);
  }
  for (const k of Object.keys(failed)) if (!sources[k]) delete failed[k];
  fs.writeFileSync(FAILED, JSON.stringify(failed, null, 1) + '\n');
  console.log(log.join('\n'));
  console.log(`wrote ${made} drafts; ${Object.keys(failed).length} sources currently failing (see ${FAILED})`);
  await closeBrowser();
}
