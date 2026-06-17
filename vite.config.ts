import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import { prerenderRoutes, prerenderDebugRoutes } from "./scripts/seo/prerender-routes";

const DEBUG_DIR = path.resolve(__dirname, "dist/_debug");
const slug = (route: string) =>
  route === "/" ? "index" : route.replace(/^\/+|\/+$/g, "").replace(/\//g, "_");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Production-only: emit per-route static HTML files with baked-in
    // <title>, <meta>, canonical, and JSON-LD via Puppeteer + react-helmet-async.
    mode === "production" &&
      prerender({
        routes: prerenderRoutes,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          // Ceiling the renderer waits for our "render-event" before snapshotting.
          // MUST exceed main.tsx's MAX_WAIT_MS (25s) hard-timeout dispatch, or a
          // slow route's Helmet-ready signal arrives after the renderer has
          // already given up and captured the static fallback <head>.
          renderAfterTime: 30000,
          // Lower concurrency: under heavy parallelism the per-route Helmet flush
          // was occasionally not landing within the window, yielding fallback
          // <head> on a handful of routes. 2 trades build time for reliability.
          maxConcurrentRoutes: 2,
          headless: true,
          // Inject a global flag for routes we want detailed Helmet flush
          // logs from. The renderer evaluates this in the page before nav.
          inject: { __debugRoutes: prerenderDebugRoutes },
          injectProperty: "__PRERENDER_INJECT__",
          // Forward browser console output for debug routes to the build log
          // and to dist/_debug/<slug>.log.
          consoleHandler(route: string, message: { type: () => string; text: () => string }) {
            if (!prerenderDebugRoutes.includes(route)) return;
            const text = message.text();
            if (!text.startsWith("[helmet-debug]")) return;
            try {
              mkdirSync(DEBUG_DIR, { recursive: true });
              appendFileSync(
                path.join(DEBUG_DIR, `${slug(route)}.log`),
                `[${message.type()}] ${text}\n`
              );
            } catch { /* best-effort debug logging; ignore failures */ }
            console.log(`[prerender:${route}]`, text);
          },
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(rendered: { html: string; route: string }) {
          // The static index.html template ships fallback <title>, <meta
          // description>, <meta keywords>, and <link canonical>. After
          // hydration, react-helmet-async appends route-specific replacements
          // marked data-rh="true". Crawlers (and our parity audit) read the
          // FIRST occurrence in <head>, so we must remove the fallbacks
          // whenever Helmet has supplied a replacement for the same tag.
          if (rendered.route !== "/") {
            let html = rendered.html;
            const has = (re: RegExp) => re.test(html);
            // Title
            if (has(/<title[^>]*data-rh=["']true["'][^>]*>/i)) {
              html = html.replace(/<title(?![^>]*data-rh)[^>]*>[\s\S]*?<\/title>\s*/i, "");
            }
            // Description
            if (has(/<meta[^>]+name=["']description["'][^>]+data-rh=["']true["']/i)) {
              html = html.replace(
                /<meta(?=[^>]*name=["']description["'])(?![^>]*data-rh)[^>]*>\s*/gi,
                ""
              );
            }
            // Keywords
            if (has(/<meta[^>]+name=["']keywords["'][^>]+data-rh=["']true["']/i)) {
              html = html.replace(
                /<meta(?=[^>]*name=["']keywords["'])(?![^>]*data-rh)[^>]*>\s*/gi,
                ""
              );
            }
            // Canonical
            if (has(/<link[^>]+rel=["']canonical["'][^>]+data-rh=["']true["']/i)) {
              html = html.replace(
                /<link(?=[^>]*rel=["']canonical["'])(?![^>]*data-rh)[^>]*>\s*/gi,
                ""
              );
            }
            // Static og:*/twitter:* fallbacks — strip PER PROPERTY, and only
            // when Helmet supplied a replacement for that exact property.
            // A blanket strip would delete the static og:image fallback on the
            // 120+ pages whose inline <Helmet> sets og:title but NOT og:image,
            // leaving them with no social image at all. So: collect every
            // property/name that appears on a data-rh meta tag, then remove the
            // matching static (non-data-rh) tag one property at a time.
            const rhProps = new Set<string>();
            const rhMetaRe =
              /<meta[^>]*\bdata-rh=["']true["'][^>]*\b(?:property|name)=["']([^"']+)["']|<meta[^>]*\b(?:property|name)=["']([^"']+)["'][^>]*\bdata-rh=["']true["']/gi;
            let rhMatch: RegExpExecArray | null;
            while ((rhMatch = rhMetaRe.exec(html))) {
              const prop = rhMatch[1] || rhMatch[2];
              if (prop && (prop.startsWith("og:") || prop.startsWith("twitter:"))) {
                rhProps.add(prop);
              }
            }
            for (const prop of rhProps) {
              const esc = prop.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              html = html.replace(
                new RegExp(
                  `<meta(?=[^>]*(?:property|name)=["']${esc}["'])(?![^>]*data-rh)[^>]*>\\s*`,
                  "gi"
                ),
                ""
              );
            }
            // Homepage JSON-LD fallbacks (Organization, SoftwareApplication,
            // FAQPage, WebSite) must not ship on inner routes: FAQPage markup
            // for FAQs not visible on the page risks a structured-data manual
            // action, and per-route schemas already come from Helmet.
            html = html.replace(
              /<script(?=[^>]*type=["']application\/ld\+json["'])(?![^>]*data-rh)[^>]*>[\s\S]*?<\/script>\s*/gi,
              ""
            );
            rendered.html = html;
          }

          // On every route (including "/"): drop malformed canonicals that
          // carry no href — hosts/tools can inject these and crawlers treat
          // an empty canonical as a conflicting signal.
          rendered.html = rendered.html.replace(
            /<link(?=[^>]*rel=["']canonical["'])(?![^>]*href=)[^>]*>\s*/gi,
            ""
          );

          // The homepage intentionally keeps the (more SEO-optimized) static
          // <head> from index.html, which carries no canonical — so unlike
          // inner routes it never receives a Helmet self-canonical. Inject one
          // here rather than in index.html: a static canonical in the template
          // would collapse any inner route that fails to emit its own Helmet
          // canonical back to "/". This injection is scoped to "/" only.
          if (
            rendered.route === "/" &&
            !/<link[^>]*rel=["']canonical["'][^>]*href=/i.test(rendered.html)
          ) {
            rendered.html = rendered.html.replace(
              /<\/head>/i,
              '  <link rel="canonical" href="https://aifreetextpro.com/" />\n</head>'
            );
          }

          // For debug routes, also write the final HTML to disk so we can
          // inspect exactly what shipped.
          if (prerenderDebugRoutes.includes(rendered.route)) {
            try {
              mkdirSync(DEBUG_DIR, { recursive: true });
              writeFileSync(
                path.join(DEBUG_DIR, `${slug(rendered.route)}.html`),
                rendered.html,
                "utf8"
              );
            } catch { /* best-effort debug logging; ignore failures */ }
          }
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split the React/router runtime into a long-cached vendor chunk so it
        // isn't re-downloaded on every app-code change and to shrink the main
        // entry chunk's parse cost.
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
