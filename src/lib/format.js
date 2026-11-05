export const pct = (v) => (v == null ? null : `${Math.round(v * 100)}%`);
export const money = (v) => (v == null ? null : `$${Math.round(v).toLocaleString('en-US')}`);
export const int = (v) => (v == null ? null : Math.round(v).toLocaleString('en-US'));

export const OWNERSHIP_LABEL = {
  public: 'Public',
  private_nonprofit: 'Private nonprofit',
  private_for_profit: 'Private for-profit'
};

export const SETTING_LABEL = { city: 'City', suburb: 'Suburb', town: 'Town', rural: 'Rural' };

export const SIZE_LABEL = { small: 'Small', medium: 'Medium', large: 'Large' };

export const TEST_POLICY_LABEL = {
  required: 'Test scores required',
  recommended: 'Test scores recommended',
  considered_not_required: 'Test-optional',
  not_considered: 'Test-blind'
};

export const TEST_POLICY_DETAIL = {
  required: 'Applicants must send SAT or ACT scores.',
  recommended: 'Scores are recommended but not required.',
  considered_not_required: 'Scores are considered if you send them, but not required.',
  not_considered: 'Scores are not considered, even if you send them.'
};

export const INCOME_BAND_LABEL = {
  '0-30000': '$0–30k',
  '30001-48000': '$30–48k',
  '48001-75000': '$48–75k',
  '75001-110000': '$75–110k',
  '110001-plus': 'Over $110k'
};

export function admitRateText(s) {
  if (s.admitRate != null) return pct(s.admitRate);
  if (s.openAdmission) return 'Open admission';
  return null;
}

export const scorecardUrl = (s) => `https://collegescorecard.ed.gov/school/?${s.id}`;
