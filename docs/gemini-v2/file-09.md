# Task: find "What's special" facts for 50 US colleges (file 9 of 27)

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

suny-old-westbury | SUNY Old Westbury | Old Westbury, NY | https://www.oldwestbury.edu/
university-of-hartford | University of Hartford | West Hartford, CT | https://www.hartford.edu/
university-of-nebraska-at-kearney | University of Nebraska at Kearney | Kearney, NE | https://www.unk.edu/
midwestern-state-university | Midwestern State University | Wichita Falls, TX | https://www.msutexas.edu/
shippensburg-university-of-pennsylvania | Shippensburg University of Pennsylvania | Shippensburg, PA | https://www.ship.edu/
seattle-university | Seattle University | Seattle, WA | https://www.seattleu.edu/
touro-university | Touro University | New York, NY | https://www.touro.edu/
university-of-south-carolina-upstate | University of South Carolina-Upstate | Spartanburg, SC | https://www.uscupstate.edu/
pennsylvania-state-university-penn-state-harrisburg | Pennsylvania State University-Penn State Harrisburg | Middletown, PA | https://harrisburg.psu.edu/
beth-medrash-govoha | Beth Medrash Govoha | Lakewood, NJ | https://bmg.edu/
cedarville-university | Cedarville University | Cedarville, OH | https://www.cedarville.edu/
lewis-university | Lewis University | Romeoville, IL | https://www.lewisu.edu/
northeastern-illinois-university | Northeastern Illinois University | Chicago, IL | https://www.neiu.edu/
aurora-university | Aurora University | Aurora, IL | https://aurora.edu/
roger-williams-university | Roger Williams University | Bristol, RI | https://www.rwu.edu/
indiana-university-south-bend | Indiana University-South Bend | South Bend, IN | https://southbend.iu.edu/
worcester-state-university | Worcester State University | Worcester, MA | https://www.worcester.edu/
merrimack-college | Merrimack College | North Andover, MA | https://www.merrimack.edu/
the-university-of-texas-permian-basin | The University of Texas Permian Basin | Odessa, TX | https://www.utpb.edu/
pratt-institute-main | Pratt Institute-Main | Brooklyn, NY | https://www.pratt.edu/
bucknell-university | Bucknell University | Lewisburg, PA | https://www.bucknell.edu/
emerson-college | Emerson College | Boston, MA | https://www.emerson.edu/
loyola-university-maryland | Loyola University Maryland | Baltimore, MD | https://www.loyola.edu/
suny-college-at-geneseo | SUNY College at Geneseo | Geneseo, NY | https://www.geneseo.edu/
johnson-and-wales-university-providence | Johnson & Wales University-Providence | Providence, RI | https://www.jwu.edu/campuses/providence/
state-university-of-new-york-at-plattsburgh | State University of New York at Plattsburgh | Plattsburgh, NY | https://www.plattsburgh.edu/
nevada-state-university | Nevada State University | Henderson, NV | https://nevadastate.edu/
thomas-jefferson-university | Thomas Jefferson University | Philadelphia, PA | https://www.jefferson.edu/
rutgers-university-camden | Rutgers University-Camden | Camden, NJ | https://camden.rutgers.edu/
wentworth-institute-of-technology | Wentworth Institute of Technology | Boston, MA | https://wit.edu/
hampton-university | Hampton University | Hampton, VA | https://www.hamptonu.edu/
monmouth-university | Monmouth University | West Long Branch, NJ | https://www.monmouth.edu/
new-jersey-city-university | New Jersey City University | Jersey City, NJ | https://www.njcu.edu/
brandeis-university | Brandeis University | Waltham, MA | https://www.brandeis.edu/
westfield-state-university | Westfield State University | Westfield, MA | https://www.westfield.ma.edu/
clark-atlanta-university | Clark Atlanta University | Atlanta, GA | https://www.cau.edu/
vermont-state-university | Vermont State University | Randolph, VT | https://vermontstate.edu/
bradley-university | Bradley University | Peoria, IL | https://www.bradley.edu/
university-of-mary-washington | University of Mary Washington | Fredericksburg, VA | https://www.umw.edu/
university-of-scranton | University of Scranton | Scranton, PA | https://www.scranton.edu/
pepperdine-university | Pepperdine University | Malibu, CA | https://www.pepperdine.edu/
winthrop-university | Winthrop University | Rock Hill, SC | https://www.winthrop.edu/
southwestern-oklahoma-state-university | Southwestern Oklahoma State University | Weatherford, OK | https://www.swosu.edu/
western-connecticut-state-university | Western Connecticut State University | Danbury, CT | https://www.wcsu.edu/
oral-roberts-university | Oral Roberts University | Tulsa, OK | https://oru.edu/
alabama-state-university | Alabama State University | Montgomery, AL | https://www.alasu.edu/
biola-university | Biola University | La Mirada, CA | https://www.biola.edu/
massachusetts-college-of-pharmacy-and-health-sciences | Massachusetts College of Pharmacy and Health Sciences | Boston, MA | https://www.mcphs.edu/
new-york-institute-of-technology | New York Institute of Technology | Old Westbury, NY | https://www.nyit.edu/
eastern-connecticut-state-university | Eastern Connecticut State University | Willimantic, CT | https://www.easternct.edu/
