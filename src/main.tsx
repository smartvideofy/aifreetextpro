import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Notify the prerenderer (Puppeteer) that the app + Helmet have flushed
// <title>/<meta>/JSON-LD into <head>. react-helmet-async writes head changes
// via setTimeout/requestAnimationFrame inside an effect, so we MUST wait until
// the document title actually swaps from the static fallback before snapshotting.
const STATIC_FALLBACK_TITLE_FRAGMENT = "Free AI Humanizer & Detector Tool";
const MAX_WAIT_MS = 14000;
const POST_SWAP_DELAY_MS = 250;

const fireRenderEvent = () => {
  const start = Date.now();
  const isHome = window.location.pathname === "/";

  const dispatch = () => {
    document.dispatchEvent(new Event("render-event"));
  };

  const tick = () => {
    const titleSwapped =
      document.title && !document.title.includes(STATIC_FALLBACK_TITLE_FRAGMENT);
    const elapsed = Date.now() - start;

    if (isHome) {
      // Home keeps the fallback title; small delay then signal.
      setTimeout(dispatch, POST_SWAP_DELAY_MS);
      return;
    }

    if (titleSwapped) {
      // Helmet has committed head changes; allow one more tick for any
      // straggling JSON-LD scripts then signal.
      setTimeout(dispatch, POST_SWAP_DELAY_MS);
      return;
    }

    if (elapsed > MAX_WAIT_MS) {
      dispatch();
      return;
    }
    setTimeout(tick, 100);
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
