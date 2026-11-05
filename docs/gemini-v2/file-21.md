# Task: find "What's special" facts for 50 US colleges (file 21 of 27)

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

houghton-university | Houghton University | Houghton, NY | https://www.houghton.edu/
menlo-college | Menlo College | Atherton, CA | https://www.menlo.edu/
la-roche-university | La Roche University | Pittsburgh, PA | https://www.laroche.edu/
philander-smith-university | Philander Smith University | Little Rock, AR | https://www.philander.edu/
midwestern-baptist-theological-seminary | Midwestern Baptist Theological Seminary | Kansas City, MO | https://www.mbts.edu/
southern-wesleyan-university | Southern Wesleyan University | Central, SC | https://www.swu.edu/
laguna-college-of-art-and-design | Laguna College of Art and Design | Laguna Beach, CA | https://www.lcad.edu/
union-commonwealth-university | Union Commonwealth University | Barbourville, KY | https://www.unionky.edu/
truett-mcconnell-university | Truett McConnell University | Cleveland, GA | https://truett.edu/
johnson-university | Johnson University | Knoxville, TN | https://johnsonu.edu/
clarke-university | Clarke University | Dubuque, IA | https://www.clarke.edu/
herzing-university-minneapolis | Herzing University-Minneapolis | St. Louis Park, MN | https://www.herzing.edu/
cleary-university | Cleary University | Howell, MI | https://www.cleary.edu/
lane-college | Lane College | Jackson, TN | https://www.lanecollege.edu/
mayville-state-university | Mayville State University | Mayville, ND | https://www.mayvillestate.edu/
university-of-connecticut-waterbury-campus | University of Connecticut-Waterbury Campus | Waterbury, CT | https://waterbury.uconn.edu/
martin-luther-college | Martin Luther College | New Ulm, MN | https://www.mlc-wels.edu/
samuel-merritt-university | Samuel Merritt University | Oakland, CA | https://www.samuelmerritt.edu/
columbia-international-university | Columbia International University | Columbia, SC | https://www.ciu.edu/
grace-christian-university | Grace Christian University | Wyoming, MI | https://www.gracechristian.edu/
howard-payne-university | Howard Payne University | Brownwood, TX | https://www.hputx.edu/
massachusetts-college-of-liberal-arts | Massachusetts College of Liberal Arts | North Adams, MA | https://www.mcla.edu/
the-christ-college-of-nursing-and-health-sciences | The Christ College of Nursing and Health Sciences | Cincinnati, OH | https://www.thechristcollege.edu/
wiley-university | Wiley University | Marshall, TX | https://wileyc.edu/
north-central-university | North Central University | Minneapolis, MN | https://www.northcentral.edu/
notre-dame-of-maryland-university | Notre Dame of Maryland University | Baltimore, MD | https://www.ndm.edu/
elmira-college | Elmira College | Elmira, NY | https://www.elmira.edu/
greensboro-college | Greensboro College | Greensboro, NC | https://www.greensboro.edu/
judson-university | Judson University | Elgin, IL | https://www.judsonu.edu/
warren-wilson-college | Warren Wilson College | Swannanoa, NC | https://www.warren-wilson.edu/
stillman-college | Stillman College | Tuscaloosa, AL | https://stillman.edu/
minneapolis-college-of-art-and-design | Minneapolis College of Art and Design | Minneapolis, MN | https://mcad.edu/
concordia-university-ann-arbor | Concordia University Ann Arbor | Ann Arbor, MI | https://www.cuaa.edu/
monmouth-college | Monmouth College | Monmouth, IL | https://www.monmouthcollege.edu/
talladega-college | Talladega College | Talladega, AL | https://www.talladega.edu/
ferrum-college | Ferrum College | Ferrum, VA | https://www.ferrum.edu/
mount-marty-university | Mount Marty University | Yankton, SD | https://www.mountmarty.edu/
goldey-beacom-college | Goldey-Beacom College | Wilmington, DE | https://www.gbc.edu/
ohio-university-lancaster-campus | Ohio University-Lancaster Campus | Lancaster, OH | https://www.ohio.edu/lancaster/
ripon-college | Ripon College | Ripon, WI | https://www.ripon.edu/
centenary-college-of-louisiana | Centenary College of Louisiana | Shreveport, LA | https://www.centenary.edu/
corban-university | Corban University | Salem, OR | https://www.corban.edu/
oklahoma-wesleyan-university | Oklahoma Wesleyan University | Bartlesville, OK | https://www.okwu.edu/
louisiana-christian-university | Louisiana Christian University | Pineville, LA | https://www.lcuniversity.edu/
dakota-wesleyan-university | Dakota Wesleyan University | Mitchell, SD | https://www.dwu.edu/
earlham-college | Earlham College | Richmond, IN | https://earlham.edu/
ursuline-college | Ursuline College | Pepper Pike, OH | https://www.ursuline.edu/
bethany-lutheran-college | Bethany Lutheran College | Mankato, MN | https://www.blc.edu/
pennsylvania-state-university-penn-state-york | Pennsylvania State University-Penn State York | York, PA | https://york.psu.edu/
william-peace-university | William Peace University | Raleigh, NC | https://www.peace.edu/
