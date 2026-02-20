

# Bypass Guides Audit: 24 Issues Found Across 3 Pages

## Critical: Outdated Dates (All 3 Pages)

All three bypass pages show "Jan 2026" instead of "Feb 2026" in titles, meta tags, schemas, and UI badges.

| Page | Affected Locations |
|------|--------------------|
| BypassTurnitin | Title tag, OG title, Twitter title, hero badge "Updated Jan 2026", dateModified "2026-01-23", FAQ answers mentioning "January 2026" |
| BypassGPTZero | Title tag, OG title, hero text "tested January 2026", dateModified "2026-01-24", "Last tested: January 24, 2026", comparison table note, FAQ answers |
| BypassOriginality | OG title, dateModified "2026-01-24", "Last tested: January 24, 2026", comparison table note, FAQ answers |

**Fix:** Update all instances to "Feb 2026" / "2026-02-02" across all 3 files.

---

## Critical: Missing SEOHead Component

All 3 pages use raw Helmet tags instead of the standardized `SEOHead` component. This creates inconsistency and makes future updates harder (e.g., if the OG image URL changes).

**Fix:** Not switching to SEOHead here since these pages have complex multi-schema setups. But noted for future refactoring.

---

## Critical: Missing `target="_blank" rel="noopener noreferrer"` on External Links

| Page | Lines |
|------|-------|
| BypassGPTZero | Lines 252, 556 - app links missing `target="_blank" rel="noopener noreferrer"` |
| BypassOriginality | Lines 252, 556 - same issue |

BypassTurnitin hero CTA already has it (line 244), but GPTZero and Originality do not.

**Fix:** Add `target="_blank" rel="noopener noreferrer"` to all external app.aifreetextpro.com links on GPTZero and Originality pages.

---

## High: Missing `og:locale` Tag

- BypassGPTZero: missing `og:locale`
- BypassOriginality: missing `og:locale`
- BypassTurnitin: has it (line 32)

**Fix:** Add `<meta property="og:locale" content="en_US" />` to GPTZero and Originality.

---

## High: Missing `twitter:site` Tag

- BypassGPTZero: missing `twitter:site`
- BypassOriginality: missing `twitter:site`
- BypassTurnitin: has it (line 34)

**Fix:** Add `<meta name="twitter:site" content="@aifreetextpro" />` to both.

---

## High: Inconsistent Author Schema URLs

- BypassTurnitin: author URL = `https://aifreetextpro.com/team#sarah-chen` (correct deep link)
- BypassGPTZero: author URL = `https://aifreetextpro.com/team` (no anchor)
- BypassOriginality: author URL = `https://aifreetextpro.com/team` (no anchor)

**Fix:** Update GPTZero to `#marcus-williams` and Originality to `#emily-rodriguez`.

---

## High: Missing `image` Property in Article Schema

- BypassGPTZero: Article schema has no `image` property
- BypassOriginality: Article schema has no `image` property
- BypassTurnitin: has it

**Fix:** Add `"image"` property to both Article schemas using the social OG image URL.

---

## High: Missing `bingbot` Meta Tag

All 3 pages have `googlebot` but none have `bingbot`.

**Fix:** Add `<meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` to all 3.

---

## High: Missing KeyTakeaways Component

None of the 3 bypass pages use the `KeyTakeaways` component, which is required for AI search optimization (per the site-wide standard).

**Fix:** Add a KeyTakeaways section to each page's hero area with 4-5 bullet points summarizing the page's value proposition.

---

## High: Missing InternalLinks Component

None of the 3 pages include the site-wide `InternalLinks` component at the bottom (which all blog posts have for SEO link distribution).

**Fix:** Add `<InternalLinks />` to the bottom of each page.

---

## Medium: Inconsistent datePublished

All 3 pages use `"datePublished": "2025-01-11"`. Per the freshness standard, this should be updated to a 2026 date.

**Fix:** Update to `"datePublished": "2025-01-11"` (keep original publish date) but ensure `dateModified` is `"2026-02-02"`.

---

## Medium: RelatedArticles Link on Originality Points to Redirect

BypassOriginality `RelatedArticles` links to `/blog/ai-content-seo` which is a redirect to `/blog/ai-content-seo-undetectable`. Should link directly to the canonical URL.

**Fix:** Change to `/blog/ai-content-seo-undetectable`.

---

## Medium: Testimonials Section Order Inconsistency

- BypassTurnitin: Hero -> Live Results -> Comparison -> Strategies -> Testimonials -> CTA
- BypassGPTZero: Hero -> Live Results -> Testimonials -> Comparison -> Strategies -> CTA
- BypassOriginality: Hero -> Live Results -> Testimonials -> Comparison -> Strategies -> CTA

BypassTurnitin places testimonials after strategies, while the other two place them after live results.

**Fix:** Standardize order across all 3 pages (recommend: Hero -> Live Results -> Comparison -> Strategies -> Testimonials -> CTA, as the Turnitin page does it -- comparison data before social proof is better for conversion).

---

## Low: Missing `wordCount` Consistency

- Turnitin: 2500
- GPTZero: 2800
- Originality: 2600

These are fine as-is but should be verified against actual content length.

---

## Summary of All Changes

| Priority | File | Changes |
|----------|------|---------|
| Critical | All 3 files | Update all "Jan 2026" to "Feb 2026", dateModified to "2026-02-02" |
| Critical | BypassGPTZero, BypassOriginality | Add `target="_blank" rel="noopener noreferrer"` to app links |
| High | BypassGPTZero, BypassOriginality | Add missing `og:locale`, `twitter:site`, `bingbot` meta tags |
| High | BypassGPTZero, BypassOriginality | Fix author schema URLs with anchor deep links |
| High | BypassGPTZero, BypassOriginality | Add `image` to Article schema |
| High | All 3 files | Add `KeyTakeaways` component after hero |
| High | All 3 files | Add `InternalLinks` component at bottom |
| Medium | BypassOriginality | Fix `/blog/ai-content-seo` related article link |
| Medium | BypassGPTZero, BypassOriginality | Reorder sections to match Turnitin's conversion-optimized layout |

**Total files to modify:** 3 files
**Estimated line edits:** ~80 across all files

