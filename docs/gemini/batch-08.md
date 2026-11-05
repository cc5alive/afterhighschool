# Task: research "What's special" facts for US colleges (batch 8 of 11)

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

voorhees-university | Voorhees University | Denmark, SC | https://www.voorhees.edu/
morris-brown-college | Morris Brown College | Atlanta, GA | https://www.morrisbrown.edu/
kentucky-christian-university | Kentucky Christian University | Grayson, KY | www.kcu.edu/
york-university | York University | York, NE | www.york.edu/
salem-college | Salem College | Winston-Salem, NC | www.salem.edu/
pacific-northwest-college-of-art | Pacific Northwest College of Art | Portland, OR | willamette.edu/pnca/index.html
college-of-biblical-studies-houston | College of Biblical Studies-Houston | Houston, TX | https://cbshouston.edu/
pennsylvania-state-university-penn-state-new-kensington | Pennsylvania State University-Penn State New Kensington | New Kensington, PA | https://newkensington.psu.edu/
maine-college-of-art-and-design | Maine College of Art & Design | Portland, ME | www.meca.edu/
hannibal-lagrange-university | Hannibal-LaGrange University | Hannibal, MO | www.hlg.edu/
faith-baptist-bible-college-and-theological-seminary | Faith Baptist Bible College and Theological Seminary | Ankeny, IA | https://faith.edu/
northwest-university-center-for-online-and-extended-education | Northwest University-Center for Online and Extended Education | Kirkland, WA | www.northwestu.edu/
metropolitan-college-of-new-york | Metropolitan College of New York | New York, NY | https://www.mcny.edu/
pennsylvania-state-university-penn-state-fayette-eberly | Pennsylvania State University-Penn State Fayette- Eberly | Lemont Furnace, PA | https://fayette.psu.edu/
pennsylvania-college-of-art-and-design | Pennsylvania College of Art and Design | Lancaster, PA | pcad.edu/
talmudical-seminary-oholei-torah | Talmudical Seminary Oholei Torah | Brooklyn, NY | www.tsot.edu/
wesleyan-college | Wesleyan College | Macon, GA | https://www.wesleyancollege.edu/
mesivta-torah-vodaath-rabbinical-seminary | Mesivta Torah Vodaath Rabbinical Seminary | Brooklyn, NY | independentrabbinicalcolleges.org/index.html
rabbinical-seminary-of-america | Rabbinical Seminary of America | Flushing, NY | www.rabbinical.org/
patrick-henry-college | Patrick Henry College | Purcellville, VA | https://www.phc.edu/
the-university-of-tennessee-health-science-center | The University of Tennessee Health Science Center | Memphis, TN | www.uthsc.edu/
the-new-england-conservatory-of-music | The New England Conservatory of Music | Boston, MA | https://necmusic.edu/
boricua-college | Boricua College | New York, NY | https://www.boricuacollege.edu/
stephens-college | Stephens College | Columbia, MO | https://stephens.edu/
paine-college | Paine College | Augusta, GA | www.paine.edu/
herzing-university-atlanta | Herzing University-Atlanta | Atlanta, GA | https://www.herzing.edu/
trinity-college-of-jacksonville | Trinity College of Jacksonville | Jacksonville, FL | www.tcj.edu/
morris-college | Morris College | Sumter, SC | https://www.morris.edu/
mission-university | Mission University | Springfield, MO | www.mission.edu/
central-christian-college-of-kansas | Central Christian College of Kansas | McPherson, KS | https://www.centralchristian.edu/
franklin-w-olin-college-of-engineering | Franklin W Olin College of Engineering | Needham, MA | www.olin.edu/
mitchell-college | Mitchell College | New London, CT | https://www.mitchell.edu/
southwestern-christian-university | Southwestern Christian University | Bethany, OK | www.swcu.edu/
warner-pacific-university | Warner Pacific University | Portland, OR | https://www.warnerpacific.edu/
bellin-college | Bellin College | Green Bay, WI | https://www.bellincollege.edu/
st-john-s-college-nm | St. John's College | Santa Fe, NM | www.sjc.edu/
baptist-university-of-florida | Baptist University of Florida | Graceville, FL | www.buf.edu/
college-of-the-atlantic | College of the Atlantic | Bar Harbor, ME | https://www.coa.edu/
pennsylvania-state-university-penn-state-dubois | Pennsylvania State University-Penn State DuBois | DuBois, PA | https://dubois.psu.edu/
pennsylvania-state-university-penn-state-greater-allegheny | Pennsylvania State University-Penn State Greater Allegheny | McKeesport, PA | https://greaterallegheny.psu.edu/
university-of-the-southwest | University of the Southwest | Hobbs, NM | https://www.usw.edu/
arkansas-baptist-college | Arkansas Baptist College | Little Rock, AR | https://www.arkansasbaptist.edu/
naropa-university | Naropa University | Boulder, CO | https://www.naropa.edu/
principia-college | Principia College | Elsah, IL | www.principiacollege.edu/
the-chicago-school-at-los-angeles | The Chicago School at Los Angeles | Los Angeles, CA | https://www.thechicagoschool.edu/in-the-community/locations/
university-of-health-sciences-and-pharmacy-in-st-louis | University of Health Sciences and Pharmacy in St. Louis | Saint Louis, MO | www.uhsp.edu/
institute-of-american-indian-and-alaska-native-culture-and-arts-development | Institute of American Indian and Alaska Native Culture and Arts Development | Santa Fe, NM | https://iaia.edu/
the-university-of-texas-md-anderson-cancer-center | The University of Texas MD Anderson Cancer Center | Houston, TX | www.mdanderson.org/
capitol-technology-university | Capitol Technology University | Laurel, MD | www.captechu.edu/
university-of-fort-lauderdale | University of Fort Lauderdale | Lauderhill, FL | uftl.edu/
pennsylvania-state-university-penn-state-wilkes-barre | Pennsylvania State University-Penn State Wilkes-Barre | Dallas, PA | https://wilkesbarre.psu.edu/
pacific-oaks-college | Pacific Oaks College | Pasadena, CA | https://www.pacificoaks.edu/
mount-sinai-phillips-school-of-nursing | Mount Sinai Phillips School of Nursing | New York, NY | www.pson.edu/
new-saint-andrews-college | New Saint Andrews College | Moscow, ID | nsa.edu/
medical-university-of-south-carolina | Medical University of South Carolina | Charleston, SC | https://musc.edu/
ohio-university-eastern-campus | Ohio University-Eastern Campus | Saint Clairsville, OH | https://www.ohio.edu/eastern/
suny-downstate-health-sciences-university | SUNY Downstate Health Sciences University | Brooklyn, NY | https://www.downstate.edu/
albizu-university-miami | Albizu University-Miami | Miami, FL | https://www.albizu.edu/
john-paul-the-great-catholic-university | John Paul the Great Catholic University | Escondido, CA | https://jpcatholic.edu/
arlington-baptist-university | Arlington Baptist University | Arlington, TX | https://abu.edu/
nazarene-bible-college | Nazarene Bible College | Colorado Springs, CO | www.nbc.edu/
charles-r-drew-university-of-medicine-and-science | Charles R Drew University of Medicine and Science | Los Angeles, CA | www.cdrewu.edu/
ner-israel-rabbinical-college | Ner Israel Rabbinical College | Pikesville, MD | https://nirc.edu/
faith-international-university | Faith International University | Tacoma, WA | https://www.faithiu.edu/
saint-francis-medical-center-college-of-nursing | Saint Francis Medical Center College of Nursing | Peoria, IL | www.sfmccon.edu/
randall-university | Randall University | Moore, OK | www.ru.edu/
allen-college | Allen College | Waterloo, IA | www.allencollege.edu/
golden-gate-university | Golden Gate University | San Francisco, CA | www.ggu.edu/
ottawa-university-online | Ottawa University-Online | Overland Park, KS | www.ottawa.edu/
pennsylvania-state-university-penn-state-shenango | Pennsylvania State University-Penn State Shenango | Sharon, PA | https://shenango.psu.edu/
cottey-college | Cottey College | Nevada, MO | https://www.cottey.edu/
the-king-s-university | The King's University | Southlake, TX | https://www.tku.edu/
methodist-college | Methodist College | Peoria, IL | www.methodistcol.edu/
bryn-athyn-college-of-the-new-church | Bryn Athyn College of the New Church | Bryn Athyn, PA | www.brynathyn.edu/
yeshiva-of-nitra-rabbinical-college | Yeshiva of Nitra Rabbinical College | Chester, NY | yeshivaofnitra.org/
sentara-college-of-health-sciences | Sentara College of Health Sciences | Chesapeake, VA | www.sentara.edu/
texas-tech-university-health-sciences-center-el-paso | Texas Tech University Health Sciences Center El Paso | El Paso, TX | elpaso.ttuhsc.edu/
amridge-university | Amridge University | Montgomery, AL | https://www.amridgeuniversity.edu/
evangel-university-college-of-online-learning | Evangel University-College of Online Learning | Springfield, MO | https://www.evangel.edu/
southern-california-institute-of-architecture | Southern California Institute of Architecture | Los Angeles, CA | www.sciarc.edu/
midwives-college-of-utah | Midwives College of Utah | Salt Lake City, UT | https://www.midwifery.edu/
rabbinical-college-of-ohr-shimon-yisroel | Rabbinical College of Ohr Shimon Yisroel | Brooklyn, NY | https://ohr-sy.com/
grace-school-of-theology | Grace School of Theology | The Woodlands, TX | www.gsot.edu/
logan-university | Logan University | Chesterfield, MO | https://www.logan.edu/
united-states-sports-university | United States Sports University | Daphne, AL | https://www.ussu.edu/
yeshiva-toras-chaim | Yeshiva Toras Chaim | Lakewood, NJ | https://ytclakewood.com/
montserrat-college-of-art | Montserrat College of Art | Beverly, MA | https://www.montserrat.edu/
san-francisco-conservatory-of-music | San Francisco Conservatory of Music | San Francisco, CA | https://sfcm.edu/
welch-college | Welch College | Gallatin, TN | www.welch.edu/
yeshiva-gedolah-imrei-yosef-d-spinka | Yeshiva Gedolah Imrei Yosef D'spinka | Brooklyn, NY | spinka58st.com/
dallas-christian-college | Dallas Christian College | Dallas, TX | www.dallas.edu/
yeshiva-yesoda-hatorah-vetz-chaim | Yeshiva Yesoda Hatorah Vetz Chaim | Brooklyn, NY | yeshivayh.org/
ottawa-university-kansas-city | Ottawa University-Kansas City | Overland Park, KS | www.ottawa.edu/
prescott-college | Prescott College | Prescott, AZ | https://prescott.edu/
holy-apostles-college-and-seminary | Holy Apostles College and Seminary | Cromwell, CT | www.holyapostles.edu/
world-mission-university | World Mission University | Los Angeles, CA | www.wmu.edu/
beis-medrash-heichal-dovid | Beis Medrash Heichal Dovid | Far Rockaway, NY | www.heichaldovid.org/
art-academy-of-cincinnati | Art Academy of Cincinnati | Cincinnati, OH | https://www.artacademy.edu/
bethesda-university | Bethesda University | Anaheim, CA | www.buc.edu/
kehilath-yakov-rabbinical-seminary | Kehilath Yakov Rabbinical Seminary | Ossining, NY | kehilathyakov.com/
lincoln-university-ca | Lincoln University | Oakland, CA | https://lincolnuca.edu/
edvance-college | EDvance College | San Francisco, CA | https://edvance.edu/
sum-bible-college-and-theological-seminary | SUM Bible College and Theological Seminary | El Dorado Hills, CA | www.sum.edu/
great-lakes-christian-college | Great Lakes Christian College | Lansing, MI | www.glcc.edu/
pathways-college | Pathways College | Tempe, AZ | https://www.pathwayscollege.edu/
appalachian-bible-college | Appalachian Bible College | Mount Hope, WV | https://abc.edu/
yeshiva-of-kasho | Yeshiva of Kasho | Brooklyn, NY | https://yokny.org/
rabbinical-college-of-america | Rabbinical College of America | Morristown, NJ | www.rca.edu/
bennett-college | Bennett College | Greensboro, NC | https://www.bennett.edu/
blessing-rieman-college-of-nursing-and-health-sciences | Blessing Rieman College of Nursing and Health Sciences | Quincy, IL | www.brcn.edu/
springfield-college-regional-online-and-continuing-education | Springfield College-Regional Online and Continuing Education | Springfield, MA | https://springfield.edu/academics/online-programs
jewish-theological-seminary-of-america | Jewish Theological Seminary of America | New York, NY | www.jtsa.edu/
saint-anthony-college-of-nursing | Saint Anthony College of Nursing | Rockford, IL | https://www.sacn.edu/
university-of-wisconsin-parkside-flex | University of Wisconsin-Parkside Flex | Kenosha, WI | https://flex.wisconsin.edu/
barclay-college | Barclay College | Haviland, KS | www.barclaycollege.edu/
congregation-talmidei-mesivta-tiferes-shmiel-aleksander | Congregation Talmidei Mesivta Tiferes Shmiel Aleksander | Brooklyn, NY | yeshivaaleksander.org/
crowley-s-ridge-college | Crowley's Ridge College | Paragould, AR | www.crc.edu/
luther-rice-college-and-seminary | Luther Rice College & Seminary | Lithonia, GA | www.lutherrice.edu/
mgh-institute-of-health-professions | MGH Institute of Health Professions | Boston, MA | www.mghihp.edu/
bridges-christian-college | Bridges Christian College | New Orleans, LA | https://www.bcc.edu/
yeshiva-ohr-elchonon-chabad-west-coast-talmudical-seminary | Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary | Los Angeles, CA | www.yoec.edu/
carolina-college-of-biblical-studies | Carolina College of Biblical Studies | Fayetteville, NC | ccbs.edu/
clear-creek-baptist-bible-college | Clear Creek Baptist Bible College | Pineville, KY | https://ccbbc.edu/
cleveland-institute-of-music | Cleveland Institute of Music | Cleveland, OH | www.cim.edu/
upstate-medical-university | Upstate Medical University | Syracuse, NY | www.upstate.edu/
sh-or-yoshuv-rabbinical-college | Sh'or Yoshuv Rabbinical College | Lawrence, NY | https://www.shoryoshuv.org/
american-college-of-the-building-arts | American College of the Building Arts | Charleston, SC | acba.edu/
calvary-university | Calvary University | Kansas City, MO | www.calvary.edu/
central-christian-college-of-the-bible | Central Christian College of the Bible | Moberly, MO | https://www.cccb.edu/
humphreys-university | Humphreys University | Stockton, CA | www.humphreys.edu/
trinity-college-of-florida | Trinity College of Florida | Trinity, FL | trinitycollege.edu/
manhattan-christian-college | Manhattan Christian College | Manhattan, KS | www.mccks.edu/
kuyper-college | Kuyper College | Grand Rapids, MI | https://www.kuyper.edu/
whitworth-university-adult-degree-programs | Whitworth University-Adult Degree Programs | Spokane, WA | https://www.whitworth.edu/cms/
champion-christian-college | Champion Christian College | Hot Springs, AR | champion.edu/
warner-pacific-university-professional-and-graduate-studies | Warner Pacific University Professional and Graduate Studies | Portland, OR | https://www.warnerpacific.edu/
gratz-college | Gratz College | Jenkintown, PA | https://www.gratz.edu/
kansas-christian-college | Kansas Christian College | Overland Park, KS | https://www.kansaschristian.edu/
rabbinical-academy-mesivta-rabbi-chaim-berlin | Rabbinical Academy Mesivta Rabbi Chaim Berlin | Brooklyn, NY | https://rabbinicalacademyrabbichaimberlin.com/
trinity-bible-college-and-graduate-school | Trinity Bible College and Graduate School | Ellendale, ND | trinitybiblecollege.edu/
yeshiva-karlin-stolin | Yeshiva Karlin Stolin | Brooklyn, NY | https://yeshivakarlinstolin.org/
beulah-heights-university | Beulah Heights University | Atlanta, GA | www.beulah.edu/
rush-university | Rush University | Chicago, IL | www.rushu.rush.edu/
bais-medrash-toras-chesed | Bais Medrash Toras Chesed | Lakewood, NJ | www.bmtc.edu/
criswell-college | Criswell College | Dallas, TX | www.criswell.edu/
mid-atlantic-christian-university | Mid-Atlantic Christian University | Elizabeth City, NC | https://www.macuniversity.edu/
machzikei-hadath-rabbinical-college | Machzikei Hadath Rabbinical College | Brooklyn, NY | https://mhrc.edu/
yeshiva-sholom-shachna | Yeshiva Sholom Shachna | Brooklyn, NY | https://yeshivasholomshachna.com/
pacific-rim-christian-university | Pacific Rim Christian University | Honolulu, HI | https://www.pacrim.edu/#home
clinton-college | Clinton College | Rock Hill, SC | www.clintoncollege.edu/
san-francisco-bay-university | San Francisco Bay University | Fremont, CA | https://www.sfbu.edu/
st-john-s-college-il | St. John's College | Springfield, IL | https://www.hshs.org/stjohnscollege/
virginia-university-of-lynchburg | Virginia University of Lynchburg | Lynchburg, VA | www.vul.edu/
beth-medrash-of-asbury-park | Beth Medrash of Asbury Park | Lakewood, NJ | https://baismedrashzichronmeir.com/
watts-college-of-nursing | Watts College of Nursing | Durham, NC | wattscollegeofnursing.edu/
mechon-l-hoyroa | Mechon L'hoyroa | Monsey, NY | https://www.mechonlhoyroa.com/
antioch-college | Antioch College | Yellow Springs, OH | antiochcollege.edu/
women-s-institute-of-torah-seminary-and-college | Women's Institute of Torah Seminary and College | Baltimore, MD | www.wits.edu/
bethlehem-college-and-seminary | Bethlehem College & Seminary | Minneapolis, MN | bcsmn.edu/
catholic-international-university | Catholic International University | Charles Town, WV | https://catholiciu.edu/
justice-university | Justice University | Chandler, AZ | https://www.justiceuniversity.edu/
rabbi-jacob-joseph-school | Rabbi Jacob Joseph School | Edison, NJ | https://rabbijacobjoseph.com/
amberton-university | Amberton University | Garland, TX | www.amberton.edu/
rabbinical-college-ohr-yisroel | Rabbinical College Ohr Yisroel | Brooklyn, NY | www.rabbinicalcollegeohryisroel.com/
yeshiva-shaar-ephraim | Yeshiva Shaar Ephraim | Monsey, NY | shaarephraim.org/
bet-medrash-gadol-ateret-torah | Bet Medrash Gadol Ateret Torah | Brooklyn, NY | betmedrashgadolaterettorah.com/
hobe-sound-bible-college | Hobe Sound Bible College | Hobe Sound, FL | https://hsbc.edu/
talmudical-yeshiva-of-philadelphia | Talmudical Yeshiva of Philadelphia | Philadelphia, PA | https://www.meterware.com/typ/Talmudical_Yeshiva_of_Philadelphia/?C=N;O=D
veritas-baptist-college | Veritas Baptist College | Lawrenceburg, IN | www.vbc.edu/
curtis-institute-of-music | Curtis Institute of Music | Philadelphia, PA | www.curtis.edu/
ecclesia-college | Ecclesia College | Springdale, AR | ecollege.edu/
cincinnati-college-of-mortuary-science | Cincinnati College of Mortuary Science | Cincinnati, OH | www.ccms.edu/
davis-college | Davis College | Pottersville, NY | https://davisny.edu/
webb-institute | Webb Institute | Glen Cove, NY | www.webb.edu/
baptist-university-of-the-americas | Baptist University of the Americas | San Antonio, TX | www.bua.edu/
yeshivas-sanz-klauzenburg | Yeshivas Sanz Klauzenburg | Brooklyn, NY | https://yeshivasanzk.org/
thomas-more-college-of-liberal-arts | Thomas More College of Liberal Arts | Merrimack, NH | www.thomasmorecollege.edu/
polytechnic-university-of-puerto-rico-orlando | Polytechnic University of Puerto Rico-Orlando | Orlando, FL | www.pupr.edu/orlando
rabbinical-seminary-mkor-chaim | Rabbinical Seminary Mkor Chaim | Lakewood, NJ | https://www.mkorchaim.org/
cleveland-university-kansas-city | Cleveland University-Kansas City | Overland Park, KS | www.cleveland.edu/
boise-bible-college | Boise Bible College | Boise, ID | https://www.boisebible.edu/
saint-joseph-seminary-college | Saint Joseph Seminary College | St. Benedict, LA | https://www.sjasc.edu/
hebrew-theological-college | Hebrew Theological College | Skokie, IL | https://www.htc.edu/
yeshivas-be-er-yitzchok | Yeshivas Be'er Yitzchok | Elizabeth, NJ | https://yeshivasbeeryitzchok.org/
yeshivas-emek-hatorah | Yeshivas Emek Hatorah | Howell, NJ | yeshivasemekhatorah.com/
bais-hamedrash-and-mesivta-of-baltimore | Bais HaMedrash and Mesivta of Baltimore | Baltimore, MD | www.bhmb.edu/
san-diego-christian-college | San Diego Christian College | Santee, CA | https://sdcc.edu/
yeshiva-d-monsey-rabbinical-college | Yeshiva D'monsey Rabbinical College | Monsey, NY | https://yeshivadmonsey.com/
yeshiva-gedolah-kesser-torah | Yeshiva Gedolah Kesser Torah | Monsey, NY | https://yeshivagedolahkessertorah.com/
family-of-faith-christian-university | Family of Faith Christian University | Shawnee, OK | www.familyoffaith.edu/
kairos-university | Kairos University | Sioux Falls, SD | www.kairos.edu/
bethany-global-university | Bethany Global University | Bloomington, MN | https://bethanygu.edu/
yeshiva-gedolah-tiferes-boruch | Yeshiva Gedolah Tiferes Boruch | North Plainfield, NJ | https://yeshivagedolahtiferesboruch.com/
visible-music-college | Visible Music College | Memphis, TN | www.visible.edu/
telshe-yeshiva-chicago | Telshe Yeshiva-Chicago | Chicago, IL | https://telsheyeshivachicago.com/
antioch-university | Antioch University | Yellow Springs, OH | www.antioch.edu/
st-john-vianney-college-seminary | St. John Vianney College Seminary | Miami, FL | www.sjvcs.edu/
vandercook-college-of-music | VanderCook College of Music | Chicago, IL | https://www.vandercook.edu/
yeshivath-shaar-hatorah | Yeshivath Shaar Hatorah | Kew Gardens, NY | shaarhatorah.edu/
heritage-christian-university | Heritage Christian University | Florence, AL | https://www.hcu.edu/
