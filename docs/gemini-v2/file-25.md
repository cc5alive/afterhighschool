# Task: find "What's special" facts for 50 US colleges (file 25 of 27)

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. Each college page has a "What's special" section: a few short facts that set the school apart, each linked to its source. Families act on these, so accuracy matters more than coverage.

## How to work

1. **Browse live.** Use Google Search and open the pages you cite. Don't answer from memory. If you can't browse, reply only: BROWSING UNAVAILABLE.
2. **Check these pages for each school** before giving up: the admissions homepage, the financial aid / cost page (look for named tuition guarantees or promises), the academics or curriculum page (calendar, core requirements, required experiences), and the "about" or "history" page.
3. **Copy, don't paraphrase, the quote.** Each quote must be copied character for character from the page text. We check every quote against the live page automatically, and facts whose quote isn't there are thrown out.

## The most important rule

**Every detail in your fact must appear in your quotes.** That includes every number, dollar amount, income limit, year, eligibility condition and name. If a detail isn't in a quote, either add a second quote from the same or another page that contains it, or leave the detail out. Don't fill in anything from memory, even if you're sure it's true.

Bad: fact says "families under $75,000 pay nothing", but the quote only says "we meet 100% of need without loans."
Good: fact says "meets 100% of demonstrated need without loans", and the quote says exactly that.

## What makes a good fact

Specific, true of this school and not most similar schools, and useful to someone deciding whether to apply or whether they can afford it. Examples of the kind we want:
- A named tuition guarantee or promise, with its income limit and who qualifies
- An unusual calendar (block plan, one course at a time, quarters, a January or May term everyone takes)
- A requirement every student completes: co-op, internship, senior thesis, study abroad, work program, service
- An admissions rule: guaranteed admission, you apply to a specific college or program, an audition or nomination is required
- A structural feature: residential colleges, a cross-registration consortium, no majors, no grades
- A mission-defining identity with a concrete program: HBCU, tribal college, women's or men's college, work college, service academy

**Don't include:**
- Credit-hour counts, minimum GPAs, program lengths, accreditation
- Rules that apply to a single major (one nursing program's prerequisites, one music audition) unless the school only offers that field
- Generic offerings: honors college, study abroad, research opportunities, small classes, career services
- Marketing words: premier, renowned, world-class, nationally recognized, leading, vibrant, unique, innovative, robust, cutting-edge, best, famous. You can use "first," "only" or "largest" only when the quote says it.

Write each fact in your own words: 1–2 plain sentences, 40–300 characters, sentence case. Aim for 2–3 facts per school. Zero facts is fine when nothing qualifies; don't pad.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per school, in the order listed. No intro, no code fences, no notes after.

{"slug":"<slug exactly as listed>","researchedAt":"<today, YYYY-MM-DD>","facts":[{"text":"<fact>","sources":[{"title":"<page name>","url":"<exact https URL you opened>","quote":"<verbatim text from that page, 8–40 words>"}]}],"concerns":"<null or a short note>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. If you find nothing for a school, still output its line with "facts":[] and say why in "concerns".

Do all 50 schools. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next school.

## Schools (slug | name | location | website)

saint-joseph-s-college-of-maine | Saint Joseph's College of Maine | Standish, ME | https://www.sjcme.edu/
harris-stowe-state-university | Harris-Stowe State University | Saint Louis, MO | https://www.hssu.edu/
university-of-maryland-baltimore | University of Maryland Baltimore | Baltimore, MD | https://www.umaryland.edu/
valley-city-state-university | Valley City State University | Valley City, ND | https://www.vcsu.edu/
kansas-wesleyan-university | Kansas Wesleyan University | Salina, KS | https://www.kwu.edu/
regis-college | Regis College | Weston, MA | https://www.regiscollege.edu/
greenville-university | Greenville University | Greenville, IL | https://www.greenville.edu/
west-virginia-wesleyan-college | West Virginia Wesleyan College | Buckhannon, WV | https://www.wvwc.edu/
marietta-college | Marietta College | Marietta, OH | https://www.marietta.edu/
college-of-our-lady-of-the-elms | College of Our Lady of the Elms | Chicopee, MA | https://www.elms.edu/
university-of-north-carolina-school-of-the-arts | University of North Carolina School of the Arts | Winston Salem, NC | https://www.uncsa.edu/
wisconsin-lutheran-college | Wisconsin Lutheran College | Milwaukee, WI | https://www.wlc.edu/
university-of-science-and-arts-of-oklahoma | University of Science and Arts of Oklahoma | Chickasha, OK | https://usao.edu/
covenant-college | Covenant College | Lookout Mountain, GA | https://www.covenant.edu/
mercy-college-of-ohio | Mercy College of Ohio | Toledo, OH | https://www.mercycollege.edu/
university-of-nebraska-medical-center | University of Nebraska Medical Center | Omaha, NE | https://www.unmc.edu/
manchester-university | Manchester University | North Manchester, IN | https://www.manchester.edu/
southern-virginia-university | Southern Virginia University | Buena Vista, VA | https://svu.edu/
university-of-minnesota-morris | University of Minnesota-Morris | Morris, MN | https://morris.umn.edu/
illinois-college | Illinois College | Jacksonville, IL | https://www.ic.edu/
the-university-of-texas-health-science-center-at-san-antonio | The University of Texas Health Science Center at San Antonio | San Antonio, TX | https://www.uthscsa.edu/
university-of-saint-mary | University of Saint Mary | Leavenworth, KS | https://www.stmary.edu/
livingstone-college | Livingstone College | Salisbury, NC | https://livingstone.edu/
southwestern-college-ks | Southwestern College | Winfield, KS | https://www.sckans.edu/
william-jewell-college | William Jewell College | Liberty, MO | https://www.jewell.edu/
hilbert-college | Hilbert College | Hamburg, NY | https://www.hilbert.edu/
oklahoma-panhandle-state-university | Oklahoma Panhandle State University | Goodwell, OK | https://opsu.edu/
heidelberg-university | Heidelberg University | Tiffin, OH | https://www.heidelberg.edu/
centenary-university | Centenary University | Hackettstown, NJ | https://www.centenaryuniversity.edu/
loma-linda-university | Loma Linda University | Loma Linda, CA | https://www.llu.edu/index.html
king-university | King University | Bristol, TN | https://www.king.edu/
christian-brothers-university | Christian Brothers University | Memphis, TN | https://www.cbu.edu/
franklin-college | Franklin College | Franklin, IN | https://www.franklincollege.edu/
life-university | Life University | Marietta, GA | https://www.life.edu/
the-university-of-olivet | The University of Olivet | Olivet, MI | https://www.uolivet.edu/
wright-state-university-lake-campus | Wright State University-Lake Campus | Celina, OH | https://lake.wright.edu/
hastings-college | Hastings College | Hastings, NE | https://www.hastings.edu/
washington-college | Washington College | Chestertown, MD | https://www.washcoll.edu/
columbus-college-of-art-and-design | Columbus College of Art & Design | Columbus, OH | https://www.ccad.edu/
huntingdon-college | Huntingdon College | Montgomery, AL | https://www.huntingdon.edu/
shaw-university | Shaw University | Raleigh, NC | https://www.shawu.edu/
toccoa-falls-college | Toccoa Falls College | Toccoa Falls, GA | https://tfc.edu/
lees-mcrae-college | Lees-McRae College | Banner Elk, NC | https://www.lmc.edu/
mcpherson-college | McPherson College | McPherson, KS | https://www.mcpherson.edu/
ottawa-university-ottawa | Ottawa University-Ottawa | Ottawa, KS | https://www.ottawa.edu/
mercy-college-of-health-sciences | Mercy College of Health Sciences | Des Moines, IA | https://www.mchs.edu/
new-orleans-baptist-theological-seminary | New Orleans Baptist Theological Seminary | New Orleans, LA | https://www.nobts.edu/
wilson-college | Wilson College | Chambersburg, PA | https://www.wilson.edu/
the-university-of-tennessee-southern | The University of Tennessee Southern | Pulaski, TN | https://www.utsouthern.edu/
central-yeshiva-tomchei-tmimim-lubavitz | Central Yeshiva Tomchei Tmimim Lubavitz | Brooklyn, NY | https://cyttl.edu/
