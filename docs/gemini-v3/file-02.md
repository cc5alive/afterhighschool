# Task: find MORE "What's special" facts for 50 US colleges (file 2 of 10)

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

### university-of-california-santa-barbara | University of California-Santa Barbara | Santa Barbara, CA | www.ucsb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- In UCSB's College of Creative Studies, students choose one of nine majors when they apply, from art and biology to math, physics, and writing and literature.

### middlebury-college | Middlebury College | Middlebury, VT | www.middlebury.edu/college
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Middlebury provides tuition-free enrollment for students whose families have annual incomes up to $175,000, while meeting 100% of calculated financial need for all admitted students.

### university-of-georgia | University of Georgia | Athens, GA | www.uga.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- All undergraduate students at the University of Georgia are required to complete at least one experiential learning activity before graduation.

### bowdoin-college | Bowdoin College | Brunswick, ME | www.bowdoin.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Every Bowdoin student receives an iPad and a MacBook Pro that they are permitted to keep after graduation.
- Bowdoin's financial aid packages are loan free.

### williams-college | Williams College | Williamstown, MA | www.williams.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under its All-Grant financial aid program, Williams eliminates all student loans and work-study requirements from financial aid packages, replacing them with institutional grants that do not need to be repaid.
- Williams provides a Book Grant that covers the full cost of all required textbooks and course materials for every student receiving financial aid.

### colgate-university | Colgate University | Hamilton, NY | www.colgate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students from families earning $175,000 or less generally attend Colgate tuition-free.

### university-of-washington-seattle-campus | University of Washington-Seattle Campus | Seattle, WA | www.washington.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Husky Promise covers full tuition and standard fees for Washington residents who are eligible for a Pell Grant (undocumented Washington residents can qualify too). There's no separate application; file the FAFSA or WASFA by Feb. 1.

### pomona-college | Pomona College | Claremont, CA | www.pomona.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Pomona students can take classes at any of the undergraduate Claremont Colleges, which together offer more than 2,700 courses.
- Students receiving financial aid at Pomona receive financial aid packages with no loans for eight semesters of enrollment.

### amherst-college | Amherst College | Amherst, MA | www.amherst.edu
Find up to 3 new facts.
Already have: nothing yet.

### swarthmore-college | Swarthmore College | Swarthmore, PA | www.swarthmore.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Swarthmore evaluates all first-semester students on a credit/no credit basis, meaning letter grades do not appear on the official transcript.

### california-institute-of-technology | California Institute of Technology | Pasadena, CA | www.caltech.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Caltech's campus life and academic work are governed by an Honor Code stating that no member of the community shall take unfair advantage of any other member.
- All Caltech undergraduates must complete a STEM core curriculum including a yearlong physics course and mathematics covering multivariable calculus and linear algebra.

### wake-forest-university | Wake Forest University | Winston-Salem, NC | www.wfu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Beginning in fall 2026, undergraduate students from North Carolina with family incomes under $200,000 per year will attend Wake Forest University tuition-free.

### grand-canyon-university | Grand Canyon University | Phoenix, AZ | www.gcu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Grand Canyon University has kept tuition rates frozen for traditional campus students since 2009.

### university-of-illinois-urbana-champaign | University of Illinois Urbana-Champaign | Champaign, IL | www.illinois.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Illinois Commitment covers full tuition and campus fees for up to four years for Illinois residents with family income and family assets each $75,000 or less. There's no separate application; file the FAFSA by March 15.

### university-of-south-florida | University of South Florida | Tampa, FL | www.usf.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through FUSE, students at eight partner Florida colleges are guaranteed admission into specific USF majors if they finish an associate degree in under three years with at least a 2.0 GPA.

### university-of-california-davis | University of California-Davis | Davis, CA | ucdavis.edu
Find up to 3 new facts.
Already have: nothing yet.

### clemson-university | Clemson University | Clemson, SC | www.clemson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Clemson University students enrolled in the Cooperative Education Program do not pay tuition while on rotation with their company.

### wesleyan-university | Wesleyan University | Middletown, CT | www.wesleyan.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Wesleyan University does not include loans in undergraduate financial aid packages, covering 100% of remaining demonstrated need across tuition, housing, books, supplies, and personal expenses.
- Wesleyan University features an open curriculum where General Education Expectations provide a framework for exploration instead of a rigid set of requirements.

### the-university-of-tennessee-knoxville | The University of Tennessee-Knoxville | Knoxville, TN | www.utk.edu
Find up to 3 new facts.
Already have: nothing yet.

### arizona-state-university-campus-immersion | Arizona State University Campus Immersion | Tempe, AZ | www.asu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- ASU's charter says it measures success "not by whom it excludes, but by whom it includes and how they succeed." That's unusual for a major research university.
- Barrett, The Honors College, gives students a small residential college inside a very large research university. It serves students on all four ASU campuses and online.

### wellesley-college | Wellesley College | Wellesley, MA | www.wellesley.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Wellesley students can cross-register for classes at the Massachusetts Institute of Technology, Babson College, Brandeis University, and Olin College of Engineering, with access to dual-degree engineering programs.

### college-of-the-holy-cross | College of the Holy Cross | Worcester, MA | www.holycross.edu
Find up to 3 new facts.
Already have: nothing yet.

### texas-a-and-m-university-college-station | Texas A&M University-College Station | College Station, TX | www.tamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Texas students who graduate in the top 10% of their high school class are admitted automatically. Out-of-state applicants don't qualify and are reviewed holistically.

### north-carolina-state-university-at-raleigh | North Carolina State University at Raleigh | Raleigh, NC | www.ncsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Goodnight Scholars Program gives $23,000 a year, renewable for four years, to students from low- and middle-income North Carolina families studying STEM or related education majors. You need an invitation to apply.

### hamilton-college | Hamilton College | Clinton, NY | www.hamilton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Hamilton has no core curriculum or distribution requirements.

### villanova-university | Villanova University | Villanova, PA | www.villanova.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1842, Villanova is one of two Catholic, Augustinian colleges in the United States; the other is Merrimack College.

### university-of-wisconsin-madison | University of Wisconsin-Madison | Madison, WI | www.wisc.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Bucky's Tuition Promise pays tuition and segregated fees for four years for new Wisconsin residents whose household income is $65,000 or less. Assets don't count, and there's no separate application, only the FAFSA (and, for fall 2026 entrants, the CSS Profile).
- For Pell-eligible Wisconsin residents, Bucky's Pell Pathway goes further: grants, scholarships and work-study that meet full financial need, including housing and food, for four years.

### claremont-mckenna-college | Claremont McKenna College | Claremont, CA | www.cmc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Four nights a week during the school year, the Athenaeum brings scholars, public figures and artists to campus to engage with students.

### babson-college | Babson College | Wellesley, MA | www.babson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every Babson student takes Foundations of Management and Entrepreneurship, where teams come up with a business idea and work out whether it's feasible.

### davidson-college | Davidson College | Davidson, NC | davidson.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Davidson admits students regardless of their family's ability to pay and meets 100% of calculated need without loans.

### lehigh-university | Lehigh University | Bethlehem, PA | www.lehigh.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Lehigh Commitment provides a full tuition grant to undergraduate students from families with total incomes under $75,000.

### washington-and-lee-university | Washington and Lee University | Lexington, VA | www.wlu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Johnson Scholarships cover tuition, fees, housing and food, plus $10,000 for a summer experience.

### bates-college | Bates College | Lewiston, ME | www.bates.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Bates has a four-week Short Term from late April through May, when students take just one class.

### california-state-university-long-beach | California State University-Long Beach | Long Beach, CA | www.csulb.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Long Beach College Promise, eligible local graduates get a tuition-free first year at Long Beach City College and guaranteed admission to Cal State Long Beach if academically eligible.

### liberty-university | Liberty University | Lynchburg, VA | www.liberty.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Liberty University requires attendance at Convocation for all on-campus, residential students.

### university-of-maryland-college-park | University of Maryland-College Park | College Park, MD | www.umd.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Terrapin Commitment covers standard in-state tuition and fees for full-time Maryland students who are Pell-eligible or have family income of $75,000 or less. File the FAFSA by March 1 each year.

### university-of-maryland-global-campus | University of Maryland Global Campus | Adelphi, MD | www.umgc.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Students do not need to buy traditional textbooks for most courses, as the university embeds no-cost open digital course materials directly into online classrooms.

### minerva-university | Minerva University | San Francisco, CA | www.minerva.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Minerva University undergraduates rotate through multiple global cities over four years, taking coursework integrated with each metropolitan location while living in common residence halls.

### denison-university | Denison University | Granville, OH | www.denison.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Under The Denison Commitment, families with a total family income of $100,000 or less pay $0 toward tuition.
- Denison meets 100% of demonstrated financial need for all admitted students, including international students.

### college-of-the-ozarks | College of the Ozarks | Point Lookout, MO | www.cofo.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Every student works on campus 15 hours a week, plus two 40-hour work weeks each school year.
- The college doesn't participate in federal, state or private student loan programs.

### haverford-college | Haverford College | Haverford, PA | www.haverford.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under Haverford's student-administered Honor Code, all exams are self-scheduled, and every senior must complete a senior thesis to graduate.

### ohio-state-university-main-campus | Ohio State University-Main Campus | Columbus, OH | www.osu.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Ohio residents who qualify for a Pell Grant and show significant need get aid covering full tuition and mandatory fees, on any Ohio State campus. There's no separate application; eligibility comes from the FAFSA, so file by the priority deadline.
- Second-year students can join STEP: a small group that meets weekly with a faculty mentor, plus a fellowship of up to $2,000 for a project of their own.

### grinnell-college | Grinnell College | Grinnell, IA | www.grinnell.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Grinnell College has no general education requirements or core curriculum, requiring only the First-Year Tutorial and First-Year Experience courses.

### purdue-university-main-campus | Purdue University-Main Campus | West Lafayette, IN | www.purdue.edu
Find up to 2 new facts.
Already have (don't repeat these or cover the same topic):
- Base tuition has been frozen for 14 years in a row, through 2026–27, and Indiana residents pay under $10,000 a year in base tuition and fees.
- Purdue expects applicants to send SAT, ACT or CLT scores, a policy it brought back for students entering in fall 2024. Applying without one is allowed only in exceptional cases: in 2026, 98.3% of admitted students had a test score.

### vassar-college | Vassar College | Poughkeepsie, NY | www.vassar.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Vassar's open curriculum has no core classes or distribution requirements, allowing students to take the courses that most interest them.

### university-of-arizona | University of Arizona | Tucson, AZ | www.arizona.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Guaranteed Tuition Program, your tuition rate stays the same for eight consecutive fall and spring semesters.

### pennsylvania-state-university-main-campus | Pennsylvania State University-Main Campus | University Park, PA | psu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the 2+2 Plan, many students start at another Penn State campus and move to the campus that offers their major for the last two years, without reapplying. Major entrance requirements are the same wherever you start.

### binghamton-university | Binghamton University | Vestal, NY | www.binghamton.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Binghamton University offers the First-year Research Immersion (FRI) program for first-year STEM students to conduct hands-on research.

### kennesaw-state-university | Kennesaw State University | Kennesaw, GA | www.kennesaw.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Kennesaw State is Georgia's third-largest university, with more than 51,000 students on two campuses in Kennesaw and Marietta.

### michigan-state-university | Michigan State University | East Lansing, MI | www.msu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Spartan Tuition Advantage covers full tuition for incoming first-years who qualify for in-state tuition, are Pell-eligible and have household income of $75,000 or less. You just apply for admission and file the FAFSA.
