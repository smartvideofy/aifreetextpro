import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Notify the prerenderer (Puppeteer) that the app + react-helmet-async have
// flushed <title>/<meta>/JSON-LD into <head>. Helmet writes head changes via
// setTimeout/requestAnimationFrame inside an effect, so we MUST wait until
// at least one Helmet-managed tag (data-rh="true") appears in <head> before
// snapshotting. We also wait briefly for stragglers (extra JSON-LD blocks).
const STATIC_FALLBACK_TITLE_FRAGMENT = "Free AI Humanizer & Detector Tool";
const MAX_WAIT_MS = 25000;
const POST_SWAP_QUIET_MS = 600;

const fireRenderEvent = () => {
  const start = Date.now();
  const isHome = window.location.pathname === "/";
  let dispatched = false;

  const dispatch = () => {
    if (dispatched) return;
    dispatched = true;
    document.dispatchEvent(new Event("render-event"));
  };

  // Home keeps the fallback title/meta on purpose; signal once App mounts.
  if (isHome) {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setTimeout(dispatch, 400))
    );
    return;
  }

  let quietTimer: ReturnType<typeof setTimeout> | null = null;
  const armQuietTimer = () => {
    if (quietTimer) clearTimeout(quietTimer);
    quietTimer = setTimeout(dispatch, POST_SWAP_QUIET_MS);
  };

  const isHelmetReady = () => {
    const titleSwapped =
      document.title && !document.title.includes(STATIC_FALLBACK_TITLE_FRAGMENT);
    const hasHelmetTag = !!document.head.querySelector('[data-rh="true"]');
    return titleSwapped || hasHelmetTag;
  };

  const observer = new MutationObserver(() => {
    if (isHelmetReady()) armQuietTimer();
  });
  observer.observe(document.head, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["data-rh"],
  });

  // Hard timeout fallback so we never hang the prerender.
  setTimeout(() => {
    if (!dispatched) dispatch();
  }, MAX_WAIT_MS);

  // In case Helmet flushed before the observer attached.
  requestAnimationFrame(() => {
    if (isHelmetReady()) armQuietTimer();
  });
};

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
  fireRenderEvent();
} else {
  createRoot(container).render(<App />);
  fireRenderEvent();
}
