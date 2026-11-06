// Builds data/apprentice/latest.json for the apprenticeship guide from federal sources:
//   - BLS Employment Projections (occupation.xlsx, Table 1.2): employment, growth, openings, median wage,
//     typical education and training, and each occupation's Occupational Outlook Handbook (OOH) page.
//   - BLS Occupational Employment and Wage Statistics (national and state files): pay percentiles.
//   - BLS SOC definitions: what each occupation does.
//   - Each OOH page's "How to Become One" section: the sentences that mention apprenticeship, kept as quotes.
// Runs in GitHub Actions (needs network and the xlsx package). Expects the downloaded files in tmp/apprentice/.
import fs from 'node:fs';
import XLSX from 'xlsx';
import { OCCUPATIONS } from '../src/lib/apprenticeships.js';

const DIR = 'tmp/apprentice';
const UA = 'afterhighschool.me data pull (hello@afterhighschool.me)';
const SOURCES = {
  projections: 'https://www.bls.gov/emp/tables/occupational-projections-and-characteristics.htm',
  wages: 'https://www.bls.gov/oes/tables.htm',
  soc: 'https://www.bls.gov/soc/2018/home.htm',
  finder: 'https://www.apprenticeship.gov/apprenticeship-job-finder',
  states: 'https://www.apprenticeship.gov/data-and-statistics/apprentices-by-state-dashboard'
};
const rows = (file, sheet) => {
  const wb = XLSX.readFile(file);
  return XLSX.utils.sheet_to_json(wb.Sheets[sheet || wb.SheetNames[0]], { header: 1, raw: true, defval: null });
};
const n = (v) => { if (v == null) return null; const s = String(v).replace(/,/g, '').trim(); if (s === '#') return 239200; return /^-?\d+(\.\d+)?$/.test(s) ? Number(s) : null; };
const want = new Set(OCCUPATIONS.map((o) => o.soc));

// Projections (Table 1.2). Employment figures are in thousands.
const ep = {};
const t12 = rows(`${DIR}/occupation.xlsx`, 'Table 1.2');
for (const r of t12.slice(2)) {
  if (!r || !want.has(r[1])) continue;
  const link = String(r[16] || r[15] || '').match(/href="([^"]+)"/)?.[1] || null;
  ep[r[1]] = {
    title: String(r[0]).trim(), employment: n(r[3]) != null ? Math.round(n(r[3]) * 1000) : null,
    changePct: n(r[8]), openings: n(r[10]) != null ? Math.round(n(r[10]) * 1000) : null, medianWage: n(r[11]),
    education: r[12], experience: r[13], training: r[14], ooh: link
  };
}

// Wages: national and by state (May 2025 files).
const wageCols = (hdr) => Object.fromEntries(hdr.map((h, i) => [h, i]));
const nat = {}, states = {};
{
  const r = rows(`${DIR}/national.xlsx`); const c = wageCols(r[0]);
  for (const x of r.slice(1)) if (want.has(x[c.OCC_CODE]) && (x[c.O_GROUP] === 'detailed' || !nat[x[c.OCC_CODE]]))
    nat[x[c.OCC_CODE]] = { employment: n(x[c.TOT_EMP]), p10: n(x[c.A_PCT10]), p25: n(x[c.A_PCT25]), median: n(x[c.A_MEDIAN]), p75: n(x[c.A_PCT75]), p90: n(x[c.A_PCT90]), hourlyOnly: x[c.HOURLY] === true || x[c.HOURLY] === 'TRUE' };
}
{
  const r = rows(`${DIR}/state.xlsx`); const c = wageCols(r[0]);
  for (const x of r.slice(1)) {
    if (!want.has(x[c.OCC_CODE])) continue;
    const st = x[c.PRIM_STATE];
    if (!st || st.length !== 2) continue;
    (states[x[c.OCC_CODE]] ||= {})[st] = { employment: n(x[c.TOT_EMP]), median: n(x[c.A_MEDIAN]), p10: n(x[c.A_PCT10]), p90: n(x[c.A_PCT90]) };
  }
}

// Definitions.
const defs = {};
for (const r of rows(`${DIR}/soc.xlsx`)) if (r && want.has(r[1])) defs[r[1]] = String(r[3] || '').replace(/\s*Excludes .*$/, '').trim();

// OOH "How to Become One": sentences that mention apprenticeship.
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;|&rsquo;/g, '’').replace(/&#8212;|&mdash;/g, '—').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
async function oohQuotes(url) {
  if (!url) return { status: 'no OOH page', quotes: [] };
  try {
    const r = await fetch(url, { headers: { 'user-agent': UA } });
    if (!r.ok) return { status: `HTTP ${r.status}`, quotes: [] };
    const html = await r.text();
    const tab = html.match(/id="tab-4"[\s\S]*?(?=id="tab-5")/)?.[0] || html;
    const text = strip(tab);
    const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z])/).filter((s) => /apprentic/i.test(s) && s.length < 400);
    return { status: 'ok', quotes: sentences.slice(0, 3) };
  } catch (e) { return { status: `error ${e.message}`, quotes: [] }; }
}

const out = [], report = [];
for (const o of OCCUPATIONS) {
  const e = ep[o.soc];
  const q = await oohQuotes(e?.ooh);
  const blsApprenticeship = /apprentice/i.test(e?.training || '');
  const publish = !!e && !!nat[o.soc]?.median && (blsApprenticeship || q.quotes.length > 0);
  report.push(`| ${o.name} | ${o.soc} | ${e ? 'yes' : 'NO'} | ${nat[o.soc]?.median ?? '-'} | ${e?.training ?? '-'} | ${q.status}, ${q.quotes.length} quotes | ${publish ? 'publish' : 'skip'} |`);
  if (!publish) continue;
  out.push({ ...o, definition: defs[o.soc] || null, projections: e, wages: nat[o.soc], states: states[o.soc] || {}, blsApprenticeship, oohQuotes: q.quotes });
  await new Promise((r) => setTimeout(r, 400));
}
fs.mkdirSync('data/apprentice', { recursive: true });
fs.writeFileSync('data/apprentice/latest.json', JSON.stringify({
  pulledAt: new Date().toISOString(), wageYear: 'May 2025', projectionYears: '2025–35', sources: SOURCES, occupations: out
}, null, 1));
fs.writeFileSync('data/apprentice/report.md', ['# Apprenticeship data pull', '', `${out.length} of ${OCCUPATIONS.length} occupations published.`, '',
  '| Occupation | SOC | In projections | National median | BLS typical training | OOH | Result |', '| --- | --- | --- | --- | --- | --- | --- |', ...report].join('\n') + '\n');
console.log(report.join('\n'));
