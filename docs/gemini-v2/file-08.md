# Task: find "What's special" facts for 50 US colleges (file 8 of 27)

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

Do all 50 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools (slug | name | location | website)

saint-joseph-s-university-philadelphia | Saint Joseph's University - Philadelphia | Philadelphia, PA | https://www.sju.edu/
ramapo-college-of-new-jersey | Ramapo College of New Jersey | Mahwah, NJ | https://www.ramapo.edu/
the-university-of-tennessee-martin | The University of Tennessee-Martin | Martin, TN | https://www.utm.edu/
tennessee-state-university | Tennessee State University | Nashville, TN | https://www.tnstate.edu/
university-of-new-haven | University of New Haven | West Haven, CT | https://www.newhaven.edu/
east-stroudsburg-university-of-pennsylvania | East Stroudsburg University of Pennsylvania | East Stroudsburg, PA | https://www.esu.edu/
southeastern-university | Southeastern University | Lakeland, FL | https://www.seu.edu/
northeastern-state-university | Northeastern State University | Tahlequah, OK | https://www.nsuok.edu/
ana-g-mendez-university | Ana G. Mendez University | Orlando, FL | https://www.agmu.edu/
texas-a-and-m-university-kingsville | Texas A&M University-Kingsville | Kingsville, TX | https://www.tamuk.edu/
nicholls-state-university | Nicholls State University | Thibodaux, LA | https://www.nicholls.edu/
regent-university | Regent University | Virginia Beach, VA | https://www.regent.edu/
suny-oneonta | SUNY Oneonta | Oneonta, NY | https://suny.oneonta.edu/
university-of-new-orleans | University of New Orleans | New Orleans, LA | https://new.uno.edu/
university-of-florida-online | University of Florida-Online | Gainesville, FL | https://www.ufonline.ufl.edu/
lindenwood-university | Lindenwood University | Saint Charles, MO | https://www.lindenwood.edu/
jackson-state-university | Jackson State University | Jackson, MS | https://www.jsums.edu/
morehead-state-university | Morehead State University | Morehead, KY | https://www.moreheadstate.edu/
washburn-university | Washburn University | Topeka, KS | https://www.washburn.edu/
park-university | Park University | Parkville, MO | https://www.park.edu/
dalton-state-college | Dalton State College | Dalton, GA | https://www.daltonstate.edu/
mercer-university | Mercer University | Macon, GA | https://www.mercer.edu/
university-of-massachusetts-global | University of Massachusetts Global | Aliso Viejo, CA | https://www.umassglobal.edu/
bentley-university | Bentley University | Waltham, MA | https://www.bentley.edu/
university-of-the-incarnate-word | University of the Incarnate Word | San Antonio, TX | https://www.uiw.edu/
university-of-michigan-flint | University of Michigan-Flint | Flint, MI | https://www.umflint.edu/
western-illinois-university | Western Illinois University | Macomb, IL | https://www.wiu.edu/
national-louis-university | National Louis University | Chicago, IL | https://www.nl.edu/
delaware-state-university | Delaware State University | Dover, DE | https://www.desu.edu/
northwest-missouri-state-university | Northwest Missouri State University | Maryville, MO | https://www.nwmissouri.edu/
christopher-newport-university | Christopher Newport University | Newport News, VA | https://cnu.edu/
clayton-state-university | Clayton  State University | Morrow, GA | https://www.clayton.edu/
creighton-university | Creighton University | Omaha, NE | https://www.creighton.edu/
cuny-york-college | CUNY York College | Jamaica, NY | https://www.york.cuny.edu/
butler-university | Butler University | Indianapolis, IN | https://www.butler.edu/
salem-state-university | Salem State University | Salem, MA | https://www.salemstate.edu/
suffolk-university | Suffolk University | Boston, MA | https://www.suffolk.edu/
ithaca-college | Ithaca College | Ithaca, NY | https://www.ithaca.edu/
providence-college | Providence College | Providence, RI | https://www.providence.edu/
stevens-institute-of-technology | Stevens Institute of Technology | Hoboken, NJ | https://www.stevens.edu/
university-of-southern-maine | University of Southern Maine | Portland, ME | https://usm.maine.edu/
pittsburg-state-university | Pittsburg State University | Pittsburg, KS | https://www.pittstate.edu/
university-of-alaska-fairbanks | University of Alaska Fairbanks | Fairbanks, AK | https://www.uaf.edu/
xavier-university | Xavier University | Cincinnati, OH | https://www.xavier.edu/
samford-university | Samford University | Birmingham, AL | https://www.samford.edu/
university-of-wisconsin-river-falls | University of Wisconsin-River Falls | River Falls, WI | https://www.uwrf.edu/
eastern-illinois-university | Eastern Illinois University | Charleston, IL | https://www.eiu.edu/
university-of-washington-tacoma-campus | University of Washington-Tacoma Campus | Tacoma, WA | https://www.tacoma.uw.edu/
winston-salem-state-university | Winston-Salem State University | Winston-Salem, NC | https://www.wssu.edu/
grambling-state-university | Grambling State University | Grambling, LA | https://www.gram.edu/
