// llms.txt: a plain-text guide to the site for AI assistants and search tools (https://llmstxt.org).
import { schools, pulledDate } from '../lib/data.js';
import { tradeSchools, tradePulledDate } from '../lib/trade-data.js';
import { occupations } from '../lib/apprentice-data.js';
import { STATE_GUIDES } from '../lib/state-guides.js';
import { LOCAL_GUIDES_LAUNCHED, COUNSELORS_LAUNCHED, CONTACT_EMAIL } from '../lib/site.js';

const S = 'https://afterhighschool.me';

export function GET() {
  const n = (v) => v.toLocaleString('en-US');
  const body = `# After High School

> A free, sourced guide to what to do after high school, for students, parents and counselors. It covers every US four-year college plus trade schools, community colleges, apprenticeships, transfer, gap and service years, the military, teaching yourself and fellowships. Every number links to its source with the date it was checked. Schools are never ranked, and no school pays to be listed.

Made in Los Angeles by CC Pearce and Young Chu. Contact: ${CONTACT_EMAIL}

## Where the data comes from

- College and trade school costs, admission, completion and earnings: U.S. Department of Education, College Scorecard (colleges pulled ${pulledDate}; trade schools pulled ${tradePulledDate}).
- SAT, ACT, GPA and admission details for hundreds of colleges: each college's own Common Data Set, linked on its page.
- Apprenticeship pay and job outlook: U.S. Bureau of Labor Statistics.
- Program rules, pay steps and application steps: each program's official page, linked next to the fact.
- How we handle the data: ${S}/methodology

## Main pages

- [Every path, side by side](${S}/paths): cost, time, pay along the way and what you owe after, for eight paths.
- [Colleges](${S}/colleges): ${n(schools.length)} US four-year colleges, searchable by state, cost, admit rate and test policy. Each has a page at ${S}/college/<name>, with admit rate, test scores, net price by family income, graduation rate and earnings.
- [Colleges by state](${S}/colleges/california): one page per state (replace "california" with any state).
- [Compare colleges](${S}/compare): up to four colleges side by side.
- [Trade schools](${S}/trades): ${n(tradeSchools.length)} trade, career and two-year schools, by trade and state, with program-level earnings where reported.
- [Apprenticeships](${S}/apprenticeships): ${occupations.length} jobs you can learn through a paid apprenticeship, with pay and outlook.
- [Community college and transfer](${S}/transfer): how transfer works, with a page per state.
- [Gap years and service years](${S}/gap-years)
- [Military](${S}/military): enlisting, ROTC, the service academies, Tuition Assistance and the GI Bill.
- [Teach yourself](${S}/teach-yourself) and [Fellowships](${S}/fellowships)
${LOCAL_GUIDES_LAUNCHED ? `- [Becoming an electrician in Los Angeles County](${S}/guides/electrician-los-angeles)\n${STATE_GUIDES.map((g) => `- [${g.title}](${S}/guides/${g.slug})`).join('\n')}\n` : ''}${COUNSELORS_LAUNCHED ? `- [For counselors and teachers](${S}/counselors): a free printable handout and classroom activity.\n` : ''}
## How to cite

Please link to the specific page and mention the date the data was pulled or checked, which every page shows.
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
