# Task: research "What's special" facts for US colleges (batch 1 of 11)

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

colby-college | Colby College | Waterville, ME | www.colby.edu/
pomona-college | Pomona College | Claremont, CA | www.pomona.edu/
bowdoin-college | Bowdoin College | Brunswick, ME | https://www.bowdoin.edu/
swarthmore-college | Swarthmore College | Swarthmore, PA | www.swarthmore.edu/
williams-college | Williams College | Williamstown, MA | https://www.williams.edu/
amherst-college | Amherst College | Amherst, MA | www.amherst.edu/
united-states-naval-academy | United States Naval Academy | Annapolis, MD | www.usna.edu/
claremont-mckenna-college | Claremont McKenna College | Claremont, CA | www.cmc.edu/
middlebury-college | Middlebury College | Middlebury, VT | https://www.middlebury.edu/college/
boston-university | Boston University | Boston, MA | www.bu.edu/
tufts-university | Tufts University | Medford, MA | https://www.tufts.edu/
college-of-the-ozarks | College of the Ozarks | Point Lookout, MO | www.cofo.edu/
haverford-college | Haverford College | Haverford, PA | https://www.haverford.edu/
georgetown-university | Georgetown University | Washington, DC | https://www.georgetown.edu/
bates-college | Bates College | Lewiston, ME | www.bates.edu/
davidson-college | Davidson College | Davidson, NC | https://davidson.edu/
hamilton-college | Hamilton College | Clinton, NY | https://www.hamilton.edu/
colgate-university | Colgate University | Hamilton, NY | https://www.colgate.edu/
washington-and-lee-university | Washington and Lee University | Lexington, VA | www.wlu.edu/
wellesley-college | Wellesley College | Wellesley, MA | www.wellesley.edu/
united-states-air-force-academy | United States Air Force Academy | USAF Academy, CO | www.usafa.edu/
grinnell-college | Grinnell College | Grinnell, IA | www.grinnell.edu/
wesleyan-university | Wesleyan University | Middletown, CT | https://www.wesleyan.edu/
babson-college | Babson College | Wellesley, MA | www.babson.edu/
denison-university | Denison University | Granville, OH | https://www.denison.edu/
college-of-the-holy-cross | College of the Holy Cross | Worcester, MA | https://www.holycross.edu/
colorado-college | Colorado College | Colorado Springs, CO | www.coloradocollege.edu/
vassar-college | Vassar College | Poughkeepsie, NY | www.vassar.edu/
rhode-island-school-of-design | Rhode Island School of Design | Providence, RI | https://www.risd.edu/
university-of-miami | University of Miami | Coral Gables, FL | www.miami.edu/
carleton-college | Carleton College | Northfield, MN | https://www.carleton.edu/
florida-agricultural-and-mechanical-university | Florida Agricultural and Mechanical University | Tallahassee, FL | https://www.famu.edu/
hillsdale-college | Hillsdale College | Hillsdale, MI | https://www.hillsdale.edu/
smith-college | Smith College | Northampton, MA | www.smith.edu/
skidmore-college | Skidmore College | Saratoga Springs, NY | www.skidmore.edu/
wake-forest-university | Wake Forest University | Winston-Salem, NC | www.wfu.edu/
university-of-richmond | University of Richmond | University of Richmond, VA | https://www.richmond.edu/
citadel-military-college-of-south-carolina | Citadel Military College of South Carolina | Charleston, SC | https://citadel.edu/
florida-state-university | Florida State University | Tallahassee, FL | https://www.fsu.edu/
reed-college | Reed College | Portland, OR | https://www.reed.edu/
pitzer-college | Pitzer College | Claremont, CA | https://www.pitzer.edu/
trinity-university | Trinity University | San Antonio, TX | https://new.trinity.edu/
lehigh-university | Lehigh University | Bethlehem, PA | www.lehigh.edu/
villanova-university | Villanova University | Villanova, PA | www.villanova.edu/
franklin-and-marshall-college | Franklin and Marshall College | Lancaster, PA | https://www.fandm.edu/
macalester-college | Macalester College | Saint Paul, MN | www.macalester.edu/
university-of-virginia-s-college-at-wise | University of Virginia's College at Wise | Wise, VA | https://www.uvawise.edu/
university-of-california-irvine | University of California-Irvine | Irvine, CA | www.uci.edu/
bucknell-university | Bucknell University | Lewisburg, PA | www.bucknell.edu/
mississippi-christian-university | Mississippi Christian University | Clinton, MS | www.mc.edu/
trinity-college | Trinity College | Hartford, CT | https://www.trincoll.edu/
bryn-mawr-college | Bryn Mawr College | Bryn Mawr, PA | www.brynmawr.edu/
kenyon-college | Kenyon College | Gambier, OH | https://www.kenyon.edu/
california-polytechnic-state-university-san-luis-obispo | California Polytechnic State University-San Luis Obispo | San Luis Obispo, CA | calpoly.edu/
lafayette-college | Lafayette College | Easton, PA | https://www.lafayette.edu/
university-of-california-santa-barbara | University of California-Santa Barbara | Santa Barbara, CA | www.ucsb.edu/
fairfield-university | Fairfield University | Fairfield, CT | fairfield.edu/
william-and-mary | William & Mary | Williamsburg, VA | https://www.wm.edu/
oberlin-college | Oberlin College | Oberlin, OH | www.oberlin.edu/
southern-university-and-a-and-m-college | Southern University and A & M College | Baton Rouge, LA | www.subr.edu/
mount-holyoke-college | Mount Holyoke College | South Hadley, MA | https://www.mtholyoke.edu/
san-diego-state-university | San Diego State University | San Diego, CA | https://www.sdsu.edu/
case-western-reserve-university | Case Western Reserve University | Cleveland, OH | www.case.edu/
dickinson-state-university | Dickinson State University | Dickinson, ND | www.dickinsonstate.edu/
connecticut-college | Connecticut College | New London, CT | www.conncoll.edu/
fisk-university | Fisk University | Nashville, TN | www.fisk.edu/
university-of-georgia | University of Georgia | Athens, GA | www.uga.edu/
letourneau-university | LeTourneau University | Longview, TX | www.letu.edu/
regent-university | Regent University | Virginia Beach, VA | https://www.regent.edu/
whitman-college | Whitman College | Walla Walla, WA | www.whitman.edu/
clemson-university | Clemson University | Clemson, SC | www.clemson.edu/
binghamton-university | Binghamton University | Vestal, NY | www.binghamton.edu/
gettysburg-college | Gettysburg College | Gettysburg, PA | https://www.gettysburg.edu/
huston-tillotson-university | Huston-Tillotson University | Austin, TX | www.htu.edu/
illinois-wesleyan-university | Illinois Wesleyan University | Bloomington, IL | www.iwu.edu/
clark-university | Clark University | Worcester, MA | www.clarku.edu/
southern-new-hampshire-university | Southern New Hampshire University | Manchester, NH | www.snhu.edu/
grand-canyon-university | Grand Canyon University | Phoenix, AZ | www.gcu.edu/
university-of-central-florida | University of Central Florida | Orlando, FL | https://www.ucf.edu/
liberty-university | Liberty University | Lynchburg, VA | https://www.liberty.edu/
university-of-arizona | University of Arizona | Tucson, AZ | https://www.arizona.edu/
kennesaw-state-university | Kennesaw State University | Kennesaw, GA | www.kennesaw.edu/
florida-international-university | Florida International University | Miami, FL | www.fiu.edu/
california-state-university-fullerton | California State University-Fullerton | Fullerton, CA | https://www.fullerton.edu/
university-of-houston | University of Houston | Houston, TX | https://www.uh.edu/
indiana-university-bloomington | Indiana University-Bloomington | Bloomington, IN | https://bloomington.iu.edu/
university-of-south-florida | University of South Florida | Tampa, FL | www.usf.edu/
texas-state-university | Texas State University | San Marcos, TX | https://www.txst.edu/
california-state-university-long-beach | California State University-Long Beach | Long Beach, CA | www.csulb.edu/
university-of-north-texas | University of North Texas | Denton, TX | www.unt.edu/
the-university-of-alabama | The University of Alabama | Tuscaloosa, AL | www.ua.edu/
brigham-young-university | Brigham Young University | Provo, UT | https://byu.edu/
california-state-university-northridge | California State University-Northridge | Northridge, CA | https://www.csun.edu/
texas-tech-university | Texas Tech University | Lubbock, TX | www.ttu.edu/
the-university-of-texas-at-arlington | The University of Texas at Arlington | Arlington, TX | https://www.uta.edu/
university-of-california-davis | University of California-Davis | Davis, CA | ucdavis.edu/
university-of-colorado-boulder | University of Colorado Boulder | Boulder, CO | https://www.colorado.edu/
oregon-state-university | Oregon State University | Corvallis, OR | https://oregonstate.edu/
louisiana-state-university-and-agricultural-and-mechanical-college | Louisiana State University and Agricultural & Mechanical College | Baton Rouge, LA | www.lsu.edu/
the-university-of-texas-at-san-antonio | The University of Texas at San Antonio | San Antonio, TX | www.utsa.edu/
the-university-of-tennessee-knoxville | The University of Tennessee-Knoxville | Knoxville, TN | www.utk.edu/
university-of-cincinnati-main-campus | University of Cincinnati-Main Campus | Cincinnati, OH | www.uc.edu/
university-of-south-carolina-columbia | University of South Carolina-Columbia | Columbia, SC | www.sc.edu/
university-of-arkansas | University of Arkansas | Fayetteville, AR | https://www.uark.edu/
the-university-of-texas-rio-grande-valley | The University of Texas Rio Grande Valley | Edinburg, TX | www.utrgv.edu/
california-state-university-sacramento | California State University-Sacramento | Sacramento, CA | https://www.csus.edu/
george-mason-university | George Mason University | Fairfax, VA | https://www.gmu.edu/
san-jose-state-university | San Jose State University | San Jose, CA | www.sjsu.edu/
north-carolina-state-university-at-raleigh | North Carolina State University at Raleigh | Raleigh, NC | www.ncsu.edu/
university-of-utah | University of Utah | Salt Lake City, UT | www.utah.edu/
auburn-university | Auburn University | Auburn, AL | www.auburn.edu/
georgia-state-university | Georgia State University | Atlanta, GA | www.gsu.edu/
colorado-state-university-fort-collins | Colorado State University-Fort Collins | Fort Collins, CO | colostate.edu/
iowa-state-university | Iowa State University | Ames, IA | https://www.iastate.edu/
california-state-polytechnic-university-pomona | California State Polytechnic University-Pomona | Pomona, CA | www.cpp.edu/
university-of-kentucky | University of Kentucky | Lexington, KY | https://www.uky.edu/
university-of-nevada-las-vegas | University of Nevada-Las Vegas | Las Vegas, NV | www.unlv.edu/
university-of-north-carolina-at-charlotte | University of North Carolina at Charlotte | Charlotte, NC | https://www.charlotte.edu/
university-of-missouri-columbia | University of Missouri-Columbia | Columbia, MO | https://missouri.edu/
florida-atlantic-university | Florida Atlantic University | Boca Raton, FL | www.fau.edu/
university-of-massachusetts-amherst | University of Massachusetts-Amherst | Amherst, MA | www.umass.edu/
northern-arizona-university | Northern Arizona University | Flagstaff, AZ | https://nau.edu/
university-of-oklahoma-norman-campus | University of Oklahoma-Norman Campus | Norman, OK | https://www.ou.edu/
university-of-california-riverside | University of California-Riverside | Riverside, CA | www.ucr.edu/
university-of-iowa | University of Iowa | Iowa City, IA | https://uiowa.edu/
university-of-illinois-chicago | University of Illinois Chicago | Chicago, IL | www.uic.edu/
georgia-southern-university | Georgia Southern University | Statesboro, GA | www.georgiasouthern.edu/
oklahoma-state-university-main-campus | Oklahoma State University-Main Campus | Stillwater, OK | www.okstate.edu/
the-university-of-texas-at-dallas | The University of Texas at Dallas | Richardson, TX | www.utdallas.edu/
california-state-university-fresno | California State University-Fresno | Fresno, CA | www.fresnostate.edu/
university-of-mississippi | University of Mississippi | University, MS | www.olemiss.edu/
university-of-kansas | University of Kansas | Lawrence, KS | https://ku.edu/
washington-state-university | Washington State University | Pullman, WA | https://wsu.edu/
the-university-of-texas-at-el-paso | The University of Texas at El Paso | El Paso, TX | https://www.utep.edu/
temple-university | Temple University | Philadelphia, PA | www.temple.edu/
james-madison-university | James Madison University | Harrisonburg, VA | www.jmu.edu/index.shtml
virginia-commonwealth-university | Virginia Commonwealth University | Richmond, VA | https://www.vcu.edu/
university-of-oregon | University of Oregon | Eugene, OR | https://www.uoregon.edu/
university-of-pittsburgh-pittsburgh-campus | University of Pittsburgh-Pittsburgh Campus | Pittsburgh, PA | www.pitt.edu/
utah-state-university | Utah State University | Logan, UT | https://www.usu.edu/
university-at-buffalo | University at Buffalo | Buffalo, NY | https://www.buffalo.edu/
east-carolina-university | East Carolina University | Greenville, NC | https://www.ecu.edu/
university-of-connecticut | University of Connecticut | Storrs, CT | https://uconn.edu/
ohio-university-main-campus | Ohio University-Main Campus | Athens, OH | https://www.ohio.edu/
california-state-university-los-angeles | California State University-Los Angeles | Los Angeles, CA | https://www.calstatela.edu/
appalachian-state-university | Appalachian State University | Boone, NC | https://www.appstate.edu/
kent-state-university-at-kent | Kent State University at Kent | Kent, OH | www.kent.edu/
university-of-nebraska-lincoln | University of Nebraska-Lincoln | Lincoln, NE | www.unl.edu/
university-of-delaware | University of Delaware | Newark, DE | www.udel.edu/
illinois-state-university | Illinois State University | Normal, IL | illinoisstate.edu/
grand-valley-state-university | Grand Valley State University | Allendale, MI | www.gvsu.edu/
san-francisco-state-university | San Francisco State University | San Francisco, CA | www.sfsu.edu/
mississippi-state-university | Mississippi State University | Mississippi State, MS | https://www.msstate.edu/
montclair-state-university | Montclair State University | Montclair, NJ | www.montclair.edu/
stony-brook-university | Stony Brook University | Stony Brook, NY | https://www.stonybrook.edu/
university-of-california-santa-cruz | University of California-Santa Cruz | Santa Cruz, CA | www.ucsc.edu/
sam-houston-state-university | Sam Houston State University | Huntsville, TX | www.shsu.edu/
boise-state-university | Boise State University | Boise, ID | https://www.boisestate.edu/
old-dominion-university | Old Dominion University | Norfolk, VA | www.odu.edu/
west-virginia-university | West Virginia University | Morgantown, WV | www.wvu.edu/
university-of-new-mexico-main-campus | University of New Mexico-Main Campus | Albuquerque, NM | www.unm.edu/
university-of-wisconsin-milwaukee | University of Wisconsin-Milwaukee | Milwaukee, WI | uwm.edu/
miami-university-oxford | Miami University-Oxford | Oxford, OH | miamioh.edu/
middle-tennessee-state-university | Middle Tennessee State University | Murfreesboro, TN | www.mtsu.edu/
cuny-hunter-college | CUNY Hunter College | New York, NY | www.hunter.cuny.edu/
cuny-bernard-m-baruch-college | CUNY Bernard M Baruch College | New York, NY | www.baruch.cuny.edu/
university-of-north-georgia | University of North Georgia | Dahlonega, GA | www.ung.edu/
towson-university | Towson University | Towson, MD | www.towson.edu/
rowan-university | Rowan University | Glassboro, NJ | https://www.rowan.edu/
university-of-nevada-reno | University of Nevada-Reno | Reno, NV | www.unr.edu/
wayne-state-university | Wayne State University | Detroit, MI | https://wayne.edu/
syracuse-university | Syracuse University | Syracuse, NY | https://www.syracuse.edu/
savannah-college-of-art-and-design | Savannah College of Art and Design | Savannah, GA | www.scad.edu/
kansas-state-university | Kansas State University | Manhattan, KS | www.k-state.edu/
university-of-hawaii-at-manoa | University of Hawaii at Manoa | Honolulu, HI | https://manoa.hawaii.edu/
california-state-university-san-bernardino | California State University-San Bernardino | San Bernardino, CA | www.csusb.edu/
metropolitan-state-university-of-denver | Metropolitan State University of Denver | Denver, CO | www.msudenver.edu/
university-of-north-carolina-wilmington | University of North Carolina Wilmington | Wilmington, NC | www.uncw.edu/
california-state-university-san-marcos | California State University-San Marcos | San Marcos, CA | www.csusm.edu/
baylor-university | Baylor University | Waco, TX | www.baylor.edu/
university-of-louisville | University of Louisville | Louisville, KY | www.louisville.edu/
montana-state-university | Montana State University | Bozeman, MT | https://www.montana.edu/
west-chester-university-of-pennsylvania | West Chester University of Pennsylvania | West Chester, PA | https://www.wcupa.edu/
depaul-university | DePaul University | Chicago, IL | https://www.depaul.edu/
university-of-north-carolina-at-greensboro | University of North Carolina at Greensboro | Greensboro, NC | www.uncg.edu/
ball-state-university | Ball State University | Muncie, IN | https://www.bsu.edu/
florida-gulf-coast-university | Florida Gulf Coast University | Fort Myers, FL | www.fgcu.edu/
indiana-university-indianapolis | Indiana University-Indianapolis | Indianapolis, IN | https://indianapolis.iu.edu/
california-state-university-chico | California State University-Chico | Chico, CA | www.csuchico.edu/
cuny-new-york-city-college-of-technology | CUNY New York City College of Technology | Brooklyn, NY | www.citytech.cuny.edu/
western-washington-university | Western Washington University | Bellingham, WA | wwu.edu/
university-of-rhode-island | University of Rhode Island | Kingston, RI | https://web.uri.edu/
university-of-north-florida | University of North Florida | Jacksonville, FL | https://www.unf.edu/
missouri-state-university-springfield | Missouri State University-Springfield | Springfield, MO | https://www.missouristate.edu/
drexel-university | Drexel University | Philadelphia, PA | https://drexel.edu/
rochester-institute-of-technology | Rochester Institute of Technology | Rochester, NY | www.rit.edu/
portland-state-university | Portland State University | Portland, OR | www.pdx.edu/
bowling-green-state-university-main-campus | Bowling Green State University-Main Campus | Bowling Green, OH | www.bgsu.edu/
university-of-memphis | University of Memphis | Memphis, TN | https://www.memphis.edu/
tarleton-state-university | Tarleton State University | Stephenville, TX | www.tarleton.edu/
