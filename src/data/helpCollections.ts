// Help Center collections and article list: the one source used by the Help
// Center, each collection page and each article page (meta description and
// dates). Article bodies are in helpArticles.tsx.
import type { LucideIcon } from "lucide-react";
import { AlertTriangle, CreditCard, Rocket, Shield, Sparkles } from "lucide-react";

export interface HelpArticleInfo {
  title: string;
  slug: string;
  /** Shown in the collection list and used as the article's meta description. */
  description: string;
  /** Last content change (YYYY-MM-DD). Update it when the article's advice or facts change. */
  updated: string;
}

export interface HelpCollectionInfo {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  articles: HelpArticleInfo[];
}

/** When the Help Center articles were first published. */
export const HELP_PUBLISHED = "2026-01-27";
const UPDATED = "2026-10-29";

export const helpCollections: HelpCollectionInfo[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly with AI Free Text Pro",
    icon: Rocket,
    articles: [
      {
        title: "How to Create an Account",
        slug: "create-account",
        description: "Sign up for AI Free Text Pro in five steps: open the sign-up page, choose a sign-up method, set a password, verify your email and start humanizing.",
        updated: UPDATED,
      },
      {
        title: "Your First AI Humanization",
        slug: "first-humanization",
        description: "Your first humanization step by step: paste your text, choose a writing style, click Humanize, review the result, check it with the AI detector and copy it.",
        updated: UPDATED,
      },
      {
        title: "Understanding Your Dashboard",
        slug: "understanding-dashboard",
        description: "A tour of the AI Free Text Pro dashboard: the word count tracker, quick actions, recent activity, usage statistics and your subscription status.",
        updated: UPDATED,
      },
      {
        title: "Choosing the Right Writing Style",
        slug: "choosing-writing-style",
        description: "Academic, Professional, Creative or Casual: what each writing style is for, with a quick guide to picking one for essays, work, blogs and social posts.",
        updated: UPDATED,
      },
    ],
  },
  {
    id: "ai-humanizer-guide",
    title: "AI Humanizer Guide",
    description: "Master our AI humanization tools and get the best results",
    icon: Sparkles,
    articles: [
      {
        title: "How AI Humanization Works",
        slug: "how-humanization-works",
        description: "Why AI detectors flag machine-written text and how AI Free Text Pro rewrites it in layers to change those patterns, with our benchmark results.",
        updated: UPDATED,
      },
      {
        title: "Writing Style Modes Explained",
        slug: "writing-style-modes",
        description: "What the Academic, Professional, Creative and Casual modes each change in your text (vocabulary, sentence structure and tone) and when to use each one.",
        updated: UPDATED,
      },
      {
        title: "Tips for Best Results",
        slug: "tips-best-results",
        description: "What to do before, during and after a humanization to get more natural results, plus advanced tips for long documents and specialist writing.",
        updated: UPDATED,
      },
      {
        title: "Bypassing AI Detectors",
        slug: "bypassing-detectors",
        description: "How AI detectors such as Turnitin, GPTZero and Originality.AI work, which ones AI Free Text Pro is tested against, and best practices for checking your text.",
        updated: UPDATED,
      },
      {
        title: "Advanced Settings & Options",
        slug: "advanced-settings",
        description: "Fine-tune your humanization with advanced controls",
        updated: UPDATED,
      },
    ],
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    description: "Manage your subscription, payments, and account billing",
    icon: CreditCard,
    articles: [
      { title: "Subscription Plans Explained", slug: "subscription-plans", description: "Compare Free vs Pro plans and features", updated: UPDATED },
      { title: "How to Upgrade or Downgrade", slug: "upgrade-downgrade", description: "Change your plan at any time with no penalties", updated: UPDATED },
      { title: "Refund Policy & Cancellations", slug: "refund-policy", description: "Our refund policy and how billing works", updated: UPDATED },
    ],
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    description: "Learn how we protect your data and keep your account secure",
    icon: Shield,
    articles: [
      { title: "How We Protect Your Data", slug: "data-protection", description: "Our security measures and data handling practices", updated: UPDATED },
      { title: "Account Security Best Practices", slug: "account-security", description: "Tips to keep your account safe and secure", updated: UPDATED },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Find solutions to common issues and problems",
    icon: AlertTriangle,
    articles: [
      { title: "Why Isn't My Text Being Humanized?", slug: "text-not-humanized", description: "Common reasons and quick fixes", updated: UPDATED },
      { title: "Login & Account Issues", slug: "login-issues", description: "Can't log in? Reset password not working? We can help", updated: UPDATED },
      { title: "Payment Failed - What To Do", slug: "payment-failed", description: "Troubleshoot payment issues and update payment methods", updated: UPDATED },
      {
        title: "Browser Compatibility Issues",
        slug: "browser-compatibility",
        description: "Supported browsers, common display problems, clearing your cache, extensions that interfere and mobile support: fixes when AI Free Text Pro misbehaves.",
        updated: UPDATED,
      },
      { title: "Word Count Not Updating", slug: "word-count-issues", description: "Fix issues with word count tracking and limits", updated: UPDATED },
      { title: "Contact Support", slug: "contact-support", description: "Reach our support team for personalized help", updated: UPDATED },
    ],
  },
];

export const findHelpCollection = (id: string | undefined) => helpCollections.find((c) => c.id === id);

export const findHelpArticle = (collectionId: string | undefined, slug: string | undefined) =>
  findHelpCollection(collectionId)?.articles.find((a) => a.slug === slug);
