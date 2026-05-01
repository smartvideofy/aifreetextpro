# Plan: Mobile Rendering Parity Audit

## Goal

Verify that for the top 15 pages (homepage, key SEO pages, top blog posts), the **raw HTML response** delivered to a mobile crawler contains:

1. A non-default `<title>` matching the route
2. A non-default `<meta name="description">` matching the route
3. The page-specific canonical URL
4. The required JSON-LD blocks (Article / FAQPage / BreadcrumbList / etc.)

This site is a Vite SPA. Only `index.html` ships static SEO tags — every other route relies on `react-helmet-async` injected after JS runs. Googlebot-Mobile's two-pass indexer often delays the JS render pass for days/weeks, which directly explains the 4.7% mobile-impression share in GSC.

## What the audit will produce

A standalone Node script (`scripts/seo/mobile-parity-audit.mjs`) plus a Markdown report (`/mnt/documents/mobile-parity-report.md`).

For each URL the script will:
- `fetch()` the published URL with `User-Agent: Googlebot-Mobile` and `Accept-Language: en-US`
- Parse the returned HTML **without executing JS** (using `node-html-parser` or a regex pass — no Puppeteer)
- Extract `<title>`, `<meta name="description">`, `<link rel="canonical">`, all `<script type="application/ld+json">` blocks
- Diff each value against the expected value declared in a per-route expectations table
- Flag any route whose raw HTML returns the generic homepage title/description (the smoking gun for the SPA-parity issue)

The report groups results into:
- PASS (route-specific metadata present in raw HTML)
- FAIL — generic fallback (homepage title/description served instead)
- FAIL — missing JSON-LD
- WARN — JSON-LD present but missing required `@type` (Article, FAQPage, BreadcrumbList)

## Routes audited (15)

```
/                                                  homepage
/ai-checker
/pricing
/technology
/about
/bypass-turnitin
/bypass-gptzero
/bypass-originality
/compare-ai-humanizers
/blog
/blog/how-ai-detectors-work          (9,391 imp, zero CTR)
/blog/best-free-ai-humanizer-2026
/blog/bypass-zerogpt-detection
/blog/can-detectors-detect-gpt-5
/blog/ai-college-admissions-essays-personal-statements
```

## Files

**Create**
- `scripts/seo/mobile-parity-audit.mjs` — fetches each URL with Googlebot-Mobile UA, parses raw HTML, validates expectations, writes Markdown report
- `scripts/seo/route-expectations.json` — expected title prefix, description keyword, required JSON-LD `@type` array per route

**Run**
- Execute against the published URL (`https://aifreetextpro.com`) via `code--exec`
- Output report to `/mnt/documents/mobile-parity-report.md` and emit a `<lov-artifact>` so the user can open it

**No application code changes in this step.** The audit is diagnostic. Once we have hard data on which routes fail, the follow-up plan will be a remediation choice between:
1. SSG via `vite-plugin-ssr` / `react-snap` (prerender at build time)
2. Per-route static HTML stubs in `public/` with baked-in meta + JSON-LD
3. Cloudflare Worker / edge function that injects route-specific meta into `index.html`

We pick the remediation only after seeing the audit numbers.

## Technical Detail

- Use Node's built-in `fetch` (Node 20+) — no extra deps needed if we parse with regex; otherwise add `node-html-parser` as a devDependency
- Headers sent:
  ```
  User-Agent: Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  Accept: text/html,application/xhtml+xml
  ```
- Repeat every fetch with desktop Googlebot UA to confirm parity (or lack thereof) between the two
- Score each route 0–4 (title, description, canonical, JSON-LD) and surface a summary table at the top of the report
- Exit non-zero if any route scores < 3, so the script is CI-friendly later

## Out of scope (next plan)

- Actually fixing the parity gap (prerender / SSG / edge injection)
- Lighthouse/CWV mobile checks
- Re-submitting sitemap to GSC
