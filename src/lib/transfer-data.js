// Community college and transfer guide: state transfer policies, official state transfer sites,
// and each state's public two-year colleges with federal outcome data.
import ecs from '../../data/transfer/ecs-2022.json';
import { STATE_NAMES, stateSlug, schools, cds } from './data.js';
import { tradeSchools } from './trade-data.js';

// Link-check results are optional: until the first check runs, no state site links show.
const checks = Object.values(import.meta.glob('../../data/transfer/portals-check.json', { eager: true, import: 'default' }))[0] || { states: {} };

export const ecsSource = { name: 'Education Commission of the States', title: 'Transfer and Articulation 2022', date: 'July 2022', url: ecs.url };
export const ECS_QUESTIONS = [
  { key: 'guaranteedAssociate', label: 'An associate degree transfers as a whole', plain: 'Finish a transfer associate degree and public universities in the state accept it as a block, usually entering you as a junior.' },
  { key: 'transferableCore', label: 'A general-education core that transfers', plain: 'A set of general-education courses that public colleges in the state agree to accept together.' },
  { key: 'courseNumbering', label: 'Common course numbers', plain: 'The same course has the same number at every public college, so it is easy to see what matches.' },
  { key: 'reverseTransfer', label: 'Reverse transfer', plain: 'If you transfer before finishing your associate degree, credits you earn at the university can be sent back so you still get it.' }
];

// Public colleges that awarded associate degrees in the latest year: community and technical colleges.
const communityColleges = tradeSchools.filter((s) => s.ownership === 'public' && s.programs.some((p) => p.level === 2 && p.awards > 0));

export const transferStates = Object.entries(STATE_NAMES).map(([code, name]) => {
  const policy = ecs.states[code] || null;
  const colleges = communityColleges.filter((s) => s.state === code).sort((a, b) => a.name.localeCompare(b.name));
  // Four-year colleges in the state whose own Common Data Set reports transfer admissions (D2).
  const universities = schools.filter((s) => s.state === code && cds.get(s.slug)?.values?.transfer_applied > 0)
    .map((s) => ({ s, c: cds.get(s.slug) })).sort((a, b) => a.s.name.localeCompare(b.s.name));
  return {
    code, name, slug: stateSlug(code), policy, universities,
    profileUrl: ecs.profileUrl.replace('{ST}', code),
    portal: checks.states[code] || null,
    colleges
  };
}).filter((s) => s.policy || s.colleges.length);
export const transferStateBySlug = new Map(transferStates.map((s) => [s.slug, s]));
export const portalCheckedDate = checks.checkedAt ? new Date(checks.checkedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles' }) : null;
