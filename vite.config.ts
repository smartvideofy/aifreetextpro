import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import PrerenderSPAPlugin from "vite-plugin-prerender";
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
    // Only prerender on production builds. Uses headless Chromium to render
    // each route after the SPA boots, then writes per-route index.html files
    // with baked-in <title>, <meta>, canonical, and JSON-LD from react-helmet-async.
    mode === "production" &&
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: prerenderRoutes,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          maxConcurrentRoutes: 4,
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        postProcess(renderedRoute) {
          // Strip the dev script tag is unnecessary; keep hydration script.
          // Normalize trailing slash in paths so disk paths resolve cleanly.
          renderedRoute.route = renderedRoute.originalRoute;
          return renderedRoute;
        },
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
