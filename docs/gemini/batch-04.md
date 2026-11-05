# Task: research "What's special" facts for US colleges (batch 4 of 11)

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

baldwin-wallace-university | Baldwin Wallace University | Berea, OH | https://www.bw.edu/
campbellsville-university | Campbellsville University | Campbellsville, KY | https://www.campbellsville.edu/
illinois-institute-of-technology | Illinois Institute of Technology | Chicago, IL | https://www.iit.edu/
savannah-state-university | Savannah State University | Savannah, GA | https://www.savannahstate.edu/
university-of-arkansas-grantham | University of Arkansas Grantham | LIttle Rock, AR | https://www.uagrantham.edu/
university-of-tulsa | University of Tulsa | Tulsa, OK | https://utulsa.edu/
loyola-university-new-orleans | Loyola University New Orleans | New Orleans, LA | www.loyno.edu/
school-of-the-art-institute-of-chicago | School of the Art Institute of Chicago | Chicago, IL | www.saic.edu/
everglades-university | Everglades University | Boca Raton, FL | https://www.evergladesuniversity.edu/
southern-adventist-university | Southern Adventist University | Collegedale, TN | www.southern.edu/
azusa-pacific-university | Azusa Pacific University | Azusa, CA | www.apu.edu/
university-of-mary-hardin-baylor | University of Mary Hardin-Baylor | Belton, TX | https://go.umhb.edu/
suny-at-fredonia | SUNY at Fredonia | Fredonia, NY | https://www.fredonia.edu/
champlain-college | Champlain College | Burlington, VT | https://www.champlain.edu/
fitchburg-state-university | Fitchburg State University | Fitchburg, MA | www.fitchburgstate.edu/
southern-oregon-university | Southern Oregon University | Ashland, OR | www.sou.edu/
manhattan-university | Manhattan University | Riverdale, NY | www.manhattan.edu/
suny-college-of-technology-at-canton | SUNY College of Technology at Canton | Canton, NY | www.canton.edu/
bethune-cookman-university | Bethune-Cookman University | Daytona Beach, FL | https://www.cookman.edu/
southern-arkansas-university-main-campus | Southern Arkansas University Main Campus | Magnolia, AR | https://www.saumag.edu/
george-fox-university | George Fox University | Newberg, OR | https://www.georgefox.edu/
keene-state-college | Keene State College | Keene, NH | www.keene.edu/
university-of-mount-saint-vincent | University of Mount Saint Vincent | Bronx, NY | www.mountsaintvincent.edu/
indiana-institute-of-technology-college-of-professional-studies | Indiana Institute of Technology-College of Professional Studies | Fort Wayne, IN | cps.indianatech.edu/
fort-valley-state-university | Fort Valley State University | Fort Valley, GA | www.fvsu.edu/
campbell-university | Campbell University | Buies Creek, NC | https://www.campbell.edu/
wingate-university | Wingate University | Wingate, NC | https://www.wingate.edu/
indiana-university-northwest | Indiana University-Northwest | Gary, IN | https://northwest.iu.edu/
carthage-college | Carthage College | Kenosha, WI | www.carthage.edu/
university-of-maine-at-augusta | University of Maine at Augusta | Augusta, ME | www.uma.edu/
rogers-state-university | Rogers State University | Claremore, OK | https://www.rsu.edu/
florida-southern-college | Florida Southern College | Lakeland, FL | www.flsouthern.edu/
milwaukee-school-of-engineering | Milwaukee School of Engineering | Milwaukee, WI | www.msoe.edu/
niagara-university | Niagara University | Niagara University, NY | www.niagara.edu/
rollins-college | Rollins College | Winter Park, FL | https://www.rollins.edu/
tuskegee-university | Tuskegee University | Tuskegee, AL | https://www.tuskegee.edu/
francis-marion-university | Francis Marion University | Florence, SC | www.fmarion.edu/
xavier-university-of-louisiana | Xavier University of Louisiana | New Orleans, LA | https://www.xula.edu/
fairleigh-dickinson-university-metropolitan-campus | Fairleigh Dickinson University-Metropolitan Campus | Teaneck, NJ | https://www.fdu.edu/
regis-university | Regis University | Denver, CO | https://www.regis.edu/
montana-state-university-billings | Montana State University Billings | Billings, MT | https://www.msubillings.edu/
central-state-university | Central State University | Wilberforce, OH | https://www.centralstate.edu/
husson-university | Husson University | Bangor, ME | www.husson.edu/
lee-university | Lee University | Cleveland, TN | www.leeuniversity.edu/
olivet-nazarene-university | Olivet Nazarene University | Bourbonnais, IL | https://www.olivet.edu/
palm-beach-atlantic-university | Palm Beach Atlantic University | West Palm Beach, FL | https://www.pba.edu/
western-new-england-university | Western New England University | Springfield, MA | wne.edu/
fairmont-state-university | Fairmont State University | Fairmont, WV | https://www.fairmontstate.edu/
indiana-university-east | Indiana University-East | Richmond, IN | https://east.iu.edu/
framingham-state-university | Framingham State University | Framingham, MA | www.framingham.edu/
st-john-fisher-university | St. John Fisher University | Rochester, NY | https://www.sjf.edu/
dominican-university | Dominican University | River Forest, IL | https://www.dom.edu/
governors-state-university | Governors State University | University Park, IL | https://www.govst.edu/
gordon-state-college | Gordon State College | Barnesville, GA | https://www.gordonstate.edu/
drake-university | Drake University | Des Moines, IA | www.drake.edu/
auburn-university-at-montgomery | Auburn University at Montgomery | Montgomery, AL | www.aum.edu/
stonehill-college | Stonehill College | Easton, MA | https://www.stonehill.edu/
carroll-university | Carroll University | Waukesha, WI | https://www.carrollu.edu/
university-of-hawaii-west-oahu | University of Hawaii-West Oahu | Kapolei, HI | https://westoahu.hawaii.edu/
texas-a-and-m-university-victoria | Texas A&M University-Victoria | Victoria, TX | www.tamuv.edu/
truman-state-university | Truman State University | Kirksville, MO | https://www.truman.edu/
augsburg-university | Augsburg University | Minneapolis, MN | www.augsburg.edu/
saint-edward-s-university | Saint Edward's University | Austin, TX | https://www.stedwards.edu/
cameron-university | Cameron University | Lawton, OK | https://www.cameron.edu/
augustana-college | Augustana College | Rock Island, IL | www.augustana.edu/
ohio-northern-university | Ohio Northern University | Ada, OH | www.onu.edu/
st-catherine-university | St Catherine University | Saint Paul, MN | https://www.stkate.edu/
east-central-university | East Central University | Ada, OK | https://www.ecok.edu/
holy-family-university | Holy Family University | Philadelphia, PA | https://www.holyfamily.edu/
athens-state-university | Athens State University | Athens, AL | https://www.athens.edu/
le-moyne-college | Le Moyne College | Syracuse, NY | www.lemoyne.edu/
university-of-detroit-mercy | University of Detroit Mercy | Detroit, MI | https://www.udmercy.edu/
university-of-connecticut-stamford | University of Connecticut-Stamford | Stamford, CT | https://stamford.uconn.edu/
north-central-college | North Central College | Naperville, IL | northcentralcollege.edu/
norwich-university | Norwich University | Northfield, VT | www.norwich.edu/
georgia-southwestern-state-university | Georgia Southwestern State University | Americus, GA | https://gsw.edu/
university-of-mary | University of Mary | Bismarck, ND | https://www.umary.edu/
bard-college | Bard College | Annandale-On-Hudson, NY | www.bard.edu/
eastern-university | Eastern University | Saint Davids, PA | https://www.eastern.edu/about/student-consumer-information
dallas-baptist-university | Dallas Baptist University | Dallas, TX | https://www.dbu.edu/
pacific-lutheran-university | Pacific Lutheran University | Tacoma, WA | www.plu.edu/
hawaii-pacific-university | Hawaii Pacific University | Honolulu, HI | https://www.hpu.edu/
flagler-college | Flagler College | Saint Augustine, FL | https://www.flagler.edu/
university-of-maryland-eastern-shore | University of Maryland Eastern Shore | Princess Anne, MD | wwwcp.umes.edu/
lewis-clark-state-college | Lewis-Clark State College | Lewiston, ID | https://www.lcsc.edu/
furman-university | Furman University | Greenville, SC | www.furman.edu/
pennsylvania-state-university-penn-state-altoona | Pennsylvania State University-Penn State Altoona | Altoona, PA | https://altoona.psu.edu/
gannon-university | Gannon University | Erie, PA | www.gannon.edu/
alcorn-state-university | Alcorn State University | Alcorn State, MS | www.alcorn.edu/
indiana-university-kokomo | Indiana University-Kokomo | Kokomo, IN | https://kokomo.iu.edu/
shepherd-university | Shepherd University | Shepherdstown, WV | www.shepherd.edu/
point-park-university | Point Park University | Pittsburgh, PA | www.pointpark.edu/
trine-university | Trine University | Angola, IN | www.trine.edu/
southwest-minnesota-state-university | Southwest Minnesota State University | Marshall, MN | www.smsu.edu/
rose-hulman-institute-of-technology | Rose-Hulman Institute of Technology | Terre Haute, IN | https://www.rose-hulman.edu/
webster-university | Webster University | Saint Louis, MO | www.webster.edu/
stetson-university | Stetson University | DeLand, FL | https://www.stetson.edu/
california-lutheran-university | California Lutheran University | Thousand Oaks, CA | www.callutheran.edu/
utica-university | Utica University | Utica, NY | https://www.utica.edu/
john-carroll-university | John Carroll University | University Heights, OH | jcu.edu/
dickinson-college | Dickinson College | Carlisle, PA | https://www.dickinson.edu/
benedictine-college | Benedictine College | Atchison, KS | www.benedictine.edu/
marian-university-in | Marian University | Indianapolis, IN | https://www.marian.edu/
university-of-illinois-springfield | University of Illinois Springfield | Springfield, IL | www.uis.edu/
messiah-university | Messiah University | Mechanicsburg, PA | www.messiah.edu/
university-of-charleston | University of Charleston | Charleston, WV | www.ucwv.edu/
shawnee-state-university | Shawnee State University | Portsmouth, OH | https://www.shawnee.edu/
berry-college | Berry College | Mount Berry, GA | https://www.berry.edu/
united-talmudical-seminary | United Talmudical Seminary | Brooklyn, NY | utsny.edu/
emporia-state-university | Emporia State University | Emporia, KS | www.emporia.edu/
the-university-of-findlay | The University of Findlay | Findlay, OH | https://www.findlay.edu/
missouri-western-state-university | Missouri Western State University | Saint Joseph, MO | https://www.missouriwestern.edu/
grove-city-college | Grove City College | Grove City, PA | www.gcc.edu/
st-thomas-university | St. Thomas University | Miami Gardens, FL | www.stu.edu/
barry-university | Barry University | Miami, FL | www.barry.edu/
johnson-and-wales-university-online | Johnson & Wales University-Online | Providence, RI | https://online.jwu.edu/?_ga=2.36357734.752362341.1629739669-391300583.1600981500
william-carey-university | William Carey University | Hattiesburg, MS | https://www.wmcarey.edu/
ashland-university | Ashland University | Ashland, OH | https://www.ashland.edu/
concordia-university-wisconsin | Concordia University-Wisconsin | Mequon, WI | https://www.cuw.edu/
clarkson-university | Clarkson University | Potsdam, NY | https://www.clarkson.edu/
mercyhurst-university | Mercyhurst University | Erie, PA | www.mercyhurst.edu/
eastern-oregon-university | Eastern Oregon University | La Grande, OR | www.eou.edu/
susquehanna-university | Susquehanna University | Selinsgrove, PA | www.susqu.edu/
bellarmine-university | Bellarmine University | Louisville, KY | https://www.bellarmine.edu/
the-evergreen-state-college | The Evergreen State College | Olympia, WA | https://www.evergreen.edu/
university-of-hawaii-at-hilo | University of Hawaii at Hilo | Hilo, HI | https://hilo.hawaii.edu/
otterbein-university | Otterbein University | Westerville, OH | https://www.otterbein.edu/
louisiana-state-university-shreveport | Louisiana State University-Shreveport | Shreveport, LA | www.lsus.edu/
alvernia-university | Alvernia University | Reading, PA | https://www.alvernia.edu/
university-of-montevallo | University of Montevallo | Montevallo, AL | www.montevallo.edu/
saint-peter-s-university | Saint Peter's University | Jersey City, NJ | www.saintpeters.edu/
university-of-new-england | University of New England | Biddeford, ME | https://www.une.edu/
desales-university | DeSales University | Center Valley, PA | www.desales.edu/
salve-regina-university | Salve Regina University | Newport, RI | www.salve.edu/
wheaton-college | Wheaton College | Wheaton, IL | www.wheaton.edu/
lewis-and-clark-college | Lewis & Clark College | Portland, OR | https://www.lclark.edu/
shenandoah-university | Shenandoah University | Winchester, VA | www.su.edu/
cumberland-university | Cumberland University | Lebanon, TN | www.cumberland.edu/
central-methodist-university-college-of-graduate-and-extended-studies | Central Methodist University-College of Graduate and Extended Studies | Fayette, MO | www.centralmethodist.edu/
saint-anselm-college | Saint Anselm College | Manchester, NH | https://www.anselm.edu/
valparaiso-university | Valparaiso University | Valparaiso, IN | https://www.valpo.edu/
dakota-state-university | Dakota State University | Madison, SD | https://dsu.edu/
south-dakota-school-of-mines-and-technology | South Dakota School of Mines and Technology | Rapid City, SD | https://www.sdsmt.edu/
minot-state-university | Minot State University | Minot, ND | www.minotstateu.edu/
university-of-south-carolina-beaufort | University of South Carolina Beaufort | Bluffton, SC | www.uscb.edu/
tiffin-university | Tiffin University | Tiffin, OH | www.tiffin.edu/
university-of-redlands | University of Redlands | Redlands, CA | www.redlands.edu/
union-college | Union College | Schenectady, NY | www.union.edu/
miami-university-hamilton | Miami University-Hamilton | Hamilton, OH | miamioh.edu/regionals/
wayland-baptist-university | Wayland Baptist University | Plainview, TX | www.wbu.edu/
western-new-mexico-university | Western New Mexico University | Silver City, NM | wnmu.edu/
taylor-university | Taylor University | Upland, IN | https://www.taylor.edu/
art-center-college-of-design | Art Center College of Design | Pasadena, CA | www.artcenter.edu/
st-bonaventure-university | St Bonaventure University | Saint Bonaventure, NY | https://www.sbu.edu/
bob-jones-university | Bob Jones University | Greenville, SC | www.bju.edu/
point-university | Point University | West Point, GA | point.edu/
university-of-mount-union | University of Mount Union | Alliance, OH | www.mountunion.edu/
upper-iowa-university | Upper Iowa University | Fayette, IA | https://www.uiu.edu/
fairleigh-dickinson-university-florham-campus | Fairleigh Dickinson University-Florham Campus | Madison, NJ | https://www.fdu.edu/
wilkes-university | Wilkes University | Wilkes-Barre, PA | https://www.wilkes.edu/
texas-a-and-m-university-texarkana | Texas A&M University-Texarkana | Texarkana, TX | www.tamut.edu/
elizabeth-city-state-university | Elizabeth City State University | Elizabeth City, NC | https://www.ecsu.edu/
indiana-wesleyan-university-marion | Indiana Wesleyan University-Marion | Marion, IN | https://www.indwes.edu/
northwood-university | Northwood University | Midland, MI | www.northwood.edu/
augustana-university | Augustana University | Sioux Falls, SD | www.augie.edu/
la-salle-university | La Salle University | Philadelphia, PA | www.lasalle.edu/
st-mary-s-university | St. Mary's University | San Antonio, TX | www.stmarytx.edu/
moravian-university | Moravian University | Bethlehem, PA | www.moravian.edu/
arcadia-university | Arcadia University | Glenside, PA | https://www.arcadia.edu/
saint-mary-s-college-of-california | Saint Mary's College of California | Moraga, CA | https://www.stmarys-ca.edu/
reach-university | Reach University | Oakland, CA | https://www.reach.edu/
benedictine-university | Benedictine University | Lisle, IL | https://ben.edu/
vanguard-university-of-southern-california | Vanguard University of Southern California | Costa Mesa, CA | https://www.vanguard.edu/
black-hills-state-university | Black Hills State University | Spearfish, SD | www.bhsu.edu/
st-lawrence-university | St Lawrence University | Canton, NY | https://www.stlawu.edu/
saint-ambrose-university | Saint Ambrose University | Davenport, IA | www.sau.edu/
university-of-maine-at-presque-isle | University of Maine at Presque Isle | Presque Isle, ME | www.umpi.edu/
depauw-university | DePauw University | Greencastle, IN | www.depauw.edu/
suny-college-of-agriculture-and-technology-at-cobleskill | SUNY College of Agriculture and Technology at Cobleskill | Cobleskill, NY | www.cobleskill.edu/
eckerd-college | Eckerd College | Saint Petersburg, FL | https://www.eckerd.edu/
oklahoma-christian-university | Oklahoma Christian University | Edmond, OK | www.oc.edu/
gustavus-adolphus-college | Gustavus Adolphus College | Saint Peter, MN | https://gustavus.edu/
occidental-college | Occidental College | Los Angeles, CA | https://www.oxy.edu/
nazareth-university | Nazareth University | Rochester, NY | https://www2.naz.edu/
pennsylvania-state-university-penn-state-berks | Pennsylvania State University-Penn State Berks | Reading, PA | https://berks.psu.edu/
bethel-university-mn | Bethel University | Saint Paul, MN | https://www.bethel.edu/
elizabethtown-college | Elizabethtown College | Elizabethtown, PA | www.etown.edu/
whitworth-university | Whitworth University | Spokane, WA | www.whitworth.edu/
gardner-webb-university | Gardner-Webb University | Boiling Springs, NC | www.gardner-webb.edu/
emmanuel-college | Emmanuel College | Boston, MA | www.emmanuel.edu/
suny-polytechnic-institute | SUNY Polytechnic Institute | Utica, NY | www.sunypoly.edu/
coppin-state-university | Coppin State University | Baltimore, MD | www.coppin.edu/
suny-college-of-environmental-science-and-forestry | SUNY College of Environmental Science and Forestry | Syracuse, NY | www.esf.edu/
rhodes-college | Rhodes College | Memphis, TN | www.rhodes.edu/
massachusetts-college-of-art-and-design | Massachusetts College of Art and Design | Boston, MA | https://massart.edu/
concordia-college-at-moorhead | Concordia College at Moorhead | Moorhead, MN | https://www.concordiacollege.edu/
waldorf-university | Waldorf University | Forest City, IA | www.waldorf.edu/
suny-college-at-potsdam | SUNY College at Potsdam | Potsdam, NY | www.potsdam.edu/
charter-oak-state-college | Charter Oak State College | New Britain, CT | https://www.charteroak.edu/
north-greenville-university | North Greenville University | Tigerville, SC | https://www.ngu.edu/
