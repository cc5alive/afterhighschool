// Directory: loads every school once, then filters and sorts in the browser.
(() => {
  const form = document.getElementById('filters');
  const list = document.getElementById('results');
  const countEl = document.getElementById('result-count');
  const emptyEl = document.getElementById('empty');
  const moreBtn = document.getElementById('show-more');
  const sortEl = document.getElementById('sort');
  if (!form || !list) return;

  const PAGE = 50;
  const preset = JSON.parse(form.dataset.preset || '{}');
  const OWN = { public: 'Public', private_nonprofit: 'Private nonprofit', private_for_profit: 'Private for-profit' };
  const pct = (v) => (v == null ? '—' : `${Math.round(v * 100)}%`);
  const money = (v) => (v == null ? '—' : `$${Math.round(v).toLocaleString('en-US')}`);
  const int = (v) => (v == null ? '—' : Math.round(v).toLocaleString('en-US'));
  const sizeBand = (n) => (n == null ? '' : n < 2000 ? 'small' : n <= 15000 ? 'medium' : 'large');

  let rows = [];
  let states = {};
  let shown = PAGE;

  // Apply URL params (and any page preset) to the form controls.
  const params = new URLSearchParams(location.search);
  for (const el of [...form.elements, sortEl]) {
    if (!el.name) continue;
    const v = params.get(el.name) ?? preset[el.name];
    if (v != null) el.value = v;
  }
  if ([...form.querySelectorAll('.more-grid select')].some((el) => el.value)) {
    form.querySelector('.more-filters').open = true;
  }

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  function card(r) {
    const li = el('li', 'card');
    const a = el('a', 'card-link');
    a.href = `/college/${r.slug}`;
    a.append(el('span', 'card-name', r.name), el('span', 'card-where', `${r.city}, ${states[r.state] || r.state}`));
    const dl = el('dl', 'card-facts');
    const ar = r.ar != null ? pct(r.ar) : r.oa ? 'Open admission' : '—';
    for (const [k, v] of [['Type', OWN[r.own] || '—'], ['Undergrads', int(r.ug)], ['Admit rate', ar], ['Avg net price', money(r.np)], ['Graduates', pct(r.gr)]]) {
      const d = el('div');
      d.append(el('dt', null, k), el('dd', null, v));
      dl.append(d);
    }
    const main = el('div', 'card-main');
    const save = el('button', 'linkish card-save', 'Save to my list');
    save.type = 'button';
    Object.assign(save.dataset, { saveSlug: r.slug, offText: 'Save to my list', onText: 'Saved' });
    save.setAttribute('aria-pressed', 'false');
    save.setAttribute('aria-label', `Save ${r.name} to my list`);
    main.append(a, save);
    li.append(main, dl);
    return li;
  }

  function matches(r, f) {
    if (f.q) {
      const hay = `${r.name} ${r.city}`.toLowerCase();
      if (!f.q.split(/\s+/).every((w) => hay.includes(w))) return false;
    }
    if (f.state && r.state !== f.state) return false;
    if (f.own && r.own !== f.own) return false;
    if (f.ar) {
      if (f.ar === 'open') { if (!r.oa) return false; }
      else {
        const [lo, hi] = f.ar.split('-').map(Number);
        if (r.ar == null || r.ar < lo || r.ar >= hi) return false;
      }
    }
    if (f.np && (r.np == null || r.np >= Number(f.np))) return false;
    if (f.size && sizeBand(r.ug) !== f.size) return false;
    if (f.set && r.set !== f.set) return false;
    if (f.tp === 'optional' && !['considered_not_required', 'not_considered'].includes(r.tp)) return false;
    if (f.tp === 'required' && r.tp !== 'required') return false;
    return true;
  }

  const SORTS = {
    name: (a, b) => a.name.localeCompare(b.name),
    ar: (a, b) => (a.ar ?? 9) - (b.ar ?? 9),
    np: (a, b) => (a.np ?? 1e9) - (b.np ?? 1e9),
    gr: (a, b) => (b.gr ?? -1) - (a.gr ?? -1),
    earn: (a, b) => (b.earn ?? -1) - (a.earn ?? -1),
    ug: (a, b) => (b.ug ?? -1) - (a.ug ?? -1)
  };

  function current() {
    const f = Object.fromEntries(new FormData(form).entries());
    f.q = (f.q || '').trim().toLowerCase();
    f.sort = sortEl.value;
    return f;
  }

  function syncUrl(f) {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(f)) {
      if (v && !(k === 'sort' && v === 'name') && preset[k] !== v) p.set(k, v);
    }
    const qs = p.toString();
    history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
  }

  function render(resetPage = true) {
    if (!rows.length) return;
    if (resetPage) shown = PAGE;
    const f = current();
    const hits = rows.filter((r) => matches(r, f)).sort(SORTS[f.sort] || SORTS.name);
    list.replaceChildren(...hits.slice(0, shown).map(card));
    window.dispatchEvent(new CustomEvent('ahs-list-change')); // refresh Save buttons
    countEl.textContent = `${hits.length.toLocaleString('en-US')} ${hits.length === 1 ? 'school' : 'schools'}`;
    emptyEl.hidden = hits.length > 0;
    moreBtn.hidden = hits.length <= shown;
    syncUrl(f);
  }

  let t;
  form.addEventListener('input', () => { clearTimeout(t); t = setTimeout(render, 120); });
  form.addEventListener('change', () => render());
  form.addEventListener('submit', (e) => { e.preventDefault(); render(); });
  moreBtn.addEventListener('click', () => { shown += PAGE; render(false); });

  fetch('/data/colleges.json')
    .then((r) => r.json())
    .then((d) => { rows = d.rows; states = d.states; render(); })
    .catch(() => { countEl.textContent = 'Filters are unavailable right now. Browse by state below.'; });
})();
