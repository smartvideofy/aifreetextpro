import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat, ScanSearch, Check, X, Sparkles } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

/**
 * Homepage conversion + SEO module for the two largest non-branded intents:
 * "paraphrasing tool" and "free AI detector". Direct answers, comparison
 * tables, score interpretation data, tracked CTAs and FAQPage schema.
 */

const paraphraseRows = [
  {
    feature: "Rewrite depth",
    them: "Swaps synonyms, keeps the sentence skeleton",
    us: "Rebuilds clause order, sentence length and rhythm",
  },
  {
    feature: "Meaning drift",
    them: "Thesaurus picks break technical terms",
    us: "Terminology, numbers and citations preserved",
  },
  {
    feature: "Free allowance",
    them: "Usually 125 to 500 words, then a paywall",
    us: "1,000 words per rewrite, no card, no signup",
  },
  {
    feature: "Detector check",
    them: "Separate tool, separate tab",
    us: "Built into the same workspace",
  },
];

const scoreRows = [
  { band: "0 to 20%", meaning: "Reads as human", action: "Ship it. No revision needed." },
  {
    band: "20 to 50%",
    meaning: "Mixed signals, often heavy editing or formulaic structure",
    action: "Vary sentence length and add specifics to the flagged lines.",
  },
  {
    band: "50 to 80%",
    meaning: "Predictable phrasing across several passages",
    action: "Rewrite structurally, not word by word, then re-check.",
  },
  {
    band: "80%+",
    meaning: "Strong machine signal, or a false flag on non-native English",
    action: "Full structural rewrite, or gather drafting evidence if the text is yours.",
  },
];

const faqs = [
  {
    question: "What is the best free paraphrasing tool?",
    answer:
      "A paraphrasing tool is only useful if it changes structure, not just vocabulary. Synonym-swapping tools leave the original sentence skeleton intact, which is exactly what detectors and plagiarism checkers match on. AI Free Text Pro rewrites at sentence and paragraph level and gives you 1,000 words free per rewrite with no signup.",
  },
  {
    question: "Is there a genuinely free AI detector with no signup?",
    answer:
      "Yes. Our AI detector runs free with no account for standard-length drafts, returning an overall AI probability plus a per-sentence breakdown so you can see which passages drive the score instead of guessing from a single number.",
  },
  {
    question: "How accurate are free AI detectors?",
    answer:
      "Accuracy varies by detector and by text type. Every major detector produces false positives, particularly on non-native English, formulaic academic writing and heavily edited drafts. Use scores to guide revision, never as proof that a person did or did not write something.",
  },
  {
    question: "Does paraphrasing remove AI detection flags?",
    answer:
      "Shallow paraphrasing usually does not, because the underlying predictability of the text is unchanged. Rewriting that varies sentence length, adds specificity and removes generic phrasing is what actually lowers a detector score, and it also produces better writing.",
  },
  {
    question: "Can I use a paraphrasing tool and an AI detector together?",
    answer:
      "That is the intended workflow. Rewrite the draft, run the detector, then revise only the sentences still flagged. Two or three passes on the specific weak passages beats rewriting an entire document blind.",
  },
];

const blocks = [
  {
    icon: Repeat,
    id: "paraphrasing-tool",
    kicker: "Paraphrasing tool",
    heading: "Free paraphrasing tool that rewrites structure, not just synonyms",
    answer:
      "Most free paraphrasers replace words and leave the sentence skeleton alone, which reads awkwardly and still matches the original. Our rewriter changes clause order, sentence length and rhythm while preserving your argument, terminology and citations.",
    table: {
      caption: "Synonym swapping vs structural rewriting",
      headOne: "Typical free paraphraser",
      headTwo: "AI Free Text Pro",
      rows: paraphraseRows,
    },
    links: [
      { to: "/blog/paraphrasing-tool", label: "Full paraphrasing tool guide" },
      { to: "/blog/paraphrasing-vs-humanizing", label: "Paraphrasing vs humanizing" },
      { to: "/blog/rewrite-ai-text", label: "How to rewrite AI text" },
      { to: "/blog/best-paraphrasing-tool", label: "Paraphrasers compared" },
    ],
    cta: { label: "Paraphrase 1,000 words free", position: "home_paraphrasing_block" },
  },
  {
    icon: ScanSearch,
    id: "free-ai-detector",
    kicker: "Free AI detector",
    heading: "Free AI detector that shows which sentences were flagged",
    answer:
      "A single percentage tells you nothing actionable. Our detector returns an overall AI probability alongside a sentence-level map, driven by perplexity (how predictable each word is) and burstiness (how much sentence length varies), so you revise the exact passages that read as machine-generated.",
    scoreTable: true,
    links: [
      { to: "/blog/free-ai-detector", label: "Free AI detector guide" },
      { to: "/ai-checker", label: "Run the AI checker" },
      { to: "/blog/how-ai-detectors-work", label: "How detectors score text" },
      { to: "/blog/ai-detection-false-positives", label: "Why false positives happen" },
    ],
    cta: { label: "Check your text free", position: "home_detector_block" },
  },
];

const AppCTA = ({ label, position }: { label: string; position: string }) => (
  <a
    href="https://app.aifreetextpro.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
    onClick={() => trackCTAClick(position, "app_workspace")}
  >
    <Button
      size="lg"
      className="font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg group"
    >
      {label}
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
);

export const HomeToolAnswers = () => (
  <section
    className="relative py-20 md:py-28 overflow-hidden"
    aria-labelledby="home-tool-answers-heading"
  >
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        })}
      </script>
    </Helmet>

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 right-1/4 w-[26rem] h-[26rem] rounded-full bg-secondary/20 blur-3xl"
    />

    <div className="container relative mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-5 mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
          <Sparkles className="w-4 h-4" />
          Two tools, one free workspace
        </span>
        <h2 id="home-tool-answers-heading" className="text-3xl md:text-5xl font-bold leading-tight">
          Free paraphrasing tool and{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            free AI detector
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Rewrite a draft properly, then check it against the same signals detectors use.
          Here is exactly what each tool does, what the free tier covers, and where the
          honest limits are.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
        {blocks.map((b) => {
          const Icon = b.icon;
          return (
            <article
              key={b.id}
              id={b.id}
              className="relative rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-6 md:p-8 space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                  {b.kicker}
                </span>
              </div>

              <h3 className="text-2xl md:text-[1.75rem] font-bold leading-snug">{b.heading}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.answer}</p>

              {b.table && (
                <div className="overflow-x-auto rounded-xl border border-border/60">
                  <table className="w-full text-sm">
                    <caption className="sr-only">{b.table.caption}</caption>
                    <thead className="bg-muted/60">
                      <tr>
                        <th scope="col" className="text-left font-semibold p-3">
                          Feature
                        </th>
                        <th scope="col" className="text-left font-semibold p-3">
                          {b.table.headOne}
                        </th>
                        <th scope="col" className="text-left font-semibold p-3">
                          {b.table.headTwo}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {b.table.rows.map((r) => (
                        <tr key={r.feature} className="border-t border-border/50 align-top">
                          <th scope="row" className="text-left font-medium p-3">
                            {r.feature}
                          </th>
                          <td className="p-3 text-muted-foreground">
                            <span className="flex gap-2">
                              <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                              {r.them}
                            </span>
                          </td>
                          <td className="p-3 text-muted-foreground">
                            <span className="flex gap-2">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              {r.us}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {b.scoreTable && (
                <div className="overflow-x-auto rounded-xl border border-border/60">
                  <table className="w-full text-sm">
                    <caption className="sr-only">
                      How to read an AI detector score
                    </caption>
                    <thead className="bg-muted/60">
                      <tr>
                        <th scope="col" className="text-left font-semibold p-3">
                          AI score
                        </th>
                        <th scope="col" className="text-left font-semibold p-3">
                          What it means
                        </th>
                        <th scope="col" className="text-left font-semibold p-3">
                          What to do
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {scoreRows.map((r) => (
                        <tr key={r.band} className="border-t border-border/50 align-top">
                          <th scope="row" className="text-left font-bold p-3 whitespace-nowrap">
                            {r.band}
                          </th>
                          <td className="p-3 text-muted-foreground">{r.meaning}</td>
                          <td className="p-3 text-muted-foreground">{r.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <nav aria-label={`${b.kicker} resources`} className="flex flex-wrap gap-x-4 gap-y-2">
                {b.links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-sm font-semibold text-secondary hover:underline"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <AppCTA label={b.cta.label} position={b.cta.position} />
            </article>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Paraphrasing and AI detection questions, answered
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.question}
              className="rounded-xl border border-border/60 bg-card/60 backdrop-blur p-5 hover:border-primary/40 transition-colors"
            >
              <h4 className="font-bold mb-2 leading-snug">{f.question}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <AppCTA label="Start rewriting and checking free" position="home_tool_answers_footer" />
          <p className="text-sm text-muted-foreground mt-3">
            1,000 words free per rewrite. No card, no trial countdown.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HomeToolAnswers;
