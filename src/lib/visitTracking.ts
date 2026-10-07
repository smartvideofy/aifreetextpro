/**
 * Anonymous visit tracking for the admin panel's Acquisition report. Same
 * logic as the app (smartvideofy/aifreetext src/lib/visitTracking.ts; keep
 * the two in sync): each visit (the first page of a 30-minute browsing
 * session, shared with app.aifreetextpro.com through a cookie) is sent to the
 * app's database with its source, landing page and device type. Visitors get
 * a random ID in a first-party cookie so a later sign-up in the app can be
 * linked to its visits. Skipped when the visitor declined analytics cookies.
 */
import { attributionFromLocation, declinedAnalytics, directVisit, CLICK_ID_PARAMS } from "./attribution";

// The app's database (a different Supabase project from this site's). The
// publishable key is public by design: it is in every app page as well.
const APP_SUPABASE_URL = "https://uvprbzcxajreafjwbvrs.supabase.co";
const APP_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cHJiemN4YWpyZWFmandidnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODA5ODMsImV4cCI6MjA3NTQ1Njk4M30.13PGMx47SivkOQiR6K4Hh-OydKC2jmmGsMwUITObhAA";

const VISITOR_COOKIE = "aftp_vid";
const SESSION_COOKIE = "aftp_vs";
const SESSION_SECONDS = 30 * 60;
const VISITOR_SECONDS = 365 * 86400;

const cookieDomain = () =>
  window.location.hostname.endsWith("aifreetextpro.com") ? "; domain=.aifreetextpro.com" : "";

function readCookie(name: string): string | null {
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
  return raw ? decodeURIComponent(raw.slice(name.length + 1)) : null;
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSeconds}; path=/; SameSite=Lax; Secure${cookieDomain()}`;
}

const newId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;

function getVisitorId(): string {
  let id = readCookie(VISITOR_COOKIE);
  if (!id) {
    try {
      id = localStorage.getItem(VISITOR_COOKIE);
    } catch {
      /* storage unavailable */
    }
  }
  if (!id) id = newId();
  setCookie(VISITOR_COOKIE, id, VISITOR_SECONDS);
  try {
    localStorage.setItem(VISITOR_COOKIE, id);
  } catch {
    /* storage unavailable */
  }
  return id;
}

function deviceType(): "mobile" | "tablet" | "desktop" {
  const ua = navigator.userAgent;
  if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) return "tablet";
  if (/Mobi|iPhone|iPod|Android|Windows Phone/i.test(ua)) return "mobile";
  return "desktop";
}

/** Run once per page load. Skipped during the prerender snapshot. */
export function trackVisit(): void {
  try {
    if ((window as Window & { __PRERENDER_INJECT__?: unknown }).__PRERENDER_INJECT__ || navigator.webdriver) return;
    if (declinedAnalytics()) return;
    if (readCookie(SESSION_COOKIE)) {
      setCookie(SESSION_COOKIE, "1", SESSION_SECONDS);
      return;
    }
    const href = window.location.href;
    const a = attributionFromLocation(href, document.referrer) ?? directVisit(href);
    if (!a) return;
    const visitorId = getVisitorId();
    setCookie(SESSION_COOKIE, "1", SESSION_SECONDS);
    const params = new URL(href).searchParams;
    const p = {
      visitor_id: visitorId,
      site: "marketing",
      landing_page: a.landing_page,
      channel: a.channel,
      source: a.source,
      medium: a.medium,
      campaign: a.campaign,
      term: a.term,
      content: a.content,
      referrer: a.referrer,
      click_id_type: CLICK_ID_PARAMS.find((k) => params.get(k)) ?? null,
      device: deviceType(),
    };
    void fetch(`${APP_SUPABASE_URL}/rest/v1/rpc/record_visit`, {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        apikey: APP_SUPABASE_KEY,
        Authorization: `Bearer ${APP_SUPABASE_KEY}`,
      },
      body: JSON.stringify({ p }),
    }).catch(() => {
      /* best effort */
    });
  } catch {
    /* tracking is best effort */
  }
}
