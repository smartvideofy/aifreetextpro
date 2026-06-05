#!/usr/bin/env node
// Asserts every href/to= in the sitewide nav components resolves to a Route in App.tsx.
// Run: node scripts/seo/check-internal-links.mjs
// Exits 1 on any broken slug.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const APP = fs.readFileSync(path.join(ROOT, 'src/App.tsx'), 'utf8');
const ROUTES = new Set([...APP.matchAll(/<Route\s+path="([^"]+)"/g)].map(m => m[1]));

// Treat parameterized routes as covered if their non-param prefix matches.
const paramRoutes = [...ROUTES].filter(r => r.includes(':')).map(r => r.split('/:')[0]);
const resolves = (slug) =>
  ROUTES.has(slug) || paramRoutes.some(p => slug.startsWith(p + '/'));

const FILES = [
  'src/components/InternalLinks.tsx',
  'src/components/PillarHubLinks.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
];

let broken = 0;
for (const f of FILES) {
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) continue;
  const src = fs.readFileSync(full, 'utf8');
  const slugs = new Set();
  for (const m of src.matchAll(/href[:=]\s*"(\/[^"#?]*)"/g)) slugs.add(m[1]);
  for (const m of src.matchAll(/to=\s*"(\/[^"#?]*)"/g)) slugs.add(m[1]);
  for (const slug of slugs) {
    if (slug === '/') continue;
    if (!resolves(slug)) {
      console.error(`BROKEN ${f}: ${slug}`);
      broken++;
    }
  }
}

if (broken > 0) {
  console.error(`\n${broken} broken internal link slug(s).`);
  process.exit(1);
}
console.log('Internal-link integrity OK.');
