# Task: find MORE "What's special" facts for 50 US colleges (file 3 of 10)

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

### florida-international-university | Florida International University | Miami, FL | www.fiu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- FIU's Golden Promise guarantees 100% tuition and fees for Florida residents with a Student Aid Index of 0 or less.

### auburn-university | Auburn University | Auburn, AL | www.auburn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Before home football games, a trained eagle from the Auburn University Raptor Center flies over Jordan-Hare Stadium; the center rehabilitates injured birds of prey.

### skidmore-college | Skidmore College | Saratoga Springs, NY | www.skidmore.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All first-year students are required to take an interdisciplinary Scribner Seminar capped at 16 students during their first semester.

### university-of-richmond | University of Richmond | University of Richmond, VA | www.richmond.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Richmond Guarantee, every continuing undergraduate student in the School of Arts & Sciences, Jepson School of Leadership Studies, and Robins School of Business is eligible to receive one fellowship of up to $5,500 for a summer internship or faculty-mentored research project.
- Beginning in fall 2025, Richmond's Promise to Virginia funds 100% of the cost of tuition, housing, and food for qualified Virginia students whose parental income is $75,000 or less.

### california-state-university-fullerton | California State University-Fullerton | Fullerton, CA | www.fullerton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cal State Fullerton has a 26-acre arboretum and botanical garden at the north end of campus.

### university-of-houston | University of Houston | Houston, TX | www.uh.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Cougar Promise, UH guarantees tuition and mandatory fees are covered for eligible students with family incomes at or below $65,000.

### indiana-university-bloomington | Indiana University-Bloomington | Bloomington, IN | bloomington.iu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- IU Bloomington charges a flat fee for tuition, allowing students to take up to 40 credit hours across fall, spring, and intersessions for the same cost.

### rutgers-university-new-brunswick | Rutgers University-New Brunswick | New Brunswick, NJ | newbrunswick.rutgers.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- New Jersey students starting in fall 2026 or later whose family AGI is $65,000 or less get their remaining in-state tuition and eligible fees covered for their first two years through the Scarlet Guarantee. After 60 credits, students are considered for the state's Garden State Guarantee. Housing, dining and books aren't included.

### rhode-island-school-of-design | Rhode Island School of Design | Providence, RI | www.risd.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- All undergraduate students at RISD complete first-year studio courses in Experimental and Foundation Studies.
- Wintersession enrollment is mandatory for all first-year students and undergraduate architecture majors.

### smith-college | Smith College | Northampton, MA | www.smith.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Smith College operates an open curriculum with no standard core curriculum, where the only requirement outside the major is one first-year writing course.

### colorado-college | Colorado College | Colorado Springs, CO | www.coloradocollege.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Colorado College uses the Block Plan, where students and professors take and teach only one class at a time.
- Under the Colorado Pledge, Colorado families with an adjusted gross income under $60,000 pay no parental contribution for tuition, room, and board.

### texas-state-university | Texas State University | San Marcos, TX | www.txst.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Bobcat Promise covers tuition and mandatory fees up to 15 hours per semester for eligible students through federal, state, and university funding.

### spelman-college | Spelman College | Atlanta, GA | www.spelman.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Spelman students can take classes at Morehouse and Clark Atlanta through the Atlanta University Center; more than a quarter of AUC students cross-register for at least one course each semester.
- The 3+2 Dual Degree Engineering Program pairs three years at Spelman with two at a partner such as Georgia Tech, Michigan, Columbia, Dartmouth or Caltech, ending with two bachelor's degrees.

### university-of-north-texas | University of North Texas | Denton, TX | www.unt.edu
Find up to 3 new facts.
Already have: nothing yet.

### citadel-military-college-of-south-carolina | Citadel Military College of South Carolina | Charleston, SC | citadel.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- First-year cadets, called knobs, participate in the Fourth Class System, a nine-month freshman military training period.

### the-university-of-alabama | The University of Alabama | Tuscaloosa, AL | www.ua.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Out-of-state freshmen with at least a 3.5 GPA get automatic merit scholarships based on ACT or SAT scores, from $6,000 a year (ACT 25–26) up to $28,000 a year (ACT 32–36), with no separate application. A 36 ACT or 1600 SAT with a 4.0 GPA earns full tuition.

### brigham-young-university | Brigham Young University | Provo, UT | byu.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-state-university-northridge | California State University-Northridge | Northridge, CA | www.csun.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- CSUN's National Center on Deafness, founded in 1964, was the first college program in the country to provide paid sign language interpreters for deaf students. About 150 deaf and hard of hearing students attend each semester.

### texas-tech-university | Texas Tech University | Lubbock, TX | www.ttu.edu
Find up to 3 new facts.
Already have: nothing yet.

### the-university-of-texas-at-arlington | The University of Texas at Arlington | Arlington, TX | www.uta.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Blaze Forward Program covers 100% of tuition and course fees for eligible students during the fall and spring semesters using grants and gift aid.

### university-of-colorado-boulder | University of Colorado Boulder | Boulder, CO | www.colorado.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The CU Boulder Undergraduate Tuition Guarantee provides the same rate of tuition and fees for four consecutive years.

### university-of-minnesota-twin-cities | University of Minnesota-Twin Cities | Minneapolis, MN | twin-cities.umn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Minnesota residents with family income under $80,000 get tuition covered through the state's North Star Promise, and new students from 11 Tribal nations with family income up to $125,000 get full tuition through the Native American Promise Tuition Program (which has its own application). For most other programs you just apply for admission and file the FAFSA.

### carleton-college | Carleton College | Northfield, MN | www.carleton.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Carleton operates on a trimester system of three 10-week terms: fall, winter, and spring.
- All students must complete a senior integrative exercise, known as comps, to graduate.

### virginia-polytechnic-institute-and-state-university | Virginia Polytechnic Institute and State University | Blacksburg, VA | www.vt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Virginia Tech is one of six senior military colleges in the country and one of only two with a corps of cadets inside a large public university. Cadets can train to commission into the military or take a citizen-leader track aimed at civilian careers.

### oregon-state-university | Oregon State University | Corvallis, OR | oregonstate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Oregon State University operates on a quarter system with fall, winter, and spring terms of 10 weeks each, plus finals week.

### william-and-mary | William & Mary | Williamsburg, VA | www.wm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Pell Promise, William & Mary covers full tuition and fees for eligible in-state undergraduates who qualify for a Federal Pell Grant and demonstrate significant financial need.

### louisiana-state-university-and-agricultural-and-mechanical-college | Louisiana State University and Agricultural & Mechanical College | Baton Rouge, LA | www.lsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- LSU keeps a live tiger, Mike, in a habitat just north of Tiger Stadium; the university says he is the only live tiger living on a college campus in the U.S.

### the-university-of-texas-at-san-antonio | The University of Texas at San Antonio | San Antonio, TX | www.utsa.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Bold Promise, qualifying first-time incoming students have 100% of their tuition and mandatory fees covered for up to four academic years.

### university-of-cincinnati-main-campus | University of Cincinnati-Main Campus | Cincinnati, OH | www.uc.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-south-carolina-columbia | University of South Carolina-Columbia | Columbia, SC | www.sc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The USC Commitment covers four years of tuition and academic fees for eligible in-state students.

### harvey-mudd-college | Harvey Mudd College | Claremont, CA | www.hmc.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-arkansas | University of Arkansas | Fayetteville, AR | www.uark.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Out-of-state freshmen can get the New Arkansan Non-Resident Tuition Award automatically, covering 50% to 90% of the difference between out-of-state and in-state tuition depending on GPA (3.20 minimum) and home state.

### the-university-of-texas-rio-grande-valley | The University of Texas Rio Grande Valley | Edinburg, TX | www.utrgv.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-state-university-sacramento | California State University-Sacramento | Sacramento, CA | www.csus.edu
Find up to 3 new facts.
Already have: nothing yet.

### george-mason-university | George Mason University | Fairfax, VA | www.gmu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the ADVANCE program, community college students who complete their associate's degree and program milestones receive guaranteed admission to Mason.

### san-jose-state-university | San Jose State University | San Jose, CA | www.sjsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Admission is competitive in every major, and each major sets its own threshold. Graduates of Santa Clara County high schools get preference as local applicants, but meeting minimum CSU requirements doesn't guarantee a spot.

### university-of-utah | University of Utah | Salt Lake City, UT | www.utah.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Utah Promise ensures full coverage of tuition and mandatory fees for Utah resident undergraduates whose family income and assets are under $100,000.

### bucknell-university | Bucknell University | Lewisburg, PA | www.bucknell.edu
Find up to 3 new facts.
Already have: nothing yet.

### georgia-state-university | Georgia State University | Atlanta, GA | www.gsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Georgia State tracks every student every day for more than 800 risk factors. It raised its graduation rate by 23 percentage points and closed achievement gaps by race, ethnicity and income, as of 2018.

### the-university-of-tampa | The University of Tampa | Tampa, FL | www.ut.edu
Find up to 3 new facts.
Already have: nothing yet.

### colorado-state-university-fort-collins | Colorado State University-Fort Collins | Fort Collins, CO | colostate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Tuition+ Promise uses grant money to cover part or all of base tuition for students with a qualifying family income.

### berea-college | Berea College | Berea, KY | www.berea.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Berea charges no tuition, and every student works in its campus labor program. In August 2026 it announced a pledge to also cover housing and fees for eligible students.

### iowa-state-university | Iowa State University | Ames, IA | www.iastate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Iowa State has 79 learning communities, and 95% of first-year students joined one in fall 2024. Participants returned for a second year at higher rates (89.4%) than non-participants (84.5%).

### california-state-polytechnic-university-pomona | California State Polytechnic University-Pomona | Pomona, CA | www.cpp.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cal Poly Pomona's W.K. Kellogg Arabian Horse Center puts on public horse shows on the first Sunday of the month, a tradition dating to 1926, with students riding.

### fairfield-university | Fairfield University | Fairfield, CT | fairfield.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-kentucky | University of Kentucky | Lexington, KY | www.uky.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-nevada-las-vegas | University of Nevada-Las Vegas | Las Vegas, NV | www.unlv.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UNLV Tuition+ provides eligible Nevada residents the equivalent of 12-15 credit hours of course fees each semester.

### university-of-north-carolina-at-charlotte | University of North Carolina at Charlotte | Charlotte, NC | www.charlotte.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students at 14 partner North Carolina community colleges can join 49erNext, which guarantees admission to UNC Charlotte once they finish an eligible associate degree with the required GPA, plus library and campus access while they're still at community college.

### university-of-missouri-columbia | University of Missouri-Columbia | Columbia, MO | missouri.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Missouri Land Grant covers tuition and mandatory fees for incoming first-year Missouri residents who are Pell Grant-eligible and enroll full-time. It's awarded automatically; file the FAFSA by the priority deadline.

### florida-atlantic-university | Florida Atlantic University | Boca Raton, FL | www.fau.edu
Find up to 3 new facts.
Already have: nothing yet.
