# Task: research "What's special" facts for US colleges (batch 10 of 11)

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

luther-seminary | Luther Seminary | Saint Paul, MN | https://www.luthersem.edu/
lutheran-school-of-theology-at-chicago | Lutheran School of Theology at Chicago | Chicago, IL | www.lstc.edu/
lyon-college-school-of-dental-medicine | Lyon College-School of Dental Medicine | Little Rock, AR | https://lyoninstitute.com/dentistry-program/
marshall-b-ketchum-university | Marshall B Ketchum University | Fullerton, CA | www.ketchum.edu/
massachusetts-school-of-law | Massachusetts School of Law | Andover, MA | www.mslaw.edu/
mccormick-theological-seminary | McCormick Theological Seminary | Chicago, IL | https://www.mccormick.edu/
meadville-theological-school-of-lombard-college | Meadville Theological School of Lombard College | Chicago, IL | www.meadville.edu/
medical-college-of-wisconsin | Medical College of Wisconsin | Milwaukee, WI | www.mcw.edu/
meharry-medical-college | Meharry Medical College | Nashville, TN | www.mmc.edu/
methodist-theological-school-in-ohio | Methodist Theological School in Ohio | Delaware, OH | https://www.mtso.edu/
michigan-school-of-psychology | Michigan School of Psychology | Farmington Hills, MI | msp.edu/
middle-tennessee-school-of-anesthesia-inc | Middle Tennessee School of Anesthesia Inc | Madison, TN | mtsa.edu/
midwestern-university-downers-grove | Midwestern University-Downers Grove | Downers Grove, IL | https://www.midwestern.edu/
midwestern-university-glendale | Midwestern University-Glendale | Glendale, AZ | https://www.midwestern.edu/
mitchell-hamline-school-of-law | Mitchell Hamline School of Law | Saint Paul, MN | www.mitchellhamline.edu/
morehouse-school-of-medicine | Morehouse School of Medicine | Atlanta, GA | www.msm.edu/
nashotah-house | Nashotah House | Nashotah, WI | www.nashotah.edu/
naval-postgraduate-school | Naval Postgraduate School | Monterey, CA | https://www.nps.edu/
nazarene-theological-seminary | Nazarene Theological Seminary | Kansas City, MO | www.nts.edu/
new-brunswick-theological-seminary | New Brunswick Theological Seminary | New Brunswick, NJ | www.nbts.edu/
new-england-college-of-optometry | New England College of Optometry | Boston, MA | https://www.neco.edu/
new-england-law-boston | New England Law-Boston | Boston, MA | https://www.nesl.edu/
new-york-academy-of-art | New York Academy of Art | New York, NY | nyaa.edu/
new-york-college-of-podiatric-medicine | New York College of Podiatric Medicine | New York, NY | www.nycpm.edu/
new-york-law-school | New York Law School | New York, NY | www.nyls.edu/
new-york-medical-college | New York Medical College | Valhalla, NY | https://www.nymc.edu/
northeast-ohio-medical-university | Northeast Ohio Medical University | Rootstown, OH | www.neomed.edu/
northeastern-seminary | Northeastern Seminary | Rochester, NY | www.nes.edu/
northern-baptist-theological-seminary | Northern Baptist Theological Seminary | Lisle, IL | www.seminary.edu/
northpoint-college | Northpoint College | Wyoming, MI | https://www.northpointcollege.edu/
oblate-school-of-theology | Oblate School of Theology | San Antonio, TX | www.ost.edu/
oklahoma-state-university-center-for-health-sciences | Oklahoma State University Center for Health Sciences | Tulsa, OK | https://medicine.okstate.edu/
omega-graduate-school | Omega Graduate School | Dayton, TN | www.ogs.edu/
pacific-northwest-university-of-health-sciences | Pacific Northwest University of Health Sciences | Yakima, WA | https://www.pnwu.edu/
pacific-school-of-religion | Pacific School of Religion | Berkeley, CA | www.psr.edu/
payne-theological-seminary | Payne Theological Seminary | Wilberforce, OH | payneseminary.edu/
pennsylvania-state-university-penn-state-great-valley | Pennsylvania State University-Penn State Great Valley | Malvern, PA | https://greatvalley.psu.edu/
pensacola-christian-college | PENSACOLA CHRISTIAN COLLEGE | Pensacola, FL | https://www.pcci.edu/
philadelphia-college-of-osteopathic-medicine | Philadelphia College of Osteopathic Medicine | Philadelphia, PA | www.pcom.edu/
phillips-theological-seminary | Phillips Theological Seminary | Tulsa, OK | https://www.ptstulsa.edu/
phoenix-seminary | Phoenix Seminary | Scottsdale, AZ | www.ps.edu/
pittsburgh-theological-seminary | Pittsburgh Theological Seminary | Pittsburgh, PA | https://www.pts.edu/
pontifical-faculty-of-the-immaculate-conception-at-the-dominican-house-of-studies | Pontifical Faculty of the Immaculate Conception at the Dominican House of Studies | Washington, DC | www.dhs.edu/
pontifical-john-paul-ii-institute-for-studies-on-marriage-and-family | Pontifical John Paul II Institute for Studies on Marriage and Family | Washington, DC | www.johnpaulii.edu/
princeton-theological-seminary | Princeton Theological Seminary | Princeton, NJ | www.ptsem.edu/
rand-school-of-public-policy | RAND School of Public Policy | Santa Monica, CA | https://www.rand.edu/
reconstructionist-rabbinical-college | Reconstructionist Rabbinical College | Wyncote, PA | www.rrc.edu/
richmont-graduate-university | Richmont Graduate University | Chattanooga, TN | www.richmont.edu/
roger-williams-university-school-of-law | Roger Williams University School of Law | Bristol, RI | law.rwu.edu/
rosalind-franklin-university-of-medicine-and-science | Rosalind Franklin University of Medicine and Science | North Chicago, IL | www.rosalindfranklin.edu/
sacred-heart-seminary-and-school-of-theology | Sacred Heart Seminary and School of Theology | Franklin, WI | www.shsst.edu/
saint-meinrad-school-of-theology | Saint Meinrad School of Theology | St. Meinrad, IN | https://www.saintmeinrad.edu/
saint-paul-school-of-theology | Saint Paul School of Theology | Leawood, KS | https://www.spst.edu/
saint-vincent-de-paul-regional-seminary | Saint Vincent de Paul Regional Seminary | Boynton Beach, FL | www.svdp.edu/
saint-vincent-seminary | Saint Vincent Seminary | Latrobe, PA | https://www.saintvincentseminary.edu/
saint-vladimirs-orthodox-theological-seminary | Saint Vladimirs Orthodox Theological Seminary | Yonkers, NY | www.svots.edu/
san-joaquin-college-of-law | San Joaquin College of Law | Clovis, CA | www.sjcl.edu/
sanford-burnham-prebys-medical-discovery-institute | Sanford Burnham Prebys Medical Discovery Institute | La Jolla, CA | https://www.sbpdiscovery.org/education/graduate-school
saybrook-university | Saybrook University | Pasadena, CA | https://www.saybrook.edu/
seattle-institute-of-east-asian-medicine | Seattle Institute of East Asian Medicine | Seattle, WA | www.sieam.edu/
shepherds-theological-seminary | Shepherds Theological Seminary | Cary, NC | shepherds.edu/
sherman-college-of-chiropractic | Sherman College of Chiropractic | Boiling Springs, SC | https://www.sherman.edu/
sit-graduate-institute | SIT Graduate Institute | Brattleboro, VT | https://www.sit.edu/
sonoran-university-of-health-sciences | Sonoran University of Health Sciences | Tempe, AZ | www.sonoran.edu/
south-baylo-university | South Baylo University | Anaheim, CA | southbaylo.edu/web
south-texas-college-of-law-houston | South Texas College of Law Houston | Houston, TX | www.stcl.edu/
southern-college-of-optometry | Southern College of Optometry | Memphis, TN | https://www.sco.edu/
southwestern-college-nm | Southwestern College | Santa Fe, NM | www.swc.edu/
southwestern-law-school | Southwestern Law School | Los Angeles, CA | https://www.swlaw.edu/
spertus-college | Spertus College | Chicago, IL | www.spertus.edu/
st-bernard-s-school-of-theology-and-ministry | St Bernard's School of Theology and Ministry | Rochester, NY | www.stbernards.edu/
starr-king-school-for-the-ministry | Starr King School for the Ministry | Oakland, CA | https://www.sksm.edu/
suny-college-of-optometry | SUNY College of Optometry | New York, NY | www.sunyopt.edu/
teachers-college-at-columbia-university | Teachers College at Columbia University | New York, NY | www.tc.columbia.edu/
texas-chiropractic-college-foundation-inc | Texas Chiropractic College Foundation Inc | Pasadena, TX | www.txchiro.edu/
the-chicago-school-at-anaheim | The Chicago School at Anaheim | Anaheim, CA | https://www.thechicagoschool.edu/in-the-community/locations/
the-chicago-school-at-dallas | The Chicago School at Dallas | Plano, TX | https://www.thechicagoschool.edu/in-the-community/locations/
the-chicago-school-at-washington-dc | The Chicago School at Washington DC | Washington, DC | https://www.thechicagoschool.edu/washington-dc/
the-chicago-school-at-xavier-university-of-louisiana | The Chicago School at Xavier University of Louisiana | New Orleans, LA | https://www.thechicagoschool.edu/in-the-community/locations/
the-colleges-of-law-at-santa-barbara | The Colleges of Law at Santa Barbara | Santa Barbara, CA | https://www.collegesoflaw.edu/
the-colleges-of-law-at-ventura | The Colleges of Law at Ventura | Ventura, CA | https://www.collegesoflaw.edu/
the-rockefeller-university | The Rockefeller University | New York, NY | www.rockefeller.edu/
the-school-of-architecture | The School of Architecture | Scottsdale, AZ | https://tsoa.edu/
the-seattle-school-of-theology-and-psychology | The Seattle School of Theology & Psychology | Seattle, WA | theseattleschool.edu/
the-wright-institute | The Wright Institute | Berkeley, CA | www.wi.edu/
theological-seminary-of-the-reformed-episcopal-church | Theological Seminary of the Reformed Episcopal Church | Oreland, PA | reseminary.edu/
thomas-jefferson-school-of-law | Thomas Jefferson School of Law | San Diego, CA | www.tjsl.edu/
thomas-m-cooley-law-school | Thomas M Cooley Law School | Lansing, MI | cooley.edu/
toyota-technological-institute-at-chicago | Toyota Technological Institute at Chicago | Chicago, IL | www.ttic.edu/
trinity-anglican-seminary | Trinity Anglican Seminary | Ambridge, PA | tas.edu/
trinity-law-school | Trinity Law School | Santa Ana, CA | https://www.tiu.edu/law
union-presbyterian-seminary | Union Presbyterian Seminary | Richmond, VA | www.upsem.edu/
union-theological-seminary-in-the-city-of-new-york | Union Theological Seminary in the City of New York | New York, NY | utsnyc.edu/
united-lutheran-seminary | United Lutheran Seminary | Gettysburg, PA | https://www.unitedlutheranseminary.edu/
united-theological-seminary | United Theological Seminary | Dayton, OH | www.united.edu/
united-theological-seminary-of-the-twin-cities | United Theological Seminary of the Twin Cities | St. Paul, MN | https://www.unitedseminary.edu/
university-of-california-college-of-the-law-san-francisco | University of California College of the Law-San Francisco | San Francisco, CA | https://www.uclawsf.edu/
university-of-california-san-francisco | University of California-San Francisco | San Francisco, CA | ucsf.edu/
university-of-massachusetts-chan-medical-school | University of Massachusetts Chan Medical School | Worcester, MA | www.umassmed.edu/
university-of-new-hampshire-franklin-pierce-school-of-law | University of New Hampshire-Franklin Pierce School of Law | Concord, NH | https://law.unh.edu/
university-of-saint-mary-of-the-lake | University of Saint Mary of the Lake | Mundelein, IL | https://usml.edu/
university-of-texas-southwestern-medical-center | University of Texas Southwestern Medical Center | Dallas, TX | www.utsouthwestern.edu/
university-of-western-states | University of Western States | Portland, OR | https://www.uws.edu/
upper-valley-educators-institute | Upper Valley Educators Institute | Lebanon, NH | www.uvei.edu/
urshan-graduate-school-of-theology | Urshan Graduate School of Theology | Wentzville, MO | https://urshan.edu/ugst
vermont-college-of-fine-arts | Vermont College of Fine Arts | Montpelier, VT | www.vcfa.edu/
vermont-law-and-graduate-school | Vermont Law and Graduate School | South Royalton, VT | www.vermontlaw.edu/
virginia-christian-college | Virginia Christian College | Dumfries, VA | https://www.vcc.edu/
virginia-university-of-integrative-medicine | Virginia University of Integrative Medicine | Vienna, VA | www.vuim.edu/
wartburg-theological-seminary | Wartburg Theological Seminary | Dubuque, IA | https://www.wartburgseminary.edu/
weill-medical-college-of-cornell-university | Weill Medical College of Cornell University | New York, NY | https://weill.cornell.edu/
wesley-theological-seminary | Wesley Theological Seminary | Washington, DC | www.wesleyseminary.edu/
west-virginia-school-of-osteopathic-medicine | West Virginia School of Osteopathic Medicine | Lewisburg, WV | www.wvsom.edu/
western-michigan-university-homer-stryker-m-d-school-of-medicine | Western Michigan University Homer Stryker M.D. School of Medicine | Kalamazoo, MI | wmed.edu/
western-seminary | Western Seminary | Portland, OR | www.westernseminary.edu/
western-theological-seminary | Western Theological Seminary | Holland, MI | www.westernsem.edu/
western-university-of-health-sciences | Western University of Health Sciences | Pomona, CA | https://www.westernu.edu/
westminster-theological-seminary | Westminster Theological Seminary | Glenside, PA | https://www.wts.edu/
westminster-theological-seminary-in-california | Westminster Theological Seminary in California | Escondido, CA | www.wscal.edu/
winebrenner-theological-seminary | Winebrenner Theological Seminary | Findlay, OH | winebrenner.edu/
wisconsin-school-of-professional-psychology | Wisconsin School of Professional Psychology | Milwaukee, WI | www.wspp.edu/
won-institute-of-graduate-studies | Won Institute of Graduate Studies | Warminster, PA | www.woninstitute.edu/
wongu-university-of-oriental-medicine | Wongu University of Oriental Medicine | Las Vegas, NV | www.wongu.edu/
yo-san-university-of-traditional-chinese-medicine | Yo San University of Traditional Chinese Medicine | Los Angeles, CA | yosan.edu/
university-of-phoenix-arizona | University of Phoenix-Arizona | Phoenix, AZ | https://www.phoenix.edu/
american-public-university-system | American Public University System | Charles Town, WV | https://www.apus.edu/
colorado-technical-university-colorado-springs | Colorado Technical University-Colorado Springs | Colorado Springs, CO | www.coloradotech.edu/Colorado-Springs
full-sail-university | Full Sail University | Winter Park, FL | www.fullsail.edu/
capella-university | Capella University | Minneapolis, MN | www.capella.edu/
chamberlain-university-illinois | Chamberlain University-Illinois | Addison, IL | https://www.chamberlain.edu/
post-university | Post University | Waterbury, CT | www.post.edu/
columbia-southern-university | Columbia Southern University | Orange Beach, AL | www.columbiasouthern.edu/
strayer-university-global-region | Strayer University-Global Region | Washington, DC | www.strayer.edu/
walden-university | Walden University | Minneapolis, MN | https://www.waldenu.edu/
american-intercontinental-university-system | American InterContinental University System | Chandler, AZ | https://www.aius.education/
south-university-savannah-online | South University-Savannah Online | Savannah, GA | www.southuniversity.edu/online#location=Online Programs
nightingale-college | Nightingale College | Salt Lake City, UT | www.nightingale.edu/
los-angeles-film-school | Los Angeles Film School | Hollywood, CA | www.lafilm.edu/
galen-college-of-nursing-louisville | Galen College of Nursing-Louisville | Louisville, KY | www.galencollege.edu/louisville
strayer-university-georgia | Strayer University-Georgia | Chamblee, GA | www.strayer.edu/campus-locations/georgia/chamblee
academy-of-art-university | Academy of Art University | San Francisco, CA | www.academyart.edu/
school-of-visual-arts | School of Visual Arts | New York, NY | https://sva.edu/
west-coast-university-anaheim-orange-county | West Coast University-Anaheim-Orange County | Anaheim, CA | westcoastuniversity.edu/
west-coast-university-texas | West Coast University-Texas | Richardson, TX | westcoastuniversity.edu/
strayer-university-north-carolina | Strayer University-North Carolina | Greensboro, NC | www.strayer.edu/campus-locations/north-carolina/greensboro
west-coast-university-ontario | West Coast University-Ontario | Ontario, CA | westcoastuniversity.edu/
stanbridge-university | Stanbridge University | Irvine, CA | www.stanbridge.edu/
westcliff-university | Westcliff University | Irvine, CA | www.westcliff.edu/
strayer-university-texas | Strayer University-Texas | Farmers Branch, TX | www.strayer.edu/campus-locations
chamberlain-university-texas | Chamberlain University-Texas | Houston, TX | https://www.chamberlain.edu/
rocky-mountain-college-of-art-and-design | Rocky Mountain College of Art and Design | Lakewood, CO | https://www.rmcad.edu/
chamberlain-university-georgia | Chamberlain University-Georgia | Sandy Springs, GA | https://www.chamberlain.edu/
strayer-university-south-carolina | Strayer University-South Carolina | Greenville, SC | www.strayer.edu/campus-locations/south-carolina/greenville
strayer-university-tennessee | Strayer University-Tennessee | Nashville, TN | www.strayer.edu/campus-locations/tennessee/thousand-oaks
berkeley-college-woodland-park | Berkeley College-Woodland Park | Woodland Park, NJ | https://berkeleycollege.edu/
strayer-university-virginia | Strayer University-Virginia | Arlington, VA | www.strayer.edu/campus-locations/virginia/arlington
aspen-university | Aspen University | Phoenix, AZ | https://aspen.edu/
berkeley-college-new-york | Berkeley College-New York | New York, NY | https://berkeleycollege.edu/
arizona-college-of-nursing-phoenix | Arizona College of Nursing-Phoenix | Phoenix, AZ | https://www.arizonacollege.edu/
chamberlain-university-new-jersey | Chamberlain University-New Jersey | North Brunswick, NJ | https://www.chamberlain.edu/
strayer-university-pennsylvania | Strayer University-Pennsylvania | Philadelphia, PA | https://www.strayer.edu/campus-locations/pennsylvania/lower-bucks-county
arizona-college-of-nursing-las-vegas | Arizona College of Nursing-Las Vegas | Las Vegas, NV | https://www.arizonacollege.edu/
arizona-college-of-nursing-tempe | Arizona College of Nursing-Tempe | Tempe, AZ | www.arizonacollege.edu/
strayer-university-alabama | Strayer University-Alabama | Birmingham, AL | www.strayer.edu/campus-locations/alabama/birmingham
lim-college | LIM College | New York, NY | www.limcollege.edu/
strayer-university-florida | Strayer University-Florida | Tampa, FL | www.strayer.edu/campus-locations/florida/tampa-east
strayer-university-maryland | Strayer University-Maryland | Baltimore, MD | www.strayer.edu/campus-locations/maryland/prince-georges
digipen-institute-of-technology | DigiPen Institute of Technology | Redmond, WA | https://www.digipen.edu/
west-coast-university-miami | West Coast University-Miami | Doral, FL | https://westcoastuniversity.edu/
salem-university | Salem University | Salem, WV | https://www.salemu.edu/
strayer-university-mississippi | Strayer University-Mississippi | Jackson, MS | www.strayer.edu/campus-locations/mississippi/jackson
new-york-film-academy | New York Film Academy | Burbank, CA | https://www.nyfa.edu/
chamberlain-university-florida | Chamberlain University-Florida | Jacksonville, FL | https://www.chamberlain.edu/
national-american-university-rapid-city | National American University-Rapid City | Rapid City, SD | www.national.edu/locations/campuses/rapid-city/
the-college-of-westchester | The College of Westchester | White Plains, NY | www.cw.edu/
denver-college-of-nursing | Denver College of Nursing | Denver, CO | www.denvercollegeofnursing.edu/
chamberlain-university-california | Chamberlain University-California | Rancho Cordova, CA | https://www.chamberlain.edu/
american-intercontinental-university-atlanta | American InterContinental University-Atlanta | Atlanta, GA | www.aiuniv.edu/online-campus/campus-locations/atlanta
strayer-university-new-jersey | Strayer University-New Jersey | Piscataway, NJ | www.strayer.edu/campus-locations/new-jersey/piscataway
strayer-university-arkansas | Strayer University-Arkansas | Little Rock, AR | www.strayer.edu/campus-locations/arkansas/little-rock
chamberlain-university-arizona | Chamberlain University-Arizona | Phoenix, AZ | https://www.chamberlain.edu/
provo-college | Provo College | Provo, UT | www.provocollege.edu/
chamberlain-university-nevada | Chamberlain University-Nevada | Las Vegas, NV | https://www.chamberlain.edu/
chamberlain-university-michigan | Chamberlain University-Michigan | Troy, MI | https://www.chamberlain.edu/
chamberlain-university-louisiana | Chamberlain University-Louisiana | Jefferson, LA | https://www.chamberlain.edu/
arizona-college-of-nursing-southfield | Arizona College of Nursing-Southfield | Southfield, MI | https://www.arizonacollege.edu/
eagle-gate-college-boise-campus | Eagle Gate College-Boise Campus | Boise, ID | https://www.eaglegatecollege.edu/
arizona-college-of-nursing-dallas | Arizona College of Nursing-Dallas | Dallas, TX | https://www.arizonacollege.edu/
arizona-college-of-nursing-tucson | Arizona College of Nursing-Tucson | Tucson, AZ | https://www.arizonacollege.edu/
chamberlain-university-virginia | Chamberlain University-Virginia | Vienna, VA | https://www.chamberlain.edu/
five-towns-college | Five Towns College | Dix Hills, NY | www.ftc.edu/
brookline-college-albuquerque | Brookline College-Albuquerque | Albuquerque, NM | https://www.brooklinecollege.edu/
devry-university-georgia | DeVry University-Georgia | Decatur, GA | https://www.devry.edu/
eastern-international-college-jersey-city | Eastern International College-Jersey City | Jersey City, NJ | www.eicollege.edu/
university-of-silicon-valley | University of Silicon Valley | San Jose, CA | https://www.usv.edu/
neumont-college-of-computer-science | Neumont College of Computer Science | Salt Lake City, UT | https://www.neumont.edu/
south-university-columbia | South University-Columbia | Columbia, SC | www.southuniversity.edu/columbia#location=Columbia, SC
arizona-college-of-nursing-fort-lauderdale | Arizona College of Nursing-Fort Lauderdale | Fort Lauderdale, FL | https://www.arizonacollege.edu/
washington-university-of-science-and-technology | Washington University of Science and Technology | Alexandria, VA | www.wust.edu/
south-university-tampa | South University-Tampa | Tampa, FL | www.southuniversity.edu/tampa#location=Tampa, FL
