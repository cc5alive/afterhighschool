# Task: research "What's special" facts for US colleges (batch 11 of 11)

You're helping build afterhighschool.me, a free, high-trust site that helps 16–18-year-olds decide what to do after high school. Each college page has a "What's special" section: a few facts that set the school apart, each linked to its source. Students and parents will act on these facts, so accuracy matters more than coverage. A school with zero facts is fine. A wrong or vague fact is not.

## You must browse

Use live web search and open each page you cite (Google Search grounding or Deep Research). Do not answer from memory. If you can't browse in this session, reply only with: BROWSING UNAVAILABLE.

Every fact must come from a page you opened in this session, and the `quote` must be copied word for word from that page's text, not paraphrased. We check every quote against the live page automatically; facts whose quote isn't on the page are thrown out. If you didn't open the page, leave the fact out.

## What makes a good fact

1. **Specific and checkable:** a named program, requirement, policy, dollar or income threshold, calendar, structure or tradition, with its concrete details (numbers, who qualifies, which years).
2. **Distinct:** not true of most similar schools. Out: "has study abroad", "has an honors college", "offers research opportunities", "strong programs in X". In: a co-op requirement, a senior thesis everyone writes, a block plan or unusual calendar, guaranteed admission rules, applying directly to a specific school or major, nomination or audition required, an income-based free-tuition program with its thresholds, a work-college requirement, a residential college system, a cross-registration consortium, a service or religious requirement all students complete, an HBCU/tribal/women's college with a specific program tied to that mission.
3. **Useful to a 17-year-old deciding whether to apply,** or their family deciding if they can afford it.
4. **No marketing language.** Never use: premier, renowned, world-class, world-renowned, nationally recognized, leading, top, vibrant, unique, innovative, robust, high-impact, cutting-edge, best, first, only, largest. The one exception: "first/only/largest" when the source states that exact claim; include it in the quote.
5. **Current.** Prefer pages from 2025 or 2026. If the source is older or undated, say so in `concerns`.

Sources: the school's own site first (admissions, financial aid, registrar, catalog, official news). Reputable news only if the school's site doesn't cover it. Never cite Wikipedia, Niche, US News, CollegeVine, Reddit, Quora, PrepScholar, consultant blogs, or search-result pages.

## Writing rules

- Your own words, 1–3 plain sentences, 40–360 characters. Second person or neutral ("Students…", "You apply to…"). Sentence case.
- Include the exact numbers and eligibility from the source. Add nothing the source doesn't say.
- Aim for 2–3 facts per school. One solid fact beats three padded ones.

## Output format (important)

Return **JSON Lines**: one JSON object per line, one line per school, in the order given. No commentary, no markdown code fences. Exactly these keys:

{"slug":"<slug from the list, unchanged>","researchedAt":"<today's real date, YYYY-MM-DD>","facts":[{"text":"<the fact>","sources":[{"title":"<site or page name>","url":"<exact https URL you opened, after any redirects>","quote":"<verbatim excerpt from that page, 8–40 words, that supports the fact>"}]}],"concerns":"<null, or a short note: old source, conflicting info, couldn't open official page, etc.>"}

If you find nothing solid, output the line with "facts": [] and a reason in "concerns".

If you run out of room, end after a complete line and stop. I'll say "continue from <slug>".

## Schools (slug | name | location | website)

crestpoint-university | Crestpoint University | Phoenix, AZ | https://www.crestpoint.edu/
arizona-college-of-nursing-ontario | Arizona College of Nursing-Ontario | Ontario, CA | https://www.arizonacollege.edu/
lionel-university | Lionel University | Carpinteria, CA | lionel.edu/
american-medical-sciences-center | American Medical Sciences Center | Glendale, CA | www.amsc.edu/
american-college-of-education | American College of Education | Indianapolis, IN | www.ace.edu/
american-university-of-health-sciences | American University of Health Sciences | Signal Hill, CA | https://www.auhs.edu/
arizona-college-of-nursing-falls-church | Arizona College of Nursing-Falls Church | Falls Church, VA | https://www.arizonacollege.edu/
california-aeronautical-university | California Aeronautical University | Bakersfield, CA | www.calaero.edu/
arizona-college-of-nursing-aurora | Arizona College of Nursing-Aurora | Aurora, CO | https://www.arizonacollege.edu/
arizona-college-of-nursing-tampa | Arizona College of Nursing-Tampa | Tampa, FL | https://www.arizonacollege.edu/
arizona-college-of-nursing-hartford | Arizona College of Nursing - Hartford | East Hartford, CT | https://www.arizonacollege.edu/
arizona-college-of-nursing-salt-lake-city | Arizona College of Nursing-Salt Lake City | Murray, UT | https://www.arizonacollege.edu/
south-university-montgomery | South University-Montgomery | Montgomery, AL | www.southuniversity.edu/
gnomon | Gnomon | North Hollywood, CA | https://www.gnomon.edu/
university-of-management-and-technology | University of Management and Technology | Arlington, VA | https://www.umtweb.edu/
chamberlain-university-missouri | Chamberlain University-Missouri | St. Louis, MO | https://www.chamberlain.edu/
south-university-savannah | South University-Savannah | Savannah, GA | www.southuniversity.edu/savannah#location=Savannah, GA
chamberlain-university-ohio | Chamberlain University-Ohio | Columbus, OH | https://www.chamberlain.edu/
provo-college-idaho-falls-campus | Provo College-Idaho Falls Campus | Idaho Falls, ID | https://www.eaglegatecollege.edu/
south-university-west-palm-beach | South University-West Palm Beach | Royal Palm Beach, FL | www.southuniversity.edu/west-palm-beach#location=West Palm Beach, FL
nossi-college-of-art-and-design | Nossi College of Art and Design | Nashville, TN | https://www.nossi.edu/
south-university-virginia-beach | South University-Virginia Beach | Virginia Beach, VA | www.southuniversity.edu/virginia-beach#location=Virginia Beach, VA
strayer-university-west-virginia | Strayer University-West Virginia | Scott Depot, WV | www.strayer.edu/campus-locations/west-virginia/teays-valley
south-university-richmond | South University-Richmond | Glen Allen, VA | www.southuniversity.edu/richmond#location=Richmond, VA
los-angeles-college-of-music | Los Angeles College of Music | Pasadena, CA | www.lacm.edu/
eagle-gate-college-layton | Eagle Gate College-Layton | Layton, UT | www.eaglegatecollege.edu/
south-university-austin | South University-Austin | Round Rock, TX | www.southuniversity.edu/austin#location=Austin, TX
devry-university-ohio | DeVry University-Ohio | Columbus, OH | https://www.devry.edu/
chamberlain-university-north-carolina | Chamberlain University-North Carolina | Charlotte, NC | https://www.chamberlain.edu/
millennia-atlantic-university | Millennia Atlantic University | Doral, FL | www.maufl.edu/en/home
newschool-of-architecture-and-design | Newschool of Architecture and Design | San Diego, CA | www.newschoolarch.edu/
research-college-of-nursing | Research College of Nursing | Kansas City, MO | researchcollege.edu/
arizona-college-of-nursing-cleveland | Arizona College of Nursing-Cleveland | Beachwood, OH | https://www.arizonacollege.edu/
strayer-university-delaware | Strayer University-Delaware | Wilmington, DE | www.strayer.edu/campus-locations/delaware/wilmington
university-of-the-potomac-va-campus | University of the Potomac-VA Campus | FALLS CHURCH, VA | www.potomac.edu/
strayer-university-district-of-columbia | Strayer University-District of Columbia | Washington, DC | www.strayer.edu/campus-locations/district-columbia/washington
united-states-university | United States University | Sandy Springs, CA | https://www.usuniversity.edu/
arizona-college-of-nursing-chesapeake | Arizona College of Nursing - Chesapeake | Chesapeake, VA | https://www.arizonacollege.edu/
chamberlain-university-indiana | Chamberlain University-Indiana | Indianapolis, IN | https://www.chamberlain.edu/
northwest-college-of-art-and-design | Northwest College of Art & Design | Tacoma, WA | https://ncad.edu/
california-miramar-university | California Miramar University | San Diego, CA | www.calmu.edu/
denver-college-of-nursing-houston | Denver College of Nursing-Houston | Houston, TX | https://www.denvercollegeofnursing.edu/
arizona-college-of-nursing-sarasota | Arizona College of Nursing-Sarasota | University Park, FL | https://www.arizonacollege.edu/
arizona-college-of-nursing-st-louis | Arizona College of Nursing-St Louis | Maryland Heights, MO | https://www.arizonacollege.edu/
careers-unlimited | Careers Unlimited | Orem, UT | https://www.ucdh.edu/home
devry-university-florida | DeVry University-Florida | Orlando, FL | https://www.devry.edu/
american-intercontinental-university-houston | American InterContinental University-Houston | Houston, TX | www.aiuniv.edu/online-campus/campus-locations/houston
stevens-the-institute-of-business-and-arts | Stevens-The Institute of Business & Arts | Saint Louis, MO | www.siba.edu/
devry-college-of-new-york | DeVry College of New York | New York, NY | https://www.devry.edu/
arizona-college-of-nursing-cincinnati | Arizona College of Nursing-Cincinnati | Cincinnati, OH | https://www.arizonacollege.edu/
design-institute-of-san-diego | Design Institute of San Diego | San Diego, CA | www.disd.edu/
south-university-high-point | South University-High Point | High Point, NC | www.southuniversity.edu/high-point#location=High Point, NC
seattle-film-institute | Seattle Film Institute | Seattle, WA | https://www.sfi.edu/#fronttable
devry-university-new-jersey | DeVry University-New Jersey | Iselin, NJ | https://www.devry.edu/
academy-college | Academy College | Bloomington, MN | www.academycollege.edu/
alhambra-medical-university | Alhambra Medical University | Alhambra, CA | www.amu.edu/
schiller-international-university | Schiller International University | Tampa, FL | www.schiller.edu/
california-northstate-university | California Northstate University | Elk Grove, CA | www.cnsu.edu/
urbe-university | URBE University | Sweetwater, FL | https://urbeuniversity.edu/
abraham-lincoln-university | Abraham Lincoln University | Glendale, CA | https://www.alu.edu/
devry-university-virginia | DeVry University-Virginia | Arlington, VA | https://www.devry.edu/
devry-university-texas | DeVry University-Texas | Irving, TX | https://www.devry.edu/
university-of-west-los-angeles | University of West Los Angeles | Inglewood, CA | www.uwla.edu/
devry-university-arizona | DeVry University-Arizona | Phoenix, AZ | https://www.devry.edu/
sofia-university | Sofia University | Palo Alto, CA | www.sofia.edu/
american-academy-of-health-and-wellness | American Academy of Health and Wellness | Roseville, MN | https://www.acupunctureschoolusa.com/
american-college-of-acupuncture-and-oriental-med | American College of Acupuncture and Oriental Med | Houston, TX | www.acaom.edu/
arizona-school-of-acupuncture-and-oriental-medicine | Arizona School of Acupuncture and Oriental Medicine | Tucson, AZ | www.asaom.edu/
burrell-college-of-osteopathic-medicine | Burrell College of Osteopathic Medicine | Las Cruces, NM | https://burrell.edu/
cal-northern-school-of-law | Cal Northern School of Law | Chico, CA | https://www.calnorthern.edu/
california-health-sciences-university | California Health Sciences University | Clovis, CA | https://chsu.edu/
charleston-school-of-law | Charleston School of Law | Charleston, SC | www.charlestonlaw.edu/
colorado-chinese-medicine-university | Colorado Chinese Medicine University | Denver, CO | www.ccmu.edu/
daoist-traditions-college-of-chinese-medical-arts | Daoist Traditions College of Chinese Medical Arts | Asheville, NC | daoisttraditions.edu/
five-branches-university | Five Branches University | Santa Cruz, CA | https://www.fivebranches.edu/
florida-college-of-integrative-medicine | Florida College of Integrative Medicine | Orlando, FL | https://www.fcim.edu/
idaho-college-of-osteopathic-medicine | Idaho College of Osteopathic Medicine | Meridian, ID | https://www.icom.edu/
institute-of-clinical-acupuncture-and-oriental-medicine | Institute of Clinical Acupuncture & Oriental Medicine | Honolulu, HI | www.orientalmedicine.edu/
meridian-university | Meridian University | Petaluma, CA | https://meridianuniversity.edu/
midwest-college-of-oriental-medicine-skokie | Midwest College of Oriental Medicine-Skokie | Skokie, IL | www.acupuncture.edu/
pacifica-graduate-institute | Pacifica Graduate Institute | Santa Barbara CA, CA | www.pacifica.edu/
ponce-health-sciences-university-st-louis | Ponce Health Sciences University-St Louis | St. Louis, MO | phsu.edu/
rocky-mountain-university-of-health-professions | Rocky Mountain University of Health Professions | Provo, UT | https://rm.edu/
rocky-vista-university | Rocky Vista University | Parker, CO | www.rvu.edu/
sotheby-s-institute-of-art-ny | Sotheby's Institute of Art-NY | New York, NY | www.sothebysinstitute.com/Programmes/PNewyork.aspx
southwest-university-of-naprapathic-medicine | Southwest University of Naprapathic Medicine | Santa Fe, NM | https://sunm.edu/
taft-university-system | Taft University System | Denver, CO | www.taftu.edu/
texas-health-and-science-university | Texas Health and Science University | Austin, TX | https://thsu.edu/
university-of-east-west-medicine | University of East-West Medicine | Sunnyvale, CA | www.uewm.edu/
university-of-fairfax | University of Fairfax | Salem, VA | https://ufairfax.edu/
university-of-st-augustine-for-health-sciences | University of St. Augustine for Health Sciences | San Marcos, CA | www.usa.edu/
uth-florida-university | UTH Florida University | Miami, FL | https://www.uthflorida.us/
west-coast-university-center-for-graduate-studies | West Coast University-Center for Graduate Studies | Los Angeles, CA | https://westcoastuniversity.edu/
west-coast-university-los-angeles | West Coast University-Los Angeles | North Hollywood, CA | https://westcoastuniversity.edu/
