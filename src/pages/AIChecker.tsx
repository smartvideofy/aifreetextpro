import FeaturedGuides from "@/components/FeaturedGuides";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { SoftwareApplicationSchema } from "@/components/SoftwareApplicationSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import InternalLinks from "@/components/InternalLinks";
import { AISignalChecker } from "@/components/AISignalChecker";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Zap } from "lucide-react";
import { PillarHubLinks, CrossHubNav } from "@/components/PillarHubLinks";

const TITLE = "Free AI Detector & AI Checker Online | AI Free Text Pro";
const DESCRIPTION =
  "Free AI detector and AI checker: paste any text and see if it reads as ChatGPT, Claude or Gemini writing. Instant, no sign-up, no word limit, plus a full AI score in the app.";
const URL = "https://aifreetextpro.com/ai-checker";
const APP = "https://app.aifreetextpro.com/detector?utm_source=site&utm_medium=ai_checker&utm_campaign=ai_checker";

const faqs = [
  {
    question: "Is this AI detector really free?",
    answer:
      "Yes. The writing-signal check at the top of this page is free with no account and no word limit, because it runs in your browser. The full model-based detector in the app is free with an account: 250 words a month and up to 10 checks a day, no card. Paid plans start at $4.99 a month.",
  },
  {
    question: "What is the best free AI detector?",
    answer:
      "For unedited text, AI Free Text Pro's checker, GPTZero and Copyleaks all perform well. AI Free Text Pro is the only one of the three that lets you check and then rewrite flagged sentences with a humanizer in the same place. Whichever you use, run long passages: every detector is unreliable under about 150 words.",
  },
  {
    question: "Can this AI checker detect ChatGPT, Claude and Gemini?",
    answer:
      "Yes. It looks for the writing patterns all large language models share, so it works on ChatGPT (GPT-4o, GPT-5), Claude, Gemini, DeepSeek, Llama, Grok and Copilot output. It does not need to know which model wrote the text.",
  },
  {
    question: "How accurate is a free AI detector?",
    answer:
      "On long, unedited AI drafts, good detectors catch the large majority. Accuracy drops on short passages, heavily edited drafts and formal writing by non-native English speakers, which published research shows are flagged more often. Treat a score as evidence to weigh, not a verdict.",
  },
  {
    question: "Is there a free AI detector with no word limit?",
    answer:
      "The browser check on this page has no word limit. The model-based detector in the app gives 250 free words a month; the Unlimited Creator plan removes the limit. See the full breakdown on our free word limit page.",
  },
  {
    question: "Is an AI checker the same as a plagiarism checker?",
    answer:
      "No. A plagiarism checker compares your text with existing sources and reports copied passages. An AI checker compares nothing: it reads the statistics of the text itself, such as how predictable the wording is and how evenly the sentences are paced. Text can be original and still read as AI, or copied and read as human.",
  },
  {
    question: "Does it work in other languages?",
    answer:
      "The app works in English, Spanish, French, German and Dutch. The quick signal check on this page is tuned for English, where its stock-phrase list and sentence patterns apply.",
  },
  {
    question: "Will this give the same score as Turnitin or GPTZero?",
    answer:
      "No. Every detector uses its own model and thresholds, and they often disagree on the same passage. A low score here does not predict a low Turnitin score, and a high one does not prove AI authorship.",
  },
  {
    question: "How many words do I need for an accurate check?",
    answer:
      "At least 150 to 300 words. Short passages don't carry enough statistical signal for any detector, including this one, so results on a single paragraph swing widely.",
  },
  {
    question: "What should I do if my own writing is flagged as AI?",
    answer:
      "Look at which signals fired. Evenly sized sentences, stock transitions and a lack of concrete detail are the usual causes, and fixing them improves the writing anyway. Keep your drafts and version history: they are the strongest evidence of how you wrote something.",
  },
];

const AIChecker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="free ai detector, ai detector free, ai checker free, free ai checker, ai detector online, ai content detector, check if text is ai, chatgpt detector"
        />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AI Free Text Pro AI Checker",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "2847",
              bestRating: "5",
              worstRating: "1",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to check text for AI with a free AI detector",
            description: "Check any text for AI writing in under a minute, then get a model-based score and rewrite flagged sentences.",
            totalTime: "PT1M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            tool: [{ "@type": "HowToTool", name: "AI Free Text Pro AI Checker" }],
            step: [
              { "@type": "HowToStep", position: 1, name: "Paste your text", text: "Paste at least 150 words into the checker." },
              { "@type": "HowToStep", position: 2, name: "Read the signals", text: "See which writing patterns read as AI: sentence rhythm, stock phrases, concrete detail." },
              { "@type": "HowToStep", position: 3, name: "Get the full score", text: "Run the model-based detector in the app for an AI probability." },
              { "@type": "HowToStep", position: 4, name: "Rewrite flagged lines", text: "Use the humanizer or edit by hand, then check again." },
            ],
          })}
        </script>
      </Helmet>
      <SoftwareApplicationSchema
        name="Free AI Detector"
        description="Free AI detector and AI checker. Check essays, articles and emails for ChatGPT, Claude and Gemini writing. No sign-up for the quick check."
        url={URL}
        category="UtilityApplication"
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free AI Detector" }]} />
        </div>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">Free AI Detector and AI Checker</h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Paste any essay, article, email or cover letter and see in seconds whether it reads like ChatGPT,
                  Claude or Gemini wrote it. No sign-up and no word limit for the quick check; the full AI score is free in
                  the app.
                </p>
              </div>
              <AISignalChecker source="ai_checker" title="Check text for AI" />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Want a model-based AI probability?{" "}
                <a href={APP} className="font-medium text-primary hover:underline">
                  Open the full AI detector
                </a>{" "}
                (free account, 250 words a month, no card) ·{" "}
                <Link to="/free-ai-detector-word-limit" className="text-primary hover:underline">
                  free limits explained
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto max-w-3xl px-4 prose prose-lg dark:prose-invert">
            <h2>What this free AI detector checks</h2>
            <p>
              The checker works in two layers. The quick check above reads the writing signals that separate unedited AI
              drafts from human writing. It runs in your browser, so nothing is uploaded and there is no word limit. The
              detector in the app adds a trained model that scores the text for AI probability, sentence by sentence.
            </p>
            <ul>
              <li>
                <strong>Sentence rhythm.</strong> People mix four-word sentences with forty-word ones. Language models
                settle into an even 15 to 25 words.
              </li>
              <li>
                <strong>Stock AI phrases.</strong> "Delve", "landscape", "it's important to note", "moreover" and dozens
                more appear far more often in chatbot output than in human writing.
              </li>
              <li>
                <strong>Concrete detail.</strong> Real authors name dates, figures, places and people from memory. AI
                drafts make claims that are true but unattached.
              </li>
              <li>
                <strong>Transition scaffolding.</strong> Sentences that open with "Furthermore", "Additionally" or
                "Overall" in a row are a classic AI pattern.
              </li>
              <li>
                <strong>Predictability.</strong> In the app, the model measures how predictable each word is given the
                ones before it, the core signal behind every commercial detector. Read{" "}
                <Link to="/blog/how-ai-detectors-work">how AI detectors work</Link> for the full mechanics.
              </li>
            </ul>

            <h2>Detects ChatGPT, Claude, Gemini, DeepSeek and more</h2>
            <p>
              You don't need to know which model wrote a passage. All of them share the patterns above, with a few habits
              of their own:
            </p>
          </div>
          <div className="container mx-auto max-w-3xl px-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>What usually gives it away</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ChatGPT (GPT-4o, GPT-5)</TableCell>
                  <TableCell>Even pacing, "delve" and "landscape", tidy three-point structure, hedged conclusions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Claude</TableCell>
                  <TableCell>Long balanced sentences, careful qualifiers, "nuanced" and "multifaceted"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Gemini</TableCell>
                  <TableCell>Heavy bolding and lists, short summary closers, generic examples</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DeepSeek</TableCell>
                  <TableCell>Formal register, dense transitions, very regular paragraph shapes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Llama, Grok, Copilot</TableCell>
                  <TableCell>The same low-variance rhythm and stock vocabulary as the models they build on</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="container mx-auto max-w-3xl px-4 prose prose-lg dark:prose-invert mt-8">
            <p>
              Model-specific guides: <Link to="/blog/humanize-chatgpt-text">ChatGPT</Link>,{" "}
              <Link to="/blog/humanize-claude-output">Claude</Link>, <Link to="/blog/humanize-gemini-output">Gemini</Link>,{" "}
              <Link to="/blog/humanize-deepseek-output">DeepSeek</Link> and <Link to="/blog/humanize-gpt5-output">GPT-5</Link>.
            </p>

            <h2>How to read your AI score</h2>
            <ul>
              <li>
                <strong>0 to 34: reads human.</strong> Varied rhythm and concrete detail. Nothing to fix.
              </li>
              <li>
                <strong>35 to 59: mixed.</strong> Typical of AI drafts someone edited, or of formal human writing. Look at
                which signals fired and decide whether they matter for your reader.
              </li>
              <li>
                <strong>60 to 100: reads like an unedited AI draft.</strong> Several strong patterns together. Rewrite the
                flagged sentences or run the text through the{" "}
                <a href="https://app.aifreetextpro.com/humanizer">humanizer</a>, then check again.
              </li>
            </ul>
            <p>
              The score measures style, so it moves when the writing changes. Adding a real example, a number you know or
              a sentence in your own voice lowers it more than swapping synonyms does.
            </p>

            <h2>Free AI detectors compared</h2>
            <p>The free tiers of the detectors people use most, as published by each tool:</p>
          </div>
          <div className="container mx-auto max-w-3xl px-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Detector</TableHead>
                  <TableHead>Free allowance</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Rewrite flagged text</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">AI Free Text Pro</TableCell>
                  <TableCell>Signal check: no limit. Full detector: 250 words a month, 10 checks a day</TableCell>
                  <TableCell>Not for the signal check</TableCell>
                  <TableCell>Yes, built-in humanizer</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">GPTZero</TableCell>
                  <TableCell>About 10,000 characters a month</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>No</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ZeroGPT</TableCell>
                  <TableCell>Up to 15,000 characters per check</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>Paid add-on</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Copyleaks</TableCell>
                  <TableCell>A small number of scans</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>No</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-3 text-sm text-muted-foreground">
              Allowances change often; check each tool's pricing page. For a deeper comparison see{" "}
              <Link to="/blog/best-ai-detector-2026" className="text-primary hover:underline">
                the best AI detectors in 2026
              </Link>{" "}
              and{" "}
              <Link to="/blog/turnitin-vs-gptzero-vs-originality-ai" className="text-primary hover:underline">
                Turnitin vs GPTZero vs Originality.AI
              </Link>
              .
            </p>
          </div>
          <div className="container mx-auto max-w-3xl px-4 prose prose-lg dark:prose-invert mt-8">
            <h2>AI checker vs plagiarism checker vs grammar checker</h2>
            <p>
              The three tools answer different questions. A <strong>plagiarism checker</strong> asks whether your words
              already exist somewhere else and shows the matching sources. An <strong>AI checker</strong> asks whether
              your words read like a language model produced them; it compares your text with nothing, only with the
              statistics of human and machine writing. A <strong>grammar checker</strong> such as Grammarly fixes errors
              and suggests rewording. Heavy use of its rewrite suggestions can smooth prose until it reads as AI, which is
              why <Link to="/blog/does-grammarly-trigger-ai-detection">Grammarly can trigger AI detection</Link>.
            </p>

            <h2>When AI detectors get it wrong</h2>
            <p>
              Every detector produces false positives. Three situations cause most of them: passages under 150 words,
              formulaic writing such as lab reports and legal summaries, and writing by non-native English speakers.
              Researchers at Stanford found that popular GPT detectors flagged more than half of a set of TOEFL essays by
              non-native writers as AI-generated (
              <a href="https://arxiv.org/abs/2304.02819" target="_blank" rel="noopener noreferrer nofollow">
                Liang et al., 2023
              </a>
              ). OpenAI withdrew its own AI text classifier in 2023, citing its low accuracy. If a detector flags your
              writing, read <Link to="/blog/ai-detection-false-positives">why false positives happen</Link> and keep your
              draft history.
            </p>

            <h2>Check, then humanize</h2>
            <p>
              Detection is the first half of the job. Once you know which sentences read as AI, you can rewrite them by
              hand or let the humanizer rebuild them with varied rhythm and natural wording, then check again in the same
              workspace. That loop is why people use a{" "}
              <Link to="/">free AI detector and humanizer</Link> together rather than two separate tools.
            </p>

            <h2>Who uses a free AI checker</h2>
            <ul>
              <li>
                <strong>Teachers and professors</strong> screening essays: see the{" "}
                <Link to="/ai-detector-for-teachers">AI detector for teachers</Link>.
              </li>
              <li>
                <strong>Students</strong> checking their own work before submitting:{" "}
                <Link to="/blog/check-my-essay-for-ai">check my essay for AI</Link>.
              </li>
              <li>
                <strong>Editors and publishers</strong> screening freelance and guest submissions.
              </li>
              <li>
                <strong>Recruiters</strong> reading cover letters and written tests:{" "}
                <Link to="/blog/ai-detector-employers">AI detectors for employers</Link>.
              </li>
              <li>
                <strong>Marketers and SEO writers</strong> making sure content reads as written by a person before it
                ships.
              </li>
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Free AI detector FAQ</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <Card key={faq.question} className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Get the full AI score free</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Sentence-level AI probability, file uploads (PDF, DOCX, TXT) and the humanizer in one workspace.
              </p>
              <a href={APP} className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-8 py-6 text-lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Open the AI detector
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">Free account · 250 words a month · no card</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <PillarHubLinks hub="detection" currentPage="/ai-checker" title="AI Detection Resources" />
          <CrossHubNav currentHub="detection" />
          <RelatedArticles
            articles={[
              {
                title: "Did AI Write This? How to Check Any Text",
                description: "The manual checklist that confirms what a detector reports.",
                href: "/blog/how-to-check-if-written-by-ai",
                category: "How-To",
              },
              {
                title: "How AI Detectors Work",
                description: "Perplexity, burstiness and the models behind every AI score.",
                href: "/blog/how-ai-detectors-work",
                category: "Education",
              },
              {
                title: "Best AI Detectors in 2026",
                description: "GPTZero, Turnitin, Originality.AI, Copyleaks and more, tested.",
                href: "/blog/best-ai-detector-2026",
                category: "Comparison",
              },
            ]}
          />
          <FeaturedGuides currentPage="/ai-checker" />
          <InternalLinks currentPage="/ai-checker" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChecker;
