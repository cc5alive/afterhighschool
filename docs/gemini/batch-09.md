# Task: research "What's special" facts for US colleges (batch 9 of 11)

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

oak-hills-christian-college | Oak Hills Christian College | Bemidji, MN | www.oakhills.edu/
oak-valley-college | Oak Valley College | Rialto, CA | https://oakvalley.edu/
yeshiva-gedolah-of-greater-detroit | Yeshiva Gedolah of Greater Detroit | Oak Park, MI | https://www.yeshivagedolahgreaterdetroit.com/
yeshiva-yesodei-hatorah | Yeshiva Yesodei Hatorah | Lakewood, NJ | yeshivayesodeihatorahlakewood.com/
antioch-university-seattle | Antioch University-Seattle | Seattle, WA | www.antiochseattle.edu/
america-evangelical-university | America Evangelical University | Gardena, CA | www.aeu.edu/
northeast-college-of-health-sciences | Northeast College of Health Sciences | Seneca Falls, NY | https://www.northeastcollege.edu/
kentucky-mountain-bible-college | Kentucky Mountain Bible College | Jackson, KY | https://www.kmbc.edu/
grace-mission-university | Grace Mission University | Fullerton, CA | www.gm.edu/
epic-bible-college-and-graduate-school | Epic Bible College & Graduate School | Sacramento, CA | epic.edu/
lakeview-college-of-nursing | Lakeview College of Nursing | Danville, IL | https://lcn.edu/
yeshivat-hechal-shemuel | Yeshivat Hechal Shemuel | Brooklyn, NY | hechalshemuel.com/
divine-word-college | Divine Word College | Epworth, IA | www.dwci.edu/
hellenic-college-holy-cross-greek-orthodox-school-of-theology | Hellenic College-Holy Cross Greek Orthodox School of Theology | Brookline, MA | www.hchc.edu/
southeastern-free-will-baptist-bible-college | Southeastern Free Will Baptist Bible College | Wendell, NC | www.sfwbc.edu/
yeshiva-of-ocean | Yeshiva of Ocean | Greenfield Park, NY | yeshivaofocean.com/
bais-medrash-elyon | Bais Medrash Elyon | Monsey, NY | baismedroshelyon.com/
antioch-university-los-angeles | Antioch University-Los Angeles | Culver City, CA | www.antiochla.edu/
northcentral-university | Northcentral University | San Diego, CA | www.nu.edu/
pontifical-college-josephinum | Pontifical College Josephinum | Columbus, OH | www.pcj.edu/
yeshiva-of-far-rockaway-derech-ayson-rabbinical-seminary | Yeshiva of Far Rockaway Derech Ayson Rabbinical Seminary | Far Rockaway, NY | https://www.yofr.org/
yeshivah-gedolah-rabbinical-college | Yeshivah Gedolah Rabbinical College | Miami Beach, FL | www.lecfl.com/
new-york-college-of-health-professions | New York College of Health Professions | Syosset, NY | https://nycollege.edu/
keser-torah-mayan-hatalmud | Keser Torah-Mayan Hatalmud | Lakewood, NJ | www.mayanhatalmud.org/
sattler-college | Sattler College | Boston, MA | https://sattler.edu/
new-hope-christian-college-eugene | New Hope Christian College-Eugene | Eugene, OR | www.newhope.edu/
trinity-college-of-nursing-and-health-sciences | Trinity College of Nursing & Health Sciences | Rock Island, IL | www.trinitycollegeqc.edu/
yeshiva-college-of-the-nations-capital | Yeshiva College of the Nations Capital | Silver  Spring, MD | ycnc.org/
antioch-university-santa-barbara | Antioch University-Santa Barbara | Santa Barbara, CA | www.antiochsb.edu/
california-prestige-university | California Prestige University | Santa Fe Springs, CA | cpu.edu/
trinity-international-university-illinois | Trinity International University-Illinois | Deerfield, IL | https://www.tiu.edu/
claremont-lincoln-university | Claremont Lincoln University | Claremont, CA | https://www.claremontlincoln.edu/about-claremont-lincoln/
carolina-christian-college | Carolina Christian College | Winston Salem, NC | www.carolina.edu/
bais-medrash-of-dexter-park | Bais Medrash of Dexter Park | Chestnut Ridge, NY | https://bmdpark.com/
mesivtha-tifereth-jerusalem-of-america | Mesivtha Tifereth Jerusalem of America | New York, NY | mtj.edu/
rabbinical-college-telshe | Rabbinical College Telshe | Wickliffe, OH | independentrabbinicalcolleges.org/index.html
sterling-college-vt | Sterling College | Craftsbury Common, VT | www.sterlingcollege.edu/
great-northern-university | Great Northern University | Spokane, WA | https://www.greatnorthernu.org/
yeshiva-ohr-naftoli | Yeshiva Ohr Naftoli | New Windsor, NY | https://www.yeshivaohrnaftoli.com/
allegheny-wesleyan-college | Allegheny Wesleyan College | Salem, OH | awc.edu/
american-baptist-college | American Baptist College | Nashville, TN | https://www.abcnash.edu/
international-baptist-college-and-seminary | International Baptist College and Seminary | Chandler, AZ | https://www.ibcs.edu/
palmer-college-of-chiropractic | Palmer College of Chiropractic | Davenport, IA | www.palmer.edu/
national-university-of-natural-medicine | National University of Natural Medicine | Portland, OR | https://www.nunm.edu/
ottawa-university-milwaukee | Ottawa University-Milwaukee | Brookfield, WI | www.ottawa.edu/
university-of-north-texas-health-science-center | University of North Texas Health Science Center | Fort Worth, TX | www.unthealth.edu/
williamson-christian-college | Williamson Christian College | Franklin, TN | www.williamsoncc.edu/
yeshiva-zichron-aryeh | Yeshiva Zichron Aryeh | Far Rockaway, NY | https://yeshivazichronaryeh.com/
conception-seminary-college | Conception Seminary College | Conception, MO | www.conception.edu/
baptist-missionary-association-theological-seminary | Baptist Missionary Association Theological Seminary | Jacksonville, TX | www.bmats.edu/
bastyr-university | Bastyr University | Kenmore, WA | www.bastyr.edu/
william-james-college | William James College | Newton, MA | www.williamjames.edu/
california-institute-of-integral-studies | California Institute of Integral Studies | San Francisco, CA | https://www.ciis.edu/
mount-angel-seminary | Mount Angel Seminary | Saint Benedict, OR | https://www.mountangelabbey.org/seminary
saint-charles-borromeo-seminary-overbrook | Saint Charles Borromeo Seminary-Overbrook | Ambler, PA | www.scs.edu/
bais-medrash-mayan-hatorah | Bais Medrash Mayan Hatorah | Lakewood, NJ | https://baismedrashmayanhatorah.com/
newu-university | NewU University | Washington, DC | https://newu.university/
notre-dame-de-namur-university | Notre Dame de Namur University | Belmont, CA | www.ndnu.edu/
christ-mission-college | Christ Mission College | San Antonio, TX | cmctx.edu/
southern-california-seminary | Southern California Seminary | El Cajon, CA | www.socalsem.edu/
university-of-the-west | University of the West | Rosemead, CA | https://www.uwest.edu/
yeshiva-gedolah-of-cliffwood | Yeshiva Gedolah of Cliffwood | Keyport, NJ | https://yeshivagedolahcliffwood.com/
chi-health-school-of-radiologic-technology | CHI Health School of Radiologic Technology | Omaha, NE | https://www.chihealth.com/education/professional-training/radiologic-technology
haven-university | Haven University | Garden Grove, CA | www.haven.edu/
talmudic-college-of-florida | Talmudic College of Florida | Miami Beach, FL | www.talmudicu.edu/
yeshiva-bais-aharon | Yeshiva Bais Aharon | Lakewood, NJ | https://www.yeshivabaisaharon.com/
alaska-bible-college | Alaska Bible College | Palmer, AK | https://www.akbible.edu/
messenger-college | Messenger College | Bedford, TX | www.messengercollege.edu/
montana-bible-college | Montana Bible College | Billings, MT | https://montanabiblecollege.edu/
wesley-biblical-seminary | Wesley Biblical Seminary | Ridgeland, MS | https://www.wbs.edu/
pennsylvania-academy-of-the-fine-arts | Pennsylvania Academy of the Fine Arts | Philadelphia, PA | https://www.pafa.org/
touro-university-california | Touro University California | Vallejo, CA | www.tu.edu/
yeshiva-ohr-yisrael | Yeshiva Ohr Yisrael | Brooklyn, NY | www.yoy.edu/
heritage-bible-college | Heritage Bible College | Dunn, NC | www.heritagebiblecollege.edu/
pacific-bible-college | Pacific Bible College | Medford, OR | pacificbible.edu/
touro-university-nevada | Touro University Nevada | Henderson, NV | www.tun.touro.edu/
louisiana-state-university-health-sciences-center-shreveport | Louisiana State University Health Sciences Center-Shreveport | Shreveport, LA | https://www.lsuhs.edu/
shasta-bible-college-and-graduate-school | Shasta Bible College and Graduate School | Redding, CA | www.shasta.edu/
the-chicago-school-at-chicago | The Chicago School at Chicago | Chicago, IL | https://www.thechicagoschool.edu/in-the-community/locations/
boston-baptist-college | Boston Baptist College | Boston, MA | www.boston.edu/
mid-south-christian-college | Mid-South Christian College | Memphis, TN | https://www.midsouthchristian.edu/
tri-state-bible-college | Tri-State Bible College | South Point, OH | https://tsbc.edu/
american-islamic-college | American Islamic College | Chicago, IL | aicusa.edu/
central-yeshiva-beth-joseph | Central Yeshiva Beth Joseph | Airmont, NY | https://centralyeshivabethjoseph.com/
palo-alto-university | Palo Alto University | Palo Alto, CA | www.paloaltou.edu/
national-university-of-health-sciences | National University of Health Sciences | Lombard, IL | https://www.nuhs.edu/
talmudical-institute-of-upstate-new-york | Talmudical Institute of Upstate New York | Rochester, NY | https://www.tiuny.org/
adler-university | Adler University | Chicago, IL | https://www.adler.edu/
saint-john-s-seminary | Saint John's Seminary | Brighton, MA | www.sjs.edu/
redeemers-university-north-america | Redeemers University North America | Greenville, TX | https://www.rccgnaseminary.org/
middlebury-institute-of-international-studies-at-monterey | Middlebury Institute of International Studies at Monterey | Monterey, CA | https://www.middlebury.edu/institute/
new-york-college-of-traditional-chinese-medicine | New York College of Traditional Chinese Medicine | Mineola, NY | https://www.nyctcm.edu/
the-chicago-school-at-san-diego | The Chicago School at San Diego | San Diego, CA | https://www.thechicagoschool.edu/in-the-community/locations/
jackson-theological-seminary | Jackson Theological Seminary | North Little Rock, AR | https://jtseminary.edu/
virginia-beach-theological-seminary | Virginia Beach Theological Seminary | Virginia Beach, VA | www.vbts.edu/
a-t-still-university-of-health-sciences | A T Still University of Health Sciences | Kirksville, MO | www.atsu.edu/
academy-for-five-element-acupuncture | Academy for Five Element Acupuncture | Gainesville, FL | www.acupuncturist.edu/
academy-for-jewish-religion | Academy for Jewish Religion | Yonkers, NY | https://ajr.edu/
academy-for-jewish-religion-california | Academy for Jewish Religion California | Los Angeles, CA | www.ajrca.edu/
academy-of-chinese-culture-and-health-sciences | Academy of Chinese Culture and Health Sciences | Oakland, CA | www.acchs.edu/
academy-of-vocal-arts | Academy of Vocal Arts | Philadelphia, PA | www.avaopera.org/
acupuncture-and-integrative-medicine-college-berkeley | Acupuncture and Integrative Medicine College-Berkeley | Berkeley, CA | https://www.aimc.edu/
adler-graduate-school | Adler Graduate School | Minnetonka, MN | https://www.alfredadler.edu/
air-force-institute-of-technology-graduate-school-of-engineering-and-management | Air Force Institute of Technology-Graduate School of Engineering & Management | Wright-Patterson AFB, OH | www.afit.edu/
alabama-college-of-osteopathic-medicine | Alabama College of Osteopathic Medicine | Dothan, AL | https://www.acom.edu/
albany-law-school | Albany Law School | Albany, NY | www.albanylaw.edu/
albany-medical-college | Albany Medical College | Albany, NY | www.amc.edu/
albert-einstein-college-of-medicine | Albert Einstein College of Medicine | Bronx, NY | www.einsteinmed.edu/
alder-graduate-school-of-education | Alder Graduate School of Education | Redwood City, CA | https://aldergse.edu/
american-film-institute-conservatory | American Film Institute Conservatory | Los Angeles, CA | www.afi.com/
anabaptist-mennonite-biblical-seminary | Anabaptist Mennonite Biblical Seminary | Elkhart, IN | www.ambs.edu/
antioch-university-new-england | Antioch University-New England | Keene, NH | www.antiochne.edu/
appalachian-college-of-pharmacy | Appalachian College of Pharmacy | Oakwood, VA | www.acp.edu/
appalachian-school-of-law | Appalachian School of Law | Grundy, VA | www.asl.edu/
aquinas-institute-of-theology | Aquinas Institute of Theology | Saint Louis, MO | https://www.ai.edu/
arkansas-colleges-of-health-education | Arkansas Colleges of Health Education | Fort Smith, AR | achehealth.edu/
asbury-theological-seminary | Asbury Theological Seminary | Wilmore, KY | www.asburyseminary.edu/
atlanta-s-john-marshall-law-school | Atlanta's John Marshall Law School | Atlanta, GA | www.johnmarshall.edu/
atlantic-institute-of-oriental-medicine | Atlantic Institute of Oriental Medicine | Fort Lauderdale, FL | www.atom.edu/
austin-presbyterian-theological-seminary | Austin Presbyterian Theological Seminary | Austin, TX | https://www.austinseminary.edu/
ave-maria-school-of-law | Ave Maria School of Law | Naples, FL | https://www.avemarialaw.edu/
bakke-graduate-university | Bakke Graduate University | Dallas, TX | https://www.bgu.edu/
bank-street-college-of-education | Bank Street College of Education | New York, NY | www.bankstreet.edu/
baylor-college-of-medicine | Baylor College of Medicine | Houston, TX | www.bcm.edu/
bethany-theological-seminary | Bethany Theological Seminary | Richmond, IN | www.bethanyseminary.edu/
bexley-hall-seabury-western-theological-seminary-federation-inc | Bexley Hall Seabury Western Theological Seminary Federation Inc. | Chicago, IL | www.bexleyseabury.edu/
boston-graduate-school-of-psychoanalysis-inc | Boston Graduate School of Psychoanalysis Inc | Brookline, MA | https://www.bgsp.edu/
brite-divinity-school | Brite Divinity School | Fort Worth, TX | www.brite.edu/
brooklyn-law-school | Brooklyn Law School | Brooklyn, NY | https://www.brooklaw.edu/
byzantine-catholic-seminary-of-saints-cyril-and-methodius | Byzantine Catholic Seminary of Saints Cyril and Methodius | Pittsburgh, PA | www.bcs.edu/
california-institute-of-advanced-management | California Institute of Advanced Management | Alhambra, CA | www.ciam.edu/
california-university-of-science-and-medicine | California University of Science and Medicine | Colton, CA | https://www.cusm.edu/
california-western-school-of-law | California Western School of Law | San Diego, CA | https://www.cwsl.edu/
calvin-theological-seminary | Calvin Theological Seminary | Grand Rapids, MI | www.calvinseminary.edu/
catholic-theological-union-at-chicago | Catholic Theological Union at Chicago | Chicago, IL | www.ctu.edu/
chicago-college-of-oriental-medicine | Chicago College of Oriental Medicine | Chicago, IL | https://www.ccom.edu/
chicago-theological-seminary | Chicago Theological Seminary | Chicago, IL | https://www.ctschicago.edu/
christian-theological-seminary | Christian Theological Seminary | Indianapolis, IN | www.cts.edu/
church-divinity-school-of-the-pacific | Church Divinity School of the Pacific | Berkeley, CA | www.cdsp.edu/
claremont-graduate-university | Claremont Graduate University | Claremont, CA | www.cgu.edu/
claremont-school-of-theology | Claremont School of Theology | Los Angeles, CA | www.cst.edu/
colgate-rochester-crozer-divinity-school | Colgate Rochester Crozer Divinity School | Rochester, NY | https://www.crcds.edu/
columbia-theological-seminary | Columbia Theological Seminary | Decatur, GA | www.ctsnet.edu/
concordia-seminary | Concordia Seminary | Saint Louis, MO | https://www.csl.edu/
concordia-theological-seminary | Concordia Theological Seminary | Fort Wayne, IN | https://ctsfw.edu/
congregation-ymh | Congregation YMH | Brooklyn, NY | https://www.congymh.org/
conway-school-of-landscape-design | Conway School of Landscape Design | Northampton, MA | www.csld.edu/
covenant-theological-seminary | Covenant Theological Seminary | Saint Louis, MO | https://www.covenantseminary.edu/
cranbrook-academy-of-art | Cranbrook Academy of Art | Bloomfield Hills, MI | https://cranbrookart.edu/
cuny-school-of-law | CUNY School of Law | Long Island City, NY | https://www.law.cuny.edu/
dallas-theological-seminary | Dallas Theological Seminary | Dallas, TX | www.dts.edu/
daybreak-university | Daybreak University | Anaheim, CA | https://daybreak.edu/
denver-seminary | Denver Seminary | Littleton, CO | www.denverseminary.edu/
des-moines-university-osteopathic-medical-center | Des Moines University-Osteopathic Medical Center | West Des Moines, IA | www.dmu.edu/
divine-mercy-university | Divine Mercy University | Sterling, VA | www.divinemercy.edu/
dominican-school-of-philosophy-and-theology | Dominican School of Philosophy & Theology | Berkeley, CA | https://www.dspt.edu/
dongguk-university-los-angeles | Dongguk University Los Angeles | Los Angeles, CA | www.dula.edu/
dragon-rises-college-of-oriental-medicine | Dragon Rises College of Oriental Medicine | Bradenton, FL | https://www.dragonrises.edu/
eden-theological-seminary | Eden Theological Seminary | Webster Groves, MO | www.eden.edu/
edward-via-college-of-osteopathic-medicine | Edward Via College of Osteopathic Medicine | Blacksburg, VA | www.vcom.edu/
elmezzi-graduate-school-of-molecular-medicine | Elmezzi Graduate School of Molecular Medicine | Manhasset, NY | www.northwell.edu/education-and-resources/elmezzi-graduate-school-of-molecular-medicine
endeavor-health-school-of-nurse-anesthesia-depaul-university | Endeavor Health School of Nurse Anesthesia-DePaul University | Evanston, IL | https://www.endeavorhealth.org/academics-medical-education/specialized-training-programs/school-of-nurse-anesthesia
episcopal-theological-seminary-of-the-southwest | Episcopal Theological Seminary of the Southwest | Austin, TX | www.ssw.edu/
erikson-institute | Erikson Institute | Chicago, IL | https://www.erikson.edu/
fielding-graduate-university | Fielding Graduate University | Santa Barbara, CA | www.fielding.edu/
franciscan-school-of-theology | Franciscan School of Theology | San Diego, CA | https://www.fst.edu/
frontier-nursing-university | Frontier Nursing University | Versailles, KY | www.frontier.edu/
fuller-theological-seminary | Fuller Theological Seminary | Pasadena, CA | https://www.fuller.edu/
future-generations-university | Future Generations University | Franklin, WV | www.future.edu/
garrett-evangelical-theological-seminary | Garrett-Evangelical Theological Seminary | Evanston, IL | www.garrett.edu/
gordon-conwell-theological-seminary | Gordon-Conwell Theological Seminary | South Hamilton, MA | www.gordonconwell.edu/
graduate-theological-union | Graduate Theological Union | Berkeley, CA | www.gtu.edu/
hackensack-meridian-school-of-medicine | Hackensack Meridian School of Medicine | Nutley, NJ | www.hmsom.edu/en
hartford-international-university-for-religion-and-peace | Hartford International University for Religion and Peace | Hartford, CT | www.hartfordinternational.edu/
hazelden-betty-ford-graduate-school | Hazelden Betty Ford Graduate School | Center City, MN | www.hazeldenbettyford.org/education/graduate-school-addiction-studies
hebrew-college | Hebrew College | Newton, MA | https://hebrewcollege.edu/
hebrew-union-college-jewish-institute-of-religion | Hebrew Union College-Jewish Institute of Religion | New York, NY | www.huc.edu/
herzing-university-clarksville | Herzing University-Clarksville | Clarksville, TN | https://www.herzing.edu/
high-tech-high-graduate-school-of-education | High Tech High Graduate School of Education | San Diego, CA | https://hthgse.edu/
hj-international-graduate-school-for-peace-and-public-leadership | HJ International Graduate School for Peace and Public Leadership | New York, NY | https://www.uts.edu/
hood-theological-seminary | Hood Theological Seminary | Salisbury, NC | www.hoodseminary.edu/
icahn-school-of-medicine-at-mount-sinai | Icahn School of Medicine at Mount Sinai | New York, NY | icahn.mssm.edu/
iliff-school-of-theology | Iliff School of Theology | Denver, CO | www.iliff.edu/
illinois-college-of-optometry | Illinois College of Optometry | Chicago, IL | www.ico.edu/
institute-for-clinical-social-work | Institute for Clinical Social Work | Chicago, IL | www.icsw.edu/
institute-for-doctoral-studies-in-the-visual-arts | Institute for Doctoral Studies in the Visual Arts | Portland, ME | https://www.idsva.edu/
institute-of-buddhist-studies | Institute of Buddhist Studies | Berkeley, CA | www.shin-ibs.edu/
institute-of-taoist-education-and-acupuncture | Institute of Taoist Education and Acupuncture | Louisville, CO | www.itea.edu/
institute-of-world-politics | Institute of World Politics | Washington, DC | www.iwp.edu/
interdenominational-theological-center | Interdenominational Theological Center | Atlanta, GA | www.itc.edu/
international-institute-for-restorative-practices | International Institute for Restorative Practices | Bethlehem, PA | iirp.edu/
jung-tao-school-of-classical-chinese-medicine | Jung Tao School of Classical Chinese Medicine | Sugar Grove, NC | www.jungtao.edu/
kansas-city-university | Kansas City University | Kansas City, MO | https://www.kansascity.edu/
kansas-health-science-university | Kansas Health Science University | Wichita, KS | https://kansascom.kansashsu.org/
keck-graduate-institute | Keck Graduate Institute | Claremont, CA | www.kgi.edu/
kenrick-glennon-seminary | Kenrick Glennon Seminary | Saint Louis, MO | www.kenrick.edu/
larkin-university | Larkin University | Miami, FL | https://larkin.edu/
lexington-theological-seminary | Lexington Theological Seminary | Lexington, KY | www.lextheo.edu/
life-chiropractic-college-west | Life Chiropractic College West | Hayward, CA | https://www.lifewest.edu/
louisville-presbyterian-theological-seminary | Louisville Presbyterian Theological Seminary | Louisville, KY | www.lpts.edu/
