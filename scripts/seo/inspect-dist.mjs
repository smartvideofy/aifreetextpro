#!/usr/bin/env node
/**
 * Post-build diagnostic: confirms the prerender plugin actually produced a
 * per-route dist/<route>/index.html for every entry in prerender-routes.ts,
 * and that each file's <head> contains a route-specific <title> rather than
 * the homepage fallback.
 *
 * Why this exists: the live audit showed every URL on aifreetextpro.com
 * returning the byte-identical homepage HTML. This script tells you whether
 * (a) the build silently failed to prerender (fix: vite.config.ts), or
 * (b) the build is correct and the host is misrouting (fix: _redirects /
 *     vercel.json / Lovable publish config).
 *
 * Run with:  node scripts/seo/inspect-dist.mjs
 * Exit code: 0 = all routes prerendered, 1 = at least one missing/broken.
 */
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../..");
const DIST = resolve(ROOT, "dist");

// Must match the static homepage <title> in index.html. If an inner route
// shows this, the prerender captured the fallback head instead of the
// route's Helmet head.
const FALLBACK_TITLE_FRAGMENT = "1,000 Words Free, No Signup";

async function loadRoutes() {
  // dynamic import; pathToFileURL is required on Windows, where a raw
  // "C:\..." path is rejected by the ESM loader (ERR_UNSUPPORTED_ESM_URL_SCHEME).
  const mod = await import(pathToFileURL(resolve(ROOT, "scripts/seo/prerender-routes.ts")).href);
  return mod.prerenderRoutes;
}

function routeToFile(route) {
  if (route === "/") return resolve(DIST, "index.html");
  return resolve(DIST, route.replace(/^\//, ""), "index.html");
}

function extractTitle(html) {
  // Prefer Helmet (data-rh) title; fall back to first <title>.
  const rh = html.match(/<title[^>]*data-rh=["']true["'][^>]*>([\s\S]*?)<\/title>/i);
  if (rh) return rh[1].trim();
  const first = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return first ? first[1].trim() : "(no title)";
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  return m ? m[1] : "(no canonical)";
}

async function main() {
  if (!existsSync(DIST)) {
    console.error(`✖ dist/ not found at ${DIST}. Run "npm run build" first.`);
    process.exit(1);
  }
  const routes = await loadRoutes();
  console.log(`Inspecting ${routes.length} prerendered routes in ${DIST}\n`);

  const rows = [];
  let missing = 0;
  let fallbackTitle = 0;
  let wrongCanonical = 0;

  for (const route of routes) {
    const file = routeToFile(route);
    if (!existsSync(file)) {
      rows.push({ route, status: "MISSING", title: "-", canonical: "-", bytes: 0 });
      missing++;
      continue;
    }
    const html = readFileSync(file, "utf8");
    const title = extractTitle(html);
    const canonical = extractCanonical(html);
    const bytes = statSync(file).size;

    const hasFallback = route !== "/" && title.includes(FALLBACK_TITLE_FRAGMENT);
    const expectedCanonical = `https://aifreetextpro.com${route}`;
    const canonicalMismatch = canonical !== expectedCanonical && canonical !== "(no canonical)";

    if (hasFallback) fallbackTitle++;
    if (canonicalMismatch) wrongCanonical++;

    rows.push({
      route,
      status: hasFallback ? "FALLBACK" : canonicalMismatch ? "BAD_CANON" : "OK",
      title: title.slice(0, 70),
      canonical: canonical.slice(0, 70),
      bytes,
    });
  }

  const pad = (s, n) => String(s).padEnd(n).slice(0, n);
  console.log(
    pad("STATUS", 10) + pad("ROUTE", 50) + pad("TITLE", 72) + "CANONICAL"
  );
  console.log("-".repeat(190));
  for (const r of rows) {
    console.log(pad(r.status, 10) + pad(r.route, 50) + pad(r.title, 72) + r.canonical);
  }
  console.log("");
  console.log(
    `Summary: ${rows.length} total, ${missing} missing, ${fallbackTitle} using fallback title, ${wrongCanonical} wrong canonical`
  );

  if (missing || fallbackTitle || wrongCanonical) {
    console.error(
      "\n✖ Prerender output is INCOMPLETE. The build is the problem — fix vite.config.ts before debugging the host."
    );
    process.exit(1);
  }
  console.log(
    "\n✓ All routes prerendered with route-specific titles & canonicals. If production still serves the homepage HTML for these routes, the issue is host routing (see public/_redirects and public/vercel.json)."
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
