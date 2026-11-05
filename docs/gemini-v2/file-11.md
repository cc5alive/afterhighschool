# Task: find "What's special" facts for 50 US colleges (file 11 of 27)

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

university-of-south-carolina-aiken | University of South Carolina Aiken | Aiken, SC | https://www.usca.edu/
university-of-portland | University of Portland | Portland, OR | https://www.up.edu/
uta-mesivta-of-kiryas-joel | Uta Mesivta of Kiryas Joel | Monroe, NY | https://utam.edu/
iona-university | Iona University | New Rochelle, NY | https://www.iona.edu/
widener-university | Widener University | Chester, PA | https://www.widener.edu/
south-carolina-state-university | South Carolina State University | Orangeburg, SC | https://scsu.edu/
jacksonville-university | Jacksonville University | Jacksonville, FL | https://www.ju.edu/index.php
university-of-north-carolina-asheville | University of North Carolina Asheville | Asheville, NC | https://new.unca.edu/
frostburg-state-university | Frostburg State University | Frostburg, MD | https://www.frostburg.edu/
franciscan-university-of-steubenville | Franciscan University of Steubenville | Steubenville, OH | https://www.franciscan.edu/
robert-morris-university | Robert Morris University | Moon Township, PA | https://www.rmu.edu/
charleston-southern-university | Charleston Southern University | Charleston, SC | https://www.charlestonsouthern.edu/
oregon-institute-of-technology | Oregon Institute of Technology | Klamath Falls, OR | https://www.oit.edu/
brigham-young-university-hawaii | Brigham Young University-Hawaii | Laie, HI | https://www.byuh.edu/
oberlin-college | Oberlin College | Oberlin, OH | https://www.oberlin.edu/
houston-christian-university | Houston Christian University | Houston, TX | https://www.hc.edu/
university-of-north-texas-at-dallas | University of North Texas at Dallas | Dallas, TX | https://untdallas.edu/
pennsylvania-state-university-penn-state-abington | Pennsylvania State University-Penn State Abington | Abington, PA | https://abington.psu.edu/
lynn-university | Lynn University | Boca Raton, FL | https://www.lynn.edu/
yeshiva-university | Yeshiva University | New York, NY | https://www.yu.edu/
roosevelt-university | Roosevelt University | Chicago, IL | https://www.roosevelt.edu/
morehouse-college | Morehouse College | Atlanta, GA | https://www.morehouse.edu/
university-of-wisconsin-parkside | University of Wisconsin-Parkside | Kenosha, WI | https://www.uwp.edu/
baldwin-wallace-university | Baldwin Wallace University | Berea, OH | https://www.bw.edu/
campbellsville-university | Campbellsville University | Campbellsville, KY | https://www.campbellsville.edu/
illinois-institute-of-technology | Illinois Institute of Technology | Chicago, IL | https://www.iit.edu/
savannah-state-university | Savannah State University | Savannah, GA | https://www.savannahstate.edu/
university-of-arkansas-grantham | University of Arkansas Grantham | LIttle Rock, AR | https://www.uagrantham.edu/
university-of-tulsa | University of Tulsa | Tulsa, OK | https://utulsa.edu/
loyola-university-new-orleans | Loyola University New Orleans | New Orleans, LA | https://www.loyno.edu/
school-of-the-art-institute-of-chicago | School of the Art Institute of Chicago | Chicago, IL | https://www.saic.edu/
everglades-university | Everglades University | Boca Raton, FL | https://www.evergladesuniversity.edu/
southern-adventist-university | Southern Adventist University | Collegedale, TN | https://www.southern.edu/
azusa-pacific-university | Azusa Pacific University | Azusa, CA | https://www.apu.edu/
university-of-mary-hardin-baylor | University of Mary Hardin-Baylor | Belton, TX | https://go.umhb.edu/
lafayette-college | Lafayette College | Easton, PA | https://www.lafayette.edu/
suny-at-fredonia | SUNY at Fredonia | Fredonia, NY | https://www.fredonia.edu/
champlain-college | Champlain College | Burlington, VT | https://www.champlain.edu/
fitchburg-state-university | Fitchburg State University | Fitchburg, MA | https://www.fitchburgstate.edu/
southern-oregon-university | Southern Oregon University | Ashland, OR | https://www.sou.edu/
manhattan-university | Manhattan University | Riverdale, NY | https://www.manhattan.edu/
suny-college-of-technology-at-canton | SUNY College of Technology at Canton | Canton, NY | https://www.canton.edu/
bethune-cookman-university | Bethune-Cookman University | Daytona Beach, FL | https://www.cookman.edu/
babson-college | Babson College | Wellesley, MA | https://www.babson.edu/
southern-arkansas-university-main-campus | Southern Arkansas University Main Campus | Magnolia, AR | https://www.saumag.edu/
citadel-military-college-of-south-carolina | Citadel Military College of South Carolina | Charleston, SC | https://citadel.edu/
george-fox-university | George Fox University | Newberg, OR | https://www.georgefox.edu/
keene-state-college | Keene State College | Keene, NH | https://www.keene.edu/
skidmore-college | Skidmore College | Saratoga Springs, NY | https://www.skidmore.edu/
university-of-mount-saint-vincent | University of Mount Saint Vincent | Bronx, NY | https://www.mountsaintvincent.edu/
