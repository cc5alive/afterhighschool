# Task: find MORE "What's special" facts for 14 US colleges

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

Do all 14 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools

### wright-state-university-main-campus | Wright State University-Main Campus | Dayton, OH | www.wright.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Wright Guarantee Tuition Program guarantees the same annual cost of tuition, housing, and dining over a four-year college career for incoming in-state undergraduates.

### saint-leo-university | Saint Leo University | Saint Leo, FL | www.saintleo.edu
Find up to 3 new facts.
Already have: nothing yet.

### thomas-edison-state-university | Thomas Edison State University | Trenton, NJ | www.tesu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Thomas Edison State University was founded in 1972 to provide adult students across the country with alternative methods of achieving a college education.

### murray-state-university | Murray State University | Murray, KY | www.murraystate.edu
Find up to 3 new facts.
Already have: nothing yet.

### grambling-state-university | Grambling State University | Grambling, LA | www.gram.edu
Find up to 3 new facts.
Already have: nothing yet.

### indiana-wesleyan-university-national-and-global | Indiana Wesleyan University-National & Global | Marion, IN | www.indwes.edu
Find up to 3 new facts.
Already have: nothing yet.

### valdosta-state-university | Valdosta State University | Valdosta, GA | www.valdosta.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Valdosta State University offers a Border States Waiver for undergraduate students residing in Alabama, Florida, North Carolina, South Carolina, and Tennessee.

### william-paterson-university-of-new-jersey | William Paterson University of New Jersey | Wayne, NJ | www.wpunj.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- New Jersey students with a family adjusted gross income of $65,000 or less have tuition and fees covered through Pledge 4 Success and the Garden State Guarantee.

### texas-a-and-m-university-san-antonio | Texas A&M University-San Antonio | San Antonio, TX | www.tamusa.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Jaguar Promise is a last-dollar scholarship program that awards free tuition, fees, and books for eligible undergraduate students.

### university-of-alabama-in-huntsville | University of Alabama in Huntsville | Huntsville, AL | www.uah.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The University of Alabama in Huntsville is the anchor tenant of Cummings Research Park, the second-largest corporate research and technology park in the United States.

### middle-georgia-state-university | Middle Georgia State University | Macon, GA | www.mga.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Middle Georgia State University's Eastman Campus is the only campus in the University System of Georgia that offers flight training and airport management programs.

### the-new-school | The New School | New York, NY | www.newschool.edu
Find up to 3 new facts.
Already have: nothing yet.

### connecticut-college | Connecticut College | New London, CT | www.conncoll.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Connecticut College was one of the first colleges in the country to offer internship funding to every eligible student.

### northwestern-state-university-of-louisiana | Northwestern State University of Louisiana | Natchitoches, LA | www.nsula.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Northwestern State is home to the Louisiana Scholars' College, Louisiana's designated four-year, selective-admissions honors college in the liberal arts and sciences.
