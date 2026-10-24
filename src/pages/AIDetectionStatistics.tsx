import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FAQSection } from "@/components/FAQSection";
import InternalLinks from "@/components/InternalLinks";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const URL = "https://aifreetextpro.com/ai-detection-statistics";
const TITLE = "AI Detection Statistics 2026: Accuracy, False Positives and AI Use in Schools";
const DESCRIPTION =
  "Key AI detection statistics with sources: detector accuracy and false-positive rates, how much student writing Turnitin flags as AI, and how many students and teens use AI. Free to cite.";

const SRC = {
  liang: "https://arxiv.org/abs/2304.02819",
  openai: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/",
  turnitin: "https://www.aap.com.au/aapreleases/cision20240409ae83139/",
  vanderbilt: "https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/",
  hepi: "https://www.hepi.ac.uk/2025/02/26/student-generative-ai-survey-2025/",
  pew: "https://www.pewresearch.org/short-reads/2025/01/15/about-a-quarter-of-us-teens-have-used-chatgpt-for-schoolwork-double-the-share-in-2023/",
  synthid: "https://www.nature.com/articles/s41586-024-08025-4",
};

const stats: { stat: string; detail: string; source: string; href: string }[] = [
  { stat: "61%", detail: "Average share of TOEFL essays by non-native English writers that seven GPT detectors wrongly flagged as AI", source: "Liang et al., Stanford, 2023", href: SRC.liang },
  { stat: "97.8%", detail: "Share of those 91 human-written TOEFL essays flagged as AI by at least one of the seven detectors", source: "Liang et al., 2023", href: SRC.liang },
  { stat: "26%", detail: "Share of AI-written text OpenAI's own classifier caught; it mislabelled human text as AI 9% of the time", source: "OpenAI, 2023", href: SRC.openai },
  { stat: "July 2023", detail: "When OpenAI withdrew its AI text classifier, citing its low accuracy", source: "OpenAI, 2023", href: SRC.openai },
  { stat: "200M+", detail: "Student papers Turnitin's AI detector reviewed in its first year", source: "Turnitin, April 2024", href: SRC.turnitin },
  { stat: "11%", detail: "Of those papers (about 22 million) had at least 20% AI writing", source: "Turnitin, April 2024", href: SRC.turnitin },
  { stat: "3%", detail: "Of those papers (about 6 million) had at least 80% AI writing", source: "Turnitin, April 2024", href: SRC.turnitin },
  { stat: "~750", detail: "Papers Vanderbilt estimated could be wrongly flagged a year at Turnitin's claimed 1% false-positive rate, when it disabled the detector", source: "Vanderbilt University, Aug 2023", href: SRC.vanderbilt },
  { stat: "92%", detail: "UK undergraduates using AI tools in 2025, up from 66% in 2024", source: "HEPI / Kortext survey, 2025", href: SRC.hepi },
  { stat: "88%", detail: "UK undergraduates who used generative AI for assessments in 2025, up from 53%", source: "HEPI / Kortext survey, 2025", href: SRC.hepi },
  { stat: "18%", detail: "UK undergraduates who included AI-generated text directly in their work", source: "HEPI / Kortext survey, 2025", href: SRC.hepi },
  { stat: "26%", detail: "US teens (13 to 17) who used ChatGPT for schoolwork in 2024, double the 13% of 2023", source: "Pew Research Center, Jan 2025", href: SRC.pew },
  { stat: "~20M", detail: "Gemini responses in Google DeepMind's live test of the SynthID-Text watermark, with no measurable drop in user ratings", source: "Dathathri et al., Nature, 2024", href: SRC.synthid },
];

const faqs = [
  { question: "How accurate are AI detectors?", answer: "It depends heavily on the text. On long, unedited AI drafts the best detectors catch most of it, but published research shows serious failures elsewhere: OpenAI's own classifier caught only 26% of AI text before it was withdrawn, and seven popular detectors wrongly flagged an average of 61% of essays by non-native English writers as AI." },
  { question: "What is the false positive rate of AI detectors?", answer: "Vendors such as Turnitin claim around 1% at the document level for longer submissions. Independent studies find much higher rates on particular groups of writers, most notably non-native English speakers, and on short or formulaic texts." },
  { question: "How many students use AI to write?", answer: "In the UK, 92% of undergraduates used AI tools in 2025 and 88% used generative AI for assessments (HEPI). In the US, 26% of teens used ChatGPT for schoolwork in 2024, double the year before (Pew). Turnitin found at least 20% AI writing in about 11% of 200 million papers in its first year." },
  { question: "Have any universities stopped using AI detectors?", answer: "Yes. Vanderbilt University disabled Turnitin's AI detector in August 2023, citing false positives, a lack of transparency about how it works, and bias against non-native English writers. Several other universities have made similar decisions." },
  { question: "Can I use these statistics?", answer: "Yes. Every figure links to its original source. If you quote them, please link to this page as well: it is updated as new research is published." },
];

const CITE_HTML = `<a href="${URL}">AI detection statistics (AI Free Text Pro)</a>`;

function CiteBox() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
      <p className="mb-2 font-semibold">Cite this page</p>
      <p className="mb-3 text-sm text-muted-foreground">
        AI Free Text Pro. "AI Detection Statistics 2026." Updated October 24, 2026. {URL}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <code className="min-w-0 flex-1 truncate rounded-lg bg-background px-3 py-2 text-xs">{CITE_HTML}</code>
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(CITE_HTML);
              setCopied(true);
            } catch {
              /* clipboard blocked: the snippet stays selectable */
            }
          }}
          className="inline-flex items-center gap-1 rounded-lg border border-primary/30 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} {copied ? "Copied" : "Copy link HTML"}
        </button>
      </div>
    </div>
  );
}

const AIDetectionStatistics = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta
        name="keywords"
        content="ai detection statistics, ai detector accuracy statistics, ai detector false positive rate, students using ai statistics, turnitin ai statistics, ai in education statistics 2026"
      />
      <link rel="canonical" href={URL} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content="AI Free Text Pro" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          mainEntityOfPage: URL,
          datePublished: "2026-10-24",
          dateModified: "2026-10-24",
          author: { "@type": "Organization", name: "AI Free Text Pro", url: "https://aifreetextpro.com" },
          publisher: { "@type": "Organization", name: "AI Free Text Pro", logo: { "@type": "ImageObject", url: "https://aifreetextpro.com/logo.png" } },
          citation: Object.values(SRC),
        })}
      </script>
    </Helmet>

    <Navbar />
    <main className="min-h-screen pb-16 pt-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Detection Statistics" }]} />
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">AI Detection Statistics 2026</h1>
          <p className="text-sm text-muted-foreground">Updated October 24, 2026 · Every figure links to its original source</p>
          <QuickAnswer
            question="How reliable is AI detection?"
            answer="Less than most people assume. Seven popular detectors wrongly flagged an average of 61% of essays by non-native English writers as AI, OpenAI withdrew its own classifier after it caught only 26% of AI text, and Vanderbilt disabled Turnitin's detector over false positives. Meanwhile AI use is near-universal: 92% of UK undergraduates used AI tools in 2025."
          />
        </article>

        <div className="my-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-28">Statistic</TableHead>
                <TableHead>What it measures</TableHead>
                <TableHead className="w-48">Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.map((s) => (
                <TableRow key={s.detail}>
                  <TableCell className="text-lg font-bold text-primary">{s.stat}</TableCell>
                  <TableCell>{s.detail}</TableCell>
                  <TableCell>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {s.source}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <CiteBox />

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <h2>AI detector accuracy</h2>
          <p>
            Accuracy claims from detector vendors are measured on clean test sets: long, unedited AI text against
            typical human writing. Real submissions are messier. OpenAI's January 2023 classifier is the clearest public
            example of the gap: on OpenAI's own challenge set it identified 26% of AI-written text and mislabelled human
            writing as AI 9% of the time, and OpenAI withdrew it on July 20, 2023, citing its low accuracy. Detection gets
            more reliable as text gets longer, which is why every major tool treats passages under a few hundred words
            as inconclusive. For the mechanics, see <Link to="/blog/how-ai-detectors-work">how AI detectors work</Link>.
          </p>

          <h2>False positives and bias</h2>
          <p>
            The most cited study of detector bias, by James Zou's group at Stanford, ran 91 TOEFL essays written by
            non-native English speakers through seven popular GPT detectors. On average the detectors labelled 61% of
            them as AI-generated; 89 of the 91 essays (97.8%) were flagged by at least one detector, and 18 were flagged
            by all seven. The same detectors were near-perfect on essays by US eighth graders. The authors trace the
            problem to perplexity: writers with a smaller working vocabulary produce more predictable text, which is the
            signal detectors read as machine writing. More in{" "}
            <Link to="/blog/ai-detection-false-positives">AI detection false positives</Link>.
          </p>

          <h2>How much student writing is AI?</h2>
          <p>
            Turnitin reported in April 2024 that its AI detector had reviewed more than 200 million papers in its first
            year. About 11% (22 million) contained at least 20% AI writing, and about 3% (6 million) contained at least
            80%. Vanderbilt University had already disabled the detector in August 2023: at Turnitin's own claimed 1%
            false-positive rate, it estimated around 750 of its students' papers a year could be wrongly flagged.
          </p>

          <h2>How many students use AI?</h2>
          <p>
            In the UK, the HEPI and Kortext survey of 1,041 undergraduates found AI tool use rose from 66% in 2024 to 92%
            in 2025, and use of generative AI for assessments from 53% to 88%; 18% had put AI-generated text directly
            into their work. In the US, Pew Research Center found 26% of teens aged 13 to 17 had used ChatGPT for
            schoolwork in 2024, double the 13% of 2023.
          </p>

          <h2>AI text watermarking</h2>
          <p>
            Google DeepMind's SynthID-Text, described in Nature in October 2024, watermarks Gemini output by adjusting
            word choices during generation. A live test on nearly 20 million Gemini responses found no measurable drop in
            user ratings. The authors note that editing or paraphrasing can weaken the watermark. See our{" "}
            <Link to="/ai-watermark-remover">AI watermark remover</Link> for what can and can't be removed.
          </p>

          <h2>What this means in practice</h2>
          <ul>
            <li>Treat any single AI score as one piece of evidence, especially for non-native English writers.</li>
            <li>Check long passages: short ones produce unreliable scores in every tool.</li>
            <li>
              Use more than one detector, or a detector plus a manual check: our{" "}
              <Link to="/ai-checker">free AI detector</Link> shows which writing signals drive its result.
            </li>
          </ul>

          <FAQSection faqs={faqs} title="AI detection statistics FAQ" />
        </article>

        <InternalLinks currentPage="/ai-detection-statistics" />
      </div>
    </main>
    <Footer />
  </>
);

export default AIDetectionStatistics;
