// Trade, technical and two-year schools: loads the Scorecard trade snapshot once at build time.
import snap from '../../data/trade/latest.json';
import { STATE_NAMES, stateSlug } from './data.js';
import { TRADES, tradeFor } from './trades.js';

export const tradePulledDate = new Date(snap.pulledAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' });
export const national = snap.national; // `${cip}-${level}` -> { title, level, earn1, earn5 }

// Schools that report students. Online-only schools stay in but are labelled.
export const tradeSchools = snap.schools
  .filter((s) => s.students > 0)
  .map((s) => ({
    ...s,
    stateName: STATE_NAMES[s.state],
    kind: s.predominantDegree === 2 ? 'two-year' : s.ownership === 'public' ? 'public-technical' : 'certificate',
    // Programs in a known trade, with the trade attached.
    tradePrograms: s.programs.map((p) => ({ ...p, trade: tradeFor(p.cip) })).filter((p) => p.trade)
  }));
export const tradeSchoolBySlug = new Map(tradeSchools.map((s) => [s.slug, s]));

export const KIND_LABEL = { certificate: 'Trade or career school', 'public-technical': 'Public technical or community college', 'two-year': 'Two-year college' };

// For each trade: which schools offer it, and in which states.
export const tradeIndex = TRADES.map((t) => {
  const offering = tradeSchools
    .map((s) => ({ s, progs: s.tradePrograms.filter((p) => p.trade.slug === t.slug) }))
    .filter((x) => x.progs.length);
  const byState = new Map();
  for (const x of offering) byState.set(x.s.state, [...(byState.get(x.s.state) || []), x]);
  const states = [...byState.entries()]
    .map(([code, list]) => ({ code, name: STATE_NAMES[code], slug: stateSlug(code), list: list.sort((a, b) => a.s.name.localeCompare(b.s.name)) }))
    .sort((a, b) => a.name.localeCompare(b.name));
  // National medians for each program code in this trade, by credential level.
  const nat = [];
  for (const cip of t.cips) for (const level of [1, 2]) {
    const n = national[`${cip}-${level}`];
    if (n && (n.earn1 || n.earn5)) nat.push({ cip, level, ...n, schools: offering.filter((x) => x.progs.some((p) => p.cip === cip && p.level === level)).length });
  }
  nat.sort((a, b) => b.schools - a.schools);
  return { ...t, count: offering.length, states, nat };
}).filter((t) => t.count > 0);
export const tradeBySlug = new Map(tradeIndex.map((t) => [t.slug, t]));
