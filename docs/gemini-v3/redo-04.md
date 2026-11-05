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

### north-carolina-state-university-at-raleigh | North Carolina State University at Raleigh | Raleigh, NC | www.ncsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Goodnight Scholars Program gives $23,000 a year, renewable for four years, to students from low- and middle-income North Carolina families studying STEM or related education majors. You need an invitation to apply.

### hamilton-college | Hamilton College | Clinton, NY | www.hamilton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Hamilton has no core curriculum or distribution requirements.

### villanova-university | Villanova University | Villanova, PA | www.villanova.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1842, Villanova is one of two Catholic, Augustinian colleges in the United States; the other is Merrimack College.

### university-of-wisconsin-madison | University of Wisconsin-Madison | Madison, WI | www.wisc.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Bucky's Tuition Promise pays tuition and segregated fees for four years for new Wisconsin residents whose household income is $65,000 or less. Assets don't count, and there's no separate application, only the FAFSA (and, for fall 2026 entrants, the CSS Profile).
- For Pell-eligible Wisconsin residents, Bucky's Pell Pathway goes further: grants, scholarships and work-study that meet full financial need, including housing and food, for four years.

### claremont-mckenna-college | Claremont McKenna College | Claremont, CA | www.cmc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Four nights a week during the school year, the Athenaeum brings scholars, public figures and artists to campus to engage with students.

### babson-college | Babson College | Wellesley, MA | www.babson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every Babson student takes Foundations of Management and Entrepreneurship, where teams come up with a business idea and work out whether it's feasible.

### davidson-college | Davidson College | Davidson, NC | davidson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Davidson admits students regardless of their family's ability to pay and meets 100% of calculated need without loans.

### lehigh-university | Lehigh University | Bethlehem, PA | www.lehigh.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Lehigh Commitment provides a full tuition grant to undergraduate students from families with total incomes under $75,000.

### washington-and-lee-university | Washington and Lee University | Lexington, VA | www.wlu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Johnson Scholarships cover tuition, fees, housing and food, plus $10,000 for a summer experience.

### bates-college | Bates College | Lewiston, ME | www.bates.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Bates has a four-week Short Term from late April through May, when students take just one class.

### california-state-university-long-beach | California State University-Long Beach | Long Beach, CA | www.csulb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Long Beach College Promise, eligible local graduates get a tuition-free first year at Long Beach City College and guaranteed admission to Cal State Long Beach if academically eligible.

### liberty-university | Liberty University | Lynchburg, VA | www.liberty.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Liberty University requires attendance at Convocation for all on-campus, residential students.

### university-of-maryland-college-park | University of Maryland-College Park | College Park, MD | www.umd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Terrapin Commitment covers standard in-state tuition and fees for full-time Maryland students who are Pell-eligible or have family income of $75,000 or less. File the FAFSA by March 1 each year.

### university-of-maryland-global-campus | University of Maryland Global Campus | Adelphi, MD | www.umgc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students do not need to buy traditional textbooks for most courses, as the university embeds no-cost open digital course materials directly into online classrooms.

### minerva-university | Minerva University | San Francisco, CA | www.minerva.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Minerva University undergraduates rotate through multiple global cities over four years, taking coursework integrated with each metropolitan location while living in common residence halls.
