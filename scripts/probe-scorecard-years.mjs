// Debug probe: which data year does each "latest" College Scorecard field come from?
// The API's "latest" mixes years (admissions from one file, earnings from another, some fields years old),
// and it doesn't say which. This asks for the same field under each year prefix (2012.x ... 2026.x) for a
// handful of schools and reports the newest year whose values equal "latest".
// Writes probe/scorecard-years.json. With --write it also updates data/scorecard/data-years.json, which the
// site uses to label how old each number is; the weekly Scorecard pull runs it that way. A field whose year
// can't be determined keeps its previous year, and the run says so.
import { mkdir, writeFile, readFile } from 'node:fs/promises';
const KEY = process.env.SCORECARD_API_KEY;
if (!KEY) { console.error('Missing SCORECARD_API_KEY'); process.exit(1); }
const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
// Harvard, UNC-Chapel Hill, Ohio State, Arizona State, Kenyon, Howard, Cal State Long Beach, Berea
const IDS = [166027, 199120, 204796, 104151, 203535, 131520, 110583, 156295];
const YEARS = Array.from({ length: 15 }, (_, i) => 2012 + i);
// The fields the site shows (see scripts/pull-scorecard.mjs), without the "latest." prefix.
const FIELDS = [
  'admissions.admission_rate.overall', 'admissions.test_requirements',
  'admissions.sat_scores.25th_percentile.critical_reading', 'admissions.sat_scores.75th_percentile.math',
  'admissions.act_scores.25th_percentile.cumulative', 'admissions.act_scores.75th_percentile.cumulative', 'admissions.act_scores.midpoint.cumulative',
  'student.size', 'student.retention_rate.four_year.full_time', 'student.share_firstgeneration',
  'cost.tuition.in_state', 'cost.tuition.out_of_state', 'cost.attendance.academic_year',
  'cost.avg_net_price.public', 'cost.avg_net_price.private',
  'cost.net_price.public.by_income_level.0-30000', 'cost.net_price.private.by_income_level.0-30000',
  'completion.rate_suppressed.four_year', 'completion.completion_rate_4yr_150nt',
  'earnings.10_yrs_after_entry.median', 'earnings.6_yrs_after_entry.median',
  'aid.median_debt.completers.overall', 'aid.pell_grant_rate'
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(fields) {
  const params = new URLSearchParams({ api_key: KEY, id: IDS.join(','), per_page: '20', fields: ['id', ...fields].join(',') });
  for (let i = 1; i <= 4; i++) {
    const r = await fetch(`${BASE}?${params}`);
    if (r.ok) return (await r.json()).results || [];
    console.warn(`HTTP ${r.status} ${(await r.text()).slice(0, 200)}`);
    await sleep(3000 * i);
  }
  return null;
}
const out = { probedAt: new Date().toISOString(), schools: IDS, fields: {} };
for (const f of FIELDS) {
  const res = await get([`latest.${f}`, ...YEARS.map((y) => `${y}.${f}`)]);
  await sleep(500);
  if (!res) { out.fields[f] = { error: 'request failed' }; continue; }
  const have = res.filter((r) => r[`latest.${f}`] != null);
  // For each year: how many schools have a value, and how many of those equal "latest".
  const byYear = {};
  for (const y of YEARS) {
    const withVal = have.filter((r) => r[`${y}.${f}`] != null);
    byYear[y] = { n: withVal.length, same: withVal.filter((r) => r[`${y}.${f}`] === r[`latest.${f}`]).length };
  }
  const match = YEARS.filter((y) => byYear[y].n > 0 && byYear[y].same === byYear[y].n && byYear[y].n === have.length);
  out.fields[f] = { schoolsWithLatest: have.length, year: match.length ? Math.max(...match) : null, allMatchingYears: match, byYear };
  console.log(f, '->', out.fields[f].year, JSON.stringify(match));
}
await mkdir('probe', { recursive: true });
await writeFile('probe/scorecard-years.json', JSON.stringify(out, null, 1));

if (process.argv.includes('--write')) {
  // Site label -> the field whose year it takes.
  const MAP = {
    admissions: 'admissions.admission_rate.overall', enrollment: 'student.size', retention: 'student.retention_rate.four_year.full_time',
    cost: 'cost.attendance.academic_year', netPrice: 'cost.avg_net_price.private', completion: 'completion.rate_suppressed.four_year',
    earnings: 'earnings.10_yrs_after_entry.median', debt: 'aid.median_debt.completers.overall', pell: 'aid.pell_grant_rate',
    firstGeneration: 'student.share_firstgeneration'
  };
  const FILE = 'data/scorecard/data-years.json';
  const prev = JSON.parse(await readFile(FILE, 'utf8'));
  const years = { ...prev.years }, kept = [];
  for (const [k, f] of Object.entries(MAP)) {
    const y = out.fields[f]?.year;
    if (y) years[k] = y; else kept.push(k);
  }
  const changed = JSON.stringify(years) !== JSON.stringify(prev.years);
  // probedAt only moves when a year changes, so an unchanged week doesn't make a commit.
  const next = { ...prev, probedAt: changed ? out.probedAt.slice(0, 10) : prev.probedAt, years };
  await writeFile(FILE, JSON.stringify(next, null, 1) + '\n');
  console.log(changed ? `data years changed: ${JSON.stringify(years)}` : 'data years unchanged');
  if (kept.length) console.warn(`kept the previous year for: ${kept.join(', ')} (no year matched "latest")`);
}
