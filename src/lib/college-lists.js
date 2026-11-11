// College list pages under /colleges/<slug>: one per state, a few topic lists, and low-cost lists
// per state. Shared by the list page and the sitemap. Lists filter by a threshold and never rank;
// the low-cost lists sort by price because that's the question they answer.
import { schools, states } from './data.js';

const n = (v) => v.toLocaleString('en-US');
const byName = (a, b) => a.name.localeCompare(b.name);
const byPrice = (a, b) => a.avgNetPrice - b.avgNetPrice;
const LOW = 15000;

export function collegeLists() {
  const lists = states.map((st) => ({
    slug: st.slug,
    title: `Colleges in ${st.name}`,
    intro: `All ${st.count} four-year colleges in ${st.name}, with admit rates, real costs and outcomes from federal data.`,
    preset: { state: st.code },
    list: schools.filter((s) => s.state === st.code),
    stateName: st.name
  }));

  const optional = schools.filter((s) => ['considered_not_required', 'not_considered'].includes(s.testPolicy));
  const affordable = schools.filter((s) => s.avgNetPrice != null && s.avgNetPrice < 20000);
  const open = schools.filter((s) => s.openAdmission);
  const most = schools.filter((s) => s.admitRate != null && s.admitRate >= 0.75);
  lists.push(
    {
      slug: 'test-optional',
      title: 'Test-optional colleges',
      intro: `${n(optional.length)} four-year colleges that don't require SAT or ACT scores, as they report to the federal government. Policies change; confirm on each school's site before you apply.`,
      preset: { tp: 'optional' },
      list: optional
    },
    {
      slug: 'net-price-under-20000',
      title: 'Colleges with an average net price under $20,000',
      intro: `${n(affordable.length)} four-year colleges where the average student receiving grants pays under $20,000 a year. Your price depends on your family's income; each school page shows it by income band.`,
      preset: { np: '20000' },
      list: affordable
    },
    {
      slug: 'open-admission',
      title: 'Colleges with open admission',
      intro: `${n(open.length)} four-year colleges tell the U.S. Department of Education they have open admission: they accept students who apply, usually with a high school diploma or GED, whatever their GPA or test scores. Some programs within a college, like nursing, can have their own requirements, so check the program you want.`,
      preset: { ar: 'open' },
      list: open
    },
    {
      slug: 'admit-most-applicants',
      title: 'Colleges that admit most applicants',
      intro: `${n(most.length)} four-year colleges that admitted at least 75% of first-year applicants, as they report to the U.S. Department of Education. Colleges with open admission are listed separately.`,
      preset: { ar: '0.75-1.01' },
      list: most
    }
  );

  for (const st of states) {
    const low = schools.filter((s) => s.state === st.code && s.avgNetPrice != null && s.avgNetPrice < LOW).sort(byPrice);
    if (low.length < 3) continue;
    lists.push({
      slug: `${st.slug}-low-cost`,
      title: `Low-cost colleges in ${st.name}`,
      intro: `The ${low.length === 1 ? 'one' : n(low.length)} four-year colleges in ${st.name} where the average student receiving grants pays under $${n(LOW)} a year, including living costs. Sorted by that price, lowest first; it's not a ranking of quality. Your own price depends on your family's income, and each school page shows it by income band.`,
      preset: { state: st.code, np: String(LOW), sort: 'np' },
      list: low,
      ordered: true
    });
  }
  const slugs = new Set(lists.map((l) => l.slug));
  return lists.map((l) => ({
    ...l,
    list: l.ordered ? l.list : [...l.list].sort(byName),
    lowCost: l.stateName && slugs.has(`${l.slug}-low-cost`) ? `${l.slug}-low-cost` : undefined
  }));
}
