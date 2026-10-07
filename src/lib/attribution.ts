/**
 * Signup attribution, marketing-site side. Same detection as the app
 * (smartvideofy/aifreetext src/lib/attribution.ts; keep the two in sync):
 * where a visitor first came from (TikTok, Google, an ad campaign...).
 * Stored in a cookie on .aifreetextpro.com so app.aifreetextpro.com can
 * read it and save it on the profile when the visitor signs up.
 *
 * First touch wins: the first campaign link or external referrer we see is
 * kept for 90 days; later visits don't overwrite it. A visit with neither
 * (typed address, bookmark) is kept as "direct" with its landing page, so we
 * still know where the visitor started, but a later real source replaces it.
 * Most visitors land on the marketing site (aifreetextpro.com), which stores
 * the same data in a cookie on .aifreetextpro.com so the app can read it
 * after the click.
 * Only the referring site's host and the landing path are kept, never full
 * URLs (they can contain search terms or personal data).
 */

export interface Attribution {
  channel: string;
  source: string | null;
  medium: string | null;
  campaign: string | null;
  term: string | null;
  content: string | null;
  referrer: string | null;
  landing_page: string | null;
  first_seen: string;
  /** X ad click id; the app sends it to X with sign-up and purchase conversions. */
  twclid?: string | null;
  /** Ad click ids from the landing URL (gclid, fbclid, ttclid, msclkid, twclid). */
  click_ids?: Record<string, string> | null;
}

export const CLICK_ID_PARAMS = ["gclid", "fbclid", "ttclid", "msclkid", "twclid"] as const;

function clickIdsFrom(params: URLSearchParams): Record<string, string> | null {
  const ids: Record<string, string> = {};
  for (const k of CLICK_ID_PARAMS) {
    const v = clean(params.get(k), 200);
    if (v) ids[k] = v;
  }
  return Object.keys(ids).length ? ids : null;
}

const COOKIE = "aftp_attr";
const MAX_AGE_DAYS = 90;

// Referrers that are us or a step in our own flows (Google sign-in returns
// through accounts.google.com, Paystack through its checkout page). Treating
// these as sources would attribute every Google sign-up to "Google".
const INTERNAL_HOSTS = [
  "aifreetextpro.com",
  "accounts.google.com",
  "paystack.com",
  "paystack.co",
  "supabase.co",
  "lovable.app",
  "lovableproject.com",
];

const CHANNELS: [RegExp, string][] = [
  [/tiktok/, "tiktok"],
  [/(^|\.)google\.|^google$|gclid/, "google"],
  [/bing|msclkid/, "bing"],
  [/facebook|^fb$|^meta$|fbclid|(^|\.)fb\.com/, "facebook"],
  [/instagram|^ig$/, "instagram"],
  [/youtube|youtu\.be/, "youtube"],
  [/^t\.co$|twitter|(^|\.)x\.com$|^x$/, "x"],
  [/reddit/, "reddit"],
  [/linkedin|lnkd\.in/, "linkedin"],
  [/chatgpt|openai/, "chatgpt"],
  [/perplexity/, "perplexity"],
  [/duckduckgo|yahoo|yandex|baidu|ecosia|brave/, "other_search"],
  [/whatsapp|telegram|snapchat|pinterest|discord/, "social_other"],
];

export const KNOWN_CHANNELS = [
  ...new Set([...CHANNELS.map(([, c]) => c), "email", "direct", "other"]),
];

const clean = (v: string | null | undefined, max = 120) => {
  const s = (v ?? "").trim().slice(0, max);
  return s ? s : null;
};

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return null;
  }
}

const isInternal = (host: string) =>
  INTERNAL_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));

export function channelFor(source: string | null, medium: string | null, referrer: string | null): string {
  const s = (source ?? "").toLowerCase();
  if ((medium ?? "").toLowerCase() === "email" || s === "email" || s === "newsletter") return "email";
  for (const key of [s, (referrer ?? "").toLowerCase()]) {
    if (!key) continue;
    const hit = CHANNELS.find(([re]) => re.test(key));
    if (hit) return hit[1];
  }
  return source || referrer ? "other" : "direct";
}

/** What this page view says about where the visitor came from, if anything. */
export function attributionFromLocation(href: string, referrerUrl: string): Attribution | null {
  let params: URLSearchParams;
  let path: string;
  try {
    const u = new URL(href);
    params = u.searchParams;
    path = u.hostname.replace(/^www\./, "") + u.pathname;
  } catch {
    return null;
  }
  // Ad click ids imply the network even without UTM tags.
  const clickSource = params.get("gclid")
    ? "google"
    : params.get("fbclid")
      ? "facebook"
      : params.get("ttclid")
        ? "tiktok"
        : params.get("msclkid")
          ? "bing"
          : params.get("twclid")
            ? "twitter"
            : null;
  const source = clean(params.get("utm_source")) ?? clickSource;
  const medium = clean(params.get("utm_medium")) ?? (clickSource ? "cpc" : null);
  const refHost = referrerUrl ? hostOf(referrerUrl) : null;
  const ownHost = (() => { try { return new URL(href).hostname.replace(/^www./, ""); } catch { return ""; } })();
  const referrer = refHost && refHost !== ownHost && !isInternal(refHost) ? refHost : null;
  if (!source && !referrer) return null;

  return {
    channel: channelFor(source, medium, referrer),
    source,
    medium,
    campaign: clean(params.get("utm_campaign")),
    term: clean(params.get("utm_term")),
    content: clean(params.get("utm_content")),
    referrer,
    landing_page: clean(path, 200),
    first_seen: new Date().toISOString(),
    twclid: clean(params.get("twclid"), 200),
    click_ids: clickIdsFrom(params),
  };
}

export const declinedAnalytics = () => {
  try {
    const prefs = JSON.parse(localStorage.getItem("cookie-preferences") || "null");
    return prefs?.analytics === false;
  } catch {
    return false;
  }
};

const cookieDomain = () =>
  window.location.hostname.endsWith("aifreetextpro.com") ? "; domain=.aifreetextpro.com" : "";

function hasCookie(): boolean {
  return document.cookie.split("; ").some((c) => c.startsWith(`${COOKIE}=`));
}

function readCookie(): Attribution | null {
  try {
    const raw = document.cookie.split("; ").find((c) => c.startsWith(`${COOKIE}=`));
    return raw ? (JSON.parse(decodeURIComponent(raw.slice(COOKIE.length + 1))) as Attribution) : null;
  } catch {
    return null;
  }
}

/** A visit with no campaign link or outside referrer: only the landing page is known. */
export function directVisit(href: string): Attribution | null {
  try {
    const u = new URL(href);
    return {
      channel: "direct",
      source: null,
      medium: null,
      campaign: null,
      term: null,
      content: null,
      referrer: null,
      landing_page: clean(u.hostname.replace(/^www\./, "") + u.pathname, 200),
      first_seen: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function clearAttribution(): void {
  document.cookie = `${COOKIE}=; max-age=0; path=/${cookieDomain()}`;
  // Anonymous visitor and session IDs (see visitTracking.ts).
  document.cookie = `aftp_vid=; max-age=0; path=/${cookieDomain()}`;
  document.cookie = `aftp_vs=; max-age=0; path=/${cookieDomain()}`;
  try {
    localStorage.removeItem("aftp_vid");
  } catch {
    /* storage unavailable */
  }
}

/**
 * Run once per page load. Remembers the first touch for 90 days, unless the
 * visitor declined analytics cookies (then any stored value is removed).
 * Skipped during the prerender snapshot.
 */
export function captureAttribution(): void {
  try {
    if ((window as Window & { __PRERENDER_INJECT__?: unknown }).__PRERENDER_INJECT__ || navigator.webdriver) return;
    if (declinedAnalytics()) {
      if (hasCookie()) clearAttribution();
      return;
    }
    const found =
      attributionFromLocation(window.location.href, document.referrer) ?? directVisit(window.location.href);
    if (!found) return;
    // Keep what we have, unless it was only a direct visit and this one has a real source.
    const existing = hasCookie() ? readCookie() : null;
    if (existing && (existing.channel !== "direct" || found.channel === "direct")) return;
    document.cookie =
      `${COOKIE}=${encodeURIComponent(JSON.stringify(found))}; max-age=${MAX_AGE_DAYS * 86400}; path=/; SameSite=Lax; Secure${cookieDomain()}`;
  } catch {
    /* cookies unavailable: nothing to do */
  }
}
