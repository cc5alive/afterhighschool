# Task: research "What's special" facts for US colleges (batch 7 of 11)

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

webber-international-university | Webber International University | Babson Park, FL | www.webber.edu/
gallaudet-university | Gallaudet University | Washington, DC | https://gallaudet.edu/
heritage-university | Heritage University | Toppenish, WA | www.heritage.edu/
kansas-city-art-institute | Kansas City Art Institute | Kansas City, MO | www.kcai.edu/
simpson-university | Simpson University | Redding, CA | www.simpsonu.edu/
culver-stockton-college | Culver-Stockton College | Canton, MO | https://www.culver.edu/
cal-poly-maritime-academy | Cal Poly Maritime Academy | Vallejo, CA | https://maritime.calpoly.edu/
peirce-college | Peirce College | Philadelphia, PA | https://www.peirce.edu/
graceland-university-lamoni | Graceland University-Lamoni | Lamoni, IA | www.graceland.edu/
malone-university | Malone University | Canton, OH | https://www.malone.edu/
crown-college | Crown College | Saint Bonifacius, MN | www.crown.edu/
pennsylvania-state-university-penn-state-scranton | Pennsylvania State University-Penn State Scranton | Dunmore, PA | https://scranton.psu.edu/
rochester-christian-university | Rochester Christian University | Rochester Hills, MI | rcu.edu/
thiel-college | Thiel College | Greenville, PA | https://www.thiel.edu/
tusculum-university | Tusculum University | Greeneville, TN | https://www.tusculum.edu/
spring-hill-college | Spring Hill College | Mobile, AL | https://www.shc.edu/
bloomfield-college-of-montclair-state-university | Bloomfield College of Montclair State University | Bloomfield, NJ | www.bloomfield.edu/
nebraska-methodist-college-of-nursing-and-allied-health | Nebraska Methodist College of Nursing & Allied Health | Omaha, NE | www.methodistcollege.edu/
bennington-college | Bennington College | Bennington, VT | https://www.bennington.edu/
woodbury-university | Woodbury University | Burbank, CA | https://woodbury.edu/
hiram-college | Hiram College | Hiram, OH | www.hiram.edu/
cairn-university-langhorne | Cairn University-Langhorne | Langhorne, PA | www.cairn.edu/
emmanuel-university | Emmanuel University | Franklin Springs, GA | eu.edu/
goshen-college | Goshen College | Goshen, IN | www.goshen.edu/
colby-sawyer-college | Colby-Sawyer College | New London, NH | www.colby-sawyer.edu/
keystone-college | Keystone College | La Plume, PA | https://www.keystone.edu/
baptist-health-sciences-university | Baptist Health Sciences University | Memphis, TN | www.baptistu.edu/
hallmark-university | Hallmark University | San Antonio, TX | https://www.hallmark.edu/
university-of-the-ozarks | University of the Ozarks | Clarksville, AR | https://ozarks.edu/
erskine-college | Erskine College | Due West, SC | www.erskine.edu/
be-er-yaakov-talmudic-seminary | Be'er Yaakov Talmudic Seminary | Spring Valley, NY | www.byts.edu/
whittier-college | Whittier College | Whittier, CA | www.whittier.edu/
montreat-college | Montreat College | Montreat, NC | https://www.montreat.edu/
montana-state-university-northern | Montana State University-Northern | Havre, MT | www.msun.edu/
ohio-dominican-university | Ohio Dominican University | Columbus, OH | https://www.ohiodominican.edu/
warner-university | Warner University | Lake Wales, FL | www.warner.edu/
young-harris-college | Young Harris College | Young Harris, GA | www.yhc.edu/
eastern-mennonite-university | Eastern Mennonite University | Harrisonburg, VA | https://emu.edu/
houghton-university | Houghton University | Houghton, NY | www.houghton.edu/
menlo-college | Menlo College | Atherton, CA | https://www.menlo.edu/
la-roche-university | La Roche University | Pittsburgh, PA | www.laroche.edu/
philander-smith-university | Philander Smith University | Little Rock, AR | https://www.philander.edu/
midwestern-baptist-theological-seminary | Midwestern Baptist Theological Seminary | Kansas City, MO | https://www.mbts.edu/
southern-wesleyan-university | Southern Wesleyan University | Central, SC | https://www.swu.edu/
laguna-college-of-art-and-design | Laguna College of Art and Design | Laguna Beach, CA | www.lcad.edu/
union-commonwealth-university | Union Commonwealth University | Barbourville, KY | https://www.unionky.edu/
truett-mcconnell-university | Truett McConnell University | Cleveland, GA | https://truett.edu/
johnson-university | Johnson University | Knoxville, TN | johnsonu.edu/
clarke-university | Clarke University | Dubuque, IA | www.clarke.edu/
herzing-university-minneapolis | Herzing University-Minneapolis | St. Louis Park, MN | https://www.herzing.edu/
cleary-university | Cleary University | Howell, MI | www.cleary.edu/
lane-college | Lane College | Jackson, TN | https://www.lanecollege.edu/
mayville-state-university | Mayville State University | Mayville, ND | www.mayvillestate.edu/
university-of-connecticut-waterbury-campus | University of Connecticut-Waterbury Campus | Waterbury, CT | https://waterbury.uconn.edu/
martin-luther-college | Martin Luther College | New Ulm, MN | www.mlc-wels.edu/
samuel-merritt-university | Samuel Merritt University | Oakland, CA | www.samuelmerritt.edu/
columbia-international-university | Columbia International University | Columbia, SC | www.ciu.edu/
grace-christian-university | Grace Christian University | Wyoming, MI | https://www.gracechristian.edu/
howard-payne-university | Howard Payne University | Brownwood, TX | www.hputx.edu/
massachusetts-college-of-liberal-arts | Massachusetts College of Liberal Arts | North Adams, MA | https://www.mcla.edu/
the-christ-college-of-nursing-and-health-sciences | The Christ College of Nursing and Health Sciences | Cincinnati, OH | https://www.thechristcollege.edu/
wiley-university | Wiley University | Marshall, TX | wileyc.edu/
north-central-university | North Central University | Minneapolis, MN | www.northcentral.edu/
notre-dame-of-maryland-university | Notre Dame of Maryland University | Baltimore, MD | www.ndm.edu/
elmira-college | Elmira College | Elmira, NY | https://www.elmira.edu/
greensboro-college | Greensboro College | Greensboro, NC | https://www.greensboro.edu/
judson-university | Judson University | Elgin, IL | www.judsonu.edu/
warren-wilson-college | Warren Wilson College | Swannanoa, NC | https://www.warren-wilson.edu/
stillman-college | Stillman College | Tuscaloosa, AL | https://stillman.edu/
minneapolis-college-of-art-and-design | Minneapolis College of Art and Design | Minneapolis, MN | https://mcad.edu/
concordia-university-ann-arbor | Concordia University Ann Arbor | Ann Arbor, MI | https://www.cuaa.edu/
monmouth-college | Monmouth College | Monmouth, IL | https://www.monmouthcollege.edu/
talladega-college | Talladega College | Talladega, AL | www.talladega.edu/
ferrum-college | Ferrum College | Ferrum, VA | www.ferrum.edu/
mount-marty-university | Mount Marty University | Yankton, SD | www.mountmarty.edu/
goldey-beacom-college | Goldey-Beacom College | Wilmington, DE | www.gbc.edu/
ohio-university-lancaster-campus | Ohio University-Lancaster Campus | Lancaster, OH | https://www.ohio.edu/lancaster/
ripon-college | Ripon College | Ripon, WI | www.ripon.edu/
centenary-college-of-louisiana | Centenary College of Louisiana | Shreveport, LA | www.centenary.edu/
corban-university | Corban University | Salem, OR | https://www.corban.edu/
oklahoma-wesleyan-university | Oklahoma Wesleyan University | Bartlesville, OK | www.okwu.edu/
louisiana-christian-university | Louisiana Christian University | Pineville, LA | www.lcuniversity.edu/
dakota-wesleyan-university | Dakota Wesleyan University | Mitchell, SD | www.dwu.edu/
earlham-college | Earlham College | Richmond, IN | https://earlham.edu/
ursuline-college | Ursuline College | Pepper Pike, OH | www.ursuline.edu/
bethany-lutheran-college | Bethany Lutheran College | Mankato, MN | https://www.blc.edu/
pennsylvania-state-university-penn-state-york | Pennsylvania State University-Penn State York | York, PA | https://york.psu.edu/
william-peace-university | William Peace University | Raleigh, NC | www.peace.edu/
hollins-university | Hollins University | Roanoke, VA | www.hollins.edu/
davis-and-elkins-college | Davis & Elkins College | Elkins, WV | www.dewv.edu/
randolph-college | Randolph College | Lynchburg, VA | www.randolphcollege.edu/
pfeiffer-university | Pfeiffer University | Misenheimer, NC | www.pfeiffer.edu/
lyon-college | Lyon College | Batesville, AR | www.lyon.edu/
thomas-college | Thomas College | Waterville, ME | www.thomas.edu/
northwest-university | Northwest University | Kirkland, WA | www.northwestu.edu/
holy-cross-college | Holy Cross College | Notre Dame, IN | www.hcc-nd.edu/
tougaloo-college | Tougaloo College | Tougaloo, MS | www.tougaloo.edu/
westminster-college-mo | Westminster College | Fulton, MO | https://www.wcmo.edu/
minerva-university | Minerva University | San Francisco, CA | https://www.minerva.edu/
lagrange-college | LaGrange College | Lagrange, GA | https://www.lagrange.edu/
drury-university-college-of-continuing-professional-studies | Drury University-College of Continuing Professional Studies | Springfield, MO | www.drury.edu/go/
alverno-college | Alverno College | Milwaukee, WI | https://www.alverno.edu/
mount-mary-university | Mount Mary University | Milwaukee, WI | www.mtmary.edu/
briar-cliff-university | Briar Cliff University | Sioux City, IA | www.briarcliff.edu/
clarkson-college | Clarkson College | Omaha, NE | www.clarksoncollege.edu/
ohio-state-university-lima-campus | Ohio State University-Lima Campus | Lima, OH | lima.osu.edu/
paul-quinn-college | Paul Quinn College | Dallas, TX | https://paulquinn.edu/
pennsylvania-state-university-penn-state-schuylkill | Pennsylvania State University-Penn State Schuylkill | Schuylkill Haven, PA | https://schuylkill.psu.edu/
hult-international-business-school | Hult International Business School | Cambridge, MA | www.hult.edu/
cheyney-university-of-pennsylvania | Cheyney University of Pennsylvania | Cheyney, PA | https://www.cheyney.edu/
harrisburg-university-of-science-and-technology | Harrisburg University of Science and Technology | Harrisburg, PA | www.harrisburgu.edu/
bethany-college-wv | Bethany College | Bethany, WV | www.bethanywv.edu/
bluefield-university | Bluefield University | Bluefield, VA | www.bluefield.edu/
texas-college | Texas College | Tyler, TX | www.texascollege.edu/
north-american-university | North American University | Stafford, TX | www.na.edu/
parker-university | Parker University | Dallas, TX | www.parker.edu/
southern-university-law-center | Southern University Law Center | Baton Rouge, LA | www.sulc.edu/
trine-university-regional-non-traditional-campuses | Trine University-Regional/Non-Traditional Campuses | Angola, IN | trine.edu/online/index.aspx
chowan-university | Chowan University | Murfreesboro, NC | https://www.chowan.edu/
villa-maria-college | Villa Maria College | Buffalo, NY | https://www.villa.edu/
ozark-christian-college | Ozark Christian College | Joplin, MO | www.occ.edu/
talmudical-seminary-of-bobov | Talmudical Seminary of Bobov | Brooklyn, NY | www.independentrabbinicalcolleges.org/
university-of-maine-at-fort-kent | University of Maine at Fort Kent | Fort Kent, ME | www.umfk.maine.edu/
bon-secours-memorial-college-of-nursing | Bon Secours Memorial College of Nursing | Richmond, VA | https://www.bsmcon.edu/
wheeling-university | Wheeling University | Wheeling, WV | www.wheeling.edu/
florida-college | Florida College | Temple Terrace, FL | www.floridacollege.edu/
southeastern-baptist-theological-seminary | Southeastern Baptist Theological Seminary | Wake Forest, NC | https://www.judsoncollege.com/
spalding-university | Spalding University | Louisville, KY | https://www.spalding.edu/
bluffton-university | Bluffton University | Bluffton, OH | www.bluffton.edu/
le-moyne-owen-college | Le Moyne-Owen College | Memphis, TN | www.loc.edu/
paul-smiths-college-of-arts-and-science | Paul Smiths College of Arts and Science | Paul Smiths, NY | https://www.paulsmiths.edu/
jarvis-christian-university | Jarvis Christian University | Hawkins, TX | www.jarvis.edu/
allen-university | Allen University | Columbia, SC | https://www.allenuniversity.edu/
southwestern-adventist-university | Southwestern Adventist University | Keene, TX | www.swau.edu/
bethany-college-ks | Bethany College | Lindsborg, KS | https://www.bethanylb.edu/
university-of-minnesota-rochester | University of Minnesota-Rochester | Rochester, MN | https://r.umn.edu/
thomas-aquinas-college | Thomas Aquinas College | Santa Paula, CA | https://thomasaquinas.edu/
hope-international-university | Hope International University | Fullerton, CA | www.hiu.edu/
pennsylvania-state-university-penn-state-mont-alto | Pennsylvania State University-Penn State Mont Alto | Mont Alto, PA | https://montalto.psu.edu/
alice-lloyd-college | Alice Lloyd College | Pippa Passes, KY | www.alc.edu/
saint-elizabeth-university | Saint Elizabeth University | Morristown, NJ | www.steu.edu/
bryan-college-of-health-sciences | Bryan College of Health Sciences | Lincoln, NE | https://www.bryanhealthcollege.edu/bcohs/
kettering-college | Kettering College | Kettering, OH | kc.edu/
millsaps-college | Millsaps College | Jackson, MS | www.millsaps.edu/
brescia-university | Brescia University | Owensboro, KY | www.brescia.edu/
the-university-of-texas-medical-branch-at-galveston | The University of Texas Medical Branch at Galveston | Galveston, TX | https://www.utmb.edu/
university-of-wisconsin-milwaukee-flex | University of Wisconsin-Milwaukee Flex | Milwaukee, WI | https://flex.wisconsin.edu/
maranatha-baptist-university | Maranatha Baptist University | Watertown, WI | www.mbu.edu/
cleveland-institute-of-art | Cleveland Institute of Art | Cleveland, OH | www.cia.edu/
manhattan-school-of-music | Manhattan School of Music | New York, NY | https://www.msmnyc.edu/
sterling-college-ks | Sterling College | Sterling, KS | www.sterling.edu/
roseman-university-of-health-sciences | Roseman University of Health Sciences | Henderson, NV | www.roseman.edu/
moore-college-of-art-and-design | Moore College of Art and Design | Philadelphia, PA | www.moore.edu/
cambridge-college | Cambridge College | Boston, MA | www.cambridgecollege.edu/
mount-carmel-college-of-nursing | Mount Carmel College of Nursing | Columbus, OH | www.mccn.edu/
calumet-college-of-saint-joseph | Calumet College of Saint Joseph | Whiting, IN | www.ccsj.edu/
university-of-providence | University of Providence | Great Falls, MT | www.uprovidence.edu/
eureka-college | Eureka College | Eureka, IL | www.eureka.edu/
herzing-university-kenosha | Herzing University-Kenosha | Kenosha, WI | https://www.herzing.edu/
bushnell-university | Bushnell University | Eugene, OR | www.bushnell.edu/
yeshiva-of-machzikai-hadas | Yeshiva of Machzikai Hadas | Brooklyn, NY | https://yeshivaofmachzikaihadas.com/
beacon-college | Beacon College | Leesburg, FL | https://www.beaconcollege.edu/
bethel-college-north-newton | Bethel College-North Newton | North Newton, KS | www.bethelks.edu/
pennsylvania-state-university-penn-state-hazleton | Pennsylvania State University-Penn State Hazleton | Hazleton, PA | https://hazleton.psu.edu/
defiance-college | Defiance College | Defiance, OH | https://www.defiance.edu/
oakland-city-university | Oakland City University | Oakland City, IN | www.oak.edu/
yeshiva-kollel-tifereth-elizer | Yeshiva Kollel Tifereth Elizer | Brooklyn, NY | https://www.yeshivakolleltiferethelizer.com/
blue-mountain-christian-university | Blue Mountain Christian University | Blue Mountain, MS | www.bmc.edu/
pillar-college | Pillar College | Newark, NJ | www.pillar.edu/
tabor-college | Tabor College | Hillsboro, KS | tabor.edu/
college-unbound | College Unbound | Providence, RI | collegeunbound.edu/
rosemont-college | Rosemont College | Rosemont, PA | www.rosemont.edu/
central-baptist-college | Central Baptist College | Conway, AR | www.cbc.edu/
soka-university-of-america | Soka University of America | Aliso Viejo, CA | www.soka.edu/
pennsylvania-state-university-penn-state-beaver | Pennsylvania State University-Penn State Beaver | Monaca, PA | https://beaver.psu.edu/
albany-college-of-pharmacy-and-health-sciences | Albany College of Pharmacy and Health Sciences | Albany, NY | www.acphs.edu/
williams-baptist-university | Williams Baptist University | Walnut Ridge, AR | https://williamsbaptistuniversity.com/
rabbinical-college-bobover-yeshiva-bnei-zion | Rabbinical College Bobover Yeshiva Bnei Zion | Brooklyn, NY | rabbinicalcollegeboboveryeshiva.edu/
urshan-university | Urshan University | Wentzville, MO | urshan.edu/
blackburn-college | Blackburn College | Carlinville, IL | www.blackburn.edu/
st-john-s-college-md | St. John's College | Annapolis, MD | www.sjc.edu/
union-adventist-university | Union Adventist University | Lincoln, NE | https://www.uau.edu/
university-of-holy-cross | University of Holy Cross | New Orleans, LA | uhcno.edu/
east-west-university | East-West University | Chicago, IL | www.eastwest.edu/
the-juilliard-school | The Juilliard School | New York, NY | www.juilliard.edu/
rust-college | Rust College | Holly Springs, MS | www.rustcollege.edu/
the-university-of-texas-health-science-center-at-houston | The University of Texas Health Science Center at Houston | Houston, TX | www.uth.edu/
northeastern-university-oakland | Northeastern University Oakland | Oakland, CA | https://oakland.northeastern.edu/
carolina-university | Carolina University | Winston-Salem, NC | https://www.carolinau.edu/
bryant-and-stratton-college-syracuse-north | Bryant & Stratton College-Syracuse North | Liverpool, NY | https://www.bryantstratton.edu/
university-of-akron-wayne-college | University of Akron Wayne College | Orrville, OH | https://wayne.uakron.edu/
life-pacific-university | Life Pacific University | San Dimas, CA | https://lifepacific.edu/
touro-university-worldwide | Touro University Worldwide | Los Alamitos, CA | https://www.tuw.edu/
university-of-connecticut-avery-point | University of Connecticut-Avery Point | Groton, CT | https://averypoint.uconn.edu/
washington-adventist-university | Washington Adventist University | Takoma Park, MD | https://www.wau.edu/
barnes-jewish-college-goldfarb-school-of-nursing | Barnes-Jewish College Goldfarb School of Nursing | Saint Louis, MO | https://www.barnesjewishcollege.edu/
college-of-saint-mary | College of Saint Mary | Omaha, NE | https://www.csm.edu/
walsh-college | Walsh College | Troy, MI | https://walshcollege.edu/
sweet-briar-college | Sweet Briar College | Sweet Briar, VA | www.sbc.edu/
university-of-new-hampshire-at-manchester | University of New Hampshire at Manchester | Manchester, NH | https://manchester.unh.edu/
