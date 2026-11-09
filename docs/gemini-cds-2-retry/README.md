# Common Data Set round 2, retry (Gemini)

Colleges from round 2 where Gemini answered "no CDS" without a specific reason (no year, no login, no missing sections). Same instructions, plus: search the college's own site before saying none, and send the link even if the file won't open (Excel, Google Drive).

- One file per new Gemini chat with Google Search on. Save replies as cds2r-01.txt and so on.
- Import with `node scripts/import-cds.mjs <file>`.
- Colleges Gemini gave a specific reason for are not retried; they're in `data/cds/no-public-cds.json` under `reportedNone`.
