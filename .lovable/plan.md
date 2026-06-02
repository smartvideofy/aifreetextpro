# GSC Audit (Oct 2025 – Jun 2026) + Fix Plan

## What the data shows

**Volume is there. Clicks aren't.** 157K impressions → 24.5K clicks, but ~78% of clicks come from brand searches (`aifreetextpro` and misspellings). Non-brand traffic is being wasted at the SERP.

### Critical CTR collapses (rank well, no one clicks)

| Page | Impr | Clicks | CTR | Avg Pos |
|---|---|---|---|---|
| `/ai-checker` | 32,072 | 237 | **0.74%** | 1.9 |
| `/ai-humanizer-for-students` | 26,107 | 187 | **0.72%** | 1.1 |
| `/blog/how-ai-detectors-work` | 29,536 | 4 | **0.01%** | 8.5 |
| `/bypass-turnitin-ai-detection` | 15,860 | 36 | **0.23%** | 5.5 |
| `/contact` | 14,054 | 19 | **0.14%** | 1.2 |
| `/pricing` | 10,416 | 12 | **0.12%** | 1.6 |
| `/about` | 6,814 | 24 | **0.35%** | 1.6 |
| `/technology` | 5,273 | 1 | **0.02%** | 1.1 |
| `/bypass-originality-ai` | 6,126 | 5 | **0.08%** | 1.6 |
| `/blog/ai-detection-patterns-explained` | 8,685 | 3 | **0.03%** | 8.8 |

A page ranking #1–2 with sub-1% CTR almost always means the title/description shown in Google does not match query intent (or has been rewritten by Google). `/contact` and `/technology` at pos ~1 with 0.14% / 0.02% CTR means they're ranking for brand variants where users want the app, not those pages — internal cannibalization.

### Striking-distance non-brand queries (pos 5–15, 0 clicks)

- `best free ai humanizer tools 2026` — 618 imp, pos 9.7, 0 clk
- `best free ai text humanizer tools 2026` — 464 imp, pos 11.8, 0 clk
- `zerogpt free limits 2025` — 282 imp, pos 8.8
- All `how (ai|content) detectors work perplexity burstiness` variants — ~1,200 imp combined, pos 3–9, 0 clk
- `best free ai text humanizer no signup 2026` — 118 imp, pos 4.5, 0 clk
- `ai detector unlimited words` — 251 imp, pos 9.3, CTR 7.6% (working — pattern to copy)

### Device gap

Desktop avg pos 9.5 / CTR 12.7%. Mobile pos 16.4 / CTR 24.2%. Mobile users convert better but rank worse — mobile CWV or mobile-specific layout is dragging rankings.

### Other findings

- 4,483 impressions for `seotop` at pos 93 — likely scraper noise, ignore.
- `allintitle:turnitin bypass` 339 imp at pos 120 — SEO researcher queries, ignore.
- Several URLs in GSC don't exist in the current router (`/blog/best-free-ai-humanizer-tools-2025`, `/blog/bypass-ai-detection-ethical-tips`, `/blog/how-to-detect-ai-generated-text`, `/blog/zerogpt-vs-ai-free-text-pro-2025`, `/blog/gptinf-vs-ai-free-text-pro`, `/blog/ai-paraphrasing-tool-avoid-plagiarism`). They are ranking and getting impressions — they need 301s to the canonical equivalents or they'll continue to bleed equity.

---

## Plan

### Phase 1 — Rewrite titles & meta descriptions on the 8 CTR-collapse pages

For each, match the dominant query intent shown in GSC. Front-load benefit, add the year, add a numeric promise, keep under 60 chars title / 155 chars description.

| Page | New `<title>` (draft) | New description angle |
|---|---|---|
| `/ai-checker` | "Free AI Detector 2026 — Unlimited Words, No Signup" | Lead with "unlimited words" (7.6% CTR query proves intent) |
| `/ai-humanizer-for-students` | "AI Humanizer for Students — Bypass Turnitin in 2026" | Add Turnitin keyword + safety framing |
| `/blog/how-ai-detectors-work` | "How AI Detectors Work: Perplexity & Burstiness Explained (2026)" | Exact-match the ~1,200 imp query cluster |
| `/bypass-turnitin-ai-detection` | "Bypass Turnitin AI Detection 2026 — Free Tool, No Signup" | Add "free" + "no signup" |
| `/bypass-originality-ai` | "Bypass Originality.ai 2026 — Free Humanizer Tested" | Currently no compelling promise |
| `/pricing` | "Pricing — Free Forever Plan, 1,000 Words/Month" | Lead with free tier |
| `/about`, `/contact`, `/technology` | Add `noindex` OR rewrite to deflect brand searches to homepage | These rank #1 for brand but steal homepage clicks |
| `/blog/ai-detection-patterns-explained` | "12 AI Detection Patterns Every Writer Should Know (2026)" | Numeric listicle hook |

### Phase 2 — Capture the "2026 best free humanizer" cluster

`best-free-ai-humanizer-2026` ranks pos 8.3 with 15,782 impressions and 0.58% CTR. The title needs the exact query plus an in-SERP differentiator. Refresh:
- Title to "Best Free AI Humanizer 2026 — 8 Tools Tested (No Signup)"
- H1, intro paragraph, and FAQ to match the long-tail variants ("tools", "text humanizer", "no signup")
- Add fresh `dateModified` so Google re-crawls

### Phase 3 — Add 301 redirects for the 6 ranking ghost URLs

These exist in Google's index and pull impressions but 404 on the live site, killing equity. Add a `legacyRedirects` map in `src/App.tsx` (using existing `SEORedirect` pattern):

```
/blog/best-free-ai-humanizer-tools-2025  → /blog/best-free-ai-humanizer-2026
/blog/bypass-ai-detection-ethical-tips   → /blog/bypass-ai-detection-guide
/blog/how-to-detect-ai-generated-text    → /blog/how-to-check-if-written-by-ai
/blog/zerogpt-vs-ai-free-text-pro-2025   → /blog/zerogpt-comparison
/blog/gptinf-vs-ai-free-text-pro         → /blog/gptinf-comparison
/blog/ai-paraphrasing-tool-avoid-plagiarism → /blog/ai-paraphrasing-tool-plagiarism
```
(I'll verify each destination exists before wiring.)

### Phase 4 — Refresh `how-ai-detectors-work` for the perplexity/burstiness cluster

29,536 impressions and 4 clicks is the single biggest leak. Rewrite the H1, first 200 words, and FAQ schema to exact-match "perplexity and burstiness" phrasing. Add a `QuickAnswer` block that directly answers "How do AI detectors work?" — built for featured snippet capture.

### Phase 5 — Mobile ranking gap

Mobile rank avg is 16.4 vs desktop 9.5. Quick wins:
- Audit LCP image on `/` and key landing pages — ensure `fetchpriority="high"` and proper `width`/`height` (CLS).
- Verify hero CTAs are above the fold on a 360px viewport.
- Run a Lighthouse mobile pass post-Phase 1 to quantify.

### Phase 6 — Add the 3 new striking-distance topics as articles

Short blog posts targeting queries already at pos 8–12 with no dedicated page:
1. "ZeroGPT Free Limits 2026 — What's Actually Free" (282 imp, pos 8.8)
2. "AI Detector Free No Sign Up — 5 Real Options" (86 imp at 8% CTR proves intent)
3. "Best Free AI Text Humanizer No Signup 2026" (118 imp, pos 4.5)

---

## Technical notes

- All title/meta edits go in each page's `<SEOHead>` / `<Helmet>` block. No schema changes.
- Redirects use the existing `SEORedirect` component (`src/components/SEORedirect.tsx`) — adds meta-refresh + canonical so crawlers consolidate equity.
- Sitemap `lastmod` for refreshed pages must update to today's date so Google re-crawls fast (per `mem://seo/sitemap-freshness-standard`).
- Year-slug rule (`mem://seo/url-slug-permanency-constraint`) is respected — we redirect the legacy slug, not rename anything.
- No backend, no DB, no auth changes.

## Out of scope

- Google Search Console reverification / sitemap resubmit — manual user step.
- Backlink acquisition — content-only plan.
- Paid search — organic only.

## Expected impact

Conservatively recovering CTR to 2% on just `/ai-checker`, `/ai-humanizer-for-students`, and `/how-ai-detectors-work` (currently 0.01–0.74%) yields **~1,400 additional monthly clicks** at current impression volume — roughly +25% non-brand traffic without ranking improvements.