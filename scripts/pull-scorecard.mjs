// Pulls every in-scope four-year school from the College Scorecard API,
// normalizes the fields the site uses, and writes a dated snapshot.
//
//   SCORECARD_API_KEY=... node scripts/pull-scorecard.mjs
//
// Outputs:
//   data/scorecard/latest.json            normalized schools used by the site build
//   data/scorecard/snapshots/YYYY-MM-DD.json  the same data, kept for history
//   data/scorecard/report.md              coverage report + diff vs the previous pull
//   tmp/scorecard-raw.json                full API response (uploaded as a workflow artifact, not committed)

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const KEY = process.env.SCORECARD_API_KEY;
if (!KEY) {
  console.error('Missing SCORECARD_API_KEY');
  process.exit(1);
}

const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
const PER_PAGE = 100;
// Whole objects keep us safe from guessing exact field names; we normalize below.
const FIELDS = [
  'id',
  'ope8_id',
  'school',
  'location',
  'latest.admissions',
  'latest.cost',
  'latest.student.size',
  'latest.student.retention_rate',
  'latest.student.share_firstgeneration',
  'latest.completion',
  'latest.earnings',
  'latest.aid',
  'latest.repayment'
].join(',');

// Scope: currently operating schools whose predominant degree is bachelor's (3) or graduate (4).
const FILTERS = {
  'school.degrees_awarded.predominant': '3,4',
  'school.operating': '1'
};

// 50 states + DC (territories come later).
const STATES = new Set(('AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY').split(' '));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getPage(page) {
  const params = new URLSearchParams({ api_key: KEY, per_page: String(PER_PAGE), page: String(page), fields: FIELDS, ...FILTERS });
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(`${BASE}?${params}`);
    if (res.ok) return res.json();
    const body = await res.text();
    console.warn(`page ${page} attempt ${attempt}: HTTP ${res.status} ${body.slice(0, 300)}`);
    if (res.status === 429 || res.status >= 500) { await sleep(5000 * attempt); continue; }
    throw new Error(`Scorecard API error ${res.status}: ${body.slice(0, 500)}`);
  }
  throw new Error(`Scorecard API kept failing on page ${page}`);
}

// Flatten nested objects into dot paths so we read either response shape the same way.
function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, path, out);
    else out[path] = v;
  }
  return out;
}

const pick = (flat, ...paths) => {
  for (const p of paths) {
    const v = flat[p];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  return null;
};
const num = (v) => (v === null || v === undefined || v === '' || Number.isNaN(Number(v)) ? null : Number(v));

const OWNERSHIP = { 1: 'public', 2: 'private_nonprofit', 3: 'private_for_profit' };
// IPEDS locale codes: 11-13 city, 21-23 suburb, 31-33 town, 41-43 rural
const localeSetting = (code) => {
  const c = num(code);
  if (!c) return null;
  if (c < 20) return 'city';
  if (c < 30) return 'suburb';
  if (c < 40) return 'town';
  return 'rural';
};
// IPEDS ADMCON7 (test scores): 1 required, 2 recommended, 3 neither, 5 considered but not required
const TEST_POLICY = { 1: 'required', 2: 'recommended', 3: 'not_considered', 5: 'considered_not_required' };

const INCOME_BANDS = ['0-30000', '30001-48000', '48001-75000', '75001-110000', '110001-plus'];

function normalize(raw) {
  const f = flatten(raw);
  const ownership = OWNERSHIP[num(pick(f, 'school.ownership'))] ?? null;
  const sector = ownership === 'public' ? 'public' : 'private';
  const netPriceByIncome = {};
  for (const band of INCOME_BANDS) {
    netPriceByIncome[band] = num(pick(f, `latest.cost.net_price.${sector}.by_income_level.${band}`));
  }
  return {
    id: num(raw.id ?? f.id),
    name: pick(f, 'school.name'),
    alias: pick(f, 'school.alias'),
    city: pick(f, 'school.city'),
    state: pick(f, 'school.state'),
    zip: pick(f, 'school.zip'),
    url: pick(f, 'school.school_url'),
    priceCalculatorUrl: pick(f, 'school.price_calculator_url'),
    lat: num(pick(f, 'location.lat')),
    lon: num(pick(f, 'location.lon')),
    ownership,
    setting: localeSetting(pick(f, 'school.locale')),
    localeCode: num(pick(f, 'school.locale')),
    carnegieSizeSetting: num(pick(f, 'school.carnegie_size_setting')),
    religiousAffiliation: num(pick(f, 'school.religious_affiliation')),
    menOnly: num(pick(f, 'school.men_only')) === 1,
    womenOnly: num(pick(f, 'school.women_only')) === 1,
    onlineOnly: num(pick(f, 'school.online_only')) === 1,
    hbcu: num(pick(f, 'school.minority_serving.historically_black')) === 1,
    tribalCollege: num(pick(f, 'school.minority_serving.tribal')) === 1,
    predominantDegree: num(pick(f, 'school.degrees_awarded.predominant')),
    undergrads: num(pick(f, 'latest.student.size')),
    admitRate: num(pick(f, 'latest.admissions.admission_rate.overall')),
    openAdmission: num(pick(f, 'school.open_admissions_policy', 'latest.admissions.open_admissions_policy')) === 1,
    testPolicy: TEST_POLICY[num(pick(f, 'latest.admissions.test_requirements'))] ?? null,
    sat: {
      readingP25: num(pick(f, 'latest.admissions.sat_scores.25th_percentile.critical_reading')),
      readingP75: num(pick(f, 'latest.admissions.sat_scores.75th_percentile.critical_reading')),
      mathP25: num(pick(f, 'latest.admissions.sat_scores.25th_percentile.math')),
      mathP75: num(pick(f, 'latest.admissions.sat_scores.75th_percentile.math')),
      average: num(pick(f, 'latest.admissions.sat_scores.average.overall'))
    },
    act: {
      p25: num(pick(f, 'latest.admissions.act_scores.25th_percentile.cumulative')),
      p75: num(pick(f, 'latest.admissions.act_scores.75th_percentile.cumulative')),
      midpoint: num(pick(f, 'latest.admissions.act_scores.midpoint.cumulative'))
    },
    tuitionInState: num(pick(f, 'latest.cost.tuition.in_state')),
    tuitionOutOfState: num(pick(f, 'latest.cost.tuition.out_of_state')),
    costOfAttendance: num(pick(f, 'latest.cost.attendance.academic_year')),
    avgNetPrice: num(pick(f, `latest.cost.avg_net_price.${sector}`, 'latest.cost.avg_net_price.overall')),
    netPriceByIncome,
    gradRate: num(pick(f, 'latest.completion.rate_suppressed.four_year', 'latest.completion.completion_rate_4yr_150nt', 'latest.completion.rate_suppressed.overall')),
    retentionRate: num(pick(f, 'latest.student.retention_rate.four_year.full_time', 'latest.student.retention_rate_suppressed.four_year.full_time')),
    medianEarnings10yr: num(pick(f, 'latest.earnings.10_yrs_after_entry.median')),
    medianEarnings6yr: num(pick(f, 'latest.earnings.6_yrs_after_entry.median')),
    medianDebt: num(pick(f, 'latest.aid.median_debt.completers.overall', 'latest.aid.median_debt_suppressed.completers.overall')),
    pellRate: num(pick(f, 'latest.aid.pell_grant_rate')),
    firstGenShare: num(pick(f, 'latest.student.share_firstgeneration'))
  };
}

const slugify = (s) => s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function assignSlugs(schools) {
  const byName = new Map();
  for (const s of schools) {
    const base = slugify(s.name || `school-${s.id}`);
    byName.set(base, [...(byName.get(base) || []), s]);
  }
  for (const [base, group] of byName) {
    if (group.length === 1) { group[0].slug = base; continue; }
    const byState = new Map();
    for (const s of group) {
      const st = `${base}-${(s.state || '').toLowerCase()}`;
      byState.set(st, [...(byState.get(st) || []), s]);
    }
    for (const [st, g2] of byState) {
      if (g2.length === 1) { g2[0].slug = st; continue; }
      for (const s of g2) s.slug = `${st}-${slugify(s.city || String(s.id))}`;
    }
  }
}

function coverage(schools) {
  const rows = [];
  const flat = schools.map((s) => flatten(s));
  const keys = Object.keys(flat[0] || {}).filter((k) => !['slug'].includes(k));
  for (const k of keys) {
    const have = flat.filter((f) => f[k] !== null && f[k] !== undefined && f[k] !== false).length;
    rows.push([k, have, Math.round((100 * have) / schools.length)]);
  }
  return rows;
}

function diff(prev, next) {
  const prevById = new Map(prev.map((s) => [s.id, s]));
  const nextById = new Map(next.map((s) => [s.id, s]));
  const added = next.filter((s) => !prevById.has(s.id)).map((s) => s.name);
  const removed = prev.filter((s) => !nextById.has(s.id)).map((s) => s.name);
  let changed = 0;
  for (const s of next) {
    const p = prevById.get(s.id);
    if (p && JSON.stringify({ ...p, slug: 0 }) !== JSON.stringify({ ...s, slug: 0 })) changed++;
  }
  return { added, removed, changed };
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const raw = [];
  let page = 0, total = null;
  while (true) {
    const data = await getPage(page);
    total ??= data.metadata?.total;
    const results = data.results || [];
    raw.push(...results);
    console.log(`page ${page}: ${results.length} schools (${raw.length}/${total ?? '?'})`);
    if (results.length < PER_PAGE) break;
    page++;
    await sleep(400);
  }

  const schools = raw.map(normalize)
    .filter((s) => s.id && s.name && STATES.has(s.state))
    .sort((a, b) => a.name.localeCompare(b.name));
  assignSlugs(schools);

  await mkdir('data/scorecard/snapshots', { recursive: true });
  await mkdir('tmp', { recursive: true });

  let prev = [];
  if (existsSync('data/scorecard/latest.json')) {
    prev = JSON.parse(await readFile('data/scorecard/latest.json', 'utf8')).schools || [];
  }

  const out = {
    source: 'U.S. Department of Education, College Scorecard',
    sourceUrl: 'https://collegescorecard.ed.gov/data/',
    pulledAt: new Date().toISOString(),
    scope: 'Currently operating schools in the 50 states and DC whose predominant degree is bachelor\'s or graduate',
    count: schools.length,
    schools
  };
  await writeFile('tmp/scorecard-raw.json', JSON.stringify(raw));
  if (prev.length && JSON.stringify(prev) === JSON.stringify(schools)) {
    console.log('No changes since the last pull; leaving data files as they are.');
    return;
  }
  const json = JSON.stringify(out, null, 1);
  await writeFile('data/scorecard/latest.json', json);
  await writeFile(`data/scorecard/snapshots/${today}.json`, json);

  // A sample of every raw field name for one well-known school, so field mapping can be checked.
  const sample = raw.find((r) => (flatten(r)['school.name'] || '').startsWith('University of North Carolina at Chapel Hill')) || raw[0];
  const sampleFlat = flatten(sample);
  await writeFile('data/scorecard/raw-field-sample.json', JSON.stringify(
    Object.fromEntries(Object.entries(sampleFlat).filter(([, v]) => v !== null).sort()), null, 1));

  const d = diff(prev, schools);
  const cov = coverage(schools);
  const report = [
    `# Scorecard pull — ${today}`,
    '',
    `- API total matching filters: ${total}`,
    `- Schools kept (50 states + DC): ${schools.length}`,
    `- Compared with previous pull: ${d.added.length} added, ${d.removed.length} removed, ${d.changed} changed`,
    (d.added.length && prev.length) ? `- Added: ${d.added.slice(0, 50).join('; ')}` : false,
    d.removed.length ? `- Removed: ${d.removed.slice(0, 50).join('; ')}` : false,
    '',
    '## Field coverage',
    '',
    '| Field | Schools with a value | % |',
    '| --- | --- | --- |',
    ...cov.map(([k, n, p]) => `| ${k} | ${n} | ${p}% |`)
  ].filter((l) => l !== false).join('\n');
  await writeFile('data/scorecard/report.md', report + '\n');
  console.log(report);
}

main().catch((err) => { console.error(err); process.exit(1); });
