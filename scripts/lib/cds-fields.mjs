// The Common Data Set items we collect, keyed the way Gemini returns them and the checker verifies them.
// section = CDS section, label = how the CDS row reads, type: count | pct | score | gpa | yesno | factor
export const CDS_FIELDS = {
  // C1: first-year applicants, admits and enrollees (totals across all genders)
  applied_total: { section: 'C1', type: 'count', label: 'Total first-time, first-year students who applied' },
  admitted_total: { section: 'C1', type: 'count', label: 'Total first-time, first-year students who were admitted' },
  enrolled_total: { section: 'C1', type: 'count', label: 'Total first-time, first-year students enrolled' },
  // C2: wait list
  waitlist_offered: { section: 'C2', type: 'count', label: 'Number of qualified applicants offered a place on wait list' },
  waitlist_accepted: { section: 'C2', type: 'count', label: 'Number accepting a place on the wait list' },
  waitlist_admitted: { section: 'C2', type: 'count', label: 'Number of wait-listed students admitted' },
  // C9: test scores of enrolled first-years
  sat_submit_pct: { section: 'C9', type: 'pct', label: 'Percent submitting SAT scores' },
  act_submit_pct: { section: 'C9', type: 'pct', label: 'Percent submitting ACT scores' },
  sat_p25: { section: 'C9', type: 'score', label: 'SAT Composite 25th percentile' },
  sat_p50: { section: 'C9', type: 'score', label: 'SAT Composite 50th percentile' },
  sat_p75: { section: 'C9', type: 'score', label: 'SAT Composite 75th percentile' },
  act_p25: { section: 'C9', type: 'score', label: 'ACT Composite 25th percentile' },
  act_p50: { section: 'C9', type: 'score', label: 'ACT Composite 50th percentile' },
  act_p75: { section: 'C9', type: 'score', label: 'ACT Composite 75th percentile' },
  // C10: class rank
  rank_top10_pct: { section: 'C10', type: 'pct', label: 'Percent in top tenth of high school graduating class' },
  rank_top25_pct: { section: 'C10', type: 'pct', label: 'Percent in top quarter of high school graduating class' },
  rank_submit_pct: { section: 'C10', type: 'pct', label: 'Percent of total first-time, first-year students who submitted high school class rank' },
  // C11: GPA distribution of enrolled first-years
  gpa_400_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA of 4.0' },
  gpa_375_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 3.75 and 3.99' },
  gpa_350_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 3.50 and 3.74' },
  gpa_325_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 3.25 and 3.49' },
  gpa_300_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 3.00 and 3.24' },
  gpa_250_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 2.50 and 2.99' },
  gpa_200_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 2.0 and 2.49' },
  gpa_100_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA between 1.0 and 1.99' },
  gpa_below1_pct: { section: 'C11', type: 'pct', label: 'Percent who had GPA below 1.0' },
  // C12: average GPA
  gpa_average: { section: 'C12', type: 'gpa', label: 'Average high school GPA of all degree-seeking, first-time, first-year students who submitted GPA' },
  gpa_submit_pct: { section: 'C12', type: 'pct', label: 'Percent of total first-time, first-year students who submitted high school GPA' },
  // C21 / C22: early decision and early action
  ed_offered: { section: 'C21', type: 'yesno', label: 'Does your institution offer an early decision plan' },
  ed_applied: { section: 'C21', type: 'count', label: 'Number of early decision applications received by your institution' },
  ed_admitted: { section: 'C21', type: 'count', label: 'Number of applicants admitted under early decision plan' },
  ea_offered: { section: 'C22', type: 'yesno', label: 'Do you have a nonbinding early action plan' },
  ea_applied: { section: 'C22', type: 'count', label: 'Number of early action applications received' },
  ea_admitted: { section: 'C22', type: 'count', label: 'Number of applicants admitted under early action' },
  // D2: degree-seeking transfer students (totals across all genders), fall term of the CDS year
  transfer_applied: { section: 'D2', type: 'count', label: 'Total transfer applicants' },
  transfer_admitted: { section: 'D2', type: 'count', label: 'Total admitted transfer applicants' },
  transfer_enrolled: { section: 'D2', type: 'count', label: 'Total enrolled transfer applicants' }
};

// C7: relative importance of each factor in first-year admission decisions.
export const CDS_FACTORS = {
  factor_rigor: 'Rigor of secondary school record',
  factor_class_rank: 'Class rank',
  factor_gpa: 'Academic GPA',
  factor_test_scores: 'Standardized test scores',
  factor_essay: 'Application Essay',
  factor_recommendations: 'Recommendation(s)',
  factor_interview: 'Interview',
  factor_extracurriculars: 'Extracurricular activities',
  factor_talent: 'Talent/ability',
  factor_character: 'Character/personal qualities',
  factor_first_generation: 'First generation',
  factor_alumni: 'Alumni/ae relation',
  factor_geography: 'Geographical residence',
  factor_state_residency: 'State residency',
  factor_religion: 'Religious affiliation/commitment',
  factor_volunteer: 'Volunteer work',
  factor_work: 'Work experience',
  factor_interest: "Level of applicant's interest"
};
export const FACTOR_LEVELS = ['Very Important', 'Important', 'Considered', 'Not Considered'];
