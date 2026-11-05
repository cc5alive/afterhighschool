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
  devToolbar: { enabled: false }
});
