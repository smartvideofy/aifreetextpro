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
          maxConcurrentRoutes: 4,
          headless: true,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(_renderedRoute: { html: string; route: string }) {
          // No mutation needed; Helmet-injected head tags are preserved as-is.
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
