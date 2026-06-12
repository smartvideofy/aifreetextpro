// Routes to prerender at build time, derived from public/sitemap.xml so the
// two can never drift apart: every URL we ask Google to index ships with
// baked-in per-route <title>/<meta>/canonical/JSON-LD, and crawlers that skip
// JS never see homepage fallback meta on an inner route.
// check-sitemap-sync.mjs (prebuild) guarantees every sitemap <loc> maps to a
// real canonical <Route> in src/App.tsx before this list is consumed.
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP = resolve(__dirname, "../../public/sitemap.xml");
const CANONICAL_ORIGIN = "https://aifreetextpro.com";

// Indexable routes deliberately kept out of the sitemap (legal boilerplate,
// settings) but still served — prerender them too so they don't fall back to
// homepage meta for non-JS crawlers.
const EXTRA_ROUTES = [
  "/privacy-policy",
  "/terms-of-service",
  "/editorial-guidelines",
  "/cookie-settings",
];

const sitemapRoutes = [...readFileSync(SITEMAP, "utf8").matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
  .map((m) => m[1])
  .filter((loc) => loc.startsWith(CANONICAL_ORIGIN))
  .map((loc) => loc.slice(CANONICAL_ORIGIN.length) || "/");

export const prerenderRoutes = Array.from(new Set([...sitemapRoutes, ...EXTRA_ROUTES]));

// Routes that should be prerendered with verbose Helmet flush logging.
// Override at build time:  PRERENDER_DEBUG_ROUTES=/ai-checker,/pricing
export const prerenderDebugRoutes: string[] = (() => {
  const env = (typeof process !== "undefined" && process.env?.PRERENDER_DEBUG_ROUTES) || "";
  return Array.from(
    new Set(
      env
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    )
  );
})();
