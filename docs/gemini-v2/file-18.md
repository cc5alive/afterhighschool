# Task: find "What's special" facts for 50 US colleges (file 18 of 27)

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

john-brown-university | John Brown University | Siloam Springs, AR | https://www.jbu.edu/
letourneau-university | LeTourneau University | Longview, TX | https://www.letu.edu/
grace-college-and-theological-seminary | Grace College and Theological Seminary | Winona Lake, IN | https://www.grace.edu/
saint-mary-s-college | Saint Mary's College | Notre Dame, IN | https://www.saintmarys.edu/
henderson-state-university | Henderson State University | Arkadelphia, AR | https://www.hsu.edu/
southern-nazarene-university | Southern Nazarene University | Bethany, OK | https://www.snu.edu/
nebraska-wesleyan-university | Nebraska Wesleyan University | Lincoln, NE | https://www.nebrwesleyan.edu/
wartburg-college | Wartburg College | Waverly, IA | https://www.wartburg.edu/
new-mexico-highlands-university | New Mexico Highlands University | Las Vegas, NM | https://www.nmhu.edu/
methodist-university | Methodist University | Fayetteville, NC | https://www.methodist.edu/
missouri-valley-college | Missouri Valley College | Marshall, MO | https://www.moval.edu/
university-of-northwestern-st-paul | University of Northwestern-St Paul | Saint Paul, MN | https://www.unwsp.edu/
indiana-institute-of-technology | Indiana Institute of Technology | Fort Wayne, IN | https://www.indianatech.edu/
southwestern-university | Southwestern University | Georgetown, TX | https://www.southwestern.edu/
university-of-dubuque | University of Dubuque | Dubuque, IA | https://www.dbq.edu/
mississippi-valley-state-university | Mississippi Valley State University | Itta Bena, MS | https://www.mvsu.edu/
alfred-university | Alfred University | Alfred, NY | https://www.alfred.edu/
asbury-university | Asbury University | Wilmore, KY | https://www.asbury.edu/
trinity-washington-university | Trinity Washington University | Washington, DC | https://www2.trinitydc.edu/
university-of-dallas | University of Dallas | Irving, TX | https://udallas.edu/
bridgewater-college | Bridgewater College | Bridgewater, VA | https://www.bridgewater.edu/
centre-college | Centre College | Danville, KY | https://www.centre.edu/
lawrence-university | Lawrence University | Appleton, WI | https://www.lawrence.edu/
sul-ross-state-university | Sul Ross State University | Alpine, TX | https://www.sulross.edu/
massachusetts-maritime-academy | Massachusetts Maritime Academy | Buzzards Bay, MA | https://www.maritime.edu/
saint-johns-university | Saint Johns University | Collegeville, MN | https://csbsju.edu/
lincoln-university-mo | Lincoln University | Jefferson City, MO | https://www.lincolnu.edu/
walsh-university | Walsh University | North Canton, OH | https://www.walsh.edu/
carson-newman-university | Carson-Newman University | Jefferson City, TN | https://www.cn.edu/
chicago-state-university | Chicago State University | Chicago, IL | https://www.csu.edu/
drury-university | Drury University | Springfield, MO | https://www.drury.edu/
millikin-university | Millikin University | Decatur, IL | https://millikin.edu/
luther-college | Luther College | Decorah, IA | https://www.luther.edu/
muskingum-university | Muskingum University | New Concord, OH | https://www.muskingum.edu/
college-of-saint-benedict | College of Saint Benedict | Saint Joseph, MN | https://csbsju.edu/
buena-vista-university | Buena Vista University | Storm Lake, IA | https://www.bvu.edu/
manhattanville-university | Manhattanville University | Purchase, NY | https://www.mville.edu/
adventhealth-university | AdventHealth University | Orlando, FL | https://www.ahu.edu/
bryn-mawr-college | Bryn Mawr College | Bryn Mawr, PA | https://www.brynmawr.edu/
lenoir-rhyne-university | Lenoir-Rhyne University | Hickory, NC | https://www.lr.edu/
mount-vernon-nazarene-university | Mount Vernon Nazarene University | Mount Vernon, OH | https://mvnu.edu/
east-texas-baptist-university | East Texas Baptist University | Marshall, TX | https://www.etbu.edu/
oglethorpe-university | Oglethorpe University | Atlanta, GA | https://oglethorpe.edu/
carlow-university | Carlow University | Pittsburgh, PA | https://www.carlow.edu/
columbia-college-sc | Columbia College | Columbia, SC | https://www.columbiasc.edu/
southwest-baptist-university | Southwest Baptist University | Bolivar, MO | https://www.sbuniv.edu/
lake-superior-state-university | Lake Superior State University | Sault Ste Marie, MI | https://www.lssu.edu/
concordia-university-chicago | Concordia University-Chicago | River Forest, IL | https://www.cuchicago.edu/
west-virginia-state-university | West Virginia State University | Institute, WV | https://www.wvstateu.edu/
immaculata-university | Immaculata University | Immaculata, PA | https://www.immaculata.edu/
