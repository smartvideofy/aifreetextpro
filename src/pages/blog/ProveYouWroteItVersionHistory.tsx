import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GuideArticle, ext, makeCta, type GuideMeta } from "@/components/blog/GuideArticle";

const GDOCS = ext("https://support.google.com/docs/answer/190843", "Google Docs Help: Find what's changed in a file (version history)");
const TURNITIN_FP = ext("https://www.turnitin.com/blog/understanding-false-positives-within-our-ai-writing-detection-capabilities", "Turnitin: Understanding false positives within our AI writing detection (2023)");
const LIANG = ext("https://arxiv.org/abs/2304.02819", "Liang et al.: GPT detectors are biased against non-native English writers (Patterns, 2023)");

const Cta = makeCta("prove_you_wrote_it");

const meta: GuideMeta = {
  path: "/blog/how-to-prove-you-didnt-use-ai",
  campaign: "prove_you_wrote_it",
  title: "How to Prove You Didn't Use AI: Version History and Evidence",
  h1: "How to Prove You Didn't Use AI: Build Your Evidence Before You Need It (2026)",
  description: "How to prove you didn't use AI: use version history in Google Docs and Word, keep drafts and notes, and present your writing process if an AI detector flags you.",
  social: "The best defense against a false AI flag is evidence of your writing process. Here is how to build it as you write.",
  keywords: "how to prove you didn't use ai, prove you wrote your essay, google docs version history ai, show writing process, prove essay not ai generated",
  crumb: "How to Prove You Didn't Use AI",
  date: "2026-11-21",
  dateLabel: "November 21, 2026",
  readTime: "9 min read",
  category: "Academic",
  quickQuestion: "How can you prove you didn't use AI?",
  quickAnswer: "Show your writing process. The strongest evidence is a document's version history (Google Docs or Word on OneDrive) showing the text growing over hours or days, plus your outlines, notes, sources and earlier drafts. Being able to explain your argument and answer questions about it in person also carries weight. Start keeping this evidence from the first sentence, not after you are flagged.",
  takeaways: [
    "Detector scores are probabilities. A clear record of your process is stronger evidence.",
    "Write in a tool with version history, such as Google Docs or Word saved to OneDrive.",
    "Keep outlines, notes, source lists and earlier drafts in one folder.",
    "Being able to discuss your work in your own words is persuasive evidence.",
    "If you are flagged, share evidence calmly and avoid rewriting the submitted work.",
  ],
  faqs: [
    { question: "Does Google Docs version history prove I didn't use AI?", answer: "It is strong supporting evidence. A history showing text written gradually over multiple sessions, with edits and deletions, looks very different from one huge paste. It is not absolute proof, but instructors find it persuasive." },
    { question: "What if I wrote my essay in an app without version history?", answer: "Gather whatever you have: earlier saved files, notes, outlines, browser history of your research, emails or messages about the work. Then offer to explain your argument and sources in a meeting." },
    { question: "Can I be punished based only on an AI detector score?", answer: "Policies differ, but detector makers including Turnitin say scores should not be the only basis for action. Most processes include a chance to respond. Ask what evidence is being used and request to present yours." },
    { question: "Should I run my work through a humanizer after being flagged?", answer: "No. Changing the submitted work after a flag can look like concealment. Keep the submitted version as it is and focus on documenting how you wrote it." },
    { question: "Are there tools that record my writing process?", answer: "Some schools use process-tracking features or browser extensions that record typing sessions. Check whether your institution provides or accepts one. Version history in Google Docs or Word is the most widely available option." },
  ],
  related: [
    { title: "Falsely Accused of Using AI?", description: "Steps to take after a flag.", href: "/blog/falsely-accused-of-using-ai", category: "Academic" },
    { title: "How to Appeal a Turnitin AI Flag", description: "Appeal process and templates.", href: "/blog/turnitin-appeal-ai-detection", category: "Academic" },
    { title: "What AI Percentage Is Acceptable?", description: "How to read an AI score.", href: "/blog/what-ai-percentage-is-acceptable", category: "Academic" },
    { title: "Can Teachers Detect ChatGPT?", description: "How instructors spot AI writing.", href: "/blog/can-teachers-detect-chatgpt", category: "Academic" },
  ],
  sources: [GDOCS, TURNITIN_FP, LIANG],
};

const ProveYouWroteItVersionHistory = () => (
  <GuideArticle meta={meta}>
    <p>Most advice on false AI flags arrives too late, after the email from your instructor. By then, the only evidence you have is whatever you happened to save. This guide is about the opposite approach: setting up your writing so that, if a detector ever flags you, you can show exactly how the work came together.</p>

    <h2>Why Evidence Beats a Detector Score</h2>
    <p>An AI detector gives a probability, and it can be wrong. Turnitin itself says its AI score should not be the only basis for action ({TURNITIN_FP}), and research has found detectors flag non-native English writers' essays as AI far more often than native speakers' ({LIANG}). A score is a starting point for a conversation. Evidence of your process is what ends it.</p>

    <h2>Step 1: Write Where Version History Is On</h2>
    <p>The most useful single habit is writing in a tool that automatically records versions.</p>
    <ul>
      <li><strong>Google Docs:</strong> open File, then Version history, then See version history. It shows edits over time with timestamps ({GDOCS}). You can name versions, such as "First full draft", to make the timeline clearer.</li>
      <li><strong>Microsoft Word:</strong> version history is available when the file is saved to OneDrive or SharePoint. Files saved only to your computer generally do not keep it.</li>
      <li><strong>Other apps:</strong> if your tool has no history, save dated copies (essay_v1, essay_v2) as you go.</li>
    </ul>
    <p>Avoid writing in one app and pasting the finished text into another in one go. A single large paste looks the same as pasting AI output, even when you wrote every word.</p>

    <h2>Step 2: Keep the Paper Trail</h2>
    <div className="not-prose overflow-x-auto my-6">
      <Table>
        <TableHeader>
          <TableRow><TableHead>Evidence</TableHead><TableHead>What it shows</TableHead><TableHead>How to keep it</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell className="font-medium">Version history</TableCell><TableCell>Text growing over time, with edits</TableCell><TableCell>Write in Google Docs or Word on OneDrive</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Outline and notes</TableCell><TableCell>Your thinking before drafting</TableCell><TableCell>Same folder as the draft, dated</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Sources and highlights</TableCell><TableCell>Your research path</TableCell><TableCell>Reference manager or annotated PDFs</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Earlier drafts</TableCell><TableCell>How the argument changed</TableCell><TableCell>Named versions or dated copies</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">Feedback</TableCell><TableCell>Revisions made in response</TableCell><TableCell>Save emails and comments</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">AI use log (if allowed)</TableCell><TableCell>Exactly what AI did and did not do</TableCell><TableCell>Short note of prompts and how you used outputs</TableCell></TableRow>
        </TableBody>
      </Table>
    </div>
    <p>If your course allows some AI use, the last row matters most. A short, honest log of where you used it, plus the disclosure your policy asks for, protects you better than trying to hide it. See <Link to="/blog/how-to-cite-ai-generated-content">how to cite AI-generated content</Link>.</p>

    <h2>Step 3: Be Ready to Talk About Your Work</h2>
    <p>Many instructors resolve concerns with a short conversation. Being able to explain why you structured the argument the way you did, where a quote came from, or what you cut from an earlier draft is persuasive in a way no software output is. Reread your work before submitting so it is fresh.</p>

    <Cta heading="Check your draft before you submit" text="See which passages a detector might flag, so you can revise them in your own voice while you still have time." label="Run a free AI check" position="mid" />

    <h2>Step 4: If You Are Flagged</h2>
    <ol>
      <li><strong>Stay calm and ask what was flagged.</strong> Request the report and the specific passages.</li>
      <li><strong>Do not change the submitted work.</strong> Rewriting or humanizing it after a flag can look like concealment.</li>
      <li><strong>Share your evidence.</strong> Version history link or screenshots, drafts, notes and sources.</li>
      <li><strong>Offer to discuss the work.</strong> Explain your process in your own words.</li>
      <li><strong>Know the process.</strong> If it goes further, follow your institution's appeal route. Our guides to <Link to="/blog/falsely-accused-of-using-ai">being falsely accused</Link> and <Link to="/blog/turnitin-appeal-ai-detection">appealing a Turnitin flag</Link> cover the next steps.</li>
    </ol>

    <h2>What Strong and Weak Evidence Look Like</h2>
    <p>Not all evidence carries the same weight. From strongest to weakest, roughly:</p>
    <ol>
      <li><strong>Detailed version history across several sessions.</strong> Hundreds of small edits over days, with sentences rewritten and paragraphs moved, is very hard to fake and easy to understand.</li>
      <li><strong>Handwritten or dated notes and outlines.</strong> Especially when the structure of the final essay clearly grows out of them.</li>
      <li><strong>Annotated sources.</strong> Highlights and margin notes on the exact pages you quote show you did the reading.</li>
      <li><strong>Your ability to explain the work.</strong> Talking through your argument, answering follow-up questions and defending choices you made.</li>
      <li><strong>A second detector score.</strong> Showing that another tool gave a low score is the weakest evidence, because scores vary between tools. Use it, if at all, alongside the items above.</li>
    </ol>

    <h2>Building the Habit Without Extra Work</h2>
    <p>None of this needs to take much time. Create one folder per assignment at the start. Write the outline in a document inside it. Draft in Google Docs or Word on OneDrive, and name a version each time you finish a session ("Intro and section 1", "Full draft", "After feedback"). Save PDFs of your main sources in the same folder. That is roughly two minutes of effort per assignment, and it turns a stressful accusation into a five minute conversation.</p>
    <p>If you are a non-native English writer, or you write in a very structured style, this habit is especially worth building, since your writing is more likely to be misread by detectors through no fault of your own.</p>

    <h2>A Note on Checking Your Own Work</h2>
    <p>Running your own draft through an AI checker before submitting is reasonable. It shows you passages that read as stiff or formulaic, which are usually worth improving anyway. If a passage you wrote gets flagged, revise it by hand with specific detail and varied sentences. Keep in mind that a low score on one tool does not guarantee the same on another, which is why the process evidence above matters more.</p>

    <h2>The Bottom Line</h2>
    <p>You cannot control what a detector says, but you can control whether you have proof of your process. Write with version history on, keep your notes and drafts together, and be ready to talk through your work. Do that from the first sentence and a false flag becomes a short conversation instead of a crisis.</p>

    <Cta heading="Write with confidence" text="Spot passages that read as AI and refine them so your writing sounds like you." label="Start free with 1,000 words" position="final" />
  </GuideArticle>
);

export default ProveYouWroteItVersionHistory;
