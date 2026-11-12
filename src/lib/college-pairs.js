// Side-by-side pages (/compare/<a>-vs-<b>) for the college comparisons students search for.
// Each pair shows both schools' sourced numbers and plain statements of the differences. No winner.
import { bySlug, cds } from './data.js';
import { money, pct, INCOME_BAND_LABEL } from './format.js';

// [short name, slug] for each side. Short names are what people type ("NYU vs USC").
const PAIRS = [
  [['NYU', 'new-york-university'], ['USC', 'university-of-southern-california']],
  [['UCLA', 'university-of-california-los-angeles'], ['UC Berkeley', 'university-of-california-berkeley']],
  [['UCLA', 'university-of-california-los-angeles'], ['USC', 'university-of-southern-california']],
  [['Harvard', 'harvard-university'], ['Stanford', 'stanford-university']],
  [['MIT', 'massachusetts-institute-of-technology'], ['Stanford', 'stanford-university']],
  [['Duke', 'duke-university'], ['UNC', 'university-of-north-carolina-at-chapel-hill']],
  [['Columbia', 'columbia-university-in-the-city-of-new-york'], ['NYU', 'new-york-university']],
  [['Northwestern', 'northwestern-university'], ['UChicago', 'university-of-chicago']],
  [['Michigan', 'university-of-michigan-ann-arbor'], ['UVA', 'university-of-virginia-main-campus']],
  [['Purdue', 'purdue-university-main-campus'], ['UIUC', 'university-of-illinois-urbana-champaign']],
  [['BU', 'boston-university'], ['Northeastern', 'northeastern-university']],
  [['Cornell', 'cornell-university'], ['Penn', 'university-of-pennsylvania']],
  [['UT Austin', 'the-university-of-texas-at-austin'], ['Texas A&M', 'texas-a-and-m-university-college-station']],
  [['Yale', 'yale-university'], ['Princeton', 'princeton-university']],
  [['UC San Diego', 'university-of-california-san-diego'], ['UC Davis', 'university-of-california-davis']],
  [['Emory', 'emory-university'], ['Vanderbilt', 'vanderbilt-university']],
  [['Boston College', 'boston-college'], ['BU', 'boston-university']],
  [['Carnegie Mellon', 'carnegie-mellon-university'], ['Georgia Tech', 'georgia-institute-of-technology-main-campus']],
  [['UF', 'university-of-florida'], ['FSU', 'florida-state-university']],
  [['Cal Poly', 'california-polytechnic-state-university-san-luis-obispo'], ['UCSB', 'university-of-california-santa-barbara']]
];

const urlName = (short) => short.toLowerCase().replace(/&/g, '-and-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const collegePairs = PAIRS.map(([[an, as], [bn, bs]]) => {
  const a = bySlug.get(as), b = bySlug.get(bs);
  if (!a || !b) throw new Error(`college-pairs: unknown slug ${!a ? as : bs}`);
  return { slug: `${urlName(an)}-vs-${urlName(bn)}`, a: { ...a, short: an }, b: { ...b, short: bn } };
});

export const pairsFor = (slug) => collegePairs.filter((p) => p.a.slug === slug || p.b.slug === slug);

// Rounded "about N in 10" wording, or "1 in N" when under 10%.
const odds = (r) => (r < 0.1 ? `about 1 in ${Math.round(1 / Math.max(r, 0.01))}` : `about ${Math.round(r * 10)} in 10`);
const k = (n) => (n >= 10000 ? Math.round(n / 1000) * 1000 : Math.round(n / 100) * 100).toLocaleString('en-US');
// Treat two numbers as about the same when they're within `tol` (a share of the larger).
const close = (x, y, tol) => Math.abs(x - y) <= tol * Math.max(x, y);

const BAND_WORDS = { '0-30000': 'up to $30,000', '30001-48000': '$30,000 to $48,000', '48001-75000': '$48,000 to $75,000', '75001-110000': '$75,000 to $110,000', '110001-plus': 'over $110,000' };

// Plain-language differences, each from a field we show in the table. Never says which school is better.
export function differences({ a, b }) {
  const out = [];
  const A = a.short, B = b.short;
  if (a.undergrads && b.undergrads) {
    out.push(close(a.undergrads, b.undergrads, 0.15)
      ? `They're about the same size: ${A} has about ${k(a.undergrads)} undergraduates and ${B} about ${k(b.undergrads)}.`
      : `${a.undergrads > b.undergrads ? A : B} is bigger, with about ${k(Math.max(a.undergrads, b.undergrads))} undergraduates to ${a.undergrads > b.undergrads ? B : A}'s ${k(Math.min(a.undergrads, b.undergrads))}.`);
  }
  if (a.ownership !== b.ownership && (a.ownership === 'public' || b.ownership === 'public')) {
    const pub = a.ownership === 'public' ? a : b, priv = pub === a ? b : a;
    out.push(`${pub.short} is a public university, so in-state students pay less tuition (${money(pub.tuitionInState)} a year, against ${money(pub.tuitionOutOfState)} from out of state). ${priv.short} is private and charges everyone ${money(priv.tuitionInState)}.`);
  } else if (a.ownership === 'public' && b.ownership === 'public' && a.state !== b.state) {
    out.push(`Both are public, in different states, so where you live changes the price: in-state tuition is ${money(a.tuitionInState)} at ${A} and ${money(b.tuitionInState)} at ${B}.`);
  }
  if (a.admitRate != null && b.admitRate != null) {
    out.push(Math.abs(a.admitRate - b.admitRate) < 0.03
      ? `They admit a similar share of applicants: ${pct(a.admitRate)} at ${A} and ${pct(b.admitRate)} at ${B}.`
      : `${A} admits ${odds(a.admitRate)} applicants (${pct(a.admitRate)}); ${B} admits ${odds(b.admitRate)} (${pct(b.admitRate)}).`);
  }
  // Net price: the overall average, then the income band where the two differ most.
  if (a.avgNetPrice && b.avgNetPrice) {
    out.push(`On average, students who got grant aid paid ${money(a.avgNetPrice)} a year at ${A} and ${money(b.avgNetPrice)} at ${B}, including housing and food.${a.ownership === 'public' || b.ownership === 'public' ? ` For ${a.ownership === 'public' && b.ownership === 'public' ? 'both public universities' : `${(a.ownership === 'public' ? a : b).short}, a public university`}, that's the price for in-state students.` : ''}`);
    const gaps = Object.keys(INCOME_BAND_LABEL)
      .map((band) => ({ band, x: a.netPriceByIncome?.[band], y: b.netPriceByIncome?.[band] }))
      .filter((g) => g.x != null && g.y != null)
      .map((g) => ({ ...g, d: Math.abs(g.x - g.y) }))
      .sort((p, q) => q.d - p.d);
    const g = gaps[0];
    if (g && g.d >= 3000) {
      const who = `families earning ${BAND_WORDS[g.band]}`;
      out.push(`The gap depends on income. It's widest for ${who}: ${money(g.x)} at ${A} and ${money(g.y)} at ${B}. Your price could be different, so try each school's net price calculator.`);
    }
  }
  if (a.gradRate != null && b.gradRate != null) {
    out.push(Math.abs(a.gradRate - b.gradRate) < 0.03
      ? `Both graduate a similar share of students within six years: ${pct(a.gradRate)} at ${A} and ${pct(b.gradRate)} at ${B}.`
      : `${pct(a.gradRate)} of students at ${A} graduate within six years, and ${pct(b.gradRate)} at ${B}.`);
  }
  if (a.medianEarnings10yr && b.medianEarnings10yr) {
    out.push(`Ten years after starting, the typical student who got federal aid earned ${money(a.medianEarnings10yr)} (${A}) and ${money(b.medianEarnings10yr)} (${B}). Earnings depend a lot on what people study.`);
  }
  if (a.medianDebt && b.medianDebt) {
    out.push(`Typical federal loan debt for graduates: ${money(a.medianDebt)} at ${A} and ${money(b.medianDebt)} at ${B}.`);
  }
  return out;
}

// Average high school GPA of enrolled first-years, from each school's Common Data Set.
export const cdsGpa = (s) => {
  const c = cds.get(s.slug);
  const v = c?.values?.gpa_average;
  return v ? { value: v.toFixed(2), year: c.cdsYear, url: c.source.url, title: c.source.title } : null;
};
