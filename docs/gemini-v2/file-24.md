# Task: find "What's special" facts for 50 US colleges (file 24 of 27)

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

aquinas-college | Aquinas College | Grand Rapids, MI | https://www.aquinas.edu/
loras-college | Loras College | Dubuque, IA | https://www.loras.edu/
huntington-university | Huntington University | Huntington, IN | https://www.huntington.edu/
emory-and-henry-university | Emory & Henry University | Emory, VA | https://www.emoryhenry.edu/
saint-mary-s-university-of-minnesota | Saint Mary's University of Minnesota | Winona, MN | https://www.smumn.edu/
central-college | Central College | Pella, IA | https://www.central.edu/
gwynedd-mercy-university | Gwynedd Mercy University | Gwynedd Valley, PA | https://www.gmercyu.edu/
our-lady-of-the-lake-university | Our Lady of the Lake University | San Antonio, TX | https://www.ollusa.edu/
reinhardt-university | Reinhardt University | Waleska, GA | https://www.reinhardt.edu/
dillard-university | Dillard University | New Orleans, LA | https://www.dillard.edu/
anderson-university-in | Anderson University | Anderson, IN | https://anderson.edu/
southern-university-at-new-orleans | Southern University at New Orleans | New Orleans, LA | https://www.suno.edu/
schreiner-university | Schreiner University | Kerrville, TX | https://schreiner.edu/
friends-university | Friends University | Wichita, KS | https://www.friends.edu/
mars-hill-university | Mars Hill University | Mars Hill, NC | https://www.mhu.edu/
oregon-state-university-cascades-campus | Oregon State University-Cascades Campus | Bend, OR | https://osucascades.edu/
bluefield-state-university | Bluefield State University | Bluefield, WV | https://bluefieldstate.edu/
the-college-of-idaho | The College of Idaho | Caldwell, ID | https://www.collegeofidaho.edu/
university-of-jamestown | University of Jamestown | Jamestown, ND | https://www.uj.edu/
westminster-college-pa | Westminster College | New Wilmington, PA | https://www.westminster.edu/
central-methodist-university-college-of-liberal-arts-and-sciences | Central Methodist University-College of Liberal Arts and Sciences | Fayette, MO | https://www.centralmethodist.edu/
hanover-college | Hanover College | Hanover, IN | https://www.hanover.edu/
brenau-university | Brenau University | Gainesville, GA | https://www.brenau.edu/
shorter-university | Shorter University | Rome, GA | https://www.shorter.edu/
northwest-nazarene-university | Northwest Nazarene University | Nampa, ID | https://www.nnu.edu/
new-england-college | New England College | Henniker, NH | https://www.nec.edu/
american-international-college | American International College | Springfield, MA | https://www.aic.edu/
marian-university-wi | Marian University | Fond Du Lac, WI | https://www.marianuniversity.edu/
quincy-university | Quincy University | Quincy, IL | https://www.quincy.edu/
spring-arbor-university | Spring Arbor University | Spring Arbor, MI | https://springarbor.edu/
waynesburg-university | Waynesburg University | Waynesburg, PA | https://www.waynesburg.edu/
bethel-university-in | Bethel University | Mishawaka, IN | https://betheluniversity.edu/
wilmington-college | Wilmington College | Wilmington, OH | https://www.wilmington.edu/
maryville-college | Maryville College | Maryville, TN | https://www.maryvillecollege.edu/
transylvania-university | Transylvania University | Lexington, KY | https://www.transy.edu/
guilford-college | Guilford College | Greensboro, NC | https://www.guilford.edu/
thomas-university | Thomas University | Thomasville, GA | https://www.thomasu.edu/
lycoming-college | Lycoming College | Williamsport, PA | https://www.lycoming.edu/
new-mexico-institute-of-mining-and-technology | New Mexico Institute of Mining and Technology | Socorro, NM | https://www.nmt.edu/
university-of-pittsburgh-bradford | University of Pittsburgh-Bradford | Bradford, PA | https://www.upb.pitt.edu/
franklin-pierce-university | Franklin Pierce University | Rindge, NH | https://www.franklinpierce.edu/
albertus-magnus-college | Albertus Magnus College | New Haven, CT | https://www.albertus.edu/
california-college-of-the-arts | California College of the Arts | San Francisco, CA | https://www.cca.edu/
midamerica-nazarene-university | MidAmerica Nazarene University | Olathe, KS | https://www.mnu.edu/
barton-college | Barton College | Wilson, NC | https://www.barton.edu/
west-virginia-university-institute-of-technology | West Virginia University Institute of Technology | Beckley, WV | https://www.wvutech.edu/
doane-university | Doane University | Crete, NE | https://www.doane.edu/
rockford-university | Rockford University | Rockford, IL | https://www.rockford.edu/
st-thomas-aquinas-college | St. Thomas Aquinas College | Sparkill, NY | https://www.stac.edu/
keuka-college | Keuka College | Keuka Park, NY | https://www.keuka.edu/
