// Compare: up to four schools in columns. State lives in the URL (?schools=a,b,c) so it can be shared.
(() => {
  const table = document.getElementById('compare');
  const empty = document.getElementById('compare-empty');
  const input = document.getElementById('pick');
  const suggest = document.getElementById('suggest');
  if (!table) return;

  const MAX = 4;
  const OWN = { public: 'Public', private_nonprofit: 'Private nonprofit', private_for_profit: 'Private for-profit' };
  const SET = { city: 'City', suburb: 'Suburb', town: 'Town', rural: 'Rural' };
  const TP = { required: 'Required', recommended: 'Recommended', considered_not_required: 'Test-optional', not_considered: 'Test-blind' };
  const pct = (v) => (v == null ? null : `${Math.round(v * 100)}%`);
  const money = (v) => (v == null ? null : `$${Math.round(v).toLocaleString('en-US')}`);
  const int = (v) => (v == null ? null : Math.round(v).toLocaleString('en-US'));
  const range = (a, b) => (a && b ? `${a}–${b}` : null);

  const ROWS = [
    ['Location', (r, st) => `${r.city}, ${st[r.state] || r.state}`],
    ['Type', (r) => OWN[r.own]],
    ['Setting', (r) => SET[r.set]],
    ['Undergraduates', (r) => int(r.ug)],
    ['Admit rate', (r) => (r.ar != null ? pct(r.ar) : r.oa ? 'Open admission' : null)],
    ['Test policy', (r) => TP[r.tp]],
    // Total range only from a school's own report; otherwise Scorecard's section ranges, never added together.
    ['SAT (middle 50%)', (r) => range(r.satL, r.satH) || (r.satSec ? `Reading ${r.satSec[0]}–${r.satSec[1]}, math ${r.satSec[2]}–${r.satSec[3]}` : null)],
    ['ACT (middle 50%)', (r) => range(r.actL, r.actH)],
    ['Average net price', (r) => money(r.np)],
    ['Tuition, in-state', (r) => money(r.tin)],
    ['Tuition, out-of-state', (r) => (r.own === 'public' ? money(r.tout) : money(r.tin))],
    ['Graduation rate (6 years)', (r) => pct(r.gr)],
    ['Came back for year two', (r) => pct(r.rr)],
    ['Median earnings (10 years)', (r) => money(r.earn)],
    ['Median debt at graduation', (r) => money(r.debt)],
    ['Receive Pell grants', (r) => pct(r.pell)]
  ];

  let rows = [], states = {}, bySlug = new Map();
  let picked = (new URLSearchParams(location.search).get('schools') || '').split(',').filter(Boolean).slice(0, MAX);

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  function save() {
    const qs = picked.length ? `?schools=${picked.join(',')}` : '';
    history.replaceState(null, '', `${location.pathname}${qs}`);
  }

  function render() {
    const cols = picked.map((s) => bySlug.get(s)).filter(Boolean);
    empty.hidden = cols.length > 0;
    table.hidden = cols.length === 0;
    input.disabled = cols.length >= MAX;
    input.placeholder = cols.length >= MAX ? 'Remove a school to add another' : 'Start typing a college name';
    if (!cols.length) { table.replaceChildren(); return; }

    const thead = el('thead');
    const hr = el('tr');
    hr.append(el('td'));
    for (const r of cols) {
      const th = el('th');
      th.scope = 'col';
      const a = el('a', null, r.name);
      a.href = `/college/${r.slug}`;
      const rm = el('button', 'remove', 'Remove');
      rm.type = 'button';
      rm.setAttribute('aria-label', `Remove ${r.name}`);
      rm.addEventListener('click', () => { picked = picked.filter((s) => s !== r.slug); save(); render(); });
      th.append(a, rm);
      hr.append(th);
    }
    thead.append(hr);

    const tbody = el('tbody');
    for (const [label, fn] of ROWS) {
      const tr = el('tr');
      const th = el('th', null, label);
      th.scope = 'row';
      tr.append(th);
      for (const r of cols) {
        const v = fn(r, states);
        tr.append(el('td', v == null ? 'na' : null, v ?? 'Not reported'));
      }
      tbody.append(tr);
    }
    table.replaceChildren(thead, tbody);
  }

  function showSuggestions() {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { suggest.hidden = true; return; }
    const words = q.split(/\s+/);
    const hits = rows
      .filter((r) => !picked.includes(r.slug) && words.every((w) => `${r.name} ${r.al || ''} ${r.city}`.toLowerCase().includes(w)))
      // Short names like "UCLA" come from the school's alias in federal data: an exact alias match goes first.
      .map((r) => ({ r, k: ((r.al || '').toLowerCase().split(/\s*,\s*/).includes(q) ? -1 : r.name.toLowerCase().startsWith(q) ? 0 : r.name.toLowerCase().includes(q) ? 1 : 2) }))
      .sort((a, b) => a.k - b.k || (b.r.ug ?? 0) - (a.r.ug ?? 0))
      .slice(0, 8)
      .map((x) => x.r);
    if (!hits.length) {
      const li = el('li', 'suggest-empty', `No colleges match "${input.value.trim()}". Try part of the full name, like "California", or the city.`);
      suggest.replaceChildren(li);
      suggest.hidden = false;
      return;
    }
    suggest.replaceChildren(...hits.map((r) => {
      const li = el('li');
      li.setAttribute('role', 'option');
      const b = el('button', null, r.name);
      b.type = 'button';
      b.append(document.createTextNode(' '), el('small', null, `${r.city}, ${r.state}`));
      b.addEventListener('click', () => {
        if (picked.length < MAX) picked.push(r.slug);
        input.value = '';
        suggest.hidden = true;
        save(); render(); input.focus();
      });
      li.append(b);
      return li;
    }));
    suggest.hidden = hits.length === 0;
  }

  input.addEventListener('input', showSuggestions);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { const b = suggest.querySelector('button'); if (b) { e.preventDefault(); b.focus(); } }
    if (e.key === 'Escape') suggest.hidden = true;
  });
  suggest.addEventListener('keydown', (e) => {
    const items = [...suggest.querySelectorAll('button')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < items.length - 1) { e.preventDefault(); items[i + 1].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? items[i - 1] : input).focus(); }
    if (e.key === 'Escape') { suggest.hidden = true; input.focus(); }
  });
  document.getElementById('picker').addEventListener('submit', (e) => {
    e.preventDefault();
    const b = suggest.querySelector('button');
    if (b) b.click();
  });

  // A shared link names schools before the data arrives: say so instead of "Pick a school".
  const emptyText = empty.textContent;
  if (picked.length) empty.textContent = 'Loading your comparison…';
  fetch('/data/colleges.json')
    .then((r) => r.json())
    .then((d) => {
      rows = d.rows; states = d.states;
      bySlug = new Map(rows.map((r) => [r.slug, r]));
      picked = picked.filter((s) => bySlug.has(s));
      empty.textContent = emptyText;
      render();
    })
    .catch(() => { empty.textContent = 'Compare is unavailable right now. Try again in a minute.'; });
})();
