# Task: find "What's special" facts for 50 US colleges (file 3 of 27)

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

university-of-nevada-reno | University of Nevada-Reno | Reno, NV | https://www.unr.edu/
wayne-state-university | Wayne State University | Detroit, MI | https://wayne.edu/
syracuse-university | Syracuse University | Syracuse, NY | https://www.syracuse.edu/
savannah-college-of-art-and-design | Savannah College of Art and Design | Savannah, GA | https://www.scad.edu/
kansas-state-university | Kansas State University | Manhattan, KS | https://www.k-state.edu/
university-of-hawaii-at-manoa | University of Hawaii at Manoa | Honolulu, HI | https://manoa.hawaii.edu/
california-state-university-san-bernardino | California State University-San Bernardino | San Bernardino, CA | https://www.csusb.edu/
metropolitan-state-university-of-denver | Metropolitan State University of Denver | Denver, CO | https://www.msudenver.edu/
university-of-north-carolina-wilmington | University of North Carolina Wilmington | Wilmington, NC | https://www.uncw.edu/
california-state-university-san-marcos | California State University-San Marcos | San Marcos, CA | https://www.csusm.edu/
baylor-university | Baylor University | Waco, TX | https://www.baylor.edu/
university-of-louisville | University of Louisville | Louisville, KY | https://www.louisville.edu/
binghamton-university | Binghamton University | Vestal, NY | https://www.binghamton.edu/
montana-state-university | Montana State University | Bozeman, MT | https://www.montana.edu/
west-chester-university-of-pennsylvania | West Chester University of Pennsylvania | West Chester, PA | https://www.wcupa.edu/
depaul-university | DePaul University | Chicago, IL | https://www.depaul.edu/
university-of-north-carolina-at-greensboro | University of North Carolina at Greensboro | Greensboro, NC | https://www.uncg.edu/
ball-state-university | Ball State University | Muncie, IN | https://www.bsu.edu/
florida-gulf-coast-university | Florida Gulf Coast University | Fort Myers, FL | https://www.fgcu.edu/
indiana-university-indianapolis | Indiana University-Indianapolis | Indianapolis, IN | https://indianapolis.iu.edu/
california-state-university-chico | California State University-Chico | Chico, CA | https://www.csuchico.edu/
cuny-new-york-city-college-of-technology | CUNY New York City College of Technology | Brooklyn, NY | https://www.citytech.cuny.edu/
western-washington-university | Western Washington University | Bellingham, WA | https://wwu.edu/
university-of-rhode-island | University of Rhode Island | Kingston, RI | https://web.uri.edu/
university-of-north-florida | University of North Florida | Jacksonville, FL | https://www.unf.edu/
missouri-state-university-springfield | Missouri State University-Springfield | Springfield, MO | https://www.missouristate.edu/
drexel-university | Drexel University | Philadelphia, PA | https://drexel.edu/
rochester-institute-of-technology | Rochester Institute of Technology | Rochester, NY | https://www.rit.edu/
portland-state-university | Portland State University | Portland, OR | https://www.pdx.edu/
university-of-miami | University of Miami | Coral Gables, FL | https://www.miami.edu/
bowling-green-state-university-main-campus | Bowling Green State University-Main Campus | Bowling Green, OH | https://www.bgsu.edu/
university-of-memphis | University of Memphis | Memphis, TN | https://www.memphis.edu/
tarleton-state-university | Tarleton State University | Stephenville, TX | https://www.tarleton.edu/
north-carolina-a-and-t-state-university | North Carolina A & T State University | Greensboro, NC | https://www.ncat.edu/
western-kentucky-university | Western Kentucky University | Bowling Green, KY | https://www.wku.edu/
new-mexico-state-university-main-campus | New Mexico State University-Main Campus | Las Cruces, NM | https://www.nmsu.edu/
university-of-vermont | University of Vermont | Burlington, VT | https://www.uvm.edu/
loyola-university-chicago | Loyola University Chicago | Chicago, IL | https://www.luc.edu/
minnesota-state-university-mankato | Minnesota State University-Mankato | Mankato, MN | https://mnsu.edu/
university-of-alabama-at-birmingham | University of Alabama at Birmingham | Birmingham, AL | https://www.uab.edu/
cuny-john-jay-college-of-criminal-justice | CUNY John Jay College of Criminal Justice | New York, NY | https://www.jjay.cuny.edu/
excelsior-university | Excelsior University | Albany, NY | https://www.excelsior.edu/
university-of-massachusetts-boston | University of Massachusetts-Boston | Boston, MA | https://www.umb.edu/
university-of-nebraska-at-omaha | University of Nebraska at Omaha | Omaha, NE | https://www.unomaha.edu/
university-of-massachusetts-lowell | University of Massachusetts-Lowell | Lowell, MA | https://www.uml.edu/
kean-university | Kean University | Union, NJ | https://www.kean.edu/
georgia-gwinnett-college | Georgia Gwinnett College | Lawrenceville, GA | https://www.ggc.edu/
northern-illinois-university | Northern Illinois University | Dekalb, IL | https://www.niu.edu/
university-of-new-hampshire-main-campus | University of New Hampshire-Main Campus | Durham, NH | https://www.unh.edu/
george-washington-university | George Washington University | Washington, DC | https://www.gwu.edu/
