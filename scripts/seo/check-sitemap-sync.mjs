#!/usr/bin/env node
/**
 * Build-time guardrail for public/sitemap.xml.
 *
 * Verifies that:
 *   1. Every <loc> in the sitemap resolves to a real, CANONICAL route in
 *      src/App.tsx (either a static <Route> or one that matches a
 *      parameterized <Route> like /help-center/:collectionId).
 *   2. No <loc> points at a route that renders <SEORedirect> or
 *      <ExternalSEORedirect> — those are 301 stubs and must not be indexed.
 *   3. Every canonical static route in App.tsx that is intended to be
 *      indexable is present in the sitemap. Routes the project intentionally
 *      excludes (legal pages, cookie settings, etc.) live in EXCLUDED_ROUTES
 *      below — adding a new one is an explicit decision.
 *   4. Every <loc> uses the canonical origin (https://aifreetextpro.com),
 *      has no trailing slash (except "/"), and no query/fragment.
 *
 * Run with:  node scripts/seo/check-sitemap-sync.mjs
 * Exits non-zero on the first failure so the build fails loudly.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../..");
const APP = resolve(ROOT, "src/App.tsx");
const SITEMAP = resolve(ROOT, "public/sitemap.xml");
const CANONICAL_ORIGIN = "https://aifreetextpro.com";

// Canonical, indexable static routes that we DELIBERATELY keep out of the
// sitemap (legal boilerplate, settings pages crawlers don't need, etc.).
// Adding to this list is the only sanctioned way to keep the build green
// when a route exists but should not appear in the sitemap.
const EXCLUDED_ROUTES = new Set([
  "/privacy-policy",
  "/terms-of-service",
  "/editorial-guidelines",
  "/cookie-settings",
]);

if (!existsSync(APP)) {
  console.error(`✖ Could not find ${APP}`);
  process.exit(2);
}
if (!existsSync(SITEMAP)) {
  console.error(`✖ Could not find ${SITEMAP}`);
  process.exit(2);
}

const appSrc = readFileSync(APP, "utf8");
const sitemapSrc = readFileSync(SITEMAP, "utf8");

// --- 1. Parse routes from App.tsx ----------------------------------------
const routeRe = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)/g;
const canonicalStatic = []; // indexable, fully-specified paths
const canonicalParam = []; // patterns like /help-center/:collectionId
const redirectPaths = new Set(); // SEORedirect / ExternalSEORedirect routes

let m;
while ((m = routeRe.exec(appSrc))) {
  const [, path, el] = m;
  if (path === "*") continue;
  if (el === "SEORedirect" || el === "ExternalSEORedirect") {
    redirectPaths.add(path);
    continue;
  }
  if (path.includes(":")) {
    canonicalParam.push(path);
  } else {
    canonicalStatic.push(path);
  }
}

const canonicalStaticSet = new Set(canonicalStatic);

// Convert "/help-center/:collectionId/:articleSlug" → /^\/help-center\/[^/]+\/[^/]+$/
const paramMatchers = canonicalParam.map((p) => {
  const pattern = p
    .split("/")
    .map((seg) => (seg.startsWith(":") ? "[^/]+" : seg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
    .join("/");
  return new RegExp(`^${pattern}$`);
});

function isCanonicalRoute(path) {
  if (canonicalStaticSet.has(path)) return true;
  return paramMatchers.some((r) => r.test(path));
}

// --- 2. Parse <loc> entries from sitemap ---------------------------------
const locs = [...sitemapSrc.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((x) => x[1]);

const errors = [];

for (const loc of locs) {
  if (!loc.startsWith(`${CANONICAL_ORIGIN}/`) && loc !== `${CANONICAL_ORIGIN}/`) {
    errors.push(`Wrong origin in sitemap <loc>: ${loc} (expected ${CANONICAL_ORIGIN})`);
    continue;
  }
  if (loc.includes("?") || loc.includes("#")) {
    errors.push(`Sitemap <loc> must not contain query/fragment: ${loc}`);
    continue;
  }
  const path = loc.slice(CANONICAL_ORIGIN.length) || "/";
  if (path !== "/" && path.endsWith("/")) {
    errors.push(`Sitemap <loc> must not have trailing slash: ${loc}`);
    continue;
  }
  if (redirectPaths.has(path)) {
    errors.push(
      `Sitemap includes redirect route ${path} — remove it (301 stubs must not be indexed).`
    );
    continue;
  }
  if (!isCanonicalRoute(path)) {
    errors.push(
      `Sitemap includes ${path} but no matching canonical <Route> exists in src/App.tsx.`
    );
  }
}

// --- 3. Every canonical static route should be in sitemap (or excluded) --
const sitemapPathSet = new Set(
  locs
    .filter((l) => l.startsWith(CANONICAL_ORIGIN))
    .map((l) => l.slice(CANONICAL_ORIGIN.length) || "/")
);

for (const route of canonicalStatic) {
  if (EXCLUDED_ROUTES.has(route)) continue;
  if (!sitemapPathSet.has(route)) {
    errors.push(
      `Canonical route ${route} is missing from public/sitemap.xml. Add it, or add to EXCLUDED_ROUTES in scripts/seo/check-sitemap-sync.mjs if intentional.`
    );
  }
}

// --- 4. Report -----------------------------------------------------------
if (errors.length) {
  console.error("\n✖ Sitemap sync check failed:\n");
  for (const e of errors) console.error("  • " + e);
  console.error(
    `\n${errors.length} issue(s). Sitemap entries: ${locs.length}, canonical static routes: ${canonicalStatic.length}, canonical param routes: ${canonicalParam.length}, redirect routes: ${redirectPaths.size}.`
  );
  process.exit(1);
}

console.log(
  `✓ Sitemap in sync — ${locs.length} <loc> entries, all map to canonical routes; ${canonicalStatic.length} static + ${canonicalParam.length} param routes, ${redirectPaths.size} redirect routes excluded.`
);
