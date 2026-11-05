# Task: find MORE "What's special" facts for 50 US colleges (file 5 of 10)

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
- **Structure:** residential colleges or houses, a rule that students live on campus for two or more years (a first-year-only rule is too common to count), a cross-registration consortium, open curriculum, no grades, a medical, law or other guaranteed-pathway program for undergrads
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

### university-of-new-mexico-main-campus | University of New Mexico-Main Campus | Albuquerque, NM | www.unm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- First-time, full-time freshmen under 20 years old who live more than 30 miles from the Albuquerque campus must live on campus for their first academic year.

### university-of-wisconsin-milwaukee | University of Wisconsin-Milwaukee | Milwaukee, WI | uwm.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- The Milwaukee Tuition Promise provides up to four years of tuition and segregated fees for students coming from families earning less than $62,000 annually.
- Freshmen who are not veterans, married, or living with a parent or guardian are required to live in a university-operated residence hall.

### miami-university-oxford | Miami University-Oxford | Oxford, OH | miamioh.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Miami's Tuition Promise guarantees first-time undergraduate students that tuition, housing and meals, special purpose fees, and course fees will be frozen over four years.
- All first-year and second-year students are required to live on campus unless they meet specific exemption criteria such as being over 21 or commuting from home.

### middle-tennessee-state-university | Middle Tennessee State University | Murfreesboro, TN | www.mtsu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- MTSU's Concrete Industry Management program was the first of its kind in the country.
- MTSU offers guaranteed freshman admission to applicants who complete recommended prep courses and have either a 3.0 GPA, an ACT of 22, or an SAT of 1100.

### cuny-hunter-college | CUNY Hunter College | New York, NY | www.hunter.cuny.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Macaulay Honors College students at Hunter College who are New York State residents receive a tuition scholarship for up to four years of undergraduate study.

### university-of-north-georgia | University of North Georgia | Dahlonega, GA | www.ung.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- The University of North Georgia is one of only six Senior Military Colleges in the nation and the country's only Army-exclusive senior military college.
- All out-of-state cadets receive the Cadet Grant, allowing them to pay tuition and fees at the in-state rate.

### towson-university | Towson University | Towson, MD | www.towson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Transfer Tiger Pact, Towson University provides Maryland community college students with guaranteed admission and an academic transfer plan.

### rowan-university | Rowan University | Glassboro, NJ | www.rowan.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Rowan Opportunity Program, students with family adjusted gross income between $0 and $65,000 annually pay $0 in net tuition and mandatory student fees.
- Rowan has a mandatory housing policy requiring students in their first or second year to live in campus housing.

### university-of-rochester | University of Rochester | Rochester, NY | www.rochester.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduates in Arts & Sciences and Engineering build a flexible curriculum combining a major, clusters and a foundation in writing.
- The Take Five Scholars Program grants accepted students one or two tuition-free semesters to study additional disciplines outside their major.

### university-of-nevada-reno | University of Nevada-Reno | Reno, NV | www.unr.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Pack Promise+, qualifying students receive up to $12,700 in gift aid (grants and scholarships) to help pay for 2027-2028 tuition, fees and books.

### wayne-state-university | Wayne State University | Detroit, MI | wayne.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Heart of Detroit Tuition Pledge provides free tuition for Detroit high school students or Detroit residents earning a high school diploma.

### macalester-college | Macalester College | Saint Paul, MN | www.macalester.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Macalester Tuition Promise, almost all students with family income below $100,000 receive grants and scholarships covering full tuition.

### savannah-college-of-art-and-design | Savannah College of Art and Design | Savannah, GA | www.scad.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- All new full-time, first-year students in on-ground courses are required to live in university housing for their first two academic years.
- SCAD operates on a quarter system with three quarters in the traditional academic year: fall, winter, and spring.

### lafayette-college | Lafayette College | Easton, PA | www.lafayette.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Lafayette meets 100% of demonstrated financial need for all admitted students, including international applicants.

### kansas-state-university | Kansas State University | Manhattan, KS | www.k-state.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The K-State Land Grant Promise covers up to 15 credit hours of tuition per semester for full-time, Pell-eligible undergraduates with household income of $80,000 or less.

### university-of-hawaii-at-manoa | University of Hawaii at Manoa | Honolulu, HI | manoa.hawaii.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Native Hawaiian Exemption tuition status allows students of Native Hawaiian race, ethnicity, ancestry, or descent to pay in-state tuition.

### california-state-university-san-bernardino | California State University-San Bernardino | San Bernardino, CA | www.csusb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- CSUSB's Palm Desert Campus is the Coachella Valley's only four-year public university campus.

### metropolitan-state-university-of-denver | Metropolitan State University of Denver | Denver, CO | www.msudenver.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Roadrunner Promise covers remaining tuition and mandatory fees for eligible Colorado students after federal, state, and institutional aid is applied.

### university-of-north-carolina-wilmington | University of North Carolina Wilmington | Wilmington, NC | www.uncw.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UNCW requires each student to complete an approved Explorations Beyond the Classroom experience as part of its University Studies curriculum.

### california-state-university-san-marcos | California State University-San Marcos | San Marcos, CA | www.csusm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under The Alliance, students meeting specified criteria in partner school district agreements receive guaranteed admission to CSUSM.

### baylor-university | Baylor University | Waco, TX | www.baylor.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All first-year students are required to live on campus.

### university-of-louisville | University of Louisville | Louisville, KY | www.louisville.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All first-year students under 21 are required to live on campus unless living at home with a parent or guardian.

### george-washington-university | George Washington University | Washington, DC | www.gwu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- GW's Revolutionary Promise provides a full tuition guarantee for students with household income below $100,000.

### trinity-college | Trinity College | Hartford, CT | www.trincoll.edu
Find up to 3 new facts.
Already have: nothing yet.

### montana-state-university | Montana State University | Bozeman, MT | www.montana.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Montana State University requires all students to take at least one 3-credit course in an approved Research & Creative Experience (R) course.
- Undergraduates with fewer than 30 earned credit hours while in a residence hall setting are required to live on campus in the residence halls.

### west-chester-university-of-pennsylvania | West Chester University of Pennsylvania | West Chester, PA | www.wcupa.edu
Find up to 3 new facts.
Already have: nothing yet.

### regent-university | Regent University | Virginia Beach, VA | www.regent.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Regent University was founded in 1977 by Pat Robertson as Christian Broadcasting Network University before being renamed Regent University in 1990.

### depaul-university | DePaul University | Chicago, IL | www.depaul.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- DePaul University operates on a quarter system with ten-week terms designed to make adding a second major or minor easier.

### university-of-north-carolina-at-greensboro | University of North Carolina at Greensboro | Greensboro, NC | www.uncg.edu
Find up to 3 new facts.
Already have: nothing yet.

### united-states-coast-guard-academy | United States Coast Guard Academy | New London, CT | www.uscga.edu
Find up to 1 new fact.
Already have (don't repeat these or cover the same topic):
- Unlike the other federal service academies, the Coast Guard Academy doesn't require a congressional nomination.
- Cadets pay no tuition, room, or board because the full cost of education is covered by the federal government, and cadets receive a salary while attending.
- All incoming freshmen begin their military training with Swab Summer, a seven-week program that includes one week aboard the tall ship Eagle.

### ball-state-university | Ball State University | Muncie, IN | www.bsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every Ball State student completes at least one course that includes undergraduate research, immersive learning, or study abroad or away.

### florida-gulf-coast-university | Florida Gulf Coast University | Fort Myers, FL | www.fgcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- FGCU requires students to complete service-learning hours with a registered nonprofit or government agency to meet graduation requirements.

### indiana-university-indianapolis | Indiana University-Indianapolis | Indianapolis, IN | indianapolis.iu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- IU Indianapolis became official on July 1, 2024, after Indiana University and Purdue University separated IUPUI into two distinct institutions.

### reed-college | Reed College | Portland, OR | www.reed.edu
Find up to 1 new fact.
Already have (don't repeat these or cover the same topic):
- Reed does not distribute regular grade reports to students in order to foster studying for knowledge rather than grades.
- Every Reed student must complete a yearlong senior thesis and defend it orally before professors across multiple disciplines to graduate.
- All students must pass a junior qualifying exam testing their knowledge within their major before advancing to their senior thesis.

### california-state-university-chico | California State University-Chico | Chico, CA | www.csuchico.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Chico State's General Education program organizes courses into thematic pathways that allow students to earn an interdisciplinary minor.

### cuny-new-york-city-college-of-technology | CUNY New York City College of Technology | Brooklyn, NY | www.citytech.cuny.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- City Tech serves as the designated college of technology within the City University of New York (CUNY).

### berklee-college-of-music | Berklee College of Music | Boston, MA | www.berklee.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Applying to the Bachelor of Music or Bachelor of Arts in Black Music and Culture programs at Berklee College of Music requires a live audition and interview.

### western-washington-university | Western Washington University | Bellingham, WA | wwu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- WWU's Fairhaven College does not use the A-to-F grading system, utilizing student self-evaluations and faculty narrative assessments instead.

### franklin-and-marshall-college | Franklin and Marshall College | Lancaster, PA | www.fandm.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Commonwealth Commitment, admitted Pennsylvania residents with household income below $75,000 and typical assets attend Franklin & Marshall tuition-free.
- Students in each first-year Connections seminar are assigned to live together in one of the College Houses.

### university-of-rhode-island | University of Rhode Island | Kingston, RI | web.uri.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- URI guarantees on-campus housing for all incoming first-year students.

### university-of-north-florida | University of North Florida | Jacksonville, FL | www.unf.edu
Find up to 3 new facts.
Already have: nothing yet.

### missouri-state-university-springfield | Missouri State University-Springfield | Springfield, MO | www.missouristate.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- A state law gives Missouri State a statewide mission in public affairs.
- All single students under 21 years of age who have earned fewer than 27 hours of transferable credit after high school must live in university housing.

### drexel-university | Drexel University | Philadelphia, PA | drexel.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Drexel Co-op integrates full-time professional work experiences directly into students' undergraduate academic plans of study.
- First-year students are required to live on campus or with a parent or legal guardian living within ten miles of campus for their first two years.

### rochester-institute-of-technology | Rochester Institute of Technology | Rochester, NY | www.rit.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Cooperative education (co-op) is a hallmark of an RIT education, enabling students to gain full-time professional work experience.
- First-year undergraduate students are guaranteed on-campus housing and are required to live on campus.

### portland-state-university | Portland State University | Portland, OR | www.pdx.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Portland State's Tuition-Free Degree program covers standard tuition, differential tuition and mandatory fees for eligible students through grants and scholarships.

### bowling-green-state-university-main-campus | Bowling Green State University-Main Campus | Bowling Green, OH | www.bgsu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- The Falcon Tuition Guarantee locks in tuition, fees, housing, and meal plan rates for 12 consecutive semesters for undergraduate students.
- Under BGSU's residency requirement, undergraduate students are required to live on campus for their first two years.

### university-of-memphis | University of Memphis | Memphis, TN | www.memphis.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- The Memphis Promise is a last-dollar scholarship that fills the gap between a student's financial aid and the cost of tuition.
- University of Memphis guarantees admission to students who earn an associate degree (AA/AS) or have a transfer GPA of 2.5 or higher with at least 15 college credits.

### tarleton-state-university | Tarleton State University | Stephenville, TX | www.tarleton.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Tarleton State Promise, the university covers tuition, fees, a meal plan, and a book allowance after other aid is applied.
- Tarleton requires all first-time freshman students younger than 21 years of age to live on campus for one academic year.

### western-michigan-university | Western Michigan University | Kalamazoo, MI | wmich.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Bronco Promise provides full tuition for up to four years to incoming first-year Michigan residents whose family household adjusted gross income is $50,000 or less with net assets under $75,000.

### university-at-albany | University at Albany | Albany, NY | www.albany.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UAlbany houses the nation's first College of Emergency Preparedness, Homeland Security and Cybersecurity, located in the ETEC complex alongside the New York State Mesonet weather-detection system.
