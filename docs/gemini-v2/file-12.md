# Task: find "What's special" facts for 50 US colleges (file 12 of 27)

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

indiana-institute-of-technology-college-of-professional-studies | Indiana Institute of Technology-College of Professional Studies | Fort Wayne, IN | https://cps.indianatech.edu/
fort-valley-state-university | Fort Valley State University | Fort Valley, GA | https://www.fvsu.edu/
campbell-university | Campbell University | Buies Creek, NC | https://www.campbell.edu/
wingate-university | Wingate University | Wingate, NC | https://www.wingate.edu/
indiana-university-northwest | Indiana University-Northwest | Gary, IN | https://northwest.iu.edu/
carthage-college | Carthage College | Kenosha, WI | https://www.carthage.edu/
university-of-maine-at-augusta | University of Maine at Augusta | Augusta, ME | https://www.uma.edu/
rogers-state-university | Rogers State University | Claremore, OK | https://www.rsu.edu/
florida-southern-college | Florida Southern College | Lakeland, FL | https://www.flsouthern.edu/
milwaukee-school-of-engineering | Milwaukee School of Engineering | Milwaukee, WI | https://www.msoe.edu/
niagara-university | Niagara University | Niagara University, NY | https://www.niagara.edu/
rollins-college | Rollins College | Winter Park, FL | https://www.rollins.edu/
tuskegee-university | Tuskegee University | Tuskegee, AL | https://www.tuskegee.edu/
francis-marion-university | Francis Marion University | Florence, SC | https://www.fmarion.edu/
xavier-university-of-louisiana | Xavier University of Louisiana | New Orleans, LA | https://www.xula.edu/
fairleigh-dickinson-university-metropolitan-campus | Fairleigh Dickinson University-Metropolitan Campus | Teaneck, NJ | https://www.fdu.edu/
regis-university | Regis University | Denver, CO | https://www.regis.edu/
montana-state-university-billings | Montana State University Billings | Billings, MT | https://www.msubillings.edu/
central-state-university | Central State University | Wilberforce, OH | https://www.centralstate.edu/
husson-university | Husson University | Bangor, ME | https://www.husson.edu/
lee-university | Lee University | Cleveland, TN | https://www.leeuniversity.edu/
olivet-nazarene-university | Olivet Nazarene University | Bourbonnais, IL | https://www.olivet.edu/
palm-beach-atlantic-university | Palm Beach Atlantic University | West Palm Beach, FL | https://www.pba.edu/
western-new-england-university | Western New England University | Springfield, MA | https://wne.edu/
fairmont-state-university | Fairmont State University | Fairmont, WV | https://www.fairmontstate.edu/
indiana-university-east | Indiana University-East | Richmond, IN | https://east.iu.edu/
framingham-state-university | Framingham State University | Framingham, MA | https://www.framingham.edu/
st-john-fisher-university | St. John Fisher University | Rochester, NY | https://www.sjf.edu/
dominican-university | Dominican University | River Forest, IL | https://www.dom.edu/
governors-state-university | Governors State University | University Park, IL | https://www.govst.edu/
gordon-state-college | Gordon State College | Barnesville, GA | https://www.gordonstate.edu/
smith-college | Smith College | Northampton, MA | https://www.smith.edu/
drake-university | Drake University | Des Moines, IA | https://www.drake.edu/
auburn-university-at-montgomery | Auburn University at Montgomery | Montgomery, AL | https://www.aum.edu/
stonehill-college | Stonehill College | Easton, MA | https://www.stonehill.edu/
carroll-university | Carroll University | Waukesha, WI | https://www.carrollu.edu/
university-of-hawaii-west-oahu | University of Hawaii-West Oahu | Kapolei, HI | https://westoahu.hawaii.edu/
mississippi-christian-university | Mississippi Christian University | Clinton, MS | https://www.mc.edu/
texas-a-and-m-university-victoria | Texas A&M University-Victoria | Victoria, TX | https://www.tamuv.edu/
truman-state-university | Truman State University | Kirksville, MO | https://www.truman.edu/
trinity-university | Trinity University | San Antonio, TX | https://new.trinity.edu/
augsburg-university | Augsburg University | Minneapolis, MN | https://www.augsburg.edu/
saint-edward-s-university | Saint Edward's University | Austin, TX | https://www.stedwards.edu/
cameron-university | Cameron University | Lawton, OK | https://www.cameron.edu/
augustana-college | Augustana College | Rock Island, IL | https://www.augustana.edu/
ohio-northern-university | Ohio Northern University | Ada, OH | https://www.onu.edu/
st-catherine-university | St Catherine University | Saint Paul, MN | https://www.stkate.edu/
east-central-university | East Central University | Ada, OK | https://www.ecok.edu/
holy-family-university | Holy Family University | Philadelphia, PA | https://www.holyfamily.edu/
athens-state-university | Athens State University | Athens, AL | https://www.athens.edu/
