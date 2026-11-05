# Task: find "What's special" facts for 50 US colleges (file 13 of 27)

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

vassar-college | Vassar College | Poughkeepsie, NY | https://www.vassar.edu/
le-moyne-college | Le Moyne College | Syracuse, NY | https://www.lemoyne.edu/
university-of-detroit-mercy | University of Detroit Mercy | Detroit, MI | https://www.udmercy.edu/
university-of-connecticut-stamford | University of Connecticut-Stamford | Stamford, CT | https://stamford.uconn.edu/
north-central-college | North Central College | Naperville, IL | https://northcentralcollege.edu/
norwich-university | Norwich University | Northfield, VT | https://www.norwich.edu/
georgia-southwestern-state-university | Georgia Southwestern State University | Americus, GA | https://gsw.edu/
university-of-mary | University of Mary | Bismarck, ND | https://www.umary.edu/
bard-college | Bard College | Annandale-On-Hudson, NY | https://www.bard.edu/
eastern-university | Eastern University | Saint Davids, PA | https://www.eastern.edu/about/student-consumer-information
dallas-baptist-university | Dallas Baptist University | Dallas, TX | https://www.dbu.edu/
pacific-lutheran-university | Pacific Lutheran University | Tacoma, WA | https://www.plu.edu/
hawaii-pacific-university | Hawaii Pacific University | Honolulu, HI | https://www.hpu.edu/
flagler-college | Flagler College | Saint Augustine, FL | https://www.flagler.edu/
university-of-maryland-eastern-shore | University of Maryland Eastern Shore | Princess Anne, MD | https://wwwcp.umes.edu/
lewis-clark-state-college | Lewis-Clark State College | Lewiston, ID | https://www.lcsc.edu/
denison-university | Denison University | Granville, OH | https://www.denison.edu/
furman-university | Furman University | Greenville, SC | https://www.furman.edu/
pennsylvania-state-university-penn-state-altoona | Pennsylvania State University-Penn State Altoona | Altoona, PA | https://altoona.psu.edu/
gannon-university | Gannon University | Erie, PA | https://www.gannon.edu/
alcorn-state-university | Alcorn State University | Alcorn State, MS | https://www.alcorn.edu/
indiana-university-kokomo | Indiana University-Kokomo | Kokomo, IN | https://kokomo.iu.edu/
shepherd-university | Shepherd University | Shepherdstown, WV | https://www.shepherd.edu/
point-park-university | Point Park University | Pittsburgh, PA | https://www.pointpark.edu/
trine-university | Trine University | Angola, IN | https://www.trine.edu/
southwest-minnesota-state-university | Southwest Minnesota State University | Marshall, MN | https://www.smsu.edu/
rose-hulman-institute-of-technology | Rose-Hulman Institute of Technology | Terre Haute, IN | https://www.rose-hulman.edu/
webster-university | Webster University | Saint Louis, MO | https://www.webster.edu/
stetson-university | Stetson University | DeLand, FL | https://www.stetson.edu/
california-lutheran-university | California Lutheran University | Thousand Oaks, CA | https://www.callutheran.edu/
utica-university | Utica University | Utica, NY | https://www.utica.edu/
john-carroll-university | John Carroll University | University Heights, OH | https://jcu.edu/
dickinson-college | Dickinson College | Carlisle, PA | https://www.dickinson.edu/
benedictine-college | Benedictine College | Atchison, KS | https://www.benedictine.edu/
marian-university-in | Marian University | Indianapolis, IN | https://www.marian.edu/
university-of-illinois-springfield | University of Illinois Springfield | Springfield, IL | https://www.uis.edu/
messiah-university | Messiah University | Mechanicsburg, PA | https://www.messiah.edu/
university-of-charleston | University of Charleston | Charleston, WV | https://www.ucwv.edu/
shawnee-state-university | Shawnee State University | Portsmouth, OH | https://www.shawnee.edu/
berry-college | Berry College | Mount Berry, GA | https://www.berry.edu/
united-talmudical-seminary | United Talmudical Seminary | Brooklyn, NY | https://utsny.edu/
emporia-state-university | Emporia State University | Emporia, KS | https://www.emporia.edu/
the-university-of-findlay | The University of Findlay | Findlay, OH | https://www.findlay.edu/
missouri-western-state-university | Missouri Western State University | Saint Joseph, MO | https://www.missouriwestern.edu/
grove-city-college | Grove City College | Grove City, PA | https://www.gcc.edu/
clark-university | Clark University | Worcester, MA | https://www.clarku.edu/
st-thomas-university | St. Thomas University | Miami Gardens, FL | https://www.stu.edu/
barry-university | Barry University | Miami, FL | https://www.barry.edu/
johnson-and-wales-university-online | Johnson & Wales University-Online | Providence, RI | https://online.jwu.edu/?_ga=2.36357734.752362341.1629739669-391300583.1600981500
william-carey-university | William Carey University | Hattiesburg, MS | https://www.wmcarey.edu/
