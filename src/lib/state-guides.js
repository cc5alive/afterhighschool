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

const uaFind = { label: 'United Association (UA, the plumbers and pipefitters union): find your local union', url: 'https://ua.org/find-a-local-union/' };
const EPA = {
  epa608: { label: 'U.S. Environmental Protection Agency: Section 608 technician certification', url: 'https://www.epa.gov/section608/section-608-technician-certification-0' },
  epaSales: { label: 'U.S. Environmental Protection Agency: refrigerant sales restriction', url: 'https://www.epa.gov/section608/refrigerant-sales-restriction' }
};

const TXP_SRC = {
  apprentice: { label: 'Texas State Board of Plumbing Examiners: Plumber\'s Apprentice', url: 'https://tsbpe.texas.gov/license-types/apprentice' },
  journeyman: { label: 'Texas State Board of Plumbing Examiners: Journeyman Plumber', url: 'https://tsbpe.texas.gov/license-types/journeyman' },
  twc: TX_SRC.twc,
  uaFind,
  uaPlumb: { label: 'United Association: plumbers', url: 'https://ua.org/plumbers/' },
  abcPlumb: { label: 'ABC South Texas: how to become a plumber in Texas (July 6, 2026)', url: 'https://www.abcsouthtexas.org/how-to-become-a-plumber-in-texas-abc-south-texas-apprenticeship-spotlight/' },
  scorecard: SCORECARD
};

const TXH_SRC = {
  tech: { label: 'Texas Department of Licensing and Regulation: register as an air conditioning and refrigeration technician', url: 'https://www.tdlr.texas.gov/acr/technician-apply.htm' },
  certTech: { label: 'Texas Department of Licensing and Regulation: apply as a certified technician', url: 'https://www.tdlr.texas.gov/acr/certified-tech-apply.htm' },
  contractor: { label: 'Texas Department of Licensing and Regulation: apply for an air conditioning and refrigeration contractor license', url: 'https://www.tdlr.texas.gov/acr/contractor-apply.htm' },
  ...EPA,
  twc: TX_SRC.twc,
  uaFind,
  uaHvac: { label: 'United Association: HVACR service technicians', url: 'https://ua.org/hvacr-service-technicians/' },
  abcCrafts: { label: 'ABC South Texas: workforce development and apprenticeship crafts', url: 'https://www.abcsouthtexas.org/workforce-development/' },
  scorecard: SCORECARD
};

const FL_SRC = {
  dbpr: { label: 'Florida Department of Business and Professional Regulation: Electrical Contractors\' Licensing Board FAQs', url: 'https://www2.myfloridalicense.com/electrical-contractors/faqs/' },
  statute: { label: 'Florida Statutes, section 489.5335 (journeyman licenses issued by counties and cities)', url: 'https://flsenate.gov/laws/statutes/2024/489.5335' },
  miami: { label: 'Miami-Dade County: electrical licensing', url: 'https://www.miamidade.gov/licenses/electrical.asp' },
  broward: { label: 'Broward County: journeyman certificate application packet', url: 'https://www.broward.org/Building/Forms/Documents/Journeyman.pdf' },
  fldoe: { label: 'Florida Department of Education: apprenticeship programs', url: 'https://www.fldoe.org/academics/career-adult-edu/apprenticeship-programs/' },
  sfl: { label: 'IBEW Local 349: apprenticeship (South Florida)', url: 'https://www.ibew349.org/?zone=%2Funionactive%2Fview_page.cfm&page=Apprenticeship' },
  fec: { label: 'Florida East Coast Electrical JATC: our apprenticeship', url: 'https://www.fecjatc.com/?zone=%2Funionactive%2Fview_page.cfm&page=OUR20APPRENTICESHIP' },
  cfl: { label: 'Electrical Training Alliance of Central Florida: how to apply', url: 'https://www.etacfl.org/how-to-apply' },
  jax: { label: 'Electrical Training Alliance of Jacksonville: apply', url: 'https://www.etajax.org/apply' },
  feat: { label: 'Orange Technical College: electrician apprenticeship (Florida Electrical Apprenticeship and Training)', url: 'https://www.orangetechcollege.net/electrical-apprenticeship' },
  iec: { label: 'Independent Electrical Contractors: apprenticeship', url: 'https://www.ieci.org/apprenticeship' },
  scorecard: SCORECARD
};

const NY_SRC = {
  nyc: { label: 'NYC Department of Buildings: master and special electrician licenses', url: 'https://www.nyc.gov/site/buildings/industry/obtain-a-master-and-special-electrician-license.page' },
  ulster: { label: 'Ulster County Electrical Licensing Board: master electrician license', url: 'https://www.ulstercountyny.gov/Boards/Electrical-Licensing-Board/Master-Electricians-License-Application' },
  nydol: { label: 'New York State Department of Labor: apprenticeship announcements', url: 'https://dol.ny.gov/apprenticeship/apprenticeship-announcements' },
  local3: { label: 'NYS Department of Labor: JAC IBEW Electrical Local 3 recruitment (posted September 10, 2026)', url: 'https://dol.ny.gov/ap/jac-ibew-electrical-local-3' },
  buffalo: { label: 'NYS Department of Labor: Electricians JAC Buffalo Local 41 recruitment (posted July 29, 2026)', url: 'https://dol.ny.gov/ap/electricians-jac-buffalo-lu-41-1' },
  rochester: { label: 'NYS Department of Labor: Rochester Electrical JATC Local 86 recruitment (January 2026)', url: 'https://dol.ny.gov/news/rochester-electrical-jatc-lu-86-1' },
  cny: { label: 'NYS Department of Labor: Central New York Electrical Training Alliance recruitment (April 2026)', url: 'https://dol.ny.gov/ap/central-new-york-electrical-training-alliance' },
  usis: { label: 'NYS Department of Labor: USIS Electric apprenticeship recruitment (March 2026)', url: 'https://dol.ny.gov/ap/usis-electric-inc' },
  scorecard: SCORECARD
};

const NC_SRC = {
  exempt: { label: 'North Carolina General Statutes, section 87-43.1 (work that isn\'t electrical contracting)', url: 'https://ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_87/GS_87-43.1.html' },
  hours: { label: 'North Carolina Administrative Code, 21 NCAC 18B .0201 (experience needed for each license exam), via Cornell Law School', url: 'https://law.cornell.edu/regulations/north-carolina/21-N-C-Admin-Code-18B-0201' },
  ncfind: { label: 'ApprenticeshipNC (North Carolina Community College System): find a registered apprenticeship', url: 'https://nccommunitycolleges.edu/businesses/apprenticeships/explore-apprenticeship-opportunities/' },
  rdu: { label: 'ApprenticeshipNC: Raleigh-Durham Electrical JATC', url: 'https://nccommunitycolleges.edu/students/what-we-offer/apprenticeships/apprenticeship-opportunities/raleigh-durham-electrical-jatc' },
  abc: { label: 'ABC Carolinas: electrical apprenticeship (April 29, 2026)', url: 'https://abccarolinas.org/electrician-apprenticeship-north-carolina-abc-carolinas-electrical-apprenticeship-skills-competition-2026/' },
  iec: { label: 'Independent Electrical Contractors: apprenticeship', url: 'https://www.ieci.org/apprenticeship' },
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
  },
  {
    slug: 'plumber-texas',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'TX',
    stateName: 'Texas',
    checked: 'November 12, 2026',
    title: 'How to become a plumber in Texas',
    description: 'What Texas requires to work as a plumber: register as a Plumber\'s Apprentice, work 8,000 hours, take a 48-hour course and pass the journeyman exam. Plus paid apprenticeships and public college programs. From official sources.',
    lede: 'In Texas you register with the State Board of Plumbing Examiners before you start. As a registered Plumber\'s Apprentice you work alongside a licensed plumber, and after 8,000 hours and a 48-hour course you can take the journeyman exam.',
    rules: [
      { dt: 'Register first', dd: 'You must register as a Plumber\'s Apprentice before your hours start counting; hours worked before you register don\'t count. You need to be at least 16. It costs $15, and $15 a year to renew.', src: ['apprentice'] },
      { dt: 'Working as an apprentice', dd: 'A licensed plumber has to be on the job site with you the whole time you do plumbing work. Without one there, you can only do manual tasks like digging trenches.', src: ['apprentice'] },
      { dt: 'Hours and training you need', dd: '8,000 hours in the plumbing trade, plus a 48-hour course approved by the board. If you\'re in or have finished a registered apprenticeship (approved by the U.S. Department of Labor), you don\'t need the 48-hour course.', src: ['journeyman'] },
      { dt: 'The journeyman exam and license', dd: '$40 to apply for the exam, sent with forms from your employers confirming your hours. Everyone is fingerprinted once. After you pass, the license is $40, and $40 a year to renew. As a journeyman you work under a Responsible Master Plumber and can supervise apprentices.', src: ['journeyman'] }
    ],
    routesIntro: 'Every route runs through the same 8,000 hours as a registered apprentice. An apprenticeship places you with a contractor and adds classes; you can also get hired by a plumbing company on your own and take the 48-hour course.',
    union: {
      what: 'Plumbing apprenticeships with the United Association (UA), the plumbers and pipefitters union, are run by local unions. The UA says its apprentices "get paid from day one with no student debt." Each local sets its own requirements and application dates.',
      programs: [],
      more: 'Find the UA local for your part of Texas, then ask it about its apprenticeship.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['uaPlumb', 'uaFind']
    },
    nonunion: {
      what: 'Run by contractor groups for non-union employers, with classes alongside paid work.',
      programs: [
        { area: 'San Antonio and South Texas', name: 'ABC South Texas plumbing apprenticeship', facts: '4 years (Plumbing 1 to 4). Paid from day one, starting at about half the journeyman wage. You need to be 18, a diploma or GED, a sponsoring employer and your Plumber\'s Apprentice registration. Tuition is $2,450 if your employer is an ABC member, $2,825 if not. In 2026, enrollment ran March 12 to August 12. Phone (210) 342-1994.', src: 'abcPlumb' }
      ],
      more: 'The Texas Workforce Commission points to the federal apprenticeship finder to search for other programs by area.'
    },
    school: {
      heading: 'School first, then apprentice hours',
      what: 'Texas doesn\'t require school, and you still need the 8,000 hours as a registered apprentice. A community college program can teach you the basics before you look for work.',
      cip: '4605'
    },
    steps: [
      'Register as a Plumber\'s Apprentice with the State Board of Plumbing Examiners ($15). Do it before you start working, so every hour counts.',
      'Gather a diploma or GED, a photo ID and your Social Security card.',
      'Apply to apprenticeships in your area, union and non-union, or apply for helper jobs with plumbing companies.',
      'Keep a record of every hour you work and who you worked for; each employer signs a form confirming them.',
      'Take a board-approved 48-hour course (unless you\'re in a registered apprenticeship), then apply for the journeyman exam.'
    ],
    stepsSrc: ['apprentice', 'journeyman', 'abcPlumb'],
    src: TXP_SRC
  },
  {
    slug: 'hvac-texas',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'TX',
    stateName: 'Texas',
    checked: 'November 12, 2026',
    title: 'How to become an HVAC technician in Texas',
    description: 'What Texas requires to work on heating and air conditioning: register as a technician, get EPA 608 certified, and the routes to certified technician and contractor. Plus public college programs. From official sources.',
    lede: 'In Texas, anyone who helps a licensed air conditioning and refrigeration contractor has to register with the state. Registering takes no exam or experience, so you can start as a helper and learn on the job, then get certified and, later, licensed as a contractor.',
    rules: [
      { dt: 'Register as a technician', dd: 'Anyone who assists a licensed air conditioning and refrigeration contractor must register with the Texas Department of Licensing and Regulation. You need to be at least 16. It costs $20 and lasts one year. You work under a licensed contractor\'s supervision.', src: ['tech'] },
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Certified technician (optional)', dd: 'You need to be 18 and have 24 months of work under a licensed contractor, or finish a 2,000-hour training program approved by the state. Then you pass an exam within a year of applying. It costs $50.', src: ['certTech'] },
      { dt: 'Contractor license, later', dd: 'To run jobs yourself, you need to be 18 and have 48 months of experience in the past 72 under a licensed contractor (or 12 months as a certified technician plus 36 months of experience in the past 48), pass an exam and carry insurance.', src: ['contractor'] }
    ],
    routesIntro: 'Most people start by getting hired as a helper and registering as a technician. An apprenticeship adds classes and a set pay scale; a school program teaches the basics first, and a state-approved one counts toward certified technician.',
    union: {
      what: 'The United Association (UA), the plumbers and pipefitters union, trains HVACR (heating, ventilation, air conditioning and refrigeration) service technicians through its local unions. The UA says its apprentices "get paid from day one, with no student debt." Each local sets its own requirements and application dates.',
      programs: [],
      more: 'Find the UA local for your part of Texas and ask whether it trains HVACR service technicians.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['uaHvac', 'uaFind']
    },
    nonunion: {
      what: 'Run by contractor groups for non-union employers, with classes alongside paid work.',
      programs: [
        { area: 'San Antonio and South Texas', name: 'ABC South Texas sheet metal apprenticeship', facts: 'Sheet metal workers make and install ventilation and air ducts, and can specialize in HVAC systems. Includes 8,000 hours of paid on-the-job training with a sponsoring employer. Phone (210) 342-1994.', src: 'abcCrafts' }
      ],
      more: 'The Texas Workforce Commission points to the federal apprenticeship finder to search for HVAC programs by area.'
    },
    school: {
      heading: 'School first',
      what: 'Texas doesn\'t require school to register as a technician. A 2,000-hour program approved by the state can replace the 24 months of work for certified technician, so ask a program whether it\'s approved before you enroll.',
      cip: '4702'
    },
    steps: [
      'Register as an air conditioning and refrigeration technician with the state ($20) once you\'re 16.',
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Apply for helper jobs with licensed contractors, or apply to an apprenticeship or a state-approved school program.',
      'Keep a record of your months of work and who supervised you; you\'ll need it for certified technician and the contractor license.',
      'After 24 months of work (or a 2,000-hour approved program), apply to take the certified technician exam.'
    ],
    stepsSrc: ['tech', 'epa608', 'certTech', 'contractor'],
    src: TXH_SRC
  },
  {
    slug: 'electrician-florida',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'FL',
    stateName: 'Florida',
    checked: 'November 11, 2026',
    title: 'How to become an electrician in Florida',
    description: 'How electrician licensing works in Florida, where counties and cities issue journeyman licenses, plus the paid apprenticeships in South Florida, Palm Beach, Central Florida and Jacksonville. From official sources.',
    lede: 'Florida doesn\'t license journeyman electricians statewide. The state licenses electrical contractors; journeyman licenses come from your county or city, and each sets its own rules. A four-year paid apprenticeship is one common way to get the experience they ask for.',
    rules: [
      { dt: 'Who licenses electricians', dd: 'The state\'s licensing department says it doesn\'t license or regulate journeymen, and tells you to contact the licensing office of the county where you\'ll work.', src: ['dbpr'] },
      { dt: 'Example: Miami-Dade', dd: 'A journeyman needs a county certificate of competency: three years of proven experience in the trade (education can count for up to half) and a passed exam. Each job site needs at least one journeyman for every three trainees.', src: ['miami'] },
      { dt: 'Example: Broward', dd: 'You apply to the county with a notarized letter from a licensed employer confirming your experience, then take an exam that needs 75% to pass. The electrical fee is $115.', src: ['broward'] },
      { dt: 'Moving within Florida', dd: 'State law requires counties and cities to recognize an electrical journeyman license issued by another Florida county or city.', src: ['statute'] },
      { dt: 'Later: your own business', dd: 'To run an electrical contracting business statewide you need a state contractor license, which takes years of experience, including management experience, and a state exam.', src: ['dbpr'] }
    ],
    routesIntro: 'An apprenticeship is the most direct route: four years of paid work with a contractor plus classes, which counts toward a journeyman license. Some programs charge no tuition at all.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and the National Electrical Contractors Association (NECA). Most ask for algebra (or an online tech math course), a diploma or GED, an aptitude test in algebra and reading, and an interview.',
      programs: [
        { area: 'Miami and Southwest Florida', name: 'IBEW Local 349 apprenticeship school', facts: 'Offices in Miami and Fort Myers. You need to be 18, a diploma, passing algebra and a driver\'s license. Applications are open all year, but must be complete by March 1 for the fall class.', src: 'sfl' },
        { area: 'Palm Beach, Broward and the Treasure Coast', name: 'Florida East Coast Electrical JATC', facts: 'At least 8,000 hours of paid work and 720 hours of classes, and contractors pay you for class time. No tuition; you buy books, a laptop and hand tools. You can apply at 17 and start at 18.', src: 'fec' },
        { area: 'Central Florida', name: 'Electrical Training Alliance of Central Florida', facts: 'Based in Winter Park. You can apply at 17 and start at 18. You need a diploma or GED and a year of algebra. Online applications, with interviews every month.', src: 'cfl' },
        { area: 'Jacksonville', name: 'Electrical Training Alliance of Jacksonville', facts: 'Four years. Tuition is covered; books cost about $780 a year. $5 application fee. You need Algebra 1. The 2026 application deadline was November 5.', src: 'jax' }
      ],
      more: 'Other parts of Florida have their own programs. The state\'s apprenticeship office has a map of programs and a contact for each region.'
    },
    nonunion: {
      what: 'Run by contractor groups for non-union employers, with the same four-year, 8,000-hour shape.',
      programs: [
        { area: 'Central Florida', name: 'Florida Electrical Apprenticeship and Training (FEAT)', facts: 'Four years and 8,000 hours, with paid work for a participating employer and classes at Orange Technical College. Phone (407) 438-3328.', src: 'feat' },
        { area: 'Statewide', name: 'Independent Electrical Contractors (IEC)', facts: 'Chapters across Florida. About four years: 8,000 hours with an IEC contractor and 576 hours of evening classes. It isn\'t free, though your employer may help with tuition.', src: 'iec' }
      ]
    },
    school: {
      heading: 'Technical college programs',
      what: 'Florida\'s public technical colleges and state colleges teach electrical programs, and several also host apprenticeship classes (Orange Technical College with FEAT, for example). A certificate can help you get hired, but your county decides what experience counts toward a journeyman license.',
      cip: '4603'
    },
    steps: [
      'Take algebra and pass it. Every union program above asks for it.',
      'Find out what your county requires for a journeyman license.',
      'Gather a diploma or GED, transcripts, a photo ID or driver\'s license, your Social Security card and a birth certificate.',
      'Apply to the programs near you, and note each one\'s deadline (South Florida: March 1 for fall).',
      'Practice for the aptitude test in algebra and reading.'
    ],
    stepsSrc: ['sfl', 'fec', 'cfl', 'jax', 'dbpr'],
    src: FL_SRC
  },
  {
    slug: 'electrician-new-york',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'NY',
    stateName: 'New York',
    checked: 'November 11, 2026',
    title: 'How to become an electrician in New York',
    description: 'How to become an electrician in New York: local license rules (New York City and Ulster County as examples), and the paid apprenticeships in New York City, Buffalo, Rochester, Central New York and the Hudson Valley, with their application dates. From official sources.',
    lede: 'In New York, the license rules you\'ll follow depend on where you work: New York City and Ulster County, for example, each license master electricians under their own rules. A common route starts with a paid apprenticeship registered with the state, and some have short application windows.',
    rules: [
      { dt: 'Example: New York City', dd: 'A master electrician license takes 7 years of work within the last 10 under a licensed master or special electrician (2 of them in the city), or 5 years after a registered apprenticeship. You must be 18 and pass a written exam ($585, no reference books, 70% to pass) and a practical exam ($530).', src: ['nyc'] },
      { dt: 'Example: Ulster County', dd: 'A master electrician license takes at least 7 years of full-time electrical construction work, plus training such as a four-year apprenticeship, and a written exam on the electrical code (75% to pass).', src: ['ulster'] },
      { dt: 'Finding apprenticeships', dd: 'Registered apprenticeships post their openings with the state Department of Labor, including the dates, number of openings, requirements and how to apply.', src: ['nydol'] }
    ],
    routesIntro: 'Each program below is registered with the state, pays you while you work and adds classes. Check the dates closely: some take applications for a year, others for two weeks.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors. Every program below asks for a year of high school algebra, and most also give an aptitude test.',
      programs: [
        { area: 'New York City area', name: 'Joint Industry Board, IBEW Local 3', facts: '300 openings in 2026. Applications were requested by registered mail only, October 19–30, capped at the first 2,000 letters. You need to be 18, a year of algebra, two years living within 60 miles of Columbus Circle and an aptitude score of 3 or higher. $25 fee, which can be waived.', src: 'local3' },
        { area: 'Buffalo and Erie County', name: 'Electricians JAC, IBEW Local 41', facts: 'Open October 7, 2026 to September 29, 2027. Pick up an application in person in Orchard Park on Wednesdays, 1 to 5 p.m. You need to be 18, a diploma or GED with a year of algebra, a New York driver\'s license and to live in the local\'s area.', src: 'buffalo' },
        { area: 'Rochester', name: 'Rochester Electrical JATC, IBEW Local 86', facts: 'Open April 1, 2026 to March 31, 2027, online only. You need to be 18 and a diploma or GED with a year of algebra. $10 testing fee, which can be waived.', src: 'rochester' },
        { area: 'Central NY, Finger Lakes, Mohawk Valley, Southern Tier', name: 'Central New York Electrical Training Alliance', facts: 'Open July 1, 2026 to June 30, 2027, online any day. You need to be 18, a diploma or GED with a year of algebra, and a passing aptitude test ($20, can be waived).', src: 'cny' }
      ],
      more: 'Other areas, including Westchester, Binghamton, Ithaca, Elmira and Watertown, have their own programs and post their openings with the state.'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by employers',
      what: 'Some electrical contractors register their own apprenticeship programs with the state.',
      programs: [
        { area: 'Hudson Valley, Long Island and NYC', name: 'USIS Electric (Pearl River)', facts: '24 openings, May 11, 2026 to May 7, 2027. Apply in person in Pearl River on weekdays. You need to be 18, a diploma or GED with a year of algebra, and to live in Orange, Putnam, Rockland or Westchester County (or Bergen County, NJ).', src: 'usis' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges, SUNY technical colleges and BOCES centers teach electrical programs. Experience can also open doors: Buffalo\'s program accepts 4,000 hours of documented electrical construction work in place of its education requirement.',
      cip: '4603'
    },
    steps: [
      'Take a year of algebra and pass it. Every program above asks for it.',
      'Get a diploma or GED (or TASC), and keep your transcripts.',
      'Check the state\'s apprenticeship announcements for programs near you, and note each one\'s dates and how it takes applications (online, in person or by mail).',
      'Practice for the electrical aptitude test.',
      'If you plan to work in New York City or another place with its own license, read its rules early. In New York City, only experience under a licensed master or special electrician counts.'
    ],
    stepsSrc: ['local3', 'buffalo', 'rochester', 'cny', 'nydol', 'nyc'],
    src: NY_SRC
  },
  {
    slug: 'electrician-north-carolina',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'NC',
    stateName: 'North Carolina',
    checked: 'November 11, 2026',
    title: 'How to become an electrician in North Carolina',
    description: 'How to become an electrician in North Carolina: start as an employee of a licensed contractor, learn through a paid apprenticeship or community college, and what the state\'s contractor licenses require later. From official sources.',
    lede: 'In North Carolina, you can start by getting hired: state law says work done by an employee of a licensed electrical contractor isn\'t electrical contracting, so you don\'t need your own license to learn on the job. The state licenses electrical contractors, and those licenses take thousands of hours of experience.',
    rules: [
      { dt: 'Working as an employee', dd: 'Under state law, work done by a genuine employee of a licensed electrical contractor isn\'t electrical contracting, which is what needs a license.', src: ['exempt'] },
      { dt: 'Your own license later', dd: 'Contractor licenses come in three main levels, each with an exam. Limited takes 3,000 hours of experience, intermediate 5,750 and unlimited 9,000, and most of those hours must be what the rules call primary experience.', src: ['hours'] },
      { dt: 'Finding apprenticeships', dd: 'ApprenticeshipNC, run by the state\'s community college system, keeps a searchable directory of registered apprenticeships by area. It doesn\'t list job openings, so you contact the employer or school partner listed.', src: ['ncfind'] }
    ],
    routesIntro: 'Because employees don\'t need their own license, the main choice is how you learn: a registered apprenticeship that pays you and adds classes, or community college classes first.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Raleigh, Durham, Fayetteville and Halifax County', name: 'Raleigh-Durham Electrical JATC', facts: 'Covers Cumberland, Durham, Halifax and Wake counties. Contact the program through ApprenticeshipNC\'s listing to ask about applying.', src: 'rdu' }
      ],
      more: 'Other union programs are in the state\'s apprenticeship directory.'
    },
    nonunion: {
      what: 'Run by contractor groups for non-union employers.',
      programs: [
        { area: 'Charlotte and statewide', name: 'ABC Carolinas', facts: 'Four years of full-time paid work with evening classes. $185 per level (four levels). You need to be 18, a diploma or GED, a driver\'s license and a Social Security card; you get hired by a participating contractor, then enroll. Phone (704) 367-1331.', src: 'abc' },
        { area: 'Statewide', name: 'Independent Electrical Contractors (IEC)', facts: 'About four years: 8,000 hours with an IEC contractor and 576 hours of evening classes. It isn\'t free, though your employer may help with tuition. IEC\'s site finds the chapter nearest you.', src: 'iec' }
      ]
    },
    school: {
      heading: 'Community college programs',
      what: 'North Carolina\'s community colleges teach electrical systems in certificate, diploma and degree programs. Classes can help you get hired, and the hours you then work count toward a contractor license later.',
      cip: '4603'
    },
    steps: [
      'Take algebra and pass it. Some programs ask for it, and most give an aptitude test in math and reading.',
      'Gather a diploma or GED, a driver\'s license and your Social Security card.',
      'Search ApprenticeshipNC\'s directory for electrical programs near you, and contact them about applying.',
      'Or look for a job with a licensed electrical contractor, and ask whether they sponsor an apprenticeship.',
      'Keep a record of your hours and who you worked for. You\'ll need it if you go for a contractor license.'
    ],
    stepsSrc: ['abc', 'ncfind', 'exempt', 'hours'],
    src: NC_SRC
  }
];

export const stateGuideBySlug = new Map(STATE_GUIDES.map((g) => [g.slug, g]));
export const guideFor = (trade, state) => STATE_GUIDES.find((g) => g.trade === trade && g.state === state);
export const guideSchools = (g) => ({ list: publicSchools(g.state, g.school.cip), all: countAll(g.state, g.school.cip) });
