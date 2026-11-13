# Task: find the newest Common Data Set file for {{COUNT}} US colleges (batch {{BATCH}} of {{TOTAL}})

You're helping keep afterhighschool.me up to date. It's a free, high-trust site that helps 16–18-year-olds decide what to do after high school. We already have an older Common Data Set (CDS) for each college below. Your only job is to **find the link to each college's newest CDS document**. Don't copy any numbers: we read the document ourselves and check every value automatically.

## How to work

1. **Browse live.** If you can't open web pages, reply only: BROWSING UNAVAILABLE.
2. **Start from the link we have.** Each college is listed with the CDS year we have and the link we used. Open the page that link came from (usually the school's institutional research, institutional effectiveness or "facts and figures" page) and look for a newer year.
3. **If that doesn't work, search.** Try `site:<the school's domain> "common data set"` and `"<college name>" "common data set" 2025-2026`.
4. **What counts as newer:** 2026-2027 if it's posted; otherwise 2025-2026. If the newest posted is the same year we already have, say so (see the output format). Never give a year older than the one we have.
5. **Link the document itself:** the PDF, Excel file or HTML page that holds the CDS tables, not the page that links to it. It must be on the school's own website. A Box, Dropbox, Google Drive or SharePoint link is fine only if the school's own page links to it.
6. **Read the year off the document**, from its title or first page, not from the link. Some schools label it by fall term ("Fall 2025" means 2025-2026).
7. **Don't guess.** If you can't find a newer file, say so. A wrong link is worse than none.

## Output format

Reply with **JSON Lines only**: one JSON object per line, one line per college, in the order listed. No intro, no code fences, no notes after.

Found a newer CDS:
{"slug":"<slug exactly as listed>","status":"newer","cdsYear":"2025-2026","url":"<direct https link to the CDS document>","title":"<the document's title as shown>","checkedPage":"<the page where you found the link>","concerns":null}

Newest posted is the year we already have:
{"slug":"<slug>","status":"same","cdsYear":"<that year>","url":null,"title":null,"checkedPage":"<the page you checked>","concerns":null}

Couldn't find it, or the school stopped posting:
{"slug":"<slug>","status":"not_found","cdsYear":null,"url":null,"title":null,"checkedPage":"<the pages you checked>","concerns":"<what happened, in one sentence>"}

JSON rules: every line must parse. Inside strings, write double quotes as \" (or use single quotes ' instead). No line breaks inside a line. Use "concerns" for anything odd, such as a file that won't open, a page that needs a login, or a year label that doesn't match the contents.

Do all {{COUNT}} colleges. If you get cut off, stop at the end of a complete line; I'll reply "continue" and you pick up with the next college.

## Colleges

Format: slug | name | city, state | school website | CDS year we have | link we have
