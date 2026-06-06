#!/usr/bin/env node
// Internal-link & canonical integrity guardrail.
// Validates that:
//  1. Every href/to= in sitewide nav components resolves to a Route in App.tsx.
//  2. No literal `:param` placeholders leak into rendered links.
//  3. Parameterized routes (e.g. /help-center/:collectionId) are linked with
//     non-empty, URL-safe segment values.
//  4. Query strings on internal links parse cleanly and use kebab/camel keys.
//  5. Every `<link rel="canonical" href="...">` in src/pages/**:
//       - uses the canonical origin https://aifreetextpro.com
//       - has no trailing slash (except root)
//       - has no query string or fragment
//       - resolves to a known Route (concrete or parameterized prefix)
//
// Run: node scripts/seo/check-internal-links.mjs
// Exits 1 on any violation.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CANONICAL_ORIGIN = 'https://aifreetextpro.com';

// ---------- Route table ----------
const APP = fs.readFileSync(path.join(ROOT, 'src/App.tsx'), 'utf8');
const ROUTES = new Set(
  [...APP.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1])
);
const PARAM_ROUTES = [...ROUTES]
  .filter((r) => r.includes(':'))
  .map((r) => ({ raw: r, prefix: r.split('/:')[0], segments: r.split('/').length }));

const KEY_PATTERN = /^[a-z][a-z0-9_-]*$/i;
const SEGMENT_PATTERN = /^[a-z0-9][a-z0-9._-]*$/i;

const resolveConcrete = (slug) => {
  if (ROUTES.has(slug)) return true;
  for (const p of PARAM_ROUTES) {
    if (!slug.startsWith(p.prefix + '/')) continue;
    if (slug.split('/').length !== p.segments) continue;
    return true;
  }
  return false;
};

const errors = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);

// ---------- Nav components: hrefs and to= ----------
const NAV_FILES = [
  'src/components/InternalLinks.tsx',
  'src/components/PillarHubLinks.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/components/MobileNav.tsx',
];

for (const f of NAV_FILES) {
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) continue;
  const src = fs.readFileSync(full, 'utf8');
  const links = new Set();
  for (const m of src.matchAll(/href[:=]\s*"(\/[^"]*)"/g)) links.add(m[1]);
  for (const m of src.matchAll(/to=\s*"(\/[^"]*)"/g)) links.add(m[1]);

  for (const raw of links) {
    if (raw === '/') continue;

    // Literal :param placeholder leak
    if (/\/:[A-Za-z]/.test(raw)) {
      err(f, `literal route param leaked into link: ${raw}`);
      continue;
    }

    // Split path / query / fragment
    const hashIdx = raw.indexOf('#');
    const noHash = hashIdx >= 0 ? raw.slice(0, hashIdx) : raw;
    const qIdx = noHash.indexOf('?');
    const pathOnly = qIdx >= 0 ? noHash.slice(0, qIdx) : noHash;
    const query = qIdx >= 0 ? noHash.slice(qIdx + 1) : '';

    // Path segment hygiene
    const segs = pathOnly.split('/').slice(1);
    for (const s of segs) {
      if (s === '') {
        err(f, `empty path segment in ${raw}`);
      } else if (!SEGMENT_PATTERN.test(s)) {
        err(f, `invalid path segment "${s}" in ${raw}`);
      }
    }

    // Route resolution
    if (!resolveConcrete(pathOnly)) {
      err(f, `unresolved route: ${pathOnly} (from ${raw})`);
    }

    // Query string validation
    if (qIdx >= 0) {
      try {
        const params = new URLSearchParams(query);
        for (const [k, v] of params) {
          if (!KEY_PATTERN.test(k)) {
            err(f, `invalid query key "${k}" in ${raw}`);
          }
          if (v === '') {
            err(f, `empty query value for "${k}" in ${raw}`);
          }
        }
      } catch {
        err(f, `unparseable query string in ${raw}`);
      }
    }
  }
}

// ---------- Canonical hrefs across src/pages/** ----------
const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (/\.(t|j)sx?$/.test(entry.name)) out.push(p);
  }
  return out;
};

const PAGE_FILES = walk(path.join(ROOT, 'src/pages'));
const CANONICAL_RE = /rel="canonical"\s+href="([^"{}]+)"/g;

for (const f of PAGE_FILES) {
  const src = fs.readFileSync(f, 'utf8');
  const rel = path.relative(ROOT, f);
  for (const m of src.matchAll(CANONICAL_RE)) {
    const href = m[1];

    if (!href.startsWith(CANONICAL_ORIGIN + '/') && href !== CANONICAL_ORIGIN) {
      err(rel, `canonical must start with ${CANONICAL_ORIGIN}: ${href}`);
      continue;
    }

    const rest = href.slice(CANONICAL_ORIGIN.length) || '/';
    if (rest.includes('?') || rest.includes('#')) {
      err(rel, `canonical must not contain query/fragment: ${href}`);
      continue;
    }
    if (rest !== '/' && rest.endsWith('/')) {
      err(rel, `canonical must not have trailing slash: ${href}`);
      continue;
    }
    if (!resolveConcrete(rest)) {
      err(rel, `canonical points to unknown route: ${rest}`);
    }
  }
}

// ---------- Report ----------
if (errors.length) {
  for (const e of errors) console.error('BROKEN ' + e);
  console.error(`\n${errors.length} internal-link / canonical issue(s).`);
  process.exit(1);
}
console.log('Internal-link + canonical integrity OK.');
