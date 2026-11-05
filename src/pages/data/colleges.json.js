import { indexRows, STATE_NAMES, pulledAt } from '../../lib/data.js';

// Compact data for the directory filters and the compare view.
export function GET() {
  return new Response(JSON.stringify({ pulledAt, states: STATE_NAMES, rows: indexRows }), {
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}
