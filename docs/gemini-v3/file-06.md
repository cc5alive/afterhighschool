# Task: find MORE "What's special" facts for 50 US colleges (file 6 of 10)

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

### university-of-houston-downtown | University of Houston-Downtown | Houston, TX | www.uhd.edu
Find up to 3 new facts.
Already have: nothing yet.

### cuny-queens-college | CUNY Queens College | Queens, NY | www.qc.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### california-state-university-dominguez-hills | California State University-Dominguez Hills | Carson, CA | www.csudh.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Starting in fall 2026, the Toro Tuition Pledge covers tuition and mandatory fees for four years (two for transfers) for California students who qualify for a Pell Grant or have an equivalent Student Aid Index, enroll full-time and keep making academic progress. Housing, parking and textbooks aren't covered.

### cuny-city-college | CUNY City College | New York, NY | www.ccny.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### the-cooper-union-for-the-advancement-of-science-and-art | The Cooper Union for the Advancement of Science and Art | New York, NY | www.cooper.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every admitted undergraduate gets at least a half-tuition scholarship, and in 2025–26 half of students had their full tuition covered. Cooper Union plans to be fully tuition-free by 2028–29.

### university-of-louisiana-at-lafayette | University of Louisiana at Lafayette | Lafayette, LA | www.louisiana.edu
Find up to 3 new facts.
Already have: nothing yet.

### oberlin-college | Oberlin College | Oberlin, OH | www.oberlin.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All students must complete three Winter Term projects consisting of 100 hours of focused work as a graduation requirement.

### oakland-university | Oakland University | Rochester Hills, MI | www.oakland.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Golden Guarantee covers 100% of tuition for four years for incoming Michigan freshmen who receive the Michigan Achievement Scholarship, have family income up to $70,000, and have assets under $50,000.

### eastern-kentucky-university | Eastern Kentucky University | Richmond, KY | www.eku.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Starting in fall 2026, undergraduate students receive course textbooks at an at-cost flat rate of $26 per credit hour through the EKU BookSmart program with Barnes & Noble, with the option to opt out.

### north-carolina-a-and-t-state-university | North Carolina A & T State University | Greensboro, NC | www.ncat.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- North Carolina A&T State University is America's largest HBCU, with an enrollment of 14,331 students.

### western-kentucky-university | Western Kentucky University | Bowling Green, KY | www.wku.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Hilltopper Guarantee provides 100% tuition coverage for eligible Kentucky freshmen who receive Pell and CAP grants with at least a 3.0 high school GPA.

### pitzer-college | Pitzer College | Claremont, CA | www.pitzer.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Pitzer operates within The Claremont Colleges consortium, giving students cross-registration and campus access across seven contiguous institutions.

### new-mexico-state-university-main-campus | New Mexico State University-Main Campus | Las Cruces, NM | www.nmsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Aggie Pathway Program allows students to begin at an NMSU community college campus before transferring to the Las Cruces campus.

### university-of-vermont | University of Vermont | Burlington, VT | www.uvm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the UVM Promise, Vermont students with family adjusted gross income of $100,000 or less receive grant aid covering full tuition and comprehensive fees.

### loyola-university-chicago | Loyola University Chicago | Chicago, IL | www.luc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students at Loyola's Arrupe College receive a laptop computer, a CTA transit pass, and breakfast and lunch on class days.

### minnesota-state-university-mankato | Minnesota State University-Mankato | Mankato, MN | mnsu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-alabama-at-birmingham | University of Alabama at Birmingham | Birmingham, AL | www.uab.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UAB's Early Medical School Acceptance Program (EMSAP) offers assured admission to the UAB Heersink School of Medicine upon undergraduate completion.

### cuny-john-jay-college-of-criminal-justice | CUNY John Jay College of Criminal Justice | New York, NY | www.jjay.cuny.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-massachusetts-boston | University of Massachusetts-Boston | Boston, MA | www.umb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Beacon Pledge, eligible Massachusetts residents with adjusted gross income of $75,000 or less can attend UMass Boston for $0 in tuition and mandatory fees.

### university-of-nebraska-at-omaha | University of Nebraska at Omaha | Omaha, NE | www.unomaha.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Nebraska Promise covers all remaining tuition costs for eligible students with family income of $65,000 or less or who receive a Pell Grant.

### university-of-massachusetts-lowell | University of Massachusetts-Lowell | Lowell, MA | www.uml.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UMass Lowell's business school offers co-ops: full-time, paid work experiences, usually six months long, tied to your academic program.

### kean-university | Kean University | Union, NJ | www.kean.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Kean University is the only American public university to offer a full campus in China.

### georgia-gwinnett-college | Georgia Gwinnett College | Lawrenceville, GA | www.ggc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Georgia Gwinnett College holds the distinction of being the nation's first four-year public college founded in the 21st century.

### northern-illinois-university | Northern Illinois University | Dekalb, IL | www.niu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-new-hampshire-main-campus | University of New Hampshire-Main Campus | Durham, NH | www.unh.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the New Hampshire Promise, incoming first-year New Hampshire residents with family income up to $100,000 can pay no tuition.

### texas-a-and-m-international-university | Texas A & M International University | Laredo, TX | www.tamiu.edu
Find up to 3 new facts.
Already have: nothing yet.

### loyola-marymount-university | Loyola Marymount University | Los Angeles, CA | www.lmu.edu
Find up to 3 new facts.
Already have: nothing yet.

### national-university | National University | San Diego, CA | www.nu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- National University offers courses in four-week and eight-week formats with monthly start dates that let students take one course at a time.

### wichita-state-university | Wichita State University | Wichita, KS | www.wichita.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Shocker Promise is a four-year last-payee scholarship covering remaining tuition and fees for eligible students after all other gift aid is applied.

### university-of-maryland-baltimore-county | University of Maryland-Baltimore County | Baltimore, MD | umbc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UMBC's Meyerhoff Scholars Program supports high-achieving high school seniors who intend to pursue doctoral study in STEM fields.

### cuny-lehman-college | CUNY Lehman College | Bronx, NY | www.lehman.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students in the Macaulay Honors program at Lehman College graduate with a dual degree from both institutions.

### college-of-charleston | College of Charleston | Charleston, SC | www.charleston.edu
Find up to 3 new facts.
Already have: nothing yet.

### cuny-brooklyn-college | CUNY Brooklyn College | Brooklyn, NY | www.brooklyn.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Macaulay Honors students at Brooklyn College receive a full-tuition scholarship and support from the Macaulay Opportunities Fund.

### university-of-colorado-denver-anschutz-medical-campus | University of Colorado Denver/Anschutz Medical Campus | Denver, CO | www.ucdenver.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The CU Promise guarantees that qualifying low-income Colorado residents can cover the academic costs of college without going into debt.

### fordham-university | Fordham University | Bronx, NY | www.fordham.edu
Find up to 3 new facts.
Already have: nothing yet.

### coastal-carolina-university | Coastal Carolina University | Conway, SC | www.coastal.edu
Find up to 3 new facts.
Already have: nothing yet.

### bellevue-university | Bellevue University | Bellevue, NE | www.bellevue.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Bellevue University offers cohort degree programs where students advance through their entire major course-by-course with the same community of peers.

### university-of-central-oklahoma | University of Central Oklahoma | Edmond, OK | www.uco.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UCO uses the Student Transformative Learning Record (STLR) as a second transcript to document student development in beyond-disciplinary skills.

### university-of-southern-mississippi | University of Southern Mississippi | Hattiesburg, MS | www.usm.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Southern Miss offers Mississippi's only ocean engineering degree, which is one of just 10 such programs nationwide.

### the-university-of-tennessee-chattanooga | The University of Tennessee-Chattanooga | Chattanooga, TN | utc.edu
Find up to 3 new facts.
Already have: nothing yet.

### eastern-michigan-university | Eastern Michigan University | Ypsilanti, MI | www.emich.edu
Find up to 3 new facts.
Already have: nothing yet.

### central-michigan-university | Central Michigan University | Mount Pleasant, MI | www.cmich.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Central Michigan University's Central Career Guarantee promises qualifying undergraduates a job offer or graduate school admission within six months of graduating.

### western-carolina-university | Western Carolina University | Cullowhee, NC | www.wcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under NC Promise, undergraduate tuition at Western Carolina University is $500 per semester for in-state students and $3,500 for out-of-state students.

### east-tennessee-state-university | East Tennessee State University | Johnson City, TN | www.etsu.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-north-dakota | University of North Dakota | Grand Forks, ND | und.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- UND's John D. Odegard School of Aerospace Sciences operates one of the largest civilian aircraft fleets in North America.

### kenyon-college | Kenyon College | Gambier, OH | www.kenyon.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every student completes a senior capstone, often tying together ideas and themes across courses and interests.

### east-texas-a-and-m-university | East Texas A&M University | Commerce, TX | www.etamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The President's Promise Scholarship covers 100% of remaining tuition costs for up to four years for new freshmen and two years for new transfer students.

### california-state-university-east-bay | California State University-East Bay | Hayward, CA | www.csueastbay.edu
Find up to 3 new facts.
Already have: nothing yet.

### troy-university | Troy University | Troy, AL | www.troy.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Troy University caps tuition at $250 per credit hour for active-duty service members, reservists, and National Guard personnel.

### university-of-toledo | University of Toledo | Toledo, OH | www.utoledo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Toledo Tuition Guarantee Plan provides undergraduate students with a fixed tuition rate and fixed select fees for four years.
