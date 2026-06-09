
# Phase 1.1 + 1.2: Tool-page schema + CTR rewrites

Focused execution chunk. ~10 files touched, ships in one pass.

## Part A — New reusable schema component

Create `src/components/SoftwareApplicationSchema.tsx`: drops a `SoftwareApplication` JSON-LD block via `Helmet`. Props: `name`, `description`, `url`, `category` (default `UtilityApplication`), `price` (default `"0"`), `priceCurrency` (default `"USD"`), `ratingValue` (default `4.8`), `ratingCount` (default `2847`), `screenshot?`. Emits `applicationCategory`, `operatingSystem: "Web"`, `offers`, `aggregateRating`, `featureList?`.

## Part B — Mount the schema on tool/conversion pages

Add `<SoftwareApplicationSchema …>` to each of:

| Page | Name | Category |
|---|---|---|
| `src/pages/Index.tsx` | "AI Free Text Pro" | UtilityApplication |
| `src/pages/AIChecker.tsx` | "Free AI Detector" | UtilityApplication |
| `src/pages/Pricing.tsx` | "AI Free Text Pro" + add `Product`/`Offer` list for 5 tiers | BusinessApplication |
| `src/pages/BypassTurnitin.tsx` | "Turnitin AI Bypass Tool" | UtilityApplication |
| `src/pages/BypassGPTZero.tsx` | "GPTZero Bypass Tool" | UtilityApplication |
| `src/pages/BypassOriginality.tsx` | "Originality.AI Bypass Tool" | UtilityApplication |
| `src/pages/VsWriteHuman.tsx` | "AI Free Text Pro" | UtilityApplication |
| `src/pages/VsUndetectable.tsx` | same | same |
| `src/pages/VsHumanizeAIPro.tsx` | same | same |

For `Pricing.tsx`, also emit an `ItemList` of `Product` nodes (one per tier) so each plan is eligible for product rich results.

## Part C — CTR rewrites + QuickAnswer on top low-CTR blog posts

Use the existing `QuickAnswer` component already in the codebase. For each post: tighten `<title>` to ≤60 chars front-loading the keyword + year, tighten meta description to ≤155 chars with a benefit + soft CTA, and inject a `<QuickAnswer>` block immediately after the article header.

| File | New title | QuickAnswer Q |
|---|---|---|
| `blog/CanDetectorsDetectGPT5.tsx` | "Can AI Detectors Detect GPT-5? (Tested 2026)" | "Can AI detectors actually detect GPT-5 in 2026?" |
| `blog/TurnitinVsGPTZeroVsOriginalityAI.tsx` | "Turnitin vs GPTZero vs Originality.AI (2026)" | "Which AI detector is most accurate in 2026?" |
| `blog/DoesTurnitinDetectChatGPT.tsx` | "Does Turnitin Detect ChatGPT in 2026? (Yes — Here's How)" | "Does Turnitin detect ChatGPT?" |
| `blog/BestFreeAIHumanizer2026.tsx` | "Best Free AI Humanizer 2026 (No Signup, 1,000 Words)" | "What is the best free AI humanizer in 2026?" |
| `blog/FreeAIContentDetector.tsx` | "Free AI Content Detector (No Signup, Unlimited Checks)" | "What is the best free AI content detector?" |
| `blog/CanTeachersDetectChatGPT.tsx` | "Can Teachers Detect ChatGPT in 2026? (Honest Answer)" | "Can teachers actually detect ChatGPT?" |

All copy follows project memory: no em-dashes, frames as "reduce false flags / improve quality", never "beat detectors".

## Out of scope this chunk
- Homepage `<title>`/meta rewrite — touches `index.html` and risks brand-positioning regression; do separately.
- Sitemap `<lastmod>` bumps — happens in Phase 4.3.
- No content body rewrites beyond the QuickAnswer block.

## Verification
After edits: run `node scripts/seo/check-internal-links.mjs` and `node scripts/seo/check-sitemap-sync.mjs` to confirm no regressions, then mark relevant SEO findings fixed.

Estimated diff: 1 new component + 9 page edits + 6 blog edits = 16 files.
