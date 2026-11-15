// Majors: bachelor's programs at four-year colleges, from College Scorecard's field-of-study data
// (data/majors/latest.json, pulled by scripts/pull-majors.mjs). Powers /majors, /majors/<major>,
// /majors/<major>/<state> and the "Bachelor's degrees" section on each college page.
// Schools are always listed A to Z, never ranked.
import data from '../../data/majors/latest.json';
import { schools, STATE_NAMES, stateSlug } from './data.js';

export const majorsPulledDate = new Date(data.pulledAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' });
export const majorsSourceUrl = data.sourceUrl;
export const programTitle = (cip) => data.titles[cip] || cip;

// A state page needs at least this many colleges, so it says something a single college page doesn't.
const MIN_STATE = 3;

// The majors with their own pages. Names are what students search for; cips are the federal program codes.
export const MAJORS = [
  { slug: 'nursing', name: 'Nursing', cips: ['5138'] },
  { slug: 'computer-science', name: 'Computer science', cips: ['1107', '1101'], note: 'Colleges report computer science under two federal program codes, "Computer Science" and "Computer and Information Sciences, General". Both are included, and the table shows which one each college used.' },
  { slug: 'business', name: 'Business administration', cips: ['5202'] },
  { slug: 'psychology', name: 'Psychology', cips: ['4201'] },
  { slug: 'biology', name: 'Biology', cips: ['2601'] },
  { slug: 'accounting', name: 'Accounting', cips: ['5203'] },
  { slug: 'finance', name: 'Finance', cips: ['5208'] },
  { slug: 'mechanical-engineering', name: 'Mechanical engineering', cips: ['1419'] },
  { slug: 'electrical-engineering', name: 'Electrical engineering', cips: ['1410'] },
  { slug: 'civil-engineering', name: 'Civil engineering', cips: ['1408'] },
  { slug: 'teaching', name: 'Teaching', cips: ['1312'], note: 'This is the federal program "Teacher Education and Professional Development, Specific Levels and Methods", which covers degrees in teaching a grade level, such as elementary or early childhood education. Degrees in teaching one subject are counted separately and aren\'t included.' },
  { slug: 'communication', name: 'Communication', cips: ['0901'] },
  { slug: 'criminal-justice', name: 'Criminal justice', cips: ['4301'] },
  { slug: 'economics', name: 'Economics', cips: ['4506'] },
  { slug: 'political-science', name: 'Political science', cips: ['4510'] },
  { slug: 'kinesiology', name: 'Kinesiology and exercise science', cips: ['3105'] },
  { slug: 'social-work', name: 'Social work', cips: ['4407'] },
  { slug: 'public-health', name: 'Public health', cips: ['5122'] }
];
export const majorBySlug = new Map(MAJORS.map((m) => [m.slug, m]));
const majorByCip = new Map(MAJORS.flatMap((m) => m.cips.map((c) => [c, m])));
export const majorForCip = (cip) => majorByCip.get(cip) || null;

const toProgram = ([cip, awards, earn1, earn5, debt]) => ({ cip, title: programTitle(cip), awards, earn1, earn5, debt });

// Every listed college's bachelor's programs, A to Z by program name.
const byId = new Map(schools.map((s) => [String(s.id), s]));
export function programsFor(s) {
  return (data.schools[String(s.id)] || []).map(toProgram).sort((a, b) => a.title.localeCompare(b.title));
}

// For one major: each listed college that awarded it, with one row per program code.
function rowsFor(m) {
  const out = [];
  for (const [id, rows] of Object.entries(data.schools)) {
    const s = byId.get(id);
    if (!s) continue;
    for (const r of rows) if (m.cips.includes(r[0])) out.push({ s, ...toProgram(r) });
  }
  return out.sort((a, b) => a.s.name.localeCompare(b.s.name) || a.cip.localeCompare(b.cip));
}

const range = (vals) => { const v = vals.filter((x) => x != null); return v.length ? [Math.min(...v), Math.max(...v)] : null; };

const summaries = new Map();
export function majorSummary(m) {
  if (summaries.has(m.slug)) return summaries.get(m.slug);
  const rows = rowsFor(m);
  const byState = new Map();
  for (const r of rows) byState.set(r.s.state, [...(byState.get(r.s.state) || []), r]);
  const states = [...byState].map(([code, list]) => ({
    code, name: STATE_NAMES[code], slug: stateSlug(code), rows: list,
    colleges: new Set(list.map((r) => r.s.slug)).size,
    awards: list.reduce((a, r) => a + (r.awards || 0), 0)
  })).sort((a, b) => a.name.localeCompare(b.name));
  const out = {
    m, rows, states,
    pages: states.filter((st) => st.colleges >= MIN_STATE),
    small: states.filter((st) => st.colleges < MIN_STATE),
    colleges: new Set(rows.map((r) => r.s.slug)).size,
    awards: rows.reduce((a, r) => a + (r.awards || 0), 0),
    national: m.cips.map((c) => ({ cip: c, title: programTitle(c), ...(data.national[c] || {}) })),
    earn1Range: range(rows.map((r) => r.earn1))
  };
  summaries.set(m.slug, out);
  return out;
}

export const statePages = () => MAJORS.flatMap((m) => majorSummary(m).pages.map((st) => ({ m, st })));
export { range as valueRange };
