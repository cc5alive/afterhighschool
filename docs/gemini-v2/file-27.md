# Task: find "What's special" facts for 36 US colleges (file 27 of 27)

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. Each college page has a "What's special" section: a few short facts that set the school apart, each linked to its source. Families act on these, so accuracy matters more than coverage.

## How to work

1. **Browse live.** Use Google Search and open the pages you cite. Don't answer from memory. If you can't browse, reply only: BROWSING UNAVAILABLE.
2. **Check these pages for each school** before giving up: the admissions homepage, the financial aid / cost page (look for named tuition guarantees or promises), the academics or curriculum page (calendar, core requirements, required experiences), and the "about" or "history" page.
3. **Copy, don't paraphrase, the quote.** Each quote must be copied character for character from the page text. We check every quote against the live page automatically, and facts whose quote isn't there are thrown out.

## The most important rule

**Every detail in your fact must appear in your quotes.** That includes every number, dollar amount, income limit, year, eligibility condition and name. If a detail isn't in a quote, either add a second quote from the same or another page that contains it, or leave the detail out. Don't fill in anything from memory, even if you're sure it's true.

Bad: fact says "families under $75,000 pay nothing", but the quote only says "we meet 100% of need without loans."
Good: fact says "meets 100% of demonstrated need without loans", and the quote says exactly that.

## What makes a good fact

Specific, true of this school and not most similar schools, and useful to someone deciding whether to apply or whether they can afford it. Examples of the kind we want:
- A named tuition guarantee or promise, with its income limit and who qualifies
- An unusual calendar (block plan, one course at a time, quarters, a January or May term everyone takes)
- A requirement every student completes: co-op, internship, senior thesis, study abroad, work program, service
- An admissions rule: guaranteed admission, you apply to a specific college or program, an audition or nomination is required
- A structural feature: residential colleges, a cross-registration consortium, no majors, no grades
- A mission-defining identity with a concrete program: HBCU, tribal college, women's or men's college, work college, service academy

**Don't include:**
- Credit-hour counts, minimum GPAs, program lengths, accreditation
- Rules that apply to a single major (one nursing program's prerequisites, one music audition) unless the school only offers that field
- Generic offerings: honors college, study abroad, research opportunities, small classes, career services
- Marketing words: premier, renowned, world-class, nationally recognized, leading, vibrant, unique, innovative, robust, cutting-edge, best, famous. You can use "first," "only" or "largest" only when the quote says it.

Write each fact in your own words: 1–2 plain sentences, 40–300 characters, sentence case. Aim for 2–3 facts per school. Zero facts is fine when nothing qualifies; don't pad.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per school, in the order listed. No intro, no code fences, no notes after.

{"slug":"<slug exactly as listed>","researchedAt":"<today, YYYY-MM-DD>","facts":[{"text":"<fact>","sources":[{"title":"<page name>","url":"<exact https URL you opened>","quote":"<verbatim text from that page, 8–40 words>"}]}],"concerns":"<null or a short note>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. If you find nothing for a school, still output its line with "facts":[] and say why in "concerns".

Do all 36 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools (slug | name | location | website)

yeshiva-of-machzikai-hadas | Yeshiva of Machzikai Hadas | Brooklyn, NY | https://yeshivaofmachzikaihadas.com/
bethel-college-north-newton | Bethel College-North Newton | North Newton, KS | https://www.bethelks.edu/
pennsylvania-state-university-penn-state-hazleton | Pennsylvania State University-Penn State Hazleton | Hazleton, PA | https://hazleton.psu.edu/
university-of-phoenix-arizona | University of Phoenix-Arizona | Phoenix, AZ | https://www.phoenix.edu/
strayer-university-global-region | Strayer University-Global Region | Washington, DC | https://www.strayer.edu/
walden-university | Walden University | Minneapolis, MN | https://www.waldenu.edu/
american-intercontinental-university-system | American InterContinental University System | Chandler, AZ | https://www.aius.education/
south-university-savannah-online | South University-Savannah Online | Savannah, GA | https://www.southuniversity.edu/online#location=Online Programs
strayer-university-georgia | Strayer University-Georgia | Chamblee, GA | https://www.strayer.edu/campus-locations/georgia/chamblee
academy-of-art-university | Academy of Art University | San Francisco, CA | https://www.academyart.edu/
strayer-university-north-carolina | Strayer University-North Carolina | Greensboro, NC | https://www.strayer.edu/campus-locations/north-carolina/greensboro
stanbridge-university | Stanbridge University | Irvine, CA | https://www.stanbridge.edu/
westcliff-university | Westcliff University | Irvine, CA | https://www.westcliff.edu/
strayer-university-texas | Strayer University-Texas | Farmers Branch, TX | https://www.strayer.edu/campus-locations
strayer-university-south-carolina | Strayer University-South Carolina | Greenville, SC | https://www.strayer.edu/campus-locations/south-carolina/greenville
strayer-university-tennessee | Strayer University-Tennessee | Nashville, TN | https://www.strayer.edu/campus-locations/tennessee/thousand-oaks
berkeley-college-woodland-park | Berkeley College-Woodland Park | Woodland Park, NJ | https://berkeleycollege.edu/
strayer-university-virginia | Strayer University-Virginia | Arlington, VA | https://www.strayer.edu/campus-locations/virginia/arlington
aspen-university | Aspen University | Phoenix, AZ | https://aspen.edu/
berkeley-college-new-york | Berkeley College-New York | New York, NY | https://berkeleycollege.edu/
strayer-university-pennsylvania | Strayer University-Pennsylvania | Philadelphia, PA | https://www.strayer.edu/campus-locations/pennsylvania/lower-bucks-county
strayer-university-alabama | Strayer University-Alabama | Birmingham, AL | https://www.strayer.edu/campus-locations/alabama/birmingham
strayer-university-florida | Strayer University-Florida | Tampa, FL | https://www.strayer.edu/campus-locations/florida/tampa-east
strayer-university-maryland | Strayer University-Maryland | Baltimore, MD | https://www.strayer.edu/campus-locations/maryland/prince-georges
strayer-university-mississippi | Strayer University-Mississippi | Jackson, MS | https://www.strayer.edu/campus-locations/mississippi/jackson
new-york-film-academy | New York Film Academy | Burbank, CA | https://www.nyfa.edu/
national-american-university-rapid-city | National American University-Rapid City | Rapid City, SD | https://www.national.edu/locations/campuses/rapid-city/
the-college-of-westchester | The College of Westchester | White Plains, NY | https://www.cw.edu/
denver-college-of-nursing | Denver College of Nursing | Denver, CO | https://www.denvercollegeofnursing.edu/
american-intercontinental-university-atlanta | American InterContinental University-Atlanta | Atlanta, GA | https://www.aiuniv.edu/online-campus/campus-locations/atlanta
strayer-university-new-jersey | Strayer University-New Jersey | Piscataway, NJ | https://www.strayer.edu/campus-locations/new-jersey/piscataway
strayer-university-arkansas | Strayer University-Arkansas | Little Rock, AR | https://www.strayer.edu/campus-locations/arkansas/little-rock
provo-college | Provo College | Provo, UT | https://www.provocollege.edu/
eagle-gate-college-boise-campus | Eagle Gate College-Boise Campus | Boise, ID | https://www.eaglegatecollege.edu/
brookline-college-albuquerque | Brookline College-Albuquerque | Albuquerque, NM | https://www.brooklinecollege.edu/
devry-university-georgia | DeVry University-Georgia | Decatur, GA | https://www.devry.edu/
