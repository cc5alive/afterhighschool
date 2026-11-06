// Pulls certificate-focused schools (trade, technical and career schools) and two-year colleges
// from the College Scorecard API, with each school's programs, and writes data/trade/latest.json
// plus a coverage report. Same source and key as scripts/pull-scorecard.mjs.
//
//   SCORECARD_API_KEY=... node scripts/pull-trade.mjs
//
// Scope: currently operating schools in the 50 states + DC whose predominant award is a
// certificate (1) or an associate degree (2).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const KEY = process.env.SCORECARD_API_KEY;
if (!KEY) { console.error('Missing SCORECARD_API_KEY'); process.exit(1); }

const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
const PER_PAGE = 50;
const FIELDS = ['id', 'school', 'location', 'latest.cost', 'latest.student.size', 'latest.completion', 'latest.earnings', 'latest.aid', 'latest.programs.cip_4_digit'].join(',');
const STATES = new Set(('AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY').split(' '));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getPage(page) {
  const params = new URLSearchParams({ api_key: KEY, per_page: String(PER_PAGE), page: String(page), fields: FIELDS,
    'school.degrees_awarded.predominant': '1,2', 'school.operating': '1' });
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(`${BASE}?${params}`);
    if (res.ok) return res.json();
    const body = await res.text();
    console.warn(`page ${page} attempt ${attempt}: HTTP ${res.status} ${body.slice(0, 200)}`);
    if (res.status === 429 || res.status >= 500) { await sleep(5000 * attempt); continue; }
    throw new Error(`Scorecard API error ${res.status}`);
  }
  throw new Error(`Scorecard API kept failing on page ${page}`);
}

function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, path, out);
    else out[path] = v;
  }
  return out;
}
const pick = (flat, ...paths) => { for (const p of paths) { const v = flat[p]; if (v !== undefined && v !== null && v !== '') return v; } return null; };
const num = (v) => (v === null || v === undefined || v === '' || Number.isNaN(Number(v)) ? null : Number(v));
const OWNERSHIP = { 1: 'public', 2: 'private_nonprofit', 3: 'private_for_profit' };
const localeSetting = (code) => { const c = num(code); if (!c) return null; return c < 20 ? 'city' : c < 30 ? 'suburb' : c < 40 ? 'town' : 'rural'; };
const INCOME_BANDS = ['0-30000', '30001-48000', '48001-75000', '75001-110000', '110001-plus'];

// National medians per program type and credential level (the same for every school), kept once.
const national = {};

function program(p) {
  const g = (path) => num(path.split('.').reduce((o, k) => (o == null ? o : o[k]), p));
  const key = `${p.code}-${p.credential?.level}`;
  if (!national[key]) {
    const n1 = g('earnings.1_yr.overall_median_earnings_national'), n5 = g('earnings.5_yr.overall_median_earnings_national');
    if (n1 || n5) national[key] = { title: p.title?.replace(/\.$/, ''), level: p.credential?.level, earn1: n1, earn5: n5,
      count1: g('earnings.1_yr.working_not_enrolled.overall_count_national') };
  }
  return {
    cip: p.code, title: (p.title || '').replace(/\.$/, ''), level: p.credential?.level ?? null,
    awards: g('counts.ipeds_awards2') ?? g('counts.ipeds_awards1'),
    earn1: g('earnings.1_yr.overall_median_earnings'), earn5: g('earnings.5_yr.overall_median_earnings'),
    debt: g('debt.staff_grad_plus.all.eval_inst.median') ?? g('debt.staff_grad_plus.all.all_inst.median'),
    distance: g('distance')
  };
}

function normalize(raw) {
  const f = flatten({ ...raw, 'latest.programs.cip_4_digit': undefined });
  const ownership = OWNERSHIP[num(pick(f, 'school.ownership'))] ?? null;
  const sector = ownership === 'public' ? 'public' : 'private';
  const netPriceByIncome = {};
  for (const band of INCOME_BANDS) netPriceByIncome[band] = num(pick(f, `latest.cost.net_price.${sector}.by_income_level.${band}`));
  const progs = raw['latest.programs.cip_4_digit'] || raw.latest?.programs?.cip_4_digit || [];
  return {
    id: num(raw.id ?? f.id),
    name: pick(f, 'school.name'), alias: pick(f, 'school.alias'),
    city: pick(f, 'school.city'), state: pick(f, 'school.state'), zip: pick(f, 'school.zip'),
    url: pick(f, 'school.school_url'), priceCalculatorUrl: pick(f, 'school.price_calculator_url'),
    lat: num(pick(f, 'location.lat')), lon: num(pick(f, 'location.lon')),
    ownership, setting: localeSetting(pick(f, 'school.locale')),
    predominantDegree: num(pick(f, 'school.degrees_awarded.predominant')),
    highestDegree: num(pick(f, 'school.degrees_awarded.highest')),
    onlineOnly: num(pick(f, 'school.online_only')) === 1,
    students: num(pick(f, 'latest.student.size')),
    avgNetPrice: num(pick(f, `latest.cost.avg_net_price.${sector}`, 'latest.cost.avg_net_price.overall')),
    netPriceByIncome,
    tuitionInState: num(pick(f, 'latest.cost.tuition.in_state', 'latest.cost.tuition.program_year')),
    tuitionOutOfState: num(pick(f, 'latest.cost.tuition.out_of_state')),
    costOfAttendance: num(pick(f, 'latest.cost.attendance.academic_year', 'latest.cost.attendance.program_year')),
    programYearCalendar: pick(f, 'latest.cost.attendance.program_year') != null,
    completionRate: num(pick(f, 'latest.completion.completion_rate_less_than_4yr_150nt', 'latest.completion.rate_suppressed.lt_four_year_150percent',
      'latest.completion.completion_rate_4yr_150nt', 'latest.completion.rate_suppressed.four_year', 'latest.completion.rate_suppressed.overall')),
    // Federal Outcome Measures: where everyone who started here (full- and part-time, first-time or not) stood 8 years later.
    // "transfer" = enrolled at another college without first earning an award here.
    outcomes8yr: (() => {
      const o = Object.fromEntries(['award', 'transfer', 'still_enrolled', 'unknown'].map((k) => [k, num(pick(f, `latest.completion.outcome_percentage.all_students.8yr.${k}`))]));
      return o.award == null && o.transfer == null ? null : { award: o.award, transfer: o.transfer, stillEnrolled: o.still_enrolled, unknown: o.unknown };
    })(),
    medianEarnings6yr: num(pick(f, 'latest.earnings.6_yrs_after_entry.median')),
    medianEarnings10yr: num(pick(f, 'latest.earnings.10_yrs_after_entry.median')),
    shareOver28k6yr: num(pick(f, 'latest.earnings.6_yrs_after_entry.percent_greater_than_28000')),
    medianDebt: num(pick(f, 'latest.aid.median_debt.completers.overall', 'latest.aid.median_debt_suppressed.completers.overall')),
    pellRate: num(pick(f, 'latest.aid.pell_grant_rate')),
    loanRate: num(pick(f, 'latest.aid.federal_loan_rate')),
    programs: progs.map(program).filter((p) => p.cip && p.level != null && p.level <= 3)
  };
}

const slugify = (s) => s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
function assignSlugs(schools) {
  const byName = new Map();
  for (const s of schools) { const b = slugify(s.name || `school-${s.id}`); byName.set(b, [...(byName.get(b) || []), s]); }
  for (const [base, group] of byName) {
    if (group.length === 1) { group[0].slug = base; continue; }
    const byState = new Map();
    for (const s of group) { const st = `${base}-${(s.state || '').toLowerCase()}`; byState.set(st, [...(byState.get(st) || []), s]); }
    for (const [st, g2] of byState) { if (g2.length === 1) { g2[0].slug = st; continue; } for (const s of g2) s.slug = `${st}-${slugify(s.city || String(s.id))}`; }
  }
  // Two campuses with the same name in the same city: add the federal ID so each keeps its own page.
  const seen = new Map();
  for (const s of schools) seen.set(s.slug, (seen.get(s.slug) || 0) + 1);
  for (const s of schools) if (seen.get(s.slug) > 1) s.slug = `${s.slug}-${s.id}`;
}

const pctOf = (n, d) => (d ? `${Math.round((100 * n) / d)}%` : '-');

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const raw = [];
  for (let page = 0; ; page++) {
    const data = await getPage(page);
    const results = data.results || [];
    raw.push(...results.map(normalize));
    console.log(`page ${page}: ${results.length} (${raw.length}/${data.metadata?.total ?? '?'})`);
    if (results.length < PER_PAGE) break;
    await sleep(400);
  }
  const schools = raw.filter((s) => s.id && s.name && STATES.has(s.state)).sort((a, b) => a.name.localeCompare(b.name));
  assignSlugs(schools);

  await mkdir('data/trade', { recursive: true });
  const out = {
    source: 'U.S. Department of Education, College Scorecard', sourceUrl: 'https://collegescorecard.ed.gov/data/',
    pulledAt: new Date().toISOString(),
    scope: 'Currently operating schools in the 50 states and DC whose predominant award is a certificate or an associate degree',
    count: schools.length, national, schools
  };
  let prev = null;
  if (existsSync('data/trade/latest.json')) prev = JSON.parse(await readFile('data/trade/latest.json', 'utf8'));
  if (prev && JSON.stringify(prev.schools) === JSON.stringify(schools)) { console.log('No changes.'); return; }
  await writeFile('data/trade/latest.json', JSON.stringify(out));

  // Coverage report: how complete is the data for these schools and their programs?
  const by = (pd) => schools.filter((s) => s.predominantDegree === pd);
  const lines = [`# Trade and two-year school pull — ${today}`, '', `${schools.length} schools.`, ''];
  for (const [label, group] of [['Certificate-focused (predominant award: certificate)', by(1)], ['Two-year colleges (predominant award: associate)', by(2)]]) {
    const n = group.length;
    const has = (k) => group.filter((s) => s[k] != null).length;
    const progs = group.flatMap((s) => s.programs);
    lines.push(`## ${label}: ${n}`, '',
      '| Field | Schools with it |', '| --- | --- |',
      ...['students', 'avgNetPrice', 'tuitionInState', 'costOfAttendance', 'completionRate', 'outcomes8yr', 'medianEarnings6yr', 'medianEarnings10yr', 'medianDebt', 'url'].map((k) => `| ${k} | ${has(k)} (${pctOf(has(k), n)}) |`),
      `| has at least one program | ${group.filter((s) => s.programs.length).length} (${pctOf(group.filter((s) => s.programs.length).length, n)}) |`, '',
      `Programs: ${progs.length}. With school-level 1-year earnings: ${progs.filter((p) => p.earn1).length} (${pctOf(progs.filter((p) => p.earn1).length, progs.length)}). With a national median for the program type: ${progs.filter((p) => national[`${p.cip}-${p.level}`]).length} (${pctOf(progs.filter((p) => national[`${p.cip}-${p.level}`]).length, progs.length)}).`, '');
    const fam = {};
    for (const p of progs) { const k = p.cip.slice(0, 2); fam[k] = (fam[k] || 0) + 1; }
    lines.push('Programs by 2-digit CIP family: ' + Object.entries(fam).sort((a, b) => b[1] - a[1]).slice(0, 25).map(([k, v]) => `${k}: ${v}`).join(', '), '');
    const own = {}; for (const s of group) own[s.ownership] = (own[s.ownership] || 0) + 1;
    lines.push('Ownership: ' + Object.entries(own).map(([k, v]) => `${k} ${v}`).join(', '), '');
  }
  await writeFile('data/trade/report.md', lines.join('\n') + '\n');
  console.log(lines.join('\n'));
}
main().catch((e) => { console.error(e); process.exit(1); });
