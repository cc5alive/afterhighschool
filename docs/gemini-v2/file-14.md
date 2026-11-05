# Task: find "What's special" facts for 50 US colleges (file 14 of 27)

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

ashland-university | Ashland University | Ashland, OH | https://www.ashland.edu/
concordia-university-wisconsin | Concordia University-Wisconsin | Mequon, WI | https://www.cuw.edu/
clarkson-university | Clarkson University | Potsdam, NY | https://www.clarkson.edu/
mercyhurst-university | Mercyhurst University | Erie, PA | https://www.mercyhurst.edu/
eastern-oregon-university | Eastern Oregon University | La Grande, OR | https://www.eou.edu/
mount-holyoke-college | Mount Holyoke College | South Hadley, MA | https://www.mtholyoke.edu/
susquehanna-university | Susquehanna University | Selinsgrove, PA | https://www.susqu.edu/
bellarmine-university | Bellarmine University | Louisville, KY | https://www.bellarmine.edu/
the-evergreen-state-college | The Evergreen State College | Olympia, WA | https://www.evergreen.edu/
university-of-hawaii-at-hilo | University of Hawaii at Hilo | Hilo, HI | https://hilo.hawaii.edu/
otterbein-university | Otterbein University | Westerville, OH | https://www.otterbein.edu/
louisiana-state-university-shreveport | Louisiana State University-Shreveport | Shreveport, LA | https://www.lsus.edu/
alvernia-university | Alvernia University | Reading, PA | https://www.alvernia.edu/
university-of-montevallo | University of Montevallo | Montevallo, AL | https://www.montevallo.edu/
trinity-college | Trinity College | Hartford, CT | https://www.trincoll.edu/
saint-peter-s-university | Saint Peter's University | Jersey City, NJ | https://www.saintpeters.edu/
university-of-new-england | University of New England | Biddeford, ME | https://www.une.edu/
macalester-college | Macalester College | Saint Paul, MN | https://www.macalester.edu/
desales-university | DeSales University | Center Valley, PA | https://www.desales.edu/
salve-regina-university | Salve Regina University | Newport, RI | https://www.salve.edu/
wheaton-college | Wheaton College | Wheaton, IL | https://www.wheaton.edu/
lewis-and-clark-college | Lewis & Clark College | Portland, OR | https://www.lclark.edu/
shenandoah-university | Shenandoah University | Winchester, VA | https://www.su.edu/
cumberland-university | Cumberland University | Lebanon, TN | https://www.cumberland.edu/
gettysburg-college | Gettysburg College | Gettysburg, PA | https://www.gettysburg.edu/
central-methodist-university-college-of-graduate-and-extended-studies | Central Methodist University-College of Graduate and Extended Studies | Fayette, MO | https://www.centralmethodist.edu/
saint-anselm-college | Saint Anselm College | Manchester, NH | https://www.anselm.edu/
carleton-college | Carleton College | Northfield, MN | https://www.carleton.edu/
rhode-island-school-of-design | Rhode Island School of Design | Providence, RI | https://www.risd.edu/
valparaiso-university | Valparaiso University | Valparaiso, IN | https://www.valpo.edu/
dakota-state-university | Dakota State University | Madison, SD | https://dsu.edu/
south-dakota-school-of-mines-and-technology | South Dakota School of Mines and Technology | Rapid City, SD | https://www.sdsmt.edu/
minot-state-university | Minot State University | Minot, ND | https://www.minotstateu.edu/
university-of-south-carolina-beaufort | University of South Carolina Beaufort | Bluffton, SC | https://www.uscb.edu/
tiffin-university | Tiffin University | Tiffin, OH | https://www.tiffin.edu/
university-of-redlands | University of Redlands | Redlands, CA | https://www.redlands.edu/
union-college | Union College | Schenectady, NY | https://www.union.edu/
miami-university-hamilton | Miami University-Hamilton | Hamilton, OH | https://miamioh.edu/regionals/
wayland-baptist-university | Wayland Baptist University | Plainview, TX | https://www.wbu.edu/
western-new-mexico-university | Western New Mexico University | Silver City, NM | https://wnmu.edu/
taylor-university | Taylor University | Upland, IN | https://www.taylor.edu/
art-center-college-of-design | Art Center College of Design | Pasadena, CA | https://www.artcenter.edu/
colorado-college | Colorado College | Colorado Springs, CO | https://www.coloradocollege.edu/
st-bonaventure-university | St Bonaventure University | Saint Bonaventure, NY | https://www.sbu.edu/
bob-jones-university | Bob Jones University | Greenville, SC | https://www.bju.edu/
point-university | Point University | West Point, GA | https://point.edu/
university-of-mount-union | University of Mount Union | Alliance, OH | https://www.mountunion.edu/
upper-iowa-university | Upper Iowa University | Fayette, IA | https://www.uiu.edu/
fairleigh-dickinson-university-florham-campus | Fairleigh Dickinson University-Florham Campus | Madison, NJ | https://www.fdu.edu/
wilkes-university | Wilkes University | Wilkes-Barre, PA | https://www.wilkes.edu/
