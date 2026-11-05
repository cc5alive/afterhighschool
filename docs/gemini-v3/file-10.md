# Task: find MORE "What's special" facts for 50 US colleges (file 10 of 10)

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. Each college page has a "What's special" section: about four short facts that set the school apart, each linked to its source. These are the most-searched schools on the site. Most already have one or two facts, listed under each school. Your job is to add new ones on **different topics**. Families act on these, so accuracy matters more than coverage.

## How to work

1. **Browse live.** Use Google Search and open the pages you cite. Don't answer from memory. If you can't browse, reply only: BROWSING UNAVAILABLE.
2. **Check these pages for each school** before giving up:
   - the financial aid or cost page (named tuition guarantees, no-loan policies, income cutoffs where families pay nothing)
   - the academic calendar and curriculum or general education page (calendar, required experiences, core)
   - the admissions page (guaranteed or direct admission, applying to a specific college, transfer pathways)
   - the housing or residential life page (residential colleges, housing guarantees, required on-campus years)
   - co-op, internship or experiential learning pages
3. **Copy, don't paraphrase, the quote.** Each quote must be copied character for character from the page text. We check every quote against the live page automatically, and facts whose quote isn't there are thrown out. Short quotes of one or two sentences match best.

## The most important rule

**Every detail in your fact must appear in your quotes.** That includes every number, dollar amount, income limit, year, eligibility condition and name. If a detail isn't in a quote, either add a second quote from the same or another page that contains it, or leave the detail out. Don't fill in anything from memory, even if you're sure it's true.

Bad: fact says "families under $75,000 pay nothing", but the quote only says "we meet 100% of need without loans."
Good: fact says "meets 100% of demonstrated need without loans", and the quote says exactly that.

## What makes a good fact

Specific, true of this school and not most similar schools, and useful to someone deciding whether to apply or whether they can afford it. The kinds that work best:
- **Cost:** a named tuition guarantee or promise with its income limit; meeting full need; replacing loans with grants; a tuition lock or freeze
- **Admissions:** guaranteed admission rules, applying directly to a college or major, a required interview, audition or portfolio for the whole school, a transfer guarantee
- **Calendar:** quarters, block plan, a January or May term everyone takes
- **Requirements every student completes:** co-op, internship, senior thesis or capstone, study abroad, service, a distinctive core curriculum with a name and a concrete structure
- **Structure:** residential colleges or houses, a required years-on-campus rule, a cross-registration consortium, open curriculum, no grades, a medical, law or other guaranteed-pathway program for undergrads
- **Identity with a concrete program:** HBCU, tribal college, women's college, work college, service academy, a land-grant extension mission students take part in

**Don't include:**
- Founding dates, history, firsts, famous alumni, rankings, campus size, sports or mascots
- Statewide or system-wide programs that aren't run by this school (state grants or scholarships, statewide tuition-free programs, regional exchange discounts like WUE or MSEP, system-wide transfer agreements)
- Credit-hour counts, minimum GPAs, program lengths, accreditation, mission or values statements
- Rules for a single major (one nursing program's prerequisites, one music audition)
- Generic offerings: honors college, study abroad, research opportunities, small classes, career services
- Marketing words: premier, renowned, world-class, nationally recognized, leading, vibrant, unique, innovative, robust, cutting-edge, best, famous. You can use "first," "only" or "largest" only when the quote says it.
- Anything that repeats or overlaps a fact the school already has (listed under it)

Write each fact in your own words: 1–2 plain sentences, 40–300 characters, sentence case. Each school says how many new facts to look for. Fewer is fine when nothing else qualifies; don't pad.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per school, in the order listed. Only include your NEW facts, not the ones already listed. No intro, no code fences, no notes after.

{"slug":"<slug exactly as listed>","researchedAt":"<today, YYYY-MM-DD>","facts":[{"text":"<fact>","sources":[{"title":"<page name>","url":"<exact https URL you opened>","quote":"<verbatim text from that page, 8–40 words>"}]}],"concerns":"<null or a short note>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. If you find nothing new for a school, still output its line with "facts":[] and say why in "concerns". If a school has closed, merged or stopped enrolling, say so in "concerns".

Do all 50 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools

### california-state-polytechnic-university-humboldt | California State Polytechnic University-Humboldt | Arcata, CA | www.humboldt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- On January 26, 2022, Humboldt State University became Cal Poly Humboldt, California's third polytechnic institution and the first in Northern California.

### university-of-northern-colorado | University of Northern Colorado | Greeley, CO | www.unco.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Since fall 2024, the UNC Tuition Promise has covered standard tuition and mandatory fees for eligible incoming and continuing Colorado undergraduates.

### franklin-university | Franklin University | Columbus, OH | www.franklin.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students from partner community colleges in Franklin's Pathway Portal get a $298-per-credit tuition rate and free textbooks for bachelor's courses.

### colorado-christian-university | Colorado Christian University | Lakewood, CO | www.ccu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All traditional undergraduate students at Colorado Christian University are required to sign the Lifestyle Covenant.

### missouri-university-of-science-and-technology | Missouri University of Science and Technology | Rolla, MO | www.mst.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Missouri S&T mandates that every undergraduate student must complete a significant experiential learning experience to graduate.

### long-island-university | Long Island University | Brookville, NY | www.liu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- LIU Promise gives every student a personal success coach, and students build a résumé in their first semester.

### northwestern-state-university-of-louisiana | Northwestern State University of Louisiana | Natchitoches, LA | www.nsula.edu
Find up to 3 new facts.
Already have: nothing yet.

### purdue-university-fort-wayne | Purdue University Fort Wayne | Fort Wayne, IN | www.pfw.edu
Find up to 3 new facts.
Already have: nothing yet.

### state-university-of-new-york-at-oswego | State University of New York at Oswego | Oswego, NY | www.oswego.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Oswego Guarantee, the university caps annual on-campus housing and meal plan increases at 5% and guarantees that if a required course is unavailable for on-time four-year graduation, the remaining courses will be provided tuition-free.

### university-of-washington-bothell-campus | University of Washington-Bothell Campus | Bothell, WA | www.uwb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The University of Washington Bothell shares a co-located campus and joint master plan with Cascadia College.

### worcester-polytechnic-institute | Worcester Polytechnic Institute | Worcester, MA | www.wpi.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- WPI's academic year is four seven-week terms, plus optional summer terms, and its grading system has no failing grades.

### university-of-south-dakota | University of South Dakota | Vermillion, SD | www.usd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the South Dakota Advantage tuition program, residents of 11 neighboring states—Colorado, Illinois, Iowa, Kansas, Minnesota, Missouri, Montana, Nebraska, North Dakota, Wisconsin, and Wyoming—pay the same reduced tuition rate as South Dakota in-state residents.

### norfolk-state-university | Norfolk State University | Norfolk, VA | www.nsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every student in Norfolk State's DNIMAS science program receives full four-year scholarship and grant aid.

### columbia-college-chicago | Columbia College Chicago | Chicago, IL | www.colum.edu
Find up to 3 new facts.
Already have: nothing yet.

### duquesne-university | Duquesne University | Pittsburgh, PA | www.duq.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded by the Congregation of the Holy Spirit, Duquesne University is the only Spiritan institution of higher education in the United States.

### university-of-north-carolina-at-pembroke | University of North Carolina at Pembroke | Pembroke, NC | www.uncp.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through NC Promise, in-state undergraduate tuition at UNC Pembroke is $500 per semester.

### university-of-san-francisco | University of San Francisco | San Francisco, CA | www.usfca.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- USF's core curriculum includes a theology and religious studies requirement covering various religions and how religion can serve social justice.

### stevens-institute-of-technology | Stevens Institute of Technology | Hoboken, NJ | www.stevens.edu
Find up to 3 new facts.
Already have: nothing yet.

### adelphi-university | Adelphi University | Garden City, NY | www.adelphi.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-massachusetts-dartmouth | University of Massachusetts-Dartmouth | North Dartmouth, MA | www.umassd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The UMass Dartmouth Deal covers full tuition and mandatory fees for eligible Massachusetts students with financial need.

### gonzaga-university | Gonzaga University | Spokane, WA | www.gonzaga.edu
Find up to 3 new facts.
Already have: nothing yet.

### marist-university | Marist University | Poughkeepsie, NY | www.marist.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Marist offers the First-Year Florence Experience, allowing incoming students to spend their first year of college studying in Florence, Italy.

### sonoma-state-university | Sonoma State University | Rohnert Park, CA | sonoma.edu
Find up to 3 new facts.
Already have: nothing yet.

### winona-state-university | Winona State University | Winona, MN | www.winona.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the e-Warrior Digital Life and Learning Program, Winona State equips participating students and employees with a configured laptop computer, software, and tech support.

### high-point-university | High Point University | High Point, NC | www.highpoint.edu
Find up to 3 new facts.
Already have: nothing yet.

### suny-buffalo-state-university | SUNY Buffalo State University | Buffalo, NY | suny.buffalostate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Buffalo State University serves as the only urban comprehensive college within the State University of New York (SUNY) system.

### saint-cloud-state-university | Saint Cloud State University | Saint Cloud, MN | www.stcloudstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### virginia-state-university | Virginia State University | Petersburg, VA | www.vsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1882, Virginia State University is a historically Black university and one of Virginia's two land-grant institutions.

### rhode-island-college | Rhode Island College | Providence, RI | www.ric.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Hope Scholarship provides eligible Rhode Island College students with two years of tuition-free education during their four-year bachelor's degree.

### bowie-state-university | Bowie State University | Bowie, MD | www.bowiestate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1865, Bowie State University is Maryland's first Historically Black College or University and one of the ten oldest HBCUs in the nation.

### university-of-missouri-st-louis | University of Missouri-St Louis | Saint Louis, MO | www.umsl.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-louisiana-at-monroe | University of Louisiana at Monroe | Monroe, LA | www.ulm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- ULM's College of Pharmacy is Louisiana's only publicly supported comprehensive center for pharmaceutical education, research, and service.

### california-state-university-channel-islands | California State University-Channel Islands | Camarillo, CA | www.csuci.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- CSU Channel Islands runs its own research station on Santa Rosa Island.

### mcneese-state-university | McNeese State University | Lake Charles, LA | www.mcneese.edu
Find up to 3 new facts.
Already have: nothing yet.

### morehouse-college | Morehouse College | Atlanta, GA | www.morehouse.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1867, Morehouse is the nation's only private historically Black liberal arts college exclusively for men.

### columbia-college-mo | Columbia College | Columbia, MO | www.ccis.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Columbia College eliminates course fees and provides all required course textbooks to students at no cost.

### university-of-arkansas-at-little-rock | University of Arkansas at Little Rock | Little Rock, AR | ualr.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Trojan Guarantee is a scholarship program that ensures eligible Arkansas students a zero-cost bachelor's degree.

### saint-joseph-s-university-philadelphia | Saint Joseph's University - Philadelphia | Philadelphia, PA | www.sju.edu
Find up to 3 new facts.
Already have: nothing yet.

### ramapo-college-of-new-jersey | Ramapo College of New Jersey | Mahwah, NJ | www.ramapo.edu
Find up to 3 new facts.
Already have: nothing yet.

### the-university-of-tennessee-martin | The University of Tennessee-Martin | Martin, TN | www.utm.edu
Find up to 3 new facts.
Already have: nothing yet.

### tennessee-state-university | Tennessee State University | Nashville, TN | www.tnstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-new-haven | University of New Haven | West Haven, CT | www.newhaven.edu
Find up to 3 new facts.
Already have: nothing yet.

### east-stroudsburg-university-of-pennsylvania | East Stroudsburg University of Pennsylvania | East Stroudsburg, PA | www.esu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- East Stroudsburg University was the first public university in Pennsylvania to offer students a guaranteed four-year tuition rate.

### southeastern-university | Southeastern University | Lakeland, FL | www.seu.edu
Find up to 3 new facts.
Already have: nothing yet.

### northeastern-state-university | Northeastern State University | Tahlequah, OK | www.nsuok.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1846 as the Cherokee National Female Seminary, Northeastern State University is Oklahoma's oldest institution of higher learning.

### ana-g-mendez-university | Ana G. Mendez University | Orlando, FL | www.agmu.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-a-and-m-university-kingsville | Texas A&M University-Kingsville | Kingsville, TX | www.tamuk.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Javelina Promise, eligible Texas undergraduate students with household income of $65,000 or less have tuition and fees covered for up to 4 years.

### nicholls-state-university | Nicholls State University | Thibodaux, LA | www.nicholls.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Nicholls State University's Chef John Folse Culinary Institute offers the only four-year culinary degree in Louisiana.

### dickinson-college | Dickinson College | Carlisle, PA | www.dickinson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded by Benjamin Rush, Dickinson was the first college chartered in the newly recognized United States of America in 1783.

### suny-oneonta | SUNY Oneonta | Oneonta, NY | suny.oneonta.edu
Find up to 3 new facts.
Already have: nothing yet.
