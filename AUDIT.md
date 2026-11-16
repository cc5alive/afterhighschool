# Trust audit, November 15–16, 2026

What was checked, what was wrong, what is fixed, and what still needs a decision. Findings are ranked by how badly they could mislead a student.

- **Fixed on main:** commits `1d18086` (CDS data and pipeline) and `8859bd5` (one stale fact).
- **Waiting for review:** [pull request #1](https://github.com/cc5alive/afterhighschool/pull/1) (the tool's method, data years on pages, the methodology page, monthly fact recheck).

## How the checking was done

| Check | Coverage | Result |
| --- | --- | --- |
| Published CDS values against the school's own document | 303 schools whose document could be re-read on GitHub's servers (the `dump-cds` workflow), 4,979 values | Mapping errors listed under findings 1–6. Every C1 total was also recomputed from the gender rows. |
| Federal figures against same-year CDS | 42 schools with a 2024–25 CDS | 35 match the federal admit rate to within 0.2 points, so Scorecard's admissions data is the fall 2024 class and both pipelines agree where they should. The 5 that didn't match led to findings 2 and 3. |
| Which year each Scorecard number comes from | Every field the site shows, 8 schools (`probe-scorecard-years` workflow) | Finding 8. |
| The most-searched schools, row by row | Harvard, Stanford, Yale, Penn, MIT, Columbia, Duke, Michigan, plus the C1 rows of UCLA, Caltech, Florida and about 15 more. Princeton, UNC and NYU block GitHub's servers and were not re-read. | C1, C2, C9, C11 and C12 match the documents except where noted below. |
| "What's special" facts against their live sources | All 1,279 facts (`recheck-highlights` workflow) | 1,170 pass. 4 of the 15 number flags were then checked by hand: 3 correct, 1 stale. Finding 9. |
| The tool | Read the code, then drove six school pages and My list in headless Chrome | Findings 7 and 10. |

Not checked: the trades, apprenticeship, transfer and majors sections; net price and outcome figures against IPEDS (only their data year was established).

## Findings

### 1. High — Wrong applicant, admit and enrollment counts from one reader fallback (fixed)

When a document's total row is blank or laid out oddly, the reader adds up the men, women and unknown rows. That fallback had three bugs.

| School | Was | Document says | Cause |
| --- | --- | --- | --- |
| Florida A&M | 52,988 applied, 9,884 admitted | 26,494 and 4,942 | The document prints the total on the "unknown" row; it was added to men and women |
| UW–Stevens Point | 9,919 enrolled (school has 7,306 undergraduates) | 2,017 | A stray numbers-only row was added |
| UCLA | 138,587 applied, 12,820 admitted | 145,086 and 13,659 | The "unknown sex" row's label comes out in a shifted font and was skipped |
| RIT, Chapman, Belmont, Salem State | short by 2 to 38 | — | Same as UCLA |

**How widespread:** 7 of the 59 schools whose C1 comes from this fallback. **Fix:** reader corrected, replayed on the saved rows of 329 documents (only these values change), and locked in by `npm test`.

### 2. High — Boston College showed numbers from a different source than the one cited (fixed)

Gemini's read quoted a Boston College web page ("Applicants: 39,686"), not the 2024–25 CDS. Because the quote was found on that page, it overrode the reader's value from the actual CDS. The page showed a 14% admit rate "from the Common Data Set"; the CDS says 5,632 of 34,779, which is 16%. Enrolled (2,479 vs 2,394) and the SAT 25th percentile (1440 vs 1460) had the same problem. At Denison, Gemini's SAT median (1400) replaced the document's 1360.

**How widespread:** 2 schools had overrides. 7 more (East Carolina, San Diego State, Texas Tech, Buffalo, UCLA, UC Santa Cruz, Oklahoma) have 38 values Gemini read from a second file of the same year; UCLA's were checked and are in the cited file, the rest are unverified. **Fix:** Gemini can no longer replace one number in a C1 or percentile set the reader has whole, and can't contribute from a web page when the reader has the file. **Still open:** re-read those 6 schools so every value comes from the cited file.

### 3. High — Wrong or missing data years (fixed)

- Middlebury, Nebraska–Kearney, West Florida and West Texas A&M were labeled 2024–25. Their files are the 2025–26 reports (the documents say Fall 2025; `sources.json` carried a stale year).
- 13 schools showed no year at all. Each document says Fall 2025. Idaho's says Fall 2023.

**Fix:** years corrected in `sources.json` and the stored reads; the reader now falls back to the document's own "Fall 2025" wording when the link carries no year. **Still open:** CSU Northridge is labeled 2025–26 but its document says Fall 2024 throughout, and its admit rate doesn't match the federal fall 2024 figure either, so I couldn't tell which is stale. Southeastern Louisiana's year reads "2025". Both need a person to open the file.

### 4. High — Six schools showed a test-score share 100 times too large (fixed)

A share under 1% was treated as a fraction and multiplied by 100. Lindenwood showed 58% of first-years sending SAT scores; the document says 0.58%. Also CSU Fullerton (ACT 30%, really 0.3%), CSU San Marcos, UMass Amherst, West Chester and Virginia State. The practical harm: a range built on a handful of students looked like it described half the class.

**Fix:** percentages are rescaled as a group and never when the document printed a % sign or the reader had already converted the value. Shares under 1% now read "fewer than 1 in 100".

### 5. Medium — Numbers borrowed from the next row or the next question (fixed)

- **"100% came off the wait list."** Harvard, Case Western and Delaware left "number accepting a place" blank. Gemini's value was matched loosely and picked up the admitted count from the row below, so the page showed 75 admitted of 75. Pace would have shown 1,120%.
- **"Top 10% of class: 5%" at Kenyon, 1% at Virginia Tech.** In the 2025–26 Excel template a blank class-rank row sits beside the next question's answer; the reader took the share of students with a 3.00–3.24 GPA. Also CSU San Marcos, Lindenwood, UW–Green Bay.
- **"Wait-listed students admitted: 4"** at six schools was the number of high school English units required.

**Fix:** the reader stops at another question's answer code; the loose match can't cross into the next row; the build requires offered ≥ accepted ≥ admitted.

### 6. Medium — Values that are in the document but can't be right (removed)

- Morehouse 2023–24 lists 1,322 binding early-decision admits against 682 enrolled. Almost certainly early action in the wrong row.
- West Virginia's 2024–25 report gives a 77% admit rate; the federal figure for the same class is 89%, and the report's own gender rows give 85%.
- Governors State's SAT "middle 50%" was 870–870.

**Fix:** new build checks for each. Other schools' documents disagree with themselves in smaller ways (Purdue Fort Wayne prints 8,895 applicants beside rows that add to 9,895; Cal State LA is similar). The site shows the printed total.

### 7. Medium — The tool overstated weak comparisons and understated the long odds at the top (pull request #1)

"Where you'd stand" already avoids a percent chance and doesn't pretend the 25th and 75th percentiles are a full distribution. Its problems were at the edges:

- **Weighted GPAs.** 20 schools report an average GPA above 4.0, which only a weighted scale produces. At UNC (average 4.47) a student with an unweighted 3.9 was told 95% of first-years had a higher GPA. The only caveat was a generic "read this loosely".
- **Schools under 10%.** A 1600 at Harvard got a green "top quarter" card, and the only brake was one sentence. Harvard marks every factor "Considered", so the sentence about essays and recommendations mattering never appeared.
- **Test-optional ranges.** The "only X% sent scores" warning needs the share, and 103 of 259 SAT ranges don't have it (see finding 11).
- **Blind spots.** Nothing said the tool can't see major, residency or hooks. UNC, UT Austin and Georgia Tech admit residents and non-residents at very different rates.

**Fix in the PR:** a published Reach / Target / Likely table with "Reach for everyone" under 15%, weighted-GPA detection, a note where the submit share is unknown, and an always-on list of what it can't see. **Decision:** the 15% line and the bands are judgment calls.

### 8. Medium — Federal numbers carried no year, and one is ten years old (pull request #1)

The Scorecard API's "latest" mixes data years. Measured Nov 15:

| Number | Data year |
| --- | --- |
| Admit rate, test policy, SAT/ACT, undergraduates | Fall 2024 |
| Tuition, cost of attendance | 2025–26 (Harvard's $64,796 matches its 2025–26 tuition and fees) |
| Net price, graduation rate, Pell share | Scorecard's 2025–26 data |
| Median debt | 2024–25 data |
| Median earnings | 2022–23 data |
| First-generation share | 2016–17 data |

Two consequences. A page with a CDS showed two admit rates from two years with no label on the federal one; they differ by more than 5 points at 51 schools (DePaul 76% and 88%). And the first-generation share, shown on 1,667 pages, is from 2016–17.

**Fix in the PR:** each federal number is labeled, and the admit rate points to the school's newer figure when they differ. **Decision:** keep the first-generation share with its date, or drop it. **Still open:** I couldn't confirm what period Scorecard's "2025–26 data" means for net price and graduation rate, so the pages say "Scorecard's 2025–26 data" and no more. Re-run the probe whenever Scorecard publishes.

### 9. Medium — "What's special" facts were checked once and never again (one fixed; process in pull request #1)

No rankings, no invented programs, and 98% of sources are the school's own site. The risk is time, not fabrication:

- **Stale within days.** Texas A&M–Kingsville's Javelina Promise fact said $65,000. The university raised the limit to $100,000 for students entering fall 2027 on Nov 5, the day the fact was reviewed. Fixed.
- **5 dead links:** Dartmouth (D-Plan PDF), Scripps (cross-registration), Talladega, UT Austin (the TEA automatic-admission PDF), UCLA (transfer page). The facts are probably still true; the links 404.
- **Source doesn't carry the fact:** Bethune-Cookman (the 1904 founding story isn't on the cited page) and Harris-Stowe (the cited page changed).
- **61 sources couldn't be loaded** by a script (bot blocks, timeouts). They need a browser.
- 174 facts state a dollar amount. Those are the ones that will go stale.

**Fix in the PR:** the recheck runs monthly and commits a report; published facts keep the sentence they were checked against. **Still open:** the 5 dead links, the 2 mismatched sources, and a browser pass on the 61.

### 10. Medium — The methodology page said things that weren't true (pull request #1)

- "Every number on our college pages comes from … College Scorecard." Not since CDS values, hand-checked test policies and facts went live.
- "We write each one ourselves" about the facts. Gemini and Claude find them; a script and a review check them.
- The CDS checks it listed were incomplete.

**Decision:** the PR names the AI tools. That's the accurate description; whether to say it that way is yours.

### 11. Low — The reader misses values that are in the documents (not fixed)

Nothing wrong is shown, but the pages are thinner than they should be, and the gaps push the pipeline onto Gemini's read:

- **Stanford, Yale and Michigan have no C1** although their documents do (Stanford: 60,646 applied, 2,302 admitted, 1,839 enrolled). Their PDFs split "first-time" into separate cells. Florida's C1 (90,523 / 18,403) is misread as a residency row and dropped. 47 schools with a CDS have no C1.
- **The share sending test scores is never read by the reader**, because the row is labeled "Submitting SAT Scores" and the pattern expects "Percent submitting". The reader gets the share at 28 schools; 151 come from Gemini alone, and 103 SAT ranges have none.
- **Wait-list "offered" and "accepted"** have the same problem ("waiting list" vs "wait list").
- Harvard and Penn publish SAT section scores but no composite, so their pages fall back to federal fall 2024 sections.
- Northeastern's ACT share reads 6%; its page now says 8%.

**Fix:** widen the label patterns, normalize split cells, bump `READER_VERSION`, and compare before and after with `scripts/replay-cds.mjs` (in the PR). I held this back because it re-reads all 332 schools.

### 12. Low — Things to know, no action taken

- **Test policy.** 30 schools are hand-checked. The rest show the federal fall 2024 answer. 469 schools are labeled test-blind; that is what they reported, but 20 of them with a CDS show real score ranges (Wyoming: 67% sent ACT scores). Put those 20 at the front of the Gemini batch.
- **Columbia's CDS** covers Columbia College and Engineering only; the federal figures cover the whole university.
- **17 schools are on a 2023–24 CDS**, two classes old.
- **Compare and directory pages** show the federal admit rate with no year.
- **The Scorecard pull** doesn't record data years itself. The probe is a separate manual run.

## Calls I made without asking

1. Pushed data corrections and their pipeline guards straight to main, since each was checked against the school's document. The reader's coverage upgrade (finding 11) was held back.
2. Added three debug workflows to main (`probe-scorecard-years`, `recheck-highlights`, and I ran the existing `dump-cds` on every school). They write to debug branches and change nothing on the site.
3. Where a document contradicts itself, the value is removed, not corrected.
4. Kept Gemini's values from a same-year sibling file instead of dropping all 38.
5. Set "Reach for everyone" at 15%, not 10%.
6. Labeled the first-generation share instead of removing it.

## For next time

- `npm test` runs 19 tests (6 on rows from real CDS documents, 13 on the outlook rule; the 13 land with the PR).
- To verify CDS values again: run "Dump CDS text (debug)" with every slug, fetch the `cds-debug` branch, and compare. The whole set takes about six minutes.
