import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Signal to the prerenderer (vite-plugin-prerender / Puppeteer) that the
// app has fully rendered and Helmet has flushed <title>/<meta>/JSON-LD into
// the DOM. The prerenderer waits for this event before snapshotting HTML.
const fireRenderEvent = () => {
  // Defer one frame so React commits and Helmet sync-applies head tags first.
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("render-event"));
  });
};

if (container.hasChildNodes()) {
  // Prerendered HTML present -> hydrate.
  hydrateRoot(container, <App />);
  fireRenderEvent();
} else {
  createRoot(container).render(<App />);
  fireRenderEvent();
}
