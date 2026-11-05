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

const PATH = "/blog/ai-writing-upwork-fiverr-freelancers";
const URL = `https://aifreetextpro.com${PATH}`;
const APP = "https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=upwork_fiverr";
const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

const TITLE = "Using AI on Upwork and Fiverr: What the Rules Actually Say (2026)";
const DESCRIPTION =
  "What Upwork's and Fiverr's own policies say about freelancers using AI, when you have to disclose it, what clients check for, and a transparent AI-assisted workflow that protects your reputation.";

const relatedArticles = [
  { title: "AI Detector for Employers", description: "How hiring teams screen applications for AI.", href: "/blog/ai-detector-employers", category: "Professional" },
  { title: "Falsely Accused of Using AI?", description: "How to prove you wrote your work.", href: "/blog/falsely-accused-of-using-ai", category: "Academic" },
  { title: "How to Edit AI Drafts Like a Human Editor", description: "The editing pass that makes AI drafts usable.", href: "/blog/editing-ai-drafts-human-editor", category: "Writing Craft" },
  { title: "Does Paraphrasing Avoid AI Detection?", description: "What research on paraphrasing found.", href: "/blog/does-paraphrasing-avoid-ai-detection", category: "Educational" },
];

const faqs = [
  { question: "Does Upwork allow freelancers to use AI?", answer: "Yes. Upwork's terms let freelancers use any tools, including generative AI, unless the client restricts them. Its Terms of Use prohibit using generative AI to substantially bolster proposals or work product when the client has restricted that use or when it violates someone else's rights. Whether AI fits a project is left to the client and freelancer to agree in their contract." },
  { question: "Does Fiverr allow AI?", answer: "Yes. Fiverr's help center says AI may be used across all service categories, as long as freelancers follow its community standards, own the rights to what they deliver and stay accountable for the final work. Clients who don't want AI used should say so before ordering or straight after." },
  { question: "Do I have to tell clients I used AI?", answer: "Fiverr says freelancers must disclose AI use when a client asks, though tools don't need to be listed in gig descriptions. On Upwork, the client's contract terms decide, and using AI on a project where the client restricted it breaks Upwork's terms. Research on freelance work suggests clients generally prefer you to tell them up front rather than only when asked." },
  { question: "Can clients detect AI in my work?", answer: "Some run deliverables through AI detectors, and many notice the signs on their own: a sudden change of voice, generic content with no specifics, or factual errors. Detectors can also be wrong about human writing, so keep drafts and version history as a record of your process." },
  { question: "Is it OK to put a client's material into ChatGPT?", answer: "Only if your agreement allows it. Client briefs, data and unpublished drafts may be confidential, and some contracts and NDAs restrict sharing them with AI tools. Check the contract and the AI tool's data settings first, and ask the client when in doubt." },
  { question: "Should I charge less if I use AI?", answer: "Price for the outcome and quality you deliver, not the hours. Many freelancers offer clearly labelled options, such as AI-assisted with human editing versus fully human-written, so clients can choose with full information." },
];

const src = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);
const FIVERR = src("https://help.fiverr.com/hc/en-us/articles/37333301560593-Using-AI-on-Fiverr-Guidelines-for-freelancers-and-clients", "Fiverr Help Center: Using AI on Fiverr, guidelines for freelancers and clients");
const FIVERR_STANDARDS = src("https://help.fiverr.com/hc/en-us/articles/32243564776593", "Fiverr Community Standards: AI-generated content");
const UPWORK_REG = src("https://www.theregister.com/2023/05/09/upwork_chatgpt_problem/", "The Register: Upwork's April 2023 terms update on generative AI");
const DISCLOSURE_STUDY = src("https://arxiv.org/abs/2603.07459", "Hwang et al.: Practices and policies of AI disclosure in freelance work (2026)");
const NDA = src("https://terms.law/2025/12/05/nda-no-ai-clauses-marketplace-terms/", "Terms.law: \"No AI\" clauses in NDAs and marketplace terms");

const Cta = ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
    <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
    <p className="text-muted-foreground mb-5">{text}</p>
    <a
      href={APP}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick(`upwork_fiverr_${position}`, "app_detector")}
      className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
    >
      <span>{label}</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
    <p className="text-xs text-muted-foreground mt-3">Free plan available. No credit card needed.</p>
  </div>
);

const AIWritingUpworkFiverr = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="upwork ai policy, fiverr ai policy, can i use ai on upwork, can i use ai on fiverr, ai for freelance writers, ai disclosure freelancers" />
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
        <meta property="article:published_time" content="2026-03-15" />
        <meta property="article:modified_time" content="2026-11-05" />
        <meta property="article:author" content="Dr. Sarah Chen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <AuthorSchema articleUrl={URL} headline={TITLE} description={DESCRIPTION} datePublished="2026-03-15" dateModified="2026-11-05" image={OG_IMAGE} />
      <SpeakableSchema pageUrl={URL} pageName="Using AI on Upwork and Fiverr" />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Using AI on Upwork and Fiverr" }]} />

          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Using AI on Upwork and Fiverr: What the Rules Actually Say (2026)</h1>
              <QuickAnswer
                question="Can freelancers use AI on Upwork and Fiverr?"
                answer="Yes, on both, with conditions. Upwork lets freelancers use any tools, including AI, unless the client restricts them, and its terms prohibit using AI to substantially bolster work where a client has said no. Fiverr allows AI in every category but says freelancers must disclose it when a client asks, own the rights to what they deliver and stay accountable for the result. In practice: read the contract, ask if it's unclear, and tell the client how you use AI."
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime="2026-03-15">March 15, 2026</time></div>
                <span>Updated <time dateTime="2026-11-05">November 5, 2026</time></span>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Professional</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>

            <KeyTakeaways points={[
              "Neither Upwork nor Fiverr bans AI. Both put the client's wishes and the contract first.",
              "Upwork prohibits using AI to substantially bolster proposals or work when the client has restricted it.",
              "Fiverr requires you to disclose AI use when a client asks, and holds you accountable for the final work.",
              "Research suggests clients prefer proactive disclosure, while many freelancers only disclose when asked.",
              "Confidential client material needs care: some contracts and NDAs restrict putting it into AI tools.",
            ]} />

            <h2>What the Platforms Actually Say</h2>
            <p>There's a lot of folklore about AI on freelance platforms. Here's what the platforms' own rules say, with links so you can check the current wording.</p>
            <div className="not-prose overflow-x-auto my-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Question</TableHead>
                    <TableHead>Upwork</TableHead>
                    <TableHead>Fiverr</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-medium">Is AI allowed?</TableCell><TableCell>Yes: any tools, including generative AI, unless the client restricts them</TableCell><TableCell>Yes, across all service categories</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">When is it a breach?</TableCell><TableCell>Using AI to substantially bolster proposals or work when the client restricted it, or when it violates a third party's rights</TableCell><TableCell>Breaking the community standards on AI content, delivering work you don't have rights to, or misleading the client</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Disclosure</TableCell><TableCell>Set by the client's contract terms; clients can disallow AI tools</TableCell><TableCell>Required when the client asks; tools needn't be listed in gig descriptions</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Client who doesn't want AI</TableCell><TableCell>Can restrict it in the contract</TableCell><TableCell>Should say so before ordering or right after</TableCell></TableRow>
                  <TableRow><TableCell className="font-medium">Who is accountable?</TableCell><TableCell>The freelancer, under the contract and terms</TableCell><TableCell>The freelancer, fully, for the final work</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground">Sources: {FIVERR}; {FIVERR_STANDARDS}; {UPWORK_REG}. Checked November 5, 2026. Platform terms change, so confirm the current versions before relying on them.</p>
            <p>Upwork's position dates from an April 2023 update to its terms: freelancers may use any tools, including generative AI, unless the client restricts them, and a fraud clause bars using AI to substantially bolster proposals or work product where the client has restricted it ({UPWORK_REG}). Fiverr's help center says AI can be used in every category, that it's an aid rather than a substitute for the freelancer's own skill, and that freelancers must disclose AI use when clients ask ({FIVERR}).</p>

            <h2>The Disclosure Gap</h2>
            <p>The rules set a floor; client expectations sit above it. A 2026 study of freelance work, based on interviews with freelancers and surveys of freelancers and clients, found a clear mismatch: freelancers tend to disclose AI use only when asked, partly because they assume clients can tell anyway, while clients are less confident they can spot AI and prefer to be told up front ({DISCLOSURE_STUDY}). Where clients had no clear AI policy, freelancers often misjudged what they wanted.</p>
            <p>The practical lesson is to close the gap yourself. A one-line note in your proposal or profile, such as "I use AI tools for research and first drafts; every deliverable is written, edited and fact-checked by me," removes the guesswork and protects you if a client later runs your work through a detector.</p>

            <h2>What Clients Check For</h2>
            <ul>
              <li><strong>AI detectors.</strong> Some clients run deliverables through tools like Originality.ai or GPTZero. Detectors give probabilities, not proof, and they can flag careful human writing, especially formal or second-language English.</li>
              <li><strong>Voice changes.</strong> Repeat clients notice when your writing suddenly sounds different.</li>
              <li><strong>Generic content.</strong> Text that's correct but says nothing specific about the client, its customers or its industry.</li>
              <li><strong>Factual errors.</strong> Invented statistics, sources that don't exist or out-of-date information are the fastest way to lose a client, AI or not.</li>
            </ul>
            <p>If a client questions work you wrote yourself, your drafts and version history are the best answer; see <Link to="/blog/falsely-accused-of-using-ai">what to do if you're falsely accused of using AI</Link>.</p>

            <Cta
              heading="Check a deliverable before you send it"
              text="See which sentences read as AI-like, and revise them with specifics only you can add."
              label="Check text for AI free"
              position="mid"
            />

            <h2>A Transparent AI-Assisted Workflow</h2>
            <ol>
              <li><strong>Check the contract.</strong> Look for AI restrictions and confidentiality terms. If there's nothing, ask the client how they feel about AI assistance.</li>
              <li><strong>Protect client material.</strong> Don't paste confidential briefs, data or drafts into AI tools unless the agreement allows it and the tool's data settings are appropriate ({NDA}).</li>
              <li><strong>Do the thinking yourself.</strong> Research the client and audience, and write the outline. That's where your value lies.</li>
              <li><strong>Use AI where it helps,</strong> for example first drafts of sections, alternative headlines or summaries of sources you've read.</li>
              <li><strong>Edit hard.</strong> Add specifics, examples and opinions; fix rhythm; cut stock phrases. Our guide to <Link to="/blog/editing-ai-drafts-human-editor">editing AI drafts like a human editor</Link> walks through it.</li>
              <li><strong>Fact-check everything.</strong> Verify every number, name and source.</li>
              <li><strong>Disclose as agreed,</strong> and deliver on a realistic timeline for the quality you're providing.</li>
            </ol>

            <h2>Pricing When You Use AI</h2>
            <p>Price for the outcome and the quality, not the hours. A well-researched article that brings a client traffic is worth the same whether drafting took two hours or eight. If you offer different service levels, label them honestly, for example "AI-assisted, human-edited" and "fully human-written", so clients can choose with full information. Use the time AI saves to add value: research depth, SEO briefs, editing passes or extra formats.</p>

            <h2>Mistakes That Cost Freelancers Clients</h2>
            <ul>
              <li><strong>Using AI on a "no AI" contract.</strong> On Upwork it's a terms breach; on any platform it's a quick way to a dispute.</li>
              <li><strong>Denying AI use when asked.</strong> Fiverr requires disclosure on request, and being caught in a denial does far more damage than the AI use itself.</li>
              <li><strong>Delivering unchecked output.</strong> Generic or wrong content loses clients regardless of how it was made.</li>
              <li><strong>Leaking confidential material.</strong> Putting client data into tools the contract doesn't allow.</li>
            </ul>

            <h2>The Bottom Line</h2>
            <p>Upwork and Fiverr both allow AI, and both put the client's terms first. Freelancers who do well with AI treat it as a drafting and research aid, keep the thinking and editing for themselves, protect client material, and tell clients how they work. That's what keeps reviews strong and accounts safe.</p>

            <Cta
              heading="Self-check your next deliverable"
              text="Overall score plus sentence-level highlighting, so you can see what reads as machine-written before your client does."
              label="Run a free AI check"
              position="final"
            />

            <h2>Sources</h2>
            <ul>
              <li>{FIVERR}</li>
              <li>{FIVERR_STANDARDS}</li>
              <li>{UPWORK_REG}</li>
              <li>{DISCLOSURE_STUDY}</li>
              <li>{NDA}</li>
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

export default AIWritingUpworkFiverr;
