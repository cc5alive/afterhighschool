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

### denison-university | Denison University | Granville, OH | www.denison.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under The Denison Commitment, families with a total family income of $100,000 or less pay $0 toward tuition.
- Denison meets 100% of demonstrated financial need for all admitted students, including international students.

### college-of-the-ozarks | College of the Ozarks | Point Lookout, MO | www.cofo.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Every student works on campus 15 hours a week, plus two 40-hour work weeks each school year.
- The college doesn't participate in federal, state or private student loan programs.

### haverford-college | Haverford College | Haverford, PA | www.haverford.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Haverford's student-administered Honor Code, all exams are self-scheduled, and every senior must complete a senior thesis to graduate.

### ohio-state-university-main-campus | Ohio State University-Main Campus | Columbus, OH | www.osu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Ohio residents who qualify for a Pell Grant and show significant need get aid covering full tuition and mandatory fees, on any Ohio State campus. There's no separate application; eligibility comes from the FAFSA, so file by the priority deadline.
- Second-year students can join STEP: a small group that meets weekly with a faculty mentor, plus a fellowship of up to $2,000 for a project of their own.

### grinnell-college | Grinnell College | Grinnell, IA | www.grinnell.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Grinnell College has no general education requirements or core curriculum, requiring only the First-Year Tutorial and First-Year Experience courses.

### purdue-university-main-campus | Purdue University-Main Campus | West Lafayette, IN | www.purdue.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Base tuition has been frozen for 14 years in a row, through 2026–27, and Indiana residents pay under $10,000 a year in base tuition and fees.
- Purdue expects applicants to send SAT, ACT or CLT scores, a policy it brought back for students entering in fall 2024. Applying without one is allowed only in exceptional cases: in 2026, 98.3% of admitted students had a test score.

### vassar-college | Vassar College | Poughkeepsie, NY | www.vassar.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Vassar's open curriculum has no core classes or distribution requirements, allowing students to take the courses that most interest them.

### university-of-arizona | University of Arizona | Tucson, AZ | www.arizona.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Guaranteed Tuition Program, your tuition rate stays the same for eight consecutive fall and spring semesters.

### pennsylvania-state-university-main-campus | Pennsylvania State University-Main Campus | University Park, PA | psu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the 2+2 Plan, many students start at another Penn State campus and move to the campus that offers their major for the last two years, without reapplying. Major entrance requirements are the same wherever you start.

### binghamton-university | Binghamton University | Vestal, NY | www.binghamton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Binghamton University offers the First-year Research Immersion (FRI) program for first-year STEM students to conduct hands-on research.

### kennesaw-state-university | Kennesaw State University | Kennesaw, GA | www.kennesaw.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Kennesaw State is Georgia's third-largest university, with more than 51,000 students on two campuses in Kennesaw and Marietta.

### michigan-state-university | Michigan State University | East Lansing, MI | www.msu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Spartan Tuition Advantage covers full tuition for incoming first-years who qualify for in-state tuition, are Pell-eligible and have household income of $75,000 or less. You just apply for admission and file the FAFSA.

### university-of-wisconsin-whitewater | University of Wisconsin-Whitewater | Whitewater, WI | www.uww.edu
Find up to 3 new facts.
Already have: nothing yet.

### pennsylvania-western-university | Pennsylvania Western University | California, PA | www.pennwest.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Formed in July 2022 through the merger of California, Clarion, and Edinboro universities, PennWest operates three physical residential campuses and a Global Online campus.

### university-of-minnesota-duluth | University of Minnesota-Duluth | Duluth, MN | d.umn.edu
Find up to 3 new facts.
Already have: nothing yet.
