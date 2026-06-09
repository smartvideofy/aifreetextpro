
# Comprehensive SEO Remediation Plan

Goal: lift the SEO Health Score from 63 → 90+, recover the high-impression/low-CTR pages, capture striking-distance keywords, and harden the technical foundation for AI search.

Work is grouped into 4 phases. Each phase ships in ~2–3 weeks and is independently shippable.

---

## Phase 1 — Quick wins (Week 1–2)
Highest ROI, lowest effort. These move the needle in 14–30 days.

### 1.1 Rewrite high-impression / low-CTR titles + metas
Target pages identified in the GSC export. Each gets a new `<title>` (≤60 chars, primary keyword + benefit + year), new meta description (≤155 chars, action verb + differentiator + soft CTA), and a `QuickAnswer` block at the top.

| Page | Issue | Fix |
|---|---|---|
| `/blog/how-ai-detectors-work` | 20,368 impr / 0.02% CTR | New title: "How AI Detectors Work in 2026 (Perplexity, Burstiness Explained)"; meta rewrite; add QuickAnswer + KeyTakeaways |
| `/blog/can-ai-detectors-detect-gpt5` | High impr, weak CTR | Title with "GPT-5" front-loaded + year; QuickAnswer |
| `/blog/turnitin-vs-gptzero-vs-originality-ai` | Comparison intent | Add comparison table answer snippet + QuickAnswer |
| `/blog/does-turnitin-detect-chatgpt` | Question intent | QuickAnswer with direct yes/no + FAQPage schema |
| `/blog/best-free-ai-humanizer-2026` | Commercial intent | Tighter title with "Free", price anchor in meta |
| `/blog/free-ai-content-detector` | Commercial intent | Add SoftwareApplication schema + CTA above fold |
| `/` (homepage) | US CTR 0.51% | Rewrite meta with explicit "free 1,000 words" hook |
| `/ai-checker`, `/pricing` | Tool pages | Add SoftwareApplication + Offer schema |

### 1.2 Add `SoftwareApplication` JSON-LD to all tool pages
New `<SoftwareApplicationSchema>` component used on `/`, `/ai-checker`, `/pricing`, `/bypass-*`, `/vs-*`, and tool-style blog posts. Includes `aggregateRating`, `offers`, `applicationCategory`, `operatingSystem`.

### 1.3 Add `FAQPage` schema everywhere FAQs exist
`FAQSection` already injects schema. Audit blog posts with inline FAQ-style H2/H3s and convert them to use `FAQSection` so they emit schema.

### 1.4 Fix 4 broken internal links
From `.lovable/plan.md` step 1 — already-identified broken slugs in `InternalLinks.tsx`:
- `ai-text-converter-human` → `ai-text-converter`
- `ai-writing-detector-employers` → `ai-detector-employers`
- `chatgpt-college-essays-detection` → `chatgpt-college-essays`
- `claude-academic-writing-undetectable` → `claude-academic-writing`

### 1.5 Wire `check-internal-links.mjs` into prebuild
Script already exists. Add to `prebuild` chain so broken slugs fail CI.

---

## Phase 2 — Internal linking + topical authority (Week 3–4)

### 2.1 De-orphan ~82 blog posts
Standard 3-line footer added above `<Footer />` on every orphaned post:
```tsx
<HubBackLink currentPath="/blog/<slug>" />
<RelatedArticles articles={[/* 3 curated */]} />
<InternalLinks variant="compact" currentPage="/blog/<slug>" />
```

### 2.2 Refresh `InternalLinks.tsx` roster
Drop dead entries, add 2026 high-value posts (`BestAIDetector2026`, `Top10AIWritingTools2026`, `TurnitinVsGPTZeroVsOriginalityAI`, etc.). Cap ~60 curated entries.

### 2.3 Extend `pillarHubs.spokes` in `PillarHubLinks.tsx`
Map all orphan posts into the 4 pillars (Detection, Bypass, Humanizer, Comparison) + new "Use cases / verticals" cluster. Full slug roster in `.lovable/plan.md` step 3.

### 2.4 Add `InternalLinks variant="full"` to marketing top-level pages
`/api`, `/pricing`, `/about`, `/team`, `/technology`, `/case-studies`, `/guarantee`, `/editorial-guidelines`.

### 2.5 Add `HubBackLink` to all pillar-spoke pages
Top of article body so equity flows back to the pillar.

---

## Phase 3 — Programmatic SEO + content gaps (Week 5–8)

### 3.1 New striking-distance landing pages
From GSC: keywords ranking pos 6–15 with no dedicated page.

| New page | Target keyword | Template |
|---|---|---|
| `/free-ai-detector-unlimited-words` | "ai detector unlimited words" | Tool landing (mirror `/ai-checker`) |
| `/humanize-ai-text-free-unlimited` | "free ai humanizer unlimited" | Tool landing |
| `/bypass-copyleaks-detection` | already exists — audit, expand |
| `/bypass-winston-ai` | already exists — audit, expand |
| `/blog/claude-4-detection` | "claude 4 ai detector" | Model-specific blog |
| `/blog/gpt-5-detection-guide` | "detect gpt-5" | Model-specific blog |
| `/blog/gemini-2-detection` | "gemini ai detection" | Model-specific blog |

### 3.2 Blog category hubs
Create `/blog/category/detection`, `/blog/category/humanizer`, `/blog/category/bypass`, `/blog/category/comparison`, `/blog/category/use-cases`. Each is a real route with paginated post grid + intro copy + JSON-LD `CollectionPage`. Improves internal link distribution and gives `/blog` a proper IA.

### 3.3 Competitor "Alternative" pages
Audit existing `/vs-*` pages; add `/alternatives-to-undetectable-ai`, `/alternatives-to-quillbot`, `/alternatives-to-writehuman` as commercial-intent landing pages with comparison table + pricing + JSON-LD `Product`.

---

## Phase 4 — Technical SEO + AI search optimization (Week 9–12)

### 4.1 AI search (AEO/GEO)
- Audit `public/llms.txt` and `public/ai.txt` — ensure every pillar + top 20 blog posts are listed with descriptions.
- Add `Speakable` schema (component already exists) to top 20 blog posts.
- Add "Quick Answer" blocks to all comparison and "does X detect Y" posts so AI Overviews can quote them.

### 4.2 Schema enhancements
- `BreadcrumbList` audit: already injected via prerender; verify every route in `route-expectations.json` matches.
- `Review` + `AggregateRating` schema on review-style blog posts (`OriginalityAIReview`, `GPTZeroAccuracyReview`, etc.).
- `HowTo` schema on guide posts (`HowToWriteNaturallyWithAI`, `BypassAIDetectionGuide`, etc.) — `HowToSchema` component already exists.
- `Author` + `Person` schema with Dr. Sarah Chen E-E-A-T fields on every blog post.

### 4.3 Sitemap freshness
Bump `<lastmod>` on every page touched by this remediation. Add a CI step that updates `lastmod` automatically for routes whose source files changed.

### 4.4 Indexability hygiene
- Confirm `noindex` on `/cookie-settings`, `/404`.
- Audit `/help-article/*` and `/help-collection/*` for duplicate content patterns; add canonicals.
- Verify no `?query` URLs leak into sitemap.

### 4.5 Performance (Lighthouse)
- LCP audit on `/`, `/ai-checker`, top blog posts; preload hero font + above-fold image.
- CLS audit on animated background (memory already covers it; reverify).
- Defer non-critical analytics until interaction.

### 4.6 Metadata CTR polish
Apply the "Metadata CTR Standard 2026" memory across all routes touched: brackets/parentheses for year, emoji-free, power words ("Free", "Unlimited", "2026", "No Signup"), question-form for informational queries.

---

## New guardrails (added once, run forever)

| Script | Purpose | Wired into |
|---|---|---|
| `scripts/seo/check-internal-links.mjs` | Already exists — verify every href resolves | `prebuild` |
| `scripts/seo/check-schema-coverage.mjs` (new) | Ensure every route in `route-expectations.json` emits required JSON-LD types | `prebuild` |
| `scripts/seo/check-metadata-limits.mjs` (new) | Title ≤60, description ≤155, no em-dashes, no "Lovable" | `prebuild` |
| `scripts/seo/check-orphans.mjs` (new) | Fail if any blog page renders without `RelatedArticles`/`InternalLinks`/`HubBackLink` | `prebuild` |

---

## Estimated impact

| Metric | Today | 90-day target |
|---|---|---|
| SEO Health Score | 63 | 90+ |
| Indexed pages with rich results | ~15 | 120+ |
| Avg CTR (top 20 pages) | 0.5% | 2.5–3.5% |
| Orphan blog posts | 82 | 0 |
| Estimated organic clicks/mo | baseline | +180–250% |

---

## Out of scope (per project memory)
- No renaming `-2025` URL slugs (URL Slug Permanency).
- No changes to Navbar dropdown contents (Header Dropdowns).
- No em-dashes in new copy.
- No moving auth/tool logic — stays on `app.aifreetextpro.com`.
- No minimalist redesigns — keep vibrant animated-gradient aesthetic.

---

## Suggested execution order
Phase 1 first (biggest CTR/revenue lift in 30 days), then Phase 2 (compounds Phase 1 by distributing equity), then Phase 3 (new traffic surface), then Phase 4 (locks in long-term defense). Each phase is independently shippable; we can pause/replan between phases.

Want me to start with Phase 1.1 (the `how-ai-detectors-work` rewrite + QuickAnswer + KeyTakeaways), or kick off Phase 1.4 (broken-link fixes) as a smaller warm-up?
