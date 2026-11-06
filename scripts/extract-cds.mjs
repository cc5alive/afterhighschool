// Reads each school's Common Data Set document straight from its URL and pulls out the standard
// CDS values by their printed labels, so every value comes with the exact line it was read from.
// Usage: node scripts/extract-cds.mjs   (reads data/cds/sources.json: { "<slug>": { "url", "year", "title" } };
//        skips schools that already have a draft; runs in GitHub Actions with pdfjs-dist and xlsx installed)
// Writes data/cds/extracted/<slug>.json (same shape as Gemini drafts). Every value is read from the document
// itself, with the row it came from as its quote; scripts/build-cds.mjs sanity-checks and publishes.
import fs from 'node:fs';
import { norm } from './lib/doc-text.mjs';
import { resolveCds, yearOf, looksLikeCds, closeBrowser } from './lib/cds-resolve.mjs';
import { CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const SOURCES = 'data/cds/sources.json';
const DIR = 'data/cds/extracted';
fs.mkdirSync(DIR, { recursive: true });
const sources = JSON.parse(fs.readFileSync(SOURCES, 'utf8'));
const force = process.argv.includes('--force');
// Bump when the reading rules change: schools read by an older version are read again.
const READER_VERSION = 3;
const current = (slug) => { try { return JSON.parse(fs.readFileSync(`${DIR}/${slug}.json`, 'utf8')).readerVersion === READER_VERSION; } catch { return false; } };
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
const isNumbersOnly = (r) => r.length > 0 && r.every((c) => /^[\d,.\s%]+$/.test(c.s));
const isFooter = (r) => /common data set|page \d/.test(rowText(r));

function readRows(rows) {
  const out = {};
  if (!rows) return out;
  for (const [key, [re, type, pick]] of Object.entries(ROWS)) {
    for (let i = 0; i < rows.length && !out[key]; i++) {
      const text = rowText(rows[i]);
      if (!re.test(text)) continue;
      let cells = rows[i], quoteRows = [rows[i]];
      if (!cells.some((c) => parse(c.s, type) != null) && rows[i + 1] && !isFooter(rows[i + 1])
          && (isNumbersOnly(rows[i + 1]) || rowText(rows[i + 1]).replace(/[\d.,%\s]/g, '').length < 40)) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      } else if (pick === 'last' && rows[i + 1] && isNumbersOnly(rows[i + 1])) {
        cells = cells.concat(rows[i + 1]); quoteRows.push(rows[i + 1]);
      }
      // Numbers that are part of the label itself ("4.0", "3.75 and 3.99") sit at the label's start;
      // only cells to the right of the first cell count.
      const firstX = rows[i][0].x;
      const nums = cells.filter((c) => c.x > firstX + 1 && parse(c.s, type) != null).sort((a, b) => a.x - b.x);
      if (!nums.length) continue;
      let value = parse(nums[0].s, type);
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
      if (!/^total first-time, first-year (men|women|males|females|students of|of another|of unknown|another|unknown)/.test(rowText(r))) continue;
      // Long labels wrap: the number and the rest of the label can sit on the next one or two rows.
      for (let j = i + 1; j <= i + 2 && rows[j]; j++) {
        const t = rowText(rows[j]);
        if (/^total |first-time, first-year student/.test(t) || isFooter(rows[j])) break;
        if (isNumbersOnly(rows[j]) || t.replace(/[\d,]/g, '').trim().length < 25) r = r.concat(rows[j]); else break;
      }
      const text = rowText(r.filter((c) => parse(c.s, 'count') == null)).trim();
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
      if (!new RegExp(`^${name} composite\\b`).test(rowText(r))) continue;
      const v = r.slice(1).map((c) => parse(c.s, 'count')).filter((x) => x != null && x >= lo && x <= hi);
      if (v.length < 3 || !(v[0] <= v[1] && v[1] <= v[2])) continue;
      const q = rowText(r);
      out[`${name}_p25`] = { value: v[0], quote: q }; out[`${name}_p50`] = { value: v[1], quote: q }; out[`${name}_p75`] = { value: v[2], quote: q };
      break;
    }
  }
  return out;
}

// C7 grid: the column of each factor row's checkmark, using cell positions.
const MARK = /^(x|✓|✔|√|☒|■|●|•)$/i;
function factors(rows) {
  if (!rows) return {};
  let head = null;
  for (let i = 0; i < rows.length && !head; i++) {
    const cells = rows[i].filter((c) => /important|considered/i.test(c.s));
    if (cells.length >= 4) head = { at: i, cols: cells.slice(0, 4).sort((a, b) => a.x - b.x).map((c, k) => ({ x: c.x, level: FACTOR_LEVELS[k] })) };
  }
  if (!head) return {};
  const out = {};
  const sq = (s) => norm(s).replace(/[^a-z0-9]/g, '');
  for (const [key, label] of Object.entries(CDS_FACTORS)) {
    const l = sq(label).slice(0, 14);
    const row = rows.slice(head.at + 1, head.at + 60).find((r) => sq(r.map((c) => c.s).join(' ')).startsWith(l));
    const marks = row ? row.filter((c) => MARK.test(c.s)) : [];
    if (marks.length !== 1) continue; // none or ambiguous
    const col = head.cols.reduce((a, b) => (Math.abs(b.x - marks[0].x) < Math.abs(a.x - marks[0].x) ? b : a));
    out[key] = { value: col.level, quote: label };
  }
  return out;
}

export { readRows, readScores, factors, c1FromGender };
// Run only when called directly (tests import the readers above).
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  let made = 0;
  const log = [];
  for (const [slug, src] of Object.entries(sources)) {
    if (!force && current(slug)) continue;
    if (!retry && fresh(failed[slug], src.url)) continue;
    let resolved;
    try { resolved = await resolveCds(src.url); } catch (err) { fail(slug, src.url, `error ${err.message}`); continue; }
    const doc = resolved.doc;
    if (doc.text == null) { fail(slug, src.url, `document failed to load (HTTP ${doc.status})`); continue; }
    if (!looksLikeCds(doc.text)) { fail(slug, src.url, `no CDS document found from ${src.url}`); continue; }
    delete failed[slug];
    const values = { ...c1FromGender(doc.rows, readRows(doc.rows)), ...readScores(doc.rows), ...factors(doc.rows) };
    if (values.ed_applied) values.ed_offered = { value: 'yes', quote: null };
    if (values.ea_applied) values.ea_offered = { value: 'yes', quote: null };
    const docUrl = resolved.url || src.url;
    const d = { slug, cdsYear: src.year || resolved.year || (yearOf(docUrl) ? `${yearOf(docUrl)}-${yearOf(docUrl) + 1}` : null), source: { title: src.title || 'Common Data Set', url: docUrl },
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
