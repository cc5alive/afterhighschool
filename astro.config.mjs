import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://afterhighschool.me',
  output: 'static',
  outDir: './dist',
  trailingSlash: 'never',
  build: {
    format: 'file',
    // The Worker's Content-Security-Policy only allows same-origin stylesheets.
    inlineStylesheets: 'never'
  },
  devToolbar: { enabled: false },
  // Never inline small scripts into the page: the Worker's Content-Security-Policy only allows
  // same-origin script files, so an inlined script (like the menu's click-away handler) wouldn't run.
  vite: { build: { assetsInlineLimit: 0 } }
});
