/**
 * Creator (partner) links: aifreetextpro.com/r/<handle> and
 * /r/<handle>/<link>, e.g. /r/amy/tiktok or /r/amy/yt-oct-21-essay-demo.
 *
 * Runs before the page renders: the address is swapped for the homepage (so
 * the prerendered homepage is what shows), or for the page the creator chose
 * with ?go= (checker, humanizer, pricing), the click is counted in the app's
 * database (record_partner_click), and, once the visitor has accepted
 * marketing cookies, the click is kept on a shared 30-day cookie so
 * app.aifreetextpro.com can credit the creator after sign-up (the app's
 * src/lib/partnerReferral.ts). Accepting cookies later on the same visit
 * still counts. A visit's source is also tagged "partner" by attribution.ts.
 */
import { observeConsent, readPreferences } from "./consent";

// The app's database; the publishable key is public by design (see visitTracking.ts).
const APP_SUPABASE_URL = "https://uvprbzcxajreafjwbvrs.supabase.co";
const APP_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cHJiemN4YWpyZWFmandidnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4ODA5ODMsImV4cCI6MjA3NTQ1Njk4M30.13PGMx47SivkOQiR6K4Hh-OydKC2jmmGsMwUITObhAA";

const PARTNER_COOKIE = "aftp_ref";
const REFERRAL_SECONDS = 30 * 86400;
const PATH = /^\/r\/([a-z0-9][a-z0-9_-]{1,29})(?:\/([a-z0-9][a-z0-9-]{0,39}))?\/?$/i;

// Where a creator link can send people (?go=), set per link in the partner portal.
const DESTINATIONS: Record<string, string> = {
  checker: "/ai-checker",
  humanizer: "/ai-humanizer-for-students",
  pricing: "/pricing",
};

export function partnerFromPath(pathname: string): { handle: string; slug: string } | null {
  const m = PATH.exec(pathname);
  return m ? { handle: m[1].toLowerCase(), slug: (m[2] ?? "").toLowerCase() } : null;
}

const cookieDomain = () =>
  window.location.hostname.endsWith("aifreetextpro.com") ? "; domain=.aifreetextpro.com" : "";

function readCookie(name: string): string | null {
  const raw = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
  return raw ? decodeURIComponent(raw.slice(name.length + 1)) : null;
}

function deviceType(): "mobile" | "tablet" | "desktop" {
  const ua = navigator.userAgent;
  if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) return "tablet";
  if (/Mobi|iPhone|iPod|Android|Windows Phone/i.test(ua)) return "mobile";
  return "desktop";
}

let pending: { c: string; h: string; t: number } | null = null;

function keepIfAllowed() {
  if (!pending || !readPreferences().marketing) return;
  // The last creator link clicked wins.
  document.cookie =
    `${PARTNER_COOKIE}=${encodeURIComponent(JSON.stringify(pending))}; max-age=${REFERRAL_SECONDS}; path=/; SameSite=Lax; Secure${cookieDomain()}`;
  pending = null;
}

/** Call once, before React renders. Does nothing on other pages. */
export function handlePartnerLink(): void {
  const partner = partnerFromPath(window.location.pathname);
  if (!partner) return;
  // Show the homepage under its own address (matches the prerendered HTML),
  // or the page the creator chose.
  const params = new URLSearchParams(window.location.search);
  const target = DESTINATIONS[params.get("go") ?? ""] ?? "/";
  params.delete("go");
  const search = params.toString() ? `?${params}` : "";
  window.history.replaceState(window.history.state, "", `${target}${search}${window.location.hash}`);
  // The served HTML is the homepage: render the chosen page fresh instead of hydrating it.
  if (target !== "/") document.getElementById("root")?.replaceChildren();
  if ((window as Window & { __PRERENDER_INJECT__?: unknown }).__PRERENDER_INJECT__ || navigator.webdriver) return;

  let referrer: string | null = null;
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : null;
  } catch {
    referrer = null;
  }
  // The anonymous visitor ID exists only when analytics cookies were accepted.
  const visitorId = readPreferences().analytics ? readCookie("aftp_vid") : null;

  void fetch(`${APP_SUPABASE_URL}/rest/v1/rpc/record_partner_click`, {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      apikey: APP_SUPABASE_KEY,
      Authorization: `Bearer ${APP_SUPABASE_KEY}`,
    },
    body: JSON.stringify({ p: { ...partner, visitor_id: visitorId, device: deviceType(), referrer } }),
  })
    .then((res) => (res.ok ? res.json() : null))
    .then((r: { click_id?: string; handle?: string } | null) => {
      if (!r?.click_id) return;
      pending = { c: r.click_id, h: r.handle ?? partner.handle, t: Date.now() };
      keepIfAllowed();
      if (pending) observeConsent(keepIfAllowed);
    })
    .catch(() => {
      /* best effort */
    });
}
