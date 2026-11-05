# Task: find "What's special" facts for 50 US colleges (file 7 of 27)

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

michigan-technological-university | Michigan Technological University | Houghton, MI | https://www.mtu.edu/
university-of-michigan-dearborn | University of Michigan-Dearborn | Dearborn, MI | https://umdearborn.edu/
georgia-college-and-state-university | Georgia College & State University | Milledgeville, GA | https://www.gcsu.edu/
state-university-of-new-york-at-cortland | State University of New York at Cortland | Cortland, NY | https://www2.cortland.edu/
lehigh-university | Lehigh University | Bethlehem, PA | https://www.lehigh.edu/
university-of-wisconsin-stout | University of Wisconsin-Stout | Menomonie, WI | https://www.uwstout.edu/
university-of-wisconsin-platteville | University of Wisconsin-Platteville | Platteville, WI | https://www.uwplatt.edu/
university-of-north-alabama | University of North Alabama | Florence, AL | https://www.una.edu/
suny-brockport | SUNY Brockport | Brockport, NY | https://www.brockport.edu/
fayetteville-state-university | Fayetteville State University | Fayetteville, NC | https://www.uncfsu.edu/
mercy-university | Mercy University | Dobbs Ferry, NY | https://www.mercy.edu/
millersville-university-of-pennsylvania | Millersville University of Pennsylvania | Millersville, PA | https://www.millersville.edu/
rensselaer-polytechnic-institute | Rensselaer Polytechnic Institute | Troy, NY | https://www.rpi.edu/
purdue-university-northwest | Purdue University Northwest | Hammond, IN | https://www.pnw.edu/
university-of-san-diego | University of San Diego | San Diego, CA | https://www.sandiego.edu/
maryville-university-of-saint-louis | Maryville University of Saint Louis | Saint Louis, MO | https://www.maryville.edu/
university-of-central-missouri | University of Central Missouri | Warrensburg, MO | https://www.ucmo.edu/
angelo-state-university | Angelo State University | San Angelo, TX | https://www.angelo.edu/
louisiana-state-university-at-alexandria | Louisiana State University at Alexandria | Alexandria, LA | https://www.lsua.edu/
columbus-state-university | Columbus State University | Columbus, GA | https://www.columbusstate.edu/
metropolitan-state-university | Metropolitan State University | Saint Paul, MN | https://www.metrostate.edu/
augusta-university | Augusta University | Augusta, GA | https://www.augusta.edu/
california-state-polytechnic-university-humboldt | California State Polytechnic University-Humboldt | Arcata, CA | https://www.humboldt.edu/
university-of-northern-colorado | University of Northern Colorado | Greeley, CO | https://www.unco.edu/
colorado-christian-university | Colorado Christian University | Lakewood, CO | https://www.ccu.edu/
missouri-university-of-science-and-technology | Missouri University of Science and Technology | Rolla, MO | https://www.mst.edu/
southern-university-and-a-and-m-college | Southern University and A & M College | Baton Rouge, LA | https://www.subr.edu/
wake-forest-university | Wake Forest University | Winston-Salem, NC | https://www.wfu.edu/
university-of-washington-bothell-campus | University of Washington-Bothell Campus | Bothell, WA | https://www.uwb.edu/
fairfield-university | Fairfield University | Fairfield, CT | https://fairfield.edu/
columbia-college-chicago | Columbia College Chicago | Chicago, IL | https://www.colum.edu/
university-of-san-francisco | University of San Francisco | San Francisco, CA | https://www.usfca.edu/
adelphi-university | Adelphi University | Garden City, NY | https://www.adelphi.edu/
university-of-massachusetts-dartmouth | University of Massachusetts-Dartmouth | North Dartmouth, MA | https://www.umassd.edu/
gonzaga-university | Gonzaga University | Spokane, WA | https://www.gonzaga.edu/
marist-university | Marist University | Poughkeepsie, NY | https://www.marist.edu/
sonoma-state-university | Sonoma State University | Rohnert Park, CA | https://sonoma.edu/
winona-state-university | Winona State University | Winona, MN | https://www.winona.edu/
high-point-university | High Point University | High Point, NC | https://www.highpoint.edu/
suny-buffalo-state-university | SUNY Buffalo State University | Buffalo, NY | https://suny.buffalostate.edu/
saint-cloud-state-university | Saint Cloud State University | Saint Cloud, MN | https://www.stcloudstate.edu/
virginia-state-university | Virginia State University | Petersburg, VA | https://www.vsu.edu/
rhode-island-college | Rhode Island College | Providence, RI | https://www.ric.edu/
bowie-state-university | Bowie State University | Bowie, MD | https://www.bowiestate.edu/
university-of-missouri-st-louis | University of Missouri-St Louis | Saint Louis, MO | https://www.umsl.edu/
university-of-louisiana-at-monroe | University of Louisiana at Monroe | Monroe, LA | https://www.ulm.edu/
california-state-university-channel-islands | California State University-Channel Islands | Camarillo, CA | https://www.csuci.edu/
mcneese-state-university | McNeese State University | Lake Charles, LA | https://www.mcneese.edu/
columbia-college-mo | Columbia College | Columbia, MO | https://www.ccis.edu/
university-of-arkansas-at-little-rock | University of Arkansas at Little Rock | Little Rock, AR | https://ualr.edu/
