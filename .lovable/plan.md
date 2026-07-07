# SEO Audit: Claude Code's Edits

Ran both guardrails and a coverage scan across all 123 blog posts, 170 routes, sitemap, `llms.txt`, `ai.txt`, and `index.html`.

## Overall verdict: solid work, ~85% of the way there

Both hard guardrails pass:

- `check-sitemap-sync.mjs` — 176 `<loc>` entries, all map to canonical routes (149 static + 5 param, 13 redirects correctly excluded).
- `check-internal-links.mjs` — every nav link and every canonical resolves to a real route, no `:param` leaks, no bad segments.

No duplicate canonicals, no `Lovable App` / `Lovable Generated Project` defaults, no drift between `App.tsx` and `sitemap.xml`. All 123 blog posts have `KeyTakeaways`, `AuthorSchema`, `Breadcrumbs`, and canonical tags. Hub schema (`ItemListSchema`) and the programmatic `/vs/*` and `/detector/*` templates are wired end-to-end (routes + sitemap + `llms.txt` + footer).

That's a real, well-executed sprint. The rest is polish, not damage control.

## What Claude got right

1. **Route ↔ sitemap ↔ prerender is one source of truth.** `prerender-routes.ts` derives from `sitemap.xml`, guardrails enforce parity — no way for them to drift silently.
2. **Head metadata pattern is disciplined.** Static `index.html` deliberately omits canonical (comment explains why); every route emits its own via Helmet.
3. **E-E-A-T signals present at scale.** Author schema on every post, breadcrumbs everywhere, `ReviewedBy` on ~63% of posts.
4. **AI-search surface is real.** `llms.txt` and `ai.txt` list the new programmatic pages so GPTBot/PerplexityBot can find them.
5. **Programmatic expansion is safe.** 11 new routes (6 `/vs/*`, 5 `/detector/*`) all resolve, all in the sitemap, all reachable from the footer.

## What's still missing or off

Ordered by SEO impact:

1. **`SpeakableSchema` on only 35 of 123 posts (88 missing).** Voice-search / AI-answer schema is one of the P1 items your memory calls out as required. Biggest gap.
2. **`QuickAnswer` missing on `BypassAIDetection.tsx`** — this is a high-traffic pillar page; a featured-snippet block should exist.
3. **`FAQSection` component not used on `AcademicAIWritingSafely.tsx` and `PassAllDetectorsGuide.tsx`.** They may have inline FAQ markup, but without the component they lose the FAQPage JSON-LD rich-snippet eligibility.
4. **`ReviewedBy` missing on 46 posts (37%).** E-E-A-T is uneven — trust signal absent on a third of the corpus.
5. **`PostHowToSchema` on only 21 posts.** Many "how to" titled posts (e.g. `HowToDetectAI`, `HowToWriteNaturallyWithAI`, `MakeChatGPTUndetectable`, several `Bypass*` guides) qualify for HowTo rich results and don't emit the schema.
6. **`llms.txt` is stamped `2026-06-10` but sitemap `lastmod` is `2026-07-04`.** Minor freshness drift — AI crawlers may treat the file as stale.
7. **`llms.txt` doesn't list the two newest blog posts** (`humanize-gpt5-output`, `ai-detector-for-students-2026`) even though they're in the sitemap.

## Proposed follow-up sprint (P3)

Small, focused, one pass. All frontend/presentation — no business-logic changes.

**A. Schema completeness pass (highest ROI)**
- Add `SpeakableSchema` to the 88 posts missing it (H1 + `.article-summary` + `.key-takeaways` selectors, per your standard).
- Add `QuickAnswer` block to `BypassAIDetection.tsx`.
- Swap inline FAQ for `<FAQSection>` on `AcademicAIWritingSafely.tsx` and `PassAllDetectorsGuide.tsx`.
- Add `ReviewedBy` block to the 46 posts missing it.

**B. HowTo schema pass**
- Identify posts with true step-by-step structure and emit `PostHowToSchema` (target ~15–20 posts: `HowTo*`, `Bypass*Guide`, `Make*Undetectable`, `RemoveAIDetection`, `PassAllDetectorsGuide`, etc.).

**C. Freshness sync**
- Update `public/llms.txt` `Last-Updated` and `public/ai.txt` `Last-Updated` to today.
- Append the two new blog posts to `llms.txt` under the Blog section.
- Re-run `scripts/seo/refresh-sitemap-lastmod.mjs`.

**D. Verification**
- `node scripts/seo/check-sitemap-sync.mjs`
- `node scripts/seo/check-internal-links.mjs`
- Re-audit: confirm 0 posts missing SpeakableSchema / QuickAnswer / FAQSection / ReviewedBy.

**Out of scope for this sprint** (worth flagging, not doing now):
- New content (already shipped 2 P2 posts).
- New programmatic templates.
- Author bio pages, hreflang, GSC ingest.

## Technical notes

- `SpeakableSchema` bulk-add can be done via a small codemod script under `scripts/seo/` that appends the import + component next to existing `<Helmet>` blocks; safer than 88 hand-edits.
- `ReviewedBy` insertion point: after `Breadcrumbs`, before article body — matches the pattern already used on the 77 posts that have it.
- `HowTo` posts need real `steps[]` data, not template stubs — the audit should pick posts with existing numbered `<h2>`/`<h3>` sections and reuse those.
- Estimated effort: ~4 hours end-to-end, dominated by the SpeakableSchema codemod + validation.

Reply "go" (or edit any part) and I'll ship it.
