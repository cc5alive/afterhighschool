# Task: research "What's special" facts for US colleges (batch 5 of 11)

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

north-park-university | North Park University | Chicago, IL | www.northpark.edu/
wofford-college | Wofford College | Spartanburg, SC | www.wofford.edu/
lake-forest-college | Lake Forest College | Lake Forest, IL | www.lakeforest.edu/
marymount-university | Marymount University | Arlington, VA | https://www.marymount.edu/
university-of-pittsburgh-johnstown | University of Pittsburgh-Johnstown | Johnstown, PA | www.upj.pitt.edu/
university-of-arkansas-at-pine-bluff | University of Arkansas at Pine Bluff | Pine Bluff, AR | www.uapb.edu/
university-of-wisconsin-superior | University of Wisconsin-Superior | Superior, WI | https://www.uwsuper.edu/
northeastern-university-professional-programs | Northeastern University Professional Programs | Boston, MA | https://www.northeastern.edu/
university-of-mount-olive | University of Mount Olive | Mount Olive, NC | https://umo.edu/
hobart-william-smith-colleges | Hobart William Smith Colleges | Geneva, NY | www.hws.edu/
marywood-university | Marywood University | Scranton, PA | https://www.marywood.edu/
curry-college | Curry College | Milton, MA | https://www.curry.edu/
hamline-university | Hamline University | Saint Paul, MN | https://www.hamline.edu/
felician-university | Felician University | Lodi, NJ | https://www.felician.edu/
wheaton-college-massachusetts | Wheaton College (Massachusetts) | Norton, MA | www.wheatoncollege.edu/
mount-st-mary-s-university | Mount St. Mary's University | Emmitsburg, MD | https://msmary.edu/
roanoke-college | Roanoke College | Salem, VA | https://www.roanoke.edu/
the-college-of-saint-scholastica | The College of Saint Scholastica | Duluth, MN | www.css.edu/
seattle-pacific-university | Seattle Pacific University | Seattle, WA | https://spu.edu/
mckendree-university | McKendree University | Lebanon, IL | https://www.mckendree.edu/
springfield-college | Springfield College | Springfield, MA | springfield.edu/
texas-a-and-m-university-central-texas | Texas A&M University-Central Texas | Killeen, TX | tamuct.edu/
texas-wesleyan-university | Texas Wesleyan University | Fort Worth, TX | www.txwes.edu/
trevecca-nazarene-university | Trevecca Nazarene University | Nashville, TN | https://www.trevecca.edu/
the-college-of-wooster | The College of Wooster | Wooster, OH | https://wooster.edu/
university-of-minnesota-crookston | University of Minnesota-Crookston | Crookston, MN | https://crk.umn.edu/
muhlenberg-college | Muhlenberg College | Allentown, PA | www.muhlenberg.edu/
mount-saint-mary-s-university | Mount Saint Mary's University | Los Angeles, CA | https://www.msmu.edu/
claflin-university | Claflin University | Orangeburg, SC | www.claflin.edu/
florida-polytechnic-university | Florida Polytechnic University | Lakeland, FL | floridapoly.edu/
canisius-university | Canisius University | Buffalo, NY | https://www.canisius.edu/
lebanon-valley-college | Lebanon Valley College | Annville, PA | www.lvc.edu/
st-francis-college | St. Francis College | Brooklyn, NY | https://www.sfc.edu/
chaminade-university-of-honolulu | Chaminade University of Honolulu | Honolulu, HI | https://www.chaminade.edu/
misericordia-university | Misericordia University | Dallas, PA | www.misericordia.edu/
simmons-university | Simmons University | Boston, MA | www.simmons.edu/
assumption-university | Assumption University | Worcester, MA | https://www.assumption.edu/
lawrence-technological-university | Lawrence Technological University | Southfield, MI | www.ltu.edu/
mid-america-christian-university | Mid-America Christian University | Oklahoma City, OK | https://www.macu.edu/
ringling-college-of-art-and-design | Ringling College of Art and Design | Sarasota, FL | https://www.ringling.edu/
saint-norbert-college | Saint Norbert College | De Pere, WI | www.snc.edu/
wagner-college | Wagner College | Staten Island, NY | www.wagner.edu/
daemen-university | Daemen University | Amherst, NY | www.daemen.edu/
randolph-macon-college | Randolph-Macon College | Ashland, VA | https://www.rmc.edu/
madonna-university | Madonna University | Livonia, MI | https://www.madonna.edu/
delaware-valley-university | Delaware Valley University | Doylestown, PA | www.delval.edu/
the-master-s-university-and-seminary | The Master's University and Seminary | Santa Clarita, CA | www.masters.edu/
linfield-university | Linfield University | McMinnville, OR | https://www.linfield.edu/
delta-state-university | Delta State University | Cleveland, MS | https://www.deltastate.edu/
mcdaniel-college | McDaniel College | Westminster, MD | www.mcdaniel.edu/
the-university-of-the-south | The University of the South | Sewanee, TN | www.sewanee.edu/
union-university | Union University | Jackson, TN | www.uu.edu/
mississippi-university-for-women | Mississippi University for Women | Columbus, MS | https://www.muw.edu/
adrian-college | Adrian College | Adrian, MI | www.adrian.edu/
st-mary-s-college-of-maryland | St. Mary's College of Maryland | St. Mary's City, MD | https://www.smcm.edu/
ouachita-baptist-university | Ouachita Baptist University | Arkadelphia, AR | https://obu.edu/
dordt-university | Dordt University | Sioux Center, IA | https://www.dordt.edu/
university-of-puget-sound | University of Puget Sound | Tacoma, WA | https://www.pugetsound.edu/
willamette-university | Willamette University | Salem, OR | www.willamette.edu/
western-colorado-university | Western Colorado University | Gunnison, CO | www.western.edu/
capital-university | Capital University | Columbus, OH | https://www.capital.edu/
lindsey-wilson-university | Lindsey Wilson University | Columbia, KY | https://www.lindsey.edu/
rockhurst-university | Rockhurst University | Kansas City, MO | https://www.rockhurst.edu/
marymount-manhattan-college | Marymount Manhattan College | New York, NY | www.mmm.edu/
university-of-lynchburg | University of Lynchburg | Lynchburg, VA | www.lynchburg.edu/
caldwell-university | Caldwell University | Caldwell, NJ | https://www.caldwell.edu/
lincoln-memorial-university | Lincoln Memorial University | Harrogate, TN | www.lmunet.edu/
university-of-arkansas-for-medical-sciences | University of Arkansas for Medical Sciences | Little Rock, AR | https://www.uams.edu/
lancaster-bible-college | Lancaster Bible College | Lancaster, PA | https://www.lbc.edu/
university-of-saint-francis-fort-wayne | University of Saint Francis-Fort Wayne | Fort Wayne, IN | https://www.sf.edu/
saint-francis-university | Saint Francis University | Loretto, PA | www.francis.edu/
faulkner-university | Faulkner University | Montgomery, AL | www.faulkner.edu/
bethel-university-tn | Bethel University | McKenzie, TN | www.bethelu.edu/
fresno-pacific-university | Fresno Pacific University | Fresno, CA | www.fresno.edu/
chadron-state-college | Chadron State College | Chadron, NE | www.csc.edu/
lincoln-university-pa | Lincoln University | Lincoln University, PA | www.lincoln.edu/
university-of-evansville | University of Evansville | Evansville, IN | https://www.evansville.edu/
benedict-college | Benedict College | Columbia, SC | www.benedict.edu/
concordia-university-irvine | Concordia University-Irvine | Irvine, CA | www.cui.edu/
university-of-bridgeport | University of Bridgeport | Bridgeport, CT | www.bridgeport.edu/
drew-university | Drew University | Madison, NJ | www.drew.edu/
neumann-university | Neumann University | Aston, PA | https://www.neumann.edu/
sarah-lawrence-college | Sarah Lawrence College | Bronxville, NY | www.sarahlawrence.edu/
virginia-military-institute | Virginia Military Institute | Lexington, VA | www.vmi.edu/
university-of-connecticut-hartford-campus | University of Connecticut-Hartford Campus | Hartford, CT | https://hartford.uconn.edu/
ohio-wesleyan-university | Ohio Wesleyan University | Delaware, OH | https://www.owu.edu/
pacific-university | Pacific University | Forest Grove, OR | https://www.pacificu.edu/
oklahoma-city-university | Oklahoma City University | Oklahoma City, OK | www.okcu.edu/
west-liberty-university | West Liberty University | West Liberty, WV | www.westliberty.edu/
moody-bible-institute | Moody Bible Institute | Chicago, IL | https://www.moody.edu/
concord-university | Concord University | Athens, WV | https://www.concord.edu/
northwestern-oklahoma-state-university | Northwestern Oklahoma State University | Alva, OK | www.nwosu.edu/
seton-hill-university | Seton Hill University | Greensburg, PA | www.setonhill.edu/
ursinus-college | Ursinus College | Collegeville, PA | www.ursinus.edu/
missouri-baptist-university | Missouri Baptist University | Saint Louis, MO | www.mobap.edu/
grand-view-university | Grand View University | Des Moines, IA | www.grandview.edu/
king-s-college | King's College | Wilkes-Barre, PA | www.kings.edu/
los-angeles-pacific-university | Los Angeles Pacific University | San Dimas, CA | https://www.lapu.edu/
texas-tech-university-health-sciences-center | Texas Tech University Health Sciences Center | Lubbock, TX | https://www.ttuhsc.edu/
montana-technological-university | Montana Technological University | Butte, MT | https://www.mtech.edu/
nelson-university | Nelson University | Waxahachie, TX | www.nelson.edu/
newberry-college | Newberry College | Newberry, SC | www.newberry.edu/
belhaven-university | Belhaven University | Jackson, MS | https://www.belhaven.edu/
john-brown-university | John Brown University | Siloam Springs, AR | https://www.jbu.edu/
grace-college-and-theological-seminary | Grace College and Theological Seminary | Winona Lake, IN | www.grace.edu/
saint-mary-s-college | Saint Mary's College | Notre Dame, IN | https://www.saintmarys.edu/
henderson-state-university | Henderson State University | Arkadelphia, AR | https://www.hsu.edu/
southern-nazarene-university | Southern Nazarene University | Bethany, OK | https://www.snu.edu/
nebraska-wesleyan-university | Nebraska Wesleyan University | Lincoln, NE | https://www.nebrwesleyan.edu/
wartburg-college | Wartburg College | Waverly, IA | https://www.wartburg.edu/
new-mexico-highlands-university | New Mexico Highlands University | Las Vegas, NM | https://www.nmhu.edu/
methodist-university | Methodist University | Fayetteville, NC | www.methodist.edu/
missouri-valley-college | Missouri Valley College | Marshall, MO | https://www.moval.edu/
university-of-northwestern-st-paul | University of Northwestern-St Paul | Saint Paul, MN | https://www.unwsp.edu/
indiana-institute-of-technology | Indiana Institute of Technology | Fort Wayne, IN | www.indianatech.edu/
southwestern-university | Southwestern University | Georgetown, TX | https://www.southwestern.edu/
university-of-dubuque | University of Dubuque | Dubuque, IA | www.dbq.edu/
mississippi-valley-state-university | Mississippi Valley State University | Itta Bena, MS | www.mvsu.edu/
alfred-university | Alfred University | Alfred, NY | www.alfred.edu/
asbury-university | Asbury University | Wilmore, KY | https://www.asbury.edu/
trinity-washington-university | Trinity Washington University | Washington, DC | www2.trinitydc.edu/
university-of-dallas | University of Dallas | Irving, TX | https://udallas.edu/
bridgewater-college | Bridgewater College | Bridgewater, VA | https://www.bridgewater.edu/
centre-college | Centre College | Danville, KY | https://www.centre.edu/
lawrence-university | Lawrence University | Appleton, WI | https://www.lawrence.edu/
sul-ross-state-university | Sul Ross State University | Alpine, TX | www.sulross.edu/
massachusetts-maritime-academy | Massachusetts Maritime Academy | Buzzards Bay, MA | https://www.maritime.edu/
saint-johns-university | Saint Johns University | Collegeville, MN | https://csbsju.edu/
lincoln-university-mo | Lincoln University | Jefferson City, MO | https://www.lincolnu.edu/
walsh-university | Walsh University | North Canton, OH | https://www.walsh.edu/
carson-newman-university | Carson-Newman University | Jefferson City, TN | www.cn.edu/
chicago-state-university | Chicago State University | Chicago, IL | www.csu.edu/
drury-university | Drury University | Springfield, MO | www.drury.edu/
millikin-university | Millikin University | Decatur, IL | https://millikin.edu/
luther-college | Luther College | Decorah, IA | https://www.luther.edu/
muskingum-university | Muskingum University | New Concord, OH | www.muskingum.edu/
college-of-saint-benedict | College of Saint Benedict | Saint Joseph, MN | https://csbsju.edu/
buena-vista-university | Buena Vista University | Storm Lake, IA | https://www.bvu.edu/
manhattanville-university | Manhattanville University | Purchase, NY | https://www.mville.edu/
adventhealth-university | AdventHealth University | Orlando, FL | www.ahu.edu/
lenoir-rhyne-university | Lenoir-Rhyne University | Hickory, NC | www.lr.edu/
mount-vernon-nazarene-university | Mount Vernon Nazarene University | Mount Vernon, OH | mvnu.edu/
east-texas-baptist-university | East Texas Baptist University | Marshall, TX | https://www.etbu.edu/
oglethorpe-university | Oglethorpe University | Atlanta, GA | https://oglethorpe.edu/
carlow-university | Carlow University | Pittsburgh, PA | www.carlow.edu/
columbia-college-sc | Columbia College | Columbia, SC | www.columbiasc.edu/
southwest-baptist-university | Southwest Baptist University | Bolivar, MO | www.sbuniv.edu/
lake-superior-state-university | Lake Superior State University | Sault Ste Marie, MI | www.lssu.edu/
concordia-university-chicago | Concordia University-Chicago | River Forest, IL | https://www.cuchicago.edu/
west-virginia-state-university | West Virginia State University | Institute, WV | www.wvstateu.edu/
immaculata-university | Immaculata University | Immaculata, PA | www.immaculata.edu/
avila-university | Avila University | Kansas City, MO | https://www.avila.edu/
kentucky-state-university | Kentucky State University | Frankfort, KY | www.kysu.edu/
oklahoma-baptist-university | Oklahoma Baptist University | Shawnee, OK | https://www.okbu.edu/
university-of-mobile | University of Mobile | Mobile, AL | https://umobile.edu/
university-of-pittsburgh-greensburg | University of Pittsburgh-Greensburg | Greensburg, PA | www.greensburg.pitt.edu/
texas-lutheran-university | Texas Lutheran University | Seguin, TX | www.tlu.edu/
westmont-college | Westmont College | Santa Barbara, CA | www.westmont.edu/
william-penn-university | William Penn University | Oskaloosa, IA | https://www.wmpenn.edu/
albion-college | Albion College | Albion, MI | www.albion.edu/
william-woods-university | William Woods University | Fulton, MO | https://www.williamwoods.edu/
ave-maria-university | Ave Maria University | Ave Maria, FL | www.avemaria.edu/
cornerstone-university | Cornerstone University | Grand Rapids, MI | www.cornerstone.edu/
washington-and-jefferson-college | Washington & Jefferson College | Washington, PA | www.washjeff.edu/
william-jessup-university | William Jessup University | Rocklin, CA | www.jessup.edu/
thomas-more-university | Thomas More University | Crestview Hills, KY | https://www.thomasmore.edu/
suny-maritime-college | SUNY Maritime College | Throggs Neck, NY | www.sunymaritime.edu/
concordia-university-nebraska | Concordia University-Nebraska | Seward, NE | www.cune.edu/
hardin-simmons-university | Hardin-Simmons University | Abilene, TX | https://www.hsutx.edu/
gordon-college | Gordon College | Wenham, MA | www.gordon.edu/
belmont-abbey-college | Belmont Abbey College | Belmont, NC | www.belmontabbeycollege.edu/
northern-state-university | Northern State University | Aberdeen, SD | https://northern.edu/
midway-university | Midway University | Midway, KY | www.midway.edu/
saint-vincent-college | Saint Vincent College | Latrobe, PA | https://www.stvincent.edu/
d-youville-university | D'Youville  University | Buffalo, NY | https://www.dyu.edu/
virginia-wesleyan-university | Virginia Wesleyan University | Virginia Beach, VA | https://www.vwu.edu/
lubbock-christian-university | Lubbock Christian University | Lubbock, TX | https://lcu.edu/
walla-walla-university | Walla Walla University | College Place, WA | https://www.wallawalla.edu/
adams-state-university | Adams State University | Alamosa, CO | www.adams.edu/
viterbo-university | Viterbo University | La Crosse, WI | https://www.viterbo.edu/
johnson-c-smith-university | Johnson C Smith University | Charlotte, NC | https://www.jcsu.edu/
russell-sage-college | Russell Sage College | Troy, NY | sage.edu/
catawba-college | Catawba College | Salisbury, NC | www.catawba.edu/
chatham-university | Chatham University | Pittsburgh, PA | www.chatham.edu/
averett-university | Averett University | Danville, VA | https://www.averett.edu/
rivier-university | Rivier University | Nashua, NH | www.rivier.edu/
college-for-creative-studies | College for Creative Studies | Detroit, MI | https://www.ccsdetroit.edu/
evangel-university | Evangel University | Springfield, MO | www.evangel.edu/
simpson-college | Simpson College | Indianola, IA | simpson.edu/
lasell-university | Lasell University | Newton, MA | www.lasell.edu/
andrews-university | Andrews University | Berrien Springs, MI | https://www.andrews.edu/
otis-college-of-art-and-design | Otis College of Art and Design | Los Angeles, CA | www.otis.edu/
pennsylvania-state-university-penn-state-brandywine | Pennsylvania State University-Penn State Brandywine | Media, PA | https://brandywine.psu.edu/
university-of-st-francis | University of St Francis | Joliet, IL | https://www.stfrancis.edu/
abilene-christian-university-undergraduate-online | Abilene Christian University-Undergraduate Online | Addison, TX | https://www.acu.edu/academics/online/undergraduate
university-of-sioux-falls | University of Sioux Falls | Sioux Falls, SD | www.usiouxfalls.edu/
albright-college | Albright College | Reading, PA | www.albright.edu/home/
wittenberg-university | Wittenberg University | Springfield, OH | https://www.wittenberg.edu/
north-carolina-wesleyan-university | North Carolina Wesleyan University | Rocky Mount, NC | www.ncwu.edu/
university-of-oklahoma-health-sciences-center | University of Oklahoma-Health Sciences Center | Oklahoma City, OK | ouhsc.edu/
