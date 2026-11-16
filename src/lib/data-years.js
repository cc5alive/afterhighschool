// How old each federal number is. College Scorecard's "latest" data mixes years (admissions from one
// file, costs from a newer one, first-generation share from 2016), so the years are recorded in
// data/scorecard/data-years.json by a probe (scripts/probe-scorecard-years.mjs) and shown next to the numbers.
import file from '../../data/scorecard/data-years.json';

export const dataYears = file.years;
export const dataYearsChecked = new Date(`${file.probedAt}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
// 2025 -> "2025–26"
export const schoolYear = (y) => `${y}–${String((y + 1) % 100).padStart(2, '0')}`;
// The entering class the federal admissions figures describe.
export const admissionsFall = file.years.admissions;
// One plain line per measure, used on school pages and /methodology.
export const DATA_AGE = [
  ['Admit rate, test policy, SAT and ACT ranges', `the class that entered in fall ${file.years.admissions}`],
  ['Undergraduates', `fall ${file.years.enrollment}`],
  ['Came back for year two', `Scorecard's ${schoolYear(file.years.retention)} data`],
  ['Tuition and total cost of attendance', `the ${schoolYear(file.years.cost)} school year`],
  ['Net price', `Scorecard's ${schoolYear(file.years.netPrice)} data`],
  ['Graduation rate', `Scorecard's ${schoolYear(file.years.completion)} data, about students who started six years earlier`],
  ['Pell grants', `Scorecard's ${schoolYear(file.years.pell)} data`],
  ['Median debt', `Scorecard's ${schoolYear(file.years.debt)} data`],
  ['Median earnings', `Scorecard's ${schoolYear(file.years.earnings)} data, about students who started college about ten years before that`],
  ['First-generation students', `Scorecard's ${schoolYear(file.years.firstGeneration)} data, the newest the government publishes`]
];
