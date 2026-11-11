// State trade guides (/guides/<trade>-<state>): how to get licensed or certified in a trade in one
// state. Rules come from the state's own pages, programs from their official pages, schools from our
// Scorecard snapshot. Each guide carries the date its sources were checked. Only add a state when
// every fact is checked against an official source.
import { tradeSchools, tradePulledDate } from './trade-data.js';

const SCORECARD = { label: `U.S. Department of Education, College Scorecard (our snapshot, pulled ${tradePulledDate})`, url: 'https://collegescorecard.ed.gov/' };

// Public schools in a state that reported awards in a program code last year, A to Z.
function publicSchools(state, cip) {
  return tradeSchools
    .filter((s) => s.state === state && s.ownership === 'public')
    .map((s) => ({ s, progs: s.programs.filter((p) => p.cip === cip && p.awards > 0) }))
    .filter((x) => x.progs.length)
    .map(({ s, progs }) => ({
      slug: s.slug, name: s.displayName || s.name, city: s.city, avgNetPrice: s.avgNetPrice,
      cert: progs.find((p) => p.level === 1)?.awards ?? 0,
      assoc: progs.find((p) => p.level === 2)?.awards ?? 0,
      earn1: progs.find((p) => p.level === 1)?.earn1 ?? null
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
const countAll = (state, cip) => tradeSchools.filter((s) => s.state === state && s.programs.some((p) => p.cip === cip && p.awards > 0)).length;

const CA_SRC = {
  hours: { label: 'California Code of Regulations, title 8, section 291.1 (who can take the certification exam)', url: 'https://dir.ca.gov/t8/291_1.html' },
  faq: { label: 'California Department of Industrial Relations: electrician certification FAQs', url: 'https://dir.ca.gov/dlse/ECU/ecu_faq.htm' },
  exam: { label: 'California Department of Industrial Relations: electrician certification exam information', url: 'https://dir.ca.gov/dlse/ECU/ECU_TestInfo.htm' },
  trainee: { label: 'California Department of Industrial Relations: electrician trainee registration', url: 'https://dir.ca.gov/dlse/ECU/ElectricalTrainee.htm' },
  das: { label: 'California Division of Apprenticeship Standards: search approved apprenticeship programs', url: 'https://dir.ca.gov/databases/das/pwaddrstart.asp' },
  eti: { label: 'Electrical Training Institute (IBEW Local 11 and NECA LA): Inside Wireman apprenticeship', url: 'https://www.laett.com/index.cfm?zone=%2Funionactive%2Fview_page.cfm&page=Inside20Wireman' },
  sd: { label: 'Palomar College: Inside Wireman apprenticeship with the Electrical Training Institute of San Diego & Imperial Counties', url: 'https://www.palomar.edu/wcce/apprenticeship/iw/' },
  sf: { label: 'City and County of San Francisco: IBEW Local 6 apprenticeship application announcement', url: 'https://www.sf.gov/international-brotherhood-of-electrical-workers-local-6-apprenticeship-application-announcement' },
  sac: { label: 'IBEW Local 340: how to join', url: 'https://www.ibewlocal340.org/how-to-join/' },
  abcSocal: { label: 'ABC Southern California: apprenticeship program', url: 'https://abcsocal.org/Education-Training-/Apprenticeship-Program/' },
  abcNorcal: { label: 'California Division of Apprenticeship Standards: ABC Northern California electrician program', url: 'https://www.dir.ca.gov/databases/das/results_aigdetail.asp?varOccId=10105' },
  abcSd: { label: 'California Division of Apprenticeship Standards: ABC San Diego electrician program', url: 'https://www.dir.ca.gov/databases/das/results_aigdetail.asp?varOccId=78' },
  scorecard: SCORECARD
};


const TX_SRC = {
  apprentice: { label: 'Texas Department of Licensing and Regulation: apply for an apprentice electrician license', url: 'https://tdlr.texas.gov/electricians/apply/individuals/apprentice-electrician.htm' },
  journeyman: { label: 'Texas Department of Licensing and Regulation: apply for a journeyman electrician license', url: 'https://www.tdlr.texas.gov/electricians/apply/individuals/journeyman-electrician.htm' },
  exam: { label: 'Texas Department of Licensing and Regulation: electrician examinations', url: 'https://www.tdlr.texas.gov/electricians/elecexam.htm' },
  twc: { label: 'Texas Workforce Commission: find apprenticeships', url: 'https://www.twc.texas.gov/services/job-training/find-apprenticeships' },
  houston: { label: 'Houston Electrical JATC: how to apply', url: 'https://www.houstonjatc.com/how-to-apply' },
  houstonFaq: { label: 'Houston Electrical JATC: frequently asked questions', url: 'https://www.houstonjatc.com/faq-help' },
  ntx: { label: 'North Texas Electrical Training Center: applicant information', url: 'https://ntejatc.org/index.php/applicant-information' },
  ntxFaq: { label: 'North Texas Electrical Training Center: frequently asked questions', url: 'https://ntejatc.org/index.php/frequently-asked-questions' },
  austin: { label: 'Austin Electrical Training Alliance: apprentice program', url: 'https://austineta.org/apprentice-program-2/' },
  sa: { label: 'South Texas Training Center (San Antonio): electrician apprenticeship qualifications', url: 'https://www.sotxjatc.org/qualifications-electrician.html' },
  abcSouth: { label: 'ABC South Texas: become an electrician in Texas (April 2026)', url: 'https://www.abcsouthtexas.org/become-an-electrician-in-texas-with-abc-south-texas/' },
  iec: { label: 'Independent Electrical Contractors: apprenticeship', url: 'https://www.ieci.org/apprenticeship' },
  iecDallas: { label: 'IEC Dallas: apprenticeship training program', url: 'https://iecdallaseducation.com/files/pdf/apprenticeship.pdf' },
  scorecard: SCORECARD
};

export const STATE_GUIDES = [
  {
    slug: 'electrician-california',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'CA',
    stateName: 'California',
    checked: 'November 11, 2026',
    title: 'How to become an electrician in California',
    description: 'What California requires to work as an electrician: 8,000 hours, the state exam, trainee registration, and the paid apprenticeships and community college programs that get you there. From official sources.',
    lede: 'To work as a certified general electrician in California, you need 8,000 hours of work for a licensed electrical contractor, then you pass a state exam. Until you\'re certified, you can only do electrical work as an apprentice in a state-approved program or as a registered trainee.',
    rules: [
      { dt: 'Hours you need', dd: '8,000 hours of work for a C-10 electrical contractor for the general electrician exam, or 4,800 hours for the residential exam. Finishing a state-approved apprenticeship counts as proof of those hours.', src: ['hours'] },
      { dt: 'Working before you\'re certified', dd: 'You must be an apprentice in a state-approved program or a registered electrician trainee, working under the constant supervision of a certified electrician. To register as a trainee you have to be enrolled in a state-approved school, pay $25, and renew your card every year.', src: ['trainee', 'faq'] },
      { dt: 'The exam', dd: 'The general electrician exam has 100 questions and takes up to 4½ hours; you need 70% to pass. It costs $175 ($100 exam fee plus $75 administration fee). If you don\'t pass, you can retake it after 60 days for $100.', src: ['exam', 'faq'] },
      { dt: 'Keeping it', dd: 'To renew your certification you need 2,000 hours of work in the trade and 32 hours of continuing education.', src: ['faq'] }
    ],
    routesIntro: 'There are two ways to get the 8,000 hours: an apprenticeship, which pays you while you train, or school first and then work as a registered trainee.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and the National Electrical Contractors Association (NECA). Each area has its own training center with its own application window, and some windows last only a few weeks a year.',
      programs: [
        { area: 'Los Angeles County', name: 'Electrical Training Institute (IBEW Local 11)', facts: '5 years. Starts at $26.80 an hour. You need to be 18, a diploma or GED, and algebra.', src: 'eti', guide: '/guides/electrician-los-angeles' },
        { area: 'San Diego and Imperial counties', name: 'Electrical Training Institute of San Diego & Imperial Counties (IBEW Local 569)', facts: '5 years. You need to be 18, a diploma, GED or associate degree, and algebra. Classes run with Palomar College.', src: 'sd' },
        { area: 'San Francisco', name: 'San Francisco Joint Apprenticeship and Training Committee (IBEW Local 6)', facts: 'Online applications only. In 2026 the window was two weeks in May, and only the first 1,000 applications were accepted. You need algebra or higher math with a C or better.', src: 'sf' },
        { area: 'Sacramento, Chico and Redding', name: 'Sacramento Electrical Training Center (IBEW Local 340)', facts: 'Fill out an interest form and the program contacts you. It also runs a pre-apprenticeship trainee program.', src: 'sac' }
      ],
      more: 'Other areas have their own union training centers. Search the state\'s list of approved programs by county.'
    },
    nonunion: {
      what: 'Run by Associated Builders and Contractors (ABC) chapters for non-union contractors. Approved by the state, with the same 8,000-hour goal.',
      programs: [
        { area: 'Southern California', name: 'ABC Southern California', facts: 'Has a training site in San Fernando for LA and Ventura counties. Starts at $26.81 an hour plus benefits in LA County. You need to be 17½, a diploma or GED, and algebra.', src: 'abcSocal', guide: '/guides/electrician-los-angeles' },
        { area: 'Northern California', name: 'ABC Northern California', facts: 'Based in Livermore. Phone (925) 474-1300.', src: 'abcNorcal' },
        { area: 'San Diego', name: 'ABC San Diego', facts: 'Based in Poway.', src: 'abcSd' }
      ]
    },
    school: {
      what: 'Community colleges teach the trade in classes and labs. Being enrolled in a state-approved school lets you register as a trainee, so ask whether a program qualifies. The school hours don\'t count toward the 8,000; the hours come from working under a certified electrician. Some colleges also give credit to apprentices in partner programs (Palomar with San Diego\'s union program, for example), so their award counts include apprentices.',
      cip: '4603'
    },
    steps: [
      'Take algebra and pass it with a C or better. Every apprenticeship above asks for it.',
      'Gather a diploma or GED, a photo ID and your Social Security card.',
      'Find the union and non-union programs for your area, and write down when each one takes applications.',
      'Apply to more than one program if you can, and practice for the entrance test.',
      'If you\'re not accepted yet, enroll in electrical classes at a state-approved school and register as a trainee, so you can start logging hours.'
    ],
    stepsSrc: ['eti', 'sd', 'sf', 'abcSocal', 'trainee'],
    src: CA_SRC
  },
  {
    slug: 'electrician-texas',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'TX',
    stateName: 'Texas',
    checked: 'November 11, 2026',
    title: 'How to become an electrician in Texas',
    description: 'What Texas requires to work as an electrician: an apprentice license, 8,000 hours under a master electrician and the journeyman exam, plus the apprenticeships in Houston, Dallas–Fort Worth, Austin and San Antonio. From official sources.',
    lede: 'In Texas you need a state license to do any electrical work, even as a beginner. You start with an apprentice license, work 8,000 hours under the supervision of a Texas master electrician, and pass the journeyman exam.',
    rules: [
      { dt: 'Apprentice license first', dd: 'Anyone doing electrical work in Texas must be licensed. The apprentice license needs no experience or exam: you apply online, pay $20 and renew it every year. You work under the supervision of a licensed master electrician, journeyman electrician or residential wireman.', src: ['apprentice'] },
      { dt: 'Hours you need', dd: '8,000 hours of on-the-job training under the supervision of a Texas master electrician for a journeyman license. Each master who supervised you signs a form verifying your hours. You can apply to take the exam once you have 7,000.', src: ['journeyman'] },
      { dt: 'The exam', dd: 'Given by PSI in two parts, knowledge and calculations. It\'s open book, using a soft-bound copy of the 2026 National Electrical Code, and you need 70% to pass. You can retake it as many times as you need, though each try may cost another fee.', src: ['exam'] },
      { dt: 'Applying for the journeyman license', dd: '$30 application fee, mailed with the application.', src: ['journeyman'] }
    ],
    routesIntro: 'Either way, the hours have to be worked as a licensed apprentice. An apprenticeship places you with a contractor and adds classes; on your own, you find an employer with a master electrician to supervise you. Texas apprenticeships pay you, but many also charge tuition for the classes, so ask what it costs.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and the National Electrical Contractors Association (NECA). The Houston, Dallas–Fort Worth and Austin programs each take four years: 8,000 hours on the job plus classes. In Houston and Dallas–Fort Worth, the training center places you with a contractor when there\'s work.',
      programs: [
        { area: 'Houston', name: 'Houston Electrical JATC', facts: 'Starts at $18.34 an hour. You need to be 18, a transcript showing graduation (or a GED) and one full credit of algebra, and a Texas apprentice license. $30 application fee. Most accepted applicants get scholarships covering most training costs.', src: 'houston', more: 'houstonFaq' },
        { area: 'Dallas–Fort Worth', name: 'North Texas Electrical Training Center', facts: 'Starts at 50% of the $40.65 journeyman wage (as of March 2026), rising to 80%. You need to be 18, a diploma or GED, a year of high school algebra, a Texas apprentice license, a driver\'s license and a qualifying aptitude test score. Tuition and books come to about $7,200 over four years.', src: 'ntx', more: 'ntxFaq' },
        { area: 'Austin', name: 'Austin Electrical Training Alliance', facts: 'Starts at $21.07 an hour (55% of the journeyman wage). $35 application fee, then an aptitude test in algebra and reading; if you don\'t pass, you wait 90 days to retake it. Tuition is announced before classes start.', src: 'austin' },
        { area: 'San Antonio', name: 'South Texas Training Center', facts: 'You need to be 17, a high school diploma or GED with an Algebra 1 credit, and a photo ID. No experience needed. Apply, then take the aptitude test.', src: 'sa' }
      ],
      more: 'Other parts of Texas have their own union training centers. The Texas Workforce Commission points to the federal apprenticeship finder to search by area.'
    },
    nonunion: {
      what: 'Run by contractor groups for non-union employers. Like union programs, they take about four years and 8,000 hours, with classes alongside paid work.',
      programs: [
        { area: 'San Antonio and South Texas', name: 'ABC South Texas', facts: 'Paid work from day one, with apprentices placed across a 22-county region. You need to be 18 and a diploma or GED; no experience needed.', src: 'abcSouth' },
        { area: 'Statewide', name: 'Independent Electrical Contractors (IEC)', facts: 'Chapters in Texas include IEC Dallas; IEC\'s site finds the chapter nearest you. About four years: 8,000 hours with an IEC contractor and 576 hours of evening classes. It isn\'t free, though your employer may help with tuition. IEC Dallas apprentices can earn up to 37 hours of college credit, and it also runs an 18-week pre-apprenticeship.', src: 'iec', more: 'iecDallas' }
      ]
    },
    school: {
      heading: 'School first, then apprentice hours',
      what: 'Texas doesn\'t require school, and school hours don\'t count toward the 8,000. A community college certificate can teach you the basics before you look for an apprentice job.',
      cip: '4603'
    },
    steps: [
      'Take algebra and pass it. The union programs above ask for at least one year of it.',
      'Apply online for your Texas apprentice electrician license ($20). Several programs require it before you apply.',
      'Gather a diploma or GED (or transcripts), a photo ID or driver\'s license and your Social Security card.',
      'Apply to the union and non-union programs in your area, and practice for the aptitude test.',
      'Keep a record of every hour you work and who supervised you; you\'ll need each master electrician to verify them.'
    ],
    stepsSrc: ['apprentice', 'journeyman', 'houston', 'ntx'],
    src: TX_SRC
  }
];

export const stateGuideBySlug = new Map(STATE_GUIDES.map((g) => [g.slug, g]));
export const guideFor = (trade, state) => STATE_GUIDES.find((g) => g.trade === trade && g.state === state);
export const guideSchools = (g) => ({ list: publicSchools(g.state, g.school.cip), all: countAll(g.state, g.school.cip) });
