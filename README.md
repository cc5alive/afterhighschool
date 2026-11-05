# afterhighschool.me

Honest, sourced guidance on what to do after high school — starting with a coming-soon page and waitlist.

## How it works

- `public/` — the static site (HTML, CSS, JS, favicon). Served by the Worker's assets binding.
- `src/worker.js` — Cloudflare Worker: serves `public/`, adds security headers, redirects `www` to the apex domain, and handles `POST /api/waitlist`.
- Waitlist signups go to the D1 database `afterhighschool-waitlist` (table `waitlist`: email, role, created_at). The table is created automatically on the first signup.

## Deploys

Every push to `main` deploys automatically through Cloudflare Workers Builds (`npx wrangler deploy`). The Worker is attached to `afterhighschool.me` and `www.afterhighschool.me` via `routes` in `wrangler.jsonc`.

## Local development

```sh
npm install
npx wrangler dev
```

Open http://localhost:8787. Local signups go to a local D1 copy, not production.

## Reading the waitlist

```sh
npx wrangler d1 execute afterhighschool-waitlist --remote --command "SELECT email, role, created_at FROM waitlist ORDER BY created_at DESC"
```

Or open the database in the Cloudflare dashboard under Storage & databases → D1.

## Privacy

Collect only what the page says we collect (email, role, date). No ad trackers. Under-13s can't join. See `public/privacy.html`.
