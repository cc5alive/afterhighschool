# Task: find MORE "What's special" facts for 50 US colleges (file 4 of 10)

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

### university-of-massachusetts-amherst | University of Massachusetts-Amherst | Amherst, MA | www.umass.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UMass Amherst is a member of the Five College Consortium, enabling shared resources, joint departments, and inter-campus collaboration.

### hillsdale-college | Hillsdale College | Hillsdale, MI | www.hillsdale.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Hillsdale College declines all federal taxpayer student aid and replaces federal funds entirely with private institutional aid.

### trinity-university | Trinity University | San Antonio, TX | new.trinity.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Trinity University requires all full-time undergraduate students to live on campus for their first three years.

### northern-arizona-university | Northern Arizona University | Flagstaff, AZ | nau.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Access2Excellence initiative, Northern Arizona University provides full tuition coverage for new first-time undergraduate students with a family income of $65,000 a year or less.
- Northern Arizona University provides full tuition coverage for members of Arizona's 22 federally recognized tribes through an expansion to the Access2Excellence initiative.

### university-of-oklahoma-norman-campus | University of Oklahoma-Norman Campus | Norman, OK | www.ou.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-california-riverside | University of California-Riverside | Riverside, CA | www.ucr.edu
Find up to 3 new facts.
Already have: nothing yet.

### syracuse-university | Syracuse University | Syracuse, NY | www.syracuse.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Haudenosaunee Promise, qualified students get aid equal to tuition and mandatory fees for part-time undergraduate study at Syracuse's College of Professional Studies.

### howard-university | Howard University | Washington, DC | www.howard.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Howard University is the only historically Black college or university classified as a top Carnegie-designated research institution.

### university-of-iowa | University of Iowa | Iowa City, IA | uiowa.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Four-Year Graduation Plan, students who meet their responsibilities are promised the courses they need to graduate in their primary major in four years. If a course isn't available, the university pays the tuition and fees to take it later.

### case-western-reserve-university | Case Western Reserve University | Cleveland, OH | www.case.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-illinois-chicago | University of Illinois Chicago | Chicago, IL | www.uic.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through UIC Aspire, new first-year and transfer students from Illinois families earning $75,000 or less may be eligible for $0 tuition and fees.

### georgia-southern-university | Georgia Southern University | Statesboro, GA | www.georgiasouthern.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Georgia Southern's Border State Waiver allows undergraduate students from Alabama, Florida, North Carolina, South Carolina, or Tennessee to attend at in-state tuition rates.

### oklahoma-state-university-main-campus | Oklahoma State University-Main Campus | Stillwater, OK | www.okstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### the-university-of-texas-at-dallas | The University of Texas at Dallas | Richardson, TX | www.utdallas.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Comet Promise, Texas residents with a family income of $100,000 or less have tuition and fees covered through scholarships, grants, and institutional funding.

### southern-university-and-a-and-m-college | Southern University and A & M College | Baton Rouge, LA | www.subr.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-state-university-fresno | California State University-Fresno | Fresno, CA | www.fresnostate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Fresno State Winery engages students in the winemaking profession at the nation's first and largest commercial winery on a college campus.

### university-of-mississippi | University of Mississippi | University, MS | www.olemiss.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Ole Miss Opportunity program, the university guarantees eligible Mississippi residents aid to cover the average cost of tuition, residence hall housing, and meals.

### university-of-kansas | University of Kansas | Lawrence, KS | ku.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Kansas Commitment guarantees enough scholarships and grants to pay base tuition and required fees for Kansans who qualify academically and have a family income of $75,000 or less.

### washington-state-university | Washington State University | Pullman, WA | wsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- WSU's Cougar Commitment covers tuition and mandatory fees for Washington residents from low- or middle-income families who receive the Washington College Grant or a Pell Grant.

### the-university-of-texas-at-el-paso | The University of Texas at El Paso | El Paso, TX | www.utep.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Paydirt Promise uses federal, state, and institutional grants and scholarships to cover tuition and fees for Texas residents with family income of $100,000 or less.

### temple-university | Temple University | Philadelphia, PA | www.temple.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Temple Promise covers full-time tuition and the mandatory university services fee for eligible students whose families have an adjusted gross income of $65,000 or less.

### james-madison-university | James Madison University | Harrisonburg, VA | www.jmu.edu/index.shtml
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- JMU's Centennial Scholars Program provides financial support to help cover primary attendance costs, including tuition and fees, housing, and a meal plan.

### virginia-commonwealth-university | Virginia Commonwealth University | Richmond, VA | www.vcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- VCU Honors College Guaranteed Admission Programs allow qualified students to enter professional health programs without competing through general admission later.

### university-of-oregon | University of Oregon | Eugene, OR | www.uoregon.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- PathwayOregon ensures that academically qualified, federal Pell Grant-eligible Oregonians have their tuition and fees paid through federal, state, and university funds.

### university-of-pittsburgh-pittsburgh-campus | University of Pittsburgh-Pittsburgh Campus | Pittsburgh, PA | www.pitt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pitt Pell Plus Program doubles any Federal Pell Grant awarded up to $7,395 for eligible undergraduate students across all five campuses.

### cuny-bernard-m-baruch-college | CUNY Bernard M Baruch College | New York, NY | www.baruch.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### utah-state-university | Utah State University | Logan, UT | www.usu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students selected for the Utah State Promise Scholarship get whatever tuition and student body fees their Pell Grants and other awards don't cover, for up to four years.

### the-university-of-arizona-global-campus | The University of Arizona Global Campus | Chandler, AZ | www.uagc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduate programs are structured so students take one course at a time in accelerated 5-week terms, while graduate courses run in 6-week terms.

### university-at-buffalo | University at Buffalo | Buffalo, NY | www.buffalo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under UB's Finish in 4 pledge, students who fulfill all requirements but cannot graduate in four years can complete needed courses free of tuition and comprehensive fees.

### east-carolina-university | East Carolina University | Greenville, NC | www.ecu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pirate Promise transfer program provides participating North Carolina community college students guaranteed admission to ECU upon completing an approved associate degree.

### university-of-connecticut | University of Connecticut | Storrs, CT | uconn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UConn's Special Program in Medicine links undergraduate study with four years of medical education, resulting in dual degrees from UConn: a BA/BS and an MD.

### stony-brook-university | Stony Brook University | Stony Brook, NY | www.stonybrook.edu
Find up to 3 new facts.
Already have: nothing yet.

### ohio-university-main-campus | Ohio University-Main Campus | Athens, OH | www.ohio.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Ohio University's all-in Tuition and Fees Guarantee locks in rates for housing, dining and fees for 12 consecutive semesters.

### california-state-university-los-angeles | California State University-Los Angeles | Los Angeles, CA | www.calstatela.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Cal State LA's Early Entrance Program allows qualified gifted students between ages 11 and 15 to enroll as full-time students in the Honors College.

### appalachian-state-university | Appalachian State University | Boone, NC | www.appstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### kent-state-university-at-kent | Kent State University at Kent | Kent, OH | www.kent.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Kent State's Undergraduate Tuition Guarantee Program guarantees eligible new first-year and transfer students that Ohio resident tuition, career services fees, and room and board charges will not increase for their cohort.

### university-of-nebraska-lincoln | University of Nebraska-Lincoln | Lincoln, NE | www.unl.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Nebraska Promise covers undergraduate tuition at the University of Nebraska-Lincoln for qualifying in-state students with a family income of $65,000 or less or who are Pell Grant-eligible.

### university-of-delaware | University of Delaware | Newark, DE | www.udel.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Delaware freshmen with family income under $35,000 get an aid package covering tuition, fees, standard housing and food, so they can attend at little or no up-front cost.

### illinois-state-university | Illinois State University | Normal, IL | illinoisstate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Incoming undergraduate students in a degree-seeking program at Illinois State University pay a locked tuition rate for four continuous calendar years.

### grand-valley-state-university | Grand Valley State University | Allendale, MI | www.gvsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Grand Valley Pledge awards full undergraduate tuition, renewable for four years, to qualified Michigan students with a family income under $50,000.

### san-francisco-state-university | San Francisco State University | San Francisco, CA | www.sfsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Established in the Fall of 1969, San Francisco State's College of Ethnic Studies was the first program of its kind in the United States.

### mississippi-state-university | Mississippi State University | Mississippi State, MS | www.msstate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- MSU's Promise Scholars Program offers scholarships and academic support to entering first-year Mississippi students whose parents earn $42,000 or less a year.

### montclair-state-university | Montclair State University | Montclair, NJ | www.montclair.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-christian-university | Texas Christian University | Fort Worth, TX | www.tcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Qualifying first-year Texas students receive full tuition support, food and housing assistance, and guaranteed four-year on-campus housing through TCU for Texans.

### university-of-california-santa-cruz | University of California-Santa Cruz | Santa Cruz, CA | www.ucsc.edu
Find up to 3 new facts.
Already have: nothing yet.

### sam-houston-state-university | Sam Houston State University | Huntsville, TX | www.shsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Bearkat Promise covers at least $5,685 in mandatory tuition and fees each semester for 15 credit hours using grant funds, supporting Texas students with family income up to $100,000.

### boise-state-university | Boise State University | Boise, ID | www.boisestate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Western Undergraduate Exchange, eligible nonresident students from member states and territories can enroll at Boise State at 150 percent of resident tuition.

### old-dominion-university | Old Dominion University | Norfolk, VA | www.odu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Guaranteed Admission Agreement, Virginia Community College System students graduating with a transfer-oriented associate degree and a 2.5 GPA earn guaranteed admission to ODU.

### west-virginia-university | West Virginia University | Morgantown, WV | www.wvu.edu
Find up to 3 new facts.
Already have: nothing yet.

### mississippi-christian-university | Mississippi Christian University | Clinton, MS | www.mc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Mississippi Christian University is the oldest institution of higher learning in Mississippi and was the first co-educational institution in the United States to grant a degree to a woman.
