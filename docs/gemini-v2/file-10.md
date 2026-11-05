# Task: find "What's special" facts for 50 US colleges (file 10 of 27)

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

siena-university | Siena University | Loudonville, NY | https://www.siena.edu/
florida-institute-of-technology | Florida Institute of Technology | Melbourne, FL | https://www.fit.edu/
lander-university | Lander University | Greenwood, SC | https://www.lander.edu/
harding-university | Harding University | Searcy, AR | https://www.harding.edu/
eastern-new-mexico-university-main-campus | Eastern New Mexico University-Main Campus | Portales, NM | https://www.enmu.edu/
hope-college | Hope College | Holland, MI | https://hope.edu/
york-college-of-pennsylvania | York College of Pennsylvania | York, PA | https://www.ycp.edu/
cuny-graduate-school-and-university-center | CUNY Graduate School and University Center | New York, NY | https://www.gc.cuny.edu/
pennsylvania-state-university-penn-state-erie-behrend-college | Pennsylvania State University-Penn State Erie-Behrend College | Erie, PA | https://behrend.psu.edu/
cuny-medgar-evers-college | CUNY Medgar Evers College | Brooklyn, NY | https://www.mec.cuny.edu/
university-of-st-thomas-tx | University of St Thomas | Houston, TX | https://www.stthom.edu/
embry-riddle-aeronautical-university-prescott | Embry-Riddle Aeronautical University-Prescott | Prescott, AZ | https://prescott.erau.edu/
abraham-baldwin-agricultural-college | Abraham Baldwin Agricultural College | Tifton, GA | https://www.abac.edu/
university-of-the-pacific | University of the Pacific | Stockton, CA | https://www.pacific.edu/
suny-at-purchase-college | SUNY at Purchase College | Purchase, NY | https://www.purchase.edu/
abilene-christian-university | Abilene Christian University | Abilene, TX | https://www.acu.edu/
bryant-university | Bryant University | Smithfield, RI | https://www.bryant.edu/
calvin-university | Calvin University | Grand Rapids, MI | https://www.calvin.edu/
point-loma-nazarene-university | Point Loma Nazarene University | San Diego, CA | https://www.pointloma.edu/
anderson-university-sc | Anderson University | Anderson, SC | https://www.andersonuniversity.edu/
indiana-university-southeast | Indiana University-Southeast | New Albany, IN | https://southeast.iu.edu/
molloy-university | Molloy University | Rockville Centre, NY | https://www.molloy.edu/
the-catholic-university-of-america | The Catholic University of America | Washington, DC | https://www.catholic.edu/
plymouth-state-university | Plymouth State University | Plymouth, NH | https://www.plymouth.edu/
st-joseph-s-university-new-york | St. Joseph's University-New York | Brooklyn, NY | https://www.sjny.edu/
bemidji-state-university | Bemidji State University | Bemidji, MN | https://www.bemidjistate.edu/
davenport-university | Davenport University | Grand Rapids, MI | https://www.davenport.edu/
endicott-college | Endicott College | Beverly, MA | https://www.endicott.edu/
college-of-the-holy-cross | College of the Holy Cross | Worcester, MA | https://www.holycross.edu/
rider-university | Rider University | Lawrenceville, NJ | https://www.rider.edu/
western-oregon-university | Western Oregon University | Monmouth, OR | https://wou.edu/
stevenson-university | Stevenson University | Owings Mills, MD | https://www.stevenson.edu/
saint-xavier-university | Saint Xavier University | Chicago, IL | https://www.sxu.edu/
st-olaf-college | St Olaf College | Northfield, MN | https://wp.stolaf.edu/
fort-lewis-college | Fort Lewis College | Durango, CO | https://fortlewis.edu/
minnesota-state-university-moorhead | Minnesota State University Moorhead | Moorhead, MN | https://www.mnstate.edu/
wesleyan-university | Wesleyan University | Middletown, CT | https://www.wesleyan.edu/
university-of-la-verne | University of La Verne | La Verne, CA | https://www.laverne.edu/
colorado-state-university-pueblo | Colorado State University Pueblo | Pueblo, CO | https://www.csupueblo.edu/
baker-college | Baker College | Owosso, MI | https://www.baker.edu/
missouri-southern-state-university | Missouri Southern State University | Joplin, MO | https://www.mssu.edu/
concordia-university-saint-paul | Concordia University-Saint Paul | Saint Paul, MN | https://www.csp.edu/
southeastern-oklahoma-state-university | Southeastern Oklahoma State University | Durant, OK | https://www.se.edu/
longwood-university | Longwood University | Farmville, VA | https://www.longwood.edu/
wayne-state-college | Wayne State College | Wayne, NE | https://www.wsc.edu/
elmhurst-university | Elmhurst University | Elmhurst, IL | https://www.elmhurst.edu/
university-of-indianapolis | University of Indianapolis | Indianapolis, IN | https://uindy.edu/
lipscomb-university | Lipscomb University | Nashville, TN | https://www.lipscomb.edu/
university-of-richmond | University of Richmond | University of Richmond, VA | https://www.richmond.edu/
university-of-west-alabama | University of West Alabama | Livingston, AL | https://www.uwa.edu/
