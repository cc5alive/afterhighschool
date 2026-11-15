# Mirrored CDS files

Some colleges block automated downloads with bot checks. For those, a person opens the college's own page,
downloads the official Common Data Set, and the file is kept here. `data/cds/sources.json` lists it as
`"mirror": "data/cds/mirror/<slug>.<ext>"` next to the college's own `url`, which is what the site cites.
The reader treats the copy exactly like a downloaded file. Replace it when the college posts a newer year.

Scanned reports with no text can be run through OCR with `scripts/ocr-cds.py`, but OCR misses tables and tick
boxes. Clemson posts its CDS only as a scanned PDF (open.clemson.edu), so `clemson-university.rows.json` was
transcribed by hand from the page images of `clemson-university.pdf` (sections C and D), and every count was
checked against its parts. Clemson's own document is off by one in C1: admitted men, women and unknown add to
27,497 against the 27,498 total in its residency table, and enrolled women (2,940) is one more than its full-time
plus part-time count (2,939). We publish the totals Clemson printed (64,805 applied, 27,498 admitted, 5,084
enrolled), which agree with the residency table.

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

Williams' site turns away GitHub's servers (HTTP 403), and its PDF can't be read as text in a browser. Its
2025-26 section C and D figures were read from the PDF in CC's Chrome and written into `williams-college.rows.json`
in the standard CDS labels; each count was checked against its parts. Williams left C11 and the average GPA blank.

College of Charleston's site doesn't answer GitHub's servers (the download times out), though its 2025-26 section C
and D files open normally in a browser. Their figures were copied from those files into
`college-of-charleston.rows.json` in the standard CDS labels. Each count was checked against its parts: the male and
female columns add up to the C1 and D2 totals, and the C11 GPA ranges add up to 100%.

Kansas posts section C of its 2025-26 CDS as its own PDF, laid out in a way our reader misreads (it read only some
rows). Its figures were copied from that PDF into `university-of-kansas.rows.json`; the C1 male and female columns
add up to the totals and the C11 ranges add up to 100%. The SAT/ACT score ranges weren't copied, so only the
percent submitting SAT scores is included; add them from the PDF if needed.
