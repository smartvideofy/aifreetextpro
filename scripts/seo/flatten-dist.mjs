#!/usr/bin/env node
/**
 * Flatten prerendered routes: dist/<route>/index.html  ->  dist/<route>.html
 *
 * Why: a route built as dist/<route>/index.html is served by Cloudflare Pages at
 * "/<route>/" and 308-redirects the clean "/<route>" -> "/<route>/". But our
 * sitemap (175/176 URLs) and every <link rel="canonical"> use the NON-slash form,
 * so each page's canonical URL immediately redirects — a site-wide redirect↔canonical
 * conflict that suppresses indexing. Netlify (Lovable's old host) served
 * <route>/index.html at "/<route>" directly; Cloudflare Pages does not.
 *
 * Flattening to dist/<route>.html makes Cloudflare serve "/<route>" with a 200
 * (matching the canonical + sitemap) and 308 "/<route>/" -> "/<route>".
 *
 * Leaves dist/index.html (root) and dist/404.html untouched. Idempotent.
 */
import { readdirSync, statSync, renameSync, rmdirSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = resolve(fileURLToPath(new URL(".", import.meta.url)), "../../dist");

let moved = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    walk(full); // process children first so empty dirs can be pruned
    const idx = join(full, "index.html");
    if (existsSync(idx)) {
      renameSync(idx, `${full}.html`); // dist/blog/foo/index.html -> dist/blog/foo.html
      moved++;
      try {
        rmdirSync(full); // remove only if now empty (no child routes/assets)
      } catch {
        /* dir still holds child route files — keep it */
      }
    }
  }
}

if (!existsSync(DIST)) {
  console.error(`flatten-dist: dist/ not found at ${DIST}`);
  process.exit(1);
}
walk(DIST);
console.log(`flatten-dist: flattened ${moved} route file(s) to <route>.html`);
