# Task: find "What's special" facts for 50 US colleges (file 1 of 27)

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

southern-new-hampshire-university | Southern New Hampshire University | Manchester, NH | https://www.snhu.edu/
grand-canyon-university | Grand Canyon University | Phoenix, AZ | https://www.gcu.edu/
university-of-central-florida | University of Central Florida | Orlando, FL | https://www.ucf.edu/
liberty-university | Liberty University | Lynchburg, VA | https://www.liberty.edu/
university-of-arizona | University of Arizona | Tucson, AZ | https://www.arizona.edu/
kennesaw-state-university | Kennesaw State University | Kennesaw, GA | https://www.kennesaw.edu/
florida-international-university | Florida International University | Miami, FL | https://www.fiu.edu/
california-state-university-fullerton | California State University-Fullerton | Fullerton, CA | https://www.fullerton.edu/
university-of-houston | University of Houston | Houston, TX | https://www.uh.edu/
indiana-university-bloomington | Indiana University-Bloomington | Bloomington, IN | https://bloomington.iu.edu/
university-of-south-florida | University of South Florida | Tampa, FL | https://www.usf.edu/
texas-state-university | Texas State University | San Marcos, TX | https://www.txst.edu/
california-state-university-long-beach | California State University-Long Beach | Long Beach, CA | https://www.csulb.edu/
san-diego-state-university | San Diego State University | San Diego, CA | https://www.sdsu.edu/
university-of-north-texas | University of North Texas | Denton, TX | https://www.unt.edu/
the-university-of-alabama | The University of Alabama | Tuscaloosa, AL | https://www.ua.edu/
brigham-young-university | Brigham Young University | Provo, UT | https://byu.edu/
california-state-university-northridge | California State University-Northridge | Northridge, CA | https://www.csun.edu/
texas-tech-university | Texas Tech University | Lubbock, TX | https://www.ttu.edu/
the-university-of-texas-at-arlington | The University of Texas at Arlington | Arlington, TX | https://www.uta.edu/
university-of-california-davis | University of California-Davis | Davis, CA | https://ucdavis.edu/
florida-state-university | Florida State University | Tallahassee, FL | https://www.fsu.edu/
university-of-georgia | University of Georgia | Athens, GA | https://www.uga.edu/
university-of-colorado-boulder | University of Colorado Boulder | Boulder, CO | https://www.colorado.edu/
oregon-state-university | Oregon State University | Corvallis, OR | https://oregonstate.edu/
louisiana-state-university-and-agricultural-and-mechanical-college | Louisiana State University and Agricultural & Mechanical College | Baton Rouge, LA | https://www.lsu.edu/
the-university-of-texas-at-san-antonio | The University of Texas at San Antonio | San Antonio, TX | https://www.utsa.edu/
the-university-of-tennessee-knoxville | The University of Tennessee-Knoxville | Knoxville, TN | https://www.utk.edu/
university-of-california-irvine | University of California-Irvine | Irvine, CA | https://www.uci.edu/
university-of-cincinnati-main-campus | University of Cincinnati-Main Campus | Cincinnati, OH | https://www.uc.edu/
university-of-south-carolina-columbia | University of South Carolina-Columbia | Columbia, SC | https://www.sc.edu/
university-of-arkansas | University of Arkansas | Fayetteville, AR | https://www.uark.edu/
the-university-of-texas-rio-grande-valley | The University of Texas Rio Grande Valley | Edinburg, TX | https://www.utrgv.edu/
california-state-university-sacramento | California State University-Sacramento | Sacramento, CA | https://www.csus.edu/
george-mason-university | George Mason University | Fairfax, VA | https://www.gmu.edu/
san-jose-state-university | San Jose State University | San Jose, CA | https://www.sjsu.edu/
north-carolina-state-university-at-raleigh | North Carolina State University at Raleigh | Raleigh, NC | https://www.ncsu.edu/
university-of-utah | University of Utah | Salt Lake City, UT | https://www.utah.edu/
auburn-university | Auburn University | Auburn, AL | https://www.auburn.edu/
georgia-state-university | Georgia State University | Atlanta, GA | https://www.gsu.edu/
colorado-state-university-fort-collins | Colorado State University-Fort Collins | Fort Collins, CO | https://colostate.edu/
iowa-state-university | Iowa State University | Ames, IA | https://www.iastate.edu/
california-state-polytechnic-university-pomona | California State Polytechnic University-Pomona | Pomona, CA | https://www.cpp.edu/
university-of-kentucky | University of Kentucky | Lexington, KY | https://www.uky.edu/
university-of-nevada-las-vegas | University of Nevada-Las Vegas | Las Vegas, NV | https://www.unlv.edu/
university-of-north-carolina-at-charlotte | University of North Carolina at Charlotte | Charlotte, NC | https://www.charlotte.edu/
university-of-missouri-columbia | University of Missouri-Columbia | Columbia, MO | https://missouri.edu/
florida-atlantic-university | Florida Atlantic University | Boca Raton, FL | https://www.fau.edu/
university-of-massachusetts-amherst | University of Massachusetts-Amherst | Amherst, MA | https://www.umass.edu/
clemson-university | Clemson University | Clemson, SC | https://www.clemson.edu/
