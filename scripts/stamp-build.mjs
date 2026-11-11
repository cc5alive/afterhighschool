// Writes dist/build.txt with the commit this build came from, so scripts can tell when a deploy is live.
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
let sha = process.env.WORKERS_CI_COMMIT_SHA || process.env.GITHUB_SHA || '';
if (!sha) { try { sha = execSync('git rev-parse HEAD').toString().trim(); } catch { sha = 'unknown'; } }
writeFileSync('dist/build.txt', `${sha}\n`);
console.log(`build.txt: ${sha}`);
