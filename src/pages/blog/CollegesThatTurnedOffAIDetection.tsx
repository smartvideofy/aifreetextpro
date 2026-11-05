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

const PATH = "/blog/colleges-that-turned-off-ai-detection";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=colleges_turned_off_ai_detection";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Colleges That Turned Off AI Detection: 2026 List";
const DESCRIPTION =
  "Universities that have switched off Turnitin's AI detector, with dates, reasons and links to each official announcement, plus what they use instead and what it means for students.";

const relatedArticles = [
  { title: "What AI Detector Do Teachers Use?", description: "The tools schools run and what instructors see.", href: "/blog/what-ai-detector-do-teachers-use", category: "Academic" },
  { title: "Turnitin Clarity Explained", description: "Turnitin's writing-process tool, in plain terms.", href: "/blog/turnitin-clarity-explained", category: "Academic" },
  { title: "Falsely Accused of Using AI?", description: "How to prove you wrote your work.", href: "/blog/falsely-accused-of-using-ai", category: "Academic" },
  { title: "Turnitin AI Detection Accuracy", description: "How the AI score works and how often it's wrong.", href: "/blog/turnitin-ai-detection-accuracy", category: "Technical" },
];

type Row = { school: string; where: string; when: string; why: string; url: string };
const rows: Row[] = [
  { school: "UCLA", where: "US", when: "April 2023", why: "Opted out of the preview over unanswered questions about the feature", url: "https://dts.ucla.edu/news/turnitins-ai-writing-detection-preview-feature-opted-out" },
  { school: "University of Pittsburgh", where: "US", when: "June 2023", why: "Not reliable enough to use without a substantial risk of false accusations", url: "https://teaching.pitt.edu/resources/using-turnitin-with-canvas/" },
  { school: "Vanderbilt University", where: "US", when: "August 2023", why: "False positives at scale, transparency and privacy concerns", url: "https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/" },
  { school: "Montclair State University", where: "US", when: "November 2023", why: "Concerns about reliability and bias", url: "https://inside.montclair.edu/faculty/resources-for-teaching/practical-responses-ai/automatic-detection-ai-writing" },
  { school: "Southern Methodist University", where: "US", when: "December 2023", why: "Limited success and a negative track record; licence not renewed", url: "https://blog.smu.edu/itconnect/2023/12/13/discontinue-turnitin-ai-detection-tool" },
  { school: "Rochester Institute of Technology", where: "US", when: "May 2024", why: "Results can't be verified; errors and inconsistent classifications", url: "https://www.rit.edu/emailcommunications/unreliability-of-ai-detector-in-turnitin-2" },
  { school: "San Francisco State University", where: "US", when: "June 2024", why: "Feature became a paid add-on and was not purchased", url: "https://at.sfsu.edu/news/discontinuation-turnitin-ai-detection-tool-availability" },
  { school: "University of Waterloo", where: "Canada", when: "September 2025", why: "Discontinued Turnitin's AI detection functionality", url: "https://uwaterloo.ca/academic-integrity/news/discontinuing-use-ai-detection-functionality-turnitin" },
  { school: "University of Cape Town", where: "South Africa", when: "October 2025", why: "Unreliable, with false positives and negatives; part of a new AI in education framework", url: "https://www.news.uct.ac.za/article/-2025-07-16-uct-introduces-ai-in-education-framework" },
  { school: "Curtin University", where: "Australia", when: "January 2026", why: "No longer uses AI detection tools when assessing student work", url: "https://www.curtin.edu.au/news/oasis-news/update-on-turnitin-ai-detection-tool/" },
  { school: "Washington State University", where: "US", when: "February 2026", why: "Provost's memo cancelling Turnitin's AI detection software", url: "https://provost.wsu.edu/documents/2026/02/cancellation-of-turnitin-ai-detection-software_memo-to-instructors_provost-office_spring-2026.pdf" },
  { school: "University of Texas at Austin", where: "US", when: "Policy page", why: "Doesn't endorse AI detection software and has no central contract for it", url: "https://provost.utexas.edu/the-office/academic-affairs/office-of-academic-technology/ai-detection-software-guidance/" },
];

const faqs = [
  { question: "Which universities have turned off Turnitin's AI detection?", answer: "Among those that have announced it publicly are UCLA, the University of Pittsburgh, Vanderbilt, Montclair State, Southern Methodist University, RIT, San Francisco State, the University of Waterloo, the University of Cape Town, Curtin University and Washington State University. Inside Higher Ed also reported Northwestern, Georgetown and NYU among at least a dozen universities that have disabled it." },
  { question: "How many colleges have turned off AI detection?", answer: "Counts vary because many schools change a setting without announcing it. One public tracker listed 37 US institutions as of November 2026, while Inside Higher Ed reported in August 2026 that at least a dozen universities had disabled Turnitin's AI detection. Our list includes only schools we could verify on their own websites." },
  { question: "If my university turned off AI detection, can I use AI freely?", answer: "No. Turning off a detector doesn't change the academic integrity policy. Your course rules on AI use still apply, and instructors may rely on other evidence such as drafts, version history, in-class writing and conversations about your work." },
  { question: "Does turning off AI detection mean Turnitin is gone?", answer: "Usually not. In most announcements only the AI writing score was switched off; Turnitin's similarity (plagiarism) matching stayed on." },
  { question: "Why are universities turning off AI detectors?", answer: "The reasons given most often are false positives, results instructors can't verify, bias against some groups of writers, privacy concerns, and in some cases cost. Several universities also say the score encouraged accusations rather than teaching." },
  { question: "Have any schools turned AI detection back on?", answer: "Yes. Trackers report that a few institutions, such as DePaul, Wright State and Arcadia, switched it back on after turning it off. Policies change, so check your own institution's current guidance." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const IHE = src("https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/08/05/ai-detectors-are-out-new-approaches-are", "Inside Higher Ed: AI detectors are out, new approaches are in (August 2026)");
const TRACKER = src("https://programs.com/resources/colleges-turned-off-ai-detection/", "Programs.com: colleges that turned off AI detection (tracker)");
const UCT_NEWS = src("https://www.news.uct.ac.za/article/-2025-07-16-uct-introduces-ai-in-education-framework", "University of Cape Town: AI in education framework (July 2025)");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`colleges_turned_off_ai_detection_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const CollegesThatTurnedOffAIDetection = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="colleges that turned off ai detection, universities disabled turnitin ai detection, schools that don't use ai detectors, universities ban ai detectors, turnitin ai detection disabled" />
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
      <SpeakableSchema pageUrl={URL} pageName="Colleges That Turned Off AI Detection" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Colleges That Turned Off AI Detection" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Colleges That Turned Off AI Detection: 2026 List</h1>
              <QuickAnswer
                question="Which colleges have turned off AI detection?"
                answer="Universities that have publicly switched off Turnitin's AI detector include UCLA, Pittsburgh, Vanderbilt, Montclair State, SMU, RIT, San Francisco State, Waterloo, the University of Cape Town, Curtin and Washington State, with Northwestern, Georgetown and NYU also reported. Most kept plagiarism matching on and turned off only the AI score, citing false positives, unverifiable results, bias and privacy. Turning off a detector doesn't change a school's AI policy: course rules still apply."
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
              "At least a dozen universities have switched off Turnitin's AI detection, according to Inside Higher Ed in August 2026.",
              "Below are 12 we verified on each institution's own website, with the date and the reason they gave.",
              "In almost every case, plagiarism matching stayed on. Only the AI score was turned off.",
              "The most common reasons: false positives, results instructors can't verify, bias, privacy and cost.",
              "No detector doesn't mean no rules. Course AI policies still apply, and schools lean on process evidence instead.",
            ]} />

            <h2>The List</h2>
            <p>We've included only institutions whose decision we could confirm on their own website, and linked each one so you can check the current wording. Dates are when the change took effect or was announced.</p>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Institution</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>When</TableHead>
                    <TableHead>Reason given</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.school}>
                      <TableCell className="font-medium"><a href={r.url} target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">{r.school}</a></TableCell>
                      <TableCell>{r.where}</TableCell>
                      <TableCell>{r.when}</TableCell>
                      <TableCell>{r.why}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground">Checked against each institution's own page on November 5, 2026. Each institution's name links to its announcement or policy page.</p>
            <p>Inside Higher Ed also reported Northwestern, Georgetown and New York University among at least a dozen universities that have disabled Turnitin's AI detection, and named Yale, Vanderbilt, Johns Hopkins and Indiana as having policies that ban or discourage using detectors as the only evidence of cheating ({IHE}). Public trackers list more: one counted 37 US institutions as of November 2026 ({TRACKER}). Counts differ because many schools change a setting without announcing it.</p>

            <h2>Why They Turned It Off</h2>
            <ul>
              <li><strong>False positives at scale.</strong> Vanderbilt pointed out that even a 1% false-positive rate would mean hundreds of wrongly flagged papers a year at its size.</li>
              <li><strong>Results can't be checked.</strong> RIT said instructors have no way to verify the score, and that errors and inconsistent classifications made it unreliable.</li>
              <li><strong>Bias.</strong> Montclair State cited reliability and bias; research has shown detectors flag non-native English writing more often.</li>
              <li><strong>Privacy and transparency.</strong> Vanderbilt raised concerns about sending student work to a detector whose workings and data use weren't transparent.</li>
              <li><strong>Cost.</strong> San Francisco State dropped it when the feature became a paid add-on.</li>
              <li><strong>Teaching, not policing.</strong> UCT made the change as part of a wider AI in education framework focused on AI literacy and assessment design ({UCT_NEWS}).</li>
            </ul>

            <h2>What They Use Instead</h2>
            <p>None of these schools has stopped caring about AI misuse. They've shifted where the evidence comes from:</p>
            <ul>
              <li><strong>Assessment redesign:</strong> assignments that focus on process and reasoning, with drafts and reflections built in.</li>
              <li><strong>In-person work:</strong> supervised writing, blue-book exams and oral examinations.</li>
              <li><strong>Disclosure:</strong> asking students to explain how they used AI, where it's allowed.</li>
              <li><strong>Process records:</strong> version history, Grammarly Authorship reports, and writing-process tools such as <Link to="/blog/turnitin-clarity-explained">Turnitin Clarity</Link>.</li>
            </ul>

            <Cta
              heading="Know how your writing reads"
              text="Even without a detector at your school, instructors notice formulaic writing. See which of your sentences read as predictable, and revise them."
              label="Check my writing free"
              position="mid"
            />

            <h2>What This Means for Students</h2>
            <p><strong>The rules still apply.</strong> A switched-off detector doesn't mean AI use is allowed. Your course syllabus and institution's integrity policy decide that.</p>
            <p><strong>Instructors may still use other tools.</strong> Some universities, such as UT Austin, tell staff not to use third-party detectors without an institutional contract; others leave it to instructors. If you're flagged by a tool your school doesn't license, it's reasonable to ask which policy allows it.</p>
            <p><strong>Your process is your protection.</strong> Write in a tool that keeps version history and keep your notes and sources. If you're ever questioned, that record is what settles it; see <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link>.</p>
            <p>If your school does still use detection, our guide to <Link to="/blog/what-ai-detector-do-teachers-use">which AI detectors teachers use</Link> explains what instructors see.</p>

            <h2>The Bottom Line</h2>
            <p>A growing list of universities has decided that an AI score causes more problems than it solves, and has moved toward assessment design and process evidence instead. The list will keep changing, so check your own institution's current guidance, and keep a record of how you write whatever it says.</p>

            <h2>Sources</h2>
            <ul>
              {rows.map((r) => (
                <li key={r.url}><a href={r.url} target="_blank" rel="noopener noreferrer nofollow">{r.school}: official announcement or policy page</a></li>
              ))}
              <li>{IHE}</li>
              <li>{TRACKER}</li>
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

export default CollegesThatTurnedOffAIDetection;
