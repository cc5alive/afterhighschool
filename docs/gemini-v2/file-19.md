# Task: find "What's special" facts for 50 US colleges (file 19 of 27)

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

reed-college | Reed College | Portland, OR | https://www.reed.edu/
avila-university | Avila University | Kansas City, MO | https://www.avila.edu/
kentucky-state-university | Kentucky State University | Frankfort, KY | https://www.kysu.edu/
oklahoma-baptist-university | Oklahoma Baptist University | Shawnee, OK | https://www.okbu.edu/
university-of-mobile | University of Mobile | Mobile, AL | https://umobile.edu/
university-of-pittsburgh-greensburg | University of Pittsburgh-Greensburg | Greensburg, PA | https://www.greensburg.pitt.edu/
texas-lutheran-university | Texas Lutheran University | Seguin, TX | https://www.tlu.edu/
westmont-college | Westmont College | Santa Barbara, CA | https://www.westmont.edu/
william-penn-university | William Penn University | Oskaloosa, IA | https://www.wmpenn.edu/
albion-college | Albion College | Albion, MI | https://www.albion.edu/
william-woods-university | William Woods University | Fulton, MO | https://www.williamwoods.edu/
ave-maria-university | Ave Maria University | Ave Maria, FL | https://www.avemaria.edu/
cornerstone-university | Cornerstone University | Grand Rapids, MI | https://www.cornerstone.edu/
washington-and-jefferson-college | Washington & Jefferson College | Washington, PA | https://www.washjeff.edu/
william-jessup-university | William Jessup University | Rocklin, CA | https://www.jessup.edu/
thomas-more-university | Thomas More University | Crestview Hills, KY | https://www.thomasmore.edu/
suny-maritime-college | SUNY Maritime College | Throggs Neck, NY | https://www.sunymaritime.edu/
concordia-university-nebraska | Concordia University-Nebraska | Seward, NE | https://www.cune.edu/
hardin-simmons-university | Hardin-Simmons University | Abilene, TX | https://www.hsutx.edu/
gordon-college | Gordon College | Wenham, MA | https://www.gordon.edu/
belmont-abbey-college | Belmont Abbey College | Belmont, NC | https://www.belmontabbeycollege.edu/
northern-state-university | Northern State University | Aberdeen, SD | https://northern.edu/
midway-university | Midway University | Midway, KY | https://www.midway.edu/
saint-vincent-college | Saint Vincent College | Latrobe, PA | https://www.stvincent.edu/
d-youville-university | D'Youville  University | Buffalo, NY | https://www.dyu.edu/
virginia-wesleyan-university | Virginia Wesleyan University | Virginia Beach, VA | https://www.vwu.edu/
lubbock-christian-university | Lubbock Christian University | Lubbock, TX | https://lcu.edu/
walla-walla-university | Walla Walla University | College Place, WA | https://www.wallawalla.edu/
adams-state-university | Adams State University | Alamosa, CO | https://www.adams.edu/
viterbo-university | Viterbo University | La Crosse, WI | https://www.viterbo.edu/
johnson-c-smith-university | Johnson C Smith University | Charlotte, NC | https://www.jcsu.edu/
russell-sage-college | Russell Sage College | Troy, NY | https://sage.edu/
catawba-college | Catawba College | Salisbury, NC | https://www.catawba.edu/
chatham-university | Chatham University | Pittsburgh, PA | https://www.chatham.edu/
averett-university | Averett University | Danville, VA | https://www.averett.edu/
rivier-university | Rivier University | Nashua, NH | https://www.rivier.edu/
college-for-creative-studies | College for Creative Studies | Detroit, MI | https://www.ccsdetroit.edu/
evangel-university | Evangel University | Springfield, MO | https://www.evangel.edu/
pitzer-college | Pitzer College | Claremont, CA | https://www.pitzer.edu/
simpson-college | Simpson College | Indianola, IA | https://simpson.edu/
lasell-university | Lasell University | Newton, MA | https://www.lasell.edu/
andrews-university | Andrews University | Berrien Springs, MI | https://www.andrews.edu/
otis-college-of-art-and-design | Otis College of Art and Design | Los Angeles, CA | https://www.otis.edu/
pennsylvania-state-university-penn-state-brandywine | Pennsylvania State University-Penn State Brandywine | Media, PA | https://brandywine.psu.edu/
university-of-st-francis | University of St Francis | Joliet, IL | https://www.stfrancis.edu/
abilene-christian-university-undergraduate-online | Abilene Christian University-Undergraduate Online | Addison, TX | https://www.acu.edu/academics/online/undergraduate
university-of-sioux-falls | University of Sioux Falls | Sioux Falls, SD | https://www.usiouxfalls.edu/
albright-college | Albright College | Reading, PA | https://www.albright.edu/home/
wittenberg-university | Wittenberg University | Springfield, OH | https://www.wittenberg.edu/
north-carolina-wesleyan-university | North Carolina Wesleyan University | Rocky Mount, NC | https://www.ncwu.edu/
