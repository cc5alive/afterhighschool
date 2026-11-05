# Task: find MORE "What's special" facts for 50 US colleges (file 1 of 10)

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

### university-of-california-los-angeles | University of California-Los Angeles | Los Angeles, CA | www.ucla.edu
Find up to 1 new fact.
Already have (don't repeat these or cover the same topic):
- SAT and ACT scores aren't considered at all, even if you send them, like the rest of the University of California.
- Transferring in is a real route: more than 7,700 UCLA undergraduates are transfer students, and 93% of them came from California community colleges.
- California residents from families earning under $100,000 who qualify for aid have UC's system-wide tuition and fees covered through the Blue and Gold Opportunity Plan; filing the FAFSA or California Dream Act Application is how you're considered.

### new-york-university | New York University | New York, NY | www.nyu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- NYU grants degrees at three campuses, in New York, Abu Dhabi and Shanghai, and runs study-away sites in cities from London and Paris to Accra, Buenos Aires and Sydney.

### university-of-california-berkeley | University of California-Berkeley | Berkeley, CA | www.berkeley.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through URAP, undergraduates apply each fall and spring to work on faculty research projects as mentored apprentices, with or without course credit.

### northeastern-university | Northeastern University | Boston, MA | www.northeastern.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Students can do up to three co-ops: full-time jobs in their field lasting four to six months, usually paid, starting after the fall of second year. Co-op is optional.
- Some admitted students start college abroad through N.U.in, spending their first semester in places like Ireland, Greece, Italy, Spain or Germany (fall 2026 locations).

### university-of-southern-california | University of Southern California | Los Angeles, CA | www.usc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Incoming first-year students from U.S. families earning $80,000 a year or less, with typical assets, attend tuition-free.

### university-of-michigan-ann-arbor | University of Michigan-Ann Arbor | Ann Arbor, MI | umich.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Go Blue Guarantee, Michigan families earning $125,000 or less, with under $125,000 in assets, pay no tuition for four years. It's awarded automatically to admitted students who file for financial aid.
- First- and second-year students can join faculty research through UROP; about 1,100 students work with more than 700 researchers.

### cornell-university | Cornell University | Ithaca, NY | www.cornell.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cornell is private, but three of its colleges (Agriculture and Life Sciences, Human Ecology, and Industrial and Labor Relations) are state-supported. New York residents there paid $49,816 in tuition for 2026–27, compared with $73,946 everywhere else.

### boston-university | Boston University | Boston, MA | www.bu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- BU meets 100% of demonstrated financial need without loans for first-time, first-year students who are U.S. citizens or permanent residents.
- Admitted first-years from families earning under $200,000 with typical assets pay no more than $20,000 a year toward the cost of attendance.

### university-of-pennsylvania | University of Pennsylvania | Philadelphia, PA | www.upenn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Quaker Commitment, families earning under $200,000 get aid covering at least full tuition, as long as they have no more than $50,000 in cash and investments, no business or farm, and no real estate beyond their home.

### columbia-university-in-the-city-of-new-york | Columbia University in the City of New York | New York, NY | www.columbia.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every Columbia College student takes the Core Curriculum, shared courses including Literature Humanities, Contemporary Civilization, Art and Music Humanities, and Frontiers of Science. It dates to 1919. Engineering students take a shorter version.

### harvard-university | Harvard University | Cambridge, MA | www.harvard.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Families earning $100,000 or less with typical assets pay nothing: aid covers tuition, housing, food, fees and more. Up to $200,000, aid covers at least full tuition. Home equity and retirement savings usually don't count.

### stanford-university | Stanford University | Stanford, CA | www.stanford.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Parents earning under $150,000 with typical assets pay no tuition, and under $100,000 they also pay nothing for housing and food. Home equity isn't counted.

### georgia-institute-of-technology-main-campus | Georgia Institute of Technology-Main Campus | Atlanta, GA | www.gatech.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- The co-op program alternates paid, full-time work terms with semesters of classes: three terms with the same employer, usually starting between sophomore and junior year, and you stay enrolled tuition-free while working. Finishing earns a co-op designation on your diploma.
- Unlike most selective schools, Georgia Tech requires SAT or ACT scores.

### university-of-north-carolina-at-chapel-hill | University of North Carolina at Chapel Hill | Chapel Hill, NC | www.unc.edu
Find up to 1 new fact.
Already have (don't repeat these or cover the same topic):
- Low-income students in the Carolina Covenant can graduate debt-free: their aid comes as grants, scholarships and a work-study job instead of loans. There's no separate application, and more than 1 in 10 undergraduates are in it.
- Out-of-state students can make up no more than 18% of each incoming first-year class, under UNC System policy, so admission is far more competitive for applicants from outside North Carolina.
- The Morehead-Cain Scholarship pays all expenses for four years and funds four summers of experiences, from an outdoor leadership course to a professional internship. About 70 students a year receive it.

### university-of-chicago | University of Chicago | Chicago, IL | www.uchicago.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every student takes the Core, shared courses across seven areas from the arts and humanities to math and the sciences, with writing instruction built in and a language requirement. Some version of it has been required since 1931.

### yale-university | Yale University | New Haven, CT | www.yale.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Families earning under $100,000 with typical assets pay nothing for tuition, fees, housing, food or travel, and students get a $2,000 start-up grant in their first year. Under $200,000, aid covers at least full tuition.

### northwestern-university | Northwestern University | Evanston, IL | www.northwestern.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Northwestern runs on quarters, not semesters: three 10-week terms (fall, winter and spring) plus a summer term.

### brown-university | Brown University | Providence, RI | www.brown.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Brown has no required core curriculum or distribution requirements. Under its Open Curriculum, you build your own course of study.

### vanderbilt-university | Vanderbilt University | Nashville, TN | www.vanderbilt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Opportunity Vanderbilt gives a full-tuition scholarship to every household earning $200,000 or less with typical assets, and those awards usually go beyond tuition to help with housing and food.

### university-of-florida | University of Florida | Gainesville, FL | www.ufl.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Some admitted first-years are offered PaCE instead of a regular spot: they take at least two semesters and 15 credits through UF Online, then move to campus once they reach 60 credits and finish their major's prerequisites. UF says it does this because campus space is limited.

### duke-university | Duke University | Durham, NC | www.duke.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Admitted students from North and South Carolina whose families earn $150,000 or less get full tuition grants. At $65,000 or less, Duke adds help with housing, meals and course materials, without loans.

### university-of-virginia-main-campus | University of Virginia-Main Campus | Charlottesville, VA | www.virginia.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Virginia families earning $100,000 or less get grants that cover at least tuition and fees; at $50,000 or less, grants also cover housing and dining. UVA meets full demonstrated need for all undergraduates.

### princeton-university | Princeton University | Princeton, NJ | www.princeton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every senior writes a thesis (or, in some engineering departments, does a major independent project), working one-on-one with a faculty adviser. Most students warm up with a junior paper.

### the-university-of-texas-at-austin | The University of Texas at Austin | Austin, TX | www.utexas.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Texas students who rank in the top 5% of their high school class are admitted to the university automatically, for students entering in summer or fall 2027 and spring 2028.
- The Texas Advance Commitment covers full tuition for Texas students with financial need from families earning up to $100,000, and gives partial help up to $125,000. There's no separate application; filing the FAFSA or TASFA is enough.

### florida-state-university | Florida State University | Tallahassee, FL | www.fsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- First-generation, Pell-eligible Florida residents can apply to CARE's Summer Bridge, spending seven weeks on campus the summer before first year taking classes, with support continuing through graduation.

### johns-hopkins-university | Johns Hopkins University | Baltimore, MD | www.jhu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Starting in 2026–27, undergraduates from families earning up to $200,000 pay no tuition, and at $100,000 or less the typical family pays nothing at all.

### university-of-notre-dame | University of Notre Dame | Notre Dame, IN | www.nd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students are randomly assigned to a single-sex residence hall and usually stay in it until they graduate or move off campus. Everyone must live on campus for six semesters.

### university-of-california-san-diego | University of California-San Diego | La Jolla, CA | www.ucsd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every undergraduate belongs to one of eight colleges, each with its own theme and general education requirements, so your required courses depend on your college as well as your major. Any major is open in any college.

### massachusetts-institute-of-technology | Massachusetts Institute of Technology | Cambridge, MA | web.mit.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Students from families earning under $200,000 typically attend tuition-free, and parents earning under $100,000 can expect to pay nothing toward the full cost, including housing and dining.
- More than 90% of MIT undergraduates work on paid research projects through UROP before they graduate.

### dartmouth-college | Dartmouth College | Hanover, NH | dartmouth.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the D-Plan, the year has four terms including summer. Students are on campus for all of first year, the summer after sophomore year and two senior terms, and must take three terms off, at least one in a fall or spring.

### emory-university | Emory University | Atlanta, GA | www.emory.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Some Emory students spend their first two years at Oxford College, a campus of about 1,000 first- and second-years about 40 miles from Atlanta, then all move to the Atlanta campus for junior and senior year.

### washington-university-in-st-louis | Washington University in St Louis | St. Louis, MO | washu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- WashU doesn't include loans in aid offers for any admitted undergraduate. Through the WashU Pledge, first-years from Missouri or 53 Illinois counties with family income of $75,000 or less get tuition, fees, housing and food covered for four years.

### carnegie-mellon-university | Carnegie Mellon University | Pittsburgh, PA | www.cmu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- You apply to one specific college, school or program within Carnegie Mellon, so your choice of field is part of the admission decision.

### tufts-university | Tufts University | Medford, MA | www.tufts.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Tufts' Experimental College offers small, participation-based courses on ideas shaping the world today.

### georgetown-university | Georgetown University | Washington, DC | www.georgetown.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students in the Walsh School of Foreign Service must reach proficiency in a second language to graduate.

### rice-university | Rice University | Houston, TX | www.rice.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every new student is randomly assigned to one of Rice's 12 residential colleges and stays with it for all four years.

### university-of-miami | University of Miami | Coral Gables, FL | www.miami.edu
Find up to 3 new facts.
Already have: nothing yet.

### boston-college | Boston College | Chestnut Hill, MA | www.bc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- PULSE is a yearlong, 12-credit philosophy and theology course paired with 12 hours a week of service at places like shelters, clinics and after-school programs. It fulfills BC's entire philosophy and theology core requirement.

### university-of-california-irvine | University of California-Irvine | Irvine, CA | www.uci.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UC Irvine operates on the quarter system, with each quarter consisting of ten weeks of instruction.

### tulane-university-of-louisiana | Tulane University of Louisiana | New Orleans, LA | tulane.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Public service is part of the core curriculum: students complete two semesters of approved service learning, such as a course with at least 20 hours of service, an internship or a study abroad program, with one at the 2000 level or above.

### united-states-naval-academy | United States Naval Academy | Annapolis, MD | www.usna.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Navy pays 100% of tuition, room, board, and medical and dental care, so every midshipman attends on a full scholarship.

### southern-new-hampshire-university | Southern New Hampshire University | Manchester, NH | www.snhu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Online bachelor's and associate programs run on six 8-week terms a year, with applications reviewed on a rolling basis.

### university-of-central-florida | University of Central Florida | Orlando, FL | www.ucf.edu
Find up to 3 new facts.
Already have: nothing yet.

### barnard-college | Barnard College | New York, NY | www.barnard.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Barnard and Columbia share course catalogs, so Barnard students can take classes on either campus, and the two share clubs, athletic fields and dining halls. Students earn a Barnard degree.

### united-states-military-academy | United States Military Academy | West  Point, NY | www.westpoint.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Tuition, room, board and medical care are free, and cadets are paid a salary. In return, graduates serve at least five years on active duty plus three in the reserves. You can't be admitted without a nomination, usually from a member of Congress or the Vice President, so start in the spring of junior year.

### san-diego-state-university | San Diego State University | San Diego, CA | www.sdsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- First-year students from outside SDSU's local admissions area must live on campus and have a meal plan for their first and second years.

### colby-college | Colby College | Waterville, ME | www.colby.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Colby Commitment, Colby meets 100% of demonstrated need without loans. Families earning $75,000 or less with typical assets pay $0, and families earning up to $150,000 pay no more than $15,000.
- Through DavisConnects, Colby guarantees all students access to funding for research, internship, and global experiences regardless of their ability to pay.

### california-polytechnic-state-university-san-luis-obispo | California Polytechnic State University-San Luis Obispo | San Luis Obispo, CA | calpoly.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cal Poly requires applicants to declare a major when submitting their application, with applicants competing against others within the same major.

### florida-agricultural-and-mechanical-university | Florida Agricultural and Mechanical University | Tallahassee, FL | www.famu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Florida A&M University is a public, historically Black university located in Tallahassee and is the only historically Black university in the 12-member State University System of Florida.

### united-states-air-force-academy | United States Air Force Academy | USAF Academy, CO | www.usafa.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cadets pay no tuition, room, or board, and incur an eight-year service commitment as commissioned officers in the Air Force or Space Force upon graduation, including five years on active duty.
