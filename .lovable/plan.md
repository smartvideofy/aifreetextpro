## Internal linking audit — findings

I cross-checked every `href`/`to` in `Footer.tsx`, `InternalLinks.tsx`, and `PillarHubLinks.tsx` against the route table in `src/App.tsx`, and counted which pages render any internal-links module (`InternalLinks`, `RelatedArticles`, `PillarHubLinks`/`HubBackLink`).

### 1. Broken internal links (4 — produce 404s on click)
All four live in `src/components/InternalLinks.tsx` `blogPosts[]`:

| Broken slug | Correct slug |
|---|---|
| `/blog/ai-text-converter-human` | `/blog/ai-text-converter` |
| `/blog/ai-writing-detector-employers` | `/blog/ai-detector-employers` |
| `/blog/chatgpt-college-essays-detection` | `/blog/chatgpt-college-essays` |
| `/blog/claude-academic-writing-undetectable` | `/blog/claude-academic-writing` |

Footer.tsx and PillarHubLinks.tsx are clean — every slug resolves.

### 2. Orphan pages (no internal-links module at all)
- **121 blog posts total → only ~39 render `InternalLinks` / `RelatedArticles` / `PillarHubLinks`.** ~82 blog posts are orphans — no related-article block, no hub back-link. Examples: `BestAIDetector2026`, `BestFreeAIHumanizer2026`, `TurnitinVsGPTZeroVsOriginalityAI`, `HumanizeAIText`, `Top10AIHumanizers`, `OriginalityAIReview`, `MakeChatGPTUndetectable`, `PassAllDetectorsGuide`, all 2026 posts, all `AIWriting*` vertical posts, all `Humanize*` model posts.
- **Top-level pages missing it:** `/api`, `/pricing`, `/about`, `/team`, `/technology`, `/case-studies`, `/guarantee`, `/editorial-guidelines`, `/help-center`, `/help-collection/*`, `/help-article/*`. (Legal/utility pages `/privacy-policy`, `/terms-of-service`, `/cookie-settings`, `/contact`, `/404` stay bare on purpose.)

### 3. Stale link rosters
`InternalLinks.tsx` `blogPosts[]` lists 75 posts but the site has 121. High-value 2026 posts (`BestAIDetector2026`, `BestFreeAIHumanizer2026`, `Top10AIWritingTools2026`, `TurnitinVsGPTZeroVsOriginalityAI`, `AIWritingNonNativeEnglish`, `AICollegeAdmissionsEssays`, `AIHumanizerForEssays`, `AIDetectionPublishing`, `AIDisclosurePolicies2026`, etc.) never appear in any cross-link.

### 4. Underused `HubBackLink`
`HubBackLink` is exported from `PillarHubLinks.tsx` but used on zero pages. Spoke pages don't get a standardized link back to their pillar.

---

## Fix plan

### Step 1 — Fix the 4 broken slugs (immediate; trivial)
Edit `src/components/InternalLinks.tsx`:
- Rename the 4 entries to their canonical slugs (table above). No route changes, no slug renames (URL Slug Permanency memory honored).

### Step 2 — Refresh the `blogPosts[]` roster in `InternalLinks.tsx`
Replace/extend the roster so it carries the current 2026 high-value posts and drops the dead entries from Step 1. Cap at ~60 curated entries so the "compact" and "full" variants stay fast. Keep `-2025` slugs intact (URL permanency), update display titles to `2026` where the post body already reads as 2026 (existing convention per the InternalLinks Component Standard memory).

### Step 3 — Add internal-linking modules to the ~82 orphan blog posts
Adopt a one-line standard at the bottom of each blog post (above `<Footer />`):

```tsx
<HubBackLink currentPath="/blog/<slug>" />
<RelatedArticles articles={[/* 3 curated picks */]} />
<InternalLinks variant="compact" currentPage="/blog/<slug>" />
```

- `HubBackLink` resolves the parent pillar automatically when the slug is mapped in `pillarHubs.spokes`; for orphan blogs not in any hub it renders nothing, so it's safe to add everywhere.
- `RelatedArticles` gets 3 hand-picked siblings (same topic cluster) so we keep editorial control.
- `InternalLinks variant="compact"` provides the sitewide cross-cluster set (already optimized).

To keep this manageable, extend `pillarHubs.spokes` in `PillarHubLinks.tsx` with the orphan posts grouped by cluster:
- **Detection hub** spokes += `BestAIDetector2026`, `BestAIDetectorForTeachers`, `FreeAIContentDetector`, `GPTZeroAccuracyReview`, `OriginalityAIReview`, `OriginalityAIAccuracyFalsePositives`, `TurnitinAIDetectionAccuracy`, `TurnitinVsGPTZeroVsOriginalityAI`, `CanDetectorsDetectGPT5`, `DoesTurnitinDetectChatGPT`, `DoesTurnitinDetectGemini`, `DoesGrammarlyTriggerAIDetection`, `CheckMyEssayForAI`, `AIDetectorsClaudeGeminiGPT5`, `ChatGPTPlusDetection`, `ChatGPTvsClaudevsGeminiDetection`.
- **Bypass hub** spokes += `BypassAIDetection`, `BypassAIDetectionGuide`, `MakeChatGPTUndetectable`, `PassAllDetectorsGuide`, `RemoveAIDetection`, `RewriteAIText`, `WriteAIResistantContent`, `TurnitinAppeal`, `TurnitinSimilarityVsAIScore`, `WhyAIContentFails`.
- **Humanizer hub** spokes += `BestFreeAIHumanizer2026`, `Top10AIHumanizers`, `Top10AIWritingTools2026`, `HumanizeAIText`, `HumanizeAITextFreeNoSignup`, `HumanizeChatGPTText`, `HumanizeClaudeOutput`, `HumanizeGeminiOutput`, `HumanizeAILinkedIn2026`, `HumanizeAISocialMedia2026`, `HumanizeAIStories`, `HumanizeAITravelBlogs`, `AIHumanizationPitfalls`, `ParaphrasingVsHumanizing`, `ToneVoiceFlowAIWriting`, `MakeAIWritingCreative`, `AICreativityOriginality`, `SignalVsNoiseHumanText`, `EditingAIDraftsHumanEditor`, `AIHumanizerForEssays`, `AIHumanizerForBlogPosts`, `AIHumanizerResumes`, `AIHumanizerTravelBlogs`, `AIHumanizersForEmailMarketing`, `AIWritingNonNativeEnglish`.
- **Comparison hub** spokes += `UndetectableAIvsAIFreeTextPro`, `UndetectableAIAlternatives`, `UndetectableAIEssayWriter`, `StealthwriterAlternative`, `WordtuneComparison`, `QuillbotVsAIFreeTextPro`, `CopyleaksVsTurnitin`.
- **New "Use cases / verticals" cluster** (or extend Humanizer hub `spokes`) for `AIWritingAcademia`, `AIWritingBusinessReports`, `AIWritingForFreelancers`, `AIWritingNursingHealthcare`, `AIWritingStudents`, `AIWritingUpworkFiverr`, `AIWritingHighSchoolStudents`, `AILegalWriting`, `AIMedicalScientificWriting`, `AIDissertationThesis`, `AIForResearchPapers`, `AICollegeAdmissionsEssays`, `ChatGPTAlternativesEssays`, `ChatGPTCollegeEssays`, `BestChatGPTPromptsForEssays`, `IsItIllegalToUseAIForSchool`, `BestAIToolsForStudents`, `AIHomeworkHelper`, `AIEssayChecker`, `AIParaphrasingToolPlagiarism`, `AcademicAIWritingSafely`, `ClaudeAcademicWriting`, `AIGhostwriter`, `AIGrantWriting`, `AIBlogPostGenerator`, `AICoverLetterGenerator`, `AIInstagramCaptions`, `AITwitterThreadGenerator`, `AIYouTubeScripts`, `AIProductDescriptions`, `AIPressReleases`, `AIContentAtScale`, `AIContentGoogleAIOverviews`, `AIContentMarketingTrends2026`, `AIContentSEO`, `AIPoweredSEOContent2026`, `ZeroClickSearchAI2026`, `MasteringAIPoweredEmailCampaigns2026`, `AIDetectionPublishing`, `AIDisclosurePolicies2026`, `AIDetectionComparison`, `AIDetectionFalsePositives`, `AIDetectionPatterns`, `AIDetectorEmployers`, `AIToolsForWriters`, `CanTurnitinDetectDeepSeek`, `CanTurnitinDetectPerplexity`, `CanTeachersDetectChatGPT`, `DoesCanvasDetectChatGPT`, `HowToCheckIfWrittenByAI`, `HowToCiteAIGeneratedContent`, `HowToDetectAI`, `HowToWriteNaturallyWithAI`, `GPTinfComparison`, `ZeroGPTComparison`, `GPTZeroVsTurnitin`.

### Step 4 — Add internal links to the 6 marketing top-level pages
Add `<InternalLinks variant="full" />` (above `<Footer />`) to `/api`, `/pricing`, `/about`, `/team`, `/technology`, `/case-studies`, `/guarantee`, `/editorial-guidelines`. Skip help-center pages (they have their own collection navigation) and skip legal/contact/404.

### Step 5 — Standardize hub-back links on spoke pages already in `pillarHubs`
On each existing pillar-spoke page (e.g. `/ai-humanizer-for-students`, `/bypass-gptzero-detection`, `/vs-writehuman`, plus the spoke blog posts), insert `<HubBackLink currentPath={location.pathname} />` near the top of the article so equity flows back to the pillar and users get an in-context jump up.

### Step 6 — Add a tiny guardrail
Add `scripts/seo/check-internal-links.mjs` that walks `InternalLinks.tsx`, `PillarHubLinks.tsx`, `Footer.tsx`, and `Navbar.tsx`, asserts every `href` resolves to a `<Route path=…>` in `App.tsx`, and exits non-zero on a miss. Wire it into the existing `scripts/seo/serve-and-audit.mjs` so future broken slugs fail the SEO audit.

### Out of scope (per project memory)
- Will NOT rename any `-2025` URL slug (URL Slug Permanency).
- Will NOT touch Navbar dropdown contents (Header Dropdowns memory).
- Will NOT add em-dashes to any new copy.

### Estimated diff
- 1 edit to `InternalLinks.tsx` (broken slugs + refreshed roster)
- 1 edit to `PillarHubLinks.tsx` (extended spokes)
- ~82 blog post edits (3 lines each at the bottom) + 8 top-level page edits
- 1 new audit script
