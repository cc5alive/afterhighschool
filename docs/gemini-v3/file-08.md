# Task: find MORE "What's special" facts for 50 US colleges (file 8 of 10)

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

### central-connecticut-state-university | Central Connecticut State University | New Britain, CT | www.ccsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pell Promise Initiative is a last-dollar scholarship covering the full cost of tuition and fees for eligible students after federal and state aid is applied.

### university-of-central-arkansas | University of Central Arkansas | Conway, AR | www.uca.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The UCA Commitment is a last-dollar scholarship covering tuition and academic fees for Arkansas students who are Pell eligible or from households earning $100,000 or less a year.

### university-of-idaho | University of Idaho | Moscow, ID | www.uidaho.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Go Idaho! program, admitted Idaho high school and transfer students receive guaranteed scholarship funding renewable for up to four years.

### rutgers-university-newark | Rutgers University-Newark | Newark, NJ | www.newark.rutgers.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the RU-N to the TOP scholarship, qualifying New Jersey residents with a household adjusted gross income of $65,000 or less receive full coverage of in-state tuition and mandatory fees.

### university-of-dayton | University of Dayton | Dayton, OH | udayton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The University of Dayton provides guaranteed net tuition for each year in an admitted student's financial aid offer, ensuring tuition will not change unexpectedly over four years.

### pace-university | Pace University | New York, NY | www.pace.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Pace Path gives every undergraduate a more individualized experience that connects academics, mentoring and real-world opportunities to their strengths and goals.

### marquette-university | Marquette University | Milwaukee, WI | www.marquette.edu
Find up to 3 new facts.
Already have: nothing yet.

### empire-state-university | Empire State University | Saratoga Springs, NY | www.sunyempire.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Empire State University awards undergraduate college credit for verifiable learning gained outside traditional coursework through an individualized Credit for Prior Learning assessment process.

### idaho-state-university | Idaho State University | Pocatello, ID | www.isu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Western Undergraduate Exchange (WUE), eligible undergraduate students from participant western states and territories pay 1.5 times the Idaho resident tuition rate across all fields of study.

### austin-peay-state-university | Austin Peay State University | Clarksville, TN | www.apsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Austin Peay State University is the only Tennessee university to offer in-state tuition rates to all military-affiliated students nationwide, including active-duty personnel, veterans, reservists, and eligible family members.

### stockton-university | Stockton University | Galloway, NJ | www.stockton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Stockton Promise, first- or second-year New Jersey students with an adjusted gross income of $0 to $65,000 have 100% of the gap between financial aid and tuition and fees covered.

### university-of-northern-iowa | University of Northern Iowa | Cedar Falls, IA | www.uni.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Incoming freshmen qualify for automatic admission at UNI by earning a Regent Admission Index (RAI) score of at least 245 based on test scores, high school GPA, and completed core courses.

### university-of-west-georgia | University of West Georgia | Carrollton, GA | www.westga.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Legal residents of Alabama, Florida, North Carolina, South Carolina, and Tennessee are eligible for in-state tuition rates at the University of West Georgia by submitting a Border State Waiver.

### the-university-of-montana | The University of Montana | Missoula, MT | www.umt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Grizzly Promise provides renewable financial support for up to four years for in-state Montana students whose families have incomes of less than $50,000 annually.

### chapman-university | Chapman University | Orange, CA | www.chapman.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Chapman University provides undergraduates with up to 4 free tuition credits during Interterm if they are enrolled full-time in both the preceding Fall and proceeding Spring semesters.

### pennsylvania-western-university | Pennsylvania Western University | California, PA | www.pennwest.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Formed in July 2022 through the merger of California, Clarion, and Edinboro universities, PennWest operates three physical residential campuses and a Global Online campus.

### the-university-of-texas-at-tyler | The University of Texas at Tyler | Tyler, TX | www.uttyler.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Patriot Promise covers 100% of tuition and mandatory fees for eligible Texas resident first-time freshmen and transfer students with household incomes of $100,000 or less.

### university-of-minnesota-duluth | University of Minnesota-Duluth | Duluth, MN | d.umn.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-wisconsin-stevens-point | University of Wisconsin-Stevens Point | Stevens Point, WI | www.uwsp.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduate students at UW-Stevens Point receive course books through a textbook rental library system, with the rental fee included directly in tuition.

### southern-methodist-university | Southern Methodist University | Dallas, TX | www.smu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All entering first-year students at SMU are assigned to one of 11 Residential Commons, where they remain affiliated throughout their time at the university.

### saint-louis-university | Saint Louis University | Saint Louis, MO | www.slu.edu
Find up to 3 new facts.
Already have: nothing yet.

### american-university | American University | Washington, DC | www.american.edu
Find up to 3 new facts.
Already have: nothing yet.

### marshall-university | Marshall University | Huntington, WV | www.marshall.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Marshall University's Metro Rate, residents of 161 counties within 150 miles of Huntington across seven states qualify for reduced out-of-state tuition.

### nova-southeastern-university | Nova Southeastern University | Fort Lauderdale, FL | www.nova.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Nova Southeastern University's Dual Admission program lets undergraduate students reserve a seat in an NSU graduate or professional program while earning their bachelor's degree and receive an annual $2,000 scholarship.

### university-of-alaska-anchorage | University of Alaska Anchorage | Anchorage, AK | www.uaa.alaska.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Eligible undergraduate students from participating western states and territories pay 150% of the in-state tuition rate at UAA through the Western Undergraduate Exchange (WUE).

### belmont-university | Belmont University | Nashville, TN | www.belmont.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- To graduate from Belmont University, students are required to complete the WELL Core program by earning 50 credits across 10 categories of wellness.

### the-college-of-new-jersey | The College of New Jersey | Ewing, NJ | www.tcnj.edu
Find up to 3 new facts.
Already have: nothing yet.

### sacred-heart-university | Sacred Heart University | Fairfield, CT | www.sacredheart.edu
Find up to 3 new facts.
Already have: nothing yet.

### bentley-university | Bentley University | Waltham, MA | www.bentley.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- At Bentley University, 89 percent of undergraduate students complete at least one internship during their education.

### jacksonville-state-university | Jacksonville State University | Jacksonville, AL | www.jsu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-the-cumberlands | University of the Cumberlands | Williamsburg, KY | www.ucumberlands.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- University of the Cumberlands provides free textbooks to all students as part of its One Price Promise.

### west-texas-a-and-m-university | West Texas A & M University | Canyon, TX | www.wtamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Buff Promise covers fall and spring in-state tuition for undergraduate Texas residents whose annual family income is $80,000 or less.

### university-of-wisconsin-oshkosh | University of Wisconsin-Oshkosh | Oshkosh, WI | www.uwosh.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-southern-university | Texas Southern University | Houston, TX | www.tsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Tiger Promise guarantees coverage of tuition and mandatory fees for eligible first-time freshmen for up to 8 consecutive semesters or 4 years.

### california-state-university-monterey-bay | California State University-Monterey Bay | Seaside, CA | csumb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every undergraduate student at Cal State Monterey Bay completes at least one service learning course as part of their degree.

### university-of-missouri-kansas-city | University of Missouri-Kansas City | Kansas City, MO | www.umkc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Roo Advantage Scholarship ensures tuition and fees are met for full-time, Pell-eligible Missouri and Kansas residents.

### slippery-rock-university-of-pennsylvania | Slippery Rock University of Pennsylvania | Slippery Rock, PA | www.sru.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Out-of-state first-year students with at least a 3.0 high school GPA qualify for a tuition reduction.

### indiana-university-of-pennsylvania | Indiana University of Pennsylvania | Indiana, PA | www.iup.edu
Find up to 3 new facts.
Already have: nothing yet.

### wright-state-university-main-campus | Wright State University-Main Campus | Dayton, OH | www.wright.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Wright Guarantee Tuition Program guarantees the same annual cost of tuition, housing, and dining over a four-year college career for incoming in-state undergraduates.

### saint-leo-university | Saint Leo University | Saint Leo, FL | www.saintleo.edu
Find up to 3 new facts.
Already have: nothing yet.

### thomas-edison-state-university | Thomas Edison State University | Trenton, NJ | www.tesu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Thomas Edison State University was founded in 1972 to provide adult students across the country with alternative methods of achieving a college education.

### murray-state-university | Murray State University | Murray, KY | www.murraystate.edu
Find up to 3 new facts.
Already have: nothing yet.

### grambling-state-university | Grambling State University | Grambling, LA | www.gram.edu
Find up to 3 new facts.
Already have: nothing yet.

### indiana-wesleyan-university-national-and-global | Indiana Wesleyan University-National & Global | Marion, IN | www.indwes.edu
Find up to 3 new facts.
Already have: nothing yet.

### valdosta-state-university | Valdosta State University | Valdosta, GA | www.valdosta.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Valdosta State University offers a Border States Waiver for undergraduate students residing in Alabama, Florida, North Carolina, South Carolina, and Tennessee.

### william-paterson-university-of-new-jersey | William Paterson University of New Jersey | Wayne, NJ | www.wpunj.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- New Jersey students with a family adjusted gross income of $65,000 or less have tuition and fees covered through Pledge 4 Success and the Garden State Guarantee.

### texas-a-and-m-university-san-antonio | Texas A&M University-San Antonio | San Antonio, TX | www.tamusa.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Jaguar Promise is a last-dollar scholarship program that awards free tuition, fees, and books for eligible undergraduate students.

### university-of-alabama-in-huntsville | University of Alabama in Huntsville | Huntsville, AL | www.uah.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The University of Alabama in Huntsville is the anchor tenant of Cummings Research Park, the second-largest corporate research and technology park in the United States.

### middle-georgia-state-university | Middle Georgia State University | Macon, GA | www.mga.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Middle Georgia State University's Eastman Campus is the only campus in the University System of Georgia that offers flight training and airport management programs.

### the-new-school | The New School | New York, NY | www.newschool.edu
Find up to 3 new facts.
Already have: nothing yet.
