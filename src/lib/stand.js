// "Where you'd stand": shared logic for the school-page tool and the My list page.
// standData() runs at build time; the rest runs in the browser. No percent chances anywhere:
// we only say where a student's numbers fall among a school's enrolled first-year students.

const GPA_KEYS = ['gpa_400_pct', 'gpa_375_pct', 'gpa_350_pct', 'gpa_325_pct', 'gpa_300_pct', 'gpa_250_pct', 'gpa_200_pct', 'gpa_100_pct', 'gpa_below1_pct'];
// Factors beyond grades and scores that a school can rate "very important".
const VERY = {
  factor_essay: 'essays', factor_recommendations: 'recommendations', factor_interview: 'the interview', factor_extracurriculars: 'activities',
  factor_talent: 'a talent or ability', factor_character: 'character and personal qualities'
};

// Build-time: the figures the tool needs for one school. s = enriched school (data.js), c = published CDS (or undefined).
export function standData(s, c) {
  const v = c?.values || {};
  const val = (k) => (v[k] != null ? v[k] : null);
  const gpa = GPA_KEYS.filter((k) => v[k] != null).length >= 2 ? GPA_KEYS.map((k) => v[k] ?? 0) : null;
  const admitCds = v.admitted_total && v.applied_total ? v.admitted_total / v.applied_total : null;
  return {
    name: s.name,
    // Test ranges come from the school record (see testScores in data.js), so the tool uses exactly
    // the figures the page shows. No SAT total range without a CDS: only Scorecard's section ranges.
    sat: s.satRange, satFrom: s.satFrom, satSections: s.satSections,
    act: s.actRange, actFrom: s.actFrom,
    satSubmit: s.satSubmit, actSubmit: s.actSubmit,
    gpa, gpaSubmit: val('gpa_submit_pct'), gpaAvg: val('gpa_average'),
    admit: admitCds ?? s.admitRate ?? null, admitFrom: admitCds != null ? 'cds' : s.admitRate != null ? 'fed' : null,
    ed: v.ed_applied > 0 && v.ed_admitted != null ? [v.ed_admitted, v.ed_applied] : null,
    veryImportant: Object.keys(VERY).filter((k) => v[k] === 'Very Important').map((k) => VERY[k]),
    gpaImportance: v.factor_gpa || null,
    cdsYear: c?.cdsYear || null, cdsUrl: c?.source?.url || null
  };
}

// Browser helpers.
export const GPA_LABELS = ['4.0', '3.75–3.99', '3.50–3.74', '3.25–3.49', '3.00–3.24', '2.50–2.99', '2.00–2.49', '1.00–1.99', 'below 1.0'];
export const gpaBucket = (g) => (g >= 4 ? 0 : g >= 3.75 ? 1 : g >= 3.5 ? 2 : g >= 3.25 ? 3 : g >= 3 ? 4 : g >= 2.5 ? 5 : g >= 2 ? 6 : g >= 1 ? 7 : 8);
export const pctText = (x) => (x > 0 && x < 1 ? '<1%' : `${Math.round(x)}%`);
export const num = (t, lo, hi) => { const x = Number(String(t ?? '').trim()); return String(t ?? '').trim() !== '' && Number.isFinite(x) && x >= lo && x <= hi ? x : null; };

// Where a test score falls against [p25, p50|null, p75].
export function placeScore(score, [p25, p50, p75]) {
  if (score < p25) return { tone: 'below', short: 'Below the middle half', text: 'below the middle half: fewer than 1 in 4 students who sent scores had a score this low' };
  if (score >= p75) return { tone: 'above', short: 'Top quarter', text: 'in the top quarter of students who sent scores' };
  if (p50 != null) return score < p50
    ? { tone: 'mid', short: 'Middle half, below median', text: 'in the middle half, below the median' }
    : { tone: 'mid', short: 'Middle half, above median', text: 'in the middle half, at or above the median' };
  return { tone: 'mid', short: 'Middle half', text: 'in the middle half of students who sent scores' };
}

// Where a GPA falls in the school's GPA spread (buckets of percentages, top range first).
export function placeGpa(g, buckets) {
  const b = gpaBucket(g);
  const higher = buckets.slice(0, b).reduce((a, x) => a + x, 0);
  const same = buckets[b];
  const lower = Math.max(0, 100 - higher - same);
  const tone = b === 0 || higher < 25 ? 'above' : higher >= 75 ? 'below' : 'mid';
  const short = b === 0 ? `Top range (${pctText(same)} had 4.0+)` : `${pctText(higher)} had a higher GPA`;
  return { b, higher, same, lower, tone, short };
}

// Profile: the numbers a student entered, kept in this browser only.
const PROFILE = 'ahs-profile';
export const loadProfile = () => { try { return JSON.parse(localStorage.getItem(PROFILE) || '{}') || {}; } catch { return {}; } };
export const saveProfile = (p) => { try { localStorage.setItem(PROFILE, JSON.stringify(p)); } catch { /* private mode */ } };
