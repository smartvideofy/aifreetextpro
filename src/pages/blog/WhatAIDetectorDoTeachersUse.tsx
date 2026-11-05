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

const PATH = "/blog/what-ai-detector-do-teachers-use";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=what_ai_detector_teachers_use";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "What AI Detector Do Teachers Use? Turnitin, GPTZero and More (2026)";
const DESCRIPTION =
  "Which AI detectors teachers and universities actually use in 2026, what instructors see, which schools have switched detection off, and why version history now matters more.";

const relatedArticles = [
  { title: "Can Teachers Detect ChatGPT?", description: "Every method teachers use, beyond software.", href: "/blog/can-teachers-detect-chatgpt", category: "Academic" },
  { title: "Falsely Accused of Using AI?", description: "How to prove you wrote your work.", href: "/blog/falsely-accused-of-using-ai", category: "Academic" },
  { title: "Turnitin AI Detection Accuracy", description: "How Turnitin's AI score works and how often it's wrong.", href: "/blog/turnitin-ai-detection-accuracy", category: "Technical" },
  { title: "Grammarly AI Detector Review", description: "Accuracy, limits and Grammarly Authorship.", href: "/blog/grammarly-ai-detector-review", category: "Detector Review" },
];

const faqs = [
  { question: "What AI detector do most teachers use?", answer: "In universities it's usually Turnitin, because its AI writing indicator sits inside the plagiarism checker that is already built into Canvas, Blackboard, Moodle and Brightspace. In K-12 schools the picture is more mixed: GPTZero, Turnitin where the district licenses it, Chrome extensions that replay Google Docs, and the version history built into Google Docs." },
  { question: "Can I see my Turnitin AI score before my teacher does?", answer: "Usually not. Turnitin's AI writing report is shown to instructors and, depending on the licence, administrators, not to students. You can check your draft with another detector, but its score will not match Turnitin's because each tool uses a different model." },
  { question: "Do teachers use ZeroGPT or free online checkers?", answer: "Some do, informally, especially when their school doesn't license a detector. These free web checkers are not connected to the school's systems, so the result only exists if the teacher saves it. Their scores vary between tools, which is one reason many schools tell staff not to rely on any single checker." },
  { question: "Do teachers check Google Docs version history?", answer: "Increasingly, yes. When an assignment is created through Google Classroom with a copy for each student, the teacher can open the document's version history. Extensions such as Brisk's Inspect Writing and Draftback replay the document so a teacher can see whether text was typed over time or pasted in at once." },
  { question: "Have any universities stopped using AI detectors?", answer: "Yes. Vanderbilt disabled Turnitin's AI detector in August 2023, the University of Waterloo discontinued it from September 2025, and Curtin University in Australia switched it off from 1 January 2026. In each case the plagiarism matching stayed on; only the AI score was turned off." },
  { question: "Can a teacher fail me based only on an AI detector score?", answer: "It depends on your institution's academic integrity procedure, but the vendors themselves advise against it. Turnitin says its AI score should not be used as the sole basis for adverse action against a student. Most procedures give you a chance to respond, and process evidence such as version history usually carries more weight than a score." },
  { question: "What is Turnitin Clarity?", answer: "Turnitin Clarity is a paid add-on to Turnitin Feedback Studio, generally available since July 2025. Students write the assignment inside it, and instructors can review the writing process, including pasted text, typing patterns, time spent and draft history, along with a video-style playback. Several universities are piloting it in 2026." },
  { question: "Does Canvas detect AI on its own?", answer: "No. Canvas itself does not detect AI writing. AI scores appear in Canvas only when the school has connected a detector, most often Turnitin, or a process tool such as Grammarly Authorship." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const CDT = src("https://cdt.org/press/new-research-educators-still-struggling-with-generative-ai-detection-discipline-and-distrust-despite-increased-school-guidance/", "Center for Democracy & Technology: teacher survey on AI detection and discipline (March 2024)");
const K12DIVE = src("https://www.k12dive.com/news/student-teacher-ai-use-schools-cdt/737335/", "K-12 Dive: CDT survey of teachers, students and parents (January 2025)");
const TURNITIN_AI = src("https://www.turnitin.com/products/features/ai-writing-detection", "Turnitin: AI writing detection");
const NEWCASTLE = src("https://www.newcastle.edu.au/current-staff/teaching-and-research/teaching-resources/ldti/ldti-teaching-resources/resources/using-turnitin", "University of Newcastle: using Turnitin (AI indicator requirements)");
const VANDERBILT = src("https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/", "Vanderbilt University: why we're disabling Turnitin's AI detector (August 2023)");
const WATERLOO = src("https://uwaterloo.ca/academic-integrity/news/discontinuing-use-ai-detection-functionality-turnitin", "University of Waterloo: discontinuing Turnitin's AI detection functionality (2025)");
const CURTIN = src("https://www.curtin.edu.au/news/oasis-news/update-on-turnitin-ai-detection-tool/", "Curtin University: update on the Turnitin AI detection tool");
const CLARITY = src("https://www.turnitin.co.uk/press/turnitin-launches-turnitin-clarity-bringing-transparency-and-integrity-insights-to-education", "Turnitin: Turnitin Clarity launch announcement");
const UCLA = src("https://dts.ucla.edu/news/turnitin-clarity-enhancement-writing-process-tools-exploration", "UCLA: exploring Turnitin Clarity's writing-process tools");
const BRISK = src("https://help.briskteaching.com/hc/en-us/articles/39310227756436-How-To-Inspect-Writing", "Brisk help center: how to Inspect Writing");
const AUTHORSHIP = src("https://www.grammarly.com/authorship", "Grammarly Authorship");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`what_ai_detector_teachers_use_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const WhatAIDetectorDoTeachersUse = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="what ai detector do teachers use, what ai checker do teachers use, what ai detector do schools use, what ai detector do colleges use, do teachers use turnitin for ai, ai detector teachers use" />
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

      <AuthorSchema
        articleUrl={URL}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished="2026-11-05"
        dateModified="2026-11-05"
        image={OG_IMAGE}
      />
      <SpeakableSchema pageUrl={URL} pageName="What AI Detector Do Teachers Use?" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "What AI Detector Do Teachers Use?" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">What AI Detector Do Teachers Use? Turnitin, GPTZero and More (2026)</h1>
              <QuickAnswer
                question="What AI detector do teachers use?"
                answer="Most universities use Turnitin, whose AI writing indicator is built into the plagiarism checker already connected to Canvas, Blackboard, Moodle and Brightspace. K-12 teachers more often use GPTZero, Google Docs version history, or Chrome extensions such as Brisk that replay how a document was typed. A growing number of schools, including Vanderbilt, Waterloo and Curtin, have switched AI scores off altogether and look at the writing process instead. Students usually can't see the Turnitin AI score themselves."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-11-05">November 5, 2026</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Academic</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <KeyTakeaways points={[
              "Universities mostly use Turnitin's AI writing indicator, because it comes with the plagiarism checker they already license.",
              "K-12 teachers use a wider mix: GPTZero, Turnitin where districts pay for it, Google Docs version history and writing-replay extensions.",
              "Students usually can't see their Turnitin AI score, and no other detector will reproduce it.",
              "Several universities have turned the AI score off and kept plagiarism matching, citing false positives.",
              "The trend for 2026 is process evidence: version history, Grammarly Authorship and Turnitin Clarity record how work was written.",
            ]} />

            <h2>How Common Is AI Detection in Schools?</h2>
            <p>Very common, though estimates depend on how the question is asked. In a nationally representative survey of US public school teachers for the 2023–24 school year, the Center for Democracy &amp; Technology found that 68% of teachers reported using an AI content detection tool regularly, and 64% said students at their school had gotten in trouble for using, or being accused of using, generative AI ({CDT}). A later CDT report put regular use of detection software at 39% with a differently worded question, and found that one in five students said they or someone they knew had been accused of AI cheating without proof ({K12DIVE}).</p>
            <p>Either way, a large share of teachers run student work through something. What that something is depends mostly on whether you're at a university or a school, and on what your institution already pays for.</p>

            <h2>The Tools Teachers Actually Use</h2>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tool</TableHead>
                    <TableHead>Where you'll meet it</TableHead>
                    <TableHead>What the teacher sees</TableHead>
                    <TableHead>Can students check themselves?</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Turnitin AI writing indicator</TableCell><TableCell>Most universities, some districts; runs inside the LMS on submission</TableCell><TableCell>A percentage of qualifying text likely AI-generated, with highlighted passages</TableCell><TableCell>Usually no</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">GPTZero</TableCell><TableCell>Popular with individual K-12 and college teachers; free tier</TableCell><TableCell>An overall probability plus sentence highlighting</TableCell><TableCell>Yes</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Copyleaks, Originality.ai and similar</TableCell><TableCell>Some schools via LMS integrations; publishers and agencies</TableCell><TableCell>An AI probability score, often with highlighting</TableCell><TableCell>Yes, usually paid</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Free web checkers (ZeroGPT and others)</TableCell><TableCell>Informal checks when the school licenses nothing</TableCell><TableCell>A percentage, which varies widely between tools</TableCell><TableCell>Yes</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Google Docs version history</TableCell><TableCell>Any Google Classroom assignment</TableCell><TableCell>Every saved version, with time stamps</TableCell><TableCell>Yes, on your own docs</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Brisk Inspect Writing, Draftback</TableCell><TableCell>Chrome extensions used by K-12 teachers</TableCell><TableCell>A replay of the document being typed, with large pastes visible</TableCell><TableCell>Draftback, yes</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Grammarly Authorship</TableCell><TableCell>Instructors who ask for an authorship report; Canvas</TableCell><TableCell>Text labelled typed, pasted or AI-assisted, plus a replay</TableCell><TableCell>Yes, you create the report</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Turnitin Clarity</TableCell><TableCell>2026 pilots at some universities</TableCell><TableCell>The full writing process: pasting, typing patterns, time, drafts</TableCell><TableCell>Yes, you write inside it</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>

            <h2>Universities: Mostly Turnitin</h2>
            <p>Turnitin dominates higher education for a simple reason: universities already licensed its plagiarism checker, and the AI writing indicator was added to the same report. When you submit through Canvas, Blackboard, Moodle or Brightspace and the assignment uses Turnitin, the AI check runs automatically ({TURNITIN_AI}).</p>
            <p>A few details are worth knowing:</p>
            <ul>
              <li><strong>Instructors see it; students generally don't.</strong> University guides consistently say the AI writing report is visible to instructors and, depending on the licence, administrators, not to students.</li>
              <li><strong>It needs enough text.</strong> The indicator only works on prose submissions of roughly 300 words or more, and it ignores bullet lists, tables and other non-prose text ({NEWCASTLE}).</li>
              <li><strong>Low scores are hidden.</strong> Scores between 1% and 19% are shown as an asterisk rather than a number, because Turnitin considers that range less reliable.</li>
              <li><strong>It isn't meant to decide a case alone.</strong> Turnitin's own guidance says the score shouldn't be the sole basis for action against a student.</li>
            </ul>
            <p>For a deeper look at how the score is calculated and how often it's wrong, see our guides to <Link to="/blog/turnitin-ai-detection-accuracy">Turnitin's AI detection accuracy</Link> and <Link to="/blog/turnitin-similarity-vs-ai-score">the similarity score versus the AI score</Link>.</p>

            <h2>K-12 Schools: A Wider Mix</h2>
            <p>Schools and districts are less likely to have a Turnitin licence, so individual teachers fill the gap. GPTZero is the most visible name, helped by a free tier and tools aimed at educators. Free web checkers get used too, often without the school having a policy on them.</p>
            <p>The bigger shift in schools is toward looking at how the document was written. Most K-12 writing happens in Google Docs, and when a teacher creates an assignment in Google Classroom with a copy for each student, they can open the document's version history. Extensions make that faster: Brisk's Inspect Writing replays a student's Google Doc like a video, showing where text was typed, deleted, or pasted in a single block ({BRISK}). Brisk presents it as a way to start a conversation, not as proof of misconduct, and that's the right way to read it: a big paste can be a student moving their own notes in from another file.</p>

            <Cta
              heading="Check your draft before you submit"
              text="You can't see your Turnitin score, but you can see which of your sentences read as predictable to a detector and revise them in your own words."
              label="Check my essay free"
              position="mid"
            />

            <h2>The Schools That Switched AI Detection Off</h2>
            <p>Not every institution runs an AI score. A growing list of universities has turned Turnitin's AI indicator off while keeping its plagiarism matching:</p>
            <ul>
              <li><strong>Vanderbilt University</strong> disabled it in August 2023 after months of testing, pointing out that even a 1% false-positive rate would mean hundreds of wrongly flagged papers at its scale, and raising privacy concerns ({VANDERBILT}).</li>
              <li><strong>The University of Waterloo</strong> discontinued the AI detection functionality from September 2025 ({WATERLOO}).</li>
              <li><strong>Curtin University</strong> in Australia disabled it from 1 January 2026 and said it would no longer use AI detection tools when assessing student work ({CURTIN}).</li>
            </ul>
            <p>These schools didn't stop caring about AI misuse. They moved the weight onto assessment design, conversations with students and evidence of the writing process. If you're at one of them, the question isn't what score you'll get; it's whether you can show how you did the work.</p>

            <h2>2026: From Detection to Process Evidence</h2>
            <p>The newest tools don't try to guess from finished text at all. They record the writing as it happens.</p>
            <ul>
              <li><strong>Turnitin Clarity</strong> is a writing space inside Turnitin Feedback Studio, generally available since July 2025 as a paid add-on. Students draft the assignment there, and instructors can review pasted text, typing patterns, time spent and draft history, including a playback ({CLARITY}). UCLA is exploring it for the winter and spring 2026 terms ({UCLA}).</li>
              <li><strong>Grammarly Authorship</strong> tracks whether text was typed, pasted or produced with Grammarly's AI, in Google Docs and Word, and lets students share a report with a replay. It's student-controlled: nothing is sent unless you share it ({AUTHORSHIP}). Our <Link to="/blog/grammarly-ai-detector-review">Grammarly AI detector review</Link> compares it with Grammarly's detector.</li>
              <li><strong>Version history</strong> in Google Docs and Microsoft Word does a simpler version of the same job for free.</li>
            </ul>
            <p>For students, this is mostly good news. A process record is far harder to argue with than a percentage, in both directions. If you write your own work, keeping it in a tool that saves versions is the best protection you have.</p>

            <h2>Beyond Software: What Teachers Also Look For</h2>
            <p>Experienced teachers rarely rely on a detector alone. They compare a submission with your earlier writing and in-class work, notice references that don't exist or quotes that don't appear in the source, and ask you to talk through your argument. Many have moved key assessments into class time. Our article on <Link to="/blog/can-teachers-detect-chatgpt">whether teachers can detect ChatGPT</Link> covers these methods in detail.</p>

            <h2>What This Means for Students</h2>
            <ol>
              <li><strong>Find out what your course uses.</strong> The syllabus or LMS assignment page usually says whether Turnitin is enabled, and what AI use is allowed.</li>
              <li><strong>Write in a tool that keeps history.</strong> Google Docs or Word with AutoSave on OneDrive. Turn on Grammarly Authorship if your instructor accepts it.</li>
              <li><strong>Follow the AI rules and disclose permitted use.</strong> If AI help is allowed, say how you used it; see <Link to="/blog/how-to-cite-ai-generated-content">how to cite AI-generated content</Link>.</li>
              <li><strong>Self-check, but read it correctly.</strong> A detector can show which of your sentences read as formulaic. It can't predict your Turnitin number, and a low score elsewhere is not a guarantee.</li>
              <li><strong>If you're flagged, stay calm and gather evidence.</strong> Our guide to <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link> walks through it.</li>
            </ol>

            <p>Teachers looking for a detector of their own can read about our <Link to="/ai-detector-for-teachers">AI detector for teachers</Link>, with the same caution that applies to every tool on this page: a score opens a conversation; it doesn't settle one.</p>

            <Cta
              heading="See what a detector sees in your writing"
              text="Sentence-level highlighting shows the passages that read as most predictable, so you can revise them before anyone else reads them."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{CDT}</li>
              <li>{K12DIVE}</li>
              <li>{TURNITIN_AI}</li>
              <li>{NEWCASTLE}</li>
              <li>{VANDERBILT}</li>
              <li>{WATERLOO}</li>
              <li>{CURTIN}</li>
              <li>{CLARITY}</li>
              <li>{UCLA}</li>
              <li>{BRISK}</li>
              <li>{AUTHORSHIP}</li>
            </ul>
            <p className="text-sm text-muted-foreground">Institutional policies were checked against each university's own announcement on November 5, 2026. Policies change between terms, so your course syllabus is the version that applies to you.</p>

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

export default WhatAIDetectorDoTeachersUse;
