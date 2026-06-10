# P2 — Hub Depth & Crawl Reach

Goal: turn shallow hub/tool pages into dense, internally-linked content hubs so Googlebot (and AI crawlers) can reach every one of the 121 blog posts in ≤2 clicks from the homepage, and create new programmatic pages to capture long-tail comparison + detector queries.

## Scope (in order)

### 1. Hub-page depth (4 pillar hubs + Blog index)
Pages: `src/pages/Index.tsx` (Humanizer hub), `src/pages/AIChecker.tsx` (Detection hub), `src/pages/BypassTurnitin.tsx` (Bypass hub), `src/pages/CompareAIHumanizers.tsx` (Comparison hub), `src/pages/Blog.tsx`.

For each hub add (where missing):
- Full `PillarHubLinks` section rendering ALL spokes (remove any `limit`), grouped by sub-topic with H2/H3 headings.
- 600–900 words of hub-level intro + "What's inside" copy targeting the hub's head keyword.
- "Latest from the blog" strip (6 most-recent spokes with date + 1-line excerpt).
- `CrossHubNav` at the bottom linking to the other 3 hubs.
- `ItemList` JSON-LD listing every spoke URL (improves crawl + AI-search discovery).

### 2. Category hub pages (`/blog/category/:slug`)
`src/pages/BlogCategory.tsx` already exists but only a few categories are wired. Expand to 8 categories matching the blog taxonomy: humanizer, detection, bypass, comparison, academic, marketing, models, tools. Each category page:
- H1 + 150-word category intro
- Full list of posts in that category with thumbnail + excerpt
- `CollectionPage` + `ItemList` JSON-LD
- Breadcrumbs, SEOHead, canonical
- Link entries from `Blog.tsx` and footer

### 3. Programmatic comparison pages (long-tail capture)
Create `src/pages/programmatic/VsX.tsx` template + 6 new routes:
`/vs/stealthwriter`, `/vs/phrasly`, `/vs/bypassgpt`, `/vs/netus-ai`, `/vs/twixify`, `/vs/humbot`.
Each ≈1,200 words: feature table, pricing table, verdict, FAQ, ReviewSchema, SoftwareApplicationSchema, CTA to app.

### 4. Programmatic detector pages
Create `/detector/:tool` template + 5 routes:
`/detector/turnitin`, `/detector/gptzero`, `/detector/originality`, `/detector/copyleaks`, `/detector/winston`.
Each ≈1,000 words: how it works, accuracy, how to bypass (link to bypass hub), FAQ, schema.

### 5. AI-search & crawler files
- Refresh `public/llms.txt` and `public/ai.txt` with the new 121-post index, hub URLs, and new programmatic pages.
- Add `<lastmod>` + new URLs to `public/sitemap.xml` (via existing `refresh-sitemap-lastmod.mjs`; extend `prerender-routes.ts` with the new programmatic routes).
- Update `public/robots.txt` only if new directories need explicit allow.

### 6. Footer + Navbar crawl boosts
- Add a "Resources" mega-list to `Footer.tsx` (Top 10 highest-traffic posts + 4 hub links + 8 category links).
- Add "Compare" and "Detectors" dropdowns to `Navbar.tsx` desktop nav (mirror in `MobileNav.tsx`).

### 7. Guardrails + validation
- Extend `scripts/seo/check-internal-links.mjs` to fail if any blog spoke lacks ≥3 inbound links.
- Run `check-sitemap-sync.mjs` after route additions.
- Re-run prerender list.

## Out of scope (deferred to P3)
- GSC ingest / analytics dashboards
- Author bio pages with personal schema
- Multi-language hreflang
- Programmatic "X for Y" pages (e.g., "humanizer for nursing students")

## Technical notes
- Reuse: `PillarHubLinks`, `SoftwareApplicationSchema`, `ReviewSchema`, `SpeakableSchema`, `AuthorSchema`, `Breadcrumbs`, `SEOHead`, `FAQSection`.
- New components: `ItemListSchema.tsx`, `programmatic/VsTemplate.tsx`, `programmatic/DetectorTemplate.tsx`, data files `src/data/competitors.ts` + `src/data/detectors.ts`.
- All new routes added to `src/App.tsx` (lazy) + `scripts/seo/prerender-routes.ts` + `public/sitemap.xml`.
- All external app CTAs → `https://app.aifreetextpro.com` with `target="_blank" rel="noopener noreferrer"` (per project memory).

## Deliverables
- 5 hub pages deepened (Index, AIChecker, BypassTurnitin, CompareAIHumanizers, Blog)
- 8 category hub pages live
- 6 new `/vs/*` + 5 new `/detector/*` programmatic pages (11 total)
- Refreshed `llms.txt`, `ai.txt`, `sitemap.xml`, `prerender-routes.ts`
- Footer + Navbar updated
- Guardrail script extended and passing

Estimated effort: ~1 day end-to-end.