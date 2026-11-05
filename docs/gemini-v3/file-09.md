# Task: find MORE "What's special" facts for 50 US colleges (file 9 of 10)

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

### northern-michigan-university | Northern Michigan University | Marquette, MI | www.nmu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Undergraduate tuition at Northern Michigan University includes the use of a laptop computer for all full-time students.

### quinnipiac-university | Quinnipiac University | Hamden, CT | www.qu.edu
Find up to 3 new facts.
Already have: nothing yet.

### hofstra-university | Hofstra University | Hempstead, NY | www.hofstra.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Hofstra University is the only university to ever host three consecutive presidential debates.

### unity-environmental-university | Unity Environmental University | New Gloucester, ME | unity.edu
Find up to 3 new facts.
Already have: nothing yet.

### elon-university | Elon University | Elon, NC | www.elon.edu
Find up to 3 new facts.
Already have: nothing yet.

### connecticut-college | Connecticut College | New London, CT | www.conncoll.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Connecticut College was one of the first colleges in the country to offer internship funding to every eligible student.

### southeast-missouri-state-university | Southeast Missouri State University | Cape Girardeau, MO | www.semo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The Will To Do award ensures students will pay $0 out of pocket in tuition and general fees by covering any remaining amount after other aid is applied.

### university-of-wisconsin-green-bay | University of Wisconsin-Green Bay | Green Bay, WI | www.uwgb.edu
Find up to 3 new facts.
Already have: nothing yet.

### southern-connecticut-state-university | Southern Connecticut State University | New Haven, CT | www.southernct.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-st-thomas-mn | University of St Thomas | Saint Paul, MN | www.stthomas.edu
Find up to 3 new facts.
Already have: nothing yet.

### eastern-washington-university | Eastern Washington University | Cheney, WA | www.ewu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Admitted students from 16 western states and territories are eligible for the WUE scholarship at Eastern Washington University with no GPA requirements.

### indiana-state-university | Indiana State University | Terre Haute, IN | indianastate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Under the Sycamore Graduation Guarantee, Indiana State University will pay tuition and mandatory fees for remaining courses if an eligible student is unable to complete their degree in four years.

### kutztown-university-of-pennsylvania | Kutztown University of Pennsylvania | Kutztown, PA | www.kutztown.edu
Find up to 3 new facts.
Already have: nothing yet.

### colorado-school-of-mines | Colorado School of Mines | Golden, CO | www.mines.edu
Find up to 3 new facts.
Already have: nothing yet.

### alabama-a-and-m-university | Alabama A & M University | Normal, AL | www.aamu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Alabama A&M University functions as an 1890 land-grant institution and historically Black college and university (HBCU).

### state-university-of-new-york-at-new-paltz | State University of New York at New Paltz | New Paltz, NY | www.newpaltz.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- In partnership with MakerBot, SUNY New Paltz opened the nation's first MakerBot Innovation Center in 2014.

### north-carolina-central-university | North Carolina Central University | Durham, NC | www.nccu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Full-time undergraduate students at North Carolina Central University are required to complete 15 hours of community service each semester.

### university-of-houston-clear-lake | University of Houston-Clear Lake | Houston, TX | www.uhcl.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Hawk Promise, eligible Texas freshmen and transfer students from families with incomes up to $100,000 can have tuition and mandatory fees covered.

### salisbury-university | Salisbury University | Salisbury, MD | www.salisbury.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Sea Gull Pell Promise, Salisbury University covers any remaining tuition costs once eligible students' scholarships, grants, and benefits are applied.

### radford-university | Radford University | Radford, VA | www.radford.edu
Find up to 3 new facts.
Already have: nothing yet.

### seton-hall-university | Seton Hall University | South Orange, NJ | www.shu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Every Seton Hall University student is required to take three Core classes that connect Catholic thought with academic fields like the sciences, literature, and history.

### delaware-state-university | Delaware State University | Dover, DE | www.desu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Delaware State University offers a four-year, full-tuition Inspire Scholarship to eligible Delaware high school graduates who enroll full time right after graduation with at least a 2.75 cumulative GPA.

### university-of-denver | University of Denver | Denver, CO | www.du.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Cherrington Global Scholars program, the University of Denver pays for students' flights to and from their study abroad locations.

### saginaw-valley-state-university | Saginaw Valley State University | University Center, MI | www.svsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- The SVSU Cardinal Commitment covers tuition for eligible new first-time students for up to five continuous years or until bachelor's degree completion.

### university-of-north-carolina-school-of-the-arts | University of North Carolina School of the Arts | Winston Salem, NC | www.uncsa.edu
Find up to 3 new facts.
Already have: nothing yet.

### albany-state-university | Albany State University | Albany, GA | www.asurams.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Founded in 1903, Albany State University is a Historically Black College and University (HBCU) in Georgia.

### michigan-technological-university | Michigan Technological University | Houghton, MI | www.mtu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Michigan Tech offers the Enterprise Program, a project-based curriculum where multidisciplinary student teams operate like companies on real-world client projects.

### university-of-michigan-dearborn | University of Michigan-Dearborn | Dearborn, MI | umdearborn.edu
Find up to 3 new facts.
Already have: nothing yet.

### georgia-college-and-state-university | Georgia College & State University | Milledgeville, GA | www.gcsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Georgia College & State University is the state of Georgia's designated public liberal arts university.

### state-university-of-new-york-at-cortland | State University of New York at Cortland | Cortland, NY | www2.cortland.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- SUNY Cortland operates educational facilities at Raquette Lake in the Adirondacks, including Camp Huntington, the only National Historic Landmark in the SUNY system.

### university-of-west-alabama | University of West Alabama | Livingston, AL | www.uwa.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-wisconsin-stout | University of Wisconsin-Stout | Menomonie, WI | www.uwstout.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- As Wisconsin's polytechnic university, UW-Stout has three times as many labs and studios as traditional classrooms.

### university-of-wisconsin-platteville | University of Wisconsin-Platteville | Platteville, WI | www.uwplatt.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through the Pioneer Pledge, UW-Platteville guarantees full tuition and fee coverage for new Pell-eligible freshmen on the Platteville campus.

### gettysburg-college | Gettysburg College | Gettysburg, PA | www.gettysburg.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-north-alabama | University of North Alabama | Florence, AL | www.una.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- North Alabama has a live lion mascot, whose paw print is set in Pride Rock, a granite stone on campus.

### clark-university | Clark University | Worcester, MA | www.clarku.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Clark University offers an Accelerated B.A./Master's Degree Program that provides a fifth year of study tuition-free for qualifying undergraduate students.

### suny-brockport | SUNY Brockport | Brockport, NY | www.brockport.edu
Find up to 3 new facts.
Already have: nothing yet.

### fayetteville-state-university | Fayetteville State University | Fayetteville, NC | www.uncfsu.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Starting in fall 2027, undergraduate tuition at Fayetteville State is $500 a semester for in-state students and $4,000 for out-of-state students.

### mercy-university | Mercy University | Dobbs Ferry, NY | www.mercy.edu
Find up to 3 new facts.
Already have: nothing yet.

### millersville-university-of-pennsylvania | Millersville University of Pennsylvania | Millersville, PA | www.millersville.edu
Find up to 3 new facts.
Already have: nothing yet.

### rensselaer-polytechnic-institute | Rensselaer Polytechnic Institute | Troy, NY | www.rpi.edu
Find up to 3 new facts.
Already have: nothing yet.

### purdue-university-northwest | Purdue University Northwest | Hammond, IN | www.pnw.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-san-diego | University of San Diego | San Diego, CA | www.sandiego.edu
Find up to 3 new facts.
Already have: nothing yet.

### maryville-university-of-saint-louis | Maryville University of Saint Louis | Saint Louis, MO | www.maryville.edu
Find up to 3 new facts.
Already have: nothing yet.

### university-of-central-missouri | University of Central Missouri | Warrensburg, MO | www.ucmo.edu
Find up to 3 new facts.
Already have: nothing yet.

### angelo-state-university | Angelo State University | San Angelo, TX | www.angelo.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Angelo State awards Carr Academic Scholarships supported by a $130 million endowment, among the largest at any regional university in the nation.

### louisiana-state-university-at-alexandria | Louisiana State University at Alexandria | Alexandria, LA | www.lsua.edu
Find up to 3 new facts.
Already have: nothing yet.

### columbus-state-university | Columbus State University | Columbus, GA | www.columbusstate.edu
Find up to 3 new facts.
Already have: nothing yet.

### metropolitan-state-university | Metropolitan State University | Saint Paul, MN | www.metrostate.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Through Metro State's College of Individualized Studies, undergraduate students create a self-designed and faculty-approved degree plan.

### augusta-university | Augusta University | Augusta, GA | www.augusta.edu
Find up to 3 new facts.
Already have (don't repeat these or cover the same topic):
- Augusta University traces its institutional origins to December 10, 1828, with the founding of the Medical College of Georgia.
