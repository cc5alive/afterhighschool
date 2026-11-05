// Loads the Scorecard snapshot once at build time and derives everything pages need.
import snapshot from '../../data/scorecard/latest.json';

export const STATE_NAMES = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
  CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky',
  LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
  NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota',
  OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia',
  WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming'
};

export const stateSlug = (code) => STATE_NAMES[code].toLowerCase().replace(/[^a-z]+/g, '-');

export const pulledAt = snapshot.pulledAt;
export const pulledDate = new Date(snapshot.pulledAt).toLocaleDateString('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles'
});

// Derived fields used across pages.
function enrich(s) {
  const satLow = s.sat.readingP25 && s.sat.mathP25 ? s.sat.readingP25 + s.sat.mathP25 : null;
  const satHigh = s.sat.readingP75 && s.sat.mathP75 ? s.sat.readingP75 + s.sat.mathP75 : null;
  const sizeBand = s.undergrads == null ? null : s.undergrads < 2000 ? 'small' : s.undergrads <= 15000 ? 'medium' : 'large';
  return { ...s, satLow, satHigh, sizeBand, stateName: STATE_NAMES[s.state] };
}

import statusFile from '../../data/school-status.json';

// Closed, closing, merged or changed schools (see data/school-status.json).
export const schoolStatus = new Map(Object.entries(statusFile.schools));
// Graduate-only schools (no undergraduates reported) keep a page but aren't listed or indexed:
// this site is for people choosing where to go after high school.
export const gradOnly = (s) => !s.undergrads;
const isListed = (s) => schoolStatus.get(s.slug)?.listed !== false && !gradOnly(s);

// Every school gets a page; `schools` (used by lists, the directory and the sitemap) leaves out unlisted ones.
export const allSchools = snapshot.schools.map(enrich);
export const schools = allSchools.filter(isListed);

// Reviewed "What's special" facts: data/highlights/<slug>.json, one file per school.
const highlightFiles = import.meta.glob('../../data/highlights/*.json', { eager: true, import: 'default' });
export const highlights = new Map(Object.values(highlightFiles).map((h) => [h.slug, h]));
export const bySlug = new Map(allSchools.map((s) => [s.slug, s]));
export const states = Object.keys(STATE_NAMES)
  .map((code) => ({ code, name: STATE_NAMES[code], slug: stateSlug(code), count: schools.filter((s) => s.state === code).length }))
  .filter((st) => st.count > 0);

// Similar schools: same broad type, nearest on size, selectivity and price; prefer same state.
export function similarSchools(s, n = 6) {
  const lg = (v) => (v ? Math.log10(v) : 3);
  const score = (o) =>
    Math.abs(lg(o.undergrads) - lg(s.undergrads)) * 1.2 +
    Math.abs((o.admitRate ?? 0.8) - (s.admitRate ?? 0.8)) * 2 +
    Math.abs((o.avgNetPrice ?? 20000) - (s.avgNetPrice ?? 20000)) / 15000 +
    (o.ownership === s.ownership ? 0 : 0.6) +
    (o.state === s.state ? 0 : 0.35);
  return schools
    .filter((o) => o.id !== s.id && o.undergrads && o.ownership !== 'private_for_profit' && !schoolStatus.has(o.slug))
    .map((o) => ({ o, d: score(o) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map(({ o }) => o);
}

// Schools like this one that admit a clearly larger share of applicants.
export function easierSchools(s, n = 4) {
  if (s.admitRate == null || s.admitRate > 0.75) return [];
  const lg = (v) => (v ? Math.log10(v) : 3);
  return schools
    .filter((o) => o.id !== s.id && o.admitRate != null && o.admitRate >= s.admitRate + 0.15 && o.undergrads && o.ownership !== 'private_for_profit' && !schoolStatus.has(o.slug))
    .map((o) => ({
      o,
      d: Math.abs(lg(o.undergrads) - lg(s.undergrads)) +
        (o.ownership === s.ownership ? 0 : 0.5) +
        (o.state === s.state ? 0 : 0.4) +
        Math.abs((o.gradRate ?? 0.5) - (s.gradRate ?? 0.5)) * 1.5
    }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n)
    .map(({ o }) => o);
}

// Compact rows for the directory filters and compare view.
export const indexRows = schools.map((s) => ({
  slug: s.slug, name: s.name, city: s.city, state: s.state, own: s.ownership, set: s.setting,
  ug: s.undergrads, ar: s.admitRate, oa: s.openAdmission ? 1 : 0, tp: s.testPolicy,
  satL: s.satLow, satH: s.satHigh, actL: s.act.p25, actH: s.act.p75,
  np: s.avgNetPrice, tin: s.tuitionInState, tout: s.tuitionOutOfState,
  gr: s.gradRate, rr: s.retentionRate, earn: s.medianEarnings10yr, debt: s.medianDebt,
  pell: s.pellRate, online: s.onlineOnly ? 1 : 0, id: s.id
}));
