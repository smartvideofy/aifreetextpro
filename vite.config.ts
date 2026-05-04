import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import { prerenderRoutes } from "./scripts/seo/prerender-routes";

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
          if (rendered.route === "/") return; // Home keeps its baked-in tags.
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
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
