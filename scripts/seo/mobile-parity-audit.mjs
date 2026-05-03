#!/usr/bin/env node
/**
 * Mobile Rendering Parity Audit
 *
 * Fetches each top page with a Googlebot-Mobile UA and a desktop Googlebot UA,
 * parses the RAW HTML response (no JS execution), and verifies that
 * route-specific <title>, <meta name="description">, <link rel="canonical">,
 * and required JSON-LD @type blocks are present in the initial payload.
 *
 * This is the ground-truth check for SPAs: anything missing here is invisible
 * to Googlebot-Mobile's first indexing pass.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE = process.env.AUDIT_BASE_URL || "https://aifreetextpro.com";
const OUT = process.env.AUDIT_OUT || "/mnt/documents/mobile-parity-report.md";

const UA_MOBILE =
  "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const UA_DESKTOP =
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/120.0.0.0 Safari/537.36";

const expectations = JSON.parse(
  readFileSync(`${__dirname}/route-expectations.json`, "utf8")
).routes;

// --- tiny HTML extractors (no JS execution, no DOM) ---
const stripTags = (s) => s.replace(/<[^>]+>/g, "").trim();
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decode(stripTags(m[1])) : "";
}
function extractMeta(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]*content=["']([^"']*)["']`,
    "i"
  );
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]*name=["']${name}["']`,
    "i"
  );
  const m = html.match(re) || html.match(re2);
  return m ? decode(m[1]) : "";
}
function extractCanonical(html) {
  const m =
    html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  return m ? m[1] : "";
}
function extractJsonLd(html) {
  const blocks = [];
  const re =
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const raw = m[1].trim();
    try {
      const parsed = JSON.parse(raw);
      blocks.push(parsed);
    } catch {
      blocks.push({ __invalid__: true, raw: raw.slice(0, 200) });
    }
  }
  return blocks;
}
function collectTypes(blocks) {
  const types = new Set();
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) return node.forEach(walk);
    if (node["@type"]) {
      const t = node["@type"];
      if (Array.isArray(t)) t.forEach((x) => types.add(x));
      else types.add(t);
    }
    for (const k of Object.keys(node)) walk(node[k]);
  };
  blocks.forEach(walk);
  return types;
}

async function fetchHtml(url, ua) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": ua,
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "en-US,en;q=0.9",
    },
    redirect: "follow",
  });
  const text = await res.text();
  return { status: res.status, html: text, finalUrl: res.url };
}

// Detect the homepage default tags as "fallback served" signal
const HOMEPAGE_TITLE_FRAGMENT = "Free AI Humanizer & Detector Tool";
const HOMEPAGE_DESC_FRAGMENT = "Free AI humanizer tool & AI checker";

function audit(route, html) {
  const title = extractTitle(html);
  const description = extractMeta(html, "description");
  const canonical = extractCanonical(html);
  const blocks = extractJsonLd(html);
  const types = collectTypes(blocks);

  const issues = [];
  let score = 0;

  // Title
  const titleOk = route.titleMustInclude.some((kw) =>
    title.toLowerCase().includes(kw.toLowerCase())
  );
  const titleIsHomepageFallback =
    route.path !== "/" && title.includes(HOMEPAGE_TITLE_FRAGMENT);
  if (titleIsHomepageFallback) {
    issues.push(`FAIL: title is the homepage fallback ("${title.slice(0, 80)}")`);
  } else if (!titleOk) {
    issues.push(
      `FAIL: title missing keywords [${route.titleMustInclude.join(", ")}] (got "${title.slice(0, 80)}")`
    );
  } else {
    score += 1;
  }

  // Description
  const descOk = route.descriptionMustInclude.some((kw) =>
    description.toLowerCase().includes(kw.toLowerCase())
  );
  const descIsHomepageFallback =
    route.path !== "/" && description.includes(HOMEPAGE_DESC_FRAGMENT);
  if (descIsHomepageFallback) {
    issues.push(`FAIL: description is the homepage fallback`);
  } else if (!descOk) {
    issues.push(
      `FAIL: description missing keywords [${route.descriptionMustInclude.join(", ")}]`
    );
  } else {
    score += 1;
  }

  // Canonical
  const expectedCanonical = `${BASE}${route.path}`.replace(/\/$/, "") || BASE;
  const canonicalNorm = (canonical || "").replace(/\/$/, "");
  if (!canonical) {
    issues.push("FAIL: no <link rel=canonical> found");
  } else if (
    canonicalNorm !== expectedCanonical &&
    canonicalNorm !== BASE.replace(/\/$/, "") + (route.path === "/" ? "" : route.path)
  ) {
    issues.push(`WARN: canonical "${canonical}" != expected "${expectedCanonical}"`);
    score += 0.5;
  } else {
    score += 1;
  }

  // JSON-LD types
  const missingTypes = route.requiredJsonLdTypes.filter((t) => !types.has(t));
  if (missingTypes.length === route.requiredJsonLdTypes.length) {
    issues.push(
      `FAIL: no required JSON-LD types found (need ${route.requiredJsonLdTypes.join(", ")})`
    );
  } else if (missingTypes.length > 0) {
    issues.push(`WARN: missing JSON-LD types [${missingTypes.join(", ")}]`);
    score += 0.5;
  } else {
    score += 1;
  }

  return {
    title,
    description,
    canonical,
    jsonLdTypes: [...types],
    jsonLdBlockCount: blocks.length,
    invalidJsonLd: blocks.filter((b) => b.__invalid__).length,
    issues,
    score, // 0..4
  };
}

function pad(s, n) {
  s = String(s);
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

async function main() {
  const results = [];

  for (const route of expectations) {
    const url = `${BASE}${route.path}`;
    process.stderr.write(`Auditing ${url} ... `);
    let mobile, desktop;
    try {
      mobile = await fetchHtml(url, UA_MOBILE);
    } catch (e) {
      mobile = { status: 0, html: "", error: String(e) };
    }
    try {
      desktop = await fetchHtml(url, UA_DESKTOP);
    } catch (e) {
      desktop = { status: 0, html: "", error: String(e) };
    }

    const mobileAudit = audit(route, mobile.html || "");
    const desktopAudit = audit(route, desktop.html || "");
    results.push({
      route: route.path,
      mobile: { status: mobile.status, ...mobileAudit, error: mobile.error },
      desktop: { status: desktop.status, ...desktopAudit, error: desktop.error },
      parityDelta:
        mobileAudit.score === desktopAudit.score
          ? 0
          : desktopAudit.score - mobileAudit.score,
    });
    process.stderr.write(
      `mobile=${mobileAudit.score}/4 desktop=${desktopAudit.score}/4\n`
    );
  }

  // --- Build report ---
  const lines = [];
  lines.push(`# Mobile Rendering Parity Audit`);
  lines.push("");
  lines.push(`- **Base URL:** ${BASE}`);
  lines.push(`- **Date:** ${new Date().toISOString()}`);
  lines.push(`- **Method:** Raw HTML fetch with Googlebot-Mobile / Googlebot UA. **No JS executed.**`);
  lines.push(`- **Routes audited:** ${results.length}`);
  lines.push("");

  // STRICT GATE: any route below 4/4 on either UA fails the build.
  const fails = results.filter(
    (r) => r.mobile.score < 4 || r.desktop.score < 4
  );
  const passes = results.filter(
    (r) => r.mobile.score === 4 && r.desktop.score === 4
  );
  lines.push(`## Summary`);
  lines.push("");
  lines.push(`- **PASS (4/4 on both UAs):** ${passes.length}`);
  lines.push(`- **FAIL (< 4/4 on either UA):** ${fails.length}`);
  lines.push(`- **Parity gaps (mobile < desktop):** ${results.filter((r) => r.parityDelta > 0).length}`);
  lines.push("");

  if (fails.length) {
    lines.push(`## Failing routes (build gate)`);
    lines.push("");
    for (const r of fails) {
      lines.push(`- \`${r.route}\` — mobile ${r.mobile.score}/4, desktop ${r.desktop.score}/4`);
      const all = [
        ...r.mobile.issues.map((i) => `mobile: ${i}`),
        ...r.desktop.issues.map((i) => `desktop: ${i}`),
      ];
      for (const i of all) lines.push(`  - ${i}`);
    }
    lines.push("");
  }

  lines.push(`## Score Table`);
  lines.push("");
  lines.push(`| Route | Mobile | Desktop | Δ | Mobile JSON-LD types |`);
  lines.push(`|---|---|---|---|---|`);
  for (const r of results) {
    lines.push(
      `| \`${r.route}\` | ${r.mobile.score}/4 | ${r.desktop.score}/4 | ${r.parityDelta > 0 ? "⚠ " + r.parityDelta : "0"} | ${r.mobile.jsonLdTypes.join(", ") || "_(none)_"} |`
    );
  }
  lines.push("");

  lines.push(`## Per-route findings`);
  lines.push("");
  for (const r of results) {
    lines.push(`### \`${r.route}\``);
    lines.push("");
    lines.push(`**Mobile (Googlebot-Mobile UA)** — HTTP ${r.mobile.status} — score ${r.mobile.score}/4`);
    lines.push("");
    lines.push(`- Title: \`${(r.mobile.title || "(empty)").slice(0, 140)}\``);
    lines.push(`- Description: \`${(r.mobile.description || "(empty)").slice(0, 200)}\``);
    lines.push(`- Canonical: \`${r.mobile.canonical || "(none)"}\``);
    lines.push(`- JSON-LD blocks: ${r.mobile.jsonLdBlockCount} (invalid: ${r.mobile.invalidJsonLd})`);
    lines.push(`- JSON-LD @types: ${r.mobile.jsonLdTypes.join(", ") || "_(none)_"}`);
    if (r.mobile.issues.length) {
      lines.push(`- Issues:`);
      for (const i of r.mobile.issues) lines.push(`  - ${i}`);
    } else {
      lines.push(`- Issues: _none_`);
    }
    lines.push("");
    lines.push(`**Desktop (Googlebot UA)** — HTTP ${r.desktop.status} — score ${r.desktop.score}/4`);
    if (r.desktop.issues.length) {
      lines.push(`- Issues:`);
      for (const i of r.desktop.issues) lines.push(`  - ${i}`);
    } else {
      lines.push(`- Issues: _none_`);
    }
    lines.push("");
  }

  lines.push(`## Interpretation`);
  lines.push("");
  lines.push(
    `If most non-homepage routes show the homepage \`<title>\` and \`<meta description>\` in their **raw** HTML, the SPA is serving a single \`index.html\` and depending on react-helmet-async (client JS) to swap tags. Googlebot-Mobile's first indexing pass sees the fallback, not the route-specific tags. This matches the GSC pattern: high impressions on the homepage keywords, near-zero mobile impressions for deep routes.`
  );
  lines.push("");
  lines.push(`**Recommended remediations (next plan, in priority order):**`);
  lines.push(`1. Prerender top 30 routes at build time (vite-plugin-prerender / react-snap) — emits real HTML files per route with baked-in meta + JSON-LD.`);
  lines.push(`2. Edge worker (Cloudflare / Vercel) that injects route-specific meta into \`index.html\` based on URL pattern.`);
  lines.push(`3. Migrate to a hybrid SSR setup (vite-plugin-ssr / Astro shell).`);
  lines.push("");

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, lines.join("\n"), "utf8");
  process.stderr.write(`\nReport written to ${OUT}\n`);

  // CI-friendly exit code
  if (fails.length > 0) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
