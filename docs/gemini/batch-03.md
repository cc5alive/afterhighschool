# Task: research "What's special" facts for US colleges (batch 3 of 11)

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

franklin-university | Franklin University | Columbus, OH | www.franklin.edu/
colorado-christian-university | Colorado Christian University | Lakewood, CO | https://www.ccu.edu/
missouri-university-of-science-and-technology | Missouri University of Science and Technology | Rolla, MO | https://www.mst.edu/
long-island-university | Long Island University | Brookville, NY | www.liu.edu/
northwestern-state-university-of-louisiana | Northwestern State University of Louisiana | Natchitoches, LA | https://www.nsula.edu/
purdue-university-fort-wayne | Purdue University Fort Wayne | Fort Wayne, IN | www.pfw.edu/
state-university-of-new-york-at-oswego | State University of New York at Oswego | Oswego, NY | https://www.oswego.edu/
university-of-washington-bothell-campus | University of Washington-Bothell Campus | Bothell, WA | https://www.uwb.edu/
worcester-polytechnic-institute | Worcester Polytechnic Institute | Worcester, MA | https://www.wpi.edu/
university-of-south-dakota | University of South Dakota | Vermillion, SD | https://www.usd.edu/
norfolk-state-university | Norfolk State University | Norfolk, VA | www.nsu.edu/
columbia-college-chicago | Columbia College Chicago | Chicago, IL | www.colum.edu/
duquesne-university | Duquesne University | Pittsburgh, PA | www.duq.edu/
university-of-north-carolina-at-pembroke | University of North Carolina at Pembroke | Pembroke, NC | https://www.uncp.edu/
university-of-san-francisco | University of San Francisco | San Francisco, CA | https://www.usfca.edu/
adelphi-university | Adelphi University | Garden City, NY | www.adelphi.edu/
university-of-massachusetts-dartmouth | University of Massachusetts-Dartmouth | North Dartmouth, MA | www.umassd.edu/
gonzaga-university | Gonzaga University | Spokane, WA | https://www.gonzaga.edu/
marist-university | Marist University | Poughkeepsie, NY | www.marist.edu/
sonoma-state-university | Sonoma State University | Rohnert Park, CA | https://sonoma.edu/
winona-state-university | Winona State University | Winona, MN | www.winona.edu/
high-point-university | High Point University | High Point, NC | www.highpoint.edu/
suny-buffalo-state-university | SUNY Buffalo State University | Buffalo, NY | https://suny.buffalostate.edu/
saint-cloud-state-university | Saint Cloud State University | Saint Cloud, MN | https://www.stcloudstate.edu/
virginia-state-university | Virginia State University | Petersburg, VA | www.vsu.edu/
rhode-island-college | Rhode Island College | Providence, RI | www.ric.edu/
bowie-state-university | Bowie State University | Bowie, MD | www.bowiestate.edu/
university-of-missouri-st-louis | University of Missouri-St Louis | Saint Louis, MO | https://www.umsl.edu/
university-of-louisiana-at-monroe | University of Louisiana at Monroe | Monroe, LA | www.ulm.edu/
california-state-university-channel-islands | California State University-Channel Islands | Camarillo, CA | www.csuci.edu/
mcneese-state-university | McNeese State University | Lake Charles, LA | www.mcneese.edu/
columbia-college-mo | Columbia College | Columbia, MO | https://www.ccis.edu/
university-of-arkansas-at-little-rock | University of Arkansas at Little Rock | Little Rock, AR | https://ualr.edu/
saint-joseph-s-university-philadelphia | Saint Joseph's University - Philadelphia | Philadelphia, PA | https://www.sju.edu/
ramapo-college-of-new-jersey | Ramapo College of New Jersey | Mahwah, NJ | www.ramapo.edu/
the-university-of-tennessee-martin | The University of Tennessee-Martin | Martin, TN | https://www.utm.edu/
tennessee-state-university | Tennessee State University | Nashville, TN | www.tnstate.edu/
university-of-new-haven | University of New Haven | West Haven, CT | www.newhaven.edu/
east-stroudsburg-university-of-pennsylvania | East Stroudsburg University of Pennsylvania | East Stroudsburg, PA | https://www.esu.edu/
southeastern-university | Southeastern University | Lakeland, FL | https://www.seu.edu/
northeastern-state-university | Northeastern State University | Tahlequah, OK | https://www.nsuok.edu/
ana-g-mendez-university | Ana G. Mendez University | Orlando, FL | www.agmu.edu/
texas-a-and-m-university-kingsville | Texas A&M University-Kingsville | Kingsville, TX | https://www.tamuk.edu/
nicholls-state-university | Nicholls State University | Thibodaux, LA | www.nicholls.edu/
suny-oneonta | SUNY Oneonta | Oneonta, NY | https://suny.oneonta.edu/
university-of-new-orleans | University of New Orleans | New Orleans, LA | new.uno.edu/
university-of-florida-online | University of Florida-Online | Gainesville, FL | https://www.ufonline.ufl.edu/
lindenwood-university | Lindenwood University | Saint Charles, MO | https://www.lindenwood.edu/
jackson-state-university | Jackson State University | Jackson, MS | https://www.jsums.edu/
morehead-state-university | Morehead State University | Morehead, KY | https://www.moreheadstate.edu/
washburn-university | Washburn University | Topeka, KS | www.washburn.edu/
park-university | Park University | Parkville, MO | www.park.edu/
dalton-state-college | Dalton State College | Dalton, GA | https://www.daltonstate.edu/
mercer-university | Mercer University | Macon, GA | https://www.mercer.edu/
university-of-massachusetts-global | University of Massachusetts Global | Aliso Viejo, CA | https://www.umassglobal.edu/
bentley-university | Bentley University | Waltham, MA | www.bentley.edu/
university-of-the-incarnate-word | University of the Incarnate Word | San Antonio, TX | https://www.uiw.edu/
university-of-michigan-flint | University of Michigan-Flint | Flint, MI | www.umflint.edu/
western-illinois-university | Western Illinois University | Macomb, IL | www.wiu.edu/
national-louis-university | National Louis University | Chicago, IL | https://www.nl.edu/
delaware-state-university | Delaware State University | Dover, DE | www.desu.edu/
northwest-missouri-state-university | Northwest Missouri State University | Maryville, MO | https://www.nwmissouri.edu/
christopher-newport-university | Christopher Newport University | Newport News, VA | https://cnu.edu/
clayton-state-university | Clayton  State University | Morrow, GA | www.clayton.edu/
creighton-university | Creighton University | Omaha, NE | https://www.creighton.edu/
cuny-york-college | CUNY York College | Jamaica, NY | www.york.cuny.edu/
butler-university | Butler University | Indianapolis, IN | www.butler.edu/
salem-state-university | Salem State University | Salem, MA | https://www.salemstate.edu/
suffolk-university | Suffolk University | Boston, MA | https://www.suffolk.edu/
ithaca-college | Ithaca College | Ithaca, NY | https://www.ithaca.edu/
providence-college | Providence College | Providence, RI | https://www.providence.edu/
stevens-institute-of-technology | Stevens Institute of Technology | Hoboken, NJ | www.stevens.edu/
university-of-southern-maine | University of Southern Maine | Portland, ME | usm.maine.edu/
pittsburg-state-university | Pittsburg State University | Pittsburg, KS | https://www.pittstate.edu/
university-of-alaska-fairbanks | University of Alaska Fairbanks | Fairbanks, AK | www.uaf.edu/
xavier-university | Xavier University | Cincinnati, OH | https://www.xavier.edu/
samford-university | Samford University | Birmingham, AL | www.samford.edu/
university-of-wisconsin-river-falls | University of Wisconsin-River Falls | River Falls, WI | https://www.uwrf.edu/
eastern-illinois-university | Eastern Illinois University | Charleston, IL | https://www.eiu.edu/
university-of-washington-tacoma-campus | University of Washington-Tacoma Campus | Tacoma, WA | https://www.tacoma.uw.edu/
winston-salem-state-university | Winston-Salem State University | Winston-Salem, NC | https://www.wssu.edu/
grambling-state-university | Grambling State University | Grambling, LA | www.gram.edu/
suny-old-westbury | SUNY Old Westbury | Old Westbury, NY | www.oldwestbury.edu/
university-of-hartford | University of Hartford | West Hartford, CT | www.hartford.edu/
university-of-nebraska-at-kearney | University of Nebraska at Kearney | Kearney, NE | www.unk.edu/
midwestern-state-university | Midwestern State University | Wichita Falls, TX | www.msutexas.edu/
shippensburg-university-of-pennsylvania | Shippensburg University of Pennsylvania | Shippensburg, PA | www.ship.edu/
seattle-university | Seattle University | Seattle, WA | www.seattleu.edu/
touro-university | Touro University | New York, NY | https://www.touro.edu/
university-of-south-carolina-upstate | University of South Carolina-Upstate | Spartanburg, SC | www.uscupstate.edu/
pennsylvania-state-university-penn-state-harrisburg | Pennsylvania State University-Penn State Harrisburg | Middletown, PA | https://harrisburg.psu.edu/
beth-medrash-govoha | Beth Medrash Govoha | Lakewood, NJ | bmg.edu/
cedarville-university | Cedarville University | Cedarville, OH | https://www.cedarville.edu/
lewis-university | Lewis University | Romeoville, IL | www.lewisu.edu/
northeastern-illinois-university | Northeastern Illinois University | Chicago, IL | www.neiu.edu/
aurora-university | Aurora University | Aurora, IL | https://aurora.edu/
roger-williams-university | Roger Williams University | Bristol, RI | https://www.rwu.edu/
indiana-university-south-bend | Indiana University-South Bend | South Bend, IN | https://southbend.iu.edu/
worcester-state-university | Worcester State University | Worcester, MA | https://www.worcester.edu/
merrimack-college | Merrimack College | North Andover, MA | https://www.merrimack.edu/
the-university-of-texas-permian-basin | The University of Texas Permian Basin | Odessa, TX | https://www.utpb.edu/
pratt-institute-main | Pratt Institute-Main | Brooklyn, NY | https://www.pratt.edu/
emerson-college | Emerson College | Boston, MA | www.emerson.edu/
loyola-university-maryland | Loyola University Maryland | Baltimore, MD | https://www.loyola.edu/
suny-college-at-geneseo | SUNY College at Geneseo | Geneseo, NY | https://www.geneseo.edu/
johnson-and-wales-university-providence | Johnson & Wales University-Providence | Providence, RI | https://www.jwu.edu/campuses/providence/
state-university-of-new-york-at-plattsburgh | State University of New York at Plattsburgh | Plattsburgh, NY | https://www.plattsburgh.edu/
nevada-state-university | Nevada State University | Henderson, NV | https://nevadastate.edu/
thomas-jefferson-university | Thomas Jefferson University | Philadelphia, PA | www.jefferson.edu/
rutgers-university-camden | Rutgers University-Camden | Camden, NJ | https://camden.rutgers.edu/
wentworth-institute-of-technology | Wentworth Institute of Technology | Boston, MA | https://wit.edu/
hampton-university | Hampton University | Hampton, VA | www.hamptonu.edu/
monmouth-university | Monmouth University | West Long Branch, NJ | https://www.monmouth.edu/
new-jersey-city-university | New Jersey City University | Jersey City, NJ | https://www.njcu.edu/
brandeis-university | Brandeis University | Waltham, MA | https://www.brandeis.edu/
westfield-state-university | Westfield State University | Westfield, MA | www.westfield.ma.edu/
clark-atlanta-university | Clark Atlanta University | Atlanta, GA | www.cau.edu/
vermont-state-university | Vermont State University | Randolph, VT | vermontstate.edu/
bradley-university | Bradley University | Peoria, IL | www.bradley.edu/
university-of-mary-washington | University of Mary Washington | Fredericksburg, VA | https://www.umw.edu/
university-of-scranton | University of Scranton | Scranton, PA | www.scranton.edu/
pepperdine-university | Pepperdine University | Malibu, CA | www.pepperdine.edu/
winthrop-university | Winthrop University | Rock Hill, SC | www.winthrop.edu/
southwestern-oklahoma-state-university | Southwestern Oklahoma State University | Weatherford, OK | https://www.swosu.edu/
western-connecticut-state-university | Western Connecticut State University | Danbury, CT | https://www.wcsu.edu/
oral-roberts-university | Oral Roberts University | Tulsa, OK | https://oru.edu/
alabama-state-university | Alabama State University | Montgomery, AL | www.alasu.edu/
biola-university | Biola University | La Mirada, CA | https://www.biola.edu/
massachusetts-college-of-pharmacy-and-health-sciences | Massachusetts College of Pharmacy and Health Sciences | Boston, MA | www.mcphs.edu/
new-york-institute-of-technology | New York Institute of Technology | Old Westbury, NY | https://www.nyit.edu/
eastern-connecticut-state-university | Eastern Connecticut State University | Willimantic, CT | https://www.easternct.edu/
siena-university | Siena University | Loudonville, NY | https://www.siena.edu/
florida-institute-of-technology | Florida Institute of Technology | Melbourne, FL | https://www.fit.edu/
lander-university | Lander University | Greenwood, SC | https://www.lander.edu/
harding-university | Harding University | Searcy, AR | www.harding.edu/
eastern-new-mexico-university-main-campus | Eastern New Mexico University-Main Campus | Portales, NM | www.enmu.edu/
hope-college | Hope College | Holland, MI | https://hope.edu/
york-college-of-pennsylvania | York College of Pennsylvania | York, PA | https://www.ycp.edu/
cuny-graduate-school-and-university-center | CUNY Graduate School and University Center | New York, NY | www.gc.cuny.edu/
pennsylvania-state-university-penn-state-erie-behrend-college | Pennsylvania State University-Penn State Erie-Behrend College | Erie, PA | https://behrend.psu.edu/
cuny-medgar-evers-college | CUNY Medgar Evers College | Brooklyn, NY | https://www.mec.cuny.edu/
university-of-st-thomas-tx | University of St Thomas | Houston, TX | https://www.stthom.edu/
embry-riddle-aeronautical-university-prescott | Embry-Riddle Aeronautical University-Prescott | Prescott, AZ | prescott.erau.edu/
abraham-baldwin-agricultural-college | Abraham Baldwin Agricultural College | Tifton, GA | https://www.abac.edu/
university-of-the-pacific | University of the Pacific | Stockton, CA | https://www.pacific.edu/
suny-at-purchase-college | SUNY at Purchase College | Purchase, NY | www.purchase.edu/
abilene-christian-university | Abilene Christian University | Abilene, TX | www.acu.edu/
bryant-university | Bryant University | Smithfield, RI | https://www.bryant.edu/
calvin-university | Calvin University | Grand Rapids, MI | www.calvin.edu/
point-loma-nazarene-university | Point Loma Nazarene University | San Diego, CA | www.pointloma.edu/
anderson-university-sc | Anderson University | Anderson, SC | https://www.andersonuniversity.edu/
indiana-university-southeast | Indiana University-Southeast | New Albany, IN | https://southeast.iu.edu/
molloy-university | Molloy University | Rockville Centre, NY | www.molloy.edu/
the-catholic-university-of-america | The Catholic University of America | Washington, DC | https://www.catholic.edu/
plymouth-state-university | Plymouth State University | Plymouth, NH | www.plymouth.edu/
st-joseph-s-university-new-york | St. Joseph's University-New York | Brooklyn, NY | https://www.sjny.edu/
bemidji-state-university | Bemidji State University | Bemidji, MN | https://www.bemidjistate.edu/
davenport-university | Davenport University | Grand Rapids, MI | www.davenport.edu/
endicott-college | Endicott College | Beverly, MA | www.endicott.edu/
rider-university | Rider University | Lawrenceville, NJ | www.rider.edu/
western-oregon-university | Western Oregon University | Monmouth, OR | https://wou.edu/
stevenson-university | Stevenson University | Owings Mills, MD | www.stevenson.edu/
saint-xavier-university | Saint Xavier University | Chicago, IL | https://www.sxu.edu/
st-olaf-college | St Olaf College | Northfield, MN | wp.stolaf.edu/
fort-lewis-college | Fort Lewis College | Durango, CO | fortlewis.edu/
minnesota-state-university-moorhead | Minnesota State University Moorhead | Moorhead, MN | https://www.mnstate.edu/
university-of-la-verne | University of La Verne | La Verne, CA | https://www.laverne.edu/
colorado-state-university-pueblo | Colorado State University Pueblo | Pueblo, CO | https://www.csupueblo.edu/
baker-college | Baker College | Owosso, MI | www.baker.edu/
missouri-southern-state-university | Missouri Southern State University | Joplin, MO | www.mssu.edu/
concordia-university-saint-paul | Concordia University-Saint Paul | Saint Paul, MN | https://www.csp.edu/
southeastern-oklahoma-state-university | Southeastern Oklahoma State University | Durant, OK | www.se.edu/
longwood-university | Longwood University | Farmville, VA | www.longwood.edu/
wayne-state-college | Wayne State College | Wayne, NE | https://www.wsc.edu/
elmhurst-university | Elmhurst University | Elmhurst, IL | www.elmhurst.edu/
university-of-indianapolis | University of Indianapolis | Indianapolis, IN | https://uindy.edu/
lipscomb-university | Lipscomb University | Nashville, TN | https://www.lipscomb.edu/
university-of-west-alabama | University of West Alabama | Livingston, AL | www.uwa.edu/
university-of-south-carolina-aiken | University of South Carolina Aiken | Aiken, SC | https://www.usca.edu/
university-of-portland | University of Portland | Portland, OR | https://www.up.edu/
uta-mesivta-of-kiryas-joel | Uta Mesivta of Kiryas Joel | Monroe, NY | utam.edu/
iona-university | Iona University | New Rochelle, NY | www.iona.edu/
widener-university | Widener University | Chester, PA | https://www.widener.edu/
south-carolina-state-university | South Carolina State University | Orangeburg, SC | https://scsu.edu/
jacksonville-university | Jacksonville University | Jacksonville, FL | https://www.ju.edu/index.php
university-of-north-carolina-asheville | University of North Carolina Asheville | Asheville, NC | https://new.unca.edu/
frostburg-state-university | Frostburg State University | Frostburg, MD | www.frostburg.edu/
franciscan-university-of-steubenville | Franciscan University of Steubenville | Steubenville, OH | www.franciscan.edu/
robert-morris-university | Robert Morris University | Moon Township, PA | www.rmu.edu/
charleston-southern-university | Charleston Southern University | Charleston, SC | https://www.charlestonsouthern.edu/
oregon-institute-of-technology | Oregon Institute of Technology | Klamath Falls, OR | https://www.oit.edu/
brigham-young-university-hawaii | Brigham Young University-Hawaii | Laie, HI | www.byuh.edu/
houston-christian-university | Houston Christian University | Houston, TX | https://www.hc.edu/
university-of-north-texas-at-dallas | University of North Texas at Dallas | Dallas, TX | untdallas.edu/
pennsylvania-state-university-penn-state-abington | Pennsylvania State University-Penn State Abington | Abington, PA | https://abington.psu.edu/
lynn-university | Lynn University | Boca Raton, FL | https://www.lynn.edu/
yeshiva-university | Yeshiva University | New York, NY | www.yu.edu/
roosevelt-university | Roosevelt University | Chicago, IL | www.roosevelt.edu/
morehouse-college | Morehouse College | Atlanta, GA | www.morehouse.edu/
university-of-wisconsin-parkside | University of Wisconsin-Parkside | Kenosha, WI | https://www.uwp.edu/
