# Common Data Set round 2 (Gemini)

Goal: Common Data Set numbers for the next 300 colleges by size and selectivity that we haven't researched yet. These feed "Getting in", "Where you'd stand", transfer admission and deferral.

- 30 files of 10 colleges. One file per new Gemini chat (with Google Search on); paste the whole file.
- If it stops partway, reply "continue". Save the full reply as a .txt named after the file (for example cds2-01.txt) and send it to Claude.
- New this round: C18 deferral and D2 transfer keys.
- Import: `node scripts/import-cds.mjs <file>`. Pushing drafts runs `.github/workflows/check-cds.yml`, which opens each college's CDS document and confirms every value against it. Only confirmed values get published.
- Skips colleges already published, read, drafted, listed in `data/cds/sources.json`, or in `data/cds/no-public-cds.json`.
- Regenerate with `node scripts/make-gemini-cds.mjs 300 10 docs/gemini-cds-2`.
