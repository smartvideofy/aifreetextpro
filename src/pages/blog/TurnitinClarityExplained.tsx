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

const PATH = "/blog/turnitin-clarity-explained";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=turnitin_clarity";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Turnitin Clarity Explained: What Students and Teachers See (2026)";
const DESCRIPTION =
  "What Turnitin Clarity is, how its writing space and AI assistant work, what instructors can see about your writing process, how it flags pasted AI text, and how to use it without problems.";

const relatedArticles = [
  { title: "What AI Detector Do Teachers Use?", description: "The tools schools run and what instructors see.", href: "/blog/what-ai-detector-do-teachers-use", category: "Academic" },
  { title: "Colleges That Turned Off AI Detection", description: "Universities that switched off the AI score.", href: "/blog/colleges-that-turned-off-ai-detection", category: "Academic" },
  { title: "Grammarly AI Detector Review", description: "Including Grammarly Authorship.", href: "/blog/grammarly-ai-detector-review", category: "Detector Review" },
  { title: "Falsely Accused of Using AI?", description: "How to prove you wrote your work.", href: "/blog/falsely-accused-of-using-ai", category: "Academic" },
];

const faqs = [
  { question: "What is Turnitin Clarity?", answer: "Turnitin Clarity is a writing space inside Turnitin Feedback Studio where students draft an assignment, with an optional AI writing assistant that instructors can switch on. Instructors can review the writing process, including pasted text, typing patterns, time spent and draft history. It's a paid add-on, generally available since July 2025." },
  { question: "Can my teacher see everything I type in Turnitin Clarity?", answer: "Instructors can review your writing process in Clarity, including pasted text, typing patterns, how long the work took, draft history and a video-style playback. They see what happens inside Clarity, not what you do in other apps." },
  { question: "Does Turnitin Clarity detect AI?", answer: "Yes, for pasted text. When a pasted block of over 300 words is predicted to be AI-written or AI-altered, the instructor's Writing Report shows a card breaking it down into likely AI-generated, AI-bypassed and AI-paraphrased text. This requires the institution to also have Turnitin's AI writing detection, and paraphrase and bypasser detection covers English only." },
  { question: "What can the Clarity AI assistant do?", answer: "It depends on what your instructor enables. Turnitin describes the tools as spelling and grammar checks, an AI chat and citation assistance, with students able to choose US or UK English. The assistant supports English only." },
  { question: "Can I write my essay somewhere else and paste it into Clarity?", answer: "You can, but large pastes are exactly what Clarity highlights to instructors, and your process record will show the text arriving in one block. If your instructor wants you to write in Clarity, do so. If you must draft elsewhere, keep that document's version history and tell your instructor." },
  { question: "Is Turnitin Clarity the same as Turnitin's AI detector?", answer: "No. The AI writing detector scores a finished submission. Clarity is a writing environment that records how the submission was produced, and it can use AI detection on text pasted into it." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const JOURNAL = src("https://thejournal.com/articles/2025/03/04/new-turnitin-product-offers-ai-powered-writing-tools-with-instructor-guardrails.aspx", "THE Journal: new Turnitin product offers AI writing tools with instructor guardrails (March 2025)");
const GA = src("https://itwire.com/it-people-news/education/turnitin-delivers-turnitin-clarity-to-bring-transparency-and-responsible-ai-to-the-writing-process,-supporting-academic-integrity-in-education.html", "iTWire: Turnitin Clarity general availability (July 2025)");
const UPDATE = src("https://turnitin.forumbee.com/t/83ypy8l/turnitin-clarity-update-ai-detection-for-pasted-text-and-uk-english-support", "Turnitin community: Clarity update, AI detection for pasted text and UK English");
const UCLA = src("https://dts.ucla.edu/news/turnitin-clarity-enhancement-writing-process-tools-exploration", "UCLA: exploring Turnitin Clarity's writing-process tools");
const SONOMA = src("https://ctet.sonoma.edu/node/3186", "Sonoma State CTET: Turnitin Clarity pilot");
const PT = src("https://www.plagiarismtoday.com/2025/03/06/turnitin-announces-clarity-aim-to-make-student-writing-more-transparent/", "Plagiarism Today: Turnitin announces Clarity (March 2025)");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`turnitin_clarity_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const TurnitinClarityExplained = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="turnitin clarity, what is turnitin clarity, turnitin clarity students, turnitin clarity ai detection, turnitin writing process, turnitin clarity pasted text" />
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
      <SpeakableSchema pageUrl={URL} pageName="Turnitin Clarity Explained" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Turnitin Clarity Explained" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Turnitin Clarity Explained: What Students and Teachers See (2026)</h1>
              <QuickAnswer
                question="What is Turnitin Clarity?"
                answer="Turnitin Clarity is a paid add-on to Turnitin Feedback Studio, generally available since July 2025. Students write the assignment inside it, optionally with an AI assistant the instructor controls. Instructors can then review how the work was written: pasted text, typing patterns, time spent, draft history and a video-style playback. Large pasted blocks are checked for AI and broken down into likely AI-generated, AI-bypassed and AI-paraphrased text. Universities including UCLA are piloting it in 2026."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-11-05">November 5, 2026</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Academic</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <KeyTakeaways points={[
              "Clarity is a writing space inside Turnitin Feedback Studio, sold as a paid add-on and generally available since July 2025.",
              "Instructors can see the writing process: pasted text, typing patterns, time spent, drafts and a playback.",
              "Pasted blocks over 300 words get an AI check, split into AI-generated, AI-bypassed and AI-paraphrased.",
              "The optional AI assistant is controlled by the instructor and works in English only.",
              "For honest students, Clarity is good news: it records your process, which is stronger evidence than any score.",
            ]} />

            <h2>What Turnitin Clarity Is</h2>
            <p>For years Turnitin's job was to check a finished document: first for plagiarism, then, from 2023, for AI writing. Clarity is a different idea. Announced in March 2025 as a paid add-on to Turnitin Feedback Studio ({JOURNAL}), it gives students a place to write the assignment itself, and gives instructors a view of how it was written. It became generally available on July 15, 2025 ({GA}).</p>
            <p>Inside Clarity, students can open the assignment instructions and rubric and write over several sessions before the deadline. Instructors can switch on an AI writing assistant with limits they set. Coverage at launch focused on that AI assistant, though Plagiarism Today argued the more significant part was the writing environment itself ({PT}).</p>

            <h2>What Instructors Can See</h2>
            <ul>
              <li><strong>Pasted text,</strong> including how much was pasted and when.</li>
              <li><strong>Typing patterns</strong> and how long the work took to build.</li>
              <li><strong>Draft history</strong> across writing sessions.</li>
              <li><strong>A video-style playback</strong> of the writing process.</li>
              <li><strong>AI analysis of large pastes:</strong> a card in the Writing Report for pasted blocks over 300 words that the model predicts were written or altered by AI, showing an overall percentage and a breakdown into likely AI-generated, AI-bypassed and AI-paraphrased text, with the affected text highlighted ({UPDATE}).</li>
            </ul>
            <p>The AI analysis needs the institution to have both Clarity and Turnitin's AI writing detection. Detection covers English, Spanish and Japanese; the paraphrase and bypasser categories cover English only ({UPDATE}).</p>

            <h2>The AI Assistant</h2>
            <p>Instructors decide whether students get AI help and what kind. Turnitin describes the tools as spelling and grammar checking, an AI chat and citation assistance, with a choice of US or UK English ({UPDATE}). The assistant supports English only. Because the instructor configures it, using it within those limits is use your instructor has allowed, which is a clearer position than using an outside chatbot and wondering whether it counts.</p>

            <Cta
              heading="Check drafts you write elsewhere"
              text="If you draft outside Clarity, see which of your sentences read as AI-like before you bring them in, and keep your version history."
              label="Check my draft free"
              position="mid"
            />

            <h2>Who's Using It</h2>
            <p>Clarity is still early. Universities are mostly piloting it: UCLA is exploring its writing-process tools for the winter and spring 2026 terms ({UCLA}), and Sonoma State is piloting it in spring 2026 ({SONOMA}). Because it's a paid add-on, availability depends on your institution's licence, and some universities that have turned off Turnitin's AI score are looking at process tools like this instead. See our list of <Link to="/blog/colleges-that-turned-off-ai-detection">colleges that turned off AI detection</Link>.</p>

            <h2>Clarity vs Other Process Tools</h2>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tool</TableHead>
                    <TableHead>Where you write</TableHead>
                    <TableHead>Who sees the record</TableHead>
                    <TableHead>Cost to student</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Turnitin Clarity</TableCell><TableCell>Inside Turnitin, via your LMS</TableCell><TableCell>Your instructor</TableCell><TableCell>None; the institution pays</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Grammarly Authorship</TableCell><TableCell>Google Docs, Word, Grammarly editor</TableCell><TableCell>Only people you share the report with</TableCell><TableCell>Free and Pro</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Google Docs version history</TableCell><TableCell>Google Docs</TableCell><TableCell>Anyone with edit access</TableCell><TableCell>Free</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Word version history</TableCell><TableCell>Word with OneDrive or SharePoint</TableCell><TableCell>Anyone with edit access</TableCell><TableCell>Included with Microsoft 365</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <p>Our <Link to="/blog/grammarly-ai-detector-review">Grammarly review</Link> covers Authorship, and <Link to="/blog/what-ai-detector-do-teachers-use">what AI detector teachers use</Link> covers the wider picture.</p>

            <h2>How to Use Clarity Without Problems</h2>
            <ol>
              <li><strong>Write in it if your instructor asks you to.</strong> The record only helps you if the writing happens there.</li>
              <li><strong>Avoid pasting large finished blocks.</strong> Big pastes are what the report highlights. Moving your own notes in is fine; just be ready to explain them.</li>
              <li><strong>If you draft elsewhere, keep that history.</strong> Google Docs or Word version history shows the work you did before pasting.</li>
              <li><strong>Use the AI assistant only as configured,</strong> and follow any disclosure rules in the assignment.</li>
              <li><strong>Ask about privacy if you're unsure.</strong> Your institution should be able to tell you what's recorded and who can see it.</li>
            </ol>
            <p>If a Clarity report or AI flag is ever questioned, the steps in our guide to <Link to="/blog/falsely-accused-of-using-ai">being falsely accused of using AI</Link> apply.</p>

            <h2>The Bottom Line</h2>
            <p>Turnitin Clarity moves AI checking from guessing about a finished essay to recording how it was written. That's more intrusive than a detector, but for students who do their own work it's also fairer: the process speaks for itself. If your course uses it, write inside it, keep large pastes to a minimum, and use the AI assistant only within the limits your instructor sets.</p>

            <Cta
              heading="Self-check any draft for free"
              text="Overall score and sentence-level highlighting, so nothing in your writing takes you by surprise."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{JOURNAL}</li>
              <li>{GA}</li>
              <li>{UPDATE}</li>
              <li>{PT}</li>
              <li>{UCLA}</li>
              <li>{SONOMA}</li>
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

export default TurnitinClarityExplained;
