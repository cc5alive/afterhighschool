// My list: schools a student saved, kept in this browser only (localStorage), never sent to us.
const KEY = 'ahs-list';
export const loadList = () => { try { const v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []; } catch { return []; } };
export const saveList = (list) => {
  try { localStorage.setItem(KEY, JSON.stringify([...new Set(list)])); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent('ahs-list-change'));
};
export const toggleSaved = (slug) => {
  const list = loadList();
  saveList(list.includes(slug) ? list.filter((x) => x !== slug) : [...list, slug]);
  return !list.includes(slug);
};

// Keep every "Save" button and the header count in sync with the list.
export function wireSaveButtons() {
  const sync = () => {
    const list = loadList();
    for (const b of document.querySelectorAll('[data-save-slug]')) {
      const on = list.includes(b.dataset.saveSlug);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.textContent = on ? (b.dataset.onText || 'Saved to my list') : (b.dataset.offText || 'Save to my list');
      // The accessible name starts with the visible text, then says which school.
      if (b.dataset.name) b.setAttribute('aria-label', `${b.textContent}: ${b.dataset.name}`);
    }
    for (const c of document.querySelectorAll('[data-list-count]')) c.textContent = list.length ? ` (${list.length})` : '';
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-save-slug]');
    if (!b) return;
    e.preventDefault();
    toggleSaved(b.dataset.saveSlug);
  });
  window.addEventListener('ahs-list-change', sync);
  window.addEventListener('storage', (e) => { if (e.key === KEY) sync(); });
  sync();
}
