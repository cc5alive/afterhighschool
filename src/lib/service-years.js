// Gap-year and service-year programs that pay you or cost nothing. Every fact comes from the
// program's own page (or a government page), recorded with the date we checked it.
// Keep each fact short and only as specific as the source is.
export const SERVICE_CHECKED = 'November 6, 2026';

export const SEGAL = {
  amount: 7395,
  fy: 'terms approved in federal fiscal years 2025 and 2026',
  source: 'https://americorps.gov/members-volunteers/segal-americorps-education-award/find-out-more',
  source2: 'https://newyorkersvolunteer.ny.gov/fy-2026-segal-americorps-education-award-amounts'
};

export const PROGRAMS = [
  {
    slug: 'americorps-nccc',
    name: 'AmeriCorps NCCC',
    runBy: 'AmeriCorps, the federal agency for national service',
    what: 'You join a team that travels to hands-on projects with local and national nonprofits.',
    who: 'Ages 18 to 26 when you start (you can apply at 17 if you turn 18 before you arrive).',
    length: '10 to 11 months, full time.',
    get: ['Housing and meals', 'Travel to training, projects and home afterward', 'A limited health benefit', 'A modest living allowance', 'A Segal AmeriCorps Education Award of over $7,000 when you finish'],
    apply: 'https://americorps.gov/nccc',
    sources: [{ label: 'AmeriCorps: NCCC', url: 'https://americorps.gov/nccc' }]
  },
  {
    slug: 'city-year',
    name: 'City Year',
    runBy: 'City Year, a nonprofit AmeriCorps program',
    what: 'You serve full time in a public school, supporting students as a tutor and mentor.',
    who: null,
    length: 'A service year, with about two weeks off around late December.',
    get: ['A living stipend paid every two weeks, from $907 to $1,386 depending on the city', 'Health insurance', 'A Segal AmeriCorps Education Award ($7,395 in 2025)', 'Scholarships at more than 110 partner colleges for alumni'],
    apply: 'https://www.cityyear.org/national/stories/benefits-resources/the-benefits-of-a-city-year-americorps-member',
    sources: [{ label: 'City Year: benefits for AmeriCorps members (October 2025)', url: 'https://www.cityyear.org/national/stories/benefits-resources/the-benefits-of-a-city-year-americorps-member' }]
  },
  {
    slug: 'conservation-corps',
    name: 'Service and conservation corps',
    runBy: 'More than 140 local and state programs in The Corps Network',
    what: 'Crews work on conservation and community projects, often outdoors.',
    who: 'Generally ages 16 to 30, and up to 35 for veterans at some corps.',
    length: 'From a few months to a year or more, depending on the corps.',
    get: ['A stipend or living allowance (the amount depends on the program)', 'Often an education award or scholarship when you finish'],
    example: 'Example: the California Conservation Corps is a one-year, full-time program for ages 18 through 25 (veterans through 29) that pays a monthly stipend. After a full year, members may qualify for the CCC scholarship and the Segal AmeriCorps Education Award.',
    apply: 'https://corpsnetwork.org/find-a-corps/',
    applyLabel: 'Find a corps near you',
    sources: [
      { label: 'The Corps Network: Corps FAQ', url: 'https://corpsnetwork.org/learn-more/corps-faq' },
      { label: 'California Conservation Corps: FAQ', url: 'https://ccc.ca.gov/how-to-join/frequently-asked-questions' }
    ]
  },
  {
    slug: 'job-corps',
    name: 'Job Corps',
    runBy: 'U.S. Department of Labor',
    what: 'Free career training in one of 10 industries, usually while living on a campus, plus help finishing a high school diploma or equivalent and getting a driver\'s license.',
    who: 'Ages 16 to 24 from low-income households (under 18 needs a parent or guardian\'s consent).',
    length: 'About 8 months to 3 years, depending on the program.',
    get: ['Training at no cost', 'Housing, food, and health and dental care', 'A living allowance every two weeks that goes up as you progress', 'A transition allowance after you graduate'],
    status: 'The Labor Department paused Job Corps in May 2025. Federal judges blocked the shutdown, Congress funded the program for fiscal year 2026, and in September 2026 the administration dropped its plan to close 99 campuses. Check that the campus you want is enrolling.',
    statusSource: { label: 'Finger Lakes 1 News, September 16, 2026', url: 'https://www.fingerlakes1.com/2026/09/16/five-upstate-new-york-job-corps-centers-to-remain-open-after-federal-reversal/' },
    apply: 'https://www.jobcorps.gov/',
    sources: [{ label: 'Job Corps: FAQs (Angell campus)', url: 'https://angell.jobcorps.gov/faqs' }]
  },
  {
    slug: 'youthbuild',
    name: 'YouthBuild',
    runBy: 'Local programs funded by the U.S. Department of Labor',
    what: 'You work toward a high school diploma or equivalent while learning construction (and at some programs, fields like healthcare or IT) and helping build affordable housing.',
    who: 'Ages 16 to 24 who left high school without a diploma.',
    length: 'Varies by program.',
    get: ['Diploma or equivalency classes', 'Job training and industry certifications', 'Leadership training'],
    note: 'About 175 programs in 40 states, as of the Labor Department\'s 2022 fact sheet.',
    apply: 'https://www.dol.gov/sites/dolgov/files/ETA/youth/docs/YB%202022%20Fact%20Sheet.pdf',
    applyLabel: 'Read the Labor Department fact sheet',
    sources: [{ label: 'U.S. Department of Labor: YouthBuild fact sheet (2022)', url: 'https://www.dol.gov/sites/dolgov/files/ETA/youth/docs/YB%202022%20Fact%20Sheet.pdf' }]
  }
];
