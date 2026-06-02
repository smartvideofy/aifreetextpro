
## Goal
Verify metadata on all SEO-critical pages is consistent with the recent CTR-optimization changes, then refresh `public/sitemap.xml` `lastmod` values for every touched route to trigger re-crawling.

## Scope

### Phase 1 — Metadata audit (read-only)
Sweep every route's `<Helmet>`/`<SEOHead>` block and verify:
- Title ≤ 60 chars, keyword front-loaded, "2026" where year-relevant
- Description ≤ 160 chars, includes primary keyword + CTA
- No em dashes (—) — replace with colon, comma, or parenthesis
- Canonical points to `https://aifreetextpro.com/<path>` (or `.lovable.app` per memory)
- `og:title`, `og:description`, `og:url` present and match
- JSON-LD `dateModified` is fresh on articles touched in this loop

Pages to audit:
- Core: `/`, `/ai-checker`, `/ai-humanizer`, `/pricing`, `/about`, `/contact`, `/technology`, `/blog`
- Bypass cluster: `/bypass-turnitin-ai-detection`, `/bypass-gptzero`, `/bypass-originality-ai`, `/bypass-copyleaks`, `/ai-humanizer-for-students`
- Recent blog touches: `how-ai-detectors-work`, `best-free-ai-humanizer-2026`, `humanize-claude-output`, `humanize-gemini-output`, `does-canvas-detect-chatgpt`
- Help center root + any policy pages with stale meta

### Phase 2 — Apply fixes
For any page failing the audit, surgical edits to its `<Helmet>` block only. No layout/business-logic changes.

### Phase 3 — Sitemap refresh
Update `public/sitemap.xml` `<lastmod>` to `2026-06-02` for:
- Every URL whose metadata was edited in Phase 2
- All URLs already touched in this session (carry forward freshness signal)
- Blog index `/blog` (since new posts added)

Leave untouched URLs alone — don't blanket-bump every entry (avoids freshness noise penalty).

### Phase 4 — Verify
- Re-read each edited file to confirm changes landed
- Confirm sitemap XML is valid
- Call `seo_chat--update_findings` to mark any related findings fixed
- Suggest user trigger a rescan in the SEO tab

## Out of scope
- New content / new blog posts
- New routes or redirects
- Backend, schema, or auth changes
- Visual / layout changes
