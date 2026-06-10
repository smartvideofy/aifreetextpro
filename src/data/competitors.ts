// Data driving programmatic /vs/:slug comparison pages.
// Every entry produces an SEO-optimized landing page targeting
// "{competitor} alternative" and "vs {competitor}" long-tail queries.

export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  // Pricing & limits
  freeWords: number;
  startingPrice: string;
  // Comparison stats
  bypassRate: string;
  ourBypassRate: string;
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
      "1,000 free words per month (4x more)",
      "Free AI detector included",
      "Starts at $4.99/mo (3x cheaper)",
      "Multiple humanization modes with tone presets",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good StealthWriter alternative?", a: "Yes. AI Free Text Pro matches StealthWriter's humanization quality and adds a free AI detector, 4x the free word allowance, and a starting price under $5 per month." },
      { q: "Does AI Free Text Pro work on the same detectors as StealthWriter?", a: "Yes. Both tools are tested against Turnitin, GPTZero, Originality.AI, Copyleaks, and Winston. AI Free Text Pro reaches a 98% pass rate in our internal benchmarks." },
      { q: "Can I migrate from StealthWriter?", a: "Yes. Paste any existing AI draft into the humanizer at app.aifreetextpro.com to produce a rewritten version in under 10 seconds." },
    ],
    verdict: "AI Free Text Pro is the stronger pick if you want a free detector, more free words, and a lower starting price than StealthWriter.",
    metaDescription: "StealthWriter alternative comparison: AI Free Text Pro offers 4x more free words, a built-in AI detector, and starts at $4.99/mo. See the full feature comparison.",
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
      "1,000 free words per month",
      "Free AI detector with 98% accuracy",
      "Starts at $4.99/mo (66% cheaper)",
      "API access for power users",
    ],
    faq: [
      { q: "Is AI Free Text Pro better than Phrasly?", a: "On price-per-word, free-tier limits, and the inclusion of a free AI detector, AI Free Text Pro outperforms Phrasly. Bypass quality on Turnitin and GPTZero is similar in our tests." },
      { q: "Does Phrasly work on Turnitin?", a: "Phrasly reduces detection in some cases. AI Free Text Pro produces a 98% Turnitin pass rate in our 2026 benchmark, compared to Phrasly's roughly 90%." },
      { q: "What is the cheapest Phrasly alternative?", a: "AI Free Text Pro starts at $4.99/mo with 1,000 free words to test before paying." },
    ],
    verdict: "AI Free Text Pro is a stronger Phrasly alternative for students who want a free detector, more free words, and lower monthly cost.",
    metaDescription: "Phrasly alternative comparison: AI Free Text Pro offers 1,000 free words, a free AI detector, and starts at $4.99/mo. Full Phrasly vs AI Free Text Pro guide.",
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
      "1,000 free words per month (6x more)",
      "Multiple humanization modes",
      "Free AI detector included",
      "Starts at $4.99/mo",
    ],
    faq: [
      { q: "Is AI Free Text Pro a good BypassGPT alternative?", a: "Yes. AI Free Text Pro matches BypassGPT's humanization on detector evasion and adds a free detector plus 6x the free word allowance." },
      { q: "Can BypassGPT bypass Turnitin?", a: "BypassGPT reduces Turnitin AI flags in many cases. AI Free Text Pro hits 98% pass rate against Turnitin's 2026 detector model." },
    ],
    verdict: "AI Free Text Pro is the better value BypassGPT alternative with a free detector, more free words, and a lower price.",
    metaDescription: "BypassGPT alternative: AI Free Text Pro offers 6x more free words, a free AI detector, and starts at $4.99/mo. Compare BypassGPT vs AI Free Text Pro.",
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
      "1,000 free words per month",
      "Real-time AI detector included free",
      "Five tone presets and three humanization modes",
      "Sub-10-second processing",
    ],
    faq: [
      { q: "What is the best Netus AI alternative?", a: "AI Free Text Pro is the highest-rated Netus AI alternative based on price, bypass rate, and the inclusion of a free AI detector." },
      { q: "Does Netus AI work on Originality.AI?", a: "Netus AI passes Originality.AI roughly 89% of the time. AI Free Text Pro tested at 98% pass rate against Originality.AI in 2026." },
    ],
    verdict: "AI Free Text Pro outperforms Netus AI on bypass rate, free-tier value, and includes a free detector.",
    metaDescription: "Netus AI alternative: AI Free Text Pro delivers 98% bypass rate, free AI detector, and 1,000 free words per month starting at $4.99.",
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
      "1,000 free words per month",
      "Built-in AI detector with 98% accuracy",
      "Bulk paragraph processing",
      "Five tone presets",
    ],
    faq: [
      { q: "Is AI Free Text Pro better than Twixify?", a: "Yes. AI Free Text Pro processes longer texts in one pass, includes a free detector, and offers 5x the free word allowance for less monthly cost." },
      { q: "Does Twixify bypass Turnitin AI detection?", a: "Twixify reduces flags in many cases. AI Free Text Pro maintains a 98% pass rate against Turnitin's 2026 detector." },
    ],
    verdict: "AI Free Text Pro is the more complete Twixify alternative with a free detector, larger free tier, and bulk processing.",
    metaDescription: "Twixify alternative comparison: AI Free Text Pro offers a free AI detector, 1,000 free words, and bulk processing from $4.99/mo.",
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
      "1,000 free words per month",
      "Free AI detector",
      "Three humanization modes",
      "Developer API available",
    ],
    faq: [
      { q: "What is the best Humbot alternative?", a: "AI Free Text Pro is the best Humbot alternative based on free-tier size, bypass rate, included detector, and API access for content teams." },
      { q: "Does Humbot work on Copyleaks?", a: "Humbot passes Copyleaks roughly 90% of the time. AI Free Text Pro tested at 98% against Copyleaks in 2026." },
    ],
    verdict: "AI Free Text Pro is the stronger Humbot alternative for content teams thanks to API access, a free detector, and a larger free tier.",
    metaDescription: "Humbot alternative: AI Free Text Pro delivers 98% bypass, free AI detector, 1,000 free words, and an API. Compare Humbot vs AI Free Text Pro.",
  },
};

export const competitorSlugs = Object.keys(competitors);
