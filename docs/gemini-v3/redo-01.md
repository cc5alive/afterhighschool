# Task: find MORE "What's special" facts for 15 US colleges

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. Each college page has a "What's special" section: about four short facts that set the school apart, each linked to its source. These are the most-searched schools on the site. Most already have one or two facts, listed under each school. Your job is to add new ones on **different topics**. Families act on these, so accuracy matters more than coverage.

## How to work

1. **Browse live.** Use Google Search and open the pages you cite. Don't answer from memory. If you can't browse, reply only: BROWSING UNAVAILABLE.
2. **Check these pages for each school** before giving up:
   - the financial aid or cost page (named tuition guarantees, no-loan policies, income cutoffs where families pay nothing)
   - the academic calendar and curriculum or general education page (calendar, required experiences, core)
   - the admissions page (guaranteed or direct admission, applying to a specific college, transfer pathways)
   - the housing or residential life page (residential colleges, housing guarantees, required on-campus years)
   - co-op, internship or experiential learning pages
3. **Copy, don't paraphrase, the quote.** Each quote must be copied character for character from the page text. We check every quote against the live page automatically, and facts whose quote isn't there are thrown out. Short quotes of one or two sentences match best.

## The most important rule

**Every detail in your fact must appear in your quotes.** That includes every number, dollar amount, income limit, year, eligibility condition and name. If a detail isn't in a quote, either add a second quote from the same or another page that contains it, or leave the detail out. Don't fill in anything from memory, even if you're sure it's true.

Bad: fact says "families under $75,000 pay nothing", but the quote only says "we meet 100% of need without loans."
Good: fact says "meets 100% of demonstrated need without loans", and the quote says exactly that.

## What makes a good fact

Specific, true of this school and not most similar schools, and useful to someone deciding whether to apply or whether they can afford it. The kinds that work best:
- **Cost:** a named tuition guarantee or promise with its income limit; meeting full need; replacing loans with grants; a tuition lock or freeze
- **Admissions:** guaranteed admission rules, applying directly to a college or major, a required interview, audition or portfolio for the whole school, a transfer guarantee
- **Calendar:** quarters, block plan, a January or May term everyone takes
- **Requirements every student completes:** co-op, internship, senior thesis or capstone, study abroad, service, a distinctive core curriculum with a name and a concrete structure
- **Structure:** residential colleges or houses, a rule that students live on campus for two or more years (a first-year-only rule is too common to count), a cross-registration consortium, open curriculum, no grades, a medical, law or other guaranteed-pathway program for undergrads
- **Identity with a concrete program:** HBCU, tribal college, women's college, work college, service academy, a land-grant extension mission students take part in

**Don't include:**
- Founding dates, history, firsts, famous alumni, rankings, campus size, sports or mascots
- Statewide or system-wide programs that aren't run by this school (state grants or scholarships, statewide tuition-free programs, regional exchange discounts like WUE or MSEP, system-wide transfer agreements)
- Credit-hour counts, minimum GPAs, program lengths, accreditation, mission or values statements
- Rules for a single major (one nursing program's prerequisites, one music audition)
- Generic offerings: honors college, study abroad, research opportunities, small classes, career services
- Marketing words: premier, renowned, world-class, nationally recognized, leading, vibrant, unique, innovative, robust, cutting-edge, best, famous. You can use "first," "only" or "largest" only when the quote says it.
- Anything that repeats or overlaps a fact the school already has (listed under it)

Write each fact in your own words: 1–2 plain sentences, 40–300 characters, sentence case. Each school says how many new facts to look for. Fewer is fine when nothing else qualifies; don't pad.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per school, in the order listed. Only include your NEW facts, not the ones already listed. No intro, no code fences, no notes after.

{"slug":"<slug exactly as listed>","researchedAt":"<today, YYYY-MM-DD>","facts":[{"text":"<fact>","sources":[{"title":"<page name>","url":"<exact https URL you opened>","quote":"<verbatim text from that page, 8–40 words>"}]}],"concerns":"<null or a short note>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. If you find nothing new for a school, still output its line with "facts":[] and say why in "concerns". If a school has closed, merged or stopped enrolling, say so in "concerns".

Do all 15 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools

### washington-state-university | Washington State University | Pullman, WA | wsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- WSU's Cougar Commitment covers tuition and mandatory fees for Washington residents from low- or middle-income families who receive the Washington College Grant or a Pell Grant.

### the-university-of-texas-at-el-paso | The University of Texas at El Paso | El Paso, TX | www.utep.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Paydirt Promise uses federal, state, and institutional grants and scholarships to cover tuition and fees for Texas residents with family income of $100,000 or less.

### temple-university | Temple University | Philadelphia, PA | www.temple.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Temple Promise covers full-time tuition and the mandatory university services fee for eligible students whose families have an adjusted gross income of $65,000 or less.

### james-madison-university | James Madison University | Harrisonburg, VA | www.jmu.edu/index.shtml
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- JMU's Centennial Scholars Program provides financial support to help cover primary attendance costs, including tuition and fees, housing, and a meal plan.

### virginia-commonwealth-university | Virginia Commonwealth University | Richmond, VA | www.vcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- VCU Honors College Guaranteed Admission Programs allow qualified students to enter professional health programs without competing through general admission later.

### university-of-oregon | University of Oregon | Eugene, OR | www.uoregon.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- PathwayOregon ensures that academically qualified, federal Pell Grant-eligible Oregonians have their tuition and fees paid through federal, state, and university funds.

### university-of-pittsburgh-pittsburgh-campus | University of Pittsburgh-Pittsburgh Campus | Pittsburgh, PA | www.pitt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pitt Pell Plus Program doubles any Federal Pell Grant awarded up to $7,395 for eligible undergraduate students across all five campuses.

### cuny-bernard-m-baruch-college | CUNY Bernard M Baruch College | New York, NY | www.baruch.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### utah-state-university | Utah State University | Logan, UT | www.usu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students selected for the Utah State Promise Scholarship get whatever tuition and student body fees their Pell Grants and other awards don't cover, for up to four years.

### the-university-of-arizona-global-campus | The University of Arizona Global Campus | Chandler, AZ | www.uagc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduate programs are structured so students take one course at a time in accelerated 5-week terms, while graduate courses run in 6-week terms.

### university-at-buffalo | University at Buffalo | Buffalo, NY | www.buffalo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under UB's Finish in 4 pledge, students who fulfill all requirements but cannot graduate in four years can complete needed courses free of tuition and comprehensive fees.

### east-carolina-university | East Carolina University | Greenville, NC | www.ecu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pirate Promise transfer program provides participating North Carolina community college students guaranteed admission to ECU upon completing an approved associate degree.

### university-of-connecticut | University of Connecticut | Storrs, CT | uconn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UConn's Special Program in Medicine links undergraduate study with four years of medical education, resulting in dual degrees from UConn: a BA/BS and an MD.

### stony-brook-university | Stony Brook University | Stony Brook, NY | www.stonybrook.edu
Find up to 3 new facts.
Already have: nothing yet.

### cuny-hunter-college | CUNY Hunter College | New York, NY | www.hunter.cuny.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Macaulay Honors College students at Hunter College who are New York State residents receive a tuition scholarship for up to four years of undergraduate study.
