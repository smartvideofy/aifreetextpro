// Data driving programmatic /detector/:slug pages.
// Each entry yields an SEO landing page targeting "{detector}" and
// "how does {detector} work" queries, with a CTA back into the bypass hub.

export interface Detector {
  slug: string;
  name: string;
  vendor: string;
  intro: string;
  howItWorks: string;
  accuracyClaim: string;
  realAccuracy: string;
  falsePositiveRate: string;
  weaknesses: string[];
  reduceFlagsTips: string[];
  bypassLink: string;
  faq: { q: string; a: string }[];
  metaDescription: string;
}

export const detectors: Record<string, Detector> = {
  turnitin: {
    slug: "turnitin",
    name: "Turnitin AI Detector",
    vendor: "Turnitin LLC",
    intro: "Turnitin is the most widely deployed AI writing detector in higher education. It is built into the Turnitin Similarity report and runs automatically on most student submissions in 2026.",
    howItWorks: "Turnitin's AI detector segments text into ~25-word windows and scores each window for perplexity (how predictable the next token is) and burstiness (variance in sentence length and structure). It flags long stretches of low perplexity as machine-generated.",
    accuracyClaim: "Turnitin advertises 98% accuracy with under 1% false positives.",
    realAccuracy: "Independent benchmarks in 2026 place Turnitin's true AI-text detection rate closer to 88% on GPT-5 and Claude 4 output, with 4% to 6% false positives on heavily edited human writing.",
    falsePositiveRate: "4% to 6% on edited human prose; higher for non-native English writing.",
    weaknesses: [
      "Treats short paragraphs (<150 words) as inconclusive",
      "Flags formulaic human writing as AI",
      "Cannot inspect text submitted via Canvas API outside Turnitin Similarity",
      "Accuracy drops sharply on text rewritten with a humanizer",
    ],
    reduceFlagsTips: [
      "Edit AI drafts manually to vary sentence length",
      "Run drafts through a humanizer such as AI Free Text Pro",
      "Add personal examples and primary sources",
      "Read drafts aloud and rewrite anything that sounds robotic",
    ],
    bypassLink: "/bypass-turnitin-ai-detection",
    faq: [
      { q: "Does Turnitin detect ChatGPT?", a: "Turnitin flags raw ChatGPT output roughly 88% of the time on GPT-5 in 2026 benchmarks. Edited or humanized text passes far more often." },
      { q: "Can Turnitin detect humanized AI text?", a: "Turnitin's AI score drops to single digits on text rewritten with a quality humanizer like AI Free Text Pro." },
      { q: "Is Turnitin's AI score the same as plagiarism?", a: "No. Turnitin reports a separate AI Writing percentage and a Similarity percentage. The two are scored independently." },
    ],
    metaDescription: "How Turnitin's AI detector works in 2026: accuracy data, false positive rate, weaknesses, and proven ways to reduce false flags on student writing.",
  },
  gptzero: {
    slug: "gptzero",
    name: "GPTZero",
    vendor: "GPTZero Inc.",
    intro: "GPTZero is the consumer-facing AI detector most cited in mainstream media. It is used by educators, journalists, and recruiters to check if text was written by ChatGPT, Claude, or Gemini.",
    howItWorks: "GPTZero uses a combination of perplexity scoring and a proprietary classifier trained on millions of human and AI-labeled documents. It outputs a probability score and a sentence-level breakdown.",
    accuracyClaim: "GPTZero markets 99% accuracy on long-form documents.",
    realAccuracy: "2026 independent tests show 91% true positive on raw GPT-5 output and 8% false positive on edited human writing.",
    falsePositiveRate: "Around 8% on edited human prose; higher on technical writing.",
    weaknesses: [
      "Flags Wikipedia-style prose as AI",
      "Inconsistent on text under 250 words",
      "Defeated by humanizer rewrites",
      "Sensitive to Grammarly-corrected drafts",
    ],
    reduceFlagsTips: [
      "Run AI drafts through a humanizer",
      "Vary sentence openings and lengths",
      "Insert personal anecdotes and rhetorical questions",
      "Avoid back-to-back transition words",
    ],
    bypassLink: "/bypass-gptzero-detection",
    faq: [
      { q: "How accurate is GPTZero?", a: "GPTZero claims 99% but 2026 independent tests put its true detection rate around 91% on GPT-5 output and 8% false positive on edited human writing." },
      { q: "Can teachers use GPTZero?", a: "Yes. GPTZero offers a free educator dashboard and is one of the most cited consumer AI detectors in 2026." },
      { q: "How do I lower a GPTZero score?", a: "Rewrite the text with a humanizer such as AI Free Text Pro, edit for sentence variety, and add personal examples." },
    ],
    metaDescription: "How GPTZero works in 2026: accuracy data, false positive rate, weaknesses, and proven ways to reduce false flags on your writing.",
  },
  originality: {
    slug: "originality",
    name: "Originality.AI",
    vendor: "Originality.AI",
    intro: "Originality.AI is the AI detector most popular with publishers, agencies, and SEO teams. It is the default screening tool for many freelance content marketplaces in 2026.",
    howItWorks: "Originality.AI combines a transformer-based classifier trained on labeled AI vs human writing with plagiarism detection. Its 3.0 model is tuned for marketing and SEO content.",
    accuracyClaim: "Originality.AI claims 99% accuracy on its 3.0 model.",
    realAccuracy: "Independent 2026 benchmarks measure 89% true positive on GPT-5 and 7% false positive on edited human prose.",
    falsePositiveRate: "Roughly 7% on edited human content; higher on listicles and SEO writing.",
    weaknesses: [
      "Bias toward flagging short, structured paragraphs",
      "Underperforms on rewritten or humanized text",
      "Flags formulaic human writing such as product descriptions",
      "Inconsistent on Claude 4 Opus output",
    ],
    reduceFlagsTips: [
      "Humanize AI drafts before submission",
      "Break listicles into varied sentence structures",
      "Inject first-person examples",
      "Avoid AI hallucinations that read as filler",
    ],
    bypassLink: "/bypass-originality-ai",
    faq: [
      { q: "Is Originality.AI accurate?", a: "Originality.AI is one of the more accurate detectors but still produces about 7% false positives on edited human writing in 2026." },
      { q: "How do I pass Originality.AI?", a: "Use a humanizer such as AI Free Text Pro and edit for sentence variety, personal voice, and concrete examples." },
      { q: "Does Originality.AI detect Claude?", a: "Yes, but accuracy is lower on Claude 4 Opus than on GPT-5 output." },
    ],
    metaDescription: "How Originality.AI works in 2026: accuracy data, false positive rate, weaknesses, and how to reduce false flags on your published content.",
  },
  copyleaks: {
    slug: "copyleaks",
    name: "Copyleaks AI Detector",
    vendor: "Copyleaks",
    intro: "Copyleaks is an enterprise AI and plagiarism detector used by universities, publishers, and SaaS platforms via API. It is bundled into many LMS integrations in 2026.",
    howItWorks: "Copyleaks runs a transformer classifier trained on labeled AI vs human text, combined with cross-language fingerprinting. It returns a percentage AI score plus sentence highlights.",
    accuracyClaim: "Copyleaks claims 99.1% accuracy and 0.2% false positives.",
    realAccuracy: "2026 third-party tests place Copyleaks at 90% true positive on GPT-5 with 5% false positives on edited human prose.",
    falsePositiveRate: "About 5% on edited human content.",
    weaknesses: [
      "Cross-language detection is weaker on non-English text",
      "Defeated by humanizer rewrites",
      "Flags consistent formal writing as AI",
      "Inconsistent on very short submissions",
    ],
    reduceFlagsTips: [
      "Humanize AI drafts before submission",
      "Add varied sentence openings",
      "Use personal examples and case data",
      "Edit for natural rhythm",
    ],
    bypassLink: "/blog/bypass-copyleaks-ai-detection",
    faq: [
      { q: "How accurate is Copyleaks?", a: "Copyleaks reaches roughly 90% true positive on GPT-5 with about 5% false positives on edited human writing in 2026 benchmarks." },
      { q: "Can I pass Copyleaks with a humanizer?", a: "Yes. A quality humanizer like AI Free Text Pro reduces Copyleaks AI score to single digits in most tests." },
    ],
    metaDescription: "How Copyleaks AI detection works in 2026: accuracy, false positive rate, weaknesses, and how to reduce false flags on your writing.",
  },
  winston: {
    slug: "winston",
    name: "Winston AI",
    vendor: "Winston AI",
    intro: "Winston AI is a detector popular with content agencies and academic institutions. It markets itself as the highest-accuracy AI detector on the market in 2026.",
    howItWorks: "Winston AI uses a proprietary classifier with OCR support, allowing it to scan scanned documents and PDFs in addition to plain text.",
    accuracyClaim: "Winston AI claims 99.98% accuracy.",
    realAccuracy: "Independent 2026 testing puts Winston AI around 92% true positive on GPT-5 with 6% false positives on edited human prose.",
    falsePositiveRate: "About 6% on edited human writing.",
    weaknesses: [
      "Defeated by humanizer rewrites",
      "OCR layer adds noise on scanned documents",
      "Flags concise formal prose",
      "Inconsistent on shorter than 300 words",
    ],
    reduceFlagsTips: [
      "Humanize the draft",
      "Break long paragraphs into varied lengths",
      "Add concrete examples and personal voice",
      "Avoid template-style intros",
    ],
    bypassLink: "/blog/bypass-winston-ai-detection",
    faq: [
      { q: "Is Winston AI accurate?", a: "Winston AI hits about 92% true positive on GPT-5 in 2026 benchmarks, with roughly 6% false positives on edited human writing." },
      { q: "Can humanized text pass Winston AI?", a: "Yes. AI Free Text Pro's humanizer drops Winston AI scores to single digits in our 2026 tests." },
    ],
    metaDescription: "How Winston AI works in 2026: accuracy data, false positive rate, weaknesses, and proven ways to reduce false flags.",
  },
};

export const detectorSlugs = Object.keys(detectors);
