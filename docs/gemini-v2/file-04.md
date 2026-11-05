# Task: find "What's special" facts for 50 US colleges (file 4 of 27)

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

texas-christian-university | Texas Christian University | Fort Worth, TX | https://www.tcu.edu/
national-university | National University | San Diego, CA | https://www.nu.edu/
wichita-state-university | Wichita State University | Wichita, KS | https://www.wichita.edu/
university-of-maryland-baltimore-county | University of Maryland-Baltimore County | Baltimore, MD | https://umbc.edu/
cuny-lehman-college | CUNY Lehman College | Bronx, NY | https://www.lehman.edu/
the-university-of-tampa | The University of Tampa | Tampa, FL | https://www.ut.edu/
college-of-charleston | College of Charleston | Charleston, SC | https://www.charleston.edu/
cuny-brooklyn-college | CUNY Brooklyn College | Brooklyn, NY | https://www.brooklyn.edu/
university-of-colorado-denver-anschutz-medical-campus | University of Colorado Denver/Anschutz Medical Campus | Denver, CO | https://www.ucdenver.edu/
fordham-university | Fordham University | Bronx, NY | https://www.fordham.edu/
coastal-carolina-university | Coastal Carolina University | Conway, SC | https://www.coastal.edu/
bellevue-university | Bellevue University | Bellevue, NE | https://www.bellevue.edu/
university-of-central-oklahoma | University of Central Oklahoma | Edmond, OK | https://www.uco.edu/
howard-university | Howard University | Washington, DC | https://www.howard.edu/
university-of-southern-mississippi | University of Southern Mississippi | Hattiesburg, MS | https://www.usm.edu/
the-university-of-tennessee-chattanooga | The University of Tennessee-Chattanooga | Chattanooga, TN | https://utc.edu/
eastern-michigan-university | Eastern Michigan University | Ypsilanti, MI | https://www.emich.edu/
central-michigan-university | Central Michigan University | Mount Pleasant, MI | https://www.cmich.edu/
western-carolina-university | Western Carolina University | Cullowhee, NC | https://www.wcu.edu/
east-tennessee-state-university | East Tennessee State University | Johnson City, TN | https://www.etsu.edu/
university-of-north-dakota | University of North Dakota | Grand Forks, ND | https://und.edu/
east-texas-a-and-m-university | East Texas A&M University | Commerce, TX | https://www.etamu.edu/
california-state-university-east-bay | California State University-East Bay | Hayward, CA | https://www.csueastbay.edu/
troy-university | Troy University | Troy, AL | https://www.troy.edu/
university-of-toledo | University of Toledo | Toledo, OH | https://www.utoledo.edu/
fort-hays-state-university | Fort Hays State University | Hays, KS | https://www.fhsu.edu/
college-of-staten-island-cuny | College of Staten Island CUNY | Staten Island, NY | https://www.csi.cuny.edu/
farmingdale-state-college | Farmingdale State College | Farmingdale, NY | https://www.farmingdale.edu/
southeastern-louisiana-university | Southeastern Louisiana University | Hammond, LA | https://www.southeastern.edu/
st-john-s-university-new-york | St. John's University-New York | Queens, NY | https://www.stjohns.edu/
north-dakota-state-university-main-campus | North Dakota State University-Main Campus | Fargo, ND | https://www.ndsu.edu/
university-of-wisconsin-whitewater | University of Wisconsin-Whitewater | Whitewater, WI | https://www.uww.edu/
university-of-west-florida | University of West Florida | Pensacola, FL | https://uwf.edu/
southern-utah-university | Southern Utah University | Cedar City, UT | https://www.suu.edu/
university-of-wisconsin-la-crosse | University of Wisconsin-La Crosse | La Crosse, WI | https://www.uwlax.edu/
commonwealth-university-of-pennsylvania | Commonwealth University of Pennsylvania | Bloomsburg, PA | https://www.commonwealthu.edu/
south-dakota-state-university | South Dakota State University | Brookings, SD | https://www.sdstate.edu/
embry-riddle-aeronautical-university-worldwide | Embry-Riddle Aeronautical University-Worldwide | Daytona Beach, FL | https://worldwide.erau.edu/
arkansas-state-university | Arkansas State University | Jonesboro, AR | https://www.astate.edu/
university-of-akron-main-campus | University of Akron Main Campus | Akron, OH | https://www.uakron.edu/
morgan-state-university | Morgan State University | Baltimore, MD | https://www.morgan.edu/
new-jersey-institute-of-technology | New Jersey Institute of Technology | Newark, NJ | https://www.njit.edu/
cleveland-state-university | Cleveland State University | Cleveland, OH | https://www.csuohio.edu/
university-of-wisconsin-eau-claire | University of Wisconsin-Eau Claire | Eau Claire, WI | https://www.uwec.edu/
university-of-south-alabama | University of South Alabama | Mobile, AL | https://www.southalabama.edu/
prairie-view-a-and-m-university | Prairie View A & M University | Prairie View, TX | https://www.pvamu.edu/
texas-woman-s-university | Texas Woman's University | Denton, TX | https://www.twu.edu/
southern-illinois-university-edwardsville | Southern Illinois University Edwardsville | Edwardsville, IL | https://www.siue.edu/
stephen-f-austin-state-university | Stephen F Austin State University | Nacogdoches, TX | https://www.sfasu.edu/
tennessee-technological-university | Tennessee Technological University | Cookeville, TN | https://www.tntech.edu/
