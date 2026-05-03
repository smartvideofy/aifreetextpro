import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error - plugin ships its own types but they don't always resolve in ESM
import prerender from "@prerenderer/rollup-plugin";
import { prerenderRoutes } from "./scripts/seo/prerender-routes.mjs";

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
        postProcess(renderedRoute: { html: string; route: string }) {
          // Ensure absolute asset URLs stay absolute; nothing to rewrite by default.
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
