// Data for the /blog/humanize-{model}-output guides built from one template.
// The hand-written guides (ChatGPT, Claude, Gemini, GPT-5, DeepSeek) live in
// src/pages/blog; these cover the other assistants people paste text from.

export interface ModelGuide {
  slug: string;
  /** As people write it: "Grok", "Microsoft Copilot". */
  name: string;
  /** Short form for headings and FAQs. */
  short: string;
  maker: string;
  intro: string;
  /** Habits that make this assistant's text easy to spot. */
  tells: string[];
  /** Fixes specific to this assistant, on top of the general workflow. */
  fixes: string[];
  faq: { q: string; a: string }[];
  metaDescription: string;
}

export const modelGuides: Record<string, ModelGuide> = {
  grok: {
    slug: "grok",
    name: "Grok",
    short: "Grok",
    maker: "xAI",
    intro:
      "Grok, xAI's assistant built into X, writes with more attitude than most chatbots, but underneath the jokes its sentences follow the same even rhythm and stock structure detectors are trained on.",
    tells: [
      "A punchy one-liner opener followed by evenly paced explanatory sentences",
      "Bold headings and bullet lists even in short answers",
      "Confident, sweeping claims without a named source or date",
      "Wry asides that repeat the same joke shape (“spoiler: it’s complicated”)",
      "Closing summaries that restate every point above them",
    ],
    fixes: [
      "Strip the markdown: turn bolded lists back into connected paragraphs",
      "Replace every sweeping claim with one specific fact you can source",
      "Keep at most one joke, and make it about your own experience",
    ],
    faq: [
      { q: "Can AI detectors detect Grok?", a: "Yes. Detectors such as Turnitin and GPTZero read the statistical patterns all large language models share, so unedited Grok output is flagged much like ChatGPT text. Grok's humour doesn't hide its even sentence rhythm." },
      { q: "Does Turnitin detect Grok?", a: "Turnitin doesn't need to know which model wrote a passage. It scores how predictable and evenly paced the writing is, and unedited Grok text scores like other AI text." },
      { q: "How do I make Grok text sound human?", a: "Remove the markdown, vary sentence length sharply, add details only you know, and run it through a humanizer to rebuild sentence structure. Then check it with a free AI detector." },
    ],
    metaDescription:
      "How to humanize Grok output in 2026: why Grok text gets flagged by Turnitin and GPTZero, the habits that give it away, and a 5-step fix with a free AI checker.",
  },
  copilot: {
    slug: "copilot",
    name: "Microsoft Copilot",
    short: "Copilot",
    maker: "Microsoft",
    intro:
      "Microsoft Copilot runs on OpenAI's GPT models, so drafts from Copilot in Word, Outlook or the browser carry the same fingerprints as ChatGPT text, plus a few habits of its own.",
    tells: [
      "Office-style formality: “Please find below”, “I hope this helps”",
      "Numbered citation markers left behind from web answers",
      "Sections with identical shape: heading, two sentences, three bullets",
      "Polite hedging in conclusions (“it may be beneficial to consider”)",
      "ChatGPT vocabulary such as “streamline”, “enhance” and “leverage”",
    ],
    fixes: [
      "Delete leftover citation numbers and check each claim against its source",
      "Rewrite the opener and closer in your own voice; they are the most formulaic lines",
      "Break the repeated section shape: merge some sections, expand one",
    ],
    faq: [
      { q: "Can AI detectors detect Microsoft Copilot?", a: "Yes. Copilot is built on OpenAI's GPT models, and detectors flag unedited Copilot drafts the same way they flag ChatGPT text." },
      { q: "Does Turnitin detect Copilot in Word?", a: "If you paste or submit a Copilot draft without substantial rewriting, Turnitin's AI indicator generally reads it as AI-generated. Where the text was drafted doesn't matter; how it is written does." },
      { q: "How do I humanize Copilot text?", a: "Remove citation markers, rewrite the opening and closing yourself, vary sentence length, and run the draft through a humanizer before checking it with an AI detector." },
    ],
    metaDescription:
      "How to humanize Microsoft Copilot text in 2026: why Copilot drafts get flagged as AI, the habits that give them away, and a fast way to make them sound like you.",
  },
  perplexity: {
    slug: "perplexity",
    name: "Perplexity AI",
    short: "Perplexity",
    maker: "Perplexity",
    intro:
      "Perplexity is an answer engine: it summarises the web with citations. That makes its text accurate-sounding and compact, and also very recognisable once you paste it into an essay or article.",
    tells: [
      "Bracketed citation numbers such as [1][2] after sentences",
      "Dense summary paragraphs that compress several sources into one voice",
      "“According to…” openers repeated across paragraphs",
      "Even, mid-length sentences with almost no first-person detail",
      "A short bulleted recap at the end",
    ],
    fixes: [
      "Open the sources and cite them properly instead of keeping [1][2] markers",
      "Pull one quote or figure from a source into your own sentence",
      "Add your own argument: Perplexity summarises, it doesn't take a position",
    ],
    faq: [
      { q: "Can AI detectors detect Perplexity?", a: "Yes. Perplexity's answers are generated by large language models, and detectors flag unedited Perplexity text like other AI writing. The citations don't change how the prose itself scores." },
      { q: "Is Perplexity text plagiarism?", a: "It can be, if you paste summaries of other people's work without citing them. Follow Perplexity's links, read the sources, and cite them in your own words." },
      { q: "How do I humanize Perplexity answers?", a: "Replace citation markers with proper references, rewrite the summary around your own argument, vary sentence rhythm, and run it through a humanizer. Check the result with an AI detector." },
    ],
    metaDescription:
      "How to humanize Perplexity AI answers in 2026: why Perplexity text is flagged as AI, how to handle its citations, and a 5-step rewrite with a free AI checker.",
  },
  llama: {
    slug: "llama",
    name: "Meta Llama and Meta AI",
    short: "Llama",
    maker: "Meta",
    intro:
      "Meta's Llama models power Meta AI in WhatsApp, Instagram and Facebook, and many third-party writing apps. Their output is fluent but follows the low-variance rhythm every AI detector is tuned to catch.",
    tells: [
      "Eager openers: “Great question!”, “I'd be happy to help”",
      "Lists of three in nearly every paragraph",
      "Generic examples (“a small business”, “a student”) instead of named ones",
      "Upbeat conclusions that promise the reader success",
      "Very regular paragraph lengths",
    ],
    fixes: [
      "Cut the opener and closer entirely; start with your point",
      "Break up the lists of three: keep the strongest item and expand it",
      "Swap every generic example for a real one with a name or number",
    ],
    faq: [
      { q: "Can AI detectors detect Llama or Meta AI?", a: "Yes. Detectors read the statistics of the text, not the brand of the model, and unedited Llama output scores as AI like ChatGPT does." },
      { q: "Is text from writing apps built on Llama detectable?", a: "Usually. Many apps use Llama under the hood without saying so, and their unedited drafts carry the same patterns. Check the text before you use it." },
      { q: "How do I make Meta AI text sound human?", a: "Remove the eager opener and upbeat closer, replace generic examples with specific ones, vary sentence length, and humanize the draft before checking it." },
    ],
    metaDescription:
      "How to humanize Meta AI and Llama output in 2026: the habits that get Llama text flagged by AI detectors, and a quick workflow to make it sound like you.",
  },
  mistral: {
    slug: "mistral",
    name: "Mistral Le Chat",
    short: "Mistral",
    maker: "Mistral AI",
    intro:
      "Mistral's Le Chat is popular in Europe for its speed and multilingual writing. Its drafts are tidy and concise, which also makes them easy for detectors to read as machine-written.",
    tells: [
      "Compact, list-first answers with short bolded labels",
      "Formal register even when asked for a casual tone",
      "Literal phrasing in non-English drafts that native speakers notice",
      "Paragraphs that each end with a one-line takeaway",
      "Few contractions and no personal asides",
    ],
    fixes: [
      "Turn bolded label lists into prose with transitions you'd actually say",
      "For non-English text, rewrite idioms the way a native speaker would",
      "Add contractions and one opinion per paragraph",
    ],
    faq: [
      { q: "Can AI detectors detect Mistral?", a: "Yes. Unedited Mistral output shares the statistical patterns of other large language models, so detectors flag it in the same way." },
      { q: "Does humanizing work for French, German or Spanish Mistral text?", a: "Yes. AI Free Text Pro's humanizer works in English, Spanish, French, German and Dutch, so you can rewrite Mistral drafts in the language they were written in." },
      { q: "How do I humanize Le Chat output?", a: "Convert lists to prose, relax the register, fix literal phrasing, and run the text through a humanizer before checking it with an AI detector." },
    ],
    metaDescription:
      "How to humanize Mistral Le Chat output in 2026: why Mistral text is flagged as AI, fixes for its list-first style, and humanizing in five languages.",
  },
};

export const modelGuideSlugs = Object.keys(modelGuides);
