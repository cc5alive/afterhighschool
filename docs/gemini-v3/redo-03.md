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

### university-of-california-santa-barbara | University of California-Santa Barbara | Santa Barbara, CA | www.ucsb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- In UCSB's College of Creative Studies, students choose one of nine majors when they apply, from art and biology to math, physics, and writing and literature.

### colgate-university | Colgate University | Hamilton, NY | www.colgate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students from families earning $175,000 or less generally attend Colgate tuition-free.

### university-of-washington-seattle-campus | University of Washington-Seattle Campus | Seattle, WA | www.washington.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Husky Promise covers full tuition and standard fees for Washington residents who are eligible for a Pell Grant (undocumented Washington residents can qualify too). There's no separate application; file the FAFSA or WASFA by Feb. 1.

### pomona-college | Pomona College | Claremont, CA | www.pomona.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Pomona students can take classes at any of the undergraduate Claremont Colleges, which together offer more than 2,700 courses.
- Students receiving financial aid at Pomona receive financial aid packages with no loans for eight semesters of enrollment.

### university-of-south-florida | University of South Florida | Tampa, FL | www.usf.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through FUSE, students at eight partner Florida colleges are guaranteed admission into specific USF majors if they finish an associate degree in under three years with at least a 2.0 GPA.

### clemson-university | Clemson University | Clemson, SC | www.clemson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Clemson University students enrolled in the Cooperative Education Program do not pay tuition while on rotation with their company.

### wesleyan-university | Wesleyan University | Middletown, CT | www.wesleyan.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Wesleyan University does not include loans in undergraduate financial aid packages, covering 100% of remaining demonstrated need across tuition, housing, books, supplies, and personal expenses.
- Wesleyan University features an open curriculum where General Education Expectations provide a framework for exploration instead of a rigid set of requirements.

### the-university-of-tennessee-knoxville | The University of Tennessee-Knoxville | Knoxville, TN | www.utk.edu
Find up to 3 new facts.
Already have: nothing yet.

### arizona-state-university-campus-immersion | Arizona State University Campus Immersion | Tempe, AZ | www.asu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- ASU's charter says it measures success "not by whom it excludes, but by whom it includes and how they succeed." That's unusual for a major research university.
- Barrett, The Honors College, gives students a small residential college inside a very large research university. It serves students on all four ASU campuses and online.

### wellesley-college | Wellesley College | Wellesley, MA | www.wellesley.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Wellesley students can cross-register for classes at the Massachusetts Institute of Technology, Babson College, Brandeis University, and Olin College of Engineering, with access to dual-degree engineering programs.

### college-of-the-holy-cross | College of the Holy Cross | Worcester, MA | www.holycross.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-a-and-m-university-college-station | Texas A&M University-College Station | College Station, TX | www.tamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Texas students who graduate in the top 10% of their high school class are admitted automatically. Out-of-state applicants don't qualify and are reviewed holistically.

### old-dominion-university | Old Dominion University | Norfolk, VA | www.odu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Guaranteed Admission Agreement, Virginia Community College System students graduating with a transfer-oriented associate degree and a 2.5 GPA earn guaranteed admission to ODU.

### west-virginia-university | West Virginia University | Morgantown, WV | www.wvu.edu
Find up to 3 new facts.
Already have: nothing yet.

### mississippi-christian-university | Mississippi Christian University | Clinton, MS | www.mc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Mississippi Christian University is the oldest institution of higher learning in Mississippi and was the first co-educational institution in the United States to grant a degree to a woman.
