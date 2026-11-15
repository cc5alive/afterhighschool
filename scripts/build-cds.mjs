// Publishes Common Data Set values to data/cds/schools/<slug>.json from two independent reads:
//   data/cds/extracted/<slug>.json  values our reader took straight from the school's CDS document
//   data/cds/drafts/<slug>.json     values Gemini copied, kept only where check-cds.mjs confirmed them
// A value goes live only if it was read from the document and passes the consistency checks below.
// Where both reads exist and disagree, the confirmed Gemini value wins only if its quoted line matched exactly,
// and never for the C1 counts or the SAT/ACT percentiles when the reader has the whole set (each set is read
// from one row or one table, so a single swapped-in number breaks it), and never when Gemini quoted a
// different page than the document we cite.
// Usage: node scripts/build-cds.mjs
import fs from 'node:fs';
import { CDS_FIELDS, CDS_FACTORS } from './lib/cds-fields.mjs';
import { yearOf } from './lib/cds-resolve.mjs';

const read = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null);
const list = (d) => (fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5)) : []);
const { schools } = JSON.parse(fs.readFileSync('data/scorecard/latest.json', 'utf8'));
const bySlug = new Map(schools.map((s) => [s.slug, s]));
const today = new Date().toISOString().slice(0, 10);
const same = (a, b) => (typeof a === 'number' && typeof b === 'number' ? Math.abs(a - b) < 0.011 : String(a).toLowerCase() === String(b).toLowerCase());

// The entering class the federal (College Scorecard) admissions figures describe. A CDS for the same fall
// should match them almost exactly, so it gets a tight tolerance. Checked Nov 2026: of 42 schools whose CDS
// is 2024-25, 35 match the federal admit rate to within 0.2 points. Raise this when Scorecard moves on a year.
const FEDERAL_ADMISSIONS_FALL = 2024;
// Sets that are read together and must stay together.
const SETS = [['applied_total', 'admitted_total', 'enrolled_total'], ['sat_p25', 'sat_p50', 'sat_p75'], ['act_p25', 'act_p50', 'act_p75']];
const urlKey = (u) => { try { return decodeURIComponent(String(u || '').replace(/[?#].*$/, '')).replace(/\/$/, '').replace(/^https?:\/\/(www\.)?/, '').toLowerCase(); } catch { return String(u || '').toLowerCase(); } };

const GPA = ['gpa_400_pct', 'gpa_375_pct', 'gpa_350_pct', 'gpa_325_pct', 'gpa_300_pct', 'gpa_250_pct', 'gpa_200_pct', 'gpa_100_pct', 'gpa_below1_pct'];
const report = [];

// The CDS year a read came from: its own label, else the year in the document's URL or title.
const yr = (r) => (r ? yearOf(`${r.cdsYear || ''} ${r.source?.url || ''} ${r.source?.title || ''}`) : 0);

// Combine the two reads into one set of checked values. Both reads must come from the same document
// (or the same CDS year), so every value on the page matches the document it cites.
function combine(E, G, school, year, gapsOnly = false) {
  const v = {}, basis = {}, notes = [], from = {};
  // Sets the reader has in full: Gemini can't replace one member of them.
  const readerSet = new Set(SETS.filter((set) => set.every((k) => E?.values?.[k])).flat());
  for (const k of [...Object.keys(CDS_FIELDS), ...Object.keys(CDS_FACTORS)]) {
    const e = E?.values?.[k], g = G?.values?.[k]?.found === true ? G.values[k] : null;
    if (CDS_FIELDS[k]?.type === 'yesno') continue; // derived below
    if (e && g) {
      if (same(e.value, g.value)) { v[k] = e.value; basis[k] = 'both'; from[k] = e; }
      else if (readerSet.has(k) || gapsOnly) { v[k] = e.value; basis[k] = 'reader'; from[k] = e; notes.push(`${k}: reader ${e.value}, Gemini ${g.value}; kept the reader's${gapsOnly ? '' : ' set'}`); }
      else if (g.how === 'quote' || g.how === 'layout') { v[k] = g.value; basis[k] = 'gemini'; from[k] = g; notes.push(`${k}: reader ${e.value}, Gemini ${g.value} (quote matched)`); }
      else notes.push(`${k}: reads disagree (${e.value} vs ${g.value}), left out`);
    } else if (e) { v[k] = e.value; basis[k] = 'reader'; from[k] = e; }
    else if (g) { v[k] = g.value; basis[k] = 'gemini'; from[k] = g; }
  }
  // Spreadsheets often store percents as fractions (0.955 for 95.5%). A group of percentages is turned
  // back into percents only when every value in it is a fraction and none was already a percent: the
  // reader converts the template's answer codes itself ("C.901 ...: 0.0058" is already 0.58), and a value
  // printed with a % sign is a percent however small ("0.3%" of first-years sent ACT scores is not 30%).
  const isPercentAlready = (k) => /^[A-J]\.\d{3,4} /.test(from[k]?.quote || '') || new RegExp(`(^|[^\\d.])0*${String(v[k]).replace('.', '\\.')}0*\\s*%`).test(from[k]?.quote || '');
  const rescale = (keys) => {
    const have = keys.filter((k) => typeof v[k] === 'number');
    if (!have.length || !have.every((k) => v[k] >= 0 && v[k] <= 1) || !have.some((k) => v[k] > 0) || have.some(isPercentAlready)) return;
    for (const k of have) v[k] = Math.round(v[k] * 10000) / 100;
  };
  rescale(['sat_submit_pct', 'act_submit_pct']);
  rescale(['gpa_submit_pct']);
  rescale(['rank_submit_pct']);
  rescale(['rank_top10_pct', 'rank_top25_pct']);
  const drop = (keys, why) => { for (const k of keys) if (k in v) { delete v[k]; delete basis[k]; } notes.push(why); };

  // C1: positive, nested, and consistent with the federal admit rate.
  const C1 = ['applied_total', 'admitted_total', 'enrolled_total'];
  if (C1.some((k) => k in v)) {
    const { applied_total: ap, admitted_total: ad, enrolled_total: en } = v;
    // How far the report's admit rate may sit from the federal one: a different entering class moves it a
    // few points, so the room scales with the rate (4 points at a 5% school, 12 at a 60% school). The same
    // entering class should match almost exactly.
    const fed = school.admitRate;
    const room = fed == null ? Infinity : year === FEDERAL_ADMISSIONS_FALL ? 0.03 : Math.min(0.12, Math.max(0.04, fed * 0.5));
    const ok = ap > 0 && ad > 0 && ad <= ap && (en == null || (en > 0 && en <= ad))
      && (fed == null || Math.abs(ad / ap - fed) <= room);
    if (!ok) drop(C1, `C1 failed consistency (applied ${ap}, admitted ${ad}, enrolled ${en}, federal admit rate ${school.admitRate})`);
    // A first-year class can't be most of the undergraduates.
    else if (en != null && school.undergrads > 0 && en > school.undergrads * 0.6) drop(['enrolled_total'], `enrolled_total ${en} is more than 60% of ${school.undergrads} undergraduates`);
  }
  // C11: percentages (convert 0-1 fractions), "totals = 100%" picked up as a value, and a sum near 100.
  const present = GPA.filter((k) => k in v);
  if (present.length) {
    let sum = present.reduce((a, k) => a + v[k], 0);
    if (sum > 0.9 && sum < 1.1) { for (const k of present) v[k] = Math.round(v[k] * 10000) / 100; sum *= 100; }
    if (v.gpa_below1_pct === 100 && sum > 150) { drop(['gpa_below1_pct'], 'gpa_below1_pct read as the "totals = 100%" note'); sum -= 100; }
    if (sum === 0) drop(GPA, 'C11 left blank by the school');
    else if (present.length < 2 || sum < 95 || sum > 105) drop(GPA, `C11 buckets sum to ${sum.toFixed(1)}`);
  }
  if ('gpa_average' in v && (v.gpa_average < 2 || v.gpa_average > 5)) drop(['gpa_average'], 'gpa_average out of range');
  if ('gpa_submit_pct' in v && v.gpa_submit_pct < 10) drop(['gpa_submit_pct'], 'gpa_submit_pct implausibly low');
  for (const [t, lo, hi] of [['sat', 400, 1600], ['act', 1, 36]]) {
    const [a, b, c] = ['p25', 'p50', 'p75'].map((p) => v[`${t}_${p}`]);
    if ([a, b, c].some((x) => x != null) && !(a >= lo && c <= hi && a <= c && (b == null || (a <= b && b <= c))))
      drop([`${t}_p25`, `${t}_p50`, `${t}_p75`], `${t} scores inconsistent (${a}, ${b}, ${c})`);
  }
  // A "middle 50%" with no width means only a handful of students sent scores (Governors State: 870-870-870).
  if (v.sat_p25 != null && v.sat_p25 === v.sat_p75) drop(['sat_p25', 'sat_p50', 'sat_p75'], `SAT range has no width (${v.sat_p25}); too few scores to describe a class`);
  // Test scores should be close to the federal figures (a different year, so allow some drift).
  const fedSat = school.sat?.readingP25 && school.sat?.mathP25 ? [school.sat.readingP25 + school.sat.mathP25, school.sat.readingP75 + school.sat.mathP75] : null;
  if (fedSat && v.sat_p25 != null && (Math.abs(v.sat_p25 - fedSat[0]) > 90 || Math.abs(v.sat_p75 - fedSat[1]) > 90))
    drop(['sat_p25', 'sat_p50', 'sat_p75'], `SAT ${v.sat_p25}-${v.sat_p75} far from federal ${fedSat[0]}-${fedSat[1]}`);
  if (school.act?.p25 && v.act_p25 != null && (Math.abs(v.act_p25 - school.act.p25) > 3 || Math.abs(v.act_p75 - school.act.p75) > 3))
    drop(['act_p25', 'act_p50', 'act_p75'], `ACT ${v.act_p25}-${v.act_p75} far from federal ${school.act.p25}-${school.act.p75}`);
  if ('rank_top10_pct' in v && 'rank_top25_pct' in v && v.rank_top10_pct > v.rank_top25_pct) drop(['rank_top10_pct', 'rank_top25_pct'], 'class rank inconsistent');
  for (const p of ['ed', 'ea']) {
    const a = v[`${p}_applied`], b = v[`${p}_admitted`];
    if ((a != null || b != null) && !(a > 0 && b >= 0 && b <= a)) drop([`${p}_applied`, `${p}_admitted`], `${p} counts inconsistent (${a}, ${b})`);
    // Early decision is binding, so its admits can't outnumber the whole entering class (Morehouse's
    // 2023-24 report lists 1,322 "early decision" admits against 682 enrolled: almost certainly early action).
    else if (p === 'ed' && v.enrolled_total != null && b > v.enrolled_total) drop(['ed_applied', 'ed_admitted'], `ed_admitted ${b} is more than the ${v.enrolled_total} who enrolled; binding early decision can't do that`);
    else if (a > 0) v[`${p}_offered`] = 'yes';
  }
  if (v.deferral_allowed !== 'yes' || /common data set|\bcds\b|page \d|^n\/?a$/i.test(v.deferral_max || '')) delete v.deferral_max;
  const T = ['transfer_applied', 'transfer_admitted', 'transfer_enrolled'];
  if (T.some((k) => k in v) && !(v.transfer_applied > 0 && v.transfer_admitted <= v.transfer_applied && (v.transfer_enrolled == null || v.transfer_enrolled <= v.transfer_admitted)))
    drop(T, `transfer counts inconsistent (${v.transfer_applied}, ${v.transfer_admitted}, ${v.transfer_enrolled})`);
  const w = ['waitlist_offered', 'waitlist_accepted', 'waitlist_admitted'];
  if (v.waitlist_offered != null && v.waitlist_admitted != null && v.waitlist_admitted > v.waitlist_offered) drop(w, 'wait list counts inconsistent');
  // "Accepted a place" must sit between offered and admitted. When Gemini's accepted count merely repeats
  // the admitted count and was matched loosely ("near"), it is the next row's number: the school left the
  // row blank (Harvard, Case Western and Delaware 2025-26), and 75 admitted of 75 would read as 100%.
  if (v.waitlist_accepted != null && basis.waitlist_accepted === 'gemini' && from.waitlist_accepted?.how === 'near' && v.waitlist_accepted === v.waitlist_admitted)
    drop(['waitlist_accepted'], 'waitlist_accepted repeats waitlist_admitted (blank row in the document)');
  if (v.waitlist_accepted != null && ((v.waitlist_offered != null && v.waitlist_accepted > v.waitlist_offered) || (v.waitlist_admitted != null && v.waitlist_admitted > v.waitlist_accepted)))
    drop(w, `wait list counts inconsistent (offered ${v.waitlist_offered}, accepted ${v.waitlist_accepted}, admitted ${v.waitlist_admitted})`);

  return { v, basis, notes };
}

for (const slug of [...new Set([...list('data/cds/extracted'), ...list('data/cds/drafts')])]) {
  const school = bySlug.get(slug);
  if (!school) continue;
  let E = read(`data/cds/extracted/${slug}.json`), G = read(`data/cds/drafts/${slug}.json`);
  const pre = [];
  let alt = null, gapsOnly = false;
  if (E && G && E.source?.url !== G.source?.url) {
    const ye = yr(E), yg = yr(G);
    if (!ye || ye !== yg) {
      // Different documents from different (or unknown) years: use the newer one, the reader's on a tie.
      if (yg > ye) { alt = { E, G: null }; E = null; } else { alt = { E: null, G }; G = null; }
      pre.push(`reader and Gemini read different documents (${ye || '?'} vs ${yg || '?'}); used the ${E ? 'reader' : 'Gemini'} one`);
    }
  }
  // Same year, but Gemini quoted a web page while the reader read the CDS file we cite: the page can be a
  // different year's fact sheet (Boston College's "Applicants: 39,686" isn't in its 2024-25 CDS), so only the
  // reader's values are published. A second file of the same year (a revised CDS) may still fill gaps.
  if (E && G && urlKey(E.source?.url) !== urlKey(G.source?.url)) {
    if (G.docKind === 'html' && E.docKind !== 'html') { G = null; pre.push('Gemini quoted a web page, not the cited document; used the reader only'); }
    else { gapsOnly = true; pre.push('Gemini read a different file of the same year; its values only fill gaps'); }
  }
  const fall = (rec0) => { const y = yr(rec0); return y || Number(String(rec0?.cdsYear || '').slice(0, 4)) || 0; };
  let r = combine(E, G, school, fall(E || G), gapsOnly);
  // If the newer document gave too little to publish, fall back to the other one.
  if (alt && Object.keys(r.v).length < 3) {
    const r2 = combine(alt.E, alt.G, school, fall(alt.E || alt.G));
    if (Object.keys(r2.v).length >= 3) { r = r2; E = alt.E; G = alt.G; pre.push('newer document gave too few values; used the other'); }
  }
  const { v, basis } = r;
  const notes = [...pre, ...r.notes];
  const rec = E || G;
  const src = rec.source;
  const y = yr(rec);
  const year = rec.cdsYear || (y ? `${y}-${y + 1}` : null);
  const n = Object.keys(v).length;
  report.push(`| ${slug} | ${year || '-'} | ${n} | ${notes.join('; ').replace(/\|/g, '/') || ''} |`);
  fs.mkdirSync('data/cds/schools', { recursive: true });
  const out = `data/cds/schools/${slug}.json`;
  // Too little to publish. If the school already has published values, keep them: a new source that
  // turned out to be one section of a CDS, or an unreadable file, must not wipe out what we had.
  if (n < 3) {
    if (fs.existsSync(out)) report[report.length - 1] = report[report.length - 1].replace(/ \|$/, ' kept the values already published |');
    continue;
  }
  fs.writeFileSync(out, JSON.stringify({ slug, cdsYear: year, source: { title: src.title || 'Common Data Set', url: src.url }, builtAt: today, values: v, basis }, null, 2) + '\n');
}
fs.writeFileSync('data/cds/_build.md', ['# CDS build', '', `Built ${today}.`, '', '| School | Year | Values published | Notes |', '| --- | --- | --- | --- |', ...report.sort()].join('\n') + '\n');
console.log(`built ${report.length} schools`);
