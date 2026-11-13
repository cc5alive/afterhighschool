# Task: find the newest Common Data Set file for 25 US colleges (batch 1 of 5)

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

- bentley-university | Bentley University | Waltham, MA | www.bentley.edu | 2023-2024 | https://bentleydownloads.s3.amazonaws.com/general/2023-24+Common+Data+Set+(1).pdf
- california-state-university-chico | California State University-Chico | Chico, CA | www.csuchico.edu | 2023-2024 | https://www.csuchico.edu/ir/_assets/documents/cds-2024.pdf
- college-of-the-holy-cross | College of the Holy Cross | Worcester, MA | www.holycross.edu | 2023-2024 | https://www.holycross.edu/document/common-data-set-20232024
- cuny-john-jay-college-of-criminal-justice | CUNY John Jay College of Criminal Justice | New York, NY | www.jjay.cuny.edu | 2023-2024 | https://www.jjay.cuny.edu/sites/default/files/2024-02/CDS2023_2024.WORK-FILE.pdf
- embry-riddle-aeronautical-university-daytona-beach | Embry-Riddle Aeronautical University-Daytona Beach | Daytona Beach, FL | daytonabeach.erau.edu | 2023-2024 | https://erau.edu/institutional-research/common-data-set/2023-2024-daytona-beach
- florida-agricultural-and-mechanical-university | Florida Agricultural and Mechanical University | Tallahassee, FL | www.famu.edu | 2023-2024 | https://www.famu.edu/administration/strategic-planning-analysis-and-institutional-effectiveness/institutional-research/surveys/pdf/cds/CDS_2023-2024.pdf
- lincoln-university-mo | Lincoln University | Jefferson City, MO | www.lincolnu.edu | 2023-2024 | https://www.lincolnu.edu/about-lincoln/oira/common-data-set-2023-2024.pdf
- morehouse-college | Morehouse College | Atlanta, GA | www.morehouse.edu | 2023-2024 | https://morehouse.edu/hubfs/DIRE/First-Time%2C%20First-Year%20(Freshman)%20Admission.pdf
- northwestern-state-university-of-louisiana | Northwestern State University of Louisiana | Natchitoches, LA | www.nsula.edu | 2023-2024 | https://dps.apps.nsula.edu/view/13318/CDS_UNL2_2023_2024.pdf
- pace-university | Pace University | New York, NY | www.pace.edu | 2023-2024 | https://www.pace.edu/sites/default/files/2024-04/university-wide-common-data-set-2023-2024.pdf
- portland-state-university | Portland State University | Portland, OR | www.pdx.edu | 2023-2024 | https://www.pdx.edu/research-planning/sites/researchplanning.web.wdt.pdx.edu/files/2024-05/CDS_2023-2024%20%28Updated%205-8-24%20AM%29.pdf
- pratt-institute-main | Pratt Institute-Main | Brooklyn, NY | www.pratt.edu | 2023-2024 | https://www.pratt.edu/wp-content/uploads/2024/04/Pratt-Institute-Commom-Data-Set-2023-2024.pdf
- quinnipiac-university | Quinnipiac University | Hamden, CT | www.qu.edu | 2023-2024 | https://www.qu.edu/499cca/globalassets/global/media/qu/documents/about/institutional-research/cds_2023-2024_quinnipiac.pdf
- rutgers-university-newark | Rutgers University-Newark | Newark, NJ | www.newark.rutgers.edu | 2023-2024 | https://oirap.rutgers.edu/CDS/2023/Newark%20CDS_2023-2024_final_V1.pdf
- saint-joseph-s-university-philadelphia | Saint Joseph's University - Philadelphia | Philadelphia, PA | www.sju.edu | 2023-2024 | https://drive.google.com/file/d/1zzaglVa3DeFriuYB0Aq-xlD8pyRM7XUc/view
- suny-brockport | SUNY Brockport | Brockport, NY | www.brockport.edu | 2023-2024 | https://www.brockport.edu/live/files/7692-common-data-set-2023-2024
- suny-college-at-geneseo | SUNY College at Geneseo | Geneseo, NY | www.geneseo.edu | 2023-2024 | https://www.geneseo.edu/wp-content/uploads/2024/03/CDS_2023-2024-C_0.pdf
- tennessee-technological-university | Tennessee Technological University | Cookeville, TN | www.tntech.edu | 2023-2024 | https://www.tntech.edu/iare/pdf/institutional_research/CDS_2023_2024.pdf
- university-of-louisiana-at-lafayette | University of Louisiana at Lafayette | Lafayette, LA | www.louisiana.edu | 2023-2024 | https://getdata.louisiana.edu/sites/instres/files/UL_CDS_2023-2024.pdf
- university-of-massachusetts-lowell | University of Massachusetts-Lowell | Lowell, MA | www.uml.edu | 2023-2024 | https://www.uml.edu/docs/CDS_2023-2024_UMass_Lowell_%284-12-24%29_tcm18-383430.pdf
- university-of-miami | University of Miami | Coral Gables, FL | www.miami.edu | 2023-2024 | https://irsa.miami.edu/facts-and-information/common-data-set/cds2324.pdf
- university-of-nevada-las-vegas | University of Nevada-Las Vegas | Las Vegas, NV | www.unlv.edu | 2023-2024 | https://it.unlv.edu/sites/default/files/assets/ir/UNLV_common_dataset_2023-2024.pdf
- university-of-northern-colorado | University of Northern Colorado | Greeley, CO | www.unco.edu | 2023-2024 | https://www.unco.edu/app/uploads/2025/10/UNC-Common-Data-Set-2023-24.pdf
- university-of-northern-iowa | University of Northern Iowa | Cedar Falls, IA | www.uni.edu | 2023-2024 | https://ie.uni.edu/sites/default/files/inline-uploads/cds-2023-24-final_updated2.pdf
- university-of-wisconsin-green-bay | University of Wisconsin-Green Bay | Green Bay, WI | www.uwgb.edu | 2023-2024 | https://www.uwgb.edu/getmedia/9d42cfa3-87d3-4494-90de-19d822c854a9/CDS_2023_2024.pdf
