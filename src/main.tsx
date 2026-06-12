import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Notify the prerenderer (Puppeteer) that the app + react-helmet-async have
// flushed <title>/<meta>/JSON-LD into <head>. Helmet writes head changes via
// setTimeout/requestAnimationFrame inside an effect, so we MUST wait until
// at least one Helmet-managed tag (data-rh="true") appears in <head> before
// snapshotting. We also wait briefly for stragglers (extra JSON-LD blocks).
const MAX_WAIT_MS = 25000;
const POST_SWAP_QUIET_MS = 600;

declare global {
  interface Window {
    __PRERENDER_DEBUG__?: boolean;
    __PRERENDER_INJECT__?: { __debugRoutes?: string[] };
  }
}

const fireRenderEvent = () => {
  const start = Date.now();
  const isHome = window.location.pathname === "/";
  // Debug is on if explicitly flagged, OR if the prerenderer injected this
  // route into __debugRoutes.
  const injectedRoutes = window.__PRERENDER_INJECT__?.__debugRoutes || [];
  const debug =
    !!window.__PRERENDER_DEBUG__ ||
    injectedRoutes.includes(window.location.pathname);
  const dlog = (...args: unknown[]) => {
    if (debug) console.log("[helmet-debug]", `+${Date.now() - start}ms`, ...args);
  };
  let dispatched = false;

  const dumpInventory = (label: string) => {
    if (!debug) return;
    const tags = Array.from(document.head.children);
    const inv = {
      label,
      route: window.location.pathname,
      title: document.title,
      headChildCount: tags.length,
      headHtmlLength: document.head.innerHTML.length,
      titles: tags
        .filter((t) => t.tagName === "TITLE")
        .map((t) => ({ rh: t.hasAttribute("data-rh"), text: t.textContent })),
      metas: tags
        .filter((t) => t.tagName === "META")
        .map((t) => ({
          rh: t.hasAttribute("data-rh"),
          name: t.getAttribute("name") || t.getAttribute("property"),
          content: (t.getAttribute("content") || "").slice(0, 160),
        })),
      canonicals: tags
        .filter(
          (t) => t.tagName === "LINK" && t.getAttribute("rel") === "canonical"
        )
        .map((t) => ({ rh: t.hasAttribute("data-rh"), href: t.getAttribute("href") })),
      jsonLd: tags
        .filter(
          (t) =>
            t.tagName === "SCRIPT" &&
            t.getAttribute("type") === "application/ld+json"
        )
        .map((t) => {
          let types: string[] = [];
          try {
            const parsed = JSON.parse(t.textContent || "");
            const walk = (n: unknown) => {
              if (!n || typeof n !== "object") return;
              if (Array.isArray(n)) return n.forEach(walk);
              const obj = n as Record<string, unknown>;
              const ty = obj["@type"];
              if (typeof ty === "string") types.push(ty);
              else if (Array.isArray(ty)) ty.forEach((x) => typeof x === "string" && types.push(x));
              for (const k of Object.keys(obj)) walk(obj[k]);
            };
            walk(parsed);
          } catch {
            types = ["__INVALID__"];
          }
          return { rh: t.hasAttribute("data-rh"), types, bytes: (t.textContent || "").length };
        }),
    };
    console.log("[helmet-debug] INVENTORY", JSON.stringify(inv));
  };

  const dispatch = () => {
    if (dispatched) return;
    dispatched = true;
    dumpInventory("pre-dispatch");
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

  // Gate ONLY on a Helmet-managed tag being present. Comparing document.title
  // against a hardcoded copy of the static fallback title is fragile: when the
  // title in index.html drifts out of sync with the constant, the check passes
  // immediately and the snapshot races Helmet's flush.
  const isHelmetReady = () => !!document.head.querySelector('[data-rh="true"]');

  const observer = new MutationObserver((records) => {
    if (debug) {
      for (const rec of records) {
        rec.addedNodes.forEach((n) => {
          if (n.nodeType === 1) {
            const el = n as Element;
            dlog("+TAG", el.tagName, el.getAttributeNames().reduce((acc, a) => {
              acc[a] = el.getAttribute(a) || "";
              return acc;
            }, {} as Record<string, string>), (el.textContent || "").slice(0, 80));
          }
        });
        rec.removedNodes.forEach((n) => {
          if (n.nodeType === 1) {
            const el = n as Element;
            dlog("-TAG", el.tagName, el.getAttributeNames().join(","));
          }
        });
      }
    }
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
    if (!dispatched) {
      dlog("HARD_TIMEOUT");
      dispatch();
    }
  }, MAX_WAIT_MS);

  // In case Helmet flushed before the observer attached.
  requestAnimationFrame(() => {
    dlog("rAF check, helmetReady=", isHelmetReady());
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
