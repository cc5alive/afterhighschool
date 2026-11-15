# Task: find the current SAT/ACT policy for {{COUNT}} US colleges (batch {{BATCH}} of {{TOTAL}})

You're helping keep afterhighschool.me accurate. It's a free, high-trust site that helps 16–18-year-olds decide what to do after high school. The test policies we show now come from federal data that lags years behind, and many colleges have changed their rules since 2024. Your job is to **find each college's current policy on its own official website and quote it**. We open every link and check every quote ourselves before anything goes on the site.

## How to work

1. **Browse live.** Open every page you cite. Don't answer from memory. If you can't open web pages, reply only: BROWSING UNAVAILABLE.
2. **Find the policy for students applying now**, meaning for entry in fall 2027 (the class applying in the 2026–27 cycle). If the page only covers fall 2026, use it and say so in "term".
3. **Use the college's own website only**: its admissions site, its official news site or its catalog. Not news articles, test-prep companies, Common App, Niche, College Board or other third-party sites.
4. **Pick one policy:**
   - "required": first-year applicants must submit SAT or ACT scores (even if hardship waivers exist).
   - "optional": scores are considered if you send them, but you can apply without them.
   - "recommended": optional, but the college says it recommends or encourages sending scores.
   - "blind": scores aren't considered even if you send them.
   If the rule differs by program, campus or applicant group (for example, required only for some majors, out-of-state students or students with a GPA below a cutoff), pick the rule that applies to most first-year applicants and explain the exceptions in "note".
5. **Quote the page.** Copy one or two sentences, word for word, that state the policy. Keep it under 300 characters. Don't fix typos or paraphrase; we search the page for your exact text.
6. **Link the exact page with that sentence**, not the admissions home page.
7. **Don't guess.** If the college's own site doesn't state a clear current policy, use status "not_found". A wrong answer is worse than none.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per college, in the order listed. No intro, no code fences, no notes after.

Found it:
{"slug":"<slug exactly as listed>","status":"found","policy":"required","term":"Fall 2027","url":"<https link to the page with the quote>","title":"<page title as shown>","quote":"<exact sentence(s) from the page>","note":null,"concerns":null}

Couldn't find a clear current policy on the college's own site:
{"slug":"<slug>","status":"not_found","policy":null,"term":null,"url":null,"title":null,"quote":null,"note":null,"concerns":"<what you checked and what was unclear, in one sentence>"}

- "note": exceptions a student should know, in one plain sentence (for example, "Required for nursing applicants."), or null.
- "concerns": anything odd, such as two official pages that disagree, an old page, or a policy that changes next year. Otherwise null.

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line.

Do all {{COUNT}} colleges. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next college.

## Colleges

Format: slug | name | city, state | college website | what the federal data says now
