import { observeConsent, readPreferences } from './consent';
import { captureAttribution, clearAttribution } from './attribution';

type PixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push?: PixelFunction;
  loaded: boolean;
  version: string;
  exe?: (...args: unknown[]) => void;
};

declare global {
  interface Window { fbq?: PixelFunction; _fbq?: PixelFunction; twq?: PixelFunction; }
}

// Publishable tracking IDs. Empty values intentionally leave the provider disabled.
const META_ID = import.meta.env.VITE_META_PIXEL_ID || '';
const X_ID = import.meta.env.VITE_X_PIXEL_ID || '';
const X_PAGE_VIEW = import.meta.env.VITE_X_PAGE_VIEW_EVENT_ID || '';
let metaInitialized = false;
let xInitialized = false;
let lastPage = '';

function queueFunction(provider: 'meta' | 'x'): PixelFunction {
  const fn: PixelFunction = Object.assign(function (...args: unknown[]) {
    // Recheck permission, including during SDK load and cross-tab withdrawal.
    if (!readPreferences().marketing && args[0] !== 'consent') return;
    const method = provider === 'meta' ? fn.callMethod : fn.exe;
    if (method) method.apply(fn, args);
    else fn.queue.push(args);
  }, { queue: [] as unknown[][], loaded: true, version: provider === 'meta' ? '2.0' : '1.1' });
  fn.push = fn;
  return fn;
}

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id; script.async = true; script.src = src;
  document.head.appendChild(script);
}

function clearAdCookies() {
  for (const name of ['_fbp', '_fbc', '_twitter_sess', 'personalization_id']) {
    for (const domain of ['', '; domain=.aifreetextpro.com', `; domain=${window.location.hostname}`]) {
      document.cookie = `${name}=; max-age=0; path=/${domain}`;
    }
  }
}

export function syncMarketingTracking() {
  if (window.__PRERENDER_INJECT__) return;
  if (!readPreferences().marketing) {
    if (window.fbq) { window.fbq.queue.length = 0; window.fbq('consent', 'revoke'); }
    if (window.twq) window.twq.queue.length = 0;
    clearAdCookies(); clearAttribution(); lastPage = '';
    // X has no reliable browser revoke API. Unload the SDK after withdrawal
    // so its own automatic listeners cannot continue to collect events.
    if (xInitialized) window.location.reload();
    return;
  }
  captureAttribution();
  // The SDK reads the browser URL itself. Keep click IDs in consented first-party
  // attribution, never in provider page URLs or referrer parameters.
  if (window.location.search || window.location.hash) {
    window.history.replaceState(window.history.state, '', window.location.pathname);
  }
  if (/^\d+$/.test(META_ID)) {
    if (!window.fbq) { window.fbq = queueFunction('meta'); window._fbq = window.fbq; }
    window.fbq('consent', 'grant');
    if (!metaInitialized) {
      window.fbq('init', META_ID); metaInitialized = true;
      loadScript('aftp-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
    }
  }
  if (/^[a-z0-9]+$/i.test(X_ID) && !xInitialized) {
    window.twq = window.twq || queueFunction('x');
    window.twq('config', X_ID); xInitialized = true;
    loadScript('aftp-x-pixel', 'https://static.ads-twitter.com/uwt.js');
  }
  trackMarketingPageView(window.location.pathname);
}

export function trackMarketingPageView(path: string) {
  if (!readPreferences().marketing || window.__PRERENDER_INJECT__) return;
  const cleanPath = path.split(/[?#]/)[0];
  if (lastPage === cleanPath) return;
  lastPage = cleanPath;
  if (metaInitialized) window.fbq?.('track', 'PageView');
  if (xInitialized && /^tw-[a-z0-9]+-[a-z0-9]+$/i.test(X_PAGE_VIEW)) window.twq?.('event', X_PAGE_VIEW, {});
}

export function startMarketingTracking(): () => void {
  syncMarketingTracking();
  const stop = observeConsent(syncMarketingTracking);
  const onClick = (event: MouseEvent) => {
    if (!readPreferences().marketing || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[href]');
    if (!(link instanceof HTMLAnchorElement)) return;
    const destination = new URL(link.href);
    if (destination.hostname !== 'app.aifreetextpro.com') return;
    // A visit to the app is engagement, NOT a Lead, signup or purchase.
    if (metaInitialized) window.fbq?.('trackCustom', 'OutboundClick', { destination: destination.pathname, page_path: window.location.pathname });
    // X conversion events require an agreed business outcome and event ID.
    // Do not fabricate a conversion from this outbound click.
  };
  document.addEventListener('click', onClick, true);
  return () => { stop(); document.removeEventListener('click', onClick, true); };
}