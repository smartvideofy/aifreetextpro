import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat, ScanSearch, Check } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

/**
 * Homepage module answering the two biggest non-branded intents the site
 * chases: "paraphrasing tool" and "free AI detector". Each block gives a
 * direct answer, a concrete how-it-works list, a comparison of what the free
 * tier covers, and a tracked CTA into the app.
 */

const paraphraseSteps = [
  "Paste up to 1,000 words free, no card and no signup wall.",
  "Pick a rewrite strength: light for editing polish, heavy for full restructuring.",
  "The engine rebuilds sentence structure and rhythm instead of swapping synonyms, so meaning, citations and formatting survive the rewrite.",
  "Run the result through the detector in the same workspace and revise only the lines still flagged.",
];

const detectorSteps = [
  "Paste a draft and get an overall probability score plus a sentence-level breakdown.",
  "Scores are driven by perplexity (how predictable each word is) and burstiness (how much sentence length varies).",
  "Treat any score as a signal, not a verdict: no detector proves authorship, and non-native English and technical prose both raise false-flag rates.",
  "Use the flagged sentences as an edit list, then re-check to confirm the revision actually moved the score.",
];

const faqs = [
  {
    question: "What is the best free paraphrasing tool?",
    answer:
      "A paraphrasing tool is only useful if it changes structure, not just vocabulary. Synonym-swapping tools leave the original sentence skeleton intact, which is exactly what detectors and plagiarism checkers match on. AI Free Text Pro rewrites at the sentence and paragraph level and gives you 1,000 words free per rewrite with no signup.",
  },
  {
    question: "Is there a genuinely free AI detector?",
    answer:
      "Yes. Our detector runs free with no account for standard-length drafts, returning an overall AI probability plus a per-sentence breakdown so you can see which passages are driving the score rather than just a single number.",
  },
  {
    question: "How accurate are AI detectors?",
    answer:
      "Accuracy varies by detector and by text type. Every major detector produces false positives, particularly on non-native English, formulaic academic writing and heavily edited drafts. Use scores to guide revision, never as proof that a person did or did not write something.",
  },
  {
    question: "Does paraphrasing remove AI detection flags?",
    answer:
      "Shallow paraphrasing usually does not, because the underlying predictability of the text is unchanged. Meaningful rewriting that varies sentence length, adds specificity and removes generic phrasing is what actually lowers a detector score, and it also produces better writing.",
  },
];

const blocks = [
  {
    icon: Repeat,
    id: "paraphrasing-tool",
    kicker: "Paraphrasing tool",
    heading: "A free paraphrasing tool that rewrites structure, not just synonyms",
    answer:
      "Most free paraphrasers replace words and leave the sentence skeleton alone, which reads awkwardly and still matches the original. Our rewriter changes clause order, sentence length and rhythm while preserving your argument, citations and formatting.",
    steps: paraphraseSteps,
    links: [
      { to: "/blog/paraphrasing-tool", label: "Full paraphrasing tool guide" },
      { to: "/blog/paraphrasing-vs-humanizing", label: "Paraphrasing vs humanizing" },
      { to: "/blog/rewrite-ai-text", label: "How to rewrite AI text" },
    ],
    cta: { label: "Paraphrase 1,000 words free", position: "home_paraphrasing_block" },
  },
  {
    icon: ScanSearch,
    id: "free-ai-detector",
    kicker: "Free AI detector",
    heading: "A free AI detector that shows you which sentences were flagged",
    answer:
      "A single percentage tells you nothing actionable. Our detector returns an overall probability alongside a sentence-level map, so you can revise the specific passages that read as machine-generated instead of rewriting a whole document blind.",
    steps: detectorSteps,
    links: [
      { to: "/blog/free-ai-detector", label: "Free AI detector guide" },
      { to: "/ai-checker", label: "Run the AI checker" },
      { to: "/blog/how-ai-detectors-work", label: "How detectors score text" },
    ],
    cta: { label: "Check your text free", position: "home_detector_block" },
  },
];

export const HomeToolAnswers = () => (
  <section className="py-16 md:py-24 bg-muted/30" aria-labelledby="home-tool-answers-heading">
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

    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <h2 id="home-tool-answers-heading" className="text-3xl md:text-5xl font-bold">
          Paraphrasing tool and free AI detector, answered properly
        </h2>
        <p className="text-lg text-muted-foreground">
          Two tools, one workspace. Here is exactly what each one does, what the free tier
          covers, and where the honest limits are.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
        {blocks.map(({ icon: Icon, id, kicker, heading, answer, steps, links, cta }) => (
          <Card key={id} id={id} className="p-6 md:p-8 space-y-5 border-border/60 bg-card/60">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Icon className="w-5 h-5 text-primary" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-secondary">
                {kicker}
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-snug">{heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{answer}</p>

            <ul className="space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm font-semibold text-secondary hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <a
              href="https://app.aifreetextpro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              onClick={() => trackCTAClick(cta.position, "app_workspace")}
            >
              <Button
                size="lg"
                className="font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg group"
              >
                {cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-14 space-y-6">
        <h3 className="text-2xl font-bold text-center">Common questions</h3>
        {faqs.map((f) => (
          <div key={f.question} className="rounded-lg border border-border/50 bg-card/40 p-5">
            <h4 className="font-semibold mb-2">{f.question}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeToolAnswers;
