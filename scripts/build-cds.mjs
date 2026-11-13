// Publishes Common Data Set values to data/cds/schools/<slug>.json from two independent reads:
//   data/cds/extracted/<slug>.json  values our reader took straight from the school's CDS document
//   data/cds/drafts/<slug>.json     values Gemini copied, kept only where check-cds.mjs confirmed them
// A value goes live only if it was read from the document and passes the consistency checks below.
// Where both reads exist and disagree, the confirmed Gemini value wins only if its quoted line matched exactly.
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

const GPA = ['gpa_400_pct', 'gpa_375_pct', 'gpa_350_pct', 'gpa_325_pct', 'gpa_300_pct', 'gpa_250_pct', 'gpa_200_pct', 'gpa_100_pct', 'gpa_below1_pct'];
const report = [];

// The CDS year a read came from: its own label, else the year in the document's URL or title.
const yr = (r) => (r ? yearOf(`${r.cdsYear || ''} ${r.source?.url || ''} ${r.source?.title || ''}`) : 0);

// Combine the two reads into one set of checked values. Both reads must come from the same document
// (or the same CDS year), so every value on the page matches the document it cites.
function combine(E, G, school) {
  const v = {}, basis = {}, notes = [];
  for (const k of [...Object.keys(CDS_FIELDS), ...Object.keys(CDS_FACTORS)]) {
    const e = E?.values?.[k], g = G?.values?.[k]?.found === true ? G.values[k] : null;
    if (CDS_FIELDS[k]?.type === 'yesno') continue; // derived below
    if (e && g) {
      if (same(e.value, g.value)) { v[k] = e.value; basis[k] = 'both'; }
      else if (g.how === 'quote' || g.how === 'layout') { v[k] = g.value; basis[k] = 'gemini'; notes.push(`${k}: reader ${e.value}, Gemini ${g.value} (quote matched)`); }
      else notes.push(`${k}: reads disagree (${e.value} vs ${g.value}), left out`);
    } else if (e) { v[k] = e.value; basis[k] = 'reader'; }
    else if (g) { v[k] = g.value; basis[k] = 'gemini'; }
  }
  // Spreadsheets often store percents as fractions (0.955 for 95.5%).
  const pct100 = (k) => { if (typeof v[k] === 'number' && v[k] > 0 && v[k] < 1) v[k] = Math.round(v[k] * 10000) / 100; };
  if (v.gpa_submit_pct === 1) v.gpa_submit_pct = 100;
  for (const k of ['gpa_submit_pct', 'sat_submit_pct', 'act_submit_pct', 'rank_submit_pct']) pct100(k);
  if ((v.rank_top10_pct ?? 0) <= 1 && (v.rank_top25_pct ?? 0) <= 1 && (v.rank_top25_pct ?? v.rank_top10_pct) > 0) {
    pct100('rank_top10_pct'); pct100('rank_top25_pct');
    if (v.rank_top25_pct === 1) v.rank_top25_pct = 100;
  }
  const drop = (keys, why) => { for (const k of keys) if (k in v) { delete v[k]; delete basis[k]; } notes.push(why); };

  // C1: positive, nested, and consistent with the federal admit rate.
  const C1 = ['applied_total', 'admitted_total', 'enrolled_total'];
  if (C1.some((k) => k in v)) {
    const { applied_total: ap, admitted_total: ad, enrolled_total: en } = v;
    const ok = ap > 0 && ad > 0 && ad <= ap && (en == null || (en > 0 && en <= ad))
      && (school.admitRate == null || Math.abs(ad / ap - school.admitRate) <= 0.12);
    if (!ok) drop(C1, `C1 failed consistency (applied ${ap}, admitted ${ad}, enrolled ${en}, federal admit rate ${school.admitRate})`);
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
    else if (a > 0) v[`${p}_offered`] = 'yes';
  }
  if (v.deferral_allowed !== 'yes' || /common data set|\bcds\b|page \d|^n\/?a$/i.test(v.deferral_max || '')) delete v.deferral_max;
  const T = ['transfer_applied', 'transfer_admitted', 'transfer_enrolled'];
  if (T.some((k) => k in v) && !(v.transfer_applied > 0 && v.transfer_admitted <= v.transfer_applied && (v.transfer_enrolled == null || v.transfer_enrolled <= v.transfer_admitted)))
    drop(T, `transfer counts inconsistent (${v.transfer_applied}, ${v.transfer_admitted}, ${v.transfer_enrolled})`);
  const w = ['waitlist_offered', 'waitlist_accepted', 'waitlist_admitted'];
  if (v.waitlist_offered != null && v.waitlist_admitted != null && v.waitlist_admitted > v.waitlist_offered) drop(w, 'wait list counts inconsistent');

  return { v, basis, notes };
}

for (const slug of [...new Set([...list('data/cds/extracted'), ...list('data/cds/drafts')])]) {
  const school = bySlug.get(slug);
  if (!school) continue;
  let E = read(`data/cds/extracted/${slug}.json`), G = read(`data/cds/drafts/${slug}.json`);
  const pre = [];
  let alt = null;
  if (E && G && E.source?.url !== G.source?.url) {
    const ye = yr(E), yg = yr(G);
    if (!ye || ye !== yg) {
      // Different documents from different (or unknown) years: use the newer one, the reader's on a tie.
      if (yg > ye) { alt = { E, G: null }; E = null; } else { alt = { E: null, G }; G = null; }
      pre.push(`reader and Gemini read different documents (${ye || '?'} vs ${yg || '?'}); used the ${E ? 'reader' : 'Gemini'} one`);
    }
  }
  let r = combine(E, G, school);
  // If the newer document gave too little to publish, fall back to the other one.
  if (alt && Object.keys(r.v).length < 3) {
    const r2 = combine(alt.E, alt.G, school);
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
