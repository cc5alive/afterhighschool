# Task: find the newest Common Data Set file for 25 US colleges (batch 4 of 5)

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

- university-of-kansas | University of Kansas | Lawrence, KS | ku.edu | 2024-2025 | https://aire.ku.edu/sites/aire/files/files/CDS/2024-2025/C.pdf
- university-of-louisville | University of Louisville | Louisville, KY | www.louisville.edu | 2024-2025 | https://louisville.widen.net/content/s7kzlpdmo1/original/Common-Data-Set-2024-2025-final.pdf?u=nfnp1l&download=true
- university-of-massachusetts-dartmouth | University of Massachusetts-Dartmouth | North Dartmouth, MA | www.umassd.edu | 2024-2025 | https://www.umassd.edu/media/umassdartmouth/institutional-research/CDS-2024-2025-20250602.pdf
- university-of-michigan-dearborn | University of Michigan-Dearborn | Dearborn, MI | umdearborn.edu | 2024-2025 | https://umdearborn.edu/sites/default/files/unmanaged/pdf/ire/cds-2024-2025.pdf
- university-of-missouri-kansas-city | University of Missouri-Kansas City | Kansas City, MO | www.umkc.edu | 2024-2025 | https://www.umkc.edu/data/docs/cds_2024-2025.pdf
- university-of-nebraska-at-kearney | University of Nebraska at Kearney | Kearney, NE | www.unk.edu | 2024-2025 | https://www.unk.edu/factbook/_files/cds-2025-26-pdf_final.pdf
- university-of-richmond | University of Richmond | University of Richmond, VA | www.richmond.edu | 2024-2025 | https://ifx.richmond.edu/pdfs/CDS2024-25.pdf
- university-of-south-alabama | University of South Alabama | Mobile, AL | www.southalabama.edu | 2024-2025 | https://www.southalabama.edu/departments/institutionalresearch/resources/usa-cds-2024-2025.pdf
- university-of-southern-california | University of Southern California | Los Angeles, CA | www.usc.edu | 2024-2025 | https://oir.usc.edu/wp-content/uploads/sites/3/2025/10/CDS_2024-2025_FINAL-3.pdf
- university-of-southern-mississippi | University of Southern Mississippi | Hattiesburg, MS | www.usm.edu | 2024-2025 | https://www.usm.edu/institutional-research/cds_2024_2025_final.pdf
- university-of-the-incarnate-word | University of the Incarnate Word | San Antonio, TX | www.uiw.edu | 2024-2025 | https://my.uiw.edu/ir/_docs/cds-24-25.pdf
- university-of-toledo | University of Toledo | Toledo, OH | www.utoledo.edu | 2024-2025 | https://www.utoledo.edu/offices/institutional-research/report-library/common-data-set/docs/cds-2024-2025.pdf
- university-of-west-florida | University of West Florida | Pensacola, FL | uwf.edu | 2024-2025 | https://uwf.edu/media/university-of-west-florida/academic-affairs/departments/institutional-research/docs/cds/CDS_2025_2026.pdf
- university-of-wisconsin-parkside | University of Wisconsin-Parkside | Kenosha, WI | www.uwp.edu | 2024-2025 | https://www.uwp.edu/wp-content/uploads/2026/07/CDS_2024-25-UW-Parkside.pdf
- virginia-commonwealth-university | Virginia Commonwealth University | Richmond, VA | www.vcu.edu | 2024-2025 | https://irds.vcu.edu/media/decision-support/pdf/commondatasets/CommonDataSet2024-25.pdf
- west-texas-a-and-m-university | West Texas A & M University | Canyon, TX | www.wtamu.edu | 2024-2025 | https://www.wtamu.edu/_files/docs/academics/Institutional%20Research/CDS.pdf
- west-virginia-university | West Virginia University | Morgantown, WV | www.wvu.edu | 2024-2025 | https://dataoffice.wvu.edu/files/d/d0809710-b583-4b08-8214-e297d97326d5/cds-2024-2025-wvu-final.pdf
- western-illinois-university | Western Illinois University | Macomb, IL | www.wiu.edu | 2024-2025 | https://drive.google.com/file/d/1UpTMo05R_z14nyeZVITy8qUIpxt_X48p/view?usp=drive_link
- southeastern-louisiana-university | Southeastern Louisiana University | Hammond, LA | www.southeastern.edu | 2025 | https://www.southeastern.edu/wp-content/uploads/institutional-research/CDS-2025-C-First-time-First-year-Admissions.pdf
- auburn-university | Auburn University | Auburn, AL | www.auburn.edu | unknown | https://ir.auburn.edu/common-data-set/2025/section-c.php
- babson-college | Babson College | Wellesley, MA | www.babson.edu | unknown | https://www.babson.edu/media/babson/assets/rankings/babson-college-common-data-set.pdf
- binghamton-university | Binghamton University | Vestal, NY | www.binghamton.edu | unknown | https://www.binghamton.edu/offices/oir/institutional-data/cds2025.pdf
- boston-university | Boston University | Boston, MA | www.bu.edu | unknown | https://www.bu.edu/asir/files/2025/03/cds-2025-c.pdf
- california-state-university-long-beach | California State University-Long Beach | Long Beach, CA | www.csulb.edu | unknown | https://www.csulb.edu/sites/default/files/2026/documents/CDS%202025%20-%202026%20%28PDF%29_0.pdf
- case-western-reserve-university | Case Western Reserve University | Cleveland, OH | www.case.edu | unknown | https://case.edu/ir/sites/default/files/2026-02/CDS%202025-26%20Adjusted%20Final.pdf
