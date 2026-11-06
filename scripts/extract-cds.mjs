// Reads each school's Common Data Set document straight from its URL and pulls out the standard
// CDS values by their printed labels, so every value comes with the exact line it was read from.
// Usage: node scripts/extract-cds.mjs   (reads data/cds/sources.json: { "<slug>": { "url", "year", "title" } };
//        skips schools that already have a draft; runs in GitHub Actions with pdfjs-dist and xlsx installed)
// Writes data/cds/drafts/<slug>.json in the same shape as scripts/import-cds.mjs, for check-cds.mjs to confirm.
import fs from 'node:fs';
import { fetchDocText, norm } from './lib/doc-text.mjs';
import { CDS_FACTORS, FACTOR_LEVELS } from './lib/cds-fields.mjs';

const SOURCES = 'data/cds/sources.json';
const DIR = 'data/cds/drafts';
const sources = JSON.parse(fs.readFileSync(SOURCES, 'utf8'));
const force = process.argv.includes('--force');

const NUM = '(\\d{1,3}(?:,\\d{3})+|\\d+(?:\\.\\d+)?)';
const GAP = '[^0-9]{0,40}?';                  // header words or blank cells between label and value
const PCT = '(\\d{1,3}(?:\\.\\d+)?)\\s*%';

// key: [label regex (normalized lowercase text), value regex, kind]
const PATTERNS = {
  applied_total: [/total first-time, first-year (?:\(degree-seeking\) )?(?:students )?who applied/, NUM],
  admitted_total: [/total first-time, first-year (?:\(degree-seeking\) )?(?:students )?who were admitted/, NUM],
  enrolled_total: [/total (?:full-time )?first-time, first-year (?:\(degree-seeking\) )?(?:students )?(?:who )?enrolled/, NUM],
  waitlist_offered: [/number of qualified applicants offered a place on wait list:?/, NUM],
  waitlist_accepted: [/number accepting a place on the wait list:?/, NUM],
  waitlist_admitted: [/number of wait-listed students admitted:?/, NUM],
  sat_submit_pct: [/percent submitting sat scores/, PCT],
  act_submit_pct: [/percent submitting act scores/, PCT],
  rank_top10_pct: [/percent in top tenth of high school graduating class/, PCT],
  rank_top25_pct: [/percent in top quarter of high school graduating class/, PCT],
  rank_submit_pct: [/percent of total first-time, first-year students who submitted high school class rank:?/, PCT],
  gpa_400_pct: [/percent who had gpa of 4\.0/, PCT],
  gpa_375_pct: [/percent who had gpa between 3\.75 and 3\.99/, PCT],
  gpa_350_pct: [/percent who had gpa between 3\.50 and 3\.74/, PCT],
  gpa_325_pct: [/percent who had gpa between 3\.25 and 3\.49/, PCT],
  gpa_300_pct: [/percent who had gpa between 3\.00 and 3\.24/, PCT],
  gpa_250_pct: [/percent who had gpa between 2\.50 and 2\.99/, PCT],
  gpa_200_pct: [/percent who had gpa between 2\.0 and 2\.49/, PCT],
  gpa_100_pct: [/percent who had gpa between 1\.0 and 1\.99/, PCT],
  gpa_below1_pct: [/percent who had gpa below 1\.0/, PCT],
  gpa_average: [/average high school gpa of all degree-seeking, first-time, first-year students who submitted gpa:?/, '([1-5]\\.\\d{1,2})'],
  gpa_submit_pct: [/percent of total first-time, first-year students who submitted high school gpa:?/, PCT],
  ed_applied: [/number of early decision applications received by (?:your|the) institution/, NUM],
  ed_admitted: [/number of applicants admitted under early decision plan/, NUM],
  ea_applied: [/number of early action applications received by (?:your|the) institution/, NUM],
  ea_admitted: [/number of applicants admitted under early action plan/, NUM]
};

function find(text, labelRe, valueRe) {
  const re = new RegExp(`(${labelRe.source})${GAP}${valueRe}`);
  const m = text.match(re);
  if (!m) return null;
  const raw = m[2];
  return { value: Number(raw.replace(/,/g, '')), quote: m[0] };
}

// SAT/ACT composite rows: three scores in a row (25th, 50th, 75th percentile).
function scores(text, name, lo, hi) {
  const m = text.match(new RegExp(`${name} composite${GAP}(\\d{2,4})\\s+(\\d{2,4})\\s+(\\d{2,4})`));
  if (!m) return {};
  const v = m.slice(1, 4).map(Number);
  if (!v.every((x) => x >= lo && x <= hi) || !(v[0] <= v[1] && v[1] <= v[2])) return {};
  const k = name === 'sat' ? 'sat' : 'act';
  return { [`${k}_p25`]: { value: v[0], quote: m[0] }, [`${k}_p50`]: { value: v[1], quote: m[0] }, [`${k}_p75`]: { value: v[2], quote: m[0] } };
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

// A source URL can be the CDS document itself or a school page that links to it. For a page,
// follow the link to the newest CDS (2023-24 or later), preferring PDF/Excel files, up to two levels deep.
const yearOf = (s) => {
  const t = s.toLowerCase();
  let best = 0;
  for (const m of t.matchAll(/(20\d\d)\s*[-_–]?\s*(?:20)?(\d\d)/g)) {
    const a = Number(m[1]), b = Number(m[2]);
    if (b === (a + 1) % 100 && a >= 2015 && a <= 2030) best = Math.max(best, a);
  }
  for (const m of t.matchAll(/cds[\s_-]*(\d\d)[\s_-]?(\d\d)/g)) {
    const a = 2000 + Number(m[1]);
    if (Number(m[2]) === (a + 1) % 100) best = Math.max(best, a);
  }
  return best;
};
async function rawHtml(url) {
  try {
    const r = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (compatible; afterhighschool-factcheck/1.0)' }, signal: AbortSignal.timeout(30000) });
    if (!r.ok || !/html/i.test(r.headers.get('content-type') || '')) return null;
    return { html: await r.text(), url: r.url };
  } catch { return null; }
}
const looksLikeCds = (text) => /percent who had gpa|who applied|early decision applications|relative importance/.test(text || '');
async function resolveCds(url, depth = 2) {
  const doc = await fetchDocText(url, { timeout: 60000 });
  if (doc.text == null || doc.kind !== 'html' || looksLikeCds(doc.text) || depth === 0) return { doc, url: doc.finalUrl || url };
  const page = await rawHtml(url);
  if (!page) return { doc, url };
  const links = [];
  for (const m of page.html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let href; try { href = new URL(m[1], page.url).toString(); } catch { continue; }
    const label = norm(m[2]) + ' ' + decodeURIComponent(href).toLowerCase();
    if (!/common.?data.?set|\bcds\b|cds[_-]/.test(label)) continue;
    const y = yearOf(label);
    const file = /\.(pdf|xlsx?)(\?|$)/i.test(href);
    links.push({ href, y, file, score: y * 10 + (file ? 5 : 0) });
  }
  links.sort((a, b) => b.score - a.score);
  for (const l of links.slice(0, 4)) {
    if (l.y && l.y < 2023) break;
    const r = l.file ? { doc: await fetchDocText(l.href, { timeout: 60000 }), url: l.href } : await resolveCds(l.href, depth - 1);
    if (r.doc.text && looksLikeCds(r.doc.text)) return { ...r, year: l.y ? `${l.y}-${l.y + 1}` : null };
  }
  return { doc, url };
}

let made = 0;
const log = [];
for (const [slug, src] of Object.entries(sources)) {
  if (!force && fs.existsSync(`${DIR}/${slug}.json`)) continue;
  const resolved = await resolveCds(src.url);
  const doc = resolved.doc;
  if (doc.text == null) { log.push(`${slug}: document failed to load (HTTP ${doc.status})`); continue; }
  if (!looksLikeCds(doc.text)) { log.push(`${slug}: no CDS document found from ${src.url}`); continue; }
  const values = {};
  for (const [key, [label, value]] of Object.entries(PATTERNS)) {
    const hit = find(doc.text, label, value);
    if (hit) values[key] = hit;
  }
  Object.assign(values, scores(doc.text, 'sat', 400, 1600), scores(doc.text, 'act', 1, 36), factors(doc.rows));
  if (values.ed_applied) values.ed_offered = { value: 'yes', quote: null };
  if (values.ea_applied) values.ea_offered = { value: 'yes', quote: null };
  const docUrl = resolved.url || src.url;
  const d = { slug, cdsYear: src.year || resolved.year || (yearOf(docUrl) ? `${yearOf(docUrl)}-${yearOf(docUrl) + 1}` : null), source: { title: src.title || 'Common Data Set', url: docUrl },
    researchedAt: new Date().toISOString().slice(0, 10), extractedBy: 'extract-cds', docKind: doc.kind, values, concerns: null };
  if (!Object.keys(values).length) d.concerns = 'no CDS values recognized (document may be scanned or laid out unusually)';
  fs.writeFileSync(`${DIR}/${slug}.json`, JSON.stringify(d, null, 2) + '\n');
  made++;
  log.push(`${slug}: ${doc.kind}, ${Object.keys(values).length} values`);
}
console.log(log.join('\n'));
console.log(`wrote ${made} drafts`);
