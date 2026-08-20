# GSC Recovery & Ranking Plan (28 days to 2026-08-20)

## What the data says

Totals: 646 clicks / 24,135 impressions / 2.7% CTR / avg position 38.9.

Five findings that matter:

1. **A ranking drop started Aug 12.** Average position went from ~30 (Jul 21 - Aug 11) to 50-57 (Aug 12-17), and clicks fell from ~28/day to 7-19/day while impressions *rose* to ~950/day. Classic signature of many thin/near-duplicate URLs entering the index at deep positions and diluting site-level quality signals. This coincides with the recent bulk programmatic + codemod rollout.
2. **Traffic is 78% branded.** Non-branded queries: 6,380 impressions but only 73 clicks (1.1% CTR). We rank, but not on page 1, and titles are not earning clicks.
3. **One page is a huge liability.** `/blog/how-to-check-if-written-by-ai` = 4,523 impressions (19% of all impressions), 2 clicks, average position 70. It is matching high-volume queries ("did ai write this", "detect ai writing", "ai writing checker") from position 70-85. Either it wins these or it should stop competing with `/ai-checker`.
4. **Desktop is broken relative to mobile.** Desktop: 18,712 impressions, position 39, CTR 1.9%. Mobile: 2,725 impressions, position 16.8, CTR 10.4%. A 22-position desktop/mobile gap on the same URLs is not normal query mix; it points to desktop SERP features and deep-position long-tail matching.
5. **Real striking-distance cluster exists and is unmonetised:** paraphrase-to-avoid-detection terms (position 16-20, 148 combined impressions, 0 clicks), "copyleaks vs turnitin" (7.6), "free ai humanizer and detector" (6.6), "best ai detector for teachers" (15.2), "ai text free" (11.0).

## Phase 1 - Stop the bleed (do first)

- **Index hygiene by differentiation, not deletion.** Keep every route indexed. For routes added in the last two sprints that overlap an existing post, make each one genuinely distinct: unique H1, unique QuickAnswer, unique intro and at least one section of original data or examples the sibling page does not have. No `noindex`, no consolidation, no removals.
- **Fix the orphan-by-canonical case.** `/blog/bypass-ai-detection-ethical-tips` earns 572 impressions but self-canonicalises to `/blog/bypass-ai-detection-guide` and is excluded from the sitemap. Give it a self-canonical, add it to the sitemap and differentiate its angle (ethical/policy framing) so it ranks in its own right instead of leaking.
- **Make `/blog/how-to-check-if-written-by-ai` win its own intent.** Keep it indexed and ranking. It matches "did ai write this", "detect ai writing", "ai writing checker" from position 70-85, so the fix is strength, not suppression: rewrite title/H1/intro to own the informational "how do I tell if AI wrote this" phrasing, add a detector-signal checklist and a comparison table with dates, add FAQ coverage for the exact queries above, and link to `/ai-checker` for the tool intent. `/ai-checker` targets transactional "check my text" wording so the two reinforce each other rather than sharing a title.

- **Trailing-slash duplicate.** `/blog/best-free-ai-humanizer-2026/` appears separately with 21 impressions. Add a canonical-host/slash redirect rule.

## Phase 2 - Win the striking-distance terms (weeks 1-2)

Each item is a targeted on-page rewrite, not a new page:

| Cluster | Current | Action |
|---|---|---|
| paraphrase / paraphrasing tool to avoid ai detection (pos 16-20) | `/blog/ai-paraphrasing-tool-avoid-plagiarism`, 715 impr, 0 clicks | Retitle around "paraphrase to avoid AI detection", add a comparison table of paraphrasing vs humanizing, add QuickAnswer targeting the exact phrase |
| copyleaks vs turnitin (pos 7.6) | `/blog/copyleaks-vs-turnitin`, 286 impr, 1 click | Add head-to-head accuracy table with dates, FAQ schema, tighten title to under 60 chars with year |
| best ai detector for teachers / ai detection for teachers (pos 15-48) | `/blog/best-ai-detector-for-teachers`, 781 impr, 0 clicks | Rewrite intro as a direct answer, add teacher-specific FAQ block, internal links from detector hub |
| free ai detector and humanizer / free ai humanizer and detector (pos 6-13) | homepage | Add an explicit "free AI detector and humanizer" section with that phrasing in an H2, plus the 1,000-free-words claim above the fold |
| ai detector unlimited words / no word limit (pos 22-92) | none owns it | Single new page: honest "how many words can you check free" page that ranks for the unlimited-words intent without over-promising |

## Phase 3 - CTR recovery (weeks 2-3)

- Rewrite titles and meta descriptions for every page with >100 impressions and <2% CTR (35 pages in the export). Lead with the outcome and a number, keep titles under 60 characters, descriptions under 155.
- Prioritise: `/ai-checker` (853 impr, 1.5%), `/api` (759 impr, 1.3%), `/blog/how-ai-detectors-work` (1,455 impr, 0.14%), `/blog/does-grammarly-trigger-ai-detection` (1,320 impr, 0.15%), `/blog/ai-detection-patterns-explained`, `/blog/bypass-ai-detection-guide`.
- `/ai-humanizer-for-students` sits at position 2.2 with 1.2% CTR on 490 impressions. That is a title/description problem only, and the fastest win on the whole site.

## Phase 4 - Authority for the informational head terms (weeks 3-6)

"how do ai detectors work" (162 impr, pos 38), "what is burstiness" (112, pos 31), "how does ai detection work" (83, pos 44) are all owned by two posts stuck outside page 3. These need depth, not schema:

- Expand `/blog/how-ai-detectors-work` into the definitive explainer: original worked examples with real perplexity/burstiness numbers, annotated screenshots, a diagram, and a methodology note describing how we tested.
- Give `/blog/what-is-perplexity-burstiness` a standalone definition block that can win the "what is burstiness" featured snippet.
- Interlink both from every detector page so the hub concentrates internal PageRank on two URLs instead of spreading it across dozens.

## Phase 5 - Geography and desktop (ongoing)

- Philippines, India, Malaysia, Indonesia, Vietnam and Bangladesh generate 5,880 impressions at position ~40 with weak CTR. These are our highest-volume markets by impression. Add a market-relevant landing angle (student pricing, local exam/assignment context) rather than ignoring them.
- Nigeria (7.4), Kenya (9.2), Peru (7.1), Ghana (9.0) already rank on page 1 with 13-29% CTR. Build on that with content that mentions those academic contexts explicitly.
- Investigate the desktop position gap once Phase 1 index hygiene lands, then re-measure. Do not act on it before the noise from the deep-index URLs is removed.

## Measurement

Re-pull GSC weekly and track four numbers only: non-branded clicks, non-branded CTR, count of URLs receiving impressions, and average position for the striking-distance set above. Phase 1 should show average position recovering toward 30 within two weeks; Phase 2 and 3 should show non-branded CTR moving from 1.1% toward 3%.
