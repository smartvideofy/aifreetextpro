import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GuideArticle, ext, makeCta, type GuideMeta } from "@/components/blog/GuideArticle";

const TURNITIN_FP = ext("https://www.turnitin.com/blog/understanding-false-positives-within-our-ai-writing-detection-capabilities", "Turnitin: Understanding false positives within our AI writing detection (2023)");
const VANDERBILT = ext("https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/", "Vanderbilt University: Guidance on AI detection and why we're disabling Turnitin's AI detector (2023)");
const LIANG = ext("https://arxiv.org/abs/2304.02819", "Liang et al.: GPT detectors are biased against non-native English writers (Patterns, 2023)");

const Cta = makeCta("ai_percentage_acceptable");

const meta: GuideMeta = {
  path: "/blog/what-ai-percentage-is-acceptable",
  campaign: "ai_percentage_acceptable",
  title: "What AI Percentage Is Acceptable? Reading AI Scores in 2026",
  h1: "What AI Percentage Is Acceptable? How to Read an AI Detection Score (2026)",
  description: "What AI percentage is acceptable on Turnitin or GPTZero? Why there is no universal cutoff, what a score actually means, and what to do if yours looks high.",
  social: "There is no universal safe AI score. Here is what the percentage actually measures and what to do if yours is high.",
  keywords: "what ai percentage is acceptable, acceptable ai score, how much ai is allowed in an essay, turnitin ai score acceptable, what does ai score mean",
  crumb: "What AI Percentage Is Acceptable?",
  date: "2026-11-21",
  dateLabel: "November 21, 2026",
  readTime: "9 min read",
  category: "Academic",
  quickQuestion: "What AI percentage is acceptable?",
  quickAnswer: "There is no universal acceptable AI percentage. The number only matters against your institution's or client's policy, and most policies are about whether AI use was allowed and disclosed, not a score threshold. An AI score is a probability estimate that can be wrong, so many schools treat it as a reason to talk, not proof. If AI use is not permitted, the honest answer is that any undisclosed AI-written content is a problem, whatever the score.",
  takeaways: [
    "No standard 'safe' AI percentage exists. Policies differ by school, course and client.",
    "An AI score estimates how much text looks machine-written. It does not measure how much you used AI.",
    "Detectors produce false positives, and some universities have switched AI detection off for that reason.",
    "Low scores are the least reliable. Turnitin hides scores below 20% behind an asterisk for that reason.",
    "If your own work scores high, your drafts and version history matter more than the number.",
  ],
  faqs: [
    { question: "Is 20% AI on Turnitin bad?", answer: "Not automatically. Turnitin treats low scores as less reliable and has said its AI score should not be the sole basis for action. What happens next depends on your instructor and your school's policy, and usually starts with a conversation." },
    { question: "Is 0% AI realistic?", answer: "Often, for genuinely human writing, but not always. Formal, formulaic or simple prose can pick up a small score. Chasing exactly 0% is less useful than being able to show how you wrote the work." },
    { question: "How much AI is allowed in an essay?", answer: "That is set by your course policy, not by detectors. Some courses ban AI entirely, some allow brainstorming or editing with disclosure, and some allow drafting. Check the syllabus or ask your instructor." },
    { question: "Do different detectors give different scores?", answer: "Yes. Turnitin, GPTZero, Copyleaks and others use different models and thresholds, so the same text can score very differently. A score only means something in the context of the specific tool." },
    { question: "What should I do if my human-written work scores high?", answer: "Stay calm, gather your drafts, notes and document version history, and ask to discuss it. Explain your process. Avoid running your work through a rewriter after the fact, which can make the situation look worse." },
  ],
  related: [
    { title: "Turnitin AI Detection Accuracy", description: "How reliable Turnitin's AI score is.", href: "/blog/turnitin-ai-detection-accuracy", category: "Academic" },
    { title: "AI Detection False Positives", description: "Why human writing gets flagged.", href: "/blog/ai-detection-false-positives", category: "Educational" },
    { title: "Colleges That Turned Off AI Detection", description: "Universities that disabled the tool.", href: "/blog/colleges-that-turned-off-ai-detection", category: "Academic" },
    { title: "How to Appeal a Turnitin AI Flag", description: "Step-by-step appeal guidance.", href: "/blog/turnitin-appeal-ai-detection", category: "Academic" },
  ],
  sources: [TURNITIN_FP, VANDERBILT, LIANG],
};

const WhatAIPercentageIsAcceptable = () => (
  <GuideArticle meta={meta}>
    <p>You get your AI score back: 18%. Or 34%. Or 71%. The natural next question is whether that number is okay. The frustrating but accurate answer is that the number on its own does not tell you. What matters is what the score measures, how reliable it is at that level, and what your institution or client actually allows.</p>

    <h2>What an AI Percentage Actually Measures</h2>
    <p>An AI detection score is an estimate of how much of the text looks like it was generated by a language model. It is not a measurement of how much you used AI, and it is not a count of copied words. Two consequences follow:</p>
    <ul>
      <li>Human writing that happens to be predictable can score above zero.</li>
      <li>AI-assisted writing that has been substantially rewritten in your own words can score low.</li>
    </ul>
    <p>The score also depends on the tool. Different detectors are trained differently and use different thresholds, so the same essay can score 10% on one and 50% on another. Read our explainer on <Link to="/blog/how-ai-detectors-score-text">how AI detectors score text</Link> for the details.</p>

    <h2>Why There Is No Universal Acceptable AI Percentage</h2>
    <p>Policies are written around behavior, not scores. A typical academic policy says something like: AI may be used for brainstorming but not drafting, and any use must be disclosed. Under that policy, a 40% score on an essay where you disclosed permitted AI editing may be fine, while a 15% score on a take-home exam where AI was banned could still be a concern if the flagged passage really was generated.</p>
    <p>Detector makers themselves warn against fixed thresholds. Turnitin has said its AI indicator should not be used as the sole basis for adverse action ({TURNITIN_FP}). Vanderbilt University disabled Turnitin's AI detector in 2023, citing concerns about reliability and false positives ({VANDERBILT}), and other schools followed (see <Link to="/blog/colleges-that-turned-off-ai-detection">colleges that turned off AI detection</Link>).</p>

    <h2>How Instructors Commonly Read Score Ranges</h2>
    <p>There is no official scale, but in practice scores tend to be read roughly like this. Treat it as a description of common practice, not a rule.</p>
    <div className="not-prose overflow-x-auto my-6">
      <Table>
        <TableHeader>
          <TableRow><TableHead>Score range</TableHead><TableHead>How it is often read</TableHead><TableHead>Reliability</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell className="font-medium">0 to 19%</TableCell><TableCell>Usually not acted on. Turnitin shows these as an asterisk instead of a number.</TableCell><TableCell>Lowest. Most likely to be noise.</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">20 to 50%</TableCell><TableCell>May prompt a closer look at the highlighted passages.</TableCell><TableCell>Mixed. Context matters a lot.</TableCell></TableRow>
          <TableRow><TableCell className="font-medium">50 to 100%</TableCell><TableCell>Often leads to a conversation with the student.</TableCell><TableCell>Higher, but still not proof.</TableCell></TableRow>
        </TableBody>
      </Table>
    </div>

    <h2>Who Gets Unfairly High Scores</h2>
    <p>False positives do not fall evenly. A Stanford study found several detectors flagged a large share of essays by non-native English writers as AI-generated, largely because of simpler, more predictable vocabulary ({LIANG}). Highly structured writing, such as lab reports, legal summaries and templated business copy, can also score higher. If you are in one of these groups, keeping drafts and version history is especially worthwhile. See <Link to="/blog/ai-detection-false-positives">why AI detectors produce false positives</Link>.</p>

    <Cta heading="Know your score before anyone else does" text="Check your draft with sentence-level highlighting and see which passages read as machine-written." label="Run a free AI check" position="mid" />

    <h2>What to Do If Your Score Looks High</h2>
    <ol>
      <li><strong>Find out which passages were flagged.</strong> Scores are usually driven by a few paragraphs, often introductions, definitions or conclusions.</li>
      <li><strong>Check your policy.</strong> If your AI use was allowed and disclosed, a score is not a violation in itself.</li>
      <li><strong>If you wrote it yourself, gather evidence.</strong> Drafts, notes, sources and document version history show your process.</li>
      <li><strong>Revise in your own voice before submission.</strong> If a passage reads as formulaic, rewrite it with specific examples and varied sentences. Our <Link to="/blog/how-to-write-naturally-with-ai">guide to writing naturally</Link> has practical tips.</li>
      <li><strong>If you have already been flagged, do not panic-rewrite.</strong> Changing the work after the fact can look worse. Ask for a conversation and follow the <Link to="/blog/turnitin-appeal-ai-detection">appeal steps</Link>.</li>
    </ol>

    <h2>Why the Same Essay Gets Different Scores</h2>
    <p>Students are often confused when GPTZero says 12% and Turnitin says 45% for identical text. Several things explain the gap:</p>
    <ul>
      <li><strong>Different training data.</strong> Each detector learns from its own collection of human and AI writing, so each develops different ideas of what "machine-like" looks like.</li>
      <li><strong>Different units.</strong> Some tools score sentence by sentence and add them up; others score the whole document. A few long flagged sentences can move one tool much more than another.</li>
      <li><strong>Different thresholds.</strong> Tools choose how confident they must be before calling a passage AI. A cautious tool reports lower numbers to avoid false positives; an aggressive one reports higher numbers.</li>
      <li><strong>Length.</strong> Short texts give detectors little to work with, so scores on a 200 word answer swing far more than on a 3,000 word paper.</li>
    </ul>
    <p>The practical lesson: compare a score only with the same tool your instructor or client uses, and never treat the number from a free checker as a prediction of what another tool will say.</p>

    <h2>What a Score Cannot Tell You</h2>
    <p>Even a perfectly calibrated detector cannot answer the questions that actually matter in a misconduct case. It cannot tell whether AI use was permitted on this assignment, whether it was disclosed, whether the ideas are yours even if the wording was polished, or whether a flagged paragraph was in fact typed by you on a tired evening. Those are questions about process and policy, and only people can answer them. That is why keeping evidence of how you wrote, covered in our guide on <Link to="/blog/how-to-prove-you-didnt-use-ai">how to prove you didn't use AI</Link>, matters more than chasing a lower number.</p>

    <h2>For Writers and Agencies</h2>
    <p>Outside education, clients sometimes set their own thresholds, such as "under 10% on Originality.ai". If you work to a threshold like that, agree in writing which tool and settings will be used, since scores vary between detectors. And be clear with clients about what a score can and cannot show.</p>

    <h2>The Bottom Line</h2>
    <p>There is no acceptable AI percentage that applies everywhere. Know your policy, understand that the score is an estimate, and keep a record of how you wrote your work. That record protects you far better than any number.</p>

    <Cta heading="Refine flagged passages so they sound like you" text="Detect and rework stiff, formulaic writing in one workspace." label="Start free with 1,000 words" position="final" />
  </GuideArticle>
);

export default WhatAIPercentageIsAcceptable;
