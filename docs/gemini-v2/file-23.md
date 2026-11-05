# Task: find "What's special" facts for 50 US colleges (file 23 of 27)

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

northpoint-college | Northpoint College | Wyoming, MI | https://www.northpointcollege.edu/
virginia-christian-college | Virginia Christian College | Dumfries, VA | https://www.vcc.edu/
columbia-southern-university | Columbia Southern University | Orange Beach, AL | https://www.columbiasouthern.edu/
los-angeles-film-school | Los Angeles Film School | Hollywood, CA | https://www.lafilm.edu/
school-of-visual-arts | School of Visual Arts | New York, NY | https://sva.edu/
west-coast-university-anaheim-orange-county | West Coast University-Anaheim-Orange County | Anaheim, CA | https://westcoastuniversity.edu/
west-coast-university-texas | West Coast University-Texas | Richardson, TX | https://westcoastuniversity.edu/
west-coast-university-ontario | West Coast University-Ontario | Ontario, CA | https://westcoastuniversity.edu/
digipen-institute-of-technology | DigiPen Institute of Technology | Redmond, WA | https://www.digipen.edu/
west-coast-university-miami | West Coast University-Miami | Doral, FL | https://westcoastuniversity.edu/
salem-university | Salem University | Salem, WV | https://www.salemu.edu/
five-towns-college | Five Towns College | Dix Hills, NY | https://www.ftc.edu/
lionel-university | Lionel University | Carpinteria, CA | https://lionel.edu/
los-angeles-college-of-music | Los Angeles College of Music | Pasadena, CA | https://www.lacm.edu/
newschool-of-architecture-and-design | Newschool of Architecture and Design | San Diego, CA | https://www.newschoolarch.edu/
west-coast-university-los-angeles | West Coast University-Los Angeles | North Hollywood, CA | https://westcoastuniversity.edu/
concordia-university-texas | Concordia University Texas | Austin, TX | https://www.concordia.edu/
northwestern-college | Northwestern College | Orange City, IA | https://www.nwciowa.edu/
fisher-college | Fisher College | Boston, MA | https://www.fisher.edu/
arizona-christian-university | Arizona Christian University | Glendale, AZ | https://arizonachristian.edu/
yeshivath-viznitz | Yeshivath Viznitz | Monsey, NY | https://yeshivathviznitz.com/
saint-martin-s-university | Saint Martin's University | Lacey, WA | https://www.stmartin.edu/
miles-college | Miles College | Fairfield, AL | https://www.miles.edu/
mount-saint-mary-college | Mount Saint Mary College | Newburgh, NY | https://www.msmc.edu/
university-of-maine-at-farmington | University of Maine at Farmington | Farmington, ME | https://www.umf.maine.edu/
city-university-of-seattle | City University of Seattle | Seattle, WA | https://www.cityu.edu/
university-of-pikeville | University of Pikeville | Pikeville, KY | https://www.upike.edu/
university-of-baltimore | University of Baltimore | Baltimore, MD | https://www.ubalt.edu/
mount-st-joseph-university | Mount St. Joseph University | Cincinnati, OH | https://www.msj.edu/
lesley-university | Lesley University | Cambridge, MA | https://www.lesley.edu/
piedmont-university | Piedmont University | Demorest, GA | https://www.piedmont.edu/
la-sierra-university | La Sierra University | Riverside, CA | https://lasierra.edu/
dominican-university-of-california | Dominican University of California | San Rafael, CA | https://www.dominican.edu/
bay-path-university | Bay Path University | Longmeadow, MA | https://www.baypath.edu/
edgewood-university | Edgewood University | Madison, WI | https://www.edgewood.edu/
mount-mercy-university | Mount Mercy University | Cedar Rapids, IA | https://www.mtmercy.edu/
dominican-university-new-york | Dominican University New York | Orangeburg, NY | https://www.duny.edu/
baker-university | Baker University | Baldwin City, KS | https://www.bakeru.edu/
hendrix-college | Hendrix College | Conway, AR | https://www.hendrix.edu/
georgetown-college | Georgetown College | Georgetown, KY | https://www.georgetowncollege.edu/
geneva-college | Geneva College | Beaver Falls, PA | https://www.geneva.edu/
glenville-state-university | Glenville State University | Glenville, WV | https://www.glenville.edu/
mount-aloysius-college | Mount Aloysius College | Cresson, PA | https://www.mtaloy.edu/
carroll-college | Carroll College | Helena, MT | https://www.carroll.edu/
peru-state-college | Peru State College | Peru, NE | https://www.peru.edu/
saint-michael-s-college | Saint Michael's College | Colchester, VT | https://www.smcvt.edu/
mary-baldwin-university | Mary Baldwin University | Staunton, VA | https://www.marybaldwin.edu/
dean-college | Dean College | Franklin, MA | https://www.dean.edu/
edward-waters-university | Edward Waters University | Jacksonville, FL | https://www.ew.edu/
hartwick-college | Hartwick College | Oneonta, NY | https://www.hartwick.edu/
