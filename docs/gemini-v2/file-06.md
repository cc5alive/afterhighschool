# Task: find "What's special" facts for 50 US colleges (file 6 of 27)

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

william-and-mary | William & Mary | Williamsburg, VA | https://www.wm.edu/
jacksonville-state-university | Jacksonville State University | Jacksonville, AL | https://www.jsu.edu/
university-of-the-cumberlands | University of the Cumberlands | Williamsburg, KY | https://www.ucumberlands.edu/
villanova-university | Villanova University | Villanova, PA | https://www.villanova.edu/
west-texas-a-and-m-university | West Texas A & M University | Canyon, TX | https://www.wtamu.edu/
university-of-wisconsin-oshkosh | University of Wisconsin-Oshkosh | Oshkosh, WI | https://www.uwosh.edu/
texas-southern-university | Texas Southern University | Houston, TX | https://www.tsu.edu/
california-state-university-monterey-bay | California State University-Monterey Bay | Seaside, CA | https://csumb.edu/
university-of-missouri-kansas-city | University of Missouri-Kansas City | Kansas City, MO | https://www.umkc.edu/
slippery-rock-university-of-pennsylvania | Slippery Rock University of Pennsylvania | Slippery Rock, PA | https://www.sru.edu/
indiana-university-of-pennsylvania | Indiana University of Pennsylvania | Indiana, PA | https://www.iup.edu/
wright-state-university-main-campus | Wright State University-Main Campus | Dayton, OH | https://www.wright.edu/
saint-leo-university | Saint Leo University | Saint Leo, FL | https://www.saintleo.edu/
thomas-edison-state-university | Thomas Edison State University | Trenton, NJ | https://www.tesu.edu/
murray-state-university | Murray State University | Murray, KY | https://www.murraystate.edu/
texas-a-and-m-international-university | Texas A & M International University | Laredo, TX | https://www.tamiu.edu/
indiana-wesleyan-university-national-and-global | Indiana Wesleyan University-National & Global | Marion, IN | https://www.indwes.edu/
valdosta-state-university | Valdosta State University | Valdosta, GA | https://www.valdosta.edu/
william-paterson-university-of-new-jersey | William Paterson University of New Jersey | Wayne, NJ | https://www.wpunj.edu/
texas-a-and-m-university-san-antonio | Texas A&M University-San Antonio | San Antonio, TX | https://www.tamusa.edu/
university-of-alabama-in-huntsville | University of Alabama in Huntsville | Huntsville, AL | https://www.uah.edu/
middle-georgia-state-university | Middle Georgia State University | Macon, GA | https://www.mga.edu/
colorado-state-university-global | Colorado State University Global | Denver, CO | https://csuglobal.edu/
the-new-school | The New School | New York, NY | https://www.newschool.edu/
northern-michigan-university | Northern Michigan University | Marquette, MI | https://www.nmu.edu/
santa-clara-university | Santa Clara University | Santa Clara, CA | https://www.scu.edu/
quinnipiac-university | Quinnipiac University | Hamden, CT | https://www.qu.edu/
hofstra-university | Hofstra University | Hempstead, NY | https://www.hofstra.edu/
unity-environmental-university | Unity Environmental University | New Gloucester, ME | https://unity.edu/
elon-university | Elon University | Elon, NC | https://www.elon.edu/
case-western-reserve-university | Case Western Reserve University | Cleveland, OH | https://www.case.edu/
southeast-missouri-state-university | Southeast Missouri State University | Cape Girardeau, MO | https://www.semo.edu/
university-of-wisconsin-green-bay | University of Wisconsin-Green Bay | Green Bay, WI | https://www.uwgb.edu/
university-of-rochester | University of Rochester | Rochester, NY | https://www.rochester.edu/
southern-connecticut-state-university | Southern Connecticut State University | New Haven, CT | https://www.southernct.edu/
university-of-st-thomas-mn | University of St Thomas | Saint Paul, MN | https://www.stthomas.edu/
eastern-washington-university | Eastern Washington University | Cheney, WA | https://www.ewu.edu/
indiana-state-university | Indiana State University | Terre Haute, IN | https://indianastate.edu/
kutztown-university-of-pennsylvania | Kutztown University of Pennsylvania | Kutztown, PA | https://www.kutztown.edu/
colorado-school-of-mines | Colorado School of Mines | Golden, CO | https://www.mines.edu/
alabama-a-and-m-university | Alabama A & M University | Normal, AL | https://www.aamu.edu/
state-university-of-new-york-at-new-paltz | State University of New York at New Paltz | New Paltz, NY | https://www.newpaltz.edu/
north-carolina-central-university | North Carolina Central University | Durham, NC | https://www.nccu.edu/
university-of-houston-clear-lake | University of Houston-Clear Lake | Houston, TX | https://www.uhcl.edu/
salisbury-university | Salisbury University | Salisbury, MD | https://www.salisbury.edu/
radford-university | Radford University | Radford, VA | https://www.radford.edu/
seton-hall-university | Seton Hall University | South Orange, NJ | https://www.shu.edu/
university-of-denver | University of Denver | Denver, CO | https://www.du.edu/
saginaw-valley-state-university | Saginaw Valley State University | University Center, MI | https://www.svsu.edu/
albany-state-university | Albany State University | Albany, GA | https://www.asurams.edu/
