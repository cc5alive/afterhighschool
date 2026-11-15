// Pulls bachelor's-degree programs (majors) for four-year colleges from the College Scorecard API
// and writes data/majors/latest.json. Same source and key as scripts/pull-scorecard.mjs.
//
//   SCORECARD_API_KEY=... node scripts/pull-majors.mjs
//
// For each college: every bachelor's program (by 4-digit CIP code) that awarded degrees, with the
// number awarded, graduates' median earnings 1 and 5 years after finishing, and median federal debt,
// where the Department of Education reports them. Also the national medians for each program.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const KEY = process.env.SCORECARD_API_KEY;
if (!KEY) { console.error('Missing SCORECARD_API_KEY'); process.exit(1); }

const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
const PER_PAGE = 50;
const FIELDS = ['id', 'school.name', 'school.state', 'latest.programs.cip_4_digit'].join(',');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const num = (v) => (v === null || v === undefined || v === '' || Number.isNaN(Number(v)) ? null : Number(v));

async function getPage(page) {
  const params = new URLSearchParams({ api_key: KEY, per_page: String(PER_PAGE), page: String(page), fields: FIELDS,
    'school.degrees_awarded.predominant': '3', 'school.operating': '1' });
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

// Program titles and national medians, kept once per program code.
const titles = {};
const national = {};

// One program as a compact row: [cip, awards, earn1, earn5, debt].
function row(p) {
  const g = (path) => num(path.split('.').reduce((o, k) => (o == null ? o : o[k]), p));
  if (!titles[p.code]) titles[p.code] = (p.title || '').replace(/\.$/, '');
  if (!national[p.code]) {
    const n1 = g('earnings.1_yr.overall_median_earnings_national'), n5 = g('earnings.5_yr.overall_median_earnings_national');
    if (n1 || n5) national[p.code] = { earn1: n1, earn5: n5 };
  }
  return [p.code, g('counts.ipeds_awards2') ?? g('counts.ipeds_awards1'), g('earnings.1_yr.overall_median_earnings'),
    g('earnings.5_yr.overall_median_earnings'), g('debt.staff_grad_plus.all.eval_inst.median') ?? g('debt.staff_grad_plus.all.all_inst.median')];
}

async function main() {
  const schools = {};
  for (let page = 0; ; page++) {
    const data = await getPage(page);
    const results = data.results || [];
    for (const r of results) {
      const progs = r['latest.programs.cip_4_digit'] || r.latest?.programs?.cip_4_digit || [];
      const rows = progs.filter((p) => p.code && p.credential?.level === 3).map(row).filter((x) => x[1] > 0);
      if (rows.length) schools[r.id] = rows;
    }
    console.log(`page ${page}: ${results.length} (${Object.keys(schools).length} colleges with majors, of ${data.metadata?.total ?? '?'})`);
    if (results.length < PER_PAGE) break;
    await sleep(400);
  }

  await mkdir('data/majors', { recursive: true });
  const out = {
    source: 'U.S. Department of Education, College Scorecard (field of study data)', sourceUrl: 'https://collegescorecard.ed.gov/data/',
    pulledAt: new Date().toISOString(),
    scope: "Bachelor's programs that awarded degrees, at currently operating colleges whose predominant award is a bachelor's degree",
    columns: ['cip', 'awards', 'earn1', 'earn5', 'debt'],
    titles, national, schools
  };
  if (existsSync('data/majors/latest.json')) {
    const prev = JSON.parse(await readFile('data/majors/latest.json', 'utf8'));
    if (JSON.stringify(prev.schools) === JSON.stringify(schools)) { console.log('No changes.'); return; }
  }
  await writeFile('data/majors/latest.json', JSON.stringify(out));

  const rows = Object.values(schools).flat();
  const pct = (n) => `${Math.round((100 * n) / rows.length)}%`;
  const lines = [`# Majors pull — ${out.pulledAt.slice(0, 10)}`, '',
    `${Object.keys(schools).length} colleges, ${rows.length} bachelor's programs, ${Object.keys(titles).length} program types.`, '',
    `With 1-year earnings: ${rows.filter((r) => r[2]).length} (${pct(rows.filter((r) => r[2]).length)}). With 5-year earnings: ${rows.filter((r) => r[3]).length} (${pct(rows.filter((r) => r[3]).length)}). With median debt: ${rows.filter((r) => r[4]).length} (${pct(rows.filter((r) => r[4]).length)}).`, ''];
  const count = {};
  for (const r of rows) count[r[0]] = (count[r[0]] || 0) + 1;
  lines.push('Most common programs: ' + Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([k, v]) => `${k} ${titles[k]} (${v})`).join('; '), '');
  await writeFile('data/majors/report.md', lines.join('\n') + '\n');
  console.log(lines.join('\n'));
}
main().catch((e) => { console.error(e); process.exit(1); });
