import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ExternalLink, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ReviewedBy from "@/components/ReviewedBy";
import KeyTakeaways from "@/components/KeyTakeaways";
import { RelatedArticles } from "@/components/RelatedArticles";
import InternalLinks from "@/components/InternalLinks";
import { FAQSection } from "@/components/FAQSection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AuthorSchema } from "@/components/AuthorSchema";
import { SpeakableSchema } from "@/components/SpeakableSchema";
import { trackCTAClick } from "@/lib/analytics";

const PATH = "/blog/pangram-ai-detector-review";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=pangram_review";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Pangram AI Detector Review: Accuracy, Pricing and Limits (2026)";
const DESCRIPTION =
  "What independent studies found about Pangram's AI detector, including on humanized text, how it compares with GPTZero and Turnitin, what it costs, and the limits that still apply.";

const relatedArticles = [
  { title: "Does Paraphrasing Avoid AI Detection?", description: "What research on paraphrase attacks found.", href: "/blog/does-paraphrasing-avoid-ai-detection", category: "Educational" },
  { title: "GPTZero Accuracy Review", description: "Detection rates and false positives.", href: "/blog/gptzero-accuracy-review", category: "Detector Review" },
  { title: "Best AI Detector 2026", description: "Accuracy ranking across the major tools.", href: "/blog/best-ai-detector-2026", category: "Comparison" },
  { title: "Grammarly AI Detector Review", description: "Accuracy, limits and Grammarly Authorship.", href: "/blog/grammarly-ai-detector-review", category: "Detector Review" },
];

const faqs = [
  { question: "Is Pangram the most accurate AI detector?", answer: "In the independent studies published so far, it performs best. A 2025 NBER working paper found near-zero false-positive and false-negative rates, and a 2026 study from the Vrije Universiteit Brussel found it outperformed GPTZero, Copyleaks and Turnitin, especially on hybrid and humanized text. That doesn't make it infallible, and the authors still advise against using any detector as the only evidence." },
  { question: "Can Pangram detect humanized text?", answer: "The evidence says mostly yes. The NBER study found Pangram stayed accurate on text processed by humanizer tools, and Pangram's own tests report catching over 90% of output from every humanizer it tried. Pangram says it deliberately keeps its false-positive rate low, so it doesn't try to flag badly garbled text." },
  { question: "Is Pangram free?", answer: "Pangram's pricing page lists paid plans with a 7-day free trial: an Individual plan at $20 a month with up to 300,000 words, a Professional plan at $65 a month, and a Team plan. Check the pricing page for current terms." },
  { question: "Does Pangram have false positives?", answer: "Rarely in published tests, but not never. Studies measure rates on specific test sets, and any small rate applied to thousands of documents produces some wrongly flagged writing. Pangram describes itself as prioritising not flagging genuine human writing, which is the right priority, but a score is still not proof." },
  { question: "Is Pangram better than Turnitin?", answer: "In the 2026 VUB study it detected AI-generated, hybrid and humanized texts better than Turnitin. But most students don't choose which detector their school uses, and institutions weigh other factors, such as LMS integration and existing licences. Several universities have also turned off AI scores altogether." },
  { question: "Why would a humanizer company recommend reading about Pangram?", answer: "Because it's the honest answer to the question people are searching for. We sell a humanizer, and the evidence shows no rewriting tool, including ours, can guarantee a result against the strongest detectors. If you're using AI where it's allowed, disclose it; don't rely on any tool to hide it where it isn't." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const NBER = src("https://www.nber.org/papers/w34223", "Jabarian and Imas: Artificial Writing and Automated Detection (NBER Working Paper 34223, September 2025)");
const VUB = src("https://link.springer.com/article/10.1007/s40979-026-00226-w", "Van Vlasselaer, Van Droogenbroeck and Spruyt (VUB): International Journal for Educational Integrity (2026)");
const PANGRAM_HUMANIZERS = src("https://www.pangram.com/blog/humanizers-aug-25", "Pangram: detecting AI humanizers (August 2025, vendor post)");
const PANGRAM_PRICING = src("https://www.pangram.com/pricing", "Pangram pricing");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`pangram_review_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const PangramAIDetectorReview = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="pangram ai detector, pangram review, pangram accuracy, pangram vs gptzero, pangram vs turnitin, pangram humanizer detection" />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content="2026-11-05" />
        <meta property="article:modified_time" content="2026-11-05" />
        <meta property="article:author" content="Dr. Sarah Chen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <AuthorSchema articleUrl={URL} headline={TITLE} description={DESCRIPTION} datePublished="2026-11-05" dateModified="2026-11-05" image={OG_IMAGE} />
      <SpeakableSchema pageUrl={URL} pageName="Pangram AI Detector Review" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Pangram AI Detector Review" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Pangram AI Detector Review: Accuracy, Pricing and Limits (2026)</h1>
              <QuickAnswer
                question="Is Pangram a good AI detector?"
                answer="On the independent evidence so far, it's the strongest commercial AI detector. A 2025 NBER study found near-zero false-positive and false-negative rates that held on short passages and humanized text, and a 2026 university study found it beat GPTZero, Copyleaks and Turnitin, especially on hybrid and humanized writing. It's a paid tool, starting at $20 a month after a 7-day trial. Even so, its makers and the researchers agree a score shouldn't be the only evidence in a high-stakes case."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-11-05">November 5, 2026</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Detector Review</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <div className="not-prose border border-border rounded-lg p-5 my-6 bg-muted/40">
              <p className="text-sm"><strong>Disclosure:</strong> AI Free Text Pro sells an AI detector and an AI humanizer, so Pangram is in some ways a competitor and in others a tool built to catch products like ours. We've based this review on independent research and Pangram's published information, and we've reported the results as they are.</p>
            </div>

            <KeyTakeaways points={[
              "Two independent studies, from NBER (2025) and VUB (2026), rank Pangram ahead of GPTZero, Originality.ai, Copyleaks and Turnitin.",
              "Its standout result is humanized text: it stayed accurate where other detectors dropped off.",
              "The NBER authors found it was the only detector to hold false positives at or below 0.5% without losing accuracy.",
              "It's paid: $20 a month for individuals after a 7-day trial, with team and professional plans.",
              "Low error rates still produce some false flags at scale. A score is evidence to weigh, not a verdict.",
            ]} />

            <h2>What the Independent Research Found</h2>
            <h3>NBER, September 2025</h3>
            <p>Economists Brian Jabarian and Alex Imas tested three commercial detectors, Pangram, Originality.ai and GPTZero, plus an open-source baseline on a large set of texts across genres, lengths and AI models ({NBER}). They found:</p>
            <ul>
              <li>Pangram had near-zero false-negative and false-positive rates, and these held across AI models and threshold settings.</li>
              <li>Its accuracy held on very short passages of 50 words or fewer, where most detectors struggle.</li>
              <li>It stayed accurate on text processed by humanizer tools designed to evade detection.</li>
              <li>It was the only tool that met a strict cap of a 0.5% false-positive rate without losing accuracy.</li>
            </ul>
            <p>The authors' main policy point is worth repeating: institutions should decide in advance which error they find least tolerable, usually wrongly accusing a human, and choose a detector and threshold that respect that limit.</p>

            <h3>Vrije Universiteit Brussel, 2026</h3>
            <p>Researchers at VUB compared GPTZero, Pangram, Copyleaks and Turnitin on 160 academic documents of known origin: fully human, fully AI, hybrid, and AI text rewritten to resemble student writing ({VUB}). All four tools correctly identified the fully human documents. Pangram performed best overall, particularly on hybrid and humanized texts, while the other three significantly underestimated AI content, especially from the most advanced model.</p>
            <p>The researchers then ran Pangram on 1,163 master's theses from 2024 and 2025. It flagged 45.5% of them, mostly at low to moderate levels of AI-associated text. That figure needs careful reading: it shows how common some AI assistance has become, not that nearly half the theses were cheating. The authors themselves say detectors should not be the sole evidence in high-stakes integrity cases.</p>

            <h2>Humanized Text: Why Pangram Is Different</h2>
            <p>Most detectors lose accuracy sharply when AI text is run through a humanizer. Pangram's own testing reports catching over 90% of output from every humanizer it tried ({PANGRAM_HUMANIZERS}). That's a vendor claim, but it's consistent with both independent studies.</p>
            <p>Pangram also says it deliberately keeps its false-positive rate low: it has internal models that catch humanizers more aggressively but flag more genuine human writing, and it doesn't ship them. It also doesn't try to flag badly garbled text, because humanizer gibberish and human gibberish are hard to tell apart. That's the right trade-off for a tool that can affect people's grades and jobs.</p>
            <p>For students, the practical lesson is simple: if your institution uses Pangram, a humanizer, including ours, won't reliably hide AI use, and you shouldn't use one to hide AI where it's prohibited. Our article on <Link to="/blog/does-paraphrasing-avoid-ai-detection">whether paraphrasing avoids AI detection</Link> covers the wider research.</p>

            <h2>Pangram vs the Big Detectors</h2>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Detector</TableHead>
                    <TableHead>Independent evidence</TableHead>
                    <TableHead>Humanized text</TableHead>
                    <TableHead>Who uses it</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Pangram</TableCell><TableCell>Best in NBER (2025) and VUB (2026) studies</TableCell><TableCell>Stayed accurate in both studies</TableCell><TableCell>Educators, publishers, moderation teams; paid plans</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">GPTZero</TableCell><TableCell>Tested in both studies; behind Pangram</TableCell><TableCell>Underestimated AI content in VUB study</TableCell><TableCell>Teachers and students; free tier</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Turnitin</TableCell><TableCell>Tested by VUB; behind Pangram</TableCell><TableCell>Has added bypasser detection (English)</TableCell><TableCell>Most universities, through the LMS</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Originality.ai</TableCell><TableCell>Tested by NBER; behind Pangram</TableCell><TableCell>Less robust than Pangram in NBER study</TableCell><TableCell>Publishers and SEO teams</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Copyleaks</TableCell><TableCell>Tested by VUB; behind Pangram</TableCell><TableCell>Underestimated AI content in VUB study</TableCell><TableCell>Schools via LMS integrations, businesses</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <p>For the other tools in detail, see our <Link to="/blog/gptzero-accuracy-review">GPTZero review</Link>, <Link to="/blog/turnitin-ai-detection-accuracy">Turnitin accuracy guide</Link> and <Link to="/blog/best-ai-detector-2026">best AI detectors of 2026</Link>.</p>

            <h2>Pricing</h2>
            <p>Pangram's pricing page lists three plans, with no permanent free plan ({PANGRAM_PRICING}):</p>
            <ul>
              <li><strong>Individual:</strong> $20 a month, 7-day free trial, up to 300,000 words a month, plus image detection, file upload and Google Docs integration.</li>
              <li><strong>Professional:</strong> $65 a month, five times the Individual word allowance.</li>
              <li><strong>Team:</strong> $40 a month for two seats, with an admin dashboard and additional seats available.</li>
            </ul>
            <p className="text-sm text-muted-foreground">Checked November 5, 2026. Annual billing is discounted; check Pangram's site for current terms.</p>

            <Cta
              heading="Need a free first check?"
              text="Our detector has a free plan with sentence-level highlighting, useful for screening a draft before you decide whether you need more."
              label="Check text for AI free"
              position="pricing"
            />

            <h2>Limits That Still Apply</h2>
            <ul>
              <li><strong>Small rates add up.</strong> Even a very low false-positive rate means some genuine writing gets flagged when thousands of documents are checked.</li>
              <li><strong>Mixed writing is genuinely ambiguous.</strong> The thesis study shows that "some AI" is now common. A detector can estimate how much text looks AI-generated; it can't tell you whether that use was allowed.</li>
              <li><strong>It measures text, not authorship.</strong> A score can't show who wrote something or how. Version history, drafts and conversation still do that better.</li>
              <li><strong>Studies are snapshots.</strong> Detectors and AI models both change quickly, so results from 2025–2026 may not hold for future models.</li>
            </ul>
            <p>If you've been flagged by any detector, including Pangram, our guide to <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link> applies.</p>

            <h2>The Bottom Line</h2>
            <p>Pangram is the AI detector with the strongest independent evidence behind it, especially on humanized and short text, and it's built around keeping false positives low. For institutions and publishers that need a detector, it's the one the research favours. For everyone else, the usual rule holds: a detector score, however good the detector, is a reason to look closer, not a verdict.</p>

            <Cta
              heading="Screen a draft for free"
              text="Overall score plus sentence-level highlighting, with a free plan."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{NBER}</li>
              <li>{VUB}</li>
              <li>{PANGRAM_HUMANIZERS}</li>
              <li>{PANGRAM_PRICING}</li>
            </ul>

            <FAQSection faqs={faqs} />
            <RelatedArticles articles={relatedArticles} />
            <InternalLinks currentPage={PATH} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PangramAIDetectorReview;
