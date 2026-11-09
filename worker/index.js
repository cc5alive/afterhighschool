// afterhighschool.me — Cloudflare Worker
// Serves the static site from /public and handles the waitlist API.

const APEX = 'afterhighschool.me';
const ROLES = new Set(['student', 'parent', 'counselor', 'other']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SCHEMA = `CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)`;

let schemaReady = false;

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' https://static.cloudflareinsights.com",
    "style-src 'self' https://fonts.googleapis.com",
    // Bar widths and chart marker positions are set with style="" attributes. Without this the
    // browser drops them: every GPA bar draws full width and the "Where you'd stand" markers stack at the left.
    // Stylesheets and <style> blocks stay limited to style-src above.
    "style-src-attr 'unsafe-inline'",
    "font-src https://fonts.gstatic.com",
    "img-src 'self' data:",
    "connect-src 'self' https://cloudflareinsights.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ')
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...SECURITY_HEADERS }
  });
}

function withSecurityHeaders(response) {
  const res = new Response(response.body, response);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) res.headers.set(k, v);
  return res;
}

async function readBody(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

async function joinWaitlist(request, env) {
  let body;
  try {
    body = await readBody(request);
  } catch {
    return json({ error: 'Send your email address to sign up.' }, 400);
  }

  // Honeypot: real people never fill this field. Pretend it worked.
  if (body.website) return json({ ok: true });

  const email = String(body.email || '').trim().toLowerCase();
  const role = ROLES.has(body.role) ? body.role : 'other';
  const age13 = body.age13 === true || body.age13 === 'yes' || body.age13 === 'true';

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ error: 'Enter an email address like you@example.com.' }, 400);
  }
  if (!age13) {
    return json({ error: 'You need to be 13 or older to sign up.' }, 400);
  }

  try {
    if (!schemaReady) {
      await env.DB.prepare(SCHEMA).run();
      schemaReady = true;
    }
    await env.DB.prepare('INSERT OR IGNORE INTO waitlist (email, role) VALUES (?, ?)')
      .bind(email, role)
      .run();
  } catch (err) {
    console.error('waitlist insert failed', err);
    return json({ error: "That didn't go through. Try again in a minute." }, 500);
  }

  // A form post without JavaScript lands back on the page.
  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/html')) {
    return Response.redirect(`https://${APEX}/?joined=1#join`, 303);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${APEX}`) {
      url.hostname = APEX;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/waitlist') {
      if (request.method !== 'POST') return json({ error: 'Use POST to sign up.' }, 405);
      return joinWaitlist(request, env);
    }

    return withSecurityHeaders(await env.ASSETS.fetch(request));
  }
};
