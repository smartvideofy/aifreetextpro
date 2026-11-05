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

const PATH = "/blog/ai-detection-other-languages";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=ai_detection_languages";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Do AI Detectors Work in Other Languages? Spanish, French, German and More (2026)";
const DESCRIPTION =
  "Which languages Turnitin, GPTZero, QuillBot and other AI detectors support, why accuracy drops outside English, how translation affects scores, and how to check non-English text fairly.";

const relatedArticles = [
  { title: "AI Writing for Non-Native English Speakers", description: "Why ESL writing is flagged more often.", href: "/blog/ai-writing-non-native-english-speakers", category: "Academic" },
  { title: "How AI Detectors Work", description: "Perplexity, burstiness and classifiers explained.", href: "/blog/how-ai-detectors-work", category: "Technical" },
  { title: "QuillBot AI Detector Review", description: "Six languages and four result categories.", href: "/blog/quillbot-ai-detector-review", category: "Detector Review" },
  { title: "AI Detection False Positives", description: "Why human writing gets flagged.", href: "/blog/ai-detection-false-positives", category: "Educational" },
];

const faqs = [
  { question: "Do AI detectors work in Spanish?", answer: "Several do. Turnitin added a Spanish AI writing model in September 2024, and GPTZero, QuillBot and others support Spanish. Accuracy outside English is generally less well tested, and vendors that publish figures report higher false-positive rates than for English, so treat Spanish results with extra caution." },
  { question: "Which languages does Turnitin's AI detection support?", answer: "Turnitin's AI writing detection covers long-form English, Spanish and Japanese. Its detection of AI-paraphrased and AI-bypassed text is English-only. Submissions in other languages don't get a reliable AI score." },
  { question: "Is AI detection less accurate in other languages?", answer: "Usually, yes. Detectors are trained mostly on English, and less independent research exists for other languages. GPTZero, for example, reports false-positive rates of around 2% for Spanish and German in its own benchmark, and says multilingual detection has a higher false-positive rate than English." },
  { question: "Does translating text change AI detection results?", answer: "It can. Machine-translated text is itself produced by a model, so a human essay translated with a tool can read as AI-like, and AI text translated into another language may score differently from the original. Check text in the language it was written in." },
  { question: "Can AI detectors handle mixed-language documents?", answer: "Poorly. Most detectors expect one language per document, and some, including Turnitin, don't support mixed-language submissions for AI scoring. Check each language section separately if you can." },
  { question: "What languages does AI Free Text Pro support?", answer: "The AI Free Text Pro app works in English, Spanish, French, German and Dutch, for both detection and humanization. As with any detector, longer passages give more reliable results, and a score is a signal rather than proof." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const TURNITIN_ES = src("https://turnitin.com/press/turnitin-ai-writing-detection-spanish-submission", "Turnitin: AI writing detection for Spanish submissions");
const TURNITIN_JA = src("https://turnitin.com/press/turnitin-introduces-ai-writing-detection-for-japanese-submissions", "Turnitin: AI writing detection for Japanese submissions (April 2025)");
const CLARITY_UPDATE = src("https://turnitin.forumbee.com/t/83ypy8l/turnitin-clarity-update-ai-detection-for-pasted-text-and-uk-english-support", "Turnitin community: detection covers English, Spanish and Japanese; paraphrase and bypasser English only");
const GPTZERO_ML = src("https://gptzero.me/news/multilingual-detection-update-german-portuguese/", "GPTZero: multilingual detection update (vendor figures)");
const QB_BLOG = src("https://quillbot.com/blog/quillbot-tools/ai-detector/", "QuillBot: AI Detector supported languages");
const LIANG = src("https://arxiv.org/abs/2304.02819", "Liang et al.: GPT detectors are biased against non-native English writers (2023)");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`ai_detection_languages_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const AIDetectionOtherLanguages = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="ai detector spanish, ai detection other languages, detector de ia en español, multilingual ai detector, does turnitin detect ai in spanish, ai detector french german" />
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
      <SpeakableSchema pageUrl={URL} pageName="AI Detection in Other Languages" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "AI Detection in Other Languages" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Do AI Detectors Work in Other Languages? Spanish, French, German and More (2026)</h1>
              <QuickAnswer
                question="Do AI detectors work in languages other than English?"
                answer="Some do, with caveats. Turnitin's AI score covers English, Spanish and Japanese; QuillBot supports six European languages; GPTZero and others support several more. But detectors are trained mostly on English, independent testing outside English is thin, and vendors that publish figures report higher false-positive rates for other languages. Check text in the language it was written in, use longer passages, and treat any score on non-English text with extra caution."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-11-05">November 5, 2026</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Educational</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <KeyTakeaways points={[
              "Turnitin scores AI writing in English, Spanish and Japanese. Its paraphrase and bypasser detection is English-only.",
              "QuillBot supports six languages; GPTZero, Pangram and others support several more.",
              "Outside English, accuracy is less tested and false positives are generally higher.",
              "Machine translation is itself AI output, so translated human writing can read as AI-like.",
              "Check text in its original language, use 300+ words, and never treat a non-English score as proof.",
            ]} />

            <h2>Which Detectors Support Which Languages</h2>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Detector</TableHead>
                    <TableHead>Languages for AI detection</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Turnitin</TableCell><TableCell>English, Spanish, Japanese</TableCell><TableCell>Separate models per language; paraphrase and bypasser detection English only</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">QuillBot</TableCell><TableCell>English, French, Spanish, German, Dutch, Portuguese</TableCell><TableCell>Free under 1,200 words</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">GPTZero</TableCell><TableCell>English plus several others, including Spanish, French, German and Portuguese</TableCell><TableCell>Says multilingual false positives are higher than English</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Grammarly</TableCell><TableCell>English</TableCell><TableCell>Built primarily for English</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">AI Free Text Pro</TableCell><TableCell>English, Spanish, French, German, Dutch</TableCell><TableCell>Detection and humanization in all five</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground">Based on each vendor's published information, checked November 5, 2026. Language support changes, so confirm on the vendor's site.</p>

            <h2>Turnitin Outside English</h2>
            <p>Turnitin builds a separate AI writing model for each language rather than stretching the English one. Its Spanish model launched in 2024, trained on Spanish-language writing ({TURNITIN_ES}), and a Japanese model followed in April 2025 ({TURNITIN_JA}). Turnitin says detection covers English, Spanish and Japanese, while its newer categories for AI-paraphrased and AI-bypassed text cover English only ({CLARITY_UPDATE}).</p>
            <p>So if you submit in French, German, Dutch or Portuguese through Turnitin, you generally won't get an AI score at all, though your instructor can still use other evidence or other tools.</p>

            <h2>Why Accuracy Drops Outside English</h2>
            <ul>
              <li><strong>Less training data.</strong> Detectors learn from large collections of human and AI text, and those collections are dominated by English.</li>
              <li><strong>Less independent testing.</strong> Most published research on detector accuracy is in English. For other languages, most figures come from the vendors themselves.</li>
              <li><strong>Higher false positives.</strong> GPTZero, one of the few vendors to publish per-language numbers, reports false-positive rates of around 2% for Spanish and German in its own benchmark and says multilingual false positives are higher than for English ({GPTZERO_ML}).</li>
              <li><strong>Formal styles read as predictable.</strong> Academic writing conventions in many languages are formal and formulaic, which detectors can mistake for machine text.</li>
            </ul>

            <h2>The Translation Problem</h2>
            <p>Translation causes two kinds of trouble. First, machine translation is itself produced by a language model, so a genuine human essay written in Spanish and translated into English with a tool can come out reading as AI-like. Second, AI text translated into another language may score quite differently from the original. The safe rule: check text in the language it was written in, and if you translated your own work with a tool where that's allowed, keep your original version.</p>

            <Cta
              heading="Check text in its original language"
              text="AI Free Text Pro detects AI writing in English, Spanish, French, German and Dutch, with sentence-level highlighting."
              label="Check text for AI free"
              position="mid"
            />

            <h2>Non-Native English Writers</h2>
            <p>A related problem affects people writing in English as a second language. A 2023 Stanford study found that several detectors misclassified a large share of essays by non-native English writers as AI-generated, while scoring native writers' essays accurately ({LIANG}). Careful, conventional English, the kind many people are taught, looks predictable to a detector. Our guide for <Link to="/blog/ai-writing-non-native-english-speakers">non-native English speakers</Link> covers how to protect yourself.</p>

            <h2>How to Check Non-English Text Fairly</h2>
            <ol>
              <li><strong>Use a detector that supports the language,</strong> and confirm it on the vendor's site.</li>
              <li><strong>Check the original,</strong> not a translation.</li>
              <li><strong>Use at least 300 words,</strong> one language at a time. Split mixed-language documents.</li>
              <li><strong>Read the highlighted sentences,</strong> not just the percentage.</li>
              <li><strong>Treat the result as a prompt for a conversation,</strong> especially in high-stakes settings. Process evidence such as drafts and version history matters more than any score.</li>
            </ol>
            <p>If you've been flagged on non-English or second-language writing, see <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link>.</p>

            <h2>The Bottom Line</h2>
            <p>AI detection outside English exists and is improving, but it's less tested and more error-prone than in English. Know which languages your detector supports, check text in its original language, and give any non-English score less weight than you would an English one.</p>

            <Cta
              heading="Run a free check in five languages"
              text="Overall score plus sentence-level highlighting in English, Spanish, French, German and Dutch."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{TURNITIN_ES}</li>
              <li>{TURNITIN_JA}</li>
              <li>{CLARITY_UPDATE}</li>
              <li>{GPTZERO_ML}</li>
              <li>{QB_BLOG}</li>
              <li>{LIANG}</li>
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

export default AIDetectionOtherLanguages;
