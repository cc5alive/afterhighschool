# Task: find "What's special" facts for 50 US colleges (file 22 of 27)

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

hollins-university | Hollins University | Roanoke, VA | https://www.hollins.edu/
davis-and-elkins-college | Davis & Elkins College | Elkins, WV | https://www.dewv.edu/
randolph-college | Randolph College | Lynchburg, VA | https://www.randolphcollege.edu/
pfeiffer-university | Pfeiffer University | Misenheimer, NC | https://www.pfeiffer.edu/
lyon-college | Lyon College | Batesville, AR | https://www.lyon.edu/
thomas-college | Thomas College | Waterville, ME | https://www.thomas.edu/
northwest-university | Northwest University | Kirkland, WA | https://www.northwestu.edu/
holy-cross-college | Holy Cross College | Notre Dame, IN | https://www.hcc-nd.edu/
tougaloo-college | Tougaloo College | Tougaloo, MS | https://www.tougaloo.edu/
westminster-college-mo | Westminster College | Fulton, MO | https://www.wcmo.edu/
minerva-university | Minerva University | San Francisco, CA | https://www.minerva.edu/
lagrange-college | LaGrange College | Lagrange, GA | https://www.lagrange.edu/
drury-university-college-of-continuing-professional-studies | Drury University-College of Continuing Professional Studies | Springfield, MO | https://www.drury.edu/go/
alverno-college | Alverno College | Milwaukee, WI | https://www.alverno.edu/
mount-mary-university | Mount Mary University | Milwaukee, WI | https://www.mtmary.edu/
briar-cliff-university | Briar Cliff University | Sioux City, IA | https://www.briarcliff.edu/
clarkson-college | Clarkson College | Omaha, NE | https://www.clarksoncollege.edu/
ohio-state-university-lima-campus | Ohio State University-Lima Campus | Lima, OH | https://lima.osu.edu/
paul-quinn-college | Paul Quinn College | Dallas, TX | https://paulquinn.edu/
pennsylvania-state-university-penn-state-schuylkill | Pennsylvania State University-Penn State Schuylkill | Schuylkill Haven, PA | https://schuylkill.psu.edu/
hult-international-business-school | Hult International Business School | Cambridge, MA | https://www.hult.edu/
cheyney-university-of-pennsylvania | Cheyney University of Pennsylvania | Cheyney, PA | https://www.cheyney.edu/
harrisburg-university-of-science-and-technology | Harrisburg University of Science and Technology | Harrisburg, PA | https://www.harrisburgu.edu/
bethany-college-wv | Bethany College | Bethany, WV | https://www.bethanywv.edu/
bluefield-university | Bluefield University | Bluefield, VA | https://www.bluefield.edu/
texas-college | Texas College | Tyler, TX | https://www.texascollege.edu/
north-american-university | North American University | Stafford, TX | https://www.na.edu/
parker-university | Parker University | Dallas, TX | https://www.parker.edu/
southern-university-law-center | Southern University Law Center | Baton Rouge, LA | https://www.sulc.edu/
trine-university-regional-non-traditional-campuses | Trine University-Regional/Non-Traditional Campuses | Angola, IN | https://trine.edu/online/index.aspx
chowan-university | Chowan University | Murfreesboro, NC | https://www.chowan.edu/
villa-maria-college | Villa Maria College | Buffalo, NY | https://www.villa.edu/
ozark-christian-college | Ozark Christian College | Joplin, MO | https://www.occ.edu/
talmudical-seminary-of-bobov | Talmudical Seminary of Bobov | Brooklyn, NY | https://www.independentrabbinicalcolleges.org/
university-of-maine-at-fort-kent | University of Maine at Fort Kent | Fort Kent, ME | https://www.umfk.maine.edu/
bon-secours-memorial-college-of-nursing | Bon Secours Memorial College of Nursing | Richmond, VA | https://www.bsmcon.edu/
wheeling-university | Wheeling University | Wheeling, WV | https://www.wheeling.edu/
florida-college | Florida College | Temple Terrace, FL | https://www.floridacollege.edu/
southeastern-baptist-theological-seminary | Southeastern Baptist Theological Seminary | Wake Forest, NC | https://www.judsoncollege.com/
spalding-university | Spalding University | Louisville, KY | https://www.spalding.edu/
bluffton-university | Bluffton University | Bluffton, OH | https://www.bluffton.edu/
le-moyne-owen-college | Le Moyne-Owen College | Memphis, TN | https://www.loc.edu/
paul-smiths-college-of-arts-and-science | Paul Smiths College of Arts and Science | Paul Smiths, NY | https://www.paulsmiths.edu/
jarvis-christian-university | Jarvis Christian University | Hawkins, TX | https://www.jarvis.edu/
allen-university | Allen University | Columbia, SC | https://www.allenuniversity.edu/
southwestern-adventist-university | Southwestern Adventist University | Keene, TX | https://www.swau.edu/
bethany-college-ks | Bethany College | Lindsborg, KS | https://www.bethanylb.edu/
university-of-minnesota-rochester | University of Minnesota-Rochester | Rochester, MN | https://r.umn.edu/
wesleyan-college | Wesleyan College | Macon, GA | https://www.wesleyancollege.edu/
alaska-bible-college | Alaska Bible College | Palmer, AK | https://www.akbible.edu/
