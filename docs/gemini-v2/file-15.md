# Task: find "What's special" facts for 50 US colleges (file 15 of 27)

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

texas-a-and-m-university-texarkana | Texas A&M University-Texarkana | Texarkana, TX | https://www.tamut.edu/
elizabeth-city-state-university | Elizabeth City State University | Elizabeth City, NC | https://www.ecsu.edu/
indiana-wesleyan-university-marion | Indiana Wesleyan University-Marion | Marion, IN | https://www.indwes.edu/
northwood-university | Northwood University | Midland, MI | https://www.northwood.edu/
augustana-university | Augustana University | Sioux Falls, SD | https://www.augie.edu/
la-salle-university | La Salle University | Philadelphia, PA | https://www.lasalle.edu/
st-mary-s-university | St. Mary's University | San Antonio, TX | https://www.stmarytx.edu/
moravian-university | Moravian University | Bethlehem, PA | https://www.moravian.edu/
arcadia-university | Arcadia University | Glenside, PA | https://www.arcadia.edu/
saint-mary-s-college-of-california | Saint Mary's College of California | Moraga, CA | https://www.stmarys-ca.edu/
reach-university | Reach University | Oakland, CA | https://www.reach.edu/
benedictine-university | Benedictine University | Lisle, IL | https://ben.edu/
connecticut-college | Connecticut College | New London, CT | https://www.conncoll.edu/
vanguard-university-of-southern-california | Vanguard University of Southern California | Costa Mesa, CA | https://www.vanguard.edu/
black-hills-state-university | Black Hills State University | Spearfish, SD | https://www.bhsu.edu/
st-lawrence-university | St Lawrence University | Canton, NY | https://www.stlawu.edu/
saint-ambrose-university | Saint Ambrose University | Davenport, IA | https://www.sau.edu/
university-of-maine-at-presque-isle | University of Maine at Presque Isle | Presque Isle, ME | https://www.umpi.edu/
depauw-university | DePauw University | Greencastle, IN | https://www.depauw.edu/
suny-college-of-agriculture-and-technology-at-cobleskill | SUNY College of Agriculture and Technology at Cobleskill | Cobleskill, NY | https://www.cobleskill.edu/
eckerd-college | Eckerd College | Saint Petersburg, FL | https://www.eckerd.edu/
oklahoma-christian-university | Oklahoma Christian University | Edmond, OK | https://www.oc.edu/
gustavus-adolphus-college | Gustavus Adolphus College | Saint Peter, MN | https://gustavus.edu/
occidental-college | Occidental College | Los Angeles, CA | https://www.oxy.edu/
nazareth-university | Nazareth University | Rochester, NY | https://www2.naz.edu/
pennsylvania-state-university-penn-state-berks | Pennsylvania State University-Penn State Berks | Reading, PA | https://berks.psu.edu/
bethel-university-mn | Bethel University | Saint Paul, MN | https://www.bethel.edu/
elizabethtown-college | Elizabethtown College | Elizabethtown, PA | https://www.etown.edu/
whitworth-university | Whitworth University | Spokane, WA | https://www.whitworth.edu/
gardner-webb-university | Gardner-Webb University | Boiling Springs, NC | https://www.gardner-webb.edu/
emmanuel-college | Emmanuel College | Boston, MA | https://www.emmanuel.edu/
suny-polytechnic-institute | SUNY Polytechnic Institute | Utica, NY | https://www.sunypoly.edu/
coppin-state-university | Coppin State University | Baltimore, MD | https://www.coppin.edu/
suny-college-of-environmental-science-and-forestry | SUNY College of Environmental Science and Forestry | Syracuse, NY | https://www.esf.edu/
rhodes-college | Rhodes College | Memphis, TN | https://www.rhodes.edu/
massachusetts-college-of-art-and-design | Massachusetts College of Art and Design | Boston, MA | https://massart.edu/
concordia-college-at-moorhead | Concordia College at Moorhead | Moorhead, MN | https://www.concordiacollege.edu/
waldorf-university | Waldorf University | Forest City, IA | https://www.waldorf.edu/
suny-college-at-potsdam | SUNY College at Potsdam | Potsdam, NY | https://www.potsdam.edu/
charter-oak-state-college | Charter Oak State College | New Britain, CT | https://www.charteroak.edu/
north-greenville-university | North Greenville University | Tigerville, SC | https://www.ngu.edu/
north-park-university | North Park University | Chicago, IL | https://www.northpark.edu/
wofford-college | Wofford College | Spartanburg, SC | https://www.wofford.edu/
lake-forest-college | Lake Forest College | Lake Forest, IL | https://www.lakeforest.edu/
marymount-university | Marymount University | Arlington, VA | https://www.marymount.edu/
university-of-pittsburgh-johnstown | University of Pittsburgh-Johnstown | Johnstown, PA | https://www.upj.pitt.edu/
university-of-arkansas-at-pine-bluff | University of Arkansas at Pine Bluff | Pine Bluff, AR | https://www.uapb.edu/
university-of-wisconsin-superior | University of Wisconsin-Superior | Superior, WI | https://www.uwsuper.edu/
northeastern-university-professional-programs | Northeastern University Professional Programs | Boston, MA | https://www.northeastern.edu/
franklin-and-marshall-college | Franklin and Marshall College | Lancaster, PA | https://www.fandm.edu/
