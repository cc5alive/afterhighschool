# Task: research "What's special" facts for US colleges (batch 2 of 11)

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

western-governors-university | Western Governors University | Salt Lake City, UT | www.wgu.edu/
arizona-state-university-digital-immersion | Arizona State University Digital Immersion | Scottsdale, AZ | www.asu.edu/
university-of-maryland-global-campus | University of Maryland Global Campus | Adelphi, MD | www.umgc.edu/
university-of-the-people | University of the People | Pasadena, CA | www.uopeople.edu/
the-university-of-arizona-global-campus | The University of Arizona Global Campus | Chandler, AZ | www.uagc.edu/
western-michigan-university | Western Michigan University | Kalamazoo, MI | https://wmich.edu/
university-at-albany | University at Albany | Albany, NY | www.albany.edu/
university-of-houston-downtown | University of Houston-Downtown | Houston, TX | www.uhd.edu/
cuny-queens-college | CUNY Queens College | Queens, NY | https://www.qc.cuny.edu/
california-state-university-dominguez-hills | California State University-Dominguez Hills | Carson, CA | https://www.csudh.edu/
cuny-city-college | CUNY City College | New York, NY | www.ccny.cuny.edu/
university-of-louisiana-at-lafayette | University of Louisiana at Lafayette | Lafayette, LA | www.louisiana.edu/
oakland-university | Oakland University | Rochester Hills, MI | www.oakland.edu/
eastern-kentucky-university | Eastern Kentucky University | Richmond, KY | https://www.eku.edu/
north-carolina-a-and-t-state-university | North Carolina A & T State University | Greensboro, NC | www.ncat.edu/
western-kentucky-university | Western Kentucky University | Bowling Green, KY | https://www.wku.edu/
new-mexico-state-university-main-campus | New Mexico State University-Main Campus | Las Cruces, NM | www.nmsu.edu/
university-of-vermont | University of Vermont | Burlington, VT | www.uvm.edu/
loyola-university-chicago | Loyola University Chicago | Chicago, IL | https://www.luc.edu/
minnesota-state-university-mankato | Minnesota State University-Mankato | Mankato, MN | https://mnsu.edu/
university-of-alabama-at-birmingham | University of Alabama at Birmingham | Birmingham, AL | https://www.uab.edu/
cuny-john-jay-college-of-criminal-justice | CUNY John Jay College of Criminal Justice | New York, NY | www.jjay.cuny.edu/
excelsior-university | Excelsior University | Albany, NY | www.excelsior.edu/
university-of-massachusetts-boston | University of Massachusetts-Boston | Boston, MA | www.umb.edu/
university-of-nebraska-at-omaha | University of Nebraska at Omaha | Omaha, NE | https://www.unomaha.edu/
university-of-massachusetts-lowell | University of Massachusetts-Lowell | Lowell, MA | www.uml.edu/
kean-university | Kean University | Union, NJ | https://www.kean.edu/
georgia-gwinnett-college | Georgia Gwinnett College | Lawrenceville, GA | www.ggc.edu/
northern-illinois-university | Northern Illinois University | Dekalb, IL | www.niu.edu/
university-of-new-hampshire-main-campus | University of New Hampshire-Main Campus | Durham, NH | https://www.unh.edu/
george-washington-university | George Washington University | Washington, DC | https://www.gwu.edu/
texas-christian-university | Texas Christian University | Fort Worth, TX | https://www.tcu.edu/
national-university | National University | San Diego, CA | www.nu.edu/
wichita-state-university | Wichita State University | Wichita, KS | www.wichita.edu/
university-of-maryland-baltimore-county | University of Maryland-Baltimore County | Baltimore, MD | umbc.edu/
cuny-lehman-college | CUNY Lehman College | Bronx, NY | www.lehman.edu/
the-university-of-tampa | The University of Tampa | Tampa, FL | https://www.ut.edu/
college-of-charleston | College of Charleston | Charleston, SC | https://www.charleston.edu/
cuny-brooklyn-college | CUNY Brooklyn College | Brooklyn, NY | www.brooklyn.edu/
university-of-colorado-denver-anschutz-medical-campus | University of Colorado Denver/Anschutz Medical Campus | Denver, CO | www.ucdenver.edu/
fordham-university | Fordham University | Bronx, NY | https://www.fordham.edu/
coastal-carolina-university | Coastal Carolina University | Conway, SC | https://www.coastal.edu/
bellevue-university | Bellevue University | Bellevue, NE | https://www.bellevue.edu/
university-of-central-oklahoma | University of Central Oklahoma | Edmond, OK | https://www.uco.edu/
howard-university | Howard University | Washington, DC | www.howard.edu/
university-of-southern-mississippi | University of Southern Mississippi | Hattiesburg, MS | https://www.usm.edu/
the-university-of-tennessee-chattanooga | The University of Tennessee-Chattanooga | Chattanooga, TN | utc.edu/
eastern-michigan-university | Eastern Michigan University | Ypsilanti, MI | www.emich.edu/
central-michigan-university | Central Michigan University | Mount Pleasant, MI | https://www.cmich.edu/
western-carolina-university | Western Carolina University | Cullowhee, NC | www.wcu.edu/
east-tennessee-state-university | East Tennessee State University | Johnson City, TN | https://www.etsu.edu/
university-of-north-dakota | University of North Dakota | Grand Forks, ND | https://und.edu/
east-texas-a-and-m-university | East Texas A&M University | Commerce, TX | www.etamu.edu/
california-state-university-east-bay | California State University-East Bay | Hayward, CA | https://www.csueastbay.edu/
troy-university | Troy University | Troy, AL | www.troy.edu/
university-of-toledo | University of Toledo | Toledo, OH | www.utoledo.edu/
fort-hays-state-university | Fort Hays State University | Hays, KS | www.fhsu.edu/
college-of-staten-island-cuny | College of Staten Island CUNY | Staten Island, NY | www.csi.cuny.edu/
farmingdale-state-college | Farmingdale State College | Farmingdale, NY | www.farmingdale.edu/
southeastern-louisiana-university | Southeastern Louisiana University | Hammond, LA | https://www.southeastern.edu/
st-john-s-university-new-york | St. John's University-New York | Queens, NY | www.stjohns.edu/
north-dakota-state-university-main-campus | North Dakota State University-Main Campus | Fargo, ND | https://www.ndsu.edu/
university-of-wisconsin-whitewater | University of Wisconsin-Whitewater | Whitewater, WI | www.uww.edu/
university-of-west-florida | University of West Florida | Pensacola, FL | uwf.edu/
southern-utah-university | Southern Utah University | Cedar City, UT | https://www.suu.edu/
university-of-wisconsin-la-crosse | University of Wisconsin-La Crosse | La Crosse, WI | www.uwlax.edu/
commonwealth-university-of-pennsylvania | Commonwealth University of Pennsylvania | Bloomsburg, PA | https://www.commonwealthu.edu/
south-dakota-state-university | South Dakota State University | Brookings, SD | https://www.sdstate.edu/
embry-riddle-aeronautical-university-worldwide | Embry-Riddle Aeronautical University-Worldwide | Daytona Beach, FL | worldwide.erau.edu/
arkansas-state-university | Arkansas State University | Jonesboro, AR | https://www.astate.edu/
university-of-akron-main-campus | University of Akron Main Campus | Akron, OH | www.uakron.edu/
morgan-state-university | Morgan State University | Baltimore, MD | https://www.morgan.edu/
new-jersey-institute-of-technology | New Jersey Institute of Technology | Newark, NJ | https://www.njit.edu/
cleveland-state-university | Cleveland State University | Cleveland, OH | www.csuohio.edu/
university-of-wisconsin-eau-claire | University of Wisconsin-Eau Claire | Eau Claire, WI | www.uwec.edu/
university-of-south-alabama | University of South Alabama | Mobile, AL | www.southalabama.edu/
prairie-view-a-and-m-university | Prairie View A & M University | Prairie View, TX | www.pvamu.edu/
texas-woman-s-university | Texas Woman's University | Denton, TX | www.twu.edu/
southern-illinois-university-edwardsville | Southern Illinois University Edwardsville | Edwardsville, IL | www.siue.edu/
stephen-f-austin-state-university | Stephen F Austin State University | Nacogdoches, TX | https://www.sfasu.edu/
tennessee-technological-university | Tennessee Technological University | Cookeville, TN | www.tntech.edu/
university-of-colorado-colorado-springs | University of Colorado Colorado Springs | Colorado Springs, CO | https://www.uccs.edu/
california-state-university-bakersfield | California State University-Bakersfield | Bakersfield, CA | www.csub.edu/
university-of-maine | University of Maine | Orono, ME | www.umaine.edu/
southern-illinois-university-carbondale | Southern Illinois University-Carbondale | Carbondale, IL | https://siu.edu/
california-state-university-stanislaus | California State University-Stanislaus | Turlock, CA | https://www.csustan.edu/
university-of-california-merced | University of California-Merced | Merced, CA | ucmerced.edu/
louisiana-tech-university | Louisiana Tech University | Ruston, LA | https://www.latech.edu/
northern-kentucky-university | Northern Kentucky University | Highland Heights, KY | www.nku.edu/
california-baptist-university | California Baptist University | Riverside, CA | www.calbaptist.edu/
lamar-university | Lamar University | Beaumont, TX | www.lamar.edu/
ferris-state-university | Ferris State University | Big Rapids, MI | www.ferris.edu/
texas-a-and-m-university-corpus-christi | Texas A & M University-Corpus Christi | Corpus Christi, TX | https://www.tamucc.edu/
youngstown-state-university | Youngstown State University | Youngstown, OH | https://ysu.edu/
university-of-wyoming | University of Wyoming | Laramie, WY | https://www.uwyo.edu/
wilmington-university | Wilmington University | New Castle, DE | www.wilmu.edu/
pennsylvania-state-university-world-campus | Pennsylvania State University-World Campus | University Park, PA | https://worldcampus.psu.edu/
embry-riddle-aeronautical-university-daytona-beach | Embry-Riddle Aeronautical University-Daytona Beach | Daytona Beach, FL | daytonabeach.erau.edu/
central-washington-university | Central Washington University | Ellensburg, WA | www.cwu.edu/
bridgewater-state-university | Bridgewater State University | Bridgewater, MA | www.bridgew.edu/
central-connecticut-state-university | Central Connecticut State University | New Britain, CT | www.ccsu.edu/
university-of-central-arkansas | University of Central Arkansas | Conway, AR | www.uca.edu/
university-of-idaho | University of Idaho | Moscow, ID | www.uidaho.edu/
rutgers-university-newark | Rutgers University-Newark | Newark, NJ | https://www.newark.rutgers.edu/
university-of-dayton | University of Dayton | Dayton, OH | https://udayton.edu/
pace-university | Pace University | New York, NY | www.pace.edu/
marquette-university | Marquette University | Milwaukee, WI | www.marquette.edu/
empire-state-university | Empire State University | Saratoga Springs, NY | www.sunyempire.edu/
idaho-state-university | Idaho State University | Pocatello, ID | www.isu.edu/
austin-peay-state-university | Austin Peay State University | Clarksville, TN | www.apsu.edu/
stockton-university | Stockton University | Galloway, NJ | https://www.stockton.edu/
university-of-northern-iowa | University of Northern Iowa | Cedar Falls, IA | https://www.uni.edu/
university-of-west-georgia | University of West Georgia | Carrollton, GA | www.westga.edu/
the-university-of-montana | The University of Montana | Missoula, MT | www.umt.edu/
chapman-university | Chapman University | Orange, CA | https://www.chapman.edu/
berklee-college-of-music | Berklee College of Music | Boston, MA | www.berklee.edu/
pennsylvania-western-university | Pennsylvania Western University | California, PA | https://www.pennwest.edu/
the-university-of-texas-at-tyler | The University of Texas at Tyler | Tyler, TX | https://www.uttyler.edu/
university-of-minnesota-duluth | University of Minnesota-Duluth | Duluth, MN | https://d.umn.edu/
university-of-wisconsin-stevens-point | University of Wisconsin-Stevens Point | Stevens Point, WI | https://www.uwsp.edu/
southern-methodist-university | Southern Methodist University | Dallas, TX | https://www.smu.edu/
saint-louis-university | Saint Louis University | Saint Louis, MO | www.slu.edu/
american-university | American University | Washington, DC | www.american.edu/
marshall-university | Marshall University | Huntington, WV | https://www.marshall.edu/
nova-southeastern-university | Nova Southeastern University | Fort Lauderdale, FL | https://www.nova.edu/
university-of-alaska-anchorage | University of Alaska Anchorage | Anchorage, AK | www.uaa.alaska.edu/
belmont-university | Belmont University | Nashville, TN | https://www.belmont.edu/
the-college-of-new-jersey | The College of New Jersey | Ewing, NJ | https://www.tcnj.edu/
loyola-marymount-university | Loyola Marymount University | Los Angeles, CA | https://www.lmu.edu/
sacred-heart-university | Sacred Heart University | Fairfield, CT | https://www.sacredheart.edu/
jacksonville-state-university | Jacksonville State University | Jacksonville, AL | https://www.jsu.edu/
university-of-the-cumberlands | University of the Cumberlands | Williamsburg, KY | www.ucumberlands.edu/
west-texas-a-and-m-university | West Texas A & M University | Canyon, TX | https://www.wtamu.edu/
university-of-wisconsin-oshkosh | University of Wisconsin-Oshkosh | Oshkosh, WI | https://www.uwosh.edu/
texas-southern-university | Texas Southern University | Houston, TX | www.tsu.edu/
california-state-university-monterey-bay | California State University-Monterey Bay | Seaside, CA | https://csumb.edu/
university-of-missouri-kansas-city | University of Missouri-Kansas City | Kansas City, MO | https://www.umkc.edu/
slippery-rock-university-of-pennsylvania | Slippery Rock University of Pennsylvania | Slippery Rock, PA | https://www.sru.edu/
indiana-university-of-pennsylvania | Indiana University of Pennsylvania | Indiana, PA | www.iup.edu/
wright-state-university-main-campus | Wright State University-Main Campus | Dayton, OH | https://www.wright.edu/
saint-leo-university | Saint Leo University | Saint Leo, FL | www.saintleo.edu/
thomas-edison-state-university | Thomas Edison State University | Trenton, NJ | www.tesu.edu/
murray-state-university | Murray State University | Murray, KY | www.murraystate.edu/
texas-a-and-m-international-university | Texas A & M International University | Laredo, TX | www.tamiu.edu/
indiana-wesleyan-university-national-and-global | Indiana Wesleyan University-National & Global | Marion, IN | https://www.indwes.edu/
valdosta-state-university | Valdosta State University | Valdosta, GA | www.valdosta.edu/
william-paterson-university-of-new-jersey | William Paterson University of New Jersey | Wayne, NJ | www.wpunj.edu/
texas-a-and-m-university-san-antonio | Texas A&M University-San Antonio | San Antonio, TX | www.tamusa.edu/
university-of-alabama-in-huntsville | University of Alabama in Huntsville | Huntsville, AL | www.uah.edu/
middle-georgia-state-university | Middle Georgia State University | Macon, GA | https://www.mga.edu/
colorado-state-university-global | Colorado State University Global | Denver, CO | https://csuglobal.edu/
the-new-school | The New School | New York, NY | https://www.newschool.edu/
northern-michigan-university | Northern Michigan University | Marquette, MI | https://www.nmu.edu/
santa-clara-university | Santa Clara University | Santa Clara, CA | www.scu.edu/
quinnipiac-university | Quinnipiac University | Hamden, CT | www.qu.edu/
hofstra-university | Hofstra University | Hempstead, NY | www.hofstra.edu/
unity-environmental-university | Unity Environmental University | New Gloucester, ME | https://unity.edu/
elon-university | Elon University | Elon, NC | https://www.elon.edu/
southeast-missouri-state-university | Southeast Missouri State University | Cape Girardeau, MO | https://www.semo.edu/
university-of-wisconsin-green-bay | University of Wisconsin-Green Bay | Green Bay, WI | www.uwgb.edu/
university-of-rochester | University of Rochester | Rochester, NY | https://www.rochester.edu/
southern-connecticut-state-university | Southern Connecticut State University | New Haven, CT | www.southernct.edu/
university-of-st-thomas-mn | University of St Thomas | Saint Paul, MN | https://www.stthomas.edu/
eastern-washington-university | Eastern Washington University | Cheney, WA | www.ewu.edu/
indiana-state-university | Indiana State University | Terre Haute, IN | https://indianastate.edu/
kutztown-university-of-pennsylvania | Kutztown University of Pennsylvania | Kutztown, PA | https://www.kutztown.edu/
colorado-school-of-mines | Colorado School of Mines | Golden, CO | www.mines.edu/
alabama-a-and-m-university | Alabama A & M University | Normal, AL | www.aamu.edu/
state-university-of-new-york-at-new-paltz | State University of New York at New Paltz | New Paltz, NY | www.newpaltz.edu/
north-carolina-central-university | North Carolina Central University | Durham, NC | https://www.nccu.edu/
university-of-houston-clear-lake | University of Houston-Clear Lake | Houston, TX | www.uhcl.edu/
salisbury-university | Salisbury University | Salisbury, MD | https://www.salisbury.edu/
radford-university | Radford University | Radford, VA | https://www.radford.edu/
seton-hall-university | Seton Hall University | South Orange, NJ | https://www.shu.edu/
university-of-denver | University of Denver | Denver, CO | www.du.edu/
saginaw-valley-state-university | Saginaw Valley State University | University Center, MI | www.svsu.edu/
albany-state-university | Albany State University | Albany, GA | https://www.asurams.edu/
michigan-technological-university | Michigan Technological University | Houghton, MI | https://www.mtu.edu/
university-of-michigan-dearborn | University of Michigan-Dearborn | Dearborn, MI | https://umdearborn.edu/
georgia-college-and-state-university | Georgia College & State University | Milledgeville, GA | www.gcsu.edu/
state-university-of-new-york-at-cortland | State University of New York at Cortland | Cortland, NY | www2.cortland.edu/
university-of-wisconsin-stout | University of Wisconsin-Stout | Menomonie, WI | www.uwstout.edu/
university-of-wisconsin-platteville | University of Wisconsin-Platteville | Platteville, WI | https://www.uwplatt.edu/
university-of-north-alabama | University of North Alabama | Florence, AL | https://www.una.edu/
suny-brockport | SUNY Brockport | Brockport, NY | https://www.brockport.edu/
fayetteville-state-university | Fayetteville State University | Fayetteville, NC | https://www.uncfsu.edu/
mercy-university | Mercy University | Dobbs Ferry, NY | https://www.mercy.edu/
millersville-university-of-pennsylvania | Millersville University of Pennsylvania | Millersville, PA | www.millersville.edu/
rensselaer-polytechnic-institute | Rensselaer Polytechnic Institute | Troy, NY | www.rpi.edu/
purdue-university-northwest | Purdue University Northwest | Hammond, IN | www.pnw.edu/
university-of-san-diego | University of San Diego | San Diego, CA | www.sandiego.edu/
maryville-university-of-saint-louis | Maryville University of Saint Louis | Saint Louis, MO | https://www.maryville.edu/
university-of-central-missouri | University of Central Missouri | Warrensburg, MO | https://www.ucmo.edu/
angelo-state-university | Angelo State University | San Angelo, TX | www.angelo.edu/
louisiana-state-university-at-alexandria | Louisiana State University at Alexandria | Alexandria, LA | www.lsua.edu/
columbus-state-university | Columbus State University | Columbus, GA | www.columbusstate.edu/
metropolitan-state-university | Metropolitan State University | Saint Paul, MN | www.metrostate.edu/
augusta-university | Augusta University | Augusta, GA | www.augusta.edu/
california-state-polytechnic-university-humboldt | California State Polytechnic University-Humboldt | Arcata, CA | www.humboldt.edu/
university-of-northern-colorado | University of Northern Colorado | Greeley, CO | https://www.unco.edu/
