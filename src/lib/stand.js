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
    testPolicy: s.testPolicy || null, ownership: s.ownership || null,
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

// ---- Outlook: Reach / Target / Likely -------------------------------------------------------------
// A plain category from a table anyone can check, never a percent chance. It uses two things the
// sources actually give us: the share of applicants a school admits, and where a student's numbers fall
// among the students who enrolled. Everything else (essays, major, residency, hooks) it says it can't see.

// Under this admit rate a school is a reach for every applicant, whatever their numbers.
export const REACH_FOR_ALL = 0.15;
// Admit-rate bands (lowest rate in the band) and the category for numbers below, inside and above the
// middle of enrolled students. Shown on /methodology exactly as it is used here.
export const OUTLOOK_TABLE = [
  { min: 0.15, below: 'reach', mid: 'reach', above: 'target' },
  { min: 0.3, below: 'reach', mid: 'target', above: 'target' },
  { min: 0.5, below: 'reach', mid: 'target', above: 'likely' },
  { min: 0.75, below: 'target', mid: 'likely', above: 'likely' }
];
export const OUTLOOK_LABEL = { 'reach-all': 'Reach for everyone', reach: 'Reach', target: 'Target', likely: 'Likely' };
export const OUTLOOK_MEANS = {
  'reach-all': 'It turns down most applicants whose numbers match its students\', so nobody should count on it.',
  reach: 'More likely a no than a yes. Worth applying if you love it, alongside schools where your odds are better.',
  target: 'A realistic shot, not a sure thing.',
  likely: 'Applicants with numbers like yours usually get in. It still isn\'t a guarantee.'
};

// Which GPA scale a school's report uses, as far as its own numbers show. An average above 4.0 can only
// come from weighted GPAs. An average of 4.0 or less doesn't prove the scale is unweighted.
export const gpaScale = (d) => (d.gpaAvg != null && d.gpaAvg > 4 ? 'weighted' : 'unknown');

export function outlook(d, p) {
  const g = num(p.gpa, 0, 5), sat = num(p.sat, 400, 1600), act = num(p.act, 1, 36);
  const notes = [], gpaNotes = [], tones = [], used = [];
  const required = d.testPolicy === 'required';

  if (g != null && (d.gpa || d.gpaAvg != null)) {
    const weighted = gpaScale(d) === 'weighted';
    if (weighted && g <= 4) gpaNotes.push(`Your GPA isn't counted in this label: ${d.name} reports weighted GPAs, and a GPA of 4.0 or less looks unweighted.`);
    else if (!weighted && g > 4) gpaNotes.push('Your GPA isn\'t counted in this label: it is above 4.0, so it is weighted. Enter your unweighted GPA for a fair comparison.');
    else {
      tones.push(d.gpa ? placeGpa(g, d.gpa).tone : g >= d.gpaAvg + 0.1 ? 'above' : g <= d.gpaAvg - 0.25 ? 'below' : 'mid');
      used.push('GPA');
    }
  }
  for (const [kind, score, range] of [['SAT', sat, d.sat], ['ACT', act, d.act]]) {
    if (score == null || !range) continue;
    const tone = placeScore(score, range).tone;
    if (tone === 'below' && !required) { notes.push(`Your ${kind} is below the range of students who sent scores, but you don't have to send it here.`); continue; }
    tones.push(tone); used.push(kind);
  }

  const blind = `This can't see your essays, recommendations, activities or the major you apply to${d.ownership === 'public' ? ', or whether you\'re in-state (public universities often admit in-state and out-of-state applicants at very different rates)' : ''}. Popular majors like computer science, engineering and nursing can be much harder to get into than the school as a whole.`;
  // Why a GPA was left out only matters where the numbers decide the label.
  const none = { level: null, label: null, means: null, standing: null, used, notes: [...gpaNotes, ...notes], blind };
  if (d.admit == null) return none;
  if (d.admit < REACH_FOR_ALL) {
    // Shown as soon as the student has entered anything: their numbers don't change it.
    if (g == null && sat == null && act == null) return none;
    return { ...none, notes, level: 'reach-all', label: OUTLOOK_LABEL['reach-all'], means: OUTLOOK_MEANS['reach-all'] };
  }
  if (!tones.length) return none;
  // One number below the middle half sets the standing; all of them must be in the top quarter to count as above.
  const standing = tones.includes('below') ? 'below' : tones.every((t) => t === 'above') ? 'above' : 'mid';
  const row = [...OUTLOOK_TABLE].reverse().find((r) => d.admit >= r.min);
  const level = row[standing];
  return { ...none, level, label: OUTLOOK_LABEL[level], means: OUTLOOK_MEANS[level], standing };
}

// Profile: the numbers a student entered, kept in this browser only.
const PROFILE = 'ahs-profile';
export const loadProfile = () => { try { return JSON.parse(localStorage.getItem(PROFILE) || '{}') || {}; } catch { return {}; } };
export const saveProfile = (p) => { try { localStorage.setItem(PROFILE, JSON.stringify(p)); } catch { /* private mode */ } };
