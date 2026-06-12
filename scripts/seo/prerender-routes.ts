// Routes to prerender at build time. Order is irrelevant.
// Keep this list curated to high-impact SEO pages so build time stays manageable.
export const prerenderRoutes = [
  "/",
  "/ai-checker",
  "/pricing",
  "/about",
  "/technology",
  "/team",
  "/contact",
  "/guarantee",
  "/case-studies",
  "/editorial-guidelines",
  "/privacy-policy",
  "/terms-of-service",
  "/api",
  "/blog",
  "/help-center",

  // Bypass landing pages
  "/bypass-turnitin-ai-detection",
  "/bypass-gptzero-detection",
  "/bypass-originality-ai",

  // Comparison pages
  "/compare-ai-humanizers",
  "/vs-writehuman",
  "/vs-undetectable-ai",
  "/vs-humanizeai-pro",

  // Programmatic /vs/ comparison pages
  "/vs/stealthwriter",
  "/vs/phrasly",
  "/vs/bypassgpt",
  "/vs/netus-ai",
  "/vs/twixify",
  "/vs/humbot",

  // Programmatic /detector/ pages
  "/detector/turnitin",
  "/detector/gptzero",
  "/detector/originality",
  "/detector/copyleaks",
  "/detector/winston",

  // Use case pages
  "/ai-humanizer-for-students",
  "/ai-humanizer-for-writers",
  "/academic-ai-writing-tool",

  // Top-priority blog posts (SEO traffic targets)
  "/blog/how-ai-detectors-work",
  "/blog/best-free-ai-humanizer-2026",
  "/blog/bypass-zerogpt-ai-detection",
  "/blog/can-ai-detectors-detect-gpt5",
  "/blog/ai-college-admissions-essays-personal-statements",
  "/blog/ai-writing-non-native-english-speakers",
  "/blog/top-10-ai-humanizer-tools-2025",
  "/blog/top-10-ai-writing-tools-2026",
  "/blog/humanize-ai-text-without-losing-voice",
  "/blog/make-chatgpt-undetectable-2025",
  "/blog/pass-all-ai-detectors-guide",
  "/blog/bypass-ai-detection-guide",
  "/blog/ai-detection-tools-compared-2025",
  "/blog/turnitin-vs-gptzero-vs-originality-ai",
  "/blog/does-turnitin-detect-chatgpt",
  "/blog/can-teachers-detect-chatgpt",
  "/blog/gptzero-accuracy-review",
  "/blog/originality-ai-review-how-to-beat",
  "/blog/free-ai-content-detector",
  "/blog/humanize-chatgpt-text",
  "/blog/best-ai-detector-2026",
  "/blog/stealthwriter-alternative",
  "/blog/ai-humanizer-for-essays",
  "/blog/humanize-gpt5-output",
  "/blog/ai-detector-for-students-2026",
];

// Routes that should be prerendered with verbose Helmet flush logging.
// Override at build time:  PRERENDER_DEBUG_ROUTES=/ai-checker,/pricing
export const prerenderDebugRoutes: string[] = (() => {
  const env = (typeof process !== "undefined" && process.env?.PRERENDER_DEBUG_ROUTES) || "";
  const fromEnv = env
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  // Always debug /ai-checker by default — that's the route we're chasing.
  return Array.from(new Set([...fromEnv, "/ai-checker"]));
})();
