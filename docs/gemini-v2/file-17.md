# Task: find "What's special" facts for 50 US colleges (file 17 of 27)

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

dordt-university | Dordt University | Sioux Center, IA | https://www.dordt.edu/
university-of-puget-sound | University of Puget Sound | Tacoma, WA | https://www.pugetsound.edu/
willamette-university | Willamette University | Salem, OR | https://www.willamette.edu/
western-colorado-university | Western Colorado University | Gunnison, CO | https://www.western.edu/
capital-university | Capital University | Columbus, OH | https://www.capital.edu/
lindsey-wilson-university | Lindsey Wilson University | Columbia, KY | https://www.lindsey.edu/
illinois-wesleyan-university | Illinois Wesleyan University | Bloomington, IL | https://www.iwu.edu/
rockhurst-university | Rockhurst University | Kansas City, MO | https://www.rockhurst.edu/
marymount-manhattan-college | Marymount Manhattan College | New York, NY | https://www.mmm.edu/
university-of-lynchburg | University of Lynchburg | Lynchburg, VA | https://www.lynchburg.edu/
caldwell-university | Caldwell University | Caldwell, NJ | https://www.caldwell.edu/
hillsdale-college | Hillsdale College | Hillsdale, MI | https://www.hillsdale.edu/
lincoln-memorial-university | Lincoln Memorial University | Harrogate, TN | https://www.lmunet.edu/
university-of-arkansas-for-medical-sciences | University of Arkansas for Medical Sciences | Little Rock, AR | https://www.uams.edu/
lancaster-bible-college | Lancaster Bible College | Lancaster, PA | https://www.lbc.edu/
university-of-saint-francis-fort-wayne | University of Saint Francis-Fort Wayne | Fort Wayne, IN | https://www.sf.edu/
saint-francis-university | Saint Francis University | Loretto, PA | https://www.francis.edu/
faulkner-university | Faulkner University | Montgomery, AL | https://www.faulkner.edu/
bethel-university-tn | Bethel University | McKenzie, TN | https://www.bethelu.edu/
fresno-pacific-university | Fresno Pacific University | Fresno, CA | https://www.fresno.edu/
chadron-state-college | Chadron State College | Chadron, NE | https://www.csc.edu/
lincoln-university-pa | Lincoln University | Lincoln University, PA | https://www.lincoln.edu/
university-of-evansville | University of Evansville | Evansville, IN | https://www.evansville.edu/
benedict-college | Benedict College | Columbia, SC | https://www.benedict.edu/
concordia-university-irvine | Concordia University-Irvine | Irvine, CA | https://www.cui.edu/
university-of-bridgeport | University of Bridgeport | Bridgeport, CT | https://www.bridgeport.edu/
drew-university | Drew University | Madison, NJ | https://www.drew.edu/
neumann-university | Neumann University | Aston, PA | https://www.neumann.edu/
whitman-college | Whitman College | Walla Walla, WA | https://www.whitman.edu/
sarah-lawrence-college | Sarah Lawrence College | Bronxville, NY | https://www.sarahlawrence.edu/
virginia-military-institute | Virginia Military Institute | Lexington, VA | https://www.vmi.edu/
university-of-connecticut-hartford-campus | University of Connecticut-Hartford Campus | Hartford, CT | https://hartford.uconn.edu/
ohio-wesleyan-university | Ohio Wesleyan University | Delaware, OH | https://www.owu.edu/
pacific-university | Pacific University | Forest Grove, OR | https://www.pacificu.edu/
oklahoma-city-university | Oklahoma City University | Oklahoma City, OK | https://www.okcu.edu/
west-liberty-university | West Liberty University | West Liberty, WV | https://www.westliberty.edu/
moody-bible-institute | Moody Bible Institute | Chicago, IL | https://www.moody.edu/
concord-university | Concord University | Athens, WV | https://www.concord.edu/
northwestern-oklahoma-state-university | Northwestern Oklahoma State University | Alva, OK | https://www.nwosu.edu/
seton-hill-university | Seton Hill University | Greensburg, PA | https://www.setonhill.edu/
ursinus-college | Ursinus College | Collegeville, PA | https://www.ursinus.edu/
missouri-baptist-university | Missouri Baptist University | Saint Louis, MO | https://www.mobap.edu/
grand-view-university | Grand View University | Des Moines, IA | https://www.grandview.edu/
king-s-college | King's College | Wilkes-Barre, PA | https://www.kings.edu/
los-angeles-pacific-university | Los Angeles Pacific University | San Dimas, CA | https://www.lapu.edu/
texas-tech-university-health-sciences-center | Texas Tech University Health Sciences Center | Lubbock, TX | https://www.ttuhsc.edu/
montana-technological-university | Montana Technological University | Butte, MT | https://www.mtech.edu/
nelson-university | Nelson University | Waxahachie, TX | https://www.nelson.edu/
newberry-college | Newberry College | Newberry, SC | https://www.newberry.edu/
belhaven-university | Belhaven University | Jackson, MS | https://www.belhaven.edu/
