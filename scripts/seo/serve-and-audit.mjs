#!/usr/bin/env node
/**
 * Serves ./dist on an ephemeral port, runs the mobile parity audit against it,
 * then shuts the server down and exits with the audit's exit code.
 *
 * Use after `vite build` (which runs the prerender plugin) to verify each
 * prerendered route ships with route-specific <title>, <meta>, canonical,
 * and JSON-LD in the raw HTML.
 */

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "../../dist");

// Static link-integrity check (fails fast before serving anything).
const linkCheck = spawn(
  process.execPath,
  [join(__dirname, "check-internal-links.mjs")],
  { stdio: "inherit" }
);
await new Promise((r) => linkCheck.on("exit", (code) => {
  if (code !== 0) process.exit(code ?? 1);
  r();
}));

if (!existsSync(ROOT)) {
  console.error(`[audit] dist/ not found at ${ROOT}. Run 'vite build' first.`);
  process.exit(2);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {}
  return null;
}

async function resolvePath(urlPath) {
  // Strip query/hash, decode, normalize, prevent traversal.
  const clean = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const safe = normalize(clean).replace(/^(\.\.[\/\\])+/, "");
  const abs = join(ROOT, safe);
  if (!abs.startsWith(ROOT)) return null;

  // Direct file hit
  let hit = await tryFile(abs);
  if (hit) return hit;
  // Directory -> index.html (prerendered route)
  hit = await tryFile(join(abs, "index.html"));
  if (hit) return hit;
  // SPA fallback
  return tryFile(join(ROOT, "index.html"));
}

const server = createServer(async (req, res) => {
  try {
    const file = await resolvePath(req.url || "/");
    if (!file) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(body);
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;
console.error(`[audit] serving ${ROOT} at ${base}`);

const child = spawn(
  process.execPath,
  [join(__dirname, "mobile-parity-audit.mjs")],
  {
    stdio: "inherit",
    env: { ...process.env, AUDIT_BASE_URL: base },
  }
);

child.on("exit", (code) => {
  server.close(() => process.exit(code ?? 1));
});
