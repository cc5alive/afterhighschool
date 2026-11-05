# Task: find "What's special" facts for 50 US colleges (file 20 of 27)

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

university-of-oklahoma-health-sciences-center | University of Oklahoma-Health Sciences Center | Oklahoma City, OK | https://ouhsc.edu/
virginia-union-university | Virginia Union University | Richmond, VA | https://www.vuu.edu/
hood-college | Hood College | Frederick, MD | https://www.hood.edu/
juniata-college | Juniata College | Huntingdon, PA | https://www.juniata.edu/
mcmurry-university | McMurry University | Abilene, TX | https://mcm.edu/
university-of-virginia-s-college-at-wise | University of Virginia's College at Wise | Wise, VA | https://www.uvawise.edu/
dickinson-state-university | Dickinson State University | Dickinson, ND | https://www.dickinsonstate.edu/
fisk-university | Fisk University | Nashville, TN | https://www.fisk.edu/
huston-tillotson-university | Huston-Tillotson University | Austin, TX | https://www.htu.edu/
california-institute-of-technology | California Institute of Technology | Pasadena, CA | https://www.caltech.edu/
united-states-merchant-marine-academy | United States Merchant Marine Academy | Kings Point, NY | https://www.usmma.edu/
hampden-sydney-college | Hampden-Sydney College | Hampden-Sydney, VA | https://www.hsc.edu/
webber-international-university | Webber International University | Babson Park, FL | https://www.webber.edu/
gallaudet-university | Gallaudet University | Washington, DC | https://gallaudet.edu/
heritage-university | Heritage University | Toppenish, WA | https://www.heritage.edu/
kansas-city-art-institute | Kansas City Art Institute | Kansas City, MO | https://www.kcai.edu/
simpson-university | Simpson University | Redding, CA | https://www.simpsonu.edu/
culver-stockton-college | Culver-Stockton College | Canton, MO | https://www.culver.edu/
cal-poly-maritime-academy | Cal Poly Maritime Academy | Vallejo, CA | https://maritime.calpoly.edu/
peirce-college | Peirce College | Philadelphia, PA | https://www.peirce.edu/
graceland-university-lamoni | Graceland University-Lamoni | Lamoni, IA | https://www.graceland.edu/
malone-university | Malone University | Canton, OH | https://www.malone.edu/
crown-college | Crown College | Saint Bonifacius, MN | https://www.crown.edu/
pennsylvania-state-university-penn-state-scranton | Pennsylvania State University-Penn State Scranton | Dunmore, PA | https://scranton.psu.edu/
rochester-christian-university | Rochester Christian University | Rochester Hills, MI | https://rcu.edu/
thiel-college | Thiel College | Greenville, PA | https://www.thiel.edu/
tusculum-university | Tusculum University | Greeneville, TN | https://www.tusculum.edu/
spring-hill-college | Spring Hill College | Mobile, AL | https://www.shc.edu/
bloomfield-college-of-montclair-state-university | Bloomfield College of Montclair State University | Bloomfield, NJ | https://www.bloomfield.edu/
nebraska-methodist-college-of-nursing-and-allied-health | Nebraska Methodist College of Nursing & Allied Health | Omaha, NE | https://www.methodistcollege.edu/
bennington-college | Bennington College | Bennington, VT | https://www.bennington.edu/
woodbury-university | Woodbury University | Burbank, CA | https://woodbury.edu/
hiram-college | Hiram College | Hiram, OH | https://www.hiram.edu/
cairn-university-langhorne | Cairn University-Langhorne | Langhorne, PA | https://www.cairn.edu/
emmanuel-university | Emmanuel University | Franklin Springs, GA | https://eu.edu/
goshen-college | Goshen College | Goshen, IN | https://www.goshen.edu/
colby-sawyer-college | Colby-Sawyer College | New London, NH | https://www.colby-sawyer.edu/
keystone-college | Keystone College | La Plume, PA | https://www.keystone.edu/
baptist-health-sciences-university | Baptist Health Sciences University | Memphis, TN | https://www.baptistu.edu/
hallmark-university | Hallmark University | San Antonio, TX | https://www.hallmark.edu/
university-of-the-ozarks | University of the Ozarks | Clarksville, AR | https://ozarks.edu/
erskine-college | Erskine College | Due West, SC | https://www.erskine.edu/
be-er-yaakov-talmudic-seminary | Be'er Yaakov Talmudic Seminary | Spring Valley, NY | https://www.byts.edu/
whittier-college | Whittier College | Whittier, CA | https://www.whittier.edu/
montreat-college | Montreat College | Montreat, NC | https://www.montreat.edu/
montana-state-university-northern | Montana State University-Northern | Havre, MT | https://www.msun.edu/
ohio-dominican-university | Ohio Dominican University | Columbus, OH | https://www.ohiodominican.edu/
warner-university | Warner University | Lake Wales, FL | https://www.warner.edu/
young-harris-college | Young Harris College | Young Harris, GA | https://www.yhc.edu/
eastern-mennonite-university | Eastern Mennonite University | Harrisonburg, VA | https://emu.edu/
