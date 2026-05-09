import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import blogHero from "@/assets/blog-hero.png";

// Category thumbnail images
import categorySeo from "@/assets/blog/category-seo.png";
import categoryAcademic from "@/assets/blog/category-academic.png";
import categoryHowto from "@/assets/blog/category-howto.png";
import categoryComparison from "@/assets/blog/category-comparison.png";
import categoryMarketing from "@/assets/blog/category-marketing.png";
import categoryWriting from "@/assets/blog/category-writing.png";
import categorySocial from "@/assets/blog/category-social.png";
import categoryTools from "@/assets/blog/category-tools.png";

// Map categories to thumbnail images
const categoryThumbnails: Record<string, string> = {
  "SEO": categorySeo,
  "Academic": categoryAcademic,
  "How-To Guide": categoryHowto,
  "Comparison": categoryComparison,
  "Marketing": categoryMarketing,
  "Email Marketing": categoryMarketing,
  "Writing Craft": categoryWriting,
  "Creative Writing": categoryWriting,
  "Professional Editing": categoryWriting,
  "Social Media": categorySocial,
  "Content Creation": categorySocial,
  "Tools": categoryTools,
  "Technical": categoryTools,
  "Educational": categoryAcademic,
  "Industry": categoryTools,
  "Best Practices": categoryHowto,
  "Detector Review": categoryComparison,
  "Travel Writing": categoryWriting,
  "eCommerce": categoryMarketing,
  "Career": categoryWriting,
  "Professional": categoryTools,
};

const blogPosts = [
  {
    slug: "ai-college-admissions-essays-personal-statements",
    title: "AI for College Admissions Essays & Personal Statements (2026)",
    excerpt: "Complete guide to using AI for college admissions essays. Which universities use AI detectors, safe brainstorming workflows, Common App strategies, and how to maintain authentic voice.",
    date: "2026-04-08",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "ai-writing-non-native-english-speakers",
    title: "AI Writing for Non-Native English Speakers: Avoid False AI Flags (2026)",
    excerpt: "Why non-native English writing triggers false AI detection flags. Detector accuracy comparison for ESL writers, grammar tool risks, and strategies to protect yourself from false accusations.",
    date: "2026-04-08",
    readTime: "15 min read",
    category: "Academic"
  },
  {
    slug: "can-ai-detectors-detect-gpt5",
    title: "Can AI Detectors Detect GPT-5? (2026 Real Test Results)",
    excerpt: "500+ samples tested across GPT-5, GPT-5-mini, and GPT-5-nano. Complete detection rates for Turnitin, GPTZero, Originality.AI, and Copyleaks with humanization results.",
    date: "2026-04-08",
    readTime: "14 min read",
    category: "Technical"
  },
  {
    slug: "ai-writing-nursing-healthcare-students",
    title: "AI Writing for Nursing & Healthcare Students (2026)",
    excerpt: "Complete guide to using AI for care plans, SOAP notes, clinical reflections, and nursing essays. Detection risks, ethical frameworks, and safe workflows for healthcare students.",
    date: "2026-03-15",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "ai-content-google-ai-overviews",
    title: "How to Get Your AI Content Into Google AI Overviews (2026)",
    excerpt: "Step-by-step guide to optimizing AI content for citation in Google's AI Overviews. Content structure, E-E-A-T signals, humanization strategies, and tracking methods.",
    date: "2026-03-15",
    readTime: "13 min read",
    category: "SEO"
  },
  {
    slug: "ai-writing-upwork-fiverr-freelancers",
    title: "AI Writing for Upwork & Fiverr Freelancers: Scale Without Getting Caught (2026)",
    excerpt: "Platform-specific strategies for using AI on Upwork and Fiverr. TOS compliance, client detection avoidance, pricing strategies, and humanization workflows.",
    date: "2026-03-15",
    readTime: "12 min read",
    category: "Career"
  },
  {
    slug: "ai-legal-writing-law-school",
    title: "AI for Legal Writing & Law School Essays (2026)",
    excerpt: "Complete guide to using AI for legal memos, briefs, and law school essays. Ethical frameworks, detection avoidance, and workflow templates for legal professionals.",
    date: "2026-03-09",
    readTime: "14 min read",
    category: "Professional"
  },
  {
    slug: "turnitin-vs-gptzero-vs-originality-ai",
    title: "Turnitin vs GPTZero vs Originality AI: Which Detector Is Best? (2026)",
    excerpt: "Side-by-side comparison of the three biggest AI detectors across 500+ samples. Accuracy rates, false positives, pricing, and use-case recommendations.",
    date: "2026-03-09",
    readTime: "15 min read",
    category: "Comparison"
  },
  {
    slug: "ai-twitter-thread-generator",
    title: "AI Twitter Thread Generator That Sounds Human (2026)",
    excerpt: "Create viral X/Twitter threads using AI without sounding like a bot. Thread templates, prompt engineering, and humanization workflows for creators.",
    date: "2026-03-09",
    readTime: "12 min read",
    category: "Social Media"
  },
  {
    slug: "does-turnitin-detect-chatgpt",
    title: "Does Turnitin Detect ChatGPT? (2026 Real Test Results)",
    excerpt: "We submitted 150+ ChatGPT documents to Turnitin. Real detection rates by model (GPT-4o, GPT-4, GPT-3.5), content type, and editing level.",
    date: "2026-03-09",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "check-my-essay-for-ai",
    title: "Check My Essay for AI: 7 Free Tools Before You Submit",
    excerpt: "Self-check your essay before your professor does. Compare 7 free AI detectors with accuracy rates and step-by-step instructions.",
    date: "2026-03-09",
    readTime: "12 min read",
    category: "How-To Guide"
  },
  {
    slug: "best-free-ai-humanizer-2026",
    title: "Best Free AI Humanizer 2026: No Signup, No Limit",
    excerpt: "We tested every major free AI humanizer with identical ChatGPT content. Real bypass rates, word limits, and quality scores compared.",
    date: "2026-03-09",
    readTime: "15 min read",
    category: "Comparison"
  },
  {
    slug: "chatgpt-alternatives-essays",
    title: "ChatGPT Alternatives for Essay Writing (2026)",
    excerpt: "10 best ChatGPT alternatives for essay writing. Compare Claude, Gemini, Perplexity, and more for academic quality and detection rates.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Academic"
  },
  {
    slug: "ai-blog-post-generator",
    title: "AI Blog Post Generator That Passes AI Detection (2026)",
    excerpt: "Best AI blog generators compared. Learn the workflow for producing undetectable blog content at scale.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Marketing"
  },
  {
    slug: "ai-essay-checker",
    title: "Best AI Essay Checker: Self-Check Before You Submit (2026)",
    excerpt: "Free AI essay checkers compared. Self-check your essay before your professor does with these 7 tools.",
    date: "2026-03-08",
    readTime: "11 min read",
    category: "Tools"
  },
  {
    slug: "make-ai-writing-creative",
    title: "How to Make AI Writing More Creative and Original",
    excerpt: "12 techniques to transform generic AI text into creative, distinctive writing that surprises and engages readers.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Writing Craft"
  },
  {
    slug: "ai-content-at-scale",
    title: "AI Content at Scale: 100+ Articles Without Getting Flagged",
    excerpt: "Production workflow for 100+ humanized AI articles per month. Complete guide for agencies and content teams.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Marketing"
  },
  {
    slug: "ai-grant-writing",
    title: "AI for Grant Writing: Win Funding Without Detection (2026)",
    excerpt: "Section-by-section AI workflow for competitive grant proposals. NIH, NSF, and foundation grant writing guide.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Professional"
  },
  {
    slug: "wordtune-vs-ai-free-text-pro",
    title: "Wordtune vs AI Free Text Pro: Rewriter vs Humanizer (2026)",
    excerpt: "Rewriter vs humanizer: which do you need? Side-by-side comparison with detection test results.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "ai-press-releases",
    title: "AI for Press Releases: PR Content That Sounds Human (2026)",
    excerpt: "Write press releases with AI that journalists actually use. Templates, workflow, and humanization strategies.",
    date: "2026-03-08",
    readTime: "11 min read",
    category: "Professional"
  },
  {
    slug: "chatgpt-plus-detection",
    title: "Does ChatGPT Plus Bypass AI Detection? (2026 Test Results)",
    excerpt: "We tested every ChatGPT tier against 5 detectors. Paying for Plus does not make text less detectable.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Technical"
  },
  {
    slug: "ai-medical-scientific-writing",
    title: "AI for Medical & Scientific Writing: A Researcher's Guide",
    excerpt: "Use AI for medical and scientific writing without compromising journal acceptance. Section-by-section guide.",
    date: "2026-03-08",
    readTime: "14 min read",
    category: "Professional"
  },
  {
    slug: "humanize-chatgpt-text",
    title: "How to Humanize ChatGPT Text (Step-by-Step 2026)",
    excerpt: "Make ChatGPT text sound human in 6 steps. Reduce AI detection scores on Turnitin, GPTZero, and Originality.AI with proven humanization techniques.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "How-To Guide"
  },
  {
    slug: "best-ai-tools-for-students",
    title: "Best AI Writing Tools for Students (Free & Paid 2026)",
    excerpt: "10 best AI writing tools for students ranked by quality, detection risk, and price. ChatGPT, Claude, Gemini, and more compared.",
    date: "2026-03-08",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "can-turnitin-detect-perplexity",
    title: "Can Turnitin Detect Perplexity AI? (2026 Test Results)",
    excerpt: "We tested Perplexity AI against Turnitin, GPTZero, and Originality.AI. Real 2026 detection results inside.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Technical"
  },
  {
    slug: "turnitin-similarity-vs-ai-score",
    title: "Turnitin Similarity Score vs AI Score: What's the Difference?",
    excerpt: "Understand Turnitin's two scores: what each measures, what professors see, and what thresholds trigger review.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Educational"
  },
  {
    slug: "gptzero-accuracy-review",
    title: "Does GPTZero Actually Work? Accuracy Review (2026)",
    excerpt: "Independent GPTZero accuracy review with real test data. Detection rates by AI model, false positive rates, and pricing.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Detector Review"
  },
  {
    slug: "ai-ghostwriter",
    title: "AI Ghostwriter: Professional Content Without Detection",
    excerpt: "Build an AI ghostwriting workflow that delivers voice-matched, detection-proof content at scale for executives and thought leaders.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Professional"
  },
  {
    slug: "ai-dissertation-thesis",
    title: "AI Writing for Dissertation & Thesis (2026 Guide)",
    excerpt: "Chapter-by-chapter guide for PhD and Masters students on where AI helps, where it hurts, and how to integrate it responsibly.",
    date: "2026-03-08",
    readTime: "15 min read",
    category: "Academic"
  },
  {
    slug: "copyleaks-vs-turnitin",
    title: "Copyleaks vs Turnitin: Which AI Detector Is Better? (2026)",
    excerpt: "Head-to-head comparison with real accuracy data across 5 AI models. Detection rates, false positives, and pricing compared.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "ai-instagram-captions",
    title: "AI Instagram Captions: Engaging Posts That Don't Sound AI",
    excerpt: "20 prompt templates and a humanization workflow that produces Instagram captions your audience actually wants to read.",
    date: "2026-03-08",
    readTime: "11 min read",
    category: "Social Media"
  },
  {
    slug: "ai-cover-letter-generator",
    title: "AI Cover Letter Generator That Sounds Human (2026)",
    excerpt: "5 AI cover letter generators compared with humanization workflow and industry-specific templates that land interviews.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Career"
  },
  {
    slug: "ai-homework-helper-undetectable",
    title: "AI Homework Helper That Won't Get Caught (2026)",
    excerpt: "The complete guide to using AI for homework without triggering detection tools. Workflows, subject-specific tips, and real test results.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Academic"
  },
  {
    slug: "rewrite-ai-text-sound-human",
    title: "How to Rewrite AI Text to Sound Human (2026)",
    excerpt: "7 proven techniques to transform robotic AI output into natural human-sounding prose. Before/after examples and detection results.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "How-To Guide"
  },
  {
    slug: "turnitin-appeal-ai-detection",
    title: "Is Turnitin Wrong? How to Appeal AI Detection",
    excerpt: "Step-by-step guide to appealing Turnitin AI detection false positives. Email templates, evidence gathering, and how to prove your writing is human.",
    date: "2026-03-08",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "free-ai-content-detector",
    title: "Free AI Content Detector: Check Text Online (2026)",
    excerpt: "Compare the best free AI content detectors with accuracy data for ChatGPT, Claude, and Gemini. Find out which tools actually work.",
    date: "2026-03-08",
    readTime: "11 min read",
    category: "Tools"
  },
  {
    slug: "chatgpt-college-essays",
    title: "ChatGPT for College Essays: What Professors Detect",
    excerpt: "What college professors actually use to detect ChatGPT essays. University policies, detection scores, and responsible AI use in 2026.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Academic"
  },
  {
    slug: "ai-text-converter",
    title: "AI Text Converter: AI to Human Writing Instantly",
    excerpt: "Turn AI-generated writing into human writing instantly. Top 5 converters compared with detection test results and step-by-step guide.",
    date: "2026-03-08",
    readTime: "11 min read",
    category: "Tools"
  },
  {
    slug: "does-turnitin-detect-gemini",
    title: "Does Turnitin Detect Gemini? (2026 Test Results)",
    excerpt: "We tested Gemini 2.5 Pro and Flash against Turnitin, GPTZero, and Originality.AI. Complete 2026 detection results inside.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Technical"
  },
  {
    slug: "ai-detector-employers",
    title: "AI Writing Detector for Employers (2026)",
    excerpt: "How employers can use AI detectors to screen job applications. Top tools, legal considerations, and recommended HR workflows.",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "Professional"
  },
  {
    slug: "undetectable-ai-alternatives",
    title: "Undetectable AI Alternatives: 5 Better Tools (2026)",
    excerpt: "5 better alternatives to Undetectable AI ranked by bypass rates, pricing, and detection test results. Find the right tool for you.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Comparison"
  },
  {
    slug: "claude-academic-writing",
    title: "Claude for Academic Writing Without Getting Caught",
    excerpt: "How to use Claude AI for essays without detection. Detection profile, best prompts, and the humanization workflow for students.",
    date: "2026-03-08",
    readTime: "13 min read",
    category: "Academic"
  },
  {
    slug: "remove-ai-detection-from-text",
    title: "How to Remove AI Detection from Text (Free Methods)",
    excerpt: "5 proven methods to remove AI detection signals from your text. Free manual techniques plus instant tools that work on Turnitin, GPTZero, and more.",
    date: "2026-03-05",
    readTime: "13 min read",
    category: "How-To Guide"
  },
  {
    slug: "best-ai-essay-writer-undetectable",
    title: "Best AI Essay Writer That Can't Be Detected (2026)",
    excerpt: "Discover the top AI essay writing workflows that pass Turnitin, GPTZero, and Originality.AI. Real test results and step-by-step guide.",
    date: "2026-03-05",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "ai-paraphrasing-tool-avoid-plagiarism",
    title: "AI Paraphrasing Tool to Avoid Plagiarism (2026)",
    excerpt: "Compare AI paraphrasing tools for plagiarism avoidance. See which tools pass AI detection and which fail with real test results.",
    date: "2026-03-05",
    readTime: "12 min read",
    category: "Tools"
  },
  {
    slug: "ai-for-research-papers",
    title: "AI for Research Papers: Use AI Without Consequences",
    excerpt: "How graduate students and researchers can use AI tools ethically for thesis writing, literature reviews, and journal submissions.",
    date: "2026-03-04",
    readTime: "15 min read",
    category: "Academic"
  },
  {
    slug: "ai-writing-business-reports-emails",
    title: "AI Writing for Business Reports & Emails (2026)",
    excerpt: "Professional guide to using AI for business reports, client emails, and proposals. Match brand voice and pass compliance checks.",
    date: "2026-03-04",
    readTime: "13 min read",
    category: "Professional"
  },
  {
    slug: "best-ai-detector-for-teachers",
    title: "Best AI Detector for Teachers & Professors (2026)",
    excerpt: "Top 5 AI detectors ranked for classroom use. Accuracy rates, false positives, pricing, and practical advice for educators.",
    date: "2026-03-04",
    readTime: "14 min read",
    category: "Detector Review"
  },
  {
    slug: "how-to-cite-ai-generated-content",
    title: "How to Cite AI-Generated Content: APA, MLA, Chicago & Harvard (2026)",
    excerpt: "Complete guide to citing ChatGPT, Claude, and Gemini in APA, MLA, Chicago, and Harvard formats with copy-paste templates.",
    date: "2026-02-28",
    readTime: "15 min read",
    category: "Academic"
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini-detection",
    title: "ChatGPT vs Claude vs Gemini: Which AI Writer Is Hardest to Detect? (2026)",
    excerpt: "We tested GPT-5, Claude 3.5, and Gemini 2.5 Pro against 5 major AI detectors. See which model is hardest to detect.",
    date: "2026-02-28",
    readTime: "14 min read",
    category: "Comparison"
  },
  {
    slug: "ai-writing-high-school-students",
    title: "AI Writing for High School Students: A Parent and Student Guide (2026)",
    excerpt: "School policies, what's allowed, consequences of getting caught, and how to use AI responsibly in high school.",
    date: "2026-02-28",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "how-to-check-if-written-by-ai",
    title: "How to Check If Something Was Written by AI (Free Methods)",
    excerpt: "Free tools and manual techniques for teachers, editors, and employers to identify AI-generated text.",
    date: "2026-02-28",
    readTime: "13 min read",
    category: "How-To Guide"
  },
  {
    slug: "quillbot-vs-ai-free-text-pro",
    title: "Quillbot vs AI Free Text Pro: Paraphraser vs Humanizer Compared (2026)",
    excerpt: "Quillbot paraphrases. AI Free Text Pro humanizes. We tested both against 5 AI detectors to show why the distinction matters.",
    date: "2026-02-28",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "ai-disclosure-policies-2026",
    title: "AI Disclosure Policies: What You Must Know Before Submitting AI Content (2026)",
    excerpt: "From the EU AI Act to university honor codes, here's what you need to disclose about AI use in 2026.",
    date: "2026-02-28",
    readTime: "14 min read",
    category: "Educational"
  },
  {
    slug: "turnitin-ai-detection-accuracy",
    title: "Turnitin AI Detection: How It Works and How Accurate It Really Is (2026)",
    excerpt: "Deep dive into Turnitin's AI detection: real accuracy rates, false positive data, and what scores actually mean.",
    date: "2026-02-28",
    readTime: "15 min read",
    category: "Technical"
  },
  {
    slug: "ai-writing-for-freelancers",
    title: "AI Writing for Freelancers: How to Use AI Without Losing Clients (2026)",
    excerpt: "Practical guide for freelance writers using AI. How to integrate AI, handle client expectations, and protect your reputation.",
    date: "2026-02-28",
    readTime: "13 min read",
    category: "Career"
  },
  {
    slug: "ai-humanizer-for-blog-posts",
    title: "AI Humanizer for Blog Posts: Write Faster Without Sounding Like a Robot",
    excerpt: "How to use AI humanizer tools to create blog content that reads naturally, ranks on Google, and engages readers.",
    date: "2026-02-28",
    readTime: "12 min read",
    category: "Marketing"
  },
  {
    slug: "originality-ai-accuracy-false-positives",
    title: "Can Originality.AI Be Wrong? False Positives and Accuracy Explained",
    excerpt: "Independent analysis of Originality.AI accuracy. Real false positive rates and how to handle being incorrectly flagged.",
    date: "2026-02-28",
    readTime: "14 min read",
    category: "Detector Review"
  },
  {
    slug: "is-it-illegal-to-use-ai-for-school",
    title: "Is It Illegal to Use AI for School? Academic AI Policies Explained (2026)",
    excerpt: "Using AI for school is not illegal, but it can violate academic integrity policies. We break down university AI rules, real consequences, and how to use AI responsibly.",
    date: "2026-02-26",
    readTime: "15 min read",
    category: "Academic"
  },
  {
    slug: "can-teachers-detect-chatgpt",
    title: "Can Teachers Detect ChatGPT? What Students Need to Know in 2026",
    excerpt: "Find out if teachers and professors can tell when you use ChatGPT. Every detection method schools use in 2026 explained.",
    date: "2026-02-25",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "can-turnitin-detect-deepseek",
    title: "Can Turnitin Detect DeepSeek? What You Need to Know",
    excerpt: "We tested DeepSeek R1 and V3 against Turnitin, GPTZero, and Originality.AI. Here are the real detection results.",
    date: "2026-02-25",
    readTime: "13 min read",
    category: "Academic"
  },
  {
    slug: "best-chatgpt-prompts-for-essays",
    title: "Best ChatGPT Prompts for Essays That Sound Human (2026)",
    excerpt: "20+ proven ChatGPT prompts for essays that produce natural, human-sounding writing across all essay types.",
    date: "2026-02-25",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "ai-humanizer-resumes-cover-letters",
    title: "AI Humanizer for Resumes and Cover Letters: Complete Guide",
    excerpt: "Make AI-generated resumes and cover letters sound authentic, professional, and pass recruiter review.",
    date: "2026-02-25",
    readTime: "12 min read",
    category: "Career"
  },
  {
    slug: "ai-detection-false-positives",
    title: "AI Detection False Positives: Why Your Human Writing Gets Flagged",
    excerpt: "AI detectors falsely flag human writing 5-15% of the time. Learn why it happens and how to protect yourself.",
    date: "2026-02-25",
    readTime: "13 min read",
    category: "Educational"
  },
  {
    slug: "gptzero-vs-turnitin-comparison",
    title: "GPTZero vs Turnitin: Which AI Detector Is More Accurate?",
    excerpt: "Head-to-head comparison of GPTZero and Turnitin with real test results on accuracy, false positives, and pricing.",
    date: "2026-02-25",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "does-grammarly-trigger-ai-detection",
    title: "Does Grammarly Get Detected as AI? The Truth About Writing Tools",
    excerpt: "We tested Grammarly-edited text against Turnitin, GPTZero, and more. Here are the real results.",
    date: "2026-02-25",
    readTime: "10 min read",
    category: "Educational"
  },
  {
    slug: "humanize-ai-text-free-no-signup",
    title: "How to Humanize AI Text for Free: No Sign-Up Required (2026)",
    excerpt: "Free AI humanizer tools and manual techniques to make AI text sound human. No account needed.",
    date: "2026-02-25",
    readTime: "12 min read",
    category: "How-To Guide"
  },
  {
    slug: "undetectable-ai-vs-ai-free-text-pro",
    title: "Undetectable AI vs AI Free Text Pro: Honest Comparison (2026)",
    excerpt: "Side-by-side comparison of accuracy, pricing, and features with real test results.",
    date: "2026-02-25",
    readTime: "13 min read",
    category: "Comparison"
  },
  {
    slug: "best-ai-detector-2026",
    title: "Best AI Detector 2026: Top 10 Tools Tested & Ranked",
    excerpt: "We tested 10 AI detectors on 200 samples. Full accuracy and false-positive rankings for 2026.",
    date: "2026-05-09",
    readTime: "14 min read",
    category: "Comparison"
  },
  {
    slug: "stealthwriter-alternative",
    title: "Best Stealthwriter Alternative: Tested Head-to-Head (2026)",
    excerpt: "AI Free Text Pro vs Stealthwriter on 40 samples: 95% vs 86% bypass and better readability.",
    date: "2026-05-09",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "ai-humanizer-for-essays",
    title: "AI Humanizer for Essays: Reduce False Flags Without Losing Voice",
    excerpt: "Step-by-step essay humanization workflow tested on Turnitin, GPTZero, and Originality.AI.",
    date: "2026-05-09",
    readTime: "13 min read",
    category: "How-To Guide"
  {
    slug: "ai-detectors-claude-gemini-gpt5-2026",
    title: "Can AI Detectors Detect Claude, Gemini, and GPT-5? (2026 Tests)",
    excerpt: "Model-by-model detection test results for 2026's biggest AI models across 5 major detectors.",
    date: "2026-02-25",
    readTime: "14 min read",
    category: "Technical"
  },
  {
    slug: "ai-product-descriptions",
    title: "How to Humanize AI-Generated Product Descriptions",
    excerpt: "Transform AI product copy into compelling, human-like descriptions that convert customers and build trust.",
    date: "2026-01-22",
    readTime: "10 min read",
    category: "eCommerce"
  },
  {
    slug: "ai-youtube-scripts",
    title: "How to Humanize AI-Generated YouTube Scripts",
    excerpt: "Create engaging, authentic YouTube scripts using AI while maintaining your unique voice and style.",
    date: "2026-01-22",
    readTime: "11 min read",
    category: "Content Creation"
  },
  {
    slug: "humanize-ai-generated-stories-fiction",
    title: "How to Humanize AI-Generated Stories & Fiction",
    excerpt: "Transform AI-generated stories and fiction into human-like narratives that captivate readers.",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Creative Writing"
  },
  {
    slug: "ai-writing-academia",
    title: "Ethical AI Writing in Academia: A Complete Guide",
    excerpt: "Navigate the ethical landscape of AI writing tools in academic settings while maintaining integrity.",
    date: "2026-01-22",
    readTime: "14 min read",
    category: "Academic"
  },
  {
    slug: "ai-humanizers-for-email-marketing",
    title: "AI Humanizers for Email Marketing: Complete Guide",
    excerpt: "Master the art of humanizing AI-generated email campaigns for better engagement and conversions.",
    date: "2026-01-22",
    readTime: "13 min read",
    category: "Email Marketing"
  },
  {
    slug: "ai-powered-seo-content-2026",
    title: "AI-Powered SEO Content Strategies for 2026",
    excerpt: "Future-proof your content strategy with AI-powered SEO techniques that rank and convert.",
    date: "2026-01-22",
    readTime: "15 min read",
    category: "SEO"
  },
  {
    slug: "humanize-ai-linkedin-2026",
    title: "Humanize AI Content for LinkedIn in 2026",
    excerpt: "Create authentic LinkedIn content using AI that builds professional credibility and engagement.",
    date: "2026-01-22",
    readTime: "11 min read",
    category: "Social Media"
  },
  {
    slug: "humanize-ai-social-media-2026",
    title: "How to Humanize AI Content for Social Media in 2026",
    excerpt: "Transform AI-generated social media content into engaging, authentic posts that resonate.",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Social Media"
  },
  {
    slug: "ai-humanizer-travel-blogs",
    title: "AI Humanizer for Travel Blogs: Complete Guide",
    excerpt: "Create authentic travel content using AI tools while maintaining your unique travel writing voice.",
    date: "2026-01-22",
    readTime: "13 min read",
    category: "Travel Writing"
  },
  {
    slug: "zero-click-search-ai-2026",
    title: "Zero-Click Search and AI Content in 2026",
    excerpt: "Adapt your AI content strategy for the zero-click search era and featured snippet optimization.",
    date: "2026-01-22",
    readTime: "14 min read",
    category: "SEO"
  },
  {
    slug: "humanize-ai-travel-blogs",
    title: "How to Humanize AI-Generated Travel Blogs",
    excerpt: "Transform AI-generated travel content into authentic, engaging narratives that inspire readers.",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Travel Writing"
  },
  {
    slug: "ai-content-marketing-trends-2026",
    title: "AI Content Marketing Trends to Watch in 2026",
    excerpt: "Discover emerging AI content marketing trends including automation, personalization, and analytics.",
    date: "2026-01-22",
    readTime: "13 min read",
    category: "Marketing"
  },
  {
    slug: "mastering-ai-powered-email-campaigns-2026",
    title: "Mastering AI-Powered Email Campaigns in 2026",
    excerpt: "Advanced strategies for integrating AI into your email marketing for maximum engagement.",
    date: "2026-01-22",
    readTime: "14 min read",
    category: "Email Marketing"
  },
  {
    slug: "bypass-ai-detection-guide",
    title: "The Ultimate Guide to Bypassing AI Detection",
    excerpt: "Comprehensive strategies for creating human-like content that passes AI detection tools.",
    date: "2026-01-22",
    readTime: "16 min read",
    category: "How-To Guide"
  },
  {
    slug: "top-10-ai-writing-tools-2026",
    title: "Top 10 AI Writing Tools in 2026",
    excerpt: "Discover the best AI writing tools for 2026 and how they enhance content creation.",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Tools"
  },
  {
    slug: "write-ai-resistant-content",
    title: "Write AI-Resistant Content in 2026",
    excerpt: "Advanced techniques to make your content resistant to AI detection while staying authentic.",
    date: "2026-01-22",
    readTime: "11 min read",
    category: "How-To Guide"
  },
  {
    slug: "bypass-copyleaks-ai-detection",
    title: "Bypass Copyleaks AI Detection – Proven Techniques for 2026",
    excerpt: "Learn expert strategies to humanize AI-generated text, lower Copyleaks detection scores, and maintain readability while preserving integrity.",
    date: "2026-01-20",
    readTime: "12 min read",
    category: "How-To Guide"
  },
  {
    slug: "bypass-winston-ai-detection",
    title: "Bypass Winston AI Detection – Reduce AI Scores & Humanize Text",
    excerpt: "Discover how to bypass Winston AI detection safely. Expert strategies to humanize AI-generated text and lower detection scores.",
    date: "2026-01-20",
    readTime: "11 min read",
    category: "How-To Guide"
  },
  {
    slug: "bypass-zerogpt-ai-detection",
    title: "Bypass ZeroGPT AI Detection – Humanize AI Content & Reduce Scores",
    excerpt: "Learn how to bypass ZeroGPT AI detection effectively. Strategies to humanize AI-generated content and reduce detection scores.",
    date: "2026-01-20",
    readTime: "10 min read",
    category: "How-To Guide"
  },
  {
    slug: "how-ai-detectors-score-text",
    title: "How AI Detectors Score Text: A Behind-the-Scenes Look",
    excerpt: "Breaking down the metrics AI detectors use in plain language. Understand perplexity, burstiness, and confidence scores.",
    date: "2026-01-15",
    readTime: "12 min read",
    category: "Technical"
  },
  {
    slug: "signal-vs-noise-human-text",
    title: "Signal vs. Noise: What Makes Text Human in 2026",
    excerpt: "Current patterns detectors care about, with concrete examples of what distinguishes human writing from AI output.",
    date: "2026-01-15",
    readTime: "14 min read",
    category: "Technical"
  },
  {
    slug: "ai-humanization-pitfalls",
    title: "AI Humanization Pitfalls: Common Mistakes Writers Make",
    excerpt: "What to avoid when refining AI text. Learn the most common mistakes and how to fix them.",
    date: "2026-01-15",
    readTime: "11 min read",
    category: "Best Practices"
  },
  {
    slug: "how-to-write-naturally-with-ai",
    title: "How to Write Naturally with AI: A Complete Guide",
    excerpt: "Learn the art of crafting natural, engaging content with AI assistance. Discover techniques for prompting, structuring, and refining AI-generated text.",
    date: "2026-01-12",
    readTime: "14 min read",
    category: "Writing Craft"
  },
  {
    slug: "editing-ai-drafts-human-editor",
    title: "Editing AI Drafts Like a Human Editor",
    excerpt: "Professional editing techniques to transform AI-generated drafts into polished, publication-ready content that reads authentically human.",
    date: "2026-01-10",
    readTime: "12 min read",
    category: "Professional Editing"
  },
  {
    slug: "tone-voice-flow-ai-writing",
    title: "Tone, Voice, and Flow in AI-Assisted Writing",
    excerpt: "Master the three pillars of great writing: tone sets emotional temperature, voice creates distinctiveness, and flow carries readers forward.",
    date: "2026-01-08",
    readTime: "11 min read",
    category: "Writing Craft"
  },
  {
    slug: "make-chatgpt-undetectable-2025",
    title: "How to Improve AI Writing Quality: The Complete 2026 Guide",
    excerpt: "The complete playbook for transforming AI-generated content into natural, human-quality writing that reads authentically.",
    date: "2026-01-06",
    readTime: "15 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-detection-patterns-explained",
    title: "AI vs. Human: 5 Subtle Linguistic Patterns AI Detectors Look For",
    excerpt: "Discover the 5 linguistic patterns AI detectors analyze including perplexity, burstiness, and predictability.",
    date: "2026-01-05",
    readTime: "12 min read",
    category: "Educational"
  },
  {
    slug: "paraphrasing-vs-humanizing",
    title: "Paraphrasing vs. Humanizing: Why Marketers Need a True AI Humanizer",
    excerpt: "Understand the critical difference between AI paraphrasing and humanizing. Learn why simple paraphrasers fail to produce natural-sounding content.",
    date: "2026-01-04",
    readTime: "10 min read",
    category: "Marketing"
  },
  {
    slug: "gptinf-vs-ai-free-text-pro",
    title: "GPTinf vs. AI Free Text Pro: Which Humanizer Produces Better Results?",
    excerpt: "Detailed comparison of GPTinf and AI Free Text Pro humanizers with real test results and pricing analysis.",
    date: "2026-01-03",
    readTime: "11 min read",
    category: "Comparison"
  },
  {
    slug: "originality-ai-review-how-to-beat",
    title: "Originality.AI Detector Review: Accuracy, Pricing, and How It Works",
    excerpt: "Complete Originality.AI review covering accuracy, pricing, and what makes content appear more human-like.",
    date: "2026-01-02",
    readTime: "13 min read",
    category: "Detector Review"
  },
  {
    slug: "pass-all-ai-detectors-guide",
    title: "The Definitive Guide to Writing Human-Like Content (2026)",
    excerpt: "How to create naturally human content that reads authentically across GPTZero, Turnitin, Originality.AI, and more.",
    date: "2026-01-01",
    readTime: "14 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-content-seo-undetectable",
    title: "AI Content for SEO: Rank Without Getting Flagged",
    excerpt: "Generate AI articles at scale that sound natural and rank on Google. Proven workflow for undetectable SEO content.",
    date: "2026-01-28",
    readTime: "14 min read",
    category: "SEO"
  },
  {
    slug: "academic-ai-writing-safely",
    title: "Academic AI Writing: Stay Ethical, Stay Safe",
    excerpt: "Use AI writing tools responsibly while preserving academic integrity. A thoughtful guide for students and researchers.",
    date: "2026-01-25",
    readTime: "12 min read",
    category: "Academic"
  },
  {
    slug: "ai-detection-tools-compared-2025",
    title: "AI Detectors Compared: GPTZero vs AFTP (2026)",
    excerpt: "We tested GPTZero, Rewritify, and AI Free Text Pro. See which AI detector is most accurate in real-world tests.",
    date: "2026-01-22",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "humanize-ai-text-without-losing-voice",
    title: "Humanize AI Text Without Losing Your Voice",
    excerpt: "Proven strategies to make ChatGPT or Gemini text sound naturally human while keeping your unique tone.",
    date: "2026-01-20",
    readTime: "10 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-writing-students-avoid-plagiarism",
    title: "AI Writing for Students: Stay Ethical (2026)",
    excerpt: "Responsible ways to use AI writing assistants in academia while maintaining academic integrity standards.",
    date: "2026-01-18",
    readTime: "11 min read",
    category: "Academic"
  },
  {
    slug: "zerogpt-vs-ai-free-text-pro-2025",
    title: "ZeroGPT vs AI Free Text Pro: Accuracy Test (2026)",
    excerpt: "We tested ZeroGPT and AI Free Text Pro on different writing samples. See which tool spots AI content more accurately.",
    date: "2026-01-15",
    readTime: "8 min read",
    category: "Comparison"
  },
  {
    slug: "top-10-ai-humanizer-tools-2025",
    title: "Top 10 AI Humanizer Tools (Free & Paid) 2026",
    excerpt: "Curated list of the top AI humanizers with features, pricing, and accuracy ratings. Updated for 2026.",
    date: "2026-01-12",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "how-ai-detectors-work",
    title: "How AI Detectors Work: The Science Explained",
    excerpt: "The machine-learning and linguistic patterns behind AI detectors. Learn how to write authentically human content.",
    date: "2026-01-10",
    readTime: "10 min read",
    category: "Educational"
  },
  {
    slug: "why-ai-content-fails-human-review",
    title: "Why AI Content Gets Flagged (And How to Fix It)",
    excerpt: "Discover why AI-generated content still fails human review and the practical steps to make your writing sound natural.",
    date: "2026-01-08",
    readTime: "9 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-tools-for-writers-2025",
    title: "AI Tools for Writers: Boost Creativity (2026)",
    excerpt: "The best AI writing tools to plan, edit, and refine your content, including AI Free Text Pro for authenticity checks.",
    date: "2026-01-05",
    readTime: "11 min read",
    category: "Tools"
  },
  {
    slug: "can-ai-writing-be-original",
    title: "Can AI Writing Be Truly Original?",
    excerpt: "How AI assists rather than replaces creativity, and what 'original' means in the era of ChatGPT and humanizers.",
    date: "2026-01-02",
    readTime: "10 min read",
    category: "Educational"
  },
  {
    slug: "ai-detection-in-publishing-2025",
    title: "AI Detection in Publishing: How to Adapt (2026)",
    excerpt: "How editors and publishers are adapting to AI-generated content and why AI Free Text Pro is part of the solution.",
    date: "2026-01-01",
    readTime: "12 min read",
    category: "Industry"
  },
  {
    slug: "how-to-detect-ai-generated-text",
    title: "How to Detect AI Text: Complete Guide (2026)",
    excerpt: "Proven techniques and tools to identify AI-generated content. Key patterns and detection strategies used by experts.",
    date: "2026-01-01",
    readTime: "8 min read",
    category: "How-To Guide"
  },
  {
    slug: "best-free-ai-humanizer-tools-2025",
    title: "Best Free AI Humanizer Tools in 2026",
    excerpt: "Compare the top free AI humanizer tools available. Find which works best for academic writing and content creation.",
    date: "2026-01-01",
    readTime: "10 min read",
    category: "Tools"
  },
  {
    slug: "bypass-ai-detection-ethical-tips",
    title: "Improve AI Writing: Ethical Tips & Practices",
    excerpt: "Ethical strategies to make AI-assisted content more human-like. Improve writing quality while maintaining authenticity.",
    date: "2026-01-01",
    readTime: "7 min read",
    category: "How-To Guide"
  }
];

// Extract unique categories
const allCategories = [...new Set(blogPosts.map(post => post.category))].sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [thumbnailMap, setThumbnailMap] = useState<Record<string, string>>({});

  // Fetch generated thumbnails from database
  useEffect(() => {
    const fetchThumbnails = async () => {
      const { data } = await supabase
        .from("blog_thumbnails")
        .select("slug, image_url");
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((t: any) => { map[t.slug] = t.image_url; });
        setThumbnailMap(map);
      }
    };
    fetchThumbnails();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Count posts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== null;

  return (
    <div className="min-h-screen flex flex-col">
       <Helmet>
        <title>AI Writing Blog - Guides & Tools | AI Free Text Pro</title>
        <meta name="description" content="Expert guides on AI detection, humanization, and writing quality. Learn to bypass Turnitin, humanize AI text, and create authentic content." />
        <meta name="keywords" content="ai writing blog, ai detection guide, humanizer tools, ai content tips, writing improvement, ai text analysis" />
        <link rel="canonical" href="https://aifreetextpro.com/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="AI Writing Blog - Guides & Tools" />
        <meta property="og:description" content="Expert guides on AI detection, humanization, and writing quality." />
        <meta property="og:url" content="https://aifreetextpro.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="AI Writing Blog - Guides & Tools" />
        <meta name="twitter:description" content="Expert guides on AI detection, humanization, and writing quality." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        
        {/* Blog CollectionPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Writing Blog",
            "description": "Expert guides on AI detection, humanization tools, and writing tips",
            "url": "https://aifreetextpro.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "AI Free Text Pro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/uploads/1759692105576-Logo.PNG"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": blogPosts.length,
              "itemListElement": blogPosts.slice(0, 20).map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://aifreetextpro.com/blog/${post.slug}`,
                "name": post.title,
                "item": {
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "description": post.excerpt,
                  "datePublished": post.date,
                  "url": `https://aifreetextpro.com/blog/${post.slug}`,
                  "author": {
                    "@type": "Person",
                    "name": "Dr. Sarah Chen",
                    "url": "https://aifreetextpro.com/team#sarah-chen"
                  }
                }
              }))
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" }
            ]} 
          />
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 text-primary">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Writing Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides, tips, and insights on AI detection and humanization
            </p>
            
            {/* Blog Hero Image */}
            <div className="mt-8">
              <img 
                src={blogHero} 
                alt="Open book with floating pages representing knowledge and content" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-5xl mx-auto mb-10">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 text-lg rounded-xl border-border/50 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Filter by category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All ({blogPosts.length})
                </button>
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category} ({categoryCounts[category]})
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters & Results Count */}
            {hasActiveFilters && (
              <div className="mt-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> of {blogPosts.length} articles
                  {selectedCategory && (
                    <span> in <span className="text-primary font-medium">{selectedCategory}</span></span>
                  )}
                  {searchQuery && (
                    <span> matching "<span className="text-primary font-medium">{searchQuery}</span>"</span>
                  )}
                </p>
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4 mr-1" />
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-5xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => {
                  const thumbnail = thumbnailMap[post.slug] || categoryThumbnails[post.category] || categoryHowto;
                  return (
                    <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      {/* Thumbnail Image */}
                      <Link to={`/blog/${post.slug}`} className="block">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={thumbnail} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                          <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium text-xs">
                            {post.category}
                          </span>
                        </div>
                      </Link>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </div>
                          </div>

                          <h2 className="text-xl font-bold hover:text-primary transition-colors line-clamp-2">
                            <Link to={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h2>

                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm" className="group text-primary hover:text-primary">
                              Read more
                              <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Ready to Make Your AI Content Undetectable?</h3>
              <p className="text-muted-foreground mb-6">
                Try AI Free Text Pro free, 1,000 words/month with no credit card required.
              </p>
              <a href="https://app.aifreetextpro.com/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Start Free, No Credit Card
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
