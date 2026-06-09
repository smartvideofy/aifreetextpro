#!/usr/bin/env node
// Refreshes <lastmod> in public/sitemap.xml to today's date.
// Runs in prebuild (and predev) to keep crawl signals fresh without rewriting URLs.
// Per project memory: do NOT regenerate the URL set; only update lastmod stamps.

import fs from "node:fs";
import path from "node:path";

const SITEMAP = path.resolve("public/sitemap.xml");
if (!fs.existsSync(SITEMAP)) {
  console.error("sitemap.xml not found at", SITEMAP);
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const before = fs.readFileSync(SITEMAP, "utf8");
const after = before.replace(
  /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
  `<lastmod>${today}</lastmod>`,
);

if (before === after) {
  console.log(`sitemap.xml lastmod already current (${today}); no change.`);
  process.exit(0);
}

fs.writeFileSync(SITEMAP, after);
const count = (after.match(/<lastmod>/g) || []).length;
console.log(`sitemap.xml lastmod refreshed → ${today} (${count} entries).`);
