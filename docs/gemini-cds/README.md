# Common Data Set round (Gemini)

Goal: verified Common Data Set numbers (GPA spread, early decision odds, wait list, test scores, what admissions weighs) for the 200 most-searched schools. These feed the "Getting in" panel and the chances calculator.

- 20 files of 10 schools, most-searched and most selective first. One file per new Gemini chat (with Google Search on); paste the whole file.
- If it stops partway, reply "continue". Save the full reply as a .txt named after the file (for example cds-01.txt) and send it to Claude.
- Import: `node scripts/import-cds.mjs <file>`. Pushing drafts runs `.github/workflows/check-cds.yml`, which opens each school's CDS document (PDF, Excel or HTML) and confirms every value: numbers by their quoted line, C7 factors by which column the checkmark sits in. Only confirmed values get published.
- Regenerate the files with `node scripts/make-gemini-cds.mjs`.
