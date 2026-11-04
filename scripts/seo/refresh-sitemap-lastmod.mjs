#!/usr/bin/env node
// Sets <lastmod> in public/sitemap.xml to today for the routes you name, and
// only those: run it when a page's content really changed (facts, prices,
// advice, new sections), not for builds, styling or refactors.
//
//   npm run sitemap:touch -- /pricing /vs/phrasly /help-center/troubleshooting
//
// It used to run on every build and dev start and stamp all URLs with the same
// date, which tells search engines every page changed when none did.

import fs from "node:fs";
import path from "node:path";

const SITEMAP = path.resolve("public/sitemap.xml");
const ORIGIN = "https://aifreetextpro.com";
const routes = process.argv.slice(2);

if (!routes.length) {
  console.log("Usage: npm run sitemap:touch -- /route [/route ...]");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
let xml = fs.readFileSync(SITEMAP, "utf8");
let failed = false;

for (const route of routes) {
  const loc = route === "/" ? `${ORIGIN}/` : `${ORIGIN}${route.replace(/\/+$/, "")}`;
  const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const entry = new RegExp(`(<loc>\\s*${escaped}\\s*</loc>\\s*<lastmod>)\\d{4}-\\d{2}-\\d{2}(</lastmod>)`);
  if (!entry.test(xml)) {
    console.error(`Not in sitemap (or has no <lastmod>): ${route}`);
    failed = true;
    continue;
  }
  xml = xml.replace(entry, `$1${today}$2`);
  console.log(`${route} -> ${today}`);
}

fs.writeFileSync(SITEMAP, xml);
process.exit(failed ? 1 : 0);
