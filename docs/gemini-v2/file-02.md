# Task: find "What's special" facts for 50 US colleges (file 2 of 27)

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

university-of-california-santa-barbara | University of California-Santa Barbara | Santa Barbara, CA | https://www.ucsb.edu/
northern-arizona-university | Northern Arizona University | Flagstaff, AZ | https://nau.edu/
university-of-oklahoma-norman-campus | University of Oklahoma-Norman Campus | Norman, OK | https://www.ou.edu/
university-of-california-riverside | University of California-Riverside | Riverside, CA | https://www.ucr.edu/
university-of-iowa | University of Iowa | Iowa City, IA | https://uiowa.edu/
university-of-illinois-chicago | University of Illinois Chicago | Chicago, IL | https://www.uic.edu/
california-polytechnic-state-university-san-luis-obispo | California Polytechnic State University-San Luis Obispo | San Luis Obispo, CA | https://calpoly.edu/
georgia-southern-university | Georgia Southern University | Statesboro, GA | https://www.georgiasouthern.edu/
oklahoma-state-university-main-campus | Oklahoma State University-Main Campus | Stillwater, OK | https://www.okstate.edu/
the-university-of-texas-at-dallas | The University of Texas at Dallas | Richardson, TX | https://www.utdallas.edu/
california-state-university-fresno | California State University-Fresno | Fresno, CA | https://www.fresnostate.edu/
university-of-mississippi | University of Mississippi | University, MS | https://www.olemiss.edu/
university-of-kansas | University of Kansas | Lawrence, KS | https://ku.edu/
washington-state-university | Washington State University | Pullman, WA | https://wsu.edu/
the-university-of-texas-at-el-paso | The University of Texas at El Paso | El Paso, TX | https://www.utep.edu/
temple-university | Temple University | Philadelphia, PA | https://www.temple.edu/
james-madison-university | James Madison University | Harrisonburg, VA | https://www.jmu.edu/index.shtml
virginia-commonwealth-university | Virginia Commonwealth University | Richmond, VA | https://www.vcu.edu/
university-of-oregon | University of Oregon | Eugene, OR | https://www.uoregon.edu/
university-of-pittsburgh-pittsburgh-campus | University of Pittsburgh-Pittsburgh Campus | Pittsburgh, PA | https://www.pitt.edu/
utah-state-university | Utah State University | Logan, UT | https://www.usu.edu/
university-at-buffalo | University at Buffalo | Buffalo, NY | https://www.buffalo.edu/
east-carolina-university | East Carolina University | Greenville, NC | https://www.ecu.edu/
university-of-connecticut | University of Connecticut | Storrs, CT | https://uconn.edu/
ohio-university-main-campus | Ohio University-Main Campus | Athens, OH | https://www.ohio.edu/
california-state-university-los-angeles | California State University-Los Angeles | Los Angeles, CA | https://www.calstatela.edu/
appalachian-state-university | Appalachian State University | Boone, NC | https://www.appstate.edu/
kent-state-university-at-kent | Kent State University at Kent | Kent, OH | https://www.kent.edu/
university-of-nebraska-lincoln | University of Nebraska-Lincoln | Lincoln, NE | https://www.unl.edu/
university-of-delaware | University of Delaware | Newark, DE | https://www.udel.edu/
illinois-state-university | Illinois State University | Normal, IL | https://illinoisstate.edu/
grand-valley-state-university | Grand Valley State University | Allendale, MI | https://www.gvsu.edu/
san-francisco-state-university | San Francisco State University | San Francisco, CA | https://www.sfsu.edu/
mississippi-state-university | Mississippi State University | Mississippi State, MS | https://www.msstate.edu/
montclair-state-university | Montclair State University | Montclair, NJ | https://www.montclair.edu/
stony-brook-university | Stony Brook University | Stony Brook, NY | https://www.stonybrook.edu/
university-of-california-santa-cruz | University of California-Santa Cruz | Santa Cruz, CA | https://www.ucsc.edu/
sam-houston-state-university | Sam Houston State University | Huntsville, TX | https://www.shsu.edu/
boise-state-university | Boise State University | Boise, ID | https://www.boisestate.edu/
old-dominion-university | Old Dominion University | Norfolk, VA | https://www.odu.edu/
west-virginia-university | West Virginia University | Morgantown, WV | https://www.wvu.edu/
university-of-new-mexico-main-campus | University of New Mexico-Main Campus | Albuquerque, NM | https://www.unm.edu/
university-of-wisconsin-milwaukee | University of Wisconsin-Milwaukee | Milwaukee, WI | https://uwm.edu/
miami-university-oxford | Miami University-Oxford | Oxford, OH | https://miamioh.edu/
middle-tennessee-state-university | Middle Tennessee State University | Murfreesboro, TN | https://www.mtsu.edu/
cuny-hunter-college | CUNY Hunter College | New York, NY | https://www.hunter.cuny.edu/
cuny-bernard-m-baruch-college | CUNY Bernard M Baruch College | New York, NY | https://www.baruch.cuny.edu/
university-of-north-georgia | University of North Georgia | Dahlonega, GA | https://www.ung.edu/
towson-university | Towson University | Towson, MD | https://www.towson.edu/
rowan-university | Rowan University | Glassboro, NJ | https://www.rowan.edu/
