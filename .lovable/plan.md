

## GSC Performance Audit — 28-Day Analysis (Mar 7 - Apr 3, 2026)

### Performance Summary
- **12,642 clicks** | **56,134 impressions** | **22.5% avg CTR** | **Avg pos: Desktop 6.82 / Mobile 25.06 / Tablet 37.26**
- Traffic remains ~95% branded (misspellings of "aifreetextpro")
- **Position instability**: Mar 13-15 saw avg position spike from 6.1 to 43.5, partial recovery by Mar 19
- **Rich results: effectively zero** — only 1 review snippet impression in 28 days

### Comparison to Previous Audit (Mar 8-14)
| Metric | Previous 7-day | Current 28-day (weekly avg) |
|--------|---------------|---------------------------|
| Clicks/week | 3,595 | ~3,160 |
| CTR | 25.5% | 22.5% (declining) |
| Mobile position | 19.7 | 25.06 (worsening) |
| Rich results | 0 | 1 impression (still broken) |

**Verdict**: CTR is declining, mobile is getting worse, and the previous meta tag optimizations have not converted into clicks for non-branded queries.

---

### CRITICAL FINDING 1: Non-Branded Keywords — Massive Impressions, Zero Clicks

These keyword clusters generate thousands of impressions at page 1-2 positions but produce **literally zero clicks**:

| Keyword Cluster | Total Impressions | Avg Position | Clicks |
|----------------|------------------|-------------|--------|
| "best free ai humanizer [2026]" variants | ~2,500+ | 3-10 | 0 |
| "how ai detectors work perplexity burstiness" | ~500+ | 4-8 | 0 |
| "zerogpt free limits" | ~400+ | 6-9 | 0 |
| "best free ai humanizer no signup" | ~200+ | 2-6 | 0 |
| "top free ai humanizers march 2026" | ~100+ | 2-5 | 0 |

**Root cause**: Despite previous title tag rewrites, Google is likely still serving older cached snippets, OR the titles are still not differentiated enough from competitors. Several keywords at position 2-4 with 0 clicks suggests Google may be showing sitelinks rather than standalone results.

### CRITICAL FINDING 2: Blog Pages — High Impressions, Zero Clicks (Unchanged)

The same pages from the previous audit STILL have zero clicks despite title tag updates:

| Page | Impressions (28d) | Clicks | Position |
|------|------------------|--------|----------|
| `/blog/ai-detection-patterns-explained` | 3,792 | 0 | 8.51 |
| `/blog/how-ai-detectors-work` | 2,237 | 0 | 8.67 |
| `/blog/how-to-detect-ai-generated-text` | 1,564 | 0 | 5.70 |
| `/blog/bypass-ai-detection-ethical-tips` | 1,467 | 0 | 16.98 |
| `/blog/best-free-ai-humanizer-2026` | 6,595 | 3 | 6.14 |
| `/blog/best-free-ai-humanizer-tools-2025` | 3,714 | 2 | 6.07 |

**The title rewrites from 2 weeks ago have not worked.** The meta descriptions need to be rewritten with much stronger CTR hooks — specific numbers, parenthetical qualifiers, and urgency signals.

### CRITICAL FINDING 3: Landing Pages — Sitelink Inflation Confirmed

| Page | Impressions | Clicks | CTR | Position |
|------|------------|--------|-----|----------|
| `/ai-checker` | 17,876 | 81 | 0.45% | 1.29 |
| `/ai-humanizer-for-students` | 14,112 | 76 | 0.54% | 1.06 |
| `/bypass-turnitin-ai-detection` | 13,082 | 30 | 0.23% | 1.49 |
| `/contact` | 8,677 | 3 | 0.03% | 1.06 |
| `/pricing` | 6,043 | 5 | 0.08% | 1.27 |

These are confirmed sitelink impressions (position ~1 with massive impressions). **No action needed** — sitelinks are controlled by Google. The real optimization opportunity is the non-branded queries.

### CRITICAL FINDING 4: Mobile Performance — 3.7x Worse

| Device | Clicks | Impressions | CTR | Position |
|--------|--------|------------|-----|----------|
| Desktop | 8,137 | 37,162 | 21.90% | **6.82** |
| Mobile | 4,237 | 18,222 | 23.25% | **25.06** |

Mobile position is 25.06 vs 6.82 desktop — a 3.7x gap. This worsened from the 3x gap in the previous audit. The lazy-loading changes may not be sufficient; the SPA architecture itself is likely the issue on mobile (JS execution time).

### CRITICAL FINDING 5: Rich Results Still Completely Broken

Only 1 review snippet impression in 28 days. The JSON-LD fallbacks added to `index.html` only cover the homepage. **The blog pages — which have the FAQPage schema most likely to generate rich results — still render schema via JS-only Helmet tags**, which Googlebot may not be executing.

### FINDING 6: Cannibalization Persists

`/blog/best-free-ai-humanizer-2026` (6,595 imp, 3 clicks, pos 6.14) and `/blog/best-free-ai-humanizer-tools-2025` (3,714 imp, 2 clicks, pos 6.07) still compete. The 2025 article was noindexed, but it takes weeks for Google to process. This is expected — monitor.

### FINDING 7: US Market Underperformance

| Country | Clicks | Impressions | CTR | Position |
|---------|--------|------------|-----|----------|
| Philippines | 2,937 | 5,518 | 53.23% | 1.48 |
| **United States** | **2,366** | **20,077** | **11.78%** | **8.93** |
| South Africa | 926 | 1,756 | 52.73% | 1.80 |

US gets 4x the impressions of Philippines but fewer clicks. Position 8.93 in the US vs 1.48 in Philippines means the site is not competitive for US-based non-branded queries.

---

## Implementation Plan

### Phase 1: Meta Description Rewrite V2 (Highest ROI)

The previous title rewrites were not aggressive enough. This round focuses on **meta descriptions** with extreme CTR optimization — the titles are decent but descriptions need complete overhaul.

**6 blog pages to rewrite** (all have 0 clicks despite good positions):

1. **`/blog/ai-detection-patterns-explained`** (3,792 imp, pos 8.51)
   - Current desc: "Perplexity, burstiness, and 3 hidden patterns..."
   - New: Include "with examples" and "fix each one in <5 min" — urgency + specificity

2. **`/blog/how-ai-detectors-work`** (2,237 imp, pos 8.67)  
   - Add "explained simply" and "with diagrams" to description

3. **`/blog/how-to-detect-ai-generated-text`** (1,564 imp, pos 5.70)
   - At position 5.7 this should be getting clicks. Rewrite description with stronger hook

4. **`/blog/bypass-ai-detection-ethical-tips`** (1,467 imp, pos 16.98)
   - Position 17 is poor. Update title to target exact keyword "how to bypass ai detection" (38 imp at pos 63) and "how to pass ai detection" (38 imp). Add "2026" to title

5. **`/blog/best-free-ai-humanizer-2026`** (6,595 imp, 3 clicks, pos 6.14)
   - Title matches well. Description needs "No signup required" and "tested on Turnitin" hooks

6. **`/blog/gptinf-vs-ai-free-text-pro`** (1,021 imp, pos 6.35)
   - Target "gptinf" keyword (46 imp at pos 49). Update title to include "GPTinf"

**Files to modify**: 6 blog page components (meta description updates only)

### Phase 2: Target Striking-Distance Non-Branded Keywords

Keywords at positions 2-6 with 0 clicks need H1 and title adjustments to include exact-match phrases:

1. **"best free ai humanizer tools 2026 no signup"** — 16 imp, pos 1.81 — Already #1-2! Need to get this page to show as a standalone result, not a sitelink
2. **"top free ai humanizers march 2026"** — 20 imp, pos 2.60
3. **"best free ai humanizer 2026 undetectable turnitin gptzero"** — 17 imp, pos 2.18
4. **"detect ai generated text methods"** — 28 imp, pos 4.86

**Action**: Update the H1 headings on `/blog/best-free-ai-humanizer-2026` and `/blog/how-to-detect-ai-generated-text` to include these exact keyword phrases in subheadings (H2s).

**Files to modify**: 2 blog pages (H2 subheading additions)

### Phase 3: dateModified Freshness Signals

Update `dateModified` in Article schema across all blog posts that still show February dates. Google uses `dateModified` as a freshness signal — pages showing Feb 2026 dates when competitors show March/April will lose position.

**Action**: Update `dateModified` to `2026-04-05` in Article JSON-LD schema for the top 10 blog pages by impressions.

**Files to modify**: ~10 blog page components (schema date update only)

### Phase 4: Prerendered FAQ Schema for Top Blog Pages

The JSON-LD in `index.html` only covers the homepage. The blog pages with FAQPage schema — which are the most likely to trigger rich FAQ snippets — still rely on JS rendering via Helmet.

**Action**: Since we can't add per-page schemas to `index.html` (SPA limitation), we need to ensure the Helmet-rendered schemas are as clean as possible. The real fix is to add `<noscript>` fallback schema tags or switch to SSR/prerendering — but within the current SPA architecture, we should:
- Validate all FAQPage schemas match Google's requirements exactly
- Ensure `dateModified` is present and current in Article schemas
- Add `mainEntityOfPage` to Article schemas (missing from many pages)

**Files to modify**: ~8 blog page components

### Phase 5: Mobile Position Recovery

Mobile position degraded from 19.7 to 25.06. Within the SPA constraint:
- Add `fetchpriority="high"` to above-fold images on blog pages
- Ensure blog page components don't eagerly import heavy icons/components
- Add `decoding="async"` to all non-critical images

**Files to modify**: Blog template patterns across ~5 high-traffic pages

---

### Total Scope
- **~20 file modifications** (meta descriptions, H2 headings, schema dates, image attributes)
- **No new files created**
- **No structural changes** — pure on-page SEO optimization

### Expected Impact
- CTR improvement on the 6 zero-click blog pages (from 0% to 2-5%) = ~200-400 new clicks/month
- Rich result eligibility improvement through schema fixes
- Mobile position recovery through performance micro-optimizations

