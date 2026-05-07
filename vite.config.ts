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
          renderAfterTime: 20000,
          maxConcurrentRoutes: 4,
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
            } catch {}
            // eslint-disable-next-line no-console
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
            rendered.html = html;
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
            } catch {}
          }
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
