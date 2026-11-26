// State-specific transfer routes that matter more than the 2022 ECS survey answers. Each route comes
// from the official page linked with it and carries the date we checked it. Only add a state when
// its routes are checked against official sources.
export const ROUTES_CHECKED = 'November 9, 2026';

export const STATE_ROUTES = {
  CA: {
    lede: 'Most students who transfer from a California community college use one or more of these routes. Pick a target campus and major early, because each route has its own rules.',
    routes: [
      {
        name: 'CSU: Associate Degree for Transfer (ADT)',
        what: 'Earn an Associate in Arts or Science for Transfer (AA-T or AS-T) and you get priority admission to the California State University system, though not necessarily to a particular campus or major.',
        details: [
          'If you\'re admitted to a CSU program that counts as similar to your ADT, you can finish your bachelor\'s within 60 more semester units (90 quarter units).',
          'You still have to meet the admission requirements for the programs you apply to. If a campus is full, you may be redirected to another CSU campus.',
          'The guarantee depends on staying enrolled in the same major, and some programs also require an audition or portfolio.'
        ],
        link: { label: 'CSU: Associate Degree for Transfer', url: 'https://calstate.edu/apply/transfer/pages/ccc-associate-degree-for-transfer.aspx' }
      },
      {
        name: 'UC: Transfer Admission Guarantee (TAG)',
        what: 'Six University of California campuses offer a guaranteed admission agreement to community college students who meet their requirements: Davis, Irvine, Merced, Riverside, Santa Barbara and Santa Cruz. UCLA, Berkeley and San Diego aren\'t on the list.',
        details: [
          'Each campus sets its own GPA and course requirements; the UC TAG matrix lists them.',
          'You can choose one campus. For a fall start, submit your TAG application September 1–30.',
          'After you submit it, you still need to finish all the coursework your agreement lists.'
        ],
        link: { label: 'University of California: Transfer Admission Guarantee', url: 'https://admission.universityofcalifornia.edu/admission-requirements/transfer-requirements/uc-transfer-programs/transfer-admission-guarantee-tag.html' }
      },
      {
        name: 'ASSIST: which classes count where',
        what: 'ASSIST is the official site for California transfer agreements. Pick your community college and the university you want, and it shows which of your classes count, course by course and major by major.',
        details: ['Check it before you register each term, and save the agreement for your target campus and major.'],
        link: { label: 'ASSIST', url: 'https://assist.org/' }
      },
      {
        name: 'Common course numbers are coming',
        what: 'California community colleges are giving common transfer courses the same number at every college, in phases.',
        details: [
          'The first group of aligned courses has to appear in catalogs by fall 2026, and the next group by fall 2027.',
          'The same number doesn\'t yet guarantee the same transfer credit at every university, so still check ASSIST.'
        ],
        link: { label: 'California Community Colleges Chancellor\'s Office: common course numbering update (March 2026)', url: 'https://www.cccco.edu/-/media/CCCCO-Website/docs/memo/ess-26-25-common-course-numbering-implementation-phase-3-update-a11y.pdf' }
      }
    ],
    // How to read the 2022 survey's answers for this state, given the routes above.
    surveyNote: 'Read these answers with the routes above in mind: California\'s guarantees cover the CSU system (ADT) and six UC campuses (TAG) separately, each with conditions.'
  }  ,
  TX: {
    checked: 'November 25, 2026',
    lede: 'Texas law makes general education and some majors\' first two years transfer between public colleges and universities. None of these routes guarantees admission to a particular university, so apply like any transfer student and check each school\'s rules.',
    routes: [
      {
        name: 'Texas Core Curriculum: your general education transfers as a block',
        what: 'Every public college and university in Texas has a 42-credit core curriculum. Finish the core at one and it replaces the core at the public school you transfer to, so you don\'t repeat core classes.',
        details: [
          'If you transfer before finishing the core, you still get credit for each core class you completed.'
        ],
        link: { label: 'Texas Higher Education Coordinating Board: Texas Core Curriculum (April 2018)', url: 'https://reportcenter.highered.texas.gov/agency-publication/miscellaneous/elements-of-the-texas-core-curriculum/' }
      },
      {
        name: 'Texas Direct: a transfer associate degree built around your major',
        what: 'Finish the Texas Core Curriculum plus a Field of Study (a set of first- and second-year courses for one major) at a public two-year college, and you automatically qualify for the Texas Direct Transfer Degree. Those courses then transfer as a block toward that major.',
        details: [
          'Fields of Study are finished for business administration, communications, criminal justice, education, history (B.S.), kinesiology, nursing, political science, psychology, social work and sociology. Biology, computer science, English and architecture are waiting for final approval.',
          'If you only finish part of a Field of Study, those courses still transfer, but the university can ask for more lower-level courses.',
          'Texas Direct is about credit, not admission: it doesn\'t promise you a spot at a particular university.'
        ],
        link: { label: 'Texas Higher Education Coordinating Board: Texas Direct', url: 'https://www.highered.texas.gov/texas-direct/' }
      },
      {
        name: 'TCCNS: matching course numbers',
        what: 'The Texas Common Course Numbering System is a shared set of course numbers used by 137 Texas community colleges and universities. A course with a TCCNS number transfers as the course with the same number at another participating school.',
        details: ['Use its compare tool to see how a class at your college matches up at the university you want, before you register.'],
        link: { label: 'Texas Common Course Numbering System', url: 'https://tccns.org/' }
      }
    ],
    surveyNote: 'The survey answered "no" for associate degrees transferring as a whole, but Texas Direct, adopted in 2021, now moves the core plus a Field of Study as a block for the majors listed above.'
  },
  FL: {
    checked: 'November 25, 2026',
    lede: 'In Florida, finishing an associate in arts (AA) at a public state college guarantees you a spot at a state university. Plan your major early, because the guarantee doesn\'t cover every campus or program.',
    routes: [
      {
        name: '2+2: an AA guarantees admission to a state university',
        what: 'Earn an AA from one of Florida\'s 28 public state colleges and you\'re guaranteed admission to one of the 12 state universities, with at least 60 credits counting toward your bachelor\'s degree.',
        details: [
          'The guarantee is a spot at one of the universities, not necessarily your first choice, and it doesn\'t cover limited-access programs.',
          'If you transfer before you finish the AA, you can lose these guarantees and may have to meet freshman admission standards.'
        ],
        link: { label: 'Florida Department of Education: college and university transfer (2+2 articulation)', url: 'https://www.fldoe.org/schools/higher-ed/fl-college-system/dual-enroll-transfer/postsecondary-articulation.stml' }
      },
      {
        name: 'Statewide course numbers',
        what: 'Equivalent courses at Florida\'s public colleges and universities share the same prefix and number, and the school you transfer to has to give you credit for them.',
        details: ['Some courses aren\'t covered, including career and technical courses, clinical health courses and courses the receiving school doesn\'t offer.'],
        link: { label: 'Florida Department of Education: college and university transfer (statewide course numbering)', url: 'https://www.fldoe.org/schools/higher-ed/fl-college-system/dual-enroll-transfer/postsecondary-articulation.stml' }
      },
      {
        name: 'Common prerequisites and FloridaShines',
        what: 'Most bachelor\'s programs require specific courses before you\'re admitted, and the state lists them in its Common Prerequisite Manual each year.',
        details: ['FloridaShines, the state\'s advising site, checks your transcript against a program\'s requirements and shows what changes if you switch majors or schools.'],
        link: { label: 'Florida Department of Education: college and university transfer (common prerequisites and FloridaShines)', url: 'https://www.fldoe.org/schools/higher-ed/fl-college-system/dual-enroll-transfer/postsecondary-articulation.stml' }
      }
    ],
    surveyNote: 'Florida\'s answers match the routes above: the AA guarantee is admission to the state university system, not to a particular campus or limited-access program.'
  },
  NY: {
    checked: 'November 25, 2026',
    lede: 'New York\'s transfer rules come from its two public systems, SUNY and CUNY, which each have their own guarantees. Finishing your associate degree before you transfer is what unlocks most of them.',
    routes: [
      {
        name: 'SUNY Transfer Guarantee',
        what: 'New York students who transfer directly from a SUNY campus with an associate in arts (AA) or associate in science (AS) are guaranteed admission to a SUNY four-year campus.',
        details: [
          'The guarantee is for a SUNY four-year campus, not a particular one.',
          'SUNY AA and AS graduates who transfer into a matching program at a SUNY four-year campus are guaranteed junior standing.'
        ],
        link: { label: 'SUNY: transfer policies', url: 'https://www.suny.edu/attend/get-started/transfer-students/suny-transfer-policies/' }
      },
      {
        name: 'SUNY general education and Transfer Paths',
        what: 'General education requirements you finish at one SUNY campus meet the same requirement at any other SUNY campus. SUNY Transfer Paths list the courses for each major that every SUNY campus accepts.',
        details: [
          'Transfer Path courses count toward the major if you earn a C or better.',
          'SUNY\'s transfer guarantee also covers New York residents who earn an AA or AS at a CUNY two-year college.'
        ],
        link: { label: 'SUNY: Seamless Transfer guarantees', url: 'https://transfer.suny.edu/students/seamless-transfer/' }
      },
      {
        name: 'CUNY Pathways',
        what: 'General education requirements you finish at one CUNY college carry over if you transfer to another CUNY college.',
        details: ['Other courses transfer if the new college finds them equivalent to its own; most colleges send your credit evaluation after you accept their offer.'],
        link: { label: 'CUNY: how credits transfer', url: 'https://www.cuny.edu/admissions/undergraduate/transfer/credits/' }
      },
      {
        name: 'CUNY: finish your associate degree first',
        what: 'If you complete a CUNY associate degree before transferring, you take only 6 more general education credits at the CUNY senior college, instead of 9 to 12.',
        details: [],
        link: { label: 'CUNY: transfer frequently asked questions', url: 'https://www.cuny.edu/admissions/undergraduate/transfer/faq/' }
      }
    ],
    surveyNote: 'The survey looked only for statewide rules, which New York doesn\'t have. Its guarantees come from SUNY and CUNY separately, as described above.'
  },
  IL: {
    checked: 'November 25, 2026',
    lede: 'In Illinois, a statewide general education package transfers among participating colleges and universities, and the University of Illinois System guarantees admission to transfer students who meet its requirements.',
    routes: [
      {
        name: 'Illinois Articulation Initiative (IAI): a general education package',
        what: 'The IAI general education package is 12 to 13 courses (37 to 41 credits). Finish the whole package and it meets the general education requirements at participating Illinois schools.',
        details: [
          'The package transfers as a whole; individual courses aren\'t guaranteed to transfer one by one.',
          'iTransfer.org shows which of your courses carry IAI codes and what\'s recommended for your major.'
        ],
        link: { label: 'iTransfer (Illinois Articulation Initiative): general education core curriculum', url: 'https://itransfer.org/courses/gened/' }
      },
      {
        name: 'University of Illinois System Transfer Guarantee',
        what: 'If you graduated from an Illinois high school (or were homeschooled or earned a GED in Illinois), have at least 36 graded transferable credits and a 3.0 GPA in them, you\'re guaranteed admission to a University of Illinois System university.',
        details: [
          'You also have to meet the university\'s English proficiency requirement and be working toward your first bachelor\'s degree.',
          'It doesn\'t guarantee a specific college, department or major, and some majors have extra requirements and limited space.',
          'There\'s no separate application: submit a complete transfer application during the filing period. Deadlines differ by campus.'
        ],
        link: { label: 'University of Illinois System: Transfer Guarantee FAQ', url: 'https://www.uaps.uillinois.edu/transfer_guarantee/faq' }
      },
      {
        name: 'UIC Transfer Admission Guarantee (TAG)',
        what: 'Students at partner community colleges can get guaranteed admission to one of nine colleges at the University of Illinois Chicago.',
        details: ['Finishing an AA or AS is strongly encouraged but not required.'],
        link: { label: 'University of Illinois Chicago: Guaranteed Admission (Transfer)', url: 'https://admissions.uic.edu/undergraduate/requirements-deadlines/transfer-requirements/guaranteed-admissions-transfer' }
      }
    ],
    surveyNote: 'Read the survey\'s common-course-numbering answer with iTransfer in mind: Illinois uses IAI codes instead of shared course numbers.'
  }

};
