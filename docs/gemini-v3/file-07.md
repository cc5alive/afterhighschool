# Task: find MORE "What's special" facts for 50 US colleges (file 7 of 10)

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

### crown-college | Crown College | Saint Bonifacius, MN | www.crown.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Any new incoming on-campus student currently attending a Christian and Missionary Alliance (C&MA) church receives a 50% tuition discount.

### fort-hays-state-university | Fort Hays State University | Hays, KS | www.fhsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Fort Hays State hosts the Kansas Academy of Mathematics and Science, an early college program providing a STEM experience for 11th and 12th grade students.

### college-of-staten-island-cuny | College of Staten Island CUNY | Staten Island, NY | www.csi.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### farmingdale-state-college | Farmingdale State College | Farmingdale, NY | www.farmingdale.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Farmingdale State College operates the only public four-year professional pilot degree program in New York State.

### southeastern-louisiana-university | Southeastern Louisiana University | Hammond, LA | www.southeastern.edu
Find up to 3 new facts.
Already have: nothing yet.

### st-john-s-university-new-york | St. John's University-New York | Queens, NY | www.stjohns.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduates in St. John's Discover the World: Europe program spend a semester studying across three cities: Rome, Paris, and Seville.

### north-dakota-state-university-main-campus | North Dakota State University-Main Campus | Fargo, ND | www.ndsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- NDSU's Tuition Award Program covers base tuition and mandatory fees during the first two years for eligible North Dakota and Minnesota students.

### university-of-wisconsin-whitewater | University of Wisconsin-Whitewater | Whitewater, WI | www.uww.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-west-florida | University of West Florida | Pensacola, FL | uwf.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Argo 30 Guarantee covers tuition and mandatory fees not met by other grants or scholarships for qualifying Pell-eligible Florida residents.

### southern-utah-university | Southern Utah University | Cedar City, UT | www.suu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-wisconsin-la-crosse | University of Wisconsin-La Crosse | La Crosse, WI | www.uwlax.edu
Find up to 3 new facts.
Already have: nothing yet.

### commonwealth-university-of-pennsylvania | Commonwealth University of Pennsylvania | Bloomsburg, PA | www.commonwealthu.edu
Find up to 3 new facts.
Already have: nothing yet.

### south-dakota-state-university | South Dakota State University | Brookings, SD | www.sdstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### embry-riddle-aeronautical-university-worldwide | Embry-Riddle Aeronautical University-Worldwide | Daytona Beach, FL | worldwide.erau.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Embry-Riddle Worldwide allows students to pursue degrees online or across more than 110 global physical locations.

### arkansas-state-university | Arkansas State University | Jonesboro, AR | www.astate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The A-State Promise Plus operates as a last-dollar scholarship covering remaining costs after federal grants and state lottery scholarships are applied.

### university-of-akron-main-campus | University of Akron Main Campus | Akron, OH | www.uakron.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The University of Akron guarantees that undergraduate tuition, select fees, and room and board rates will not increase for four years.

### bryn-mawr-college | Bryn Mawr College | Bryn Mawr, PA | www.brynmawr.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Bryn Mawr and Haverford Colleges join together with Swarthmore College to form the Tri-College Consortium, allowing students to take classes across campuses and choose collaborative inter-institutional majors.

### morgan-state-university | Morgan State University | Baltimore, MD | www.morgan.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The National Trust for Historic Preservation named Morgan State University a National Treasure.

### new-jersey-institute-of-technology | New Jersey Institute of Technology | Newark, NJ | www.njit.edu
Find up to 3 new facts.
Already have: nothing yet.

### cleveland-state-university | Cleveland State University | Cleveland, OH | www.csuohio.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Starting in fall 2027, incoming first-year students with at least a 3.0 high school GPA and family AGI of $125,000 or less pay no tuition for up to eight consecutive semesters.

### university-of-wisconsin-eau-claire | University of Wisconsin-Eau Claire | Eau Claire, WI | www.uwec.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UW-Eau Claire requires every student to complete an approved community-engaged learning project as a graduation requirement.

### university-of-south-alabama | University of South Alabama | Mobile, AL | www.southalabama.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- South Alabama's Early Acceptance Program offers qualifying high school seniors conditional admission to the Frederick P. Whiddon College of Medicine.

### prairie-view-a-and-m-university | Prairie View A & M University | Prairie View, TX | www.pvamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Panther Promise Program guarantees tuition support grants of up to $2,000 for undergraduate students with family incomes of $30,000 or less.

### texas-woman-s-university | Texas Woman's University | Denton, TX | www.twu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Texas Woman's University is the largest university system in the nation focused on women.

### southern-illinois-university-edwardsville | Southern Illinois University Edwardsville | Edwardsville, IL | www.siue.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The SIUE Commitment covers remaining tuition, mandatory fees, and course fees for qualifying Illinois students after other aid is applied.

### stephen-f-austin-state-university | Stephen F Austin State University | Nacogdoches, TX | www.sfasu.edu
Find up to 3 new facts.
Already have: nothing yet.

### tennessee-technological-university | Tennessee Technological University | Cookeville, TN | www.tntech.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Tennessee Tech's Tech Promise operates as a last-dollar scholarship covering outstanding mandatory tuition and fees for qualifying students.

### university-of-colorado-colorado-springs | University of Colorado Colorado Springs | Colorado Springs, CO | www.uccs.edu
Find up to 3 new facts.
Already have: nothing yet.

### brandeis-university | Brandeis University | Waltham, MA | www.brandeis.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-state-university-bakersfield | California State University-Bakersfield | Bakersfield, CA | www.csub.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-maine | University of Maine | Orono, ME | www.umaine.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The INSPIRE Maine Scholarship promise program covers 100% of tuition and mandatory fees for up to 30 credits per year over four years for eligible Maine residents.

### southern-illinois-university-carbondale | Southern Illinois University-Carbondale | Carbondale, IL | siu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Saluki Commitment, SIU pledges to cover whatever tuition and mandatory fees are not covered by a qualifying new or transfer student's financial aid package.
- SIU has eliminated out-of-state tuition rates for undergraduate students regardless of which state they call home.

### california-state-university-stanislaus | California State University-Stanislaus | Turlock, CA | www.csustan.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Stanislaus State Two Year Graduation Pledge Program guarantees graduation within two years for California residents enrolling with an Associate Degree for Transfer.

### university-of-california-merced | University of California-Merced | Merced, CA | ucmerced.edu
Find up to 3 new facts.
Already have: nothing yet.

### louisiana-tech-university | Louisiana Tech University | Ruston, LA | www.latech.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Louisiana Tech runs on quarters that award semester hours: three quarters (fall, winter, spring) equal two semesters elsewhere.

### northern-kentucky-university | Northern Kentucky University | Highland Heights, KY | www.nku.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-baptist-university | California Baptist University | Riverside, CA | www.calbaptist.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduate students registered for 7 or more units at California Baptist University are required to enroll in Chapel (GNST0500).

### lamar-university | Lamar University | Beaumont, TX | www.lamar.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Lamar Promise Program, undergraduate Texas residents from households earning no more than $40,000 receive grant or scholarship aid covering the full amount of fall and spring in-state tuition and fees.

### ferris-state-university | Ferris State University | Big Rapids, MI | www.ferris.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Ferris Pledge, incoming first-year Michigan residents eligible for a Pell Grant have their full tuition and required fees covered by scholarships and grants.

### texas-a-and-m-university-corpus-christi | Texas A & M University-Corpus Christi | Corpus Christi, TX | www.tamucc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Islander Guarantee covers tuition and mandatory fees for 15 credit hours for newly enrolled freshman Texas residents whose family adjusted gross income is $125,000 or less.

### youngstown-state-university | Youngstown State University | Youngstown, OH | ysu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Penguin Tuition Promise, undergraduate tuition is fixed based on first enrollment and remains unchanged for four consecutive academic years.

### university-of-virginia-s-college-at-wise | University of Virginia's College at Wise | Wise, VA | www.uvawise.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the UVA Wise Within Reach program, any Virginia student whose family income is $80,000 or less who qualifies for admission will have tuition and fees paid on their behalf.

### university-of-wyoming | University of Wyoming | Laramie, WY | www.uwyo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Wind River Promise Fund covers the full cost of undergraduate tuition and mandatory fees for Wyoming residents who are enrolled members of the Eastern Shoshone Tribe or Northern Arapaho Tribe.

### wilmington-university | Wilmington University | New Castle, DE | www.wilmu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Wilmington University operates under an open admissions policy and welcomes applications from all interested potential students.

### santa-clara-university | Santa Clara University | Santa Clara, CA | www.scu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Santa Clara University is California's oldest operating institution of higher learning.

### pennsylvania-state-university-world-campus | Pennsylvania State University-World Campus | University Park, PA | worldcampus.psu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Penn State World Campus charges online learners the same tuition rate whether they live in Pennsylvania, across the country, or around the world, with no higher out-of-state rate.

### embry-riddle-aeronautical-university-daytona-beach | Embry-Riddle Aeronautical University-Daytona Beach | Daytona Beach, FL | daytonabeach.erau.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Embry-Riddle teaches the science, practice and business of aviation and aerospace, preparing students for leadership in industry, government and the military.

### mount-holyoke-college | Mount Holyoke College | South Hadley, MA | www.mtholyoke.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Mount Holyoke College is a women's college that is gender diverse.
- Mount Holyoke's Lynk program provides internship funding and career resources to every sophomore and junior.

### central-washington-university | Central Washington University | Ellensburg, WA | www.cwu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Central Washington University operates on a quarter system academic calendar rather than a traditional semester calendar.

### bridgewater-state-university | Bridgewater State University | Bridgewater, MA | www.bridgew.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Bridgewater Commitment covers the full cost of tuition and mandatory fees for in-state students from families earning $125,000 or less.
