// Becoming an electrician in Los Angeles County. Program facts come from each provider's own page,
// rules from the California Department of Industrial Relations, and school numbers from our College
// Scorecard snapshot. Shared by the guide and the counselor kit so the two never disagree.
import { tradeSchoolBySlug, tradePulledDate } from './trade-data.js';

export const LA_CHECKED = 'November 10, 2026';

export const LA_SRC = {
  eti: { label: 'Electrical Training Institute (IBEW Local 11 and NECA LA): Inside Wireman apprenticeship', url: 'https://www.laett.com/index.cfm?zone=%2Funionactive%2Fview_page.cfm&page=Inside20Wireman' },
  etiNotice: { label: 'Electrical Training Institute: official apprenticeship notice (January 26, 2026), with the wage table', url: 'https://www.laett.com/Apprenticeship%20handouts/AW%20Official%20Notice%20-%2001-26-26.pdf' },
  abc: { label: 'ABC Southern California: apprenticeship program', url: 'https://abcsocal.org/Education-Training-/Apprenticeship-Program/' },
  abcWages: { label: 'ABC Southern California: 2026 electrical apprentice wages (private work)', url: 'https://abcsocal.org/wp-content/uploads/2026/03/2026-ABC_Electrical-Private_Apprentice_Wages-Final-6-10.pdf' },
  lattc: { label: 'Los Angeles Trade-Technical College: Electrical Construction and Maintenance', url: 'https://www.lattc.edu/academics/aos/electrical-construction-and-maintenance' },
  lattcFees: { label: 'Los Angeles Trade-Technical College: California College Promise Grant and fees', url: 'https://lattc.edu/financial-aid/programs/california-college-promise-grant' },
  hours: { label: 'California Code of Regulations, title 8, section 291.1 (electrician certification eligibility)', url: 'https://dir.ca.gov/t8/291_1.html' },
  trainee: { label: 'California Department of Industrial Relations: electrician trainee registration', url: 'https://dir.ca.gov/dlse/ECU/ElectricalTrainee.htm' },
  das: { label: 'California Division of Apprenticeship Standards: search apprenticeship programs', url: 'https://dir.ca.gov/databases/das/pwaddrstart.asp' },
  scorecard: { label: `U.S. Department of Education, College Scorecard (our snapshot, pulled ${tradePulledDate})`, url: 'https://collegescorecard.ed.gov/' }
};

// Union apprenticeship: wage steps from the ETI notice, effective October 26, 2026.
export const ETI_PAY = {
  effective: 'October 26, 2026',
  start: 26.80,
  top: 67.00,
  steps: [['Start', '40%', 26.80], ['', '45%', 30.15], ['', '50%', 33.50], ['', '55%', 36.85], ['', '60%', 40.20], ['', '65%', 43.55], ['', '70%', 46.90], ['', '75%', 50.25], ['', '80%', 53.60], ['', '85%', 56.95], ['Journey-level, after 8,000 hours', '100%', 67.00]]
};

// Non-union apprenticeship: ABC SoCal's 2026 private-work wages for Los Angeles County
// (March 1, 2026 to February 28, 2027). Nine levels, a raise every 900 hours.
export const ABC_PAY = { start: 26.81, startFringe: 14.44, level9: 53.62, level9Fringe: 28.87 };

// Community college fees: $46 a unit for California residents; the Electrician AS and certificate
// are 48 units. The product is our arithmetic.
export const LATTC = { perUnit: 46, units: 48, fees: 46 * 48 };

// Schools in Los Angeles County that reported electrician programs (federal program code 46.03) to the
// Department of Education. Public schools first, then private, A to Z within each.
const LA_SLUGS = [
  'los-angeles-trade-technical-college',
  'antelope-valley-community-college-district',
  'baldwin-park-adult-and-community-education',
  'capstone-college',
  'intercoast-colleges-west-covina',
  'uei-college-gardena',
  'uei-college-huntington-park',
  'uei-college-reseda',
  'uei-college-west-covina'
];

export const laSchools = LA_SLUGS.map((slug) => tradeSchoolBySlug.get(slug)).filter(Boolean).map((s) => {
  const progs = s.programs.filter((p) => p.cip === '4603');
  const cert = progs.find((p) => p.level === 1);
  const assoc = progs.find((p) => p.level === 2);
  return {
    slug: s.slug,
    name: s.displayName || s.name,
    city: s.city,
    ownership: s.ownership,
    avgNetPrice: s.avgNetPrice,
    certAwards: cert?.awards ?? 0,
    assocAwards: assoc?.awards ?? 0,
    earn1: cert?.earn1 ?? null,
    debt: cert?.debt ?? null
  };
}).filter((s) => s.certAwards + s.assocAwards > 0);

export const lattc = laSchools.find((s) => s.slug === 'los-angeles-trade-technical-college');
const forProfit = laSchools.filter((s) => s.ownership === 'private_for_profit' && s.avgNetPrice);
export const privatePriceRange = forProfit.length ? [Math.min(...forProfit.map((s) => s.avgNetPrice)), Math.max(...forProfit.map((s) => s.avgNetPrice))] : null;
