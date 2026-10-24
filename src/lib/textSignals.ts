// Writing-style signals that tend to separate unedited AI drafts from human
// writing. Runs entirely in the browser: nothing is uploaded and there is no
// word limit. It reads style, not a model's fingerprint, so it is a quick
// screen; the app's detector gives the model-based AI probability.

export const MIN_WORDS = 80;

export type Signal = {
  key: "uniformity" | "phrases" | "specificity" | "transitions" | "contractions";
  label: string;
  /** What we measured, in plain words. */
  value: string;
  /** 0 = reads human, 1 = reads like an unedited AI draft. */
  strength: number;
  note: string;
};

export type SignalReport = {
  words: number;
  sentences: number;
  /** 0-100: how strongly the text shows AI-draft style. */
  score: number;
  verdict: "too-short" | "human-leaning" | "mixed" | "ai-leaning";
  signals: Signal[];
  phrases: { phrase: string; count: number }[];
  sentenceLengths: number[];
};

// Phrases that unedited chatbot drafts lean on far more than people do.
const STOCK_PHRASES = [
  "delve", "delves", "delving", "tapestry", "testament to", "in today's", "fast-paced", "ever-evolving",
  "ever-changing", "it's important to note", "it is important to note", "it's worth noting", "it is worth noting",
  "plays a crucial role", "plays a vital role", "plays a pivotal role", "crucial role", "pivotal", "multifaceted",
  "landscape", "realm", "navigate the", "navigating the", "embark", "unlock the", "unleash", "harness the",
  "leverage", "leveraging", "seamless", "seamlessly", "robust", "elevate", "foster", "fostering", "underscore",
  "underscores", "showcasing", "a myriad of", "myriad", "plethora", "paramount", "intricate", "nuanced",
  "holistic", "synergy", "game-changer", "revolutionize", "revolutionized", "transformative", "in conclusion",
  "in summary", "to sum up", "ultimately,", "overall,", "at the end of the day", "a rich", "vibrant",
  "bustling", "commendable", "meticulous", "meticulously", "resonate", "resonates", "invaluable",
  "furthermore", "moreover", "additionally", "notably", "in essence", "when it comes to", "not only",
  "whether you're", "look no further", "dive into", "dive deep", "deep dive", "cutting-edge", "state-of-the-art",
];

const TRANSITION_OPENERS =
  /^(moreover|furthermore|additionally|in addition|however|overall|ultimately|in conclusion|in summary|consequently|therefore|thus|notably|importantly|firstly|secondly|lastly|finally|as a result|on the other hand)\b/i;

const CONTRACTION = /\b\w+['’](s|t|re|ve|ll|d|m)\b/gi;

const clamp = (n: number) => Math.max(0, Math.min(1, n));

export function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?…])["”’)]?\s+(?=["“‘(]?[A-Z0-9])/)
    .flatMap((s) => s.split(/\n+/))
    .map((s) => s.trim())
    .filter((s) => /[A-Za-z]/.test(s));
}

const wordsOf = (s: string) => s.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) ?? [];

/** Sentences with a number, a quote, or a capitalised name after the first word. */
function isSpecific(sentence: string): boolean {
  if (/\d/.test(sentence) || /["“”]/.test(sentence)) return true;
  const w = wordsOf(sentence).slice(1);
  return w.some((x) => /^[A-Z][a-z]+/.test(x) && x !== "I" && !/^I['’]/.test(x));
}

function countPhrase(lower: string, phrase: string): number {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^a-z])${escaped}(?=$|[^a-z])`, "g");
  return (lower.match(re) ?? []).length;
}

export function analyzeText(text: string): SignalReport {
  const sentences = splitSentences(text);
  const lengths = sentences.map((s) => wordsOf(s).length).filter((n) => n > 0);
  const words = wordsOf(text).length;
  const empty: SignalReport = {
    words,
    sentences: lengths.length,
    score: 0,
    verdict: "too-short",
    signals: [],
    phrases: [],
    sentenceLengths: lengths,
  };
  if (words < MIN_WORDS || lengths.length < 4) return empty;

  // 1. Sentence-length uniformity (low "burstiness").
  const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const sd = Math.sqrt(lengths.reduce((a, b) => a + (b - mean) ** 2, 0) / lengths.length);
  const cv = sd / mean;
  const uniformity = clamp((0.6 - cv) / 0.35);

  // 2. Stock phrases per 100 words.
  const lower = text.toLowerCase().replace(/’/g, "'");
  const phrases = STOCK_PHRASES.map((phrase) => ({ phrase, count: countPhrase(lower, phrase) }))
    .filter((p) => p.count > 0)
    .sort((a, b) => b.count - a.count);
  const phraseHits = phrases.reduce((a, p) => a + p.count, 0);
  const phraseDensity = (phraseHits / words) * 100;
  const phraseStrength = clamp(phraseDensity / 1.5);

  // 3. Specificity: share of sentences carrying a number, name or quote.
  const specificShare = sentences.filter(isSpecific).length / sentences.length;
  const specificity = clamp((0.5 - specificShare) / 0.5);

  // 4. Transition-word sentence openers.
  const transitionShare = sentences.filter((s) => TRANSITION_OPENERS.test(s)).length / sentences.length;
  const transitions = clamp(transitionShare / 0.25);

  // 5. Contractions per 100 words (formal human writing also lacks them, so it weighs least).
  const contractionRate = ((text.match(CONTRACTION) ?? []).length / words) * 100;
  const contractions = clamp((1.5 - contractionRate) / 1.5);

  const score = Math.round(
    100 * (0.32 * uniformity + 0.28 * phraseStrength + 0.2 * specificity + 0.12 * transitions + 0.08 * contractions),
  );
  const pct = (n: number) => `${Math.round(n * 100)}%`;

  const signals: Signal[] = [
    {
      key: "uniformity",
      label: "Sentence rhythm",
      value: `Lengths ${Math.min(...lengths)}–${Math.max(...lengths)} words, average ${Math.round(mean)}`,
      strength: uniformity,
      note:
        uniformity > 0.6
          ? "Sentences are evenly sized. People mix very short and long sentences; unedited AI drafts rarely do."
          : "Sentence lengths vary the way human writing usually does.",
    },
    {
      key: "phrases",
      label: "Stock AI phrases",
      value: phraseHits === 0 ? "None found" : `${phraseHits} found (${phraseDensity.toFixed(1)} per 100 words)`,
      strength: phraseStrength,
      note:
        phraseHits === 0
          ? "No words like “delve”, “landscape” or “moreover” that chatbots overuse."
          : "Words chatbots overuse. Swap them for plainer ones you would say out loud.",
    },
    {
      key: "specificity",
      label: "Concrete detail",
      value: `${pct(specificShare)} of sentences name a number, person, place or quote`,
      strength: specificity,
      note:
        specificity > 0.6
          ? "Claims are general. Real authors name dates, figures and places from memory."
          : "The text carries concrete detail, which drafts from a chatbot usually lack.",
    },
    {
      key: "transitions",
      label: "Transition openers",
      value: `${pct(transitionShare)} of sentences open with “Moreover”, “Overall” and similar`,
      strength: transitions,
      note:
        transitions > 0.6
          ? "Many sentences start with a connector word, a common AI pattern."
          : "Sentence openings are varied.",
    },
    {
      key: "contractions",
      label: "Conversational tone",
      value: `${contractionRate.toFixed(1)} contractions per 100 words`,
      strength: contractions,
      note:
        contractions > 0.6
          ? "Few contractions. Normal for formal essays, but chatbots avoid them even in casual text."
          : "Uses contractions the way people do when writing naturally.",
    },
  ];

  return {
    words,
    sentences: lengths.length,
    score,
    verdict: score >= 60 ? "ai-leaning" : score >= 35 ? "mixed" : "human-leaning",
    signals,
    phrases,
    sentenceLengths: lengths,
  };
}
