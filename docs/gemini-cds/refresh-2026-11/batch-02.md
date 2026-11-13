# Task: find the newest Common Data Set file for 25 US colleges (batch 2 of 5)

You're helping keep afterhighschool.me up to date. It's a free, high-trust site that helps 16–18-year-olds decide what to do after high school. We already have an older Common Data Set (CDS) for each college below. Your only job is to **find the link to each college's newest CDS document**. Don't copy any numbers: we read the document ourselves and check every value automatically.

## How to work

1. **Browse live.** If you can't open web pages, reply only: BROWSING UNAVAILABLE.
2. **Start from the link we have.** Each college is listed with the CDS year we have and the link we used. Open the page that link came from (usually the school's institutional research, institutional effectiveness or "facts and figures" page) and look for a newer year.
3. **If that doesn't work, search.** Try `site:<the school's domain> "common data set"` and `"<college name>" "common data set" 2025-2026`.
4. **What counts as newer:** 2026-2027 if it's posted; otherwise 2025-2026. If the newest posted is the same year we already have, say so (see the output format). Never give a year older than the one we have.
5. **Link the document itself:** the PDF, Excel file or HTML page that holds the CDS tables, not the page that links to it. It must be on the school's own website. A Box, Dropbox, Google Drive or SharePoint link is fine only if the school's own page links to it.
6. **Read the year off the document**, from its title or first page, not from the link. Some schools label it by fall term ("Fall 2025" means 2025-2026).
7. **Don't guess.** If you can't find a newer file, say so. A wrong link is worse than none.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per college, in the order listed. No intro, no code fences, no notes after.

Found a newer CDS:
{"slug":"<slug exactly as listed>","status":"newer","cdsYear":"2025-2026","url":"<direct https link to the CDS document>","title":"<the document's title as shown>","checkedPage":"<the page where you found the link>","concerns":null}

Newest posted is the year we already have:
{"slug":"<slug>","status":"same","cdsYear":"<that year>","url":null,"title":null,"checkedPage":"<the page you checked>","concerns":null}

Couldn't find it, or the school stopped posting:
{"slug":"<slug>","status":"not_found","cdsYear":null,"url":null,"title":null,"checkedPage":"<the pages you checked>","concerns":"<what happened, in one sentence>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. Use "concerns" for anything odd, such as a file that won't open, a page that needs a login, or a year label that doesn't match the contents.

Do all 25 colleges. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next college.

## Colleges

Format: slug | name | city, state | school website | CDS year we have | link we have

- university-of-wisconsin-oshkosh | University of Wisconsin-Oshkosh | Oshkosh, WI | www.uwosh.edu | 2023-2024 | https://www.uwosh.edu/institutional-effectiveness/wp-content/uploads/sites/224/2024/11/CDS-C.pdf
- boston-college | Boston College | Chestnut Hill, MA | www.bc.edu | 2024-2025 | https://www.bc.edu/content/dam/bc1/offices/irp/ir/cds/Boston_College_CDS_2024-2025_Final.pdf
- bryn-mawr-college | Bryn Mawr College | Bryn Mawr, PA | www.brynmawr.edu | 2024-2025 | https://www.brynmawr.edu/sites/default/files/media/documents/2025-01/CDS-2024-2025-Bryn%20Mawr%20Read%20Only%20Update.pdf
- butler-university | Butler University | Indianapolis, IN | www.butler.edu | 2024-2025 | https://cdn.butler.edu/www/sites/3/2025/02/08093226/CDS_2024_2025-C.pdf
- carnegie-mellon-university | Carnegie Mellon University | Pittsburgh, PA | www.cmu.edu | 2024-2025 | https://www.cmu.edu/ira/CDS/pdf/cds_2024-25/common-data-set-2024-2025-26jun2025.pdf
- central-washington-university | Central Washington University | Ellensburg, WA | www.cwu.edu | 2024-2025 | https://www.cwu.edu/about/offices/institutional-effectiveness/_documents/cwu_cds_2024-25.pdf
- christopher-newport-university | Christopher Newport University | Newport News, VA | cnu.edu | 2024-2025 | https://cnu.edu/institutional-research/_documents/commondataset/cds_2024-2025.pdf
- clark-university | Clark University | Worcester, MA | www.clarku.edu | 2024-2025 | https://www.clarku.edu/saair/wp-content/uploads/sites/95/Clark-CDS-2024-25.pdf
- college-of-charleston | College of Charleston | Charleston, SC | www.charleston.edu | 2024-2025 | https://charleston.edu/institutional-research/files/documents/common-data/cds2024_2025.pdf
- columbia-university-in-the-city-of-new-york | Columbia University in the City of New York | New York, NY | www.columbia.edu | 2024-2025 | https://opir.columbia.edu/sites/opir.columbia.edu/files/content/Common%20Data%20Set/2024-25_Columbia_College_and_Columbia_Engineering_CDS.pdf
- columbus-state-university | Columbus State University | Columbus, GA | www.columbusstate.edu | 2024-2025 | https://www.columbusstate.edu/institutional-research/_docs/common-data-set/cds-2024-2025.pdf
- cuny-bernard-m-baruch-college | CUNY Bernard M Baruch College | New York, NY | www.baruch.cuny.edu | 2024-2025 | https://ir.baruch.cuny.edu/wp-content/uploads/sites/23/2025/07/CDS-2024-2025-FINAL-Jun-12.pdf
- depaul-university | DePaul University | Chicago, IL | www.depaul.edu | 2024-2025 | https://irma.depaul.edu/cds/2024/2024CDS_C.pdf
- duquesne-university | Duquesne University | Pittsburgh, PA | www.duq.edu | 2024-2025 | https://www.duq.edu/documents/institutionalresearch/cds_2024-2025.pdf
- east-carolina-university | East Carolina University | Greenville, NC | www.ecu.edu | 2024-2025 | https://ipar.ecu.edu/wp-content/pv-uploads/sites/130/CDS_2024-2025_Redacted.pdf
- franklin-and-marshall-college | Franklin and Marshall College | Lancaster, PA | www.fandm.edu | 2024-2025 | https://www.fandm.edu/_resources/pdfs/IR_CDS%202024-25.pdf
- grinnell-college | Grinnell College | Grinnell, IA | www.grinnell.edu | 2024-2025 | https://www.grinnell.edu/sites/default/files/docs/2025-03/Grinnell-2024-2025-Common-Data-Set.pdf
- haverford-college | Haverford College | Haverford, PA | www.haverford.edu | 2024-2025 | https://www.haverford.edu/sites/default/files/Office/President/CDS_2024-2025.pdf
- illinois-institute-of-technology | Illinois Institute of Technology | Chicago, IL | www.iit.edu | 2024-2025 | https://www.iit.edu/sites/default/files/2026-11/full-common-data-set-2024_2025.pdf
- indiana-state-university | Indiana State University | Terre Haute, IN | indianastate.edu | 2024-2025 | https://indianastate.edu/sites/default/files/2025-03/CDS24_1.pdf
- indiana-university-bloomington | Indiana University-Bloomington | Bloomington, IN | bloomington.iu.edu | 2024-2025 | https://iuapps.iu.edu/cds/?p=index&i=home&section=C.%20First-Time,%20(Freshman)%20Admission&year=2024
- lamar-university | Lamar University | Beaumont, TX | www.lamar.edu | 2024-2025 | https://www.lamar.edu/data-analytics-reporting-analysis/_files/documents/2024-2025_common_data_set.pdf
- lewis-university | Lewis University | Romeoville, IL | www.lewisu.edu | 2024-2025 | https://www.lewisu.edu/welcome/offices/provost/oirp/pdf/Common%20Data%20Set_2024-25%2006-03-25.pdf
- louisiana-state-university-and-agricultural-and-mechanical-college | Louisiana State University and Agricultural & Mechanical College | Baton Rouge, LA | www.lsu.edu | 2024-2025 | https://www.lsu.edu/data/common-data-set/2024/3_2425_admissions.pdf
- marquette-university | Marquette University | Milwaukee, WI | www.marquette.edu | 2024-2025 | https://www.marquette.edu/academic-effectiveness/institutional-research-analysis/documents/cds-2024-2025_final.pdf
