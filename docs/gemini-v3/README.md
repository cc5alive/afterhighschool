# Gemini depth round (v3)

Goal: bring the most-searched schools up to about four "What's special" facts each. Every school lists the facts it already has, so Gemini only adds new topics.

- Files are ordered most-searched first (size, with a boost for selective schools). 50 schools each.
- Use Gemini with Google Search (Deep Research or a model with search turned on). One file per new chat: paste the whole file as your message.
- If it stops partway, reply "continue". When it's done, copy the full reply into a .txt file named after the file (for example v3-file-01.txt) and send it to Claude.
- Quick check before sending: every line should start with {"slug": and the dates should be today's.

Regenerate the files (after more facts are published) with `node scripts/make-gemini-depth.mjs`.
Import results with `node scripts/import-highlights.mjs <file> --depth`.

## Redo files
Gemini's search budget runs out after about 15–20 schools, so long files come back mostly empty. `redo-NN.md` files hold 15 schools each, collected from schools that came back with "search budget" notes or unreadable lines. Make more with `node scripts/make-gemini-depth.mjs --redo <name> <slug,slug,...>`.
