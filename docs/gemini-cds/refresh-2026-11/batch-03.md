# Task: find the newest Common Data Set file for 25 US colleges (batch 3 of 5)

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

- maryville-university-of-saint-louis | Maryville University of Saint Louis | Saint Louis, MO | www.maryville.edu | 2024-2025 | https://www.maryville.edu/administrative-offices/wp-content/uploads/sites/28/2025/07/CDS_2024-2025_Final.pdf
- mercer-university | Mercer University | Macon, GA | www.mercer.edu | 2024-2025 | https://oie.mercer.edu/www/mu-oie/research/upload/CDS-2024-2025_complete-2.pdf
- metropolitan-state-university-of-denver | Metropolitan State University of Denver | Denver, CO | www.msudenver.edu | 2024-2025 | https://www.msudenver.edu/wp-content/uploads/2026/06/CDS_2024-2025_Updated_06-29-26_jjb3.pdf
- miami-university-oxford | Miami University-Oxford | Oxford, OH | miamioh.edu | 2024-2025 | https://miamioh.edu/analytics-institutional-research/_documents/cds/cds2024-25.xlsx
- middlebury-college | Middlebury College | Middlebury, VT | www.middlebury.edu/college | 2024-2025 | https://www.middlebury.edu/sites/default/files/2026-06/Fall%202025%20CDS%20FINAL.pdf
- new-jersey-institute-of-technology | New Jersey Institute of Technology | Newark, NJ | www.njit.edu | 2024-2025 | https://www.njit.edu/oie/sites/njit.edu.oie/files/CDS_2024-2025_v12.xlsx
- north-carolina-a-and-t-state-university | North Carolina A & T State University | Greensboro, NC | www.ncat.edu | 2024-2025 | https://www.ncat.edu/provost/ospie/cds_2024-2025_-final-20251201.pdf
- oakland-university | Oakland University | Rochester Hills, MI | www.oakland.edu | 2024-2025 | https://www.oakland.edu/media/Oakland/Assets/OIRA/files/Publications/CDS_2024-2025.pdf
- salem-state-university | Salem State University | Salem, MA | www.salemstate.edu | 2024-2025 | https://www.salemstate.edu/sites/default/files/pdfs/CDS-2024-2025.pdf
- skidmore-college | Skidmore College | Saratoga Springs, NY | www.skidmore.edu | 2024-2025 | https://www.skidmore.edu/ir/facts/common/CDS_2024-25.pdf
- slippery-rock-university-of-pennsylvania | Slippery Rock University of Pennsylvania | Slippery Rock, PA | www.sru.edu | 2024-2025 | https://www.sru.edu/documents/offices/analytics-decision-support/whitepapers/CDS_2024-2025_SRU.pdf
- smith-college | Smith College | Northampton, MA | www.smith.edu | 2024-2025 | https://www1.smith.edu/sites/default/files/2025-02/2024-2025-CDS-Smith-PUB19Dec24%20v2.pdf
- state-university-of-new-york-at-oswego | State University of New York at Oswego | Oswego, NY | www.oswego.edu | 2024-2025 | https://drive.google.com/file/d/1e7WOVkoFxwtWSWOeS89YHXeFULWx4NuP/view?usp=drive_link
- texas-a-and-m-university-kingsville | Texas A&M University-Kingsville | Kingsville, TX | www.tamuk.edu | 2024-2025 | https://www.tamuk.edu/pes/_files_oir/CDS_reports/2024-2025_TAMUK_CDS.pdf
- texas-woman-s-university | Texas Woman's University | Denton, TX | www.twu.edu | 2024-2025 | https://twu.edu/media/documents/irdm/CDS_2024-2025_v2.pdf
- the-university-of-texas-at-dallas | The University of Texas at Dallas | Richardson, TX | www.utdallas.edu | 2024-2025 | https://dox.utdallas.edu/report44675
- the-university-of-texas-at-san-antonio | The University of Texas at San Antonio | San Antonio, TX | www.utsa.edu | 2024-2025 | https://www.utsa.edu/ir/docs/resources/commonDataSet/CDS_2024-2025.xlsx
- the-university-of-texas-at-tyler | The University of Texas at Tyler | Tyler, TX | www.uttyler.edu | 2024-2025 | https://www.uttyler.edu/offices/information-analysis/files/cds-2024-2025.pdf
- united-states-military-academy | United States Military Academy | West  Point, NY | www.westpoint.edu | 2024-2025 | https://s3.amazonaws.com/usma-media/inline-images/about/g5/G5OIR_CDS_2024-2025.pdf
- university-of-alabama-at-birmingham | University of Alabama at Birmingham | Birmingham, AL | www.uab.edu | 2024-2025 | https://www.uab.edu/institutionaleffectiveness/images/documents/cds/CDS-2024-25.pdf
- university-of-central-missouri | University of Central Missouri | Warrensburg, MO | www.ucmo.edu | 2024-2025 | https://www.ucmo.edu/offices/university-analytics-and-institutional-research/common-data-set/common-data-set-2024-2025.pdf
- university-of-colorado-denver-anschutz-medical-campus | University of Colorado Denver/Anschutz Medical Campus | Denver, CO | www.ucdenver.edu | 2024-2025 | https://www.ucdenver.edu/docs/librariesprovider192/default-document-library/cds-24-25.pdf?sfvrsn=fe11edb4_1
- university-of-connecticut | University of Connecticut | Storrs, CT | uconn.edu | 2024-2025 | https://bpir.media.uconn.edu/wp-content/uploads/sites/3452/2025/07/UConn_CDS_2024_2025.pdf
- university-of-delaware | University of Delaware | Newark, DE | www.udel.edu | 2024-2025 | https://bpb-us-w2.wpmucdn.com/sites.udel.edu/dist/e/2019/files/2025/07/CDS2425_UDelaware.pdf
- university-of-florida | University of Florida | Gainesville, FL | www.ufl.edu | 2024-2025 | https://data-apps.ir.aa.ufl.edu/public/cds/CDS_2024-2025_UFMAIN_Post_v3.pdf
