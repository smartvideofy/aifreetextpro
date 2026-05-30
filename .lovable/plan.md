# Live Verification + Phases 3–8 Execution

## Step 1 — Live verification (no code changes)

Run curl-based smoke tests against the live domain to confirm Phases 0–2 actually shipped:

- `curl -sI https://aifreetextpro.lovable.app/` → expect `301` to `https://aifreetextpro.com/`
- `curl -s https://aifreetextpro.com/ai-checker | grep -E '<title>|canonical'` → expect AI Checker title + `canonical = /ai-checker`
- `curl -s https://aifreetextpro.com/pricing | grep -E '<title>|canonical'` → expect Pricing-specific title
- Diff homepage HTML byte size vs `/ai-checker` HTML byte size → must differ

If still identical, Phase 0 needs a deeper fix (host config) before continuing. If unique, proceed.

## Step 2 — Phase 3: Schema upgrades (P1)

- `src/pages/Pricing.tsx` — add JSON-LD with `Product` + 5 `Offer` entries (Free, Starter, Pro, Business, Enterprise) + `AggregateRating` (real review counts only).
- `src/pages/Team.tsx` — add `Person` schema for Dr. Sarah Chen (`jobTitle`, `knowsAbout`, `alumniOf`, `sameAs` linking to author profiles).
- `src/pages/VsUndetectable.tsx`, `VsHumanizeAIPro.tsx`, `VsWriteHuman.tsx` — add `Review` schema (`itemReviewed` = competitor `SoftwareApplication`, `reviewRating`, `author` = Dr. Sarah Chen).
- `public/sitemap.xml` — remove any `llms.txt` entry if present.

## Step 3 — Phase 4: Performance (P2)

- `vite.config.ts` — add `build.modulePreload.resolveDependencies` returning `[]` for non-critical chunks to cut modulepreload bloat in initial HTML.
- `index.html` — add `defer` attribute to GTM `<script>`.
- `src/components/AnimatedBackground.tsx` — verify `contain: paint`, `content-visibility: auto`, `will-change` rules are present per CLS memory; add if missing.

## Step 4 — Phase 5: E-E-A-T (P2)

- Create `src/components/ArticleByline.tsx` rendering `Updated on <time datetime="…"> · Reviewed by Dr. Sarah Chen` with link to `/team`.
- Create `src/components/ArticleFooter.tsx` with author bio card + sameAs links.
- Wire both into the 10 highest-traffic blog posts (top bypass + detector guides). Bulk-rollout to remaining posts deferred.

## Step 5 — Phase 6: 8 new blog posts (P2)

Create under `src/pages/blog/`:

1. `PhraslyAlternative.tsx`
2. `HixBypassReview.tsx`
3. `WinstonAIBypassGuide.tsx`
4. `SmodinVsQuillbotHumanizer.tsx`
5. `DoesCanvasDetectChatGPT.tsx`
6. `HumanizeClaudeOutputGuide.tsx`
7. `HumanizeGeminiOutputGuide.tsx`
8. `AIHumanizerFreeUnlimited.tsx` (new landing/SEO page)

Each: 1,500+ words, `SEOHead` + `QuickAnswer` + `KeyTakeaways` + `FAQSection` + `SpeakableSchema` + `ArticleByline` + `RelatedArticles`. Register routes in `src/App.tsx`, add to `Blog.tsx` index, add to `public/sitemap.xml` and `scripts/seo/prerender-routes.ts`.

## Step 6 — Phase 7: Internal linking + sitemap freshness (P3)

- `src/components/RelatedArticles.tsx` — surface the 8 new posts in matching topic clusters.
- `src/pages/Index.tsx` — add trust-section link to `/ai-checker`.
- Create `scripts/generate-sitemap.ts` driven by `prerender-routes.ts`; update `package.json` `prebuild` to regenerate `public/sitemap.xml` with today's `<lastmod>`.

## Step 7 — Phase 8 (out of scope for this PR)

Authority building (directory submissions, guest posts) is operational, not code. Documented as a follow-up task only.

## Technical notes

- All new schema injected via `react-helmet-async` `<script type="application/ld+json">` inside the existing `SEOHead` pattern (not raw `index.html`).
- All new blog routes use `React.lazy` per route-code-splitting memory.
- Author identity uses the canonical Dr. Sarah Chen profile (no new author personas).
- New posts frame messaging as "improve quality / reduce false flags" — never "beat detectors".
- No em dashes in any new copy.
- All CTAs link to `app.aifreetextpro.com` with `target="_blank" rel="noopener noreferrer"`.

## Acceptance criteria

- Live curl returns unique titles + canonicals for sampled routes.
- `npm run inspect:dist` exits 0 after build.
- 8 new blog routes render with full schema stack and appear in sitemap.
- Pricing page Rich Results test shows `Product` + `Offer` + `AggregateRating` valid.
- VS pages show `Review` schema valid.

## Out of scope

- Full SSR migration
- New visual design directions
- Backlink outreach execution
- Bulk byline rollout to all 100+ existing posts (only top 10 in this PR)
