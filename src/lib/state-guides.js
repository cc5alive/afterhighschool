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

const CSLB = {
  cslbFaq: { label: 'California Contractors State License Board: frequently asked questions about journey-level experience', url: 'https://www.cslb.ca.gov/Contractors/Journeymen/Journeymen_FAQs.aspx' },
  cslbExp: { label: 'California Contractors State License Board: qualifying experience for the exam', url: 'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/experience_for_exam.aspx' },
  cslbSteps: { label: 'California Contractors State License Board: steps to become a licensed contractor (October 2025)', url: 'https://cslb.ca.gov/Resources/Contractors/Journeymen/2_-_LicensedContractorSteps_100725.pdf' }
};
const dasProg = (name, id) => ({ label: `California Division of Apprenticeship Standards: ${name}`, url: `https://www.dir.ca.gov/databases/das/results_aigdetail.asp?varOccId=${id}` });

const CAP_SRC = {
  ...CSLB,
  das: CA_SRC.das,
  la78: dasProg('Los Angeles Metropolitan Plumbers JATC', 9117),
  sd230: dasProg('San Diego & Imperial Counties Pipe Trades JAC (plumber)', 135),
  ua342: dasProg('United Association Local Union 342 JATC (plumber)', 9339),
  abcSocal: CA_SRC.abcSocal,
  abcSdPlumb: dasProg('ABC San Diego plumbing and pipefitting program', 8919),
  scorecard: SCORECARD
};

const CAH_SRC = {
  ...CSLB,
  cslbC20: { label: 'California Contractors State License Board: C-20 warm-air heating, ventilating and air-conditioning contractor', url: 'https://www.cslb.ca.gov/About_Us/Library/Licensing_Classifications/Licensing_Classifications_Detail.aspx?Class=C-20' },
  ...EPA,
  das: CA_SRC.das,
  sdRefrig: dasProg('San Diego & Imperial Counties Pipe Trades Service Refrigeration & Air Conditioning JAC', 9110),
  kern105: dasProg('Kern & Northern Los Angeles Counties Air Conditioning & Sheet Metal Workers JATC', 9769),
  abcSocal: CA_SRC.abcSocal,
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

const NCB = 'NC State Board of Examiners of Plumbing, Heating, and Fire Sprinkler Contractors';
const NCPH_SRC = {
  employee: { label: 'North Carolina General Statutes, Chapter 87, Article 2 (plumbing, heating and fire sprinkler contractors)', url: 'https://www.ncleg.net/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_87/Article_2.html' },
  supervision: { label: `${NCB}: newsletter on job supervision (July 2023)`, url: 'https://nclicensing.org/wp-content/uploads/2023/07/2023-07.pdf' },
  applicant: { label: `${NCB}: applicant information`, url: 'https://nclicensing.org/applicant-information/' },
  techDefs: { label: `${NCB}: technician license definitions (2025)`, url: 'https://nclicensing.org/wp-content/uploads/2025/01/License-Definitions-Technician-2025v1.pdf' },
  rules: { label: `${NCB}: experience rules, 21 NCAC 50 .0306 (March 2024 newsletter)`, url: 'https://nclicensing.org/wp-content/uploads/2024/03/2024-03.pdf' },
  packet: { label: `${NCB}: 2026 exam application packet`, url: 'https://nclicensing.org/wp-content/uploads/2026/02/PHFP-Exam-App-2026-01.pdf' },
  ...EPA,
  uaFind,
  ncfind: NC_SRC.ncfind,
  mtc: { label: 'ApprenticeshipNC: Mechanical Trades Carolina', url: 'https://nccommunitycolleges.edu/students/what-we-offer/apprenticeships/apprenticeship-opportunities/mechanical-trades-carolina' },
  mtcUa: { label: 'SkillUp: UA Local 421 apprenticeship at Mechanical Trades Carolina', url: 'https://explore.skillup.org/all/training/ua-local-421/hvac-r-service-technician-apprenticeship' },
  cfcc: { label: 'Cape Fear Community College: apprenticeship partners and programs', url: 'https://cfcc.edu/business-and-industry-services/apprenticeship-partners-programs/' },
  scorecard: SCORECARD
};

const FLT_SRC = {
  employee: { label: 'Florida Statutes, section 489.103 (who the contractor licensing law doesn\'t cover, including employees of licensed contractors)', url: 'https://m.flsenate.gov/Statutes/489.103' },
  journeyStat: { label: 'Florida Statutes, section 489.1455 (plumbing, pipe fitting, mechanical and HVAC journeyman licenses)', url: 'https://www.flsenate.gov/Laws/Statutes/2024/0489.1455' },
  exam: { label: 'Florida Statutes, section 489.111 (who can take a state contractor exam)', url: 'https://m.flsenate.gov/Statutes/489.111' },
  classes: { label: 'Florida Statutes, section 489.105 (contractor definitions, including air conditioning Classes A and B)', url: 'https://m.flsenate.gov/Statutes/489.105' },
  miamiCats: { label: 'Miami-Dade County: personal certificate categories and experience required', url: 'https://www.miamidade.gov/licenses/library/forms/personal-exam-and-non-exam-categories.pdf' },
  miamiMech: { label: 'Miami-Dade County: mechanical licensing (journeyman rules)', url: 'https://miamidade.gov/licenses/mechanical.asp' },
  broward: FL_SRC.broward,
  fldoe: FL_SRC.fldoe,
  ...EPA,
  uaFind,
  local803: { label: 'UA Local 803 (Orlando): apprenticeship FAQ', url: 'https://localunion803.org/apprenticeship-faq/' },
  local803app: { label: 'UA Local 803: apprenticeship application (2025)', url: 'https://localunion803.org/wp-content/uploads/2025/06/Apprenticeship-Application-Revised-2025.pdf' },
  local803ap: { label: 'UA Local 803: apprenticeship', url: 'https://localunion803.org/apprenticeship/' },
  local234: { label: 'UA Local 234 (Jacksonville): apprenticeship', url: 'https://ua234.com/training' },
  arpec: { label: 'ARPEC (Local 725 training center, Miami): getting started', url: 'https://arpec.org/getting-started.html' },
  arpecAdm: { label: 'ARPEC: admissions', url: 'https://arpec.org/admissions/' },
  arpecReq: { label: 'ARPEC: who can apply', url: 'https://arpec.org/ideal-candidates.html' },
  arpecHvac: { label: 'ARPEC: HVAC/R program', url: 'https://arpec.org/hvacr-program.html' },
  hccPlumb: { label: 'Hillsborough Community College: plumber apprenticeship (ABC Florida Gulf Coast)', url: 'https://hccfl.edu/es/node/1220983' },
  hccHvac: { label: 'Hillsborough Community College: HVACR technician apprenticeship (ABC Florida Gulf Coast)', url: 'https://hccfl.edu/es/node/1203331' },
  nefba: { label: 'National Association of Home Builders: Northeast Florida Builders Association apprenticeship (March 2026)', url: 'https://www.nahb.org/blog/2026/03/new-training-center-strengthens-florida-hbas-50-year-apprenticeship-program' },
  scorecard: SCORECARD
};

const NYT_SRC = {
  nycBiz: { label: 'NYC MyCity Business: master plumber license', url: 'https://nyc-business.nyc.gov/nycbusiness/description/master-plumber-license' },
  nycJourney: { label: 'NYC Department of Buildings: journeyman plumber registration', url: 'https://www.nyc.gov/assets/buildings/pdf/jouneyman_plumber_fs_gas_work.pdf' },
  nycMaster: { label: 'NYC Department of Buildings: master plumber license (revised February 2026)', url: 'https://www.nyc.gov/assets/buildings/pdf/master_plumber_lic.pdf' },
  westTrade: { label: 'Westchester County Department of Consumer Protection: plumbing and electrical licenses', url: 'https://consumer.westchestercountyny.gov/trade-licenses' },
  westExam: { label: 'Westchester County: master and journey-level plumber exam application (February 2026)', url: 'https://consumer.westchestercountyny.gov/images/stories/pdfs/examapplicationforcountywidemasterplumberslicenseandjourneylevelplumber022026.pdf' },
  nycOil: { label: 'NYC Department of Buildings: oil burner equipment installer license', url: 'https://www.nyc.gov/site/buildings/industry/obtain-a-nyc-oil-burner-equipment-installer-license.page' },
  nycOilFees: { label: 'NYC Department of Buildings: oil burner equipment installer fees', url: 'https://www.nyc.gov/site/buildings/industry/oil-burner-equipment-installer.page' },
  nycBoiler: { label: 'NYC Department of Buildings: boiler work rules for owners', url: 'https://www.nyc.gov/site/buildings/property-or-business-owner/project-requirements-owner-boiler.page' },
  ...EPA,
  nydol: NY_SRC.nydol,
  local1: { label: 'NYS Department of Labor: Plumbers Local 1 JAC recruitment (June 2026)', url: 'https://dol.ny.gov/news/plumbers-local-1-jac' },
  local200: { label: 'NYS Department of Labor: Plumbers JATC Local 200 recruitment (February 2026)', url: 'https://dol.ny.gov/news/plumbers-jatc-local-union-200-0' },
  local22: { label: 'NYS Department of Labor: Plumbers & Steamfitters Local 22 recruitment (December 2025 to December 2026)', url: 'https://dol.ny.gov/ap/plumbers-steamfitters-lu-22-jac-western-ny-2' },
  local13: { label: 'NYS Department of Labor: Plumbing and Heating JATC Rochester Local 13 recruitment (March 2026 to March 2027)', url: 'https://dol.ny.gov/news/plumbing-and-heating-jatc-rochester-lu-13-0' },
  local81: { label: 'NYS Department of Labor: Plumbers & Steamfitters Local 81 recruitment (May 2026 to March 2027)', url: 'https://dol.ny.gov/news/plumbers-steamfitters-jatc-lu-81-1' },
  local21: { label: 'NYS Department of Labor: Plumbers & Steamfitters Local 21 recruitment (April 2026)', url: 'https://dol.ny.gov/news/plumbers-steamfitters-lu-21-0' },
  local773: { label: 'NYS Department of Labor: Plumbers & Steamfitters Local 773 recruitment (January to December 2026)', url: 'https://dol.ny.gov/ap/plumbers-steamfitters-jac-local-773-0' },
  scorecard: SCORECARD
};

// Pennsylvania, Illinois and Ohio (checked November 25, 2026).
const PA_STATE = { label: 'Pennsylvania Department of Labor & Industry: contractor licensing', url: 'https://www.pa.gov/agencies/dli/programs-services/labor-management-relations/bureau-of-occupational-and-industrial-safety/uniform-construction-code-home/contractor-licensing' };
const PA_COMMON = {
  state: PA_STATE,
  finder: { label: 'Pennsylvania Department of Labor & Industry: find a registered apprenticeship program', url: 'https://www.pa.gov/services/dli/find-a-registered-apprenticeship-program' },
  careerlink: { label: 'PA CareerLink: become an apprentice', url: 'https://www.pacareerlink.pa.gov/jponline/Apprenticeships/BecomeApprentice' },
  abcKey: { label: 'ABC Keystone: apprenticeship application process and requirements', url: 'https://abckeystone.org/apprenticeship/apprenticeship-enrollment/' },
  abcKeyApp: { label: 'ABC Keystone: apprenticeship application (trades offered)', url: 'https://abckeystone.org/apprenticeship/abc-keystone-apprenticeship-program-application/' },
  abcEast: { label: 'ABC Eastern Pennsylvania: apprenticeship programs', url: 'https://abceastpa.org/apprenticeship-programs-near-me-in-eastern-pennsylvania/' },
  scorecard: SCORECARD
};
const PA_SRC = {
  ...PA_COMMON,
  board: { label: 'Pennsylvania Department of State: State Board of Electrical Licensure (Act 108 of 2026)', url: 'https://www.pa.gov/agencies/dos/department-and-offices/bpoa/boards-commissions/electricians' },
  phl: { label: 'City of Philadelphia: get an electrical contractor license', url: 'https://www.phila.gov/services/permits-violations-licenses/get-a-license/trade-licenses/get-an-electrical-contractor-license/' },
  phlForm: { label: 'City of Philadelphia: electrical contractor license application (July 2025)', url: 'https://www.phila.gov/media/20250728144525/L_011_F_Electrical-Contractor-License-Application-Form-AB-Rev-7.2025.pdf' },
  pgh: { label: 'City of Pittsburgh: trade licenses (electrical)', url: 'https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/Licensing/Trade-Licenses' },
  local5: { label: 'Western Pennsylvania Electrical JATC (IBEW Local 5): application process', url: 'https://ibewlocal5jatc.org/become-an-apprentice/application-process/' }
};
const PAP_SRC = {
  ...PA_COMMON,
  phlApp: { label: 'City of Philadelphia: plumber (apprentice) license', url: 'https://business.phila.gov/plumber-apprentice-license/' },
  phlJourney: { label: 'City of Philadelphia: get a journeyman plumber license', url: 'https://www.phila.gov/services/permits-violations-licenses/get-a-license/trade-licenses/get-a-journeyman-plumber-license/' },
  phlMaster: { label: 'City of Philadelphia: get a master plumber\'s license', url: 'https://www.phila.gov/services/permits-violations-licenses/get-a-license/trade-licenses/get-a-master-plumbers-license/' },
  acPlumb: { label: 'Allegheny County Health Department: plumber licensing information', url: 'https://www.alleghenycounty.us/Services/Health-Department/Plumbing-Program/Licensing-Information' },
  local690: { label: 'Plumbers Local 690 (Philadelphia): 2027 apprentice applications', url: 'https://plumbers690.org/training.aspx?zone=training&pID=5881' },
  uaFind
};
const PAH_SRC = {
  ...PA_COMMON,
  ...EPA,
  pghHvac: { label: 'City of Pittsburgh: mechanical/HVAC trade license', url: 'https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/Licenses/Trade-Licenses/MechanicalHVAC-Trade-License' },
  phlMech: { label: 'City of Philadelphia: get a mechanical permit', url: 'https://www.phila.gov/services/permits-violations-licenses/apply-for-a-permit/building-and-repair-permits/get-a-mechanical-permit/' },
  phlWarm: { label: 'City of Philadelphia: warm air license eliminated (contractor license rules since 2017)', url: 'https://business.phila.gov/warm-air-installer-license/' },
  local420: { label: 'Steamfitters Local 420 (Philadelphia): apprenticeship applications', url: 'https://www.lu420.com/apprenticeship.aspx?zone=training&eID=920' },
  uaFind
};

const IL_COMMON = {
  finder: { label: 'Apprenticeship Illinois (Illinois workNet): find a program', url: 'https://www.illinoisworknet.com/ApprenticeshipIL/Pages/Apprentices.aspx' },
  scorecard: SCORECARD
};
const IL_SRC = {
  ...IL_COMMON,
  munic: { label: 'Illinois Municipal Code (65 ILCS 5): registration of electrical contractors', url: 'https://www.ilga.gov/legislation/ILCS/details?MajorTopic=&Chapter=&ActName=Illinois+Municipal+Code.&ActID=802&ChapterID=14&ChapAct=65+ILCS+5%2F&SeqStart=179300000&SeqEnd=180000000' },
  chiFaq: { label: 'City of Chicago: does my project require a licensed electrical contractor?', url: 'https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/electrical-license.html' },
  chiCont: { label: 'City of Chicago Department of Buildings: electrical contractor license', url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/TLdetails/ELcontractor.html' },
  chiSup: { label: 'City of Chicago Department of Buildings: supervising electrician license', url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/TLdetails/SupvEL.html' },
  ejatt: { label: 'IBEW-NECA Technical Institute (EJATT, IBEW Local 134): FAQs', url: 'https://ejatt.com/about-in-tech/faqs/' },
  ejattReg: { label: 'EJATT: registration information (June 2025)', url: 'https://ejatt.com/wp-content/uploads/2025/06/Registration-Information-1-updted-6-2-25.pdf' }
};
const ILP_SRC = {
  ...IL_COMMON,
  idph: { label: 'Illinois Department of Public Health: plumbing', url: 'https://dph.illinois.gov/topics-services/environmental-health-protection/plumbing.html' },
  statute: { label: 'Illinois Plumbing License Law (225 ILCS 320)', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=1343&ChapterID=24' },
  rules: { label: 'Illinois Administrative Code, Title 68, Part 750 (Plumbers Licensing Code)', url: 'https://www.ilga.gov/Commission/jcar/admincode/JCARTitlePart.asp?Title=068&Part=0750' },
  chiApp: { label: 'City of Chicago Department of Buildings: apprentice plumber license', url: 'https://www.chicago.gov/city/en/depts/bldgs/supp_info/TLdetails/PLapprentice.html' },
  uaFind
};
const ILH_SRC = {
  ...IL_COMMON,
  ...EPA,
  chiMech: { label: 'City of Chicago: mechanical (HVAC) work in the Express Permit Program', url: 'https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/instructions/EPP/MECH.html' },
  chiNoPermit: { label: 'City of Chicago: mechanical (HVAC) work that doesn\'t need a permit', url: 'https://www.chicago.gov/city/en/sites/guide-to-building-permits/home/help/faq/DOB/bldg-permit-not-required/worktype/mechanical.html' },
  pf597: { label: 'Pipe Fitters Local 597 (Chicago): apprenticeship', url: 'https://www.pf597.org/apprenticeship/' },
  uaFind
};

const OH_COMMON = {
  ocilb: { label: 'Ohio Department of Commerce, Construction Industry Licensing Board: contractors and contracting companies', url: 'https://com.ohio.gov/wps/portal/gov/com/divisions-and-programs/industrial-compliance/boards/ohio-construction-industry-licensing-board/contractors-and-contracting-companies' },
  rule: { label: 'Ohio Administrative Code, rule 4101:16-2-01 (who can take a contractor license exam)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-4101:16-2-01' },
  residential: { label: 'Ohio Department of Commerce: hiring a licensed contractor (residential work)', url: 'https://com.ohio.gov/about-us/media-center/news/hire-licensed-contractor-for-spring-projects' },
  finder: { label: 'OhioMeansJobs: ApprenticeOhio dashboard (find registered apprenticeships)', url: 'https://ohiomeansjobs.ohio.gov/job-seekers/practice-your-skills/apprentice-ohio-dashboard' },
  scorecard: SCORECARD
};
const local189 = { label: 'Columbus/Central Ohio Building & Construction Trades Council: Plumbers and Pipefitters Local 189 JATC', url: 'https://columbusconstruction.org/training-center/plumbers-and-pipefitters-local-189-jatc/' };
const OH_SRC = {
  ...OH_COMMON,
  cejatc: { label: 'Cleveland Electrical JATC (IBEW Local 38): eligibility and application process', url: 'https://cejatc.org/the-cleveland-electrical-apprenticeship-program/' },
  cejatcProg: { label: 'Cleveland Electrical JATC: apprenticeship', url: 'https://cejatc.org/apprenticeship/' }
};
const OHP_SRC = {
  ...OH_COMMON,
  local55: { label: 'Plumbers Local 55 (Cleveland): apprenticeship', url: 'https://www.plumbers55.com/about/apprenticeship/' },
  local189,
  uaFind
};
const OHH_SRC = {
  ...OH_COMMON,
  ...EPA,
  local189,
  uaFind
};

// Georgia and Michigan (checked November 26, 2026).
const GA_RULES = { label: 'Georgia State Construction Industry Licensing Board rules, Chapter 121-3 (application for licensure)', url: 'https://rules.sos.ga.gov/gac/121-3' };
const GA_COMMON = {
  rules: GA_RULES,
  finder: { label: 'Technical College System of Georgia: Apprentice Georgia', url: 'https://www.tcsg.edu/worksource/strategic-populations/apprentice/' },
  scorecard: SCORECARD
};
const GA_SRC = {
  ...GA_COMMON,
  form: { label: 'Georgia Construction Industry Licensing Board: electrical contractor exam application', url: 'https://sos.ga.gov/sites/default/files/forms/44%20Application%20-%20Electrical%20EXAM.pdf' },
  aejatc: { label: 'Atlanta Electrical JATC (IBEW Local 613): application requirements', url: 'https://sites.google.com/aejatc.org/etc/home/application-requirements' },
  aejatcHome: { label: 'Atlanta Electrical JATC: application status', url: 'https://sites.google.com/aejatc.org/etc' }
};
const mti = { label: 'Mechanical Trades Institute (UA Local 72, Atlanta): applicant information', url: 'https://mti-jatt.org/applicant-information' };
const GAP_SRC = { ...GA_COMMON, mti, uaFind };
const GAH_SRC = {
  ...GA_COMMON,
  ...EPA,
  caGuide: { label: 'Georgia Secretary of State: how-to guide, conditioned air contractor', url: 'https://sos.ga.gov/how-to-guide/how-guide-conditioned-air-contractor' },
  mti,
  uaFind
};

const MI_COMMON = {
  finder: { label: 'Michigan Department of Labor and Economic Opportunity: Registered Apprenticeship for career seekers', url: 'https://www.michigan.gov/leo/bureaus-agencies/wd/apprenticeships/career-seekers' },
  abc: { label: 'ABC of Michigan: training partners', url: 'https://www.abcmi.com/Training-Safety/Training-Partners' },
  scorecard: SCORECARD
};
const MI_SRC = {
  ...MI_COMMON,
  lara: { label: 'Michigan LARA, Bureau of Construction Codes: electrical licensing and registration', url: 'https://www.michigan.gov/lara/bureau-list/bcc/sections/licensing-section/exam-lic/electrical-examination-licensing-registration-application-information' },
  eitc: { label: 'Detroit Electrical Industry Training Center (IBEW Local 58): how to apply', url: 'https://detroiteitc.org/apply/' }
};
const MIP_SRC = {
  ...MI_COMMON,
  lara: { label: 'Michigan LARA, Bureau of Construction Codes: plumbing licensing and registration', url: 'https://www.michigan.gov/lara/bureau-list/bcc/sections/licensing-section/exam-lic/plumbing-examination-licensing-registration-application-information' },
  register: { label: 'Michigan Skilled Trades Regulation Act, MCL 339.6117 (apprentice plumber registration)', url: 'https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-339-6117' },
  renew: { label: 'Michigan LARA: license and registration renewals', url: 'https://www.michigan.gov/lara/bureau-list/bcc/sections/licensing-section/license-registration-renewals' },
  uaFind
};
const MIH_SRC = {
  ...MI_COMMON,
  ...EPA,
  lara: { label: 'Michigan LARA, Bureau of Construction Codes: mechanical contractor licensing', url: 'https://www.michigan.gov/lara/bureau-list/bcc/sections/licensing-section/exam-lic/mechanical-examination-licensing-registration-application-information' },
  path: { label: 'Michigan LARA: obtaining a mechanical contractor license (flowchart)', url: 'https://www.michigan.gov/lara/-/media/Project/Websites/lara/bcc-media/Licensing/Licensing-Requirements/Mechanical-Contractor.pdf?rev=a0f46529b0b3418db66a28dde151e488&hash=87CD69FBB5AE2D318E06291B22347AE4' },
  local636: { label: 'Pipefitters Local 636 (Detroit area)', url: 'https://pipefitters636.org/' },
  uaFind
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
    slug: 'plumber-california',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'CA',
    stateName: 'California',
    checked: 'November 12, 2026',
    title: 'How to become a plumber in California',
    description: 'How to become a plumber in California: no state license is needed to work for a contractor, the paid apprenticeships in Los Angeles, San Diego and the Bay Area, and the four years of experience for a C-36 contractor license. From official sources.',
    lede: 'California doesn\'t license individual plumbers. You learn the trade working for a licensed plumbing contractor, often through a paid apprenticeship, and once you have four years of journey-level experience you can apply for your own contractor license.',
    rules: [
      { dt: 'No state license to work for a contractor', dd: 'California\'s Contractors State License Board licenses contractors, not individual plumbers. Until you qualify for a contractor license, you can work for a licensed contractor. Someone who has finished an apprenticeship or has years of experience works at "journey level" without a license, but can\'t sign contracts for jobs that need a building permit.', src: ['cslbFaq', 'cslbSteps'] },
      { dt: 'Plumbing contractor license (C-36), later', dd: 'To run your own jobs, you need to be 18 and have at least 4 years of experience in plumbing within the last 10 years, at journey level or as a foreman, supervisor or contractor. You pass a law exam and a trade exam. The application fee is $450, and you\'ll need a bond and insurance.', src: ['cslbExp', 'cslbSteps'] },
      { dt: 'Credit for training', dd: 'Apprenticeship training, technical training or education can count for up to 3 of the 4 years, but at least 1 year must be work experience. An apprenticeship counts with a certificate of completion or a statement from the union. Someone who saw your work, like an employer or supervisor, has to verify your experience.', src: ['cslbExp'] }
    ],
    routesIntro: 'There\'s no required path. A state-approved apprenticeship pays you while you train and counts toward a contractor license later. You can also get hired as a helper by a licensed plumbing contractor, or take classes first.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, together with contractors. Each one listed with the state takes five years of work and classes.',
      programs: [
        { area: 'Los Angeles', name: 'Los Angeles Metropolitan Plumbers JATC (UA Local 78)', facts: '5 years. You need to be 18, a diploma or GED, a California driver\'s license and good physical health. Phone (213) 688-9090.', src: 'la78' },
        { area: 'San Diego and Imperial counties', name: 'San Diego & Imperial Counties Pipe Trades JAC (UA Local 230)', facts: '5 years. Starts at $23.35 an hour. You need to be 18 and a diploma or GED, and you take a written test. Phone (619) 262-7589.', src: 'sd230' },
        { area: 'East Bay (Concord)', name: 'UA Local 342 JATC', facts: '5 years. You need to be 18 and a diploma or GED, and you take a written test and an interview. Phone (925) 686-0730.', src: 'ua342' }
      ],
      more: 'Other areas have their own union programs. Search the state\'s list of approved programs by county.'
    },
    nonunion: {
      what: 'Run by Associated Builders and Contractors (ABC) chapters for non-union contractors, and approved by the state.',
      programs: [
        { area: 'Southern California', name: 'ABC Southern California', facts: 'Plumbing training in Anaheim, LA/Ventura and Riverside. You need to be 17½ (with a parent\'s signature if under 18), a diploma or GED, a driver\'s license and DMV driving record, and a year of high school algebra. You need 70% on an aptitude test and 80% in an interview.', src: 'abcSocal' },
        { area: 'San Diego', name: 'ABC San Diego plumbing and pipefitting', facts: 'Based in Poway. 5 years. You need to be 18 and a diploma or GED; there\'s a written test, an interview and drug testing. Phone (858) 513-4700.', src: 'abcSdPlumb' }
      ]
    },
    school: {
      heading: 'School first',
      what: 'California doesn\'t require school. Community college classes can teach you the basics before you look for work, and education can count for part of the experience a contractor license needs, though at least one year has to be work.',
      cip: '4605'
    },
    steps: [
      'Gather a diploma or GED, a photo ID, your Social Security card and a California driver\'s license; several programs ask for one.',
      'Take algebra. ABC Southern California asks for a year of it.',
      'Find the union and non-union programs for your area, and ask when each one takes applications.',
      'Apply to more than one, or look for helper jobs with licensed plumbing contractors.',
      'Keep records of your work, who supervised you, and any apprenticeship certificate. You\'ll need them for a contractor license.'
    ],
    stepsSrc: ['la78', 'abcSocal', 'cslbExp'],
    src: CAP_SRC
  },
  {
    slug: 'hvac-california',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'CA',
    stateName: 'California',
    checked: 'November 12, 2026',
    title: 'How to become an HVAC technician in California',
    description: 'How to become an HVAC technician in California: no state license is needed to work for a contractor, EPA 608 certification for refrigerants, apprenticeships, and the four years of experience for a C-20 contractor license. From official sources.',
    lede: 'California doesn\'t license individual HVAC technicians. You work for a licensed heating and air conditioning contractor, get EPA 608 certified to handle refrigerants, and once you have four years of journey-level experience you can apply for your own C-20 contractor license.',
    rules: [
      { dt: 'No state license to work for a contractor', dd: 'California\'s Contractors State License Board licenses contractors, not individual HVAC technicians. Until you qualify for a contractor license, you can work for a licensed contractor. Someone who has finished an apprenticeship or has years of experience works at "journey level" without a license, but can\'t sign contracts for jobs that need a building permit.', src: ['cslbFaq', 'cslbSteps'] },
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'HVAC contractor license (C-20), later', dd: 'A C-20 contractor installs, maintains and repairs heating, ventilation and air conditioning systems. To get the license you need to be 18 and have at least 4 years of experience in the trade within the last 10 years, at journey level or as a foreman, supervisor or contractor. You pass a law exam and a trade exam. The application fee is $450, and you\'ll need a bond and insurance.', src: ['cslbC20', 'cslbExp', 'cslbSteps'] },
      { dt: 'Credit for training', dd: 'Apprenticeship training, technical training or education can count for up to 3 of the 4 years, but at least 1 year must be work experience. An apprenticeship counts with a certificate of completion or a statement from the union. Someone who saw your work, like an employer or supervisor, has to verify your experience.', src: ['cslbExp'] }
    ],
    routesIntro: 'There\'s no required path. A state-approved apprenticeship pays you while you train and counts toward a contractor license later. You can also get hired as a helper by a licensed HVAC contractor, or take classes first.',
    union: {
      what: 'Run by unions and contractors together. Each one listed with the state takes five years of work and classes.',
      programs: [
        { area: 'San Diego and Imperial counties', name: 'Service Refrigeration & Air Conditioning JAC (UA Local 230)', facts: '5 years. You need to be 18 and a diploma or GED, and you take a written test and an interview. Phone (619) 262-7589.', src: 'sdRefrig' },
        { area: 'Kern County and northern LA County', name: 'Air Conditioning & Sheet Metal Workers JATC (Local 105)', facts: 'Based in Bakersfield. 5 years, training sheet metal workers and air balance technicians. You need to be 18, a diploma or GED and a California driver\'s license. Phone (661) 832-1187.', src: 'kern105' }
      ],
      more: 'Other areas have their own union programs, including sheet metal and refrigeration programs. Search the state\'s list of approved programs by county.'
    },
    nonunion: {
      what: 'Run by Associated Builders and Contractors (ABC) chapters for non-union contractors, and approved by the state.',
      programs: [
        { area: 'Southern California', name: 'ABC Southern California sheet metal and HVAC', facts: 'Sheet metal training in Anaheim. You need to be 17½ (with a parent\'s signature if under 18), a diploma or GED, a driver\'s license and DMV driving record, and a year of high school algebra. You need 70% on an aptitude test and 80% in an interview.', src: 'abcSocal' }
      ]
    },
    school: {
      heading: 'School first',
      what: 'California doesn\'t require school. A certificate program can teach you the basics, and education can count for part of the experience a C-20 license needs, though at least one year has to be work. Few public colleges in California reported HVAC awards last year; most programs are at private career schools, which usually cost more, so compare prices.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Gather a diploma or GED, a photo ID, your Social Security card and a California driver\'s license.',
      'Apply to HVAC, refrigeration or sheet metal apprenticeships in your area, or for helper jobs with licensed HVAC contractors.',
      'Keep records of your work and who supervised you. Someone who saw your work will need to verify it for a C-20 license.'
    ],
    stepsSrc: ['epa608', 'sdRefrig', 'abcSocal', 'cslbExp'],
    src: CAH_SRC
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
  },
  {
    slug: 'plumber-florida',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'FL',
    stateName: 'Florida',
    checked: 'November 15, 2026',
    title: 'How to become a plumber in Florida',
    description: 'How plumber licensing works in Florida, where counties and cities issue journeyman licenses, plus paid apprenticeships in Orlando, Jacksonville and Tampa Bay. From official sources.',
    lede: 'In Florida, journeyman plumber licenses come from counties and cities, and the state licenses plumbing contractors. You can start as an employee of a licensed contractor and learn on the job, or join a paid apprenticeship, one common way to get the experience counties ask for.',
    rules: [
      { dt: 'Working as an employee', dd: 'Florida\'s contractor licensing law doesn\'t cover an employee of a licensed contractor who works within that contractor\'s license, with the contractor\'s knowledge and permission.', src: ['employee'] },
      { dt: 'Journeyman licenses are local', dd: 'State law lets counties and cities issue journeyman plumber licenses, and requires them to recognize one issued by another Florida county or city.', src: ['journeyStat'] },
      { dt: 'Example: Miami-Dade', dd: 'A journeyman plumber needs a county certificate of competency, which takes 3 years of experience and a passed exam. Journeymen may only work for a contractor licensed in their trade.', src: ['miamiCats', 'miamiMech'] },
      { dt: 'Example: Broward', dd: 'A journeyman plumber needs at least 4 years of plumbing experience, confirmed by a notarized letter from a licensed employer and your last four years of W-2s, then an exam that needs 75% to pass. The fee is $115.', src: ['broward'] },
      { dt: 'Later: your own business', dd: 'A state plumbing contractor license takes 4 years of experience, at least one of them as a foreman, and a state exam. You must be 18, and community college credits can stand in for some of the experience.', src: ['exam'] }
    ],
    routesIntro: 'An apprenticeship is the most direct route: four or five years of paid work plus classes, which counts toward a journeyman license. You can also get hired by a licensed plumbing contractor and learn on the job.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, with union contractors. Apprentices pay for little beyond books.',
      programs: [
        { area: 'Orlando area', name: 'UA Local 803 apprenticeship', facts: 'Plumber, pipefitter and HVACR technician programs, 5 years. You work days and take classes two nights a week, accredited through Orange Technical College. You need to be 18, a diploma or GED and a driver\'s license; no experience needed. Apply by the end of May for fall classes. $40 application fee and an entrance exam; books cost about $100 to $200 a year. Phone (407) 851-7370.', src: 'local803', more: 'local803app' },
        { area: 'Jacksonville', name: 'UA Local 234 (Jacksonville Plumbers and Pipefitters)', facts: 'For the class starting September 2027, online applications open January 4 and close April 9, 2027 at 4:30 p.m. You need to be 18 by the start, a diploma (high school seniors can send a letter saying they\'re on track to graduate) and a qualifying aptitude test score. $10 fee, which can be waived. Apprentices pay only for books and required shirts.', src: 'local234' }
      ],
      more: 'Other parts of Florida have their own UA locals. Find yours and ask about its apprenticeship.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['local803', 'local803ap', 'local803app', 'local234', 'uaFind']
    },
    nonunion: {
      what: 'Run by contractor and builder groups for non-union employers, with classes alongside paid work.',
      programs: [
        { area: 'Tampa Bay', name: 'ABC Florida Gulf Coast plumber apprenticeship, with Hillsborough Community College', facts: '4 to 5 years: 8,000 hours of paid work and 720 hours of classes at HCC. Your apprentice hours can count toward an HCC associate degree. Phone (813) 879-8064.', src: 'hccPlumb' },
        { area: 'Jacksonville', name: 'Northeast Florida Builders Association (NEFBA) apprenticeship', facts: 'Four-year, debt-free tracks in plumbing (also HVAC, electrical and carpentry) that mix classes with paid job-site training in home building.', src: 'nefba' }
      ],
      more: 'The state\'s apprenticeship office has a map of programs and a contact for each region.'
    },
    school: {
      heading: 'Technical college programs',
      what: 'Florida\'s public technical colleges and state colleges teach plumbing, and some host apprenticeship classes (Orange Technical College with UA Local 803, Hillsborough Community College with ABC). Your county decides what experience counts toward a journeyman license.',
      cip: '4605'
    },
    steps: [
      'Find out what your county requires for a journeyman plumber license.',
      'Gather a diploma or GED, your transcripts and a driver\'s license.',
      'Apply to the programs near you, and note each one\'s dates (Orlando: end of May; Jacksonville: January 4 to April 9, 2027).',
      'Or get hired by a licensed plumbing contractor and learn on the job.',
      'Keep your W-2s and a record of who you worked for. Counties like Broward ask for years of W-2s and a notarized letter from your employer.'
    ],
    stepsSrc: ['local803', 'local234', 'broward', 'employee'],
    src: FLT_SRC
  },
  {
    slug: 'hvac-florida',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'FL',
    stateName: 'Florida',
    checked: 'November 15, 2026',
    title: 'How to become an HVAC technician in Florida',
    description: 'What Florida requires to work on air conditioning and heating: EPA 608 certification, county journeyman licenses, the state contractor license later, plus paid apprenticeships in Miami, Orlando, Tampa Bay and Jacksonville. From official sources.',
    lede: 'In Florida you can start as an employee of a licensed air conditioning or mechanical contractor. To handle refrigerants you need a federal EPA certification. Counties and cities can issue journeyman licenses, and the state licenses air conditioning contractors.',
    rules: [
      { dt: 'Working as an employee', dd: 'Florida\'s contractor licensing law doesn\'t cover an employee of a licensed contractor who works within that contractor\'s license, with the contractor\'s knowledge and permission.', src: ['employee'] },
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Example: Miami-Dade', dd: 'A journeyman air conditioning certificate takes 3 years of experience and a passed exam. Journeymen may only work for a contractor licensed in their trade.', src: ['miamiCats', 'miamiMech'] },
      { dt: 'Example: Broward', dd: 'A journeyman mechanical license takes at least 3 years of experience in the mechanical field, confirmed by a notarized letter from a licensed employer and your last three years of W-2s, then an exam that needs 75% to pass. The fee is $120.', src: ['broward'] },
      { dt: 'Moving within Florida', dd: 'State law requires counties and cities to recognize a mechanical or HVAC journeyman license issued by another Florida county or city.', src: ['journeyStat'] },
      { dt: 'Later: your own business', dd: 'A state air conditioning contractor license takes 4 years of experience, at least one of them as a foreman, and a state exam. Class A has no size limit; Class B is limited to 25 tons of cooling and 500,000 Btu of heating per system.', src: ['exam', 'classes'] }
    ],
    routesIntro: 'Most people start by getting hired as a helper, or through an apprenticeship that pays you and adds classes. A school program teaches the basics first.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers, pipefitters and HVAC technicians union, with union contractors.',
      programs: [
        { area: 'Miami-Dade and South Florida', name: 'ARPEC (Local 725 training center)', facts: 'A 5-year HVACR service technician apprenticeship (pipefitting too). ARPEC arranges your job, and a full scholarship covers classes, textbooks and a tablet. You earn your EPA certification in year one. You need to be 18, a Florida driver\'s license and a sealed transcript or GED with scores, then pass the TABE test and an interview. Apply year-round in person in Opa-locka, by appointment; $60 fee. The next class starts January 2027.', src: 'arpec', more: 'arpecReq' },
        { area: 'Orlando area', name: 'UA Local 803 HVACR technician apprenticeship', facts: '5 years, or 4 years in the Walt Disney World HVAC program, which runs on shifts. You work days and take classes two nights a week. You need to be 18, a diploma or GED and a driver\'s license; no experience needed. Apply by the end of May for fall classes. $40 application fee and an entrance exam. Phone (407) 851-7370.', src: 'local803', more: 'local803app' }
      ],
      more: 'Other parts of Florida have their own UA locals. Find yours and ask whether it trains HVACR technicians.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['arpec', 'arpecAdm', 'arpecReq', 'arpecHvac', 'local803', 'local803app', 'uaFind']
    },
    nonunion: {
      what: 'Run by contractor and builder groups for non-union employers, with classes alongside paid work.',
      programs: [
        { area: 'Tampa Bay', name: 'ABC Florida Gulf Coast HVACR technician apprenticeship, with Hillsborough Community College', facts: '4 to 5 years: 8,000 hours of paid work and 720 hours of classes at HCC. Your apprentice hours can count toward an HCC associate degree. Phone (813) 879-8064.', src: 'hccHvac' },
        { area: 'Jacksonville', name: 'Northeast Florida Builders Association (NEFBA) apprenticeship', facts: 'Four-year, debt-free tracks in HVAC (also plumbing, electrical and carpentry) that mix classes with paid job-site training in home building.', src: 'nefba' }
      ],
      more: 'The state\'s apprenticeship office has a map of programs and a contact for each region.'
    },
    school: {
      heading: 'Technical college programs',
      what: 'Florida\'s public technical colleges and state colleges teach heating, air conditioning and refrigeration. A certificate can help you get hired, but your county decides what experience counts toward a journeyman license.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Gather a diploma or GED, a sealed transcript and a Florida driver\'s license.',
      'Apply to the programs near you (Miami\'s ARPEC takes applications all year; Orlando\'s deadline is the end of May).',
      'Or get hired by a licensed air conditioning or mechanical contractor and learn on the job.',
      'Keep your W-2s and a record of who you worked for. You\'ll need them for a county journeyman license.'
    ],
    stepsSrc: ['epa608', 'arpec', 'local803', 'broward'],
    src: FLT_SRC
  },
  {
    slug: 'plumber-new-york',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'NY',
    stateName: 'New York',
    checked: 'November 15, 2026',
    title: 'How to become a plumber in New York',
    description: 'How to become a plumber in New York: local license rules (New York City and Westchester County as examples), and the paid union apprenticeships in New York City, Long Island, Buffalo, Rochester and Syracuse, with their application dates. From official sources.',
    lede: 'In New York, the plumbing license rules you\'ll follow depend on where you work: New York City and Westchester County, for example, each license plumbers under their own rules. A common route starts with a paid apprenticeship registered with the state, and some have short application windows.',
    rules: [
      { dt: 'Example: New York City', dd: 'Plumbers work under a licensed master plumber. To register with the city as a journeyman plumber, you need 5 years of full-time work under a licensed master plumber (1 of them in the city), or a state-registered training program plus 1 year of work in the city.', src: ['nycBiz', 'nycJourney'] },
      { dt: 'New York City master plumber, later', dd: '7 years of work within the last 10 under a licensed master plumber, at least 2 of them as a registered journeyman. You must be 18 and pass a written exam ($585, no reference books, 70% to pass) and a practical exam ($530).', src: ['nycMaster'] },
      { dt: 'Example: Westchester County', dd: 'Plumbers need a county license to work there. A journey-level license takes 5 years working as an apprentice for licensed master plumbers, or finishing a five-year plumbing apprenticeship program. A master license takes 10 years.', src: ['westTrade', 'westExam'] },
      { dt: 'Finding apprenticeships', dd: 'Registered apprenticeships post their openings with the state Department of Labor, including the dates, number of openings, requirements and how to apply.', src: ['nydol'] }
    ],
    routesIntro: 'Each program below is registered with the state, pays you while you work and adds classes. Check the dates closely: some take applications for a year, others for two weeks.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, with union contractors. Most ask for a diploma or GED, a driver\'s license and an aptitude test, and some require you to live in the local\'s area.',
      programs: [
        { area: 'New York City', name: 'Plumbers Local 1 JATC', facts: '50 openings in 2026. Applications were handed out in person in Long Island City, June 8–22, capped at the first 1,000. You need to be 18, a four-year high school diploma (or an equivalency diploma) with a transcript, the TABE test and an interview. $50 in fees, which can be waived.', src: 'local1' },
        { area: 'Long Island', name: 'Plumbers JATC Local 200', facts: '30 openings in 2026. Applications were picked up in Bohemia, February 9–20, and mailed back by certified mail. You need to be 18, a diploma or GED with a year of algebra, a New York driver\'s license and to live in Nassau or Suffolk County. Books cost about $200 a year.', src: 'local200' },
        { area: 'Buffalo and Western New York', name: 'Plumbers & Steamfitters Local 22', facts: '15 openings, December 2, 2025 to December 1, 2026. Pick up an application in person in West Seneca on the first Tuesday of each month. You need to be 18, a New York driver\'s license, a doctor\'s statement that you can do the work, and WorkKeys test scores of at least 4.', src: 'local22' },
        { area: 'Rochester and the Finger Lakes', name: 'Plumbing and Heating JATC, Local 13', facts: '15 plumber openings, March 4, 2026 to March 3, 2027, online any time or in person on the first Tuesday of each month. You need to be 18, a diploma or GED, a driver\'s license, 70% on a math test and a year living in the local\'s area. $100 a year for books.', src: 'local13' },
        { area: 'Syracuse, Ithaca, Oswego and the North Country', name: 'Plumbers & Steamfitters Local 81', facts: '20 plumber and steamfitter openings, May 11, 2026 to March 31, 2027, online or in person. You can apply at 17. You need a diploma or GED, a driver\'s license, to live in the local\'s area and to pass a mechanical comprehension test.', src: 'local81' }
      ],
      more: 'Other areas, including the Hudson Valley, Binghamton and Glens Falls, have their own programs and post their openings with the state.'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Only a few New York colleges report plumbing awards to the federal government, so for most people an apprenticeship is the main route. In New York City, a state-registered training program shortens the time it takes to register as a journeyman.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED (or TASC), and keep your transcripts.',
      'Take a year of algebra. Some programs ask for it, and most give an aptitude or math test.',
      'Get a driver\'s license. Most programs above require one.',
      'Check the state\'s apprenticeship announcements for plumbing programs near you, and note each one\'s dates and how it takes applications (online, in person or by mail).',
      'If you\'ll work in New York City or Westchester, read the local license rules early, and keep a record of the licensed master plumbers you work under.'
    ],
    stepsSrc: ['nydol', 'local200', 'local13', 'nycJourney', 'westExam'],
    src: NYT_SRC
  },
  {
    slug: 'hvac-new-york',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'NY',
    stateName: 'New York',
    checked: 'November 15, 2026',
    title: 'How to become an HVAC technician in New York',
    description: 'How to become an HVAC technician in New York: EPA 608 certification, local license rules (New York City as an example), and the paid union apprenticeships in Rochester, Syracuse, the Hudson Valley and the North Country. From official sources.',
    lede: 'In New York, which licenses apply to heating and air conditioning work depends on where you work, so check with your city or county. Anyone who works with refrigerants needs a federal EPA certification. Several union apprenticeships registered with the state train HVAC mechanics.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Example: New York City', dd: 'Installing oil-burning heating equipment takes a city oil burner equipment installer license. Class B takes 3 years of work within the last 5 under a licensed installer, then a written exam ($585, 70% to pass) and a practical exam ($530). Boiler work has to be done by a licensed oil burner installer or a licensed master plumber.', src: ['nycOil', 'nycOilFees', 'nycBoiler'] },
      { dt: 'Finding apprenticeships', dd: 'Registered apprenticeships post their openings with the state Department of Labor, including the dates, number of openings, requirements and how to apply.', src: ['nydol'] }
    ],
    routesIntro: 'Each program below is registered with the state, pays you while you work and adds classes. In New York, the plumbing and steamfitting unions also train HVAC mechanics, so check their openings.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers, pipefitters and HVAC mechanics union, with union contractors.',
      programs: [
        { area: 'Rochester and the Finger Lakes', name: 'Plumbing and Heating JATC, Local 13', facts: '12 HVAC mechanic openings, March 4, 2026 to March 3, 2027, online any time or in person on the first Tuesday of each month. You need to be 18, a diploma or GED, a driver\'s license, 70% on a math test and a year living in the local\'s area. $100 a year for books.', src: 'local13' },
        { area: 'Syracuse, Ithaca, Oswego and Gouverneur', name: 'Plumbers & Steamfitters Local 81', facts: '4 HVAC mechanic openings (one in each city), May 11, 2026 to March 31, 2027, online or in person. You can apply at 17. You need a diploma or GED, a driver\'s license, to live in the local\'s area and to pass a mechanical comprehension test.', src: 'local81' },
        { area: 'Westchester, Dutchess, Putnam and Ulster', name: 'Plumbers & Steamfitters Local 21', facts: '5 refrigeration and air conditioning mechanic openings in 2026, taken in person in Peekskill, April 13–24. You need to be 18, a diploma or GED and to have lived in one of those four counties for six months. $10 fee.', src: 'local21' },
        { area: 'Capital District and North Country', name: 'Plumbers & Steamfitters Local 773', facts: '1 HVAC mechanic opening (and 5 plumber and steamfitter openings), January 12 to December 14, 2026. Pick up an application in Queensbury or Plattsburgh on the second Monday of each month, 8 to 10 a.m. You need to be 18, a diploma or GED, a driver\'s license and a WorkKeys average of at least 4.334. $50 in fees, which can be waived; $100 a year for books.', src: 'local773' }
      ],
      more: 'Other locals post HVAC openings with the state when they recruit.'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges, SUNY technical colleges and BOCES centers teach heating, air conditioning and refrigeration. Classes can help you get hired; check what your city or county counts as experience for its licenses.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'Check the state\'s apprenticeship announcements for HVAC (and plumbing and steamfitting) openings near you, and note each one\'s dates.',
      'Find out what your city or county requires for heating and air conditioning work.',
      'Keep a record of your work and who supervised you. Local licenses ask for years of verified experience.'
    ],
    stepsSrc: ['epa608', 'nydol', 'local13', 'nycOil'],
    src: NYT_SRC
  },
  {
    slug: 'plumber-north-carolina',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'NC',
    stateName: 'North Carolina',
    checked: 'November 15, 2026',
    title: 'How to become a plumber in North Carolina',
    description: 'How to become a plumber in North Carolina: start as an employee of a licensed contractor, learn through a paid apprenticeship or community college, and the technician and contractor licenses you can earn later. From official sources.',
    lede: 'In North Carolina you can start by getting hired: employees of a licensed plumbing contractor can do the work without their own license, as long as a licensee supervises it. Your hours count toward a state technician license, after about 18 months of full-time work, and later a contractor license.',
    rules: [
      { dt: 'Working as an employee', dd: 'State law says a genuine employee of a licensed contractor isn\'t contracting, so you don\'t need your own license to work for one. The contractor, or a licensed technician working for them, has to supervise the work in person, on site.', src: ['employee', 'supervision'] },
      { dt: 'Every hour counts', dd: 'Your hours count toward a license whether or not a license was required for the work, and up to half can come from school or technical training.', src: ['applicant', 'rules'] },
      { dt: 'Technician license', dd: 'After 3,000 hours (about 18 months) of full-time plumbing work, you can take the Class I technician exam; Class II, for single-family homes, takes 2,500 hours. A technician isn\'t a contractor: you work full time for a licensed plumbing contractor and can supervise jobs for them.', src: ['applicant', 'techDefs'] },
      { dt: 'Contractor license, later', dd: '4,000 hours (2 years) of full-time experience, then the board\'s exam, at $100 per exam. A Class I license covers all buildings; Class II covers single-family homes.', src: ['applicant', 'packet', 'employee'] }
    ],
    routesIntro: 'Because employees don\'t need their own license, the main choice is how you learn: a registered apprenticeship that pays you and adds classes, or community college classes first.',
    union: {
      what: 'Run by the United Association (UA), the plumbers and pipefitters union, and union contractors.',
      programs: [
        { area: 'Charlotte, Raleigh and Jacksonville', name: 'Mechanical Trades Carolina (UA Local 421)', facts: 'A five-year apprenticeship registered with the state and the U.S. Department of Labor. First-year apprentices earn $18.21 an hour, with raises each year, plus medical coverage and a pension, and finish with college credits and no student loans. Its 18-week welding pre-apprenticeship can let you start a plumbing apprenticeship as a second-year apprentice. Contact it through its ApprenticeshipNC listing.', src: 'mtc', more: 'mtcUa' }
      ],
      more: 'Find the UA local for your part of North Carolina and ask about its apprenticeship.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['mtc', 'mtcUa', 'uaFind']
    },
    nonunion: {
      heading: 'Apprenticeships through community colleges',
      what: 'Community colleges work with local employers, mostly non-union, to run registered apprenticeships: a participating company hires you, and you take classes at the college.',
      programs: [
        { area: 'Wilmington area', name: 'Cape Fear Community College: plumbing and pipefitting apprenticeship', facts: 'Run with local plumbing companies, including Christian Plumbing, Bluewater Plumbing and T.A. Woods. The college interviews candidates and refers them to employers. Phone (910) 362-7370 or email apprenticeships@cfcc.edu.', src: 'cfcc' }
      ],
      more: 'Other colleges and employers run plumbing apprenticeships. ApprenticeshipNC\'s directory lists them by area.'
    },
    school: {
      heading: 'Community college programs',
      what: 'North Carolina\'s community colleges teach plumbing in certificate and diploma programs. Up to half of the hours for a technician or contractor license can come from school or technical training.',
      cip: '4605'
    },
    steps: [
      'Look for a job with a licensed plumbing contractor, and ask whether they sponsor a registered apprenticeship.',
      'Search ApprenticeshipNC\'s directory for plumbing programs near you, and contact them about applying.',
      'Keep a record of every hour you work and who you worked for. You\'ll need it for the technician exam.',
      'After 3,000 hours (or 2,500 for Class II), apply to the state board for the plumbing technician exam.',
      'With 4,000 hours, you can go for a contractor license and run your own jobs.'
    ],
    stepsSrc: ['ncfind', 'applicant', 'employee'],
    src: NCPH_SRC
  },
  {
    slug: 'hvac-north-carolina',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'NC',
    stateName: 'North Carolina',
    checked: 'November 15, 2026',
    title: 'How to become an HVAC technician in North Carolina',
    description: 'How to become an HVAC technician in North Carolina: start as an employee of a licensed heating contractor, get EPA 608 certified, and the technician and contractor licenses for each heating group. Plus apprenticeships and community college programs. From official sources.',
    lede: 'In North Carolina you can start by getting hired: employees of a licensed heating contractor can do the work without their own license, as long as a licensee supervises it. For refrigerants you also need a federal EPA certification. Your hours count toward a state technician license and, later, a contractor license.',
    rules: [
      { dt: 'Working as an employee', dd: 'State law says a genuine employee of a licensed contractor isn\'t contracting, so you don\'t need your own license to work for one. The contractor, or a licensed technician working for them, has to supervise the work in person, on site.', src: ['employee', 'supervision'] },
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Three heating groups', dd: 'Group 3 covers heating and cooling systems with air ducts up to 15 tons of cooling, and every single-family home. Group 2 covers larger air systems, and Group 1 covers steam and hot-water heating. Licenses are issued for each group.', src: ['employee', 'techDefs'] },
      { dt: 'Technician license', dd: 'After 3,000 hours (about 18 months) of full-time work in a group, you can take a Class I technician exam (2,500 hours for Class II, for single-family homes). Hours count whether or not a license was required, and up to half can come from school. A technician works full time for a licensed contractor in the same group.', src: ['applicant', 'rules', 'techDefs'] },
      { dt: 'Contractor license, later', dd: '4,000 hours (2 years) of full-time experience in the group, up to half of it from school, then the board\'s exam, at $100 per exam.', src: ['applicant', 'packet'] }
    ],
    routesIntro: 'Because employees don\'t need their own license, the main choice is how you learn: a registered apprenticeship that pays you and adds classes, or community college classes first.',
    union: {
      what: 'Run by the United Association (UA), the plumbers, pipefitters and HVAC technicians union, and union contractors.',
      programs: [
        { area: 'Charlotte, Raleigh and Jacksonville', name: 'Mechanical Trades Carolina (UA Local 421)', facts: 'Trains HVAC technicians in a five-year apprenticeship registered with the state and the U.S. Department of Labor. First-year apprentices earn $18.21 an hour, with raises each year, plus medical coverage and a pension, and finish with college credits and no student loans. Its 18-week welding pre-apprenticeship can let you start an HVAC/R apprenticeship as a second-year apprentice. Contact it through its ApprenticeshipNC listing.', src: 'mtc', more: 'mtcUa' }
      ],
      more: 'Find the UA local for your part of North Carolina and ask whether it trains HVAC technicians.',
      find: 'uaFind',
      findLabel: 'Find a UA local by state',
      cite: ['mtc', 'mtcUa', 'uaFind']
    },
    nonunion: {
      heading: 'Apprenticeships through community colleges',
      what: 'Community colleges work with local employers, mostly non-union, to run registered apprenticeships: a participating company hires you, and you take classes at the college.',
      programs: [
        { area: 'Wilmington area', name: 'Cape Fear Community College: HVAC apprenticeship', facts: 'Run with 14 local employers, including Johnson Controls, Brady Services, Southeastern Heating and Air and Tim\'s Heating & Air. Phone (910) 362-7370 or email apprenticeships@cfcc.edu.', src: 'cfcc' }
      ],
      more: 'Other colleges and employers run HVAC apprenticeships. ApprenticeshipNC\'s directory lists them by area.'
    },
    school: {
      heading: 'Community college programs',
      what: 'North Carolina\'s community colleges teach heating and air conditioning in certificate, diploma and degree programs. Up to half of the hours for a technician or contractor license can come from school or technical training.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Look for a job with a licensed heating contractor, and ask whether they sponsor a registered apprenticeship.',
      'Search ApprenticeshipNC\'s directory for HVAC programs near you.',
      'Keep a record of every hour you work and who you worked for.',
      'After 3,000 hours (or 2,500 for Class II), apply for a technician exam. Group 3 is the one that covers single-family homes.'
    ],
    stepsSrc: ['epa608', 'ncfind', 'applicant'],
    src: NCPH_SRC
  },
  {
    slug: 'electrician-pennsylvania',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'PA',
    stateName: 'Pennsylvania',
    checked: 'November 25, 2026',
    title: 'How to become an electrician in Pennsylvania',
    description: 'How to become an electrician in Pennsylvania: the new state licensing law, local license rules (Philadelphia and Pittsburgh as examples), and paid apprenticeships in western, central and eastern Pennsylvania. From official sources.',
    lede: 'Pennsylvania doesn\'t license electricians statewide yet. A 2026 law created a state licensing board, with requirements starting after two years. Until then, cities like Philadelphia and Pittsburgh set their own rules. A common route starts with a paid registered apprenticeship.',
    rules: [
      { dt: 'Statewide, for now', dd: 'Pennsylvania has no state license for most construction contractors or their workers. Some of its 2,562 cities, boroughs and townships set their own license rules.', src: ['state'] },
      { dt: 'A state license is coming', dd: 'Act 108, signed October 22, 2026, created a State Board of Electrical Licensure. It gives two years before license requirements take effect, so check the board\'s page for updates.', src: ['board'] },
      { dt: 'Example: Philadelphia', dd: 'Electrical work in the city has to be done by a licensed electrical contractor. The license takes at least 4 years of electrical work for a licensed company (two years of electrical school counts as one year, for up to two years), the city\'s exam given by the International Code Council, and 8 hours of electrical code (NFPA 70) classes.', src: ['phl', 'phlForm'] },
      { dt: 'Example: Pittsburgh', dd: 'Electrical work in the city takes a city Electrical Trade License: at least 6 years of experience and education combined, and a passing score on a standardized master electrician exam.', src: ['pgh'] },
      { dt: 'Finding apprenticeships', dd: 'PA CareerLink offices can help you find a registered apprenticeship near you and apply. Every registered apprenticeship includes at least 2,000 hours of paid work and 144 hours of classes, and many last four years or more.', src: ['finder', 'careerlink'] }
    ],
    routesIntro: 'Each program below is registered, pays you while you work and adds classes. Check dates closely: some programs only take applications once a year.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Allegheny County (Pittsburgh) and 21 other counties', name: 'Western Pennsylvania Electrical JATC, IBEW Local 5', facts: 'Five years. Applications for the 2026–2027 school year are closed, and the program will post 2027–2028 details on its site. You need to be 18 (high school seniors can apply and test at 17), a diploma or GED, credit for an algebra course, a Pennsylvania driver\'s license and a year living in one of its 22 counties. $25 fee.', src: 'local5' }
      ],
      more: 'Philadelphia and other parts of the state have their own IBEW programs. PA CareerLink can point you to them.',
      find: 'finder'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Chapters of Associated Builders and Contractors (ABC) run registered apprenticeships for workers at their member companies.',
      programs: [
        { area: 'Central Pennsylvania', name: 'ABC Keystone (Manheim)', facts: 'Trades include electrical, plumbing and HVAC. Apply online or in person in Manheim, Tuesday to Friday. You take a math test and need three reference letters from people outside your family. If you don\'t work in the trade yet, ABC Keystone tries to connect you with a member company.', src: 'abcKey', more: 'abcKeyApp' },
        { area: 'Lehigh Valley, suburban Philadelphia and Northeast PA', name: 'ABC Eastern Pennsylvania', facts: 'Registered since 1967, in 10 trades including electrical, plumbing and HVAC, with training centers in Allentown and Harleysville.', src: 'abcEast' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges and career and technical centers teach electrical programs. In Philadelphia, two years of electrical school counts as one year of the license\'s experience, for up to two years.',
      cip: '4603'
    },
    steps: [
      'Take algebra and pass it. IBEW Local 5 requires credit for an algebra course.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'Contact PA CareerLink or check program websites for application dates near you.',
      'Keep a record of every job and who you worked for. Philadelphia and Pittsburgh licenses ask for years of documented experience.',
      'Check the State Board of Electrical Licensure\'s page now and then: statewide license rules are on the way.'
    ],
    stepsSrc: ['local5', 'finder', 'phl', 'pgh', 'board'],
    src: PA_SRC
  },
  {
    slug: 'plumber-pennsylvania',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'PA',
    stateName: 'Pennsylvania',
    checked: 'November 25, 2026',
    title: 'How to become a plumber in Pennsylvania',
    description: 'How to become a plumber in Pennsylvania: local license rules (Philadelphia and Allegheny County as examples), the Philadelphia union apprenticeship\'s January 2027 application dates, and other paid apprenticeships. From official sources.',
    lede: 'Pennsylvania doesn\'t license plumbers statewide. Philadelphia and Allegheny County (Pittsburgh), for example, license plumbers under their own rules, and both start with years as a registered apprentice. Philadelphia\'s union program takes applications for just two weeks in January 2027.',
    rules: [
      { dt: 'Statewide', dd: 'Pennsylvania has no state license for most construction contractors or their workers. Some of its 2,562 cities, boroughs and townships set their own license rules.', src: ['state'] },
      { dt: 'Example: Philadelphia', dd: 'Apprentices need a city apprentice license and must work for a licensed master plumber. After at least 4 years registered as an apprentice in the city, you can take the journeyman exam given by the International Code Council. A journeyman license lets you do plumbing under a master plumber, but not run a business.', src: ['phlApp', 'phlJourney'] },
      { dt: 'Philadelphia master plumber, later', dd: 'At least 1 year as a Philadelphia journeyman plumber, then the master plumber exam.', src: ['phlMaster'] },
      { dt: 'Example: Allegheny County', dd: 'The county health department licenses plumbers. Registering with an accredited apprenticeship program gets you an apprentice card, which lets you do plumbing when a journeyman is present. After 576 hours of school and 4 years working for a registered master plumber, you can take the journeyman exam ($133, given in spring and fall). A master license takes 2 more years as a journeyman.', src: ['acPlumb'] },
      { dt: 'Finding apprenticeships', dd: 'PA CareerLink offices can help you find a registered apprenticeship near you and apply. Every registered apprenticeship includes at least 2,000 hours of paid work and 144 hours of classes, and many last four years or more.', src: ['finder', 'careerlink'] }
    ],
    routesIntro: 'Each program below pays you while you work and adds classes. Check the dates closely: Philadelphia\'s union program only takes applications for two weeks.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, with union contractors.',
      programs: [
        { area: 'Philadelphia', name: 'Plumbers Local 690', facts: 'Five years, with about 2,000 hours of work and at least 224 hours of classes each year. Applications are given out only January 11–15 and 18–22, 2027, 8 a.m. to 4 p.m., in person in Northeast Philadelphia with a photo ID. You need to be 18 and a diploma or equivalent, then pass a test and an interview.', src: 'local690' }
      ],
      more: 'Pittsburgh and other areas have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Chapters of Associated Builders and Contractors (ABC) run registered apprenticeships for workers at their member companies.',
      programs: [
        { area: 'Central Pennsylvania', name: 'ABC Keystone (Manheim)', facts: 'Trades include plumbing, electrical and HVAC. Apply online or in person in Manheim, Tuesday to Friday. You take a math test and need three reference letters from people outside your family. If you don\'t work in the trade yet, ABC Keystone tries to connect you with a member company.', src: 'abcKey', more: 'abcKeyApp' },
        { area: 'Lehigh Valley, suburban Philadelphia and Northeast PA', name: 'ABC Eastern Pennsylvania', facts: 'Registered since 1967, in 10 trades including plumbing, electrical and HVAC, with training centers in Allentown and Harleysville.', src: 'abcEast' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Career and technical centers and community colleges teach plumbing. In Allegheny County, the journeyman exam requires 576 hours of school along with 4 years of work.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED, and keep your transcripts.',
      'Mark your calendar: Plumbers Local 690 hands out applications only January 11–22, 2027.',
      'If you\'ll work in Philadelphia, get a city apprentice license once a licensed master plumber hires you.',
      'In Allegheny County, register with an accredited apprenticeship program to get your apprentice card, and track your school hours.',
      'Keep a record of your work years and who you worked for. Journeyman exams in both places ask for 4 years.'
    ],
    stepsSrc: ['local690', 'phlApp', 'acPlumb', 'phlJourney'],
    src: PAP_SRC
  },
  {
    slug: 'hvac-pennsylvania',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'PA',
    stateName: 'Pennsylvania',
    checked: 'November 25, 2026',
    title: 'How to become an HVAC technician in Pennsylvania',
    description: 'How to become an HVAC technician in Pennsylvania: EPA 608 certification, local rules (Pittsburgh and Philadelphia as examples), and paid apprenticeships, including a Philadelphia union program open until April 30, 2027. From official sources.',
    lede: 'Pennsylvania has no statewide HVAC license, so the rules depend on where you work: Pittsburgh licenses HVAC contractors, for example. Anyone who works with refrigerants needs a federal EPA certification. Paid apprenticeships train HVAC technicians in several parts of the state.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Statewide', dd: 'Pennsylvania has no state license for most construction contractors or their workers. Some of its 2,562 cities, boroughs and townships set their own license rules.', src: ['state'] },
      { dt: 'Example: Pittsburgh', dd: 'Heating and air conditioning work in the city takes an HVAC contractor license: at least 4 years of experience and education combined, and a passing score on a standardized test.', src: ['pghHvac'] },
      { dt: 'Example: Philadelphia', dd: 'A licensed contractor has to do heating, venting and air conditioning work that needs a permit. Since 2017 that means a Philadelphia contractor license; contractors working only inside existing one- and two-family homes can use their state home improvement registration instead.', src: ['phlMech', 'phlWarm'] },
      { dt: 'Finding apprenticeships', dd: 'PA CareerLink offices can help you find a registered apprenticeship near you and apply. Every registered apprenticeship includes at least 2,000 hours of paid work and 144 hours of classes, and many last four years or more.', src: ['finder', 'careerlink'] }
    ],
    routesIntro: 'Each program below pays you while you work and adds classes. In Pennsylvania, the steamfitters union and contractor groups both train HVAC technicians.',
    union: {
      what: 'Run by local unions of the United Association (UA), whose members include HVAC service technicians, with union contractors.',
      programs: [
        { area: 'Philadelphia area', name: 'Steamfitters Local 420, Mechanical Equipment Service', facts: 'Applications for the August 2027 class are open October 31, 2026 to April 30, 2027. Apply online, or pick one up in person in Northeast Philadelphia on weekdays, 7:30 a.m. to 4 p.m., with your photo driver\'s license.', src: 'local420' }
      ],
      more: 'Pittsburgh and other areas have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Chapters of Associated Builders and Contractors (ABC) run registered apprenticeships for workers at their member companies.',
      programs: [
        { area: 'Central Pennsylvania', name: 'ABC Keystone (Manheim)', facts: 'Trades include HVAC, plumbing and electrical. Apply online or in person in Manheim, Tuesday to Friday. You take a math test and need three reference letters from people outside your family. If you don\'t work in the trade yet, ABC Keystone tries to connect you with a member company.', src: 'abcKey', more: 'abcKeyApp' },
        { area: 'Lehigh Valley, suburban Philadelphia and Northeast PA', name: 'ABC Eastern Pennsylvania', facts: 'Registered since 1967, in 10 trades including HVAC, plumbing and electrical, with training centers in Allentown and Harleysville.', src: 'abcEast' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges and career and technical centers teach heating, air conditioning and refrigeration. In Pittsburgh, education counts toward the 4 years the HVAC license asks for.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'If you\'re near Philadelphia, apply to Steamfitters Local 420 before April 30, 2027.',
      'Find out what your city or township requires for heating and air conditioning work.',
      'Keep a record of your work and schooling. Pittsburgh\'s license asks for 4 years of both combined.'
    ],
    stepsSrc: ['epa608', 'local420', 'state', 'pghHvac'],
    src: PAH_SRC
  },
  {
    slug: 'electrician-illinois',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'IL',
    stateName: 'Illinois',
    checked: 'November 25, 2026',
    title: 'How to become an electrician in Illinois',
    description: 'How to become an electrician in Illinois: local license rules (Chicago as an example), and the Chicago-area union apprenticeship, with its registration dates. From official sources.',
    lede: 'In Illinois, the electrician rules you\'ll follow depend on the city or town where you work. Chicago, for example, licenses electrical contractors and supervising electricians. A common route starts with a paid apprenticeship registered with the U.S. Department of Labor.',
    rules: [
      { dt: 'Local rules', dd: 'State law lets each city or village require electrical contractors to register, and a contractor registered in one town can\'t be made to register again in another.', src: ['munic'] },
      { dt: 'Example: Chicago', dd: 'Electrical work that needs a permit has to be done by a licensed electrical contractor, with a licensed supervising electrician doing or directing the work. On big jobs (buildings over 55 feet, large assembly spaces), every electrical worker has to be a supervising electrician, an apprenticeship graduate, or enrolled in a registered electrician apprenticeship of at least 8,000 hours.', src: ['chiFaq', 'chiCont'] },
      { dt: 'Chicago supervising electrician, later', dd: 'You need to be 21, have at least 2 years of electrical work under a supervising electrician (verified by letters), and pass a written exam on the Chicago Electrical Code. The exam and the license cost $150 each.', src: ['chiSup'] },
      { dt: 'Finding apprenticeships', dd: 'Apprenticeship Illinois, the state\'s apprenticeship site, links to a search tool for registered programs.', src: ['finder'] }
    ],
    routesIntro: 'The program below is registered with the U.S. Department of Labor, pays you while you work and adds classes.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Cook County', name: 'IBEW Local 134 and the Electrical Contractors\' Association (EJATT)', facts: 'Register in person in Alsip any Wednesday, 9 to 11 a.m. This cycle runs through February 2027; the March 2027 test picks apprentices for the July and October 2027 classes. You need to be 17, a diploma or GED (seniors in their last semester can register), an algebra course with a C or better, and a driver\'s license. $50 registration fee, and $500 more if you\'re selected. Electrical construction takes five years.', src: 'ejatt', more: 'ejattReg' }
      ],
      more: 'Other parts of Illinois have their own programs.'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges across Illinois teach electrical programs. School can help you get hired, but Chicago\'s supervising electrician license counts work under a supervising electrician.',
      cip: '4603'
    },
    steps: [
      'Take algebra and get at least a C. Chicago\'s union program requires it.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'In Cook County, register on a Wednesday before the end of February 2027 to test in March.',
      'Search Apprenticeship Illinois for programs outside Cook County.',
      'Keep letters from the supervising electricians you work under. Chicago asks for them later.'
    ],
    stepsSrc: ['ejattReg', 'ejatt', 'finder', 'chiSup'],
    src: IL_SRC
  },
  {
    slug: 'plumber-illinois',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'IL',
    stateName: 'Illinois',
    checked: 'November 25, 2026',
    title: 'How to become a plumber in Illinois',
    description: 'How to become a plumber in Illinois: the state apprentice and plumber licenses, the 4 years of work and exam, and Chicago\'s own apprentice license. From official sources.',
    lede: 'Illinois licenses plumbers statewide. You start with a state apprentice plumber license (you can get one at 16 with a sponsor), work at least 4 years under a licensed plumber, and then pass the state exam.',
    rules: [
      { dt: 'State license', dd: 'The Illinois Department of Public Health licenses plumbers. Anyone who installs, repairs or maintains plumbing in the state must be licensed, and you can\'t work as an apprentice without an apprentice license.', src: ['idph', 'statute'] },
      { dt: 'Apprentice plumber license', dd: 'You can get one at 16 with a sponsor: an Illinois licensed plumber or an approved apprenticeship program. You can only plan or install plumbing under your sponsor\'s supervision, and you get at most 6 years as an apprentice.', src: ['idph', 'statute', 'rules'] },
      { dt: 'Plumber license', dd: 'After at least 4 years as a licensed apprentice (at least 1,400 hours a year), plus 2 years of high school or the equivalent and an approved course at a college, university or trade school, you can take the state exam. Apply at least 30 days before the exam date.', src: ['idph', 'rules'] },
      { dt: 'Example: Chicago', dd: 'The city also issues its own apprentice plumber license ($100 a year, from age 16, with a letter from a licensed plumbing contractor or approved program). A state apprentice license is valid in Chicago if your employer holds a city plumbing contractor license.', src: ['chiApp'] }
    ],
    routesIntro: 'Your apprentice license needs a sponsor, so there are two ways to start: an approved apprenticeship program, or getting hired by a licensed plumber who sponsors you.',
    union: {
      what: 'Local unions of the United Association (UA), the plumbers and pipefitters union, run apprenticeship programs with union contractors.',
      programs: [],
      more: 'Find the local that covers your area and ask about its application dates.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges teach plumbing, and the state exam requires an approved course at a college, university or trade school. Your apprentice years still have to be under a licensed plumber.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED. The license needs at least 2 years of high school or the equivalent.',
      'Find a sponsor: a licensed plumber who will hire you, or an approved apprenticeship program.',
      'Apply for your state apprentice plumber license before you start work. You can apply at 16.',
      'Track your hours. The exam needs 4 years with at least 1,400 hours each year.',
      'If you\'ll work in Chicago, check whether you need the city apprentice license too.'
    ],
    stepsSrc: ['idph', 'statute', 'rules', 'chiApp'],
    src: ILP_SRC
  },
  {
    slug: 'hvac-illinois',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'IL',
    stateName: 'Illinois',
    checked: 'November 25, 2026',
    title: 'How to become an HVAC technician in Illinois',
    description: 'How to become an HVAC technician in Illinois: EPA 608 certification, local rules (Chicago as an example), and the Chicago-area union HVAC service apprenticeship. From official sources.',
    lede: 'Anyone in Illinois who works with refrigerants needs a federal EPA certification. Other rules depend on where you work: in Chicago, for example, HVAC permit work is done under a licensed general contractor. The pipefitters union runs a paid HVAC service apprenticeship around Chicago.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Example: Chicago', dd: 'Replacing or adding heating and air conditioning equipment takes a permit, and the permit needs a licensed general contractor (in some cases the owner can act as the contractor). Repairing an existing appliance doesn\'t need a permit.', src: ['chiMech', 'chiNoPermit'] },
      { dt: 'Finding apprenticeships', dd: 'Apprenticeship Illinois, the state\'s apprenticeship site, links to a search tool for registered programs.', src: ['finder'] }
    ],
    routesIntro: 'The program below pays you while you work and adds classes.',
    union: {
      what: 'Run by local unions of the United Association (UA), whose members include HVAC service technicians, with union contractors.',
      programs: [
        { area: 'Chicago area', name: 'Pipe Fitters Local 597, HVAC Service Program', facts: 'Five years, with 1,100 hours of classes. Registration opens online on the first Wednesday of each month; applications are given by appointment on the second Wednesday at the training center in Mokena.', src: 'pf597' }
      ],
      more: 'Other parts of Illinois have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges across Illinois teach heating, air conditioning and refrigeration. Classes can help you pass the EPA 608 test and get hired.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'Near Chicago, check Local 597\'s registration on the first Wednesday of the month.',
      'Find out what your city requires for heating and air conditioning work.',
      'Keep a record of your work and who supervised you.'
    ],
    stepsSrc: ['epa608', 'pf597', 'chiMech'],
    src: ILH_SRC
  },
  {
    slug: 'electrician-ohio',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'OH',
    stateName: 'Ohio',
    checked: 'November 25, 2026',
    title: 'How to become an electrician in Ohio',
    description: 'How to become an electrician in Ohio: the state electrical contractor license and its 5 years of experience, and the Cleveland union apprenticeship. From official sources.',
    lede: 'Ohio\'s state license is for the electrical contractor in charge of commercial jobs, and it takes 5 years in the trade. Electricians who work for a licensed contractor work under that license. A common route starts with a paid registered apprenticeship.',
    rules: [
      { dt: 'State contractor license', dd: 'The Ohio Construction Industry Licensing Board licenses electrical contractors for commercial work. To take the exam you need to be 18 and have at least 5 years as a tradesperson in the trade. A certificate from an approved apprenticeship program counts as proof of experience.', src: ['ocilb', 'rule'] },
      { dt: 'Working under a license', dd: 'Everyone working under a contractor\'s license has to be on that company\'s payroll. The state doesn\'t license residential contractors, but local building departments may have their own rules.', src: ['ocilb', 'residential'] },
      { dt: 'Finding apprenticeships', dd: 'ApprenticeOhio, run by the Ohio Department of Job and Family Services, registers apprenticeships, and its dashboard lets you search for them.', src: ['finder'] }
    ],
    routesIntro: 'The program below is registered, pays you while you work and adds classes.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Cuyahoga County and nearby townships', name: 'Cleveland Electrical JATC, IBEW Local 38', facts: 'Five years: 8,000 hours of work and 720 hours of classes, ending with a State of Ohio certificate. Apply online and finish every step within 60 days. You need to be 18 (or 17 with a diploma), a diploma or GED, a driver\'s license and a score of 4 on the aptitude test. $30 fee.', src: 'cejatc', more: 'cejatcProg' }
      ],
      more: 'Columbus, Cincinnati and other areas have their own programs.'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Career-technical centers and community colleges teach electrical programs. Cleveland\'s apprentices also earn college credit toward an associate degree while they work.',
      cip: '4603'
    },
    steps: [
      'Get a diploma or GED and a driver\'s license.',
      'Brush up on math and reading. Cleveland\'s program needs a 4 on its aptitude test.',
      'Search ApprenticeOhio or program websites for openings near you.',
      'Keep your W-2s and records of every job. The state contractor exam asks for 5 years of proof.'
    ],
    stepsSrc: ['cejatc', 'finder', 'ocilb'],
    src: OH_SRC
  },
  {
    slug: 'plumber-ohio',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'OH',
    stateName: 'Ohio',
    checked: 'November 25, 2026',
    title: 'How to become a plumber in Ohio',
    description: 'How to become a plumber in Ohio: the state plumbing contractor license and its 5 years of experience, and the union apprenticeships in Cleveland and Columbus. From official sources.',
    lede: 'Ohio\'s state license is for the plumbing contractor in charge of commercial jobs, and it takes 5 years in the trade. Plumbers who work for a licensed contractor work under that license. A common route starts with a paid apprenticeship.',
    rules: [
      { dt: 'State contractor license', dd: 'The Ohio Construction Industry Licensing Board licenses plumbing contractors for commercial work. To take the exam you need to be 18 and have at least 5 years as a tradesperson in the trade. A certificate from an approved apprenticeship program counts as proof of experience.', src: ['ocilb', 'rule'] },
      { dt: 'Working under a license', dd: 'Everyone working under a contractor\'s license has to be on that company\'s payroll. The state doesn\'t license residential contractors, but local building departments may have their own rules.', src: ['ocilb', 'residential'] },
      { dt: 'Finding apprenticeships', dd: 'ApprenticeOhio, run by the Ohio Department of Job and Family Services, registers apprenticeships, and its dashboard lets you search for them.', src: ['finder'] }
    ],
    routesIntro: 'Each program below pays you while you work and adds classes.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, with union contractors.',
      programs: [
        { area: 'Cleveland', name: 'Plumbers Local 55', facts: 'Apply in person in Cleveland (check the page for the current days and hours). Bring a diploma or GED, a driver\'s license or state ID (18 or older) and proof you can work in the U.S. You need a 4.5 or higher in every part of the employment test.', src: 'local55' },
        { area: 'Columbus area', name: 'Plumbers and Pipefitters Local 189', facts: 'Five years, with 1,000 hours of classes. Apply in person in Columbus on the first Tuesday of each month, 10 a.m. to 5 p.m., and return the application within two weeks. You need to be 18 to start (17-year-olds can be ranked), a diploma or GED (or a letter saying you\'re on track), transcripts and to live in the local\'s counties. $60 fee.', src: 'local189' }
      ],
      more: 'Other areas have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Career-technical centers and community colleges teach plumbing. Ohio\'s contractor exam asks for 5 years as a tradesperson, so plan on working in the trade after school.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED, and keep your transcripts.',
      'Get a driver\'s license or state ID and your birth certificate ready. Programs ask for them.',
      'Near Columbus, apply to Local 189 on the first Tuesday of any month.',
      'Search ApprenticeOhio for programs in other parts of the state.',
      'Keep your W-2s and records of every job. The state contractor exam asks for 5 years of proof.'
    ],
    stepsSrc: ['local55', 'local189', 'finder', 'ocilb'],
    src: OHP_SRC
  },
  {
    slug: 'hvac-ohio',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'OH',
    stateName: 'Ohio',
    checked: 'November 25, 2026',
    title: 'How to become an HVAC technician in Ohio',
    description: 'How to become an HVAC technician in Ohio: EPA 608 certification, the state HVAC contractor license and its 5 years of experience, and the Columbus union HVAC apprenticeship. From official sources.',
    lede: 'Anyone in Ohio who works with refrigerants needs a federal EPA certification. The state license is for the HVAC contractor in charge of commercial jobs, and it takes 5 years in the trade. Technicians who work for a licensed contractor work under that license.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'State contractor license', dd: 'The Ohio Construction Industry Licensing Board licenses HVAC and refrigeration contractors for commercial work. To take the exam you need to be 18 and have at least 5 years as a tradesperson in the trade. A certificate from an approved apprenticeship program counts as proof of experience.', src: ['ocilb', 'rule'] },
      { dt: 'Working under a license', dd: 'Everyone working under a contractor\'s license has to be on that company\'s payroll. The state doesn\'t license residential contractors, but local building departments may have their own rules.', src: ['ocilb', 'residential'] },
      { dt: 'Finding apprenticeships', dd: 'ApprenticeOhio, run by the Ohio Department of Job and Family Services, registers apprenticeships, and its dashboard lets you search for them.', src: ['finder'] }
    ],
    routesIntro: 'The program below pays you while you work and adds classes.',
    union: {
      what: 'Run by local unions of the United Association (UA), whose members include HVAC service technicians, with union contractors.',
      programs: [
        { area: 'Columbus area', name: 'Plumbers and Pipefitters Local 189, HVAC apprenticeship', facts: 'Send a resume, which goes to the union\'s HVAC service contractors; you join the program once a contractor hires you and you finish a probation period. You need to be 18, with a diploma or GED and a driver\'s license.', src: 'local189' }
      ],
      more: 'Other areas have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Career-technical centers and community colleges teach heating, air conditioning and refrigeration. Classes can help you pass the EPA 608 test and get hired.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Get a diploma or GED and a driver\'s license.',
      'Write a short resume. Columbus\'s union HVAC program starts by sending it to contractors.',
      'Search ApprenticeOhio for programs near you.',
      'Keep your W-2s and records of every job. The state contractor exam asks for 5 years of proof.'
    ],
    stepsSrc: ['epa608', 'local189', 'finder', 'ocilb'],
    src: OHH_SRC
  },
  {
    slug: 'electrician-georgia',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'GA',
    stateName: 'Georgia',
    checked: 'November 26, 2026',
    title: 'How to become an electrician in Georgia',
    description: 'How to become an electrician in Georgia: the state electrical contractor license and its 4 years of experience, and the Atlanta-area union apprenticeship. From official sources.',
    lede: 'Georgia\'s state license is for electrical contractors, and it takes 4 years of hands-on work under a licensed contractor. A common way to get those years is a paid apprenticeship.',
    rules: [
      { dt: 'State contractor license', dd: 'Georgia licenses electrical contractors. You need to be 21, have at least 4 years of hands-on electrical installation experience, pass the exam with a 70 and give three references, one of them a licensed electrical contractor.', src: ['rules'] },
      { dt: 'Two classes', dd: 'Class I covers single-phase work up to 200 amps. Class II has no limit and needs experience on bigger systems.', src: ['rules', 'form'] },
      { dt: 'Your years have to be under a licensed contractor', dd: 'Experience only counts if you worked under a licensed electrical contractor; time with an unlicensed contractor doesn\'t count. One year is 2,000 hours.', src: ['form'] },
      { dt: 'Finding apprenticeships', dd: 'Apprentice Georgia, run by the Technical College System of Georgia, supports registered apprenticeships, and its 22 colleges are the state\'s largest network of apprenticeship sponsors.', src: ['finder'] }
    ],
    routesIntro: 'The program below is registered with the U.S. Department of Labor, pays you while you work and adds classes.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Atlanta and North Georgia (IBEW Local 613 area)', name: 'Atlanta Electrical JATC, IBEW Local 613', facts: 'Four-year inside wireman apprenticeship starting at $18.00 an hour; no experience needed. Applications are closed and reopen in 2027. You need a diploma or GED, a score of 5 of 9 on an aptitude test (math, algebra and reading) and to live in Local 613\'s area. A separate Construction Electrician program takes people with a year of documented electrical experience.', src: 'aejatc', more: 'aejatcHome' }
      ],
      more: 'Other parts of Georgia have their own programs.'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Georgia\'s technical colleges teach electrical programs, and some run apprenticeships with employers. The state license still needs years of work under a licensed contractor.',
      cip: '4603'
    },
    steps: [
      'Take algebra and get comfortable with it. The Atlanta program\'s aptitude test covers math, algebra and reading.',
      'Get a diploma or GED and copies of your transcripts.',
      'Watch for the Atlanta program\'s 2027 application dates, or ask a technical college about apprenticeships near you.',
      'Work only under a licensed electrical contractor, and keep a record of your hours. One year counts as 2,000 hours.',
      'At 21, with 4 years of experience, you can apply for the contractor exam.'
    ],
    stepsSrc: ['aejatc', 'aejatcHome', 'finder', 'form', 'rules'],
    src: GA_SRC
  },
  {
    slug: 'plumber-georgia',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'GA',
    stateName: 'Georgia',
    checked: 'November 26, 2026',
    title: 'How to become a plumber in Georgia',
    description: 'How to become a plumber in Georgia: the state journeyman and master plumber licenses, and the Atlanta union apprenticeship open until April 30, 2027. From official sources.',
    lede: 'Georgia licenses plumbers statewide. A journeyman license takes 1 year of plumbing experience and an exam; a master license takes 5 years, including 2 as a licensed journeyman.',
    rules: [
      { dt: 'Journeyman plumber', dd: 'You need at least 1 year of plumbing experience, a 70 on the exam, and three references from licensed plumbers.', src: ['rules'] },
      { dt: 'Master plumber, later', dd: '5 years of plumbing experience, at least 2 of them as a licensed journeyman. Class I covers homes for up to two families and commercial buildings up to 10,000 square feet; Class II has no limit and needs commercial or industrial experience.', src: ['rules'] },
      { dt: 'What counts as experience', dd: 'Hands-on plumbing installation under the supervision of a licensed master plumber counts. Some related work, like county water or public works maintenance, counts too.', src: ['rules'] },
      { dt: 'Finding apprenticeships', dd: 'Apprentice Georgia, run by the Technical College System of Georgia, supports registered apprenticeships, and its 22 colleges are the state\'s largest network of apprenticeship sponsors.', src: ['finder'] }
    ],
    routesIntro: 'The program below pays you while you work and adds classes. Check its dates: it takes applications for a set window.',
    union: {
      what: 'Run by local unions of the United Association (UA), the plumbers and pipefitters union, with union contractors.',
      programs: [
        { area: 'Atlanta (UA Local 72 area)', name: 'Mechanical Trades Institute, UA Local 72', facts: 'Five years. Applications for fall 2027 are open November 1, 2026 to April 30, 2027; plumbing classes start in August and February. You need to be 18, a transcript of your highest schooling, a driver\'s license and a second ID, and Level 4 on the WorkKeys math and reading tests. $60 fee.', src: 'mti' }
      ],
      more: 'Other parts of Georgia have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Georgia\'s technical colleges teach plumbing. The license counts experience under a licensed master plumber, so plan on working in the trade.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED, and keep your transcripts.',
      'Brush up on math and reading for the WorkKeys tests if you\'re applying to the Atlanta program.',
      'Near Atlanta, apply to the Mechanical Trades Institute before April 30, 2027.',
      'Work under a licensed master plumber and keep a record of your experience.',
      'After a year, take the journeyman exam.'
    ],
    stepsSrc: ['mti', 'rules'],
    src: GAP_SRC
  },
  {
    slug: 'hvac-georgia',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'GA',
    stateName: 'Georgia',
    checked: 'November 26, 2026',
    title: 'How to become an HVAC technician in Georgia',
    description: 'How to become an HVAC technician in Georgia: EPA 608 certification, the state conditioned air contractor license and its 4 or 5 years of experience, and the Atlanta union HVACR apprenticeship. From official sources.',
    lede: 'Anyone in Georgia who works with refrigerants needs a federal EPA certification. The state license for heating and air conditioning is the conditioned air contractor license, which takes 4 or 5 years of experience.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Conditioned air contractor license', dd: 'Class I covers systems up to 175,000 BTU of heating and 60,000 BTU of cooling and takes 4 years of experience. Class II has no limit and takes 5 years, including commercial work. Both need a 70 on the exam, an EPA certification and an approved heat loss/gain and duct design course.', src: ['rules', 'caGuide'] },
      { dt: 'What the 4 years look like (Class I)', dd: 'Two years installing residential systems as a lead mechanic, one year as a service technician and one year supervising residential work.', src: ['rules'] },
      { dt: 'School can count', dd: 'A technical school diploma in engineering or engineering technology can count for up to 2 years, and a vocational-technical certificate for up to 1 year.', src: ['rules'] },
      { dt: 'Finding apprenticeships', dd: 'Apprentice Georgia, run by the Technical College System of Georgia, supports registered apprenticeships, and its 22 colleges are the state\'s largest network of apprenticeship sponsors.', src: ['finder'] }
    ],
    routesIntro: 'The program below pays you while you work and adds classes.',
    union: {
      what: 'Run by local unions of the United Association (UA), whose members include HVAC service technicians, with union contractors.',
      programs: [
        { area: 'Atlanta (UA Local 72 area)', name: 'Mechanical Trades Institute, UA Local 72 (HVACR)', facts: 'Five years; HVACR classes start each fall, and applications for fall 2027 are open November 1, 2026 to April 30, 2027. You must already work for a union HVACR contractor, and have 2 years of documented HVACR work or finish an HVACR technical program. You also need to be 18, a driving record that allows a company vehicle, and Level 4 on the WorkKeys math and reading tests. $60 fee.', src: 'mti' }
      ],
      more: 'Other parts of Georgia have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Georgia\'s technical colleges teach air conditioning technology, and a certificate can count for up to a year of the license\'s experience.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Consider an HVACR program at a technical college. It can count toward experience and open the Atlanta union program.',
      'Get hired by a heating and air contractor, and keep a record of your installation, service and supervision years.',
      'Take an approved heat loss/gain and duct design course before you apply for the license.',
      'After 4 years (Class I), apply for the conditioned air contractor exam.'
    ],
    stepsSrc: ['epa608', 'mti', 'rules'],
    src: GAH_SRC
  },
  {
    slug: 'electrician-michigan',
    trade: 'electrician',
    tradeName: 'electrician',
    state: 'MI',
    stateName: 'Michigan',
    checked: 'November 26, 2026',
    title: 'How to become an electrician in Michigan',
    description: 'How to become an electrician in Michigan: apprentice registration, the journeyman license (8,000 hours over 4 years), and the Detroit union apprenticeship. From official sources.',
    lede: 'Michigan licenses electricians statewide. You start as a registered apprentice, working for a licensed contractor and taking classes, and after 8,000 hours over at least 4 years you can test for a journeyman license.',
    rules: [
      { dt: 'Apprentice electrician', dd: 'To register, you need to work for a master electrician and electrical contractor and be enrolled in classes (related technical instruction). Renew your registration every year.', src: ['lara'] },
      { dt: 'Journeyman electrician', dd: 'You need to be 20 and have 8,000 hours and 4 years as an apprentice, supervised by a licensed journeyman or master electrician. Then pass the exam with at least 75%.', src: ['lara'] },
      { dt: 'Master electrician, later', dd: 'You need to be 22, have 12,000 hours over at least 6 years, and have held a journeyman license for at least 2 years.', src: ['lara'] },
      { dt: 'Finding apprenticeships', dd: 'The state lists registered apprenticeship openings on Pure Michigan Talent Connect, its job site.', src: ['finder'] }
    ],
    routesIntro: 'Each program below pays you while you work and adds classes that count toward your license.',
    union: {
      what: 'Run by the International Brotherhood of Electrical Workers (IBEW) and electrical contractors.',
      programs: [
        { area: 'Metro Detroit', name: 'Electrical Industry Training Center, IBEW Local 58', facts: 'Applications are closed; the next dates will be posted in spring 2027. You need to be 17, a year of high school algebra, and an official transcript with your graduation date (or GED). Create your account at least a week before you apply. $50 fee ($30 for residential).', src: 'eitc' }
      ],
      more: 'Other parts of Michigan have their own IBEW programs.'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Associated Builders and Contractors (ABC) of Michigan trains apprentices for its member companies through three schools.',
      programs: [
        { area: 'Mid-Michigan, Southeast Michigan and West Michigan', name: 'ABC of Michigan training partners', facts: 'More than 10 trades, including electrical, plumbing and HVAC, at the Greater Michigan Construction Academy, the Southeast Michigan Construction Academy and the West Michigan Construction Institute.', src: 'abc' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges across Michigan teach electrical programs, and some provide the classes apprentices need. Your licensing hours still have to be as a registered apprentice.',
      cip: '4603'
    },
    steps: [
      'Take a year of algebra. The Detroit program requires it.',
      'Get a diploma or GED, and request an official transcript.',
      'Watch for the Detroit program\'s spring 2027 dates, or contact an ABC school near you.',
      'Once a licensed contractor hires you, register as an apprentice and enroll in classes.',
      'Keep track of your hours. You need 8,000 over at least 4 years for the journeyman exam.'
    ],
    stepsSrc: ['eitc', 'abc', 'lara'],
    src: MI_SRC
  },
  {
    slug: 'plumber-michigan',
    trade: 'plumbing',
    tradeName: 'plumbing',
    state: 'MI',
    stateName: 'Michigan',
    checked: 'November 26, 2026',
    title: 'How to become a plumber in Michigan',
    description: 'How to become a plumber in Michigan: apprentice registration within 30 days of being hired, and the journey plumber license (6,000 hours over 3 years). From official sources.',
    lede: 'Michigan licenses plumbers statewide. You register as an apprentice within 30 days of being hired, work under a licensed plumber, and after 6,000 hours over at least 3 years you can test for a journey plumber license.',
    rules: [
      { dt: 'Apprentice plumber', dd: 'If you\'re hired as an apprentice plumber, you have to register with the state within 30 days. Apprentices work under the direct, on-site supervision of a journey or master plumber.', src: ['register'] },
      { dt: 'Keep your registration current', dd: 'Renew every year by April 30. Hours you work while your registration has lapsed don\'t count toward the journey license.', src: ['renew'] },
      { dt: 'Journey plumber', dd: 'You need to be 18 and have at least 6,000 hours over at least 3 years as a registered apprentice. Then pass both a written exam and a hands-on practical exam on the same application.', src: ['lara'] },
      { dt: 'Finding apprenticeships', dd: 'The state lists registered apprenticeship openings on Pure Michigan Talent Connect, its job site.', src: ['finder'] }
    ],
    routesIntro: 'You can start with a union or contractor-group apprenticeship, or by getting hired by a licensed plumbing contractor and registering as an apprentice.',
    union: {
      what: 'Local unions of the United Association (UA), the plumbers and pipefitters union, run apprenticeship programs with union contractors.',
      programs: [],
      more: 'Find the local that covers your area and ask about its application dates.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Associated Builders and Contractors (ABC) of Michigan trains apprentices for its member companies through three schools.',
      programs: [
        { area: 'Mid-Michigan, Southeast Michigan and West Michigan', name: 'ABC of Michigan training partners', facts: 'More than 10 trades, including plumbing, electrical and HVAC, at the Greater Michigan Construction Academy, the Southeast Michigan Construction Academy and the West Michigan Construction Institute.', src: 'abc' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges across Michigan teach plumbing. Your licensing hours have to be as a registered apprentice, so plan on working in the trade.',
      cip: '4605'
    },
    steps: [
      'Get a diploma or GED, and keep your transcripts.',
      'Find a licensed plumbing contractor, union local or ABC school that will hire you as an apprentice.',
      'Register with the state within 30 days of being hired.',
      'Renew your registration by April 30 every year, so all your hours count.',
      'After 6,000 hours over at least 3 years, apply for the journey plumber exam.'
    ],
    stepsSrc: ['abc', 'register', 'renew', 'lara'],
    src: MIP_SRC
  },
  {
    slug: 'hvac-michigan',
    trade: 'hvac',
    tradeName: 'HVAC',
    state: 'MI',
    stateName: 'Michigan',
    checked: 'November 26, 2026',
    title: 'How to become an HVAC technician in Michigan',
    description: 'How to become an HVAC technician in Michigan: EPA 608 certification, the state mechanical contractor license and its 3 years of experience, and paid apprenticeships. From official sources.',
    lede: 'Anyone in Michigan who works with refrigerants needs a federal EPA certification. The state license for heating and air conditioning work is the mechanical contractor license, which takes 3 years of experience in each type of work.',
    rules: [
      { dt: 'EPA 608 for refrigerants', dd: 'Federal rules say technicians who maintain, service, repair or dispose of equipment that could release refrigerants must be certified under Section 608, by passing a test. Only certified technicians can buy those refrigerants.', src: ['epa608', 'epaSales'] },
      { dt: 'Mechanical contractor license', dd: 'Licensed mechanical contractors can install, alter and service systems and get permits. You need at least 3 years of experience in each work classification you apply for, such as HVAC equipment, ductwork or refrigeration, and you pass an exam for each one.', src: ['lara'] },
      { dt: 'School can shorten it', dd: 'The state\'s guide lists a specialized education program plus 2 years working for a licensed mechanical contractor as another way to qualify.', src: ['path'] },
      { dt: 'Finding apprenticeships', dd: 'The state lists registered apprenticeship openings on Pure Michigan Talent Connect, its job site.', src: ['finder'] }
    ],
    routesIntro: 'Each program below pays you while you work and adds classes.',
    union: {
      what: 'Run by local unions of the United Association (UA), whose members include HVAC/R technicians, with union contractors.',
      programs: [
        { area: 'Detroit area', name: 'Pipefitters Local 636', facts: 'A tuition-free, five-year apprenticeship registered with the U.S. Department of Labor, training steamfitters, pipefitters and HVAC/R technicians. Contact the local for its application dates.', src: 'local636' }
      ],
      more: 'Other parts of Michigan have their own UA locals.',
      find: 'uaFind',
      findLabel: 'Find your local union'
    },
    nonunion: {
      heading: 'Paid apprenticeships run by contractor groups',
      what: 'Associated Builders and Contractors (ABC) of Michigan trains apprentices for its member companies through three schools.',
      programs: [
        { area: 'Mid-Michigan, Southeast Michigan and West Michigan', name: 'ABC of Michigan training partners', facts: 'More than 10 trades, including HVAC, plumbing and electrical, at the Greater Michigan Construction Academy, the Southeast Michigan Construction Academy and the West Michigan Construction Institute.', src: 'abc' }
      ]
    },
    school: {
      heading: 'School first, then work experience',
      what: 'Community colleges across Michigan teach heating, air conditioning and refrigeration. A specialized program can cut the work experience the license needs from 3 years to 2.',
      cip: '4702'
    },
    steps: [
      'Study for and pass the EPA 608 test, so you can work with refrigerants.',
      'Get a diploma or GED, a driver\'s license and copies of your transcripts.',
      'Get hired by a licensed mechanical contractor, or apply to a union local or ABC school.',
      'Keep a record of each type of work you do. The license counts years per classification.',
      'After 3 years (or 2 with a specialized program), apply for the mechanical contractor exam in the classifications you need.'
    ],
    stepsSrc: ['epa608', 'local636', 'abc', 'lara', 'path'],
    src: MIH_SRC
  }

];

export const stateGuideBySlug = new Map(STATE_GUIDES.map((g) => [g.slug, g]));
export const guideFor = (trade, state) => STATE_GUIDES.find((g) => g.trade === trade && g.state === state);
export const guideSchools = (g) => ({ list: publicSchools(g.state, g.school.cip), all: countAll(g.state, g.school.cip) });
