# Task: find "What's special" facts for 50 US colleges (file 16 of 27)

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

university-of-mount-olive | University of Mount Olive | Mount Olive, NC | https://umo.edu/
hobart-william-smith-colleges | Hobart William Smith Colleges | Geneva, NY | https://www.hws.edu/
marywood-university | Marywood University | Scranton, PA | https://www.marywood.edu/
curry-college | Curry College | Milton, MA | https://www.curry.edu/
hamline-university | Hamline University | Saint Paul, MN | https://www.hamline.edu/
felician-university | Felician University | Lodi, NJ | https://www.felician.edu/
wheaton-college-massachusetts | Wheaton College (Massachusetts) | Norton, MA | https://www.wheatoncollege.edu/
mount-st-mary-s-university | Mount St. Mary's University | Emmitsburg, MD | https://msmary.edu/
roanoke-college | Roanoke College | Salem, VA | https://www.roanoke.edu/
the-college-of-saint-scholastica | The College of Saint Scholastica | Duluth, MN | https://www.css.edu/
seattle-pacific-university | Seattle Pacific University | Seattle, WA | https://spu.edu/
mckendree-university | McKendree University | Lebanon, IL | https://www.mckendree.edu/
springfield-college | Springfield College | Springfield, MA | https://springfield.edu/
texas-a-and-m-university-central-texas | Texas A&M University-Central Texas | Killeen, TX | https://tamuct.edu/
texas-wesleyan-university | Texas Wesleyan University | Fort Worth, TX | https://www.txwes.edu/
trevecca-nazarene-university | Trevecca Nazarene University | Nashville, TN | https://www.trevecca.edu/
kenyon-college | Kenyon College | Gambier, OH | https://www.kenyon.edu/
the-college-of-wooster | The College of Wooster | Wooster, OH | https://wooster.edu/
grinnell-college | Grinnell College | Grinnell, IA | https://www.grinnell.edu/
university-of-minnesota-crookston | University of Minnesota-Crookston | Crookston, MN | https://crk.umn.edu/
muhlenberg-college | Muhlenberg College | Allentown, PA | https://www.muhlenberg.edu/
mount-saint-mary-s-university | Mount Saint Mary's University | Los Angeles, CA | https://www.msmu.edu/
claflin-university | Claflin University | Orangeburg, SC | https://www.claflin.edu/
florida-polytechnic-university | Florida Polytechnic University | Lakeland, FL | https://floridapoly.edu/
canisius-university | Canisius University | Buffalo, NY | https://www.canisius.edu/
lebanon-valley-college | Lebanon Valley College | Annville, PA | https://www.lvc.edu/
st-francis-college | St. Francis College | Brooklyn, NY | https://www.sfc.edu/
chaminade-university-of-honolulu | Chaminade University of Honolulu | Honolulu, HI | https://www.chaminade.edu/
misericordia-university | Misericordia University | Dallas, PA | https://www.misericordia.edu/
simmons-university | Simmons University | Boston, MA | https://www.simmons.edu/
assumption-university | Assumption University | Worcester, MA | https://www.assumption.edu/
lawrence-technological-university | Lawrence Technological University | Southfield, MI | https://www.ltu.edu/
mid-america-christian-university | Mid-America Christian University | Oklahoma City, OK | https://www.macu.edu/
ringling-college-of-art-and-design | Ringling College of Art and Design | Sarasota, FL | https://www.ringling.edu/
saint-norbert-college | Saint Norbert College | De Pere, WI | https://www.snc.edu/
wagner-college | Wagner College | Staten Island, NY | https://www.wagner.edu/
daemen-university | Daemen University | Amherst, NY | https://www.daemen.edu/
randolph-macon-college | Randolph-Macon College | Ashland, VA | https://www.rmc.edu/
madonna-university | Madonna University | Livonia, MI | https://www.madonna.edu/
delaware-valley-university | Delaware Valley University | Doylestown, PA | https://www.delval.edu/
the-master-s-university-and-seminary | The Master's University and Seminary | Santa Clarita, CA | https://www.masters.edu/
linfield-university | Linfield University | McMinnville, OR | https://www.linfield.edu/
delta-state-university | Delta State University | Cleveland, MS | https://www.deltastate.edu/
mcdaniel-college | McDaniel College | Westminster, MD | https://www.mcdaniel.edu/
the-university-of-the-south | The University of the South | Sewanee, TN | https://www.sewanee.edu/
union-university | Union University | Jackson, TN | https://www.uu.edu/
mississippi-university-for-women | Mississippi University for Women | Columbus, MS | https://www.muw.edu/
adrian-college | Adrian College | Adrian, MI | https://www.adrian.edu/
st-mary-s-college-of-maryland | St. Mary's College of Maryland | St. Mary's City, MD | https://www.smcm.edu/
ouachita-baptist-university | Ouachita Baptist University | Arkadelphia, AR | https://obu.edu/
