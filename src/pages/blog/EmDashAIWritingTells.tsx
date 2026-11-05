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

const PATH = "/blog/em-dash-ai-writing-tells";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=em_dash_ai_tells";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Em Dashes and Other AI Writing Tells: What Actually Gives AI Away (2026)";
const DESCRIPTION =
  "Is the em dash a sign of ChatGPT? Where the idea came from, why it's a weak signal on its own, the word and structure patterns that matter more, and what detectors actually measure.";

const relatedArticles = [
  { title: "Did AI Write This? How to Check", description: "Manual signals plus detector workflow.", href: "/blog/how-to-check-if-written-by-ai", category: "How-To Guide" },
  { title: "How AI Detectors Work", description: "What detectors measure, beyond punctuation.", href: "/blog/how-ai-detectors-work", category: "Technical" },
  { title: "How to Make AI Writing More Creative", description: "Techniques and prompts for less generic drafts.", href: "/blog/make-ai-writing-creative", category: "Writing Craft" },
  { title: "AI Detection False Positives", description: "Why human writing gets flagged.", href: "/blog/ai-detection-false-positives", category: "Educational" },
];

const faqs = [
  { question: "Is using an em dash a sign of AI writing?", answer: "Not on its own. Writers used em dashes for centuries before chatbots, and many style guides recommend them. What drew attention is that ChatGPT tends to use them very often. A heavy cluster of em dashes alongside other tells can be a hint; a single em dash means nothing." },
  { question: "Why does ChatGPT use so many em dashes?", answer: "Nobody outside the AI labs knows for certain. The common explanations are that models learned the habit from edited, published writing where em dashes are common, and that the dash is a flexible way to join clauses that models fall back on. Whatever the cause, OpenAI acknowledged the habit." },
  { question: "Can you stop ChatGPT using em dashes?", answer: "Yes. In November 2025 Sam Altman said ChatGPT would now follow a custom instruction not to use em dashes. By default it still uses them, and users reported it occasionally slips." },
  { question: "Will removing em dashes stop AI detection?", answer: "Unlikely. AI detectors measure statistical patterns across the whole passage, such as how predictable each word is and how evenly sentences are built. Swapping punctuation barely changes those patterns. Removing em dashes may change how a human reader perceives the text, not how a detector scores it." },
  { question: "Should I stop using em dashes in my own writing?", answer: "No, if they're part of how you write. Use them where they help, and don't let a punctuation mark you've always used make you doubt your own writing. If you're worried about being questioned, keeping your drafts and version history is far better protection than changing your style." },
  { question: "What words are signs of AI writing?", answer: "Research on scientific abstracts found words like 'delves', 'showcasing' and 'underscores' became far more common after ChatGPT's release. Other often-cited tells include 'tapestry', 'testament', 'pivotal' and 'in today's fast-paced world'. Like the em dash, none of them proves anything alone; clusters of them are what readers notice." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const ROLLING = src("https://www.rollingstone.com/culture/culture-features/chatgpt-hypen-em-dash-ai-writing-1235314945/", "Rolling Stone: the em dash and AI writing");
const ARS = src("https://arstechnica.com/ai/2025/11/forget-agi-sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules/", "Ars Technica: Sam Altman celebrates ChatGPT following em dash instructions (November 2025)");
const KOBAK = src("https://arxiv.org/abs/2406.07016", "Kobak et al.: Delving into LLM-assisted writing through excess vocabulary (2024)");
const WIKI = src("https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing", "Wikipedia: Signs of AI writing (editors' field guide)");
const LIANG = src("https://arxiv.org/abs/2304.02819", "Liang et al.: GPT detectors are biased against non-native English writers (2023)");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`em_dash_ai_tells_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const EmDashAIWritingTells = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="em dash ai, em dash chatgpt, is em dash a sign of ai, signs of ai writing, ai writing tells, delve chatgpt, chatgpt em dash" />
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
      <SpeakableSchema pageUrl={URL} pageName="Em Dashes and AI Writing Tells" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Em Dashes and AI Writing Tells" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Em Dashes and Other AI Writing Tells: What Actually Gives AI Away (2026)</h1>
              <QuickAnswer
                question="Is the em dash a sign of AI writing?"
                answer="Only weakly. ChatGPT uses em dashes often enough that people started treating them as a giveaway, and OpenAI acknowledged the habit. But writers used em dashes long before AI, so one on its own proves nothing. Readers are better served by clusters of tells: stock vocabulary such as 'delve', rigid structure, and generic claims with no specifics. Detectors don't rely on punctuation at all; they measure statistical patterns across the whole passage."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-11-05">November 5, 2026</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Writing Craft</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <KeyTakeaways points={[
              "The em dash became a meme because ChatGPT overuses it, not because it's new or unusual.",
              "In November 2025 OpenAI made ChatGPT follow instructions not to use em dashes, so its absence proves nothing either.",
              "Vocabulary shifts are better documented: research on PubMed abstracts found words like 'delves' surged after ChatGPT.",
              "No single tell is evidence. Readers should look for clusters; detectors measure whole-passage statistics.",
              "If em dashes are part of your style, keep them. Your drafts are better protection than self-censoring punctuation.",
            ]} />

            <h2>How the Em Dash Became "the ChatGPT Hyphen"</h2>
            <p>An em dash is the long dash used to set off a thought or add emphasis. Writers have used it for centuries. But around 2024 and 2025 readers noticed that ChatGPT's replies were full of them, often several per paragraph, and the em dash became shorthand for "a chatbot wrote this" ({ROLLING}). Writers who'd always used em dashes found themselves accused of using AI, and some started removing them from their own work.</p>
            <p>OpenAI acknowledged the habit. In November 2025 Sam Altman celebrated, as a small win, that ChatGPT would now follow a custom instruction telling it not to use em dashes ({ARS}). The default behaviour didn't change, but anyone who wants em-dash-free output can now get it with one instruction. That cuts both ways: an em dash doesn't prove AI, and the absence of one doesn't prove a human.</p>

            <h2>Why One Tell Is Never Enough</h2>
            <p>Any single feature is a weak signal because humans produce it too. Em dashes are common in published, edited writing, which is partly why models learned them. The same goes for words like "crucial" and structures like the three-part list. Accusing someone on the strength of punctuation is how human writers end up wrongly suspected, especially formal writers and non-native English speakers, whose careful, conventional prose already reads as predictable to detectors ({LIANG}).</p>
            <p>What experienced readers and editors actually rely on is clusters: several tells at once, in a passage that also lacks the things human writing usually has, like specific names, numbers, memories and opinions.</p>

            <h2>The Tells That Matter More</h2>
            <p>Wikipedia's editors, who deal with AI-generated submissions constantly, keep a detailed field guide to signs of AI writing ({WIKI}). Combined with published research, these are the patterns that come up most:</p>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tell</TableHead>
                    <TableHead>Example</TableHead>
                    <TableHead>How strong a signal?</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Overused "AI vocabulary"</TableCell><TableCell>delve, tapestry, testament, pivotal, underscore, showcase</TableCell><TableCell>Moderate in clusters; documented in research</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Negative parallelism</TableCell><TableCell>"It's not just a tool, it's a revolution."</TableCell><TableCell>Moderate when repeated</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Rule of three</TableCell><TableCell>"fast, reliable, and secure" in every paragraph</TableCell><TableCell>Weak alone; stronger when constant</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Stock openers and closers</TableCell><TableCell>"In today's fast-paced world", "Ultimately, it depends on your needs"</TableCell><TableCell>Moderate</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Generic claims, no specifics</TableCell><TableCell>"Studies show..." with no study named</TableCell><TableCell>Strong, especially in personal writing</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Uniform rhythm</TableCell><TableCell>Every sentence 15–25 words, every paragraph the same shape</TableCell><TableCell>Strong; it's what detectors measure</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Heavy em dash use</TableCell><TableCell>Several per paragraph</TableCell><TableCell>Weak alone</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>

            <h3>The "delve" effect is real</h3>
            <p>Vocabulary is the best-documented tell. Researchers analysing about 14 million PubMed abstracts from 2010 to 2024 found that certain style words, "delves" among them, became abruptly more frequent after ChatGPT's release. From that excess they estimated that at least 10% of 2024 abstracts were processed with an AI model, and as many as 30% in some subsets ({KOBAK}). That's strong evidence at the level of millions of documents. It still can't tell you whether one particular abstract used AI.</p>

            <Cta
              heading="See what a detector sees"
              text="Detectors don't count em dashes. They measure patterns across the whole passage. See which of your sentences read as predictable."
              label="Check text for AI free"
              position="mid"
            />

            <h2>What Detectors Actually Measure</h2>
            <p>AI detectors don't work from a checklist of words and punctuation. They estimate how predictable each word is to a language model and how much the sentences vary, then a trained classifier turns those measurements into a probability. Swapping em dashes for commas barely changes those numbers, so it won't meaningfully change a detector's score. Our explainer on <Link to="/blog/how-ai-detectors-work">how AI detectors work</Link> goes through the mechanics.</p>
            <p>That's also why the manual tells and the detector score often agree on unedited AI text and disagree on edited text. Both are picking up on the same underlying smoothness; neither is proof.</p>

            <h2>Advice for Writers</h2>
            <ul>
              <li><strong>Keep your em dashes</strong> if they're part of your voice. Deleting them won't change a detector score, and it may make your writing worse.</li>
              <li><strong>Watch for clusters in your own drafts,</strong> especially if you've used AI to edit: stacked "pivotal", "underscore", "it's not X, it's Y" and three-item lists.</li>
              <li><strong>Add what only you know:</strong> a name, a number, a moment, a clear opinion. That's what reads as human to people and to detectors.</li>
              <li><strong>Keep your drafts.</strong> If anyone questions your work, version history settles it; see <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link>.</li>
            </ul>

            <h2>Advice for Readers, Teachers and Editors</h2>
            <p>Use tells to decide where to look more closely, not to decide what happened. One em dash, or one "delve", is nothing. A cluster of tells in a piece with no specifics is worth a conversation, and the conversation, plus any drafts, will tell you far more than the punctuation. Our guide to <Link to="/blog/how-to-check-if-written-by-ai">checking whether something was written by AI</Link> sets out a fair workflow.</p>

            <h2>The Bottom Line</h2>
            <p>The em dash is a symptom people noticed, not a fingerprint. ChatGPT's fondness for it made it famous, but it's a weak signal on its own, and OpenAI has made it easy to switch off. Vocabulary and structural patterns are more telling, and only in clusters. Judge writing by its specifics and its process, not its punctuation.</p>

            <Cta
              heading="Check a draft in under a minute"
              text="Overall score plus sentence-level highlighting, so you can see what actually reads as AI-like."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{ROLLING}</li>
              <li>{ARS}</li>
              <li>{KOBAK}</li>
              <li>{WIKI}</li>
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

export default EmDashAIWritingTells;
