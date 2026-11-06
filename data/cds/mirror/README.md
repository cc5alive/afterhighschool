# Mirrored CDS files

Some colleges block automated downloads with bot checks. For those, a person opens the college's own page,
downloads the official Common Data Set, and the file is kept here. `data/cds/sources.json` lists it as
`"mirror": "data/cds/mirror/<slug>.<ext>"` next to the college's own `url`, which is what the site cites.
The reader treats the copy exactly like a downloaded file. Replace it when the college posts a newer year.

Scanned reports with no text (Clemson 2025-26) are run through OCR with `scripts/ocr-cds.py`; the
`.rows.json` it writes is what the reader uses. Key numbers were checked against the page images by hand.

Florida State publishes its CDS as web pages behind a section picker. CC saved screenshots of sections C and D
(kept in `florida-state-university/`); they were run through OCR into `florida-state-university.rows.json`.
The D2 transfer table couldn't be OCR'd through its borders, so its rows were typed from the screenshot
and checked (the gender rows add up to the totals).

UT Austin's 2025-26 PDF uses a font that drops some letters ("otal" for "Total"), so its rows combine the
PDF's text with an OCR'd copy of the D2 transfer table. UT left its SAT/ACT and GPA tables blank.

UVA shows its CDS in embedded Qlik dashboards that only render in a browser. Its key figures were read from
the rendered section C and D pages in CC's Chrome and written into `university-of-virginia-main-campus.rows.json`
in the standard CDS labels; every count was checked against its parts (the male, female and unknown columns add
up to each total). UVA left its GPA table blank. Its ACT 75th percentile is 34.25: individual ACT scores are whole numbers, but a percentile can fall between them when it is interpolated, so it is published as reported.

Brown shows its CDS as a Tableau workbook (tableau.brown.edu, linked from its institutional research page) that
draws the numbers on a canvas. Its 2025-26 section C and D figures were read from the rendered C - Admissions
and D - Transfer Admissions tabs in CC's Chrome and written into `brown-university.rows.json` in the standard CDS
labels; each count was checked against its gender columns. Brown doesn't collect GPA and reported the wait-list
offered and accepted counts as N/A, so those are left out.
