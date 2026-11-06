// Apprenticeship guide: loads the BLS-based occupation snapshot once at build time.
// Loaded with a glob so the site still builds before the first data pull lands.
const found = Object.values(import.meta.glob('../../data/apprentice/latest.json', { eager: true, import: 'default' }));
const snap = found[0] || { sources: {}, wageYear: '', projectionYears: '', pulledAt: new Date().toISOString(), occupations: [] };
import { STATE_NAMES } from './data.js';

export const apprenticeSources = snap.sources;
export const wageYear = snap.wageYear;
export const projectionYears = snap.projectionYears;
export const apprenticePulledDate = new Date(snap.pulledAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' });
export const occupations = snap.occupations
  .map((o) => ({
    ...o,
    stateRows: Object.entries(o.states)
      .filter(([code, v]) => STATE_NAMES[code] && v.median)
      .map(([code, v]) => ({ code, name: STATE_NAMES[code], ...v }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
export const occupationBySlug = new Map(occupations.map((o) => [o.slug, o]));
