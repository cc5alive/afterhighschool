// Debug probe: learns the Scorecard field names and coverage for certificate and associate schools
// before we build the trade-school section. Writes probe/ files (pushed to the trade-debug branch).
import { mkdir, writeFile } from 'node:fs/promises';
const KEY = process.env.SCORECARD_API_KEY;
const BASE = 'https://api.data.gov/ed/collegescorecard/v1/schools';
await mkdir('probe', { recursive: true });
const get = async (params) => {
  const r = await fetch(`${BASE}?${new URLSearchParams({ api_key: KEY, ...params })}`);
  return r.json();
};
const out = {};
for (const pd of ['1', '2']) {
  const j = await get({ 'school.degrees_awarded.predominant': pd, 'school.operating': '1', per_page: '1', fields: 'id,school.name' });
  out[`total_predominant_${pd}`] = j.metadata;
}
// A few known trade programs: pull whole program objects for a handful of schools.
const sample = await get({ 'school.degrees_awarded.predominant': '1', 'school.operating': '1', per_page: '5', page: '3', fields: 'id,school,latest.programs.cip_4_digit,latest.student.size,latest.cost,latest.completion,latest.earnings,latest.aid' });
out.sample = sample;
await writeFile('probe/probe.json', JSON.stringify(out, null, 1));
console.log(JSON.stringify(out).slice(0, 2000));
