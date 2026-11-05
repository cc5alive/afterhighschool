# afterhighschool.me

Honest, sourced guidance on what to do after high school. Live now: the homepage and waitlist, plus the universities section (unlisted until launch).

## How it works

- `src/` — the Astro site. `src/pages/` holds every route:
  - `/` homepage and waitlist, `/privacy`, `/methodology`
  - `/colleges` directory (search, filters, sort), `/colleges/[state]` and topic pages (`/colleges/test-optional`, `/colleges/net-price-under-20000`)
  - `/college/[slug]` one page per school (2,148 at the first pull)
  - `/compare?schools=a,b,c` up to four schools side by side
  - `/data/colleges.json` compact data used by the directory filters and compare
  - `/sitemap.xml` generated at build time
- `src/lib/data.js` loads the Scorecard snapshot and derives similar schools, state lists and the directory index.
- `src/lib/site.js` has `COLLEGES_LAUNCHED`. While it's `false`, college pages carry `noindex` and stay out of the sitemap. Flip it to `true` on launch day.
- `public/` static files copied as-is (CSS, the directory and compare scripts, favicon, robots.txt).
- `worker/index.js` — the Cloudflare Worker: serves the built site from `dist/`, adds security headers, redirects `www` to the apex domain, and handles `POST /api/waitlist` (D1 database `afterhighschool-waitlist`).

## Data

- `scripts/pull-scorecard.mjs` pulls every operating bachelor's/graduate-predominant school in the 50 states and DC from the College Scorecard API and writes:
  - `data/scorecard/latest.json` (what the site builds from)
  - `data/scorecard/snapshots/YYYY-MM-DD.json` (history)
  - `data/scorecard/report.md` (field coverage and what changed)
- `.github/workflows/pull-scorecard.yml` runs it every Monday (and on demand from the Actions tab) using the `SCORECARD_API_KEY` repo secret, and commits only when data changed. That commit triggers a redeploy, so pages stay current on their own.

## Deploys

Every push to `main` deploys through Cloudflare Workers Builds. `wrangler deploy` runs `npm run build` first (see `build.command` in `wrangler.jsonc`).

## Local development

```sh
npm install
npm run build && npx wrangler dev   # http://localhost:8787, includes the waitlist API
```

Local signups go to a local D1 copy, not production.

## Reading the waitlist

```sh
npx wrangler d1 execute afterhighschool-waitlist --remote --command "SELECT email, role, created_at FROM waitlist ORDER BY created_at DESC"
```

Or use the D1 console in the Cloudflare dashboard.

## Privacy

Collect only what the page says we collect (email, role, date). No ad trackers. Under-13s can't join. See `src/pages/privacy.astro`.
