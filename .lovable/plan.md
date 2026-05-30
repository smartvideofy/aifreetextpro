
# Plan: Fix all SEO issues from the audit

The audit revealed every URL on `aifreetextpro.com` returns the same 265 KB homepage HTML (identical bytes for `/`, `/ai-checker`, `/pricing`, `/blog`, and every blog post). Everything else in the audit is downstream of this. Plan is ordered so the highest-leverage fixes ship first.

---

## Phase 0 — Diagnose & fix the prerender deployment (P0, this week)

The prerender plugin is configured in `vite.config.ts` and generates per-route HTML at build time, but production serves only `index.html` for every route. Two likely causes:

1. The host (Lovable publish) has a SPA catch-all rewrite (`/* → /index.html`) that runs before the per-folder `index.html` file check, so `dist/ai-checker/index.html` is never served.
2. The build is not actually producing per-route folders in `dist/` (puppeteer step silently failed).

Steps:
1. Add a `scripts/seo/inspect-dist.mjs` script that runs after `vite build` and reports which routes produced their own `dist/<route>/index.html` and prints the first 1 KB of `<head>` from each. Wire it into `build:verified`.
2. Run `npm run build:verified` once to confirm whether the build is the problem or the host is.
3. If the build is fine: configure the host to serve static files before falling back to SPA. For Lovable publish, add a `public/_redirects` (Netlify-style) or `public/vercel.json` (Vercel-style) with explicit "try file first" rules. We'll add both so whichever host the publish layer uses picks the right one.
4. If the build is the problem: bump `renderAfterTime`, add `renderAfterDocumentEvent` dispatch in `src/main.tsx` after Helmet flush, and re-run.
5. Verify by running `npm run audit:parity:live` against `https://aifreetextpro.com` — expect each route's title/canonical to match `route-expectations.json`.

Acceptance: `curl -s https://aifreetextpro.com/ai-checker | grep '<title>'` returns the `/ai-checker` title, not the homepage title.

---

## Phase 1 — Canonical & duplicate-domain fixes (P0, same PR as Phase 0)

1. Remove the hardcoded `<link rel="canonical" href="https://aifreetextpro.com/">` from `index.html`. Each route's `SEOHead.tsx` already supplies its own canonical via Helmet; the static one is causing every page to canonicalise to the homepage even after prerender lands.
2. Remove the OG image override that's leaking the Lovable preview-CDN URL into the served HTML (the `og:image` ending in `id-preview-...lovable.app-1778311375936.png`). Trace where it's being injected (likely Lovable platform-level injection or a stale `index.html` block) and replace with the canonical brand OG from `SEOHead.tsx` (`storage.googleapis.com/.../Logo.PNG`).
3. Confirm `aifreetextpro.lovable.app` 301-redirects to `aifreetextpro.com`. If not, add the redirect via host config and `noindex` the lovable.app variant in the meantime.

---

## Phase 2 — Homepage title, OG image, hero (P1, week 1)

1. Rewrite `index.html` `<title>` to `AI Humanizer & Detector — Bypass Turnitin & GPTZero | Free` (58 chars, no monthly date tag). Update meta description to add social proof: `Humanize AI text free — bypass Turnitin, GPTZero & Originality.AI with 98% accuracy. 1,000 free words, no signup. Trusted by 250k+ writers.`
2. Generate a real 1200×630 branded OG image via `imagegen` (premium tier — contains text). Save to `src/assets/og-home.jpg`, reference it as the default in `SEOHead.tsx`.
3. Confirm homepage H1 still reads "Free AI Humanizer Tool" and add an embedded textarea CTA above the fold so users can paste text without leaving `/`.

---

## Phase 3 — Schema upgrades (P1, week 1)

1. Add `Product` + `Offer` + `AggregateRating` schema to `/pricing` (currently missing). Use the 5-tier pricing from memory.
2. Add full `Person` schema for Dr. Sarah Chen on `/team` with `sameAs`, `jobTitle`, `knowsAbout`, `alumniOf`. Reference the same `@id` from every blog post's Article `author` field so the entity links across the site.
3. Add `Review` schema to all four `/vs-*` comparison pages with our verdict + rating.
4. Trim `public/llms.txt` from the full sitemap down to the strongest ~30 URLs.

---

## Phase 4 — Performance tuning (P2, weeks 2–3)

1. Reduce modulepreload bloat by configuring `build.modulePreload.resolveDependencies` in `vite.config.ts` to only preload modules used by the entry chunk for each route.
2. Add `defer` to the GTM `<script>` tag in `index.html`.
3. Verify the `AnimatedBackground` memory rule is applied (CSS `contain` + `content-visibility: auto`).
4. After the above, run PageSpeed on `/`, `/ai-checker`, `/pricing`, `/blog/best-ai-detector-2026` and record LCP/INP/CLS baselines.

---

## Phase 5 — Content E-E-A-T pass (P2, weeks 2–4)

1. Add a visible "Updated on `<time>` · Reviewed by Dr. Sarah Chen" line under the H1 on every blog post (component: extend `KeyTakeaways` or add `ArticleByline`).
2. Audit which posts use the existing `QuickAnswer` component; add it to the top 30 posts that don't have it yet (40–60 word answer-first paragraph for AI Overviews capture).
3. Add a definitional sentence ("AI Free Text Pro is a free AI humanizer and detector that…") to the first paragraph of the top 30 posts.
4. Build an `ArticleFooter` component with expanded author bio + credentials + 3 related posts; render at bottom of every `/blog/*` page.

---

## Phase 6 — Content production (P2, weeks 3–8)

Ship 8 new posts from the 50-idea backlog, prioritising competitor intercepts (fastest ROI):
1. `phrasly-alternative`
2. `hix-bypass-review`
3. `winston-ai-bypass-guide`
4. `smodin-vs-quillbot-humanizer`
5. `does-canvas-detect-chatgpt`
6. `humanize-claude-output-guide`
7. `humanize-gemini-output-guide`
8. `ai-humanizer-free-unlimited` (new landing page, not blog)

Each follows the existing blog component pattern (Helmet + Breadcrumbs + QuickAnswer + KeyTakeaways + FAQSection + RelatedArticles). Add to `App.tsx` routes, sitemap, and `prerender-routes.ts`.

---

## Phase 7 — Internal linking & sitemap freshness (P3, week 4)

1. Update `RelatedArticles` mapping so the highest-traffic posts (`how-ai-detectors-work`, `does-turnitin-detect-chatgpt`, `can-teachers-detect-chatgpt`) link out to the new 2026 posts.
2. Add a homepage trust-section link to `/ai-checker` with anchor "free AI detector".
3. Switch `public/sitemap.xml` from hand-edited to a generated `scripts/generate-sitemap.ts` (wired to `prebuild`) so `lastmod` always matches the actual route inventory.

---

## Phase 8 — Authority building (P3, ongoing from week 5)

1. Submit to 25 AI tool directories (Futurepedia, There's An AI For That, Toolify, Future Tools, AlternativeTo, SaaSHub, AI Tools Directory, AIcyclopedia, TopAI.tools, Insidr, etc.). Track submissions in a `docs/directory-submissions.md` checklist file.
2. Outreach plan for 5 guest posts (Search Engine Journal, EdSurge, Copy.ai blog, etc.) — pure docs/checklist, no code.
3. Design the "State of AI Detection 2026" survey landing page for month 3 digital-PR launch (separate plan when we get there).

---

## Technical details

- **Files touched in Phase 0:** new `scripts/seo/inspect-dist.mjs`; possibly new `public/_redirects`, `public/vercel.json`; possibly `vite.config.ts` (prerender tuning); possibly `src/main.tsx` (Helmet flush signal).
- **Files touched in Phase 1:** `index.html` (remove canonical, OG image overrides).
- **Files touched in Phase 2:** `index.html` (title/desc), `src/components/SEOHead.tsx` (new default OG), `src/assets/og-home.jpg` (new), `src/pages/Index.tsx` (embedded tool).
- **Files touched in Phase 3:** `src/pages/Pricing.tsx`, `src/pages/Team.tsx`, `src/pages/Vs*.tsx`, `public/llms.txt`.
- **Files touched in Phase 5:** new `src/components/ArticleByline.tsx`, `src/components/ArticleFooter.tsx`; bulk-edit top 30 `src/pages/blog/*.tsx`.
- **Files touched in Phase 6:** 8 new `src/pages/blog/*.tsx`, `src/App.tsx`, `scripts/seo/prerender-routes.ts`, `public/sitemap.xml`, `src/pages/Blog.tsx`.
- **Files touched in Phase 7:** new `scripts/generate-sitemap.ts`, `package.json` (prebuild hook), `src/components/RelatedArticles.tsx`.

## Out of scope (intentionally deferred)

- Refactoring the entire blog index data structure (covered by your "Blog Discovery" memory; current shape works).
- Migrating off Vite + react-helmet-async to a true SSR framework (Next/Remix/TanStack Start). The prerender plugin should be enough once Phase 0 is fixed; full SSR is a 4-week project we'd revisit only if AI bots still can't see content after Phase 0.
- New visual design directions.

## Order of operations summary

1. **Today–day 3:** Phases 0 + 1 (prerender + canonical) shipped together as one PR. This single PR unlocks 80%+ of the SEO ceiling.
2. **Week 1:** Phase 2 + 3 (homepage polish + schema).
3. **Weeks 2–3:** Phase 4 (performance) + start Phase 5 (E-E-A-T pass).
4. **Weeks 3–8:** Phase 6 (8 new posts at ~1/week) + Phase 7 (internal linking).
5. **Week 5+:** Phase 8 (directory submissions + outreach, compounds over months).

Approve to start with Phase 0 + 1 as a single PR.
