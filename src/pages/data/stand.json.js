import { schools, cds } from '../../lib/data.js';
import { standData } from '../../lib/stand.js';
import { tradeSchools, KIND_LABEL } from '../../lib/trade-data.js';

// Everything the My list page needs, per listed school: name, place, a few plain facts, and the
// "Where you'd stand" figures (school's own report when we have it, federal data otherwise).
export function GET() {
  const out = {};
  for (const s of schools) {
    const x = standData(s, cds.get(s.slug));
    // Only what the list shows, to keep the file small.
    const d = { admit: x.admit };
    if (x.sat) { d.sat = x.sat; d.satFrom = x.satFrom; } else if (x.satSections) d.satSec = [...x.satSections.reading, ...x.satSections.math];
    if (x.act) { d.act = x.act; d.actFrom = x.actFrom; }
    if (x.gpa) d.gpa = x.gpa;
    if (x.gpaAvg != null) d.gpaAvg = x.gpaAvg;
    out[s.slug] = { n: s.name, c: s.city, st: s.state, np: s.avgNetPrice ?? null, gr: s.gradRate ?? null, ...(s.openAdmission ? { oa: 1 } : {}), d };
  }
  // Trade, career and two-year schools are saved as "t:<slug>".
  for (const s of tradeSchools) {
    out[`t:${s.slug}`] = { t: 1, n: s.name, c: s.city, st: s.state, k: KIND_LABEL[s.kind], np: s.avgNetPrice ?? null, cr: s.completionRate ?? null, earn: s.medianEarnings6yr ?? null };
  }
  return new Response(JSON.stringify(out), { headers: { 'content-type': 'application/json; charset=utf-8' } });
}
