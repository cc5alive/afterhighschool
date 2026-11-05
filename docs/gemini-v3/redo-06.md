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

### nova-southeastern-university | Nova Southeastern University | Fort Lauderdale, FL | www.nova.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Nova Southeastern University's Dual Admission program lets undergraduate students reserve a seat in an NSU graduate or professional program while earning their bachelor's degree and receive an annual $2,000 scholarship.

### university-of-alaska-anchorage | University of Alaska Anchorage | Anchorage, AK | www.uaa.alaska.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Eligible undergraduate students from participating western states and territories pay 150% of the in-state tuition rate at UAA through the Western Undergraduate Exchange (WUE).

### belmont-university | Belmont University | Nashville, TN | www.belmont.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- To graduate from Belmont University, students are required to complete the WELL Core program by earning 50 credits across 10 categories of wellness.

### the-college-of-new-jersey | The College of New Jersey | Ewing, NJ | www.tcnj.edu
Find up to 3 new facts.
Already have: nothing yet.

### sacred-heart-university | Sacred Heart University | Fairfield, CT | www.sacredheart.edu
Find up to 3 new facts.
Already have: nothing yet.

### bentley-university | Bentley University | Waltham, MA | www.bentley.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- At Bentley University, 89 percent of undergraduate students complete at least one internship during their education.

### jacksonville-state-university | Jacksonville State University | Jacksonville, AL | www.jsu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-the-cumberlands | University of the Cumberlands | Williamsburg, KY | www.ucumberlands.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- University of the Cumberlands provides free textbooks to all students as part of its One Price Promise.

### west-texas-a-and-m-university | West Texas A & M University | Canyon, TX | www.wtamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Buff Promise covers fall and spring in-state tuition for undergraduate Texas residents whose annual family income is $80,000 or less.

### university-of-wisconsin-oshkosh | University of Wisconsin-Oshkosh | Oshkosh, WI | www.uwosh.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-southern-university | Texas Southern University | Houston, TX | www.tsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Tiger Promise guarantees coverage of tuition and mandatory fees for eligible first-time freshmen for up to 8 consecutive semesters or 4 years.

### california-state-university-monterey-bay | California State University-Monterey Bay | Seaside, CA | csumb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every undergraduate student at Cal State Monterey Bay completes at least one service learning course as part of their degree.

### university-of-missouri-kansas-city | University of Missouri-Kansas City | Kansas City, MO | www.umkc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Roo Advantage Scholarship ensures tuition and fees are met for full-time, Pell-eligible Missouri and Kansas residents.

### slippery-rock-university-of-pennsylvania | Slippery Rock University of Pennsylvania | Slippery Rock, PA | www.sru.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Out-of-state first-year students with at least a 3.0 high school GPA qualify for a tuition reduction.

### indiana-university-of-pennsylvania | Indiana University of Pennsylvania | Indiana, PA | www.iup.edu
Find up to 3 new facts.
Already have: nothing yet.
