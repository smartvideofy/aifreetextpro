## GSC Performance Audit — 28 Days Ending May 1, 2026

### Headline Numbers
- **Clicks: 1,559** | **Impressions: 35,994** | **CTR: 4.33%** | **Avg Pos: 9.65**
- vs. April audit (12,642 clicks / 56,134 impr / 22.5% CTR): **clicks down ~88%, CTR down ~80%.** This is a serious regression.

### Critical Issues Found

**1. Catastrophic 4-week trend collapse**
- Week 1: 1,309 clicks / 12,341 impressions / avg pos 7.59
- Week 4: **58 clicks / 4,902 impressions / avg pos 10.36**
- Clicks fell 95% week-over-week-of-month while impressions fell 60%. Positions slipped ~3 spots. Something broke around mid-April — likely a deployment, canonical, or robots/sitemap regression, or branded query loss.

**2. Mobile indexing is effectively broken**
- Desktop: 1,046 clicks / 34,219 impressions (CTR 3.06%, pos 9.30)
- Mobile: **478 clicks / 1,707 impressions** — only 4.7% of total impressions
- Tablet: 35 / 68
- Google indexes mobile-first. Receiving 20× more desktop than mobile impressions means the mobile rendering is failing crawl/index parity. This aligns with the prior memory about mobile pos 25 vs desktop 6.8 — but now it's worse: mobile is barely served at all.

**3. CTR catastrophes on huge-impression pages (massive lost clicks)**

| Page | Impr | CTR | Pos |
|---|---|---|---|
| /blog/how-ai-detectors-work | 9,391 | **0.00%** | 6.88 |
| /blog/best-free-ai-humanizer-2026 | 5,881 | 0.12% | 9.63 |
| /blog/ai-detection-patterns-explained | 3,016 | 0.03% | 7.85 |
| /ai-checker | 2,532 | 1.03% | 2.03 |
| /blog/bypass-zerogpt-ai-detection | 2,416 | 0.04% | 7.96 |
| /bypass-turnitin-ai-detection | 2,274 | 0.31% | 5.94 |
| /pricing | 1,507 | 0.07% | 2.41 |
| /technology | 850 | 0.00% | 1.17 |
| /about | 563 | 0.18% | 1.63 |

A page at position 1.17 with 850 impressions and 0 clicks is broken — title/description not rendering for crawlers, or showing wrong snippet. Same for /pricing at pos 2.41 with 0.07% CTR.

**4. "Striking distance" non-brand queries at pos 1–10 with ZERO clicks**
All of these have 30–91 impressions, position 2–11, and 0 clicks — meaning the SERP snippet is unappealing or wrong:
- "how ai detectors work perplexity burstiness" — pos **2.16**, 74 impr, 0 clicks
- "how ai text detectors work perplexity burstiness" — pos 3.00, 53 impr, 0 clicks
- "best free ai text humanizer no signup 2026" — pos 4.00, 40 impr, 0 clicks
- "humanize ai pricing plans free tier" — pos 5.86, 70 impr, 0 clicks
- "best free ai humanizer tools 2026" — pos 10.80, 91 impr, 0 clicks
- "how to make ai generated text undetectable by zerogpt" — pos 10.58, 77 impr, 0 clicks

A page ranking #2 with 0 CTR is the strongest possible signal of a broken/missing snippet.

**5. US performance is dramatically underperforming**
- US: 19,500 impressions, **CTR 1.42%, pos 9.93**
- Philippines: 634 impressions, CTR 41.17%, pos 3.78
- South Africa: 302 impressions, CTR 39.74%, pos 5.61
- US is 54% of all impressions but only 18% of clicks. Positions ~10 in US suggest competitive SERPs eating snippets (AI Overviews, People Also Ask, featured snippets from competitors). No US-specific structured data wins.

**6. Branded vs non-branded imbalance**
- Branded: 1,189 clicks from 2,506 impressions (47% CTR) — only 12 distinct branded queries
- Non-branded: 222 clicks from 5,434 impressions (4.09% CTR) across 988 queries
- 76% of clicks come from brand searches. Non-brand discovery is weak relative to impression volume.

**7. Pages ranking deep (pos 15–32) burning impressions**
- /blog/ai-essay-checker — pos 31.34, 175 impr
- /blog/originality-ai-review-how-to-beat — pos 31.35, 157 impr
- /api — pos 17.31, 190 impr
- /compare-ai-humanizers — pos 18.70, 105 impr

**8. /blog/how-ai-detectors-work is the single biggest miss**
9,391 impressions at position 6.88 with **literally zero clicks**. Multiple "perplexity & burstiness" queries hit this page at pos 2–3 with 0 CTR. The snippet is broken or being suppressed (likely truncated title, duplicate H1, or AI Overview cannibalization). Fixing just this page could recover hundreds of clicks/month.

---

### Remediation Plan (Priority Order)

**P0 — Diagnose the trend collapse (do this first, before any rewrites)**
- Pull GSC URL Inspection results for the homepage and `/blog/how-ai-detectors-work` to confirm indexing status, last crawl date, and rendered HTML
- Check `public/robots.txt`, `public/sitemap.xml`, and any recent canonical changes
- Compare deployed `index.html` and prerendered metadata vs. April baseline
- Verify `/api`, `/contact`, `/technology`, and pricing pages are returning 200 with full HTML to Googlebot (not blank SPA shells)

**P1 — Fix mobile indexing parity**
- Audit mobile rendering of the LCP image, hero, and below-fold lazy components — ensure `<title>`, meta description, and JSON-LD are present in initial mobile HTML payload
- Add mobile-specific viewport and touch-icon checks
- Verify lazy-loaded routes don't strip critical SEO tags before hydration on mobile bots
- Consider adding prerendered HTML snapshots for the top 20 traffic pages

**P2 — Rewrite snippets for the 9 zero-CTR top pages** (biggest immediate ROI)
For each, rewrite `<title>` (≤60 chars, front-loaded keyword + benefit + year + brand) and meta description (140–155 chars, hook + specificity + CTA):
- `/blog/how-ai-detectors-work` — target "perplexity burstiness" queries explicitly in title
- `/blog/best-free-ai-humanizer-2026`
- `/blog/ai-detection-patterns-explained`
- `/ai-checker` (pos 2.03 with 1% CTR is unacceptable)
- `/blog/bypass-zerogpt-ai-detection`
- `/bypass-turnitin-ai-detection`
- `/pricing` (pos 2.41, 0.07% CTR)
- `/technology` (pos 1.17, 0% CTR — diagnose snippet first)
- `/about` (pos 1.63, 0.18% CTR)

**P3 — Add `speakable` + `mainEntity` schema + FAQ rich-result hooks**
Pages at pos 2–4 with 0 CTR are losing to AI Overviews. Add:
- Tighter `Article` + `FAQPage` JSON-LD with direct question matches to the actual GSC queries (e.g., "How do AI detectors work using perplexity and burstiness?")
- `HowTo` schema where applicable on humanizer/bypass guides
- Verify schemas appear in prerendered HTML (not just runtime Helmet)

**P4 — US-market SERP feature optimization**
- Add `Review` and `AggregateRating` schema to `/ai-checker`, `/pricing`, comparison pages — US SERPs reward this
- Add table-of-contents anchors on long blogs to win sitelinks
- Target "People Also Ask" by adding 2–3 PAA-style H3s near the top of high-impression blog pages

**P5 — Recover deep-ranking pages**
- Refresh `dateModified`, expand content depth, strengthen internal links from homepage/pillar pages to: `/api`, `/compare-ai-humanizers`, `/blog/ai-essay-checker`, `/blog/originality-ai-review-how-to-beat`

**P6 — Non-branded query expansion**
- 76% of clicks are branded. Build dedicated landing pages or H2s for the top non-brand zero-CTR queries: "best free AI humanizer tools 2026", "humanize AI pricing free tier", "how to make AI undetectable by ZeroGPT"

**P7 — Monitoring**
- Set up weekly automated GSC export + diff so a future collapse is caught within days, not a month

---

### Suggested Execution Order
1. (Diagnosis-only, no code) Inspect index.html, robots.txt, sitemap, and recent commits for what changed mid-April
2. Fix `/blog/how-ai-detectors-work` snippet + schema (single biggest unlock — 9,391 impressions)
3. Batch rewrite the other 8 zero/low-CTR top pages
4. Mobile indexing parity audit + fix
5. US SERP feature schema rollout
6. Deep-ranking page refreshes

Approving this plan switches to default mode where I'll start with step 1: inspecting `index.html`, recent metadata changes, and the actual rendered HTML of `/blog/how-ai-detectors-work` before touching code.