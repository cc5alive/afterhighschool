# Task: find "What's special" facts for 50 US colleges (file 26 of 27)

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

louisiana-state-university-health-sciences-center-new-orleans | Louisiana State University Health Sciences Center-New Orleans | New Orleans, LA | https://www.lsuhsc.edu/
ohio-christian-university | Ohio Christian University | Circleville, OH | https://www.ohiochristian.edu/
california-institute-of-the-arts | California Institute of the Arts | Valencia, CA | https://www.calarts.edu/
pennsylvania-state-university-penn-state-lehigh-valley | Pennsylvania State University-Penn State Lehigh Valley | Center Valley, PA | https://lehighvalley.psu.edu/
saint-mary-of-the-woods-college | Saint Mary-of-the-Woods College | Saint Mary of the Woods, IN | https://www.smwc.edu/
lake-erie-college | Lake Erie College | Painesville, OH | https://www.lec.edu/
presbyterian-college | Presbyterian College | Clinton, SC | https://www.presby.edu/
newman-university | Newman University | Wichita, KS | https://www.newmanu.edu/
the-southern-baptist-theological-seminary | The Southern Baptist Theological Seminary | Louisville, KY | https://www.sbts.edu/
tennessee-wesleyan-university | Tennessee Wesleyan University | Athens, TN | https://www.tnwesleyan.edu/
kentucky-wesleyan-college | Kentucky Wesleyan College | Owensboro, KY | https://kwc.edu/
coker-university | Coker University | Hartsville, SC | https://coker.edu/
rocky-mountain-college | Rocky Mountain College | Billings, MT | https://www.rocky.edu/
university-of-saint-joseph | University of Saint Joseph | West Hartford, CT | https://www.usj.edu/
miami-university-middletown | Miami University-Middletown | Middletown, OH | https://miamioh.edu/regionals/
milwaukee-institute-of-art-and-design | Milwaukee Institute of Art & Design | Milwaukee, WI | https://www.miad.edu/
agnes-scott-college | Agnes Scott College | Decatur, GA | https://www.agnesscott.edu/
oregon-health-and-science-university | Oregon Health & Science University | Portland, OR | https://www.ohsu.edu/
ottawa-university-surprise | Ottawa University-Surprise | Surprise, AZ | https://www.ottawa.edu/ouaz/home
cedar-crest-college | Cedar Crest College | Allentown, PA | https://www.cedarcrest.edu/
westminster-university | Westminster University | Salt Lake City, UT | https://www.westminsteru.edu/
wilberforce-university | Wilberforce University | Wilberforce, OH | https://www.wilberforce.edu/
franciscan-missionaries-of-our-lady-university | Franciscan Missionaries of Our Lady University | Baton Rouge, LA | https://www.franu.edu/
trinity-christian-college | Trinity Christian College | Palos Heights, IL | https://www.trnty.edu/
milligan-university | Milligan University | Milligan, TN | https://www.milligan.edu/
brevard-college | Brevard College | Brevard, NC | https://www.brevard.edu/
chestnut-hill-college | Chestnut Hill College | Philadelphia, PA | https://www.chc.edu/
bryan-college-dayton | Bryan College-Dayton | Dayton, TN | https://www.bryan.edu/
hope-international-university | Hope International University | Fullerton, CA | https://www.hiu.edu/
pennsylvania-state-university-penn-state-mont-alto | Pennsylvania State University-Penn State Mont Alto | Mont Alto, PA | https://montalto.psu.edu/
saint-elizabeth-university | Saint Elizabeth University | Morristown, NJ | https://www.steu.edu/
bryan-college-of-health-sciences | Bryan College of Health Sciences | Lincoln, NE | https://www.bryanhealthcollege.edu/bcohs/
kettering-college | Kettering College | Kettering, OH | https://kc.edu/
millsaps-college | Millsaps College | Jackson, MS | https://www.millsaps.edu/
brescia-university | Brescia University | Owensboro, KY | https://www.brescia.edu/
the-university-of-texas-medical-branch-at-galveston | The University of Texas Medical Branch at Galveston | Galveston, TX | https://www.utmb.edu/
university-of-wisconsin-milwaukee-flex | University of Wisconsin-Milwaukee Flex | Milwaukee, WI | https://flex.wisconsin.edu/
maranatha-baptist-university | Maranatha Baptist University | Watertown, WI | https://www.mbu.edu/
cleveland-institute-of-art | Cleveland Institute of Art | Cleveland, OH | https://www.cia.edu/
manhattan-school-of-music | Manhattan School of Music | New York, NY | https://www.msmnyc.edu/
sterling-college-ks | Sterling College | Sterling, KS | https://www.sterling.edu/
roseman-university-of-health-sciences | Roseman University of Health Sciences | Henderson, NV | https://www.roseman.edu/
moore-college-of-art-and-design | Moore College of Art and Design | Philadelphia, PA | https://www.moore.edu/
cambridge-college | Cambridge College | Boston, MA | https://www.cambridgecollege.edu/
mount-carmel-college-of-nursing | Mount Carmel College of Nursing | Columbus, OH | https://www.mccn.edu/
calumet-college-of-saint-joseph | Calumet College of Saint Joseph | Whiting, IN | https://www.ccsj.edu/
university-of-providence | University of Providence | Great Falls, MT | https://www.uprovidence.edu/
eureka-college | Eureka College | Eureka, IL | https://www.eureka.edu/
herzing-university-kenosha | Herzing University-Kenosha | Kenosha, WI | https://www.herzing.edu/
bushnell-university | Bushnell University | Eugene, OR | https://www.bushnell.edu/
