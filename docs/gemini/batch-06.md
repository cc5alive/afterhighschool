# Task: research "What's special" facts for US colleges (batch 6 of 11)

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

freed-hardeman-university | Freed-Hardeman University | Henderson, TN | www.fhu.edu/
lakeland-university | Lakeland University | Plymouth, WI | www.lakeland.edu/
queens-university-of-charlotte | Queens University of Charlotte | Charlotte, NC | www.queens.edu/
kettering-university | Kettering University | Flint, MI | https://www.kettering.edu/
virginia-union-university | Virginia Union University | Richmond, VA | www.vuu.edu/
the-university-of-montana-western | The University of Montana-Western | Dillon, MT | umwestern.edu/
georgian-court-university | Georgian Court University | Lakewood, NJ | https://georgian.edu/
hood-college | Hood College | Frederick, MD | www.hood.edu/
juniata-college | Juniata College | Huntingdon, PA | www.juniata.edu/
maryland-institute-college-of-art | Maryland Institute College of Art | Baltimore, MD | www.mica.edu/
meredith-college | Meredith College | Raleigh, NC | www.meredith.edu/
concordia-university-texas | Concordia University Texas | Austin, TX | https://www.concordia.edu/
florida-memorial-university | Florida Memorial University | Miami Gardens, FL | www.fmuniv.edu/
mcmurry-university | McMurry University | Abilene, TX | https://mcm.edu/
northwestern-college | Northwestern College | Orange City, IA | https://www.nwciowa.edu/
converse-university | Converse University | Spartanburg, SC | https://www.converse.edu/
fisher-college | Fisher College | Boston, MA | https://www.fisher.edu/
arizona-christian-university | Arizona Christian University | Glendale, AZ | https://arizonachristian.edu/
austin-college | Austin College | Sherman, TX | www.austincollege.edu/
coe-college | Coe College | Cedar Rapids, IA | www.coe.edu/
morningside-university | Morningside University | Sioux City, IA | https://www.morningside.edu/
nichols-college | Nichols College | Dudley, MA | www.nichols.edu/
midland-university | Midland University | Fremont, NE | https://www.midlandu.edu/
yeshivath-viznitz | Yeshivath Viznitz | Monsey, NY | https://yeshivathviznitz.com/
saint-martin-s-university | Saint Martin's University | Lacey, WA | https://www.stmartin.edu/
university-of-new-hampshire-college-of-professional-studies-online | University of New Hampshire College of Professional Studies Online | Manchester, NH | https://cps.unh.edu/online
allegheny-college | Allegheny College | Meadville, PA | https://allegheny.edu/
miles-college | Miles College | Fairfield, AL | https://www.miles.edu/
oakwood-university | Oakwood University | Huntsville, AL | https://www2.oakwood.edu/
kalamazoo-college | Kalamazoo College | Kalamazoo, MI | https://www.kzoo.edu/
roberts-wesleyan-university | Roberts Wesleyan University | Rochester, NY | www.roberts.edu/
alma-college | Alma College | Alma, MI | www.alma.edu/
mount-saint-mary-college | Mount Saint Mary College | Newburgh, NY | www.msmc.edu/
university-of-maine-at-farmington | University of Maine at Farmington | Farmington, ME | https://www.umf.maine.edu/
city-university-of-seattle | City University of Seattle | Seattle, WA | www.cityu.edu/
university-of-pikeville | University of Pikeville | Pikeville, KY | www.upike.edu/
university-of-baltimore | University of Baltimore | Baltimore, MD | www.ubalt.edu/
mount-st-joseph-university | Mount St. Joseph University | Cincinnati, OH | www.msj.edu/
knox-college | Knox College | Galesburg, IL | https://www.knox.edu/
lesley-university | Lesley University | Cambridge, MA | www.lesley.edu/
piedmont-university | Piedmont University | Demorest, GA | https://www.piedmont.edu/
la-sierra-university | La Sierra University | Riverside, CA | https://lasierra.edu/
dominican-university-of-california | Dominican University of California | San Rafael, CA | https://www.dominican.edu/
bay-path-university | Bay Path University | Longmeadow, MA | www.baypath.edu/
edgewood-university | Edgewood University | Madison, WI | www.edgewood.edu/
mount-mercy-university | Mount Mercy University | Cedar Rapids, IA | www.mtmercy.edu/
dominican-university-new-york | Dominican University New York | Orangeburg, NY | www.duny.edu/
baker-university | Baker University | Baldwin City, KS | https://www.bakeru.edu/
hendrix-college | Hendrix College | Conway, AR | https://www.hendrix.edu/
georgetown-college | Georgetown College | Georgetown, KY | www.georgetowncollege.edu/
geneva-college | Geneva College | Beaver Falls, PA | www.geneva.edu/
glenville-state-university | Glenville State University | Glenville, WV | www.glenville.edu/
mount-aloysius-college | Mount Aloysius College | Cresson, PA | www.mtaloy.edu/
carroll-college | Carroll College | Helena, MT | www.carroll.edu/
peru-state-college | Peru State College | Peru, NE | www.peru.edu/
saint-michael-s-college | Saint Michael's College | Colchester, VT | www.smcvt.edu/
mary-baldwin-university | Mary Baldwin University | Staunton, VA | https://www.marybaldwin.edu/
dean-college | Dean College | Franklin, MA | www.dean.edu/
edward-waters-university | Edward Waters University | Jacksonville, FL | www.ew.edu/
hartwick-college | Hartwick College | Oneonta, NY | www.hartwick.edu/
cornell-college | Cornell College | Mount Vernon, IA | https://www.cornellcollege.edu/
aquinas-college | Aquinas College | Grand Rapids, MI | https://www.aquinas.edu/
loras-college | Loras College | Dubuque, IA | https://www.loras.edu/
huntington-university | Huntington University | Huntington, IN | www.huntington.edu/
emory-and-henry-university | Emory & Henry University | Emory, VA | www.emoryhenry.edu/
saint-mary-s-university-of-minnesota | Saint Mary's University of Minnesota | Winona, MN | www.smumn.edu/
central-college | Central College | Pella, IA | www.central.edu/
gwynedd-mercy-university | Gwynedd Mercy University | Gwynedd Valley, PA | https://www.gmercyu.edu/
our-lady-of-the-lake-university | Our Lady of the Lake University | San Antonio, TX | https://www.ollusa.edu/
reinhardt-university | Reinhardt University | Waleska, GA | https://www.reinhardt.edu/
dillard-university | Dillard University | New Orleans, LA | https://www.dillard.edu/
anderson-university-in | Anderson University | Anderson, IN | https://anderson.edu/
southern-university-at-new-orleans | Southern University at New Orleans | New Orleans, LA | www.suno.edu/
schreiner-university | Schreiner University | Kerrville, TX | https://schreiner.edu/
friends-university | Friends University | Wichita, KS | www.friends.edu/
mars-hill-university | Mars Hill University | Mars Hill, NC | www.mhu.edu/
oregon-state-university-cascades-campus | Oregon State University-Cascades Campus | Bend, OR | https://osucascades.edu/
bluefield-state-university | Bluefield State University | Bluefield, WV | https://bluefieldstate.edu/
the-college-of-idaho | The College of Idaho | Caldwell, ID | www.collegeofidaho.edu/
university-of-jamestown | University of Jamestown | Jamestown, ND | www.uj.edu/
westminster-college-pa | Westminster College | New Wilmington, PA | www.westminster.edu/
central-methodist-university-college-of-liberal-arts-and-sciences | Central Methodist University-College of Liberal Arts and Sciences | Fayette, MO | www.centralmethodist.edu/
hanover-college | Hanover College | Hanover, IN | www.hanover.edu/
brenau-university | Brenau University | Gainesville, GA | https://www.brenau.edu/
shorter-university | Shorter University | Rome, GA | https://www.shorter.edu/
northwest-nazarene-university | Northwest Nazarene University | Nampa, ID | https://www.nnu.edu/
new-england-college | New England College | Henniker, NH | www.nec.edu/
american-international-college | American International College | Springfield, MA | www.aic.edu/
marian-university-wi | Marian University | Fond Du Lac, WI | https://www.marianuniversity.edu/
quincy-university | Quincy University | Quincy, IL | https://www.quincy.edu/
spring-arbor-university | Spring Arbor University | Spring Arbor, MI | https://springarbor.edu/
waynesburg-university | Waynesburg University | Waynesburg, PA | www.waynesburg.edu/
bethel-university-in | Bethel University | Mishawaka, IN | https://betheluniversity.edu/
wilmington-college | Wilmington College | Wilmington, OH | https://www.wilmington.edu/
maryville-college | Maryville College | Maryville, TN | www.maryvillecollege.edu/
transylvania-university | Transylvania University | Lexington, KY | https://www.transy.edu/
guilford-college | Guilford College | Greensboro, NC | https://www.guilford.edu/
thomas-university | Thomas University | Thomasville, GA | www.thomasu.edu/
lycoming-college | Lycoming College | Williamsport, PA | https://www.lycoming.edu/
new-mexico-institute-of-mining-and-technology | New Mexico Institute of Mining and Technology | Socorro, NM | https://www.nmt.edu/
university-of-pittsburgh-bradford | University of Pittsburgh-Bradford | Bradford, PA | https://www.upb.pitt.edu/
franklin-pierce-university | Franklin Pierce University | Rindge, NH | https://www.franklinpierce.edu/
albertus-magnus-college | Albertus Magnus College | New Haven, CT | https://www.albertus.edu/
california-college-of-the-arts | California College of the Arts | San Francisco, CA | www.cca.edu/
california-institute-of-technology | California Institute of Technology | Pasadena, CA | www.caltech.edu/
midamerica-nazarene-university | MidAmerica Nazarene University | Olathe, KS | https://www.mnu.edu/
barton-college | Barton College | Wilson, NC | https://www.barton.edu/
west-virginia-university-institute-of-technology | West Virginia University Institute of Technology | Beckley, WV | www.wvutech.edu/
doane-university | Doane University | Crete, NE | www.doane.edu/
rockford-university | Rockford University | Rockford, IL | www.rockford.edu/
st-thomas-aquinas-college | St. Thomas Aquinas College | Sparkill, NY | www.stac.edu/
keuka-college | Keuka College | Keuka Park, NY | https://www.keuka.edu/
goucher-college | Goucher College | Baltimore, MD | www.goucher.edu/
saint-joseph-s-college-of-maine | Saint Joseph's College of Maine | Standish, ME | www.sjcme.edu/
united-states-merchant-marine-academy | United States Merchant Marine Academy | Kings Point, NY | https://www.usmma.edu/
harris-stowe-state-university | Harris-Stowe State University | Saint Louis, MO | https://www.hssu.edu/
university-of-maryland-baltimore | University of Maryland Baltimore | Baltimore, MD | www.umaryland.edu/
valley-city-state-university | Valley City State University | Valley City, ND | www.vcsu.edu/
kansas-wesleyan-university | Kansas Wesleyan University | Salina, KS | www.kwu.edu/
regis-college | Regis College | Weston, MA | www.regiscollege.edu/
greenville-university | Greenville University | Greenville, IL | www.greenville.edu/
west-virginia-wesleyan-college | West Virginia Wesleyan College | Buckhannon, WV | www.wvwc.edu/
marietta-college | Marietta College | Marietta, OH | https://www.marietta.edu/
college-of-our-lady-of-the-elms | College of Our Lady of the Elms | Chicopee, MA | https://www.elms.edu/
hampden-sydney-college | Hampden-Sydney College | Hampden-Sydney, VA | www.hsc.edu/
university-of-north-carolina-school-of-the-arts | University of North Carolina School of the Arts | Winston Salem, NC | www.uncsa.edu/
wisconsin-lutheran-college | Wisconsin Lutheran College | Milwaukee, WI | www.wlc.edu/
maine-maritime-academy | Maine Maritime Academy | Castine, ME | https://mainemaritime.edu/
university-of-science-and-arts-of-oklahoma | University of Science and Arts of Oklahoma | Chickasha, OK | https://usao.edu/
covenant-college | Covenant College | Lookout Mountain, GA | www.covenant.edu/
mercy-college-of-ohio | Mercy College of Ohio | Toledo, OH | www.mercycollege.edu/
university-of-nebraska-medical-center | University of Nebraska Medical Center | Omaha, NE | www.unmc.edu/
manchester-university | Manchester University | North Manchester, IN | https://www.manchester.edu/
southern-virginia-university | Southern Virginia University | Buena Vista, VA | https://svu.edu/
university-of-minnesota-morris | University of Minnesota-Morris | Morris, MN | https://morris.umn.edu/
illinois-college | Illinois College | Jacksonville, IL | www.ic.edu/
the-university-of-texas-health-science-center-at-san-antonio | The University of Texas Health Science Center at San Antonio | San Antonio, TX | www.uthscsa.edu/
beloit-college | Beloit College | Beloit, WI | www.beloit.edu/
university-of-saint-mary | University of Saint Mary | Leavenworth, KS | www.stmary.edu/
livingstone-college | Livingstone College | Salisbury, NC | livingstone.edu/
southwestern-college-ks | Southwestern College | Winfield, KS | https://www.sckans.edu/
william-jewell-college | William Jewell College | Liberty, MO | https://www.jewell.edu/
maharishi-international-university | Maharishi International University | Fairfield, IA | https://www.miu.edu/
harvey-mudd-college | Harvey Mudd College | Claremont, CA | https://www.hmc.edu/
hilbert-college | Hilbert College | Hamburg, NY | www.hilbert.edu/
oklahoma-panhandle-state-university | Oklahoma Panhandle State University | Goodwell, OK | https://opsu.edu/
heidelberg-university | Heidelberg University | Tiffin, OH | https://www.heidelberg.edu/
centenary-university | Centenary University | Hackettstown, NJ | www.centenaryuniversity.edu/
loma-linda-university | Loma Linda University | Loma Linda, CA | www.llu.edu/index.html
king-university | King University | Bristol, TN | https://www.king.edu/
christian-brothers-university | Christian Brothers University | Memphis, TN | https://www.cbu.edu/
franklin-college | Franklin College | Franklin, IN | www.franklincollege.edu/
life-university | Life University | Marietta, GA | www.life.edu/
the-university-of-olivet | The University of Olivet | Olivet, MI | https://www.uolivet.edu/
wright-state-university-lake-campus | Wright State University-Lake Campus | Celina, OH | https://lake.wright.edu/
hastings-college | Hastings College | Hastings, NE | www.hastings.edu/
washington-college | Washington College | Chestertown, MD | www.washcoll.edu/
columbus-college-of-art-and-design | Columbus College of Art & Design | Columbus, OH | https://www.ccad.edu/
huntingdon-college | Huntingdon College | Montgomery, AL | https://www.huntingdon.edu/
shaw-university | Shaw University | Raleigh, NC | www.shawu.edu/
toccoa-falls-college | Toccoa Falls College | Toccoa Falls, GA | https://tfc.edu/
lees-mcrae-college | Lees-McRae College | Banner Elk, NC | www.lmc.edu/
mcpherson-college | McPherson College | McPherson, KS | www.mcpherson.edu/
ottawa-university-ottawa | Ottawa University-Ottawa | Ottawa, KS | www.ottawa.edu/
mercy-college-of-health-sciences | Mercy College of Health Sciences | Des Moines, IA | https://www.mchs.edu/
wabash-college | Wabash College | Crawfordsville, IN | www.wabash.edu/
new-orleans-baptist-theological-seminary | New Orleans Baptist Theological Seminary | New Orleans, LA | www.nobts.edu/
wilson-college | Wilson College | Chambersburg, PA | www.wilson.edu/
the-university-of-tennessee-southern | The University of Tennessee Southern | Pulaski, TN | https://www.utsouthern.edu/
central-yeshiva-tomchei-tmimim-lubavitz | Central Yeshiva Tomchei Tmimim Lubavitz | Brooklyn, NY | https://cyttl.edu/
louisiana-state-university-health-sciences-center-new-orleans | Louisiana State University Health Sciences Center-New Orleans | New Orleans, LA | www.lsuhsc.edu/
ohio-christian-university | Ohio Christian University | Circleville, OH | www.ohiochristian.edu/
california-institute-of-the-arts | California Institute of the Arts | Valencia, CA | https://www.calarts.edu/
pennsylvania-state-university-penn-state-lehigh-valley | Pennsylvania State University-Penn State Lehigh Valley | Center Valley, PA | https://lehighvalley.psu.edu/
saint-mary-of-the-woods-college | Saint Mary-of-the-Woods College | Saint Mary of the Woods, IN | www.smwc.edu/
lake-erie-college | Lake Erie College | Painesville, OH | www.lec.edu/
presbyterian-college | Presbyterian College | Clinton, SC | https://www.presby.edu/
newman-university | Newman University | Wichita, KS | www.newmanu.edu/
the-southern-baptist-theological-seminary | The Southern Baptist Theological Seminary | Louisville, KY | www.sbts.edu/
tennessee-wesleyan-university | Tennessee Wesleyan University | Athens, TN | www.tnwesleyan.edu/
new-college-of-florida | New College of Florida | Sarasota, FL | www.ncf.edu/
kentucky-wesleyan-college | Kentucky Wesleyan College | Owensboro, KY | https://kwc.edu/
coker-university | Coker University | Hartsville, SC | https://coker.edu/
rocky-mountain-college | Rocky Mountain College | Billings, MT | https://www.rocky.edu/
hampshire-college | Hampshire College | Amherst, MA | https://www.hampshire.edu/
university-of-saint-joseph | University of Saint Joseph | West Hartford, CT | https://www.usj.edu/
miami-university-middletown | Miami University-Middletown | Middletown, OH | miamioh.edu/regionals/
milwaukee-institute-of-art-and-design | Milwaukee Institute of Art & Design | Milwaukee, WI | www.miad.edu/
agnes-scott-college | Agnes Scott College | Decatur, GA | www.agnesscott.edu/
oregon-health-and-science-university | Oregon Health & Science University | Portland, OR | www.ohsu.edu/
ottawa-university-surprise | Ottawa University-Surprise | Surprise, AZ | www.ottawa.edu/ouaz/home
cedar-crest-college | Cedar Crest College | Allentown, PA | www.cedarcrest.edu/
westminster-university | Westminster University | Salt Lake City, UT | www.westminsteru.edu/
wilberforce-university | Wilberforce University | Wilberforce, OH | www.wilberforce.edu/
franciscan-missionaries-of-our-lady-university | Franciscan Missionaries of Our Lady University | Baton Rouge, LA | www.franu.edu/
trinity-christian-college | Trinity Christian College | Palos Heights, IL | www.trnty.edu/
milligan-university | Milligan University | Milligan, TN | www.milligan.edu/
brevard-college | Brevard College | Brevard, NC | https://www.brevard.edu/
chestnut-hill-college | Chestnut Hill College | Philadelphia, PA | www.chc.edu/
bryan-college-dayton | Bryan College-Dayton | Dayton, TN | www.bryan.edu/
