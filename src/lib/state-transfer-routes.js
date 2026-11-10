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
  }
};
