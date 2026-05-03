import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Notify the prerenderer (Puppeteer) that the app + Helmet have committed.
// We wait for two animation frames AND for any pending Suspense lazy chunks
// to resolve, then poll until the document <title> changes from the static
// fallback (homepage <title>) before signaling readiness.
const STATIC_FALLBACK_TITLE_FRAGMENT = "Free AI Humanizer & Detector Tool";

const fireRenderEvent = () => {
  const start = Date.now();
  const tick = () => {
    const titleChanged =
      document.title && !document.title.includes(STATIC_FALLBACK_TITLE_FRAGMENT);
    const isHome = window.location.pathname === "/";
    const elapsed = Date.now() - start;
    // Home keeps the fallback (it IS the home title), so signal immediately.
    // For deep routes, wait for Helmet to swap the title or fall back at 4s.
    if (isHome || titleChanged || elapsed > 15000) {
      document.dispatchEvent(new Event("render-event"));
      return;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(() => requestAnimationFrame(tick));
};

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
  fireRenderEvent();
} else {
  createRoot(container).render(<App />);
  fireRenderEvent();
}
