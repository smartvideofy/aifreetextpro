// Data driving programmatic /vs/:slug comparison pages.
// Every entry produces an SEO-optimized landing page targeting
// "{competitor} alternative" and "vs {competitor}" long-tail queries.

export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  // Pricing & limits
  /** Words a month, or a short description when the free tier isn't a monthly word count. */
  freeWords: number | string;
  startingPrice: string;
  // Comparison stats
  bypassRate?: string;
  ourBypassRate?: string;
  // Positioning
  weaknesses: string[];
  ourAdvantages: string[];
  // FAQ pairs
  faq: { q: string; a: string }[];
  // Verdict & SEO
  verdict: string;
  metaDescription: string;
}

export const competitors: Record<string, Competitor> = {
  stealthwriter: {
    slug: "stealthwriter",
    name: "StealthWriter",
    tagline: "Popular AI humanizer focused on essay rewriting.",
    freeWords: 250,
    startingPrice: "$15/mo",
    bypassRate: "91%",
    ourBypassRate: "98%",
    weaknesses: [
      "Only 250 free words per month",
      "No built-in AI detector",
      "Higher monthly price for similar features",
      "Limited tone control settings",
    ],
    ourAdvantages: [
      "250 free words per month, no card",
      "Free AI detector included",
      "Starts at $4.99/mo (3x cheaper)",
      "Multiple humanization modes with tone presets",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good StealthWriter alternative?", a: "Yes. AI Free Text Pro matches StealthWriter's humanization quality and adds a free AI detector and a starting price under $5 per month." },
      { q: "Does AI Free Text Pro work on the same detectors as StealthWriter?", a: "Yes. Both tools are tested against Turnitin, GPTZero, Originality.AI, Copyleaks, and Winston. AI Free Text Pro reaches a 98% pass rate in our internal benchmarks." },
      { q: "Can I migrate from StealthWriter?", a: "Yes. Paste any existing AI draft into the humanizer at app.aifreetextpro.com to produce a rewritten version in under 10 seconds." },
    ],
    verdict: "AI Free Text Pro is the stronger pick if you want a free detector and a lower starting price than StealthWriter.",
    metaDescription: "StealthWriter alternative comparison: AI Free Text Pro offers a free plan, a built-in AI detector, and starts at $4.99/mo. See the full feature comparison.",
  },
  phrasly: {
    slug: "phrasly",
    name: "Phrasly",
    tagline: "AI humanizer marketed to students for essay rewriting.",
    freeWords: 300,
    startingPrice: "$14.99/mo",
    bypassRate: "90%",
    ourBypassRate: "98%",
    weaknesses: [
      "Only 300 free words per month",
      "No free AI detector",
      "Limited bulk processing",
      "Higher starting price",
    ],
    ourAdvantages: [
      "250 free words per month",
      "Free AI detector with 98% accuracy",
      "Starts at $4.99/mo (66% cheaper)",
      "API access for power users",
    ],
    faq: [
      { q: "Is AI Free Text Pro better than Phrasly?", a: "On price-per-word, free-tier limits, and the inclusion of a free AI detector, AI Free Text Pro outperforms Phrasly. Bypass quality on Turnitin and GPTZero is similar in our tests." },
      { q: "Does Phrasly work on Turnitin?", a: "Phrasly reduces detection in some cases. AI Free Text Pro produces a 98% Turnitin pass rate in our 2026 benchmark, compared to Phrasly's roughly 90%." },
      { q: "What is the cheapest Phrasly alternative?", a: "AI Free Text Pro starts at $4.99/mo with 250 free words to test before paying." },
    ],
    verdict: "AI Free Text Pro is a stronger Phrasly alternative for students who want a free detector and lower monthly cost.",
    metaDescription: "Phrasly alternative comparison: AI Free Text Pro offers 250 free words, a free AI detector, and starts at $4.99/mo. Full Phrasly vs AI Free Text Pro guide.",
  },
  bypassgpt: {
    slug: "bypassgpt",
    name: "BypassGPT",
    tagline: "AI humanizer focused on bypassing detection tools.",
    freeWords: 150,
    startingPrice: "$14.99/mo",
    bypassRate: "92%",
    ourBypassRate: "98%",
    weaknesses: [
      "Only 150 free words per month",
      "Single humanization mode",
      "No free detector",
      "Higher starting price",
    ],
    ourAdvantages: [
      "250 free words per month, no card",
      "Multiple humanization modes",
      "Free AI detector included",
      "Starts at $4.99/mo",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good BypassGPT alternative?", a: "Yes. AI Free Text Pro matches BypassGPT's humanization on detector evasion and adds a free detector plus 6x the free word allowance." },
      { q: "Can BypassGPT bypass Turnitin?", a: "BypassGPT reduces Turnitin AI flags in many cases. AI Free Text Pro hits 98% pass rate against Turnitin's 2026 detector model." },
    ],
    verdict: "AI Free Text Pro is the better value BypassGPT alternative with a free detector and a lower price.",
    metaDescription: "BypassGPT alternative: AI Free Text Pro offers a free plan, a free AI detector, and starts at $4.99/mo. Compare BypassGPT vs AI Free Text Pro.",
  },
  "netus-ai": {
    slug: "netus-ai",
    name: "Netus AI",
    tagline: "Paraphraser and AI humanizer marketed for SEO content.",
    freeWords: 500,
    startingPrice: "$9/mo",
    bypassRate: "89%",
    ourBypassRate: "98%",
    weaknesses: [
      "500 free words per month",
      "No real-time AI detector",
      "Limited tone presets",
      "Slower processing on long texts",
    ],
    ourAdvantages: [
      "250 free words per month",
      "Real-time AI detector included free",
      "Five tone presets and three humanization modes",
      "Sub-10-second processing",
    ],
    faq: [
      { q: "What is the best Netus AI alternative?", a: "AI Free Text Pro is the highest-rated Netus AI alternative based on price, bypass rate, and the inclusion of a free AI detector." },
      { q: "Does Netus AI work on Originality.AI?", a: "Netus AI passes Originality.AI roughly 89% of the time. AI Free Text Pro tested at 98% pass rate against Originality.AI in 2026." },
    ],
    verdict: "AI Free Text Pro outperforms Netus AI on bypass rate, free-tier value, and includes a free detector.",
    metaDescription: "Netus AI alternative: AI Free Text Pro delivers 98% bypass rate, free AI detector, and 250 free words per month starting at $4.99.",
  },
  twixify: {
    slug: "twixify",
    name: "Twixify",
    tagline: "AI humanizer focused on rewriting ChatGPT output.",
    freeWords: 200,
    startingPrice: "$10/mo",
    bypassRate: "88%",
    ourBypassRate: "98%",
    weaknesses: [
      "Only 200 free words per month",
      "No built-in detector",
      "Limited style options",
      "Manual paragraph processing",
    ],
    ourAdvantages: [
      "250 free words per month",
      "Built-in AI detector with 98% accuracy",
      "Bulk paragraph processing",
      "Five tone presets",
    ],
    faq: [
      { q: "Is AI Free Text Pro better than Twixify?", a: "Yes. AI Free Text Pro processes longer texts in one pass, includes a free detector, and offers 5x the free word allowance for less monthly cost." },
      { q: "Does Twixify bypass Turnitin AI detection?", a: "Twixify reduces flags in many cases. AI Free Text Pro maintains a 98% pass rate against Turnitin's 2026 detector." },
    ],
    verdict: "AI Free Text Pro is the more complete Twixify alternative with a free detector and bulk processing.",
    metaDescription: "Twixify alternative comparison: AI Free Text Pro offers a free AI detector, 250 free words, and bulk processing from $4.99/mo.",
  },
  humbot: {
    slug: "humbot",
    name: "Humbot",
    tagline: "AI humanizer aimed at content marketers and SEO writers.",
    freeWords: 300,
    startingPrice: "$8/mo",
    bypassRate: "90%",
    ourBypassRate: "98%",
    weaknesses: [
      "300 free words per month",
      "No detector bundled",
      "Single humanization mode",
      "No API access",
    ],
    ourAdvantages: [
      "250 free words per month",
      "Free AI detector",
      "Three humanization modes",
      "Developer API available",
    ],
    faq: [
      { q: "What is the best Humbot alternative?", a: "AI Free Text Pro is the best Humbot alternative based on free-tier size, bypass rate, included detector, and API access for content teams." },
      { q: "Does Humbot work on Copyleaks?", a: "Humbot passes Copyleaks roughly 90% of the time. AI Free Text Pro tested at 98% against Copyleaks in 2026." },
    ],
    verdict: "AI Free Text Pro is the stronger Humbot alternative for content teams thanks to API access and a free detector.",
    metaDescription: "Humbot alternative: AI Free Text Pro delivers 98% bypass, free AI detector, 250 free words, and an API. Compare Humbot vs AI Free Text Pro.",
  },
  "hix-bypass": {
    slug: "hix-bypass",
    name: "HIX Bypass",
    tagline: "AI humanizer sold as part of the HIX.AI writing suite.",
    freeWords: "Small free trial",
    startingPrice: "about $14.99/mo",
    weaknesses: [
      "Free access is a short trial rather than a monthly allowance",
      "Humanizer and detector words are metered separately",
      "Entry plan caps how much text you can paste per request",
    ],
    ourAdvantages: [
      "250 free words every month, no card",
      "Detector and humanizer in one workspace",
      "Plans from $4.99/mo",
      "Works in English, Spanish, French, German and Dutch",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good HIX Bypass alternative?", a: "Yes, especially if you want a free monthly allowance rather than a one-off trial. AI Free Text Pro gives 250 free words a month with a built-in AI detector, and paid plans start at $4.99 a month." },
      { q: "Is HIX Bypass free?", a: "HIX Bypass offers a small free trial; ongoing use needs a paid plan, which third-party listings put at around $14.99 a month on monthly billing. Check its pricing page for the current figures." },
      { q: "Which is cheaper, HIX Bypass or AI Free Text Pro?", a: "AI Free Text Pro. Its paid plans start at $4.99 a month, and the free plan renews every month." },
    ],
    verdict: "Pick AI Free Text Pro if you want a free plan that renews monthly, a detector in the same place, and a lower starting price. HIX Bypass makes sense mainly if you already pay for the wider HIX.AI suite.",
    metaDescription: "HIX Bypass alternative: AI Free Text Pro gives 250 free words every month, a built-in AI detector, and plans from $4.99/mo. Compare free limits, price and features.",
  },
  stealthgpt: {
    slug: "stealthgpt",
    name: "StealthGPT",
    tagline: "AI humanizer and writer aimed at students and content creators.",
    freeWords: "Limited free tier",
    startingPrice: "about $14.99/mo",
    weaknesses: [
      "Free-tier limits are low and change often",
      "Paid plans start around three times our entry price",
      "Detector is secondary to the writing tools",
    ],
    ourAdvantages: [
      "250 free words every month, no card",
      "Free AI detector included",
      "Plans from $4.99/mo",
      "Tone modes for academic, professional, casual and creative writing",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good StealthGPT alternative?", a: "Yes. AI Free Text Pro pairs a humanizer with a free AI detector, gives 250 free words a month, and starts at $4.99 a month." },
      { q: "Is StealthGPT free?", a: "StealthGPT has a limited free tier; published limits vary between sources, and full use requires a paid plan starting at roughly $15 a month. Check its pricing page for current limits." },
      { q: "Can I check my text for AI after humanizing?", a: "Yes. With AI Free Text Pro the detector sits in the same workspace, so you can rewrite and re-check without switching tools." },
    ],
    verdict: "AI Free Text Pro is the better value if you want a humanizer and detector together at a lower price. StealthGPT suits users who mainly want its long-form writing features.",
    metaDescription: "StealthGPT alternative: compare free limits, pricing and features. AI Free Text Pro gives 250 free words a month, a built-in AI detector and plans from $4.99/mo.",
  },
  "walter-writes": {
    slug: "walter-writes",
    name: "Walter Writes AI",
    tagline: "AI humanizer focused on bypassing detectors for essays and articles.",
    freeWords: "300-word one-time trial",
    startingPrice: "about $8/mo, billed yearly",
    weaknesses: [
      "Free trial is one-time, not a monthly allowance",
      "Most plans are billed yearly",
      "Detector access on the free trial is time-limited",
    ],
    ourAdvantages: [
      "250 free words every month, no card",
      "Monthly billing from $4.99/mo",
      "Detector and humanizer share one workspace",
      "Five languages supported",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good Walter Writes alternative?", a: "Yes, if you want a free plan that renews every month and monthly billing. AI Free Text Pro gives 250 free words a month and starts at $4.99 a month." },
      { q: "Is Walter Writes AI free?", a: "Walter Writes offers a one-time free trial of about 300 humanizer words; ongoing use needs a paid plan, mostly billed annually. Check its pricing page for current plans." },
      { q: "Does AI Free Text Pro bill monthly?", a: "Yes. Every paid plan is available monthly, with a discount if you choose yearly billing." },
    ],
    verdict: "AI Free Text Pro is the easier choice if you want to keep using a free plan or pay month to month. Walter Writes suits heavy users happy to commit to a yearly plan.",
    metaDescription: "Walter Writes AI alternative: AI Free Text Pro gives 250 free words every month, monthly billing from $4.99/mo and a built-in AI detector. Compare limits and price.",
  },
  smodin: {
    slug: "smodin",
    name: "Smodin",
    tagline: "All-in-one AI writing suite that includes a humanizer and AI detector.",
    freeWords: "Small weekly allowance",
    startingPrice: "about $10-15/mo",
    weaknesses: [
      "Humanizer is one tool among many in a broad suite",
      "Free allowance is small and counted in credits",
      "Higher tiers needed for the strongest rewrite models",
    ],
    ourAdvantages: [
      "Built only for AI detection and humanizing",
      "250 free words every month, no card",
      "Plans from $4.99/mo",
      "Sentence-level AI detection with the humanizer alongside",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good Smodin alternative?", a: "Yes, if your main job is checking and humanizing AI text. AI Free Text Pro focuses on exactly that, with 250 free words a month and plans from $4.99." },
      { q: "Is Smodin's AI humanizer free?", a: "Smodin has a small free allowance across its tools; regular use of the humanizer needs a paid plan. Check its pricing page for current limits." },
      { q: "Do I need a whole writing suite to humanize text?", a: "No. If you only need detection and humanizing, a focused tool costs less and keeps the workflow simple." },
    ],
    verdict: "Choose AI Free Text Pro for a focused, lower-cost detector and humanizer. Choose Smodin if you want many writing tools in one subscription.",
    metaDescription: "Smodin alternative for humanizing AI text: AI Free Text Pro gives 250 free words a month, a built-in AI detector and plans from $4.99/mo. Compare features and price.",
  },
};

export const competitorSlugs = Object.keys(competitors);
