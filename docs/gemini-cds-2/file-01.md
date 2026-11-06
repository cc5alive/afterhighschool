# Task: copy Common Data Set numbers for 10 US colleges (file 1 of 30)

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. For each college below, find its most recent **Common Data Set (CDS)** and copy specific numbers out of it. We check every number against the document automatically, and anything that doesn't match is thrown out, so copy exactly and never estimate.

## How to work

1. **Browse live.** Search for "<college name> Common Data Set" and open the school's own copy, usually on its institutional research or "facts" page. If you can't browse, reply only: BROWSING UNAVAILABLE.
2. **Use the newest year available**, ideally 2025-2026. If that isn't posted, use 2024-2025. Don't use anything older than 2023-2024. Put the year in "cdsYear".
3. **Link the document itself**, meaning the PDF, Excel file or HTML page that holds the CDS tables, not the landing page that links to it. It must be on the school's own website.
4. **Copy, never compute.** Every value must be printed in the document. If a cell is blank, says N/A or isn't reported, leave that key out. Don't add numbers together or work out percentages.

## What to copy (use these exact keys)

For each key, give the value and a **quote**: the row's label as printed in the document, followed by the number as printed. For example: "Percent who had GPA of 4.0 24.50%". Keep the quote to that one row.

**C1 (first-year totals; use the "Total" lines, not the men and women lines):** applied_total, admitted_total, enrolled_total

**C2 (wait list):** waitlist_offered (qualified applicants offered a place), waitlist_accepted (accepting a place), waitlist_admitted (wait-listed students admitted)

**C9 (enrolled first-years' test scores):** sat_submit_pct, act_submit_pct, sat_p25, sat_p50, sat_p75 (SAT Composite), act_p25, act_p50, act_p75 (ACT Composite)

**C10 (class rank):** rank_top10_pct (top tenth), rank_top25_pct (top quarter), rank_submit_pct (percent who submitted class rank)

**C11 (GPA of enrolled first-years, percentages):** gpa_400_pct (GPA of 4.0), gpa_375_pct (3.75–3.99), gpa_350_pct (3.50–3.74), gpa_325_pct (3.25–3.49), gpa_300_pct (3.00–3.24), gpa_250_pct (2.50–2.99), gpa_200_pct (2.0–2.49), gpa_100_pct (1.0–1.99), gpa_below1_pct (below 1.0)

**C12:** gpa_average (average high school GPA), gpa_submit_pct (percent who submitted GPA)

**C21 (early decision):** ed_offered ("yes" or "no"), ed_applied (early decision applications received), ed_admitted (applicants admitted under early decision)

**C22 (early action):** ea_offered ("yes" or "no"), ea_applied, ea_admitted (only if the document reports them)

**C18 (deferred admission):** deferral_allowed ("yes" or "no": can admitted students postpone enrolling?), deferral_max (the maximum period of postponement, in the document's words, only if deferral_allowed is "yes")

**D2 (transfer students, use the "Total" row):** transfer_applied, transfer_admitted, transfer_enrolled

**C7 (how much each factor counts in first-year admission):** for each row of the C7 grid, give the column that is checked: "Very Important", "Important", "Considered" or "Not Considered". The quote is just the row label as printed. Keys: factor_rigor (Rigor of secondary school record), factor_class_rank, factor_gpa (Academic GPA), factor_test_scores, factor_essay, factor_recommendations, factor_interview, factor_extracurriculars, factor_talent (Talent/ability), factor_character (Character/personal qualities), factor_first_generation, factor_alumni (Alumni/ae relation), factor_geography (Geographical residence), factor_state_residency, factor_religion (Religious affiliation/commitment), factor_volunteer, factor_work (Work experience), factor_interest (Level of applicant's interest)

Values: write numbers without commas or % signs (4213, not "4,213"; 24.5, not "24.50%"). Keep the commas and % signs as printed inside the quote.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per college, in the order listed. No intro, no code fences, no notes after.

{"slug":"<slug exactly as listed>","researchedAt":"<today, YYYY-MM-DD>","cdsYear":"2025-2026","source":{"title":"<document title>","url":"<direct https link to the CDS document>"},"values":{"applied_total":{"value":61220,"quote":"Total first-time, first-year (degree-seeking) who applied 61,220"},"factor_essay":{"value":"Important","quote":"Application Essay"}},"concerns":null}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. If you can't find a CDS from 2023-2024 or later on the school's own site, still output its line with "source":null, "values":{} and say why in "concerns".

Do all 10 colleges. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next college.

## Colleges

- college-of-the-ozarks | College of the Ozarks | Point Lookout, MO | www.cofo.edu
- the-university-of-texas-at-arlington | The University of Texas at Arlington | Arlington, TX | www.uta.edu
- the-university-of-texas-rio-grande-valley | The University of Texas Rio Grande Valley | Edinburg, TX | www.utrgv.edu
- georgia-state-university | Georgia State University | Atlanta, GA | www.gsu.edu
- the-university-of-tampa | The University of Tampa | Tampa, FL | www.ut.edu
- berea-college | Berea College | Berea, KY | www.berea.edu
- trinity-university | Trinity University | San Antonio, TX | new.trinity.edu
- southern-university-and-a-and-m-college | Southern University and A & M College | Baton Rouge, LA | www.subr.edu
- mississippi-christian-university | Mississippi Christian University | Clinton, MS | www.mc.edu
- cuny-hunter-college | CUNY Hunter College | New York, NY | www.hunter.cuny.edu
