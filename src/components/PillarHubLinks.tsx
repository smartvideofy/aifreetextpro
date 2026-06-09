import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, Sparkles, Pen, BookOpen, Users, GraduationCap } from "lucide-react";

// Define the 4 pillar hubs and their spoke pages
export const pillarHubs = {
  humanizer: {
    name: "AI Humanizer Hub",
    href: "/",
    icon: Pen,
    description: "Free AI humanizer tool with 98% accuracy",
    spokes: [
      { title: "For Students", href: "/ai-humanizer-for-students", description: "Academic AI humanizer for students" },
      { title: "For Writers", href: "/ai-humanizer-for-writers", description: "Professional AI writing for content creators" },
      { title: "Academic Writing", href: "/academic-ai-writing-tool", description: "AI tools for thesis and essay writing" },
      { title: "Humanize AI Text Guide", href: "/blog/humanize-ai-text-without-losing-voice", description: "Step-by-step humanization guide" },
      { title: "Top 10 AI Humanizers", href: "/blog/top-10-ai-humanizer-tools-2025", description: "Best AI humanizers compared" },
      { title: "Best Free Humanizers", href: "/blog/best-free-ai-humanizer-tools-2025", description: "Free AI humanizer tools ranked" },
      { title: "Paraphrasing vs Humanizing", href: "/blog/paraphrasing-vs-humanizing", description: "Key differences explained" },
      { title: "Write Naturally with AI", href: "/blog/how-to-write-naturally-with-ai", description: "Natural AI writing techniques" },
      { title: "Humanize AI Travel Blogs", href: "/blog/humanize-ai-travel-blogs", description: "Make travel content sound human" },
      { title: "AI Humanizer for Travel Blogs", href: "/blog/ai-humanizer-travel-blogs", description: "Travel writing humanization" },
      { title: "Humanize AI for Social Media", href: "/blog/humanize-ai-social-media-2026", description: "Social-ready humanized AI text" },
      { title: "Humanize AI for LinkedIn", href: "/blog/humanize-ai-linkedin-2026", description: "Professional LinkedIn humanization" },
      { title: "Humanizers for Email Marketing", href: "/blog/ai-humanizers-for-email-marketing", description: "Humanize AI marketing emails" },
      { title: "Humanize AI Stories & Fiction", href: "/blog/humanize-ai-generated-stories-fiction", description: "Narrative humanization tips" },
      { title: "Humanize AI Free No Signup", href: "/blog/humanize-ai-text-free-no-signup", description: "Free humanizer with no signup" },
      { title: "Rewrite AI to Sound Human", href: "/blog/rewrite-ai-text-sound-human", description: "Make AI text sound natural" },
      { title: "Make AI Writing Creative", href: "/blog/make-ai-writing-creative", description: "Add creativity to AI drafts" },
      { title: "Tone, Voice & Flow", href: "/blog/tone-voice-flow-ai-writing", description: "Tune voice in AI writing" },
      { title: "Paraphrasing vs Humanizing AI", href: "/blog/paraphrasing-vs-humanizing-ai-text", description: "Differences explained in depth" },
      { title: "AI Email Campaigns 2026", href: "/blog/mastering-ai-powered-email-campaigns-2026", description: "Master AI-powered email" },
      { title: "AI Tools for Writers 2025", href: "/blog/ai-tools-for-writers-2025", description: "Top AI tools for writers" },
      { title: "AI Content Marketing Trends 2026", href: "/blog/ai-content-marketing-trends-2026", description: "2026 AI marketing trends" },
      { title: "Zero-Click Search & AI 2026", href: "/blog/zero-click-search-ai-2026", description: "Zero-click & AI search" },
      { title: "AI Writing in Academia", href: "/blog/ai-writing-academia", description: "Academic AI writing guide" },
      { title: "AI YouTube Scripts", href: "/blog/ai-youtube-scripts", description: "Write YouTube scripts with AI" },
      { title: "AI Product Descriptions", href: "/blog/ai-product-descriptions", description: "AI for product copy" },
      { title: "AI Writing for Freelancers", href: "/blog/ai-writing-for-freelancers", description: "Freelance with AI tools" },
      { title: "AI Business Reports & Emails", href: "/blog/ai-writing-business-reports-emails", description: "AI for business writing" },
      { title: "AI Instagram Captions", href: "/blog/ai-instagram-captions", description: "Caption ideas with AI" },
      { title: "AI Blog Post Generator", href: "/blog/ai-blog-post-generator", description: "Generate blog posts with AI" },
      { title: "AI Content at Scale", href: "/blog/ai-content-at-scale", description: "Scale content with AI" },
      { title: "AI Grant Writing", href: "/blog/ai-grant-writing", description: "AI-assisted grant proposals" },
      { title: "AI Press Releases", href: "/blog/ai-press-releases", description: "Write press releases with AI" },
      { title: "AI Medical & Scientific Writing", href: "/blog/ai-medical-scientific-writing", description: "AI for medical content" },
      { title: "AI Content for SEO Articles", href: "/blog/ai-content-seo", description: "AI content optimized for SEO" },
      { title: "AI Legal Writing", href: "/blog/ai-legal-writing-law-school", description: "AI for law school writing" },
      { title: "AI Twitter Thread Generator", href: "/blog/ai-twitter-thread-generator", description: "Generate threads with AI" },
      { title: "AI for Nursing & Healthcare", href: "/blog/ai-writing-nursing-healthcare-students", description: "AI writing for healthcare" },
      { title: "AI for Upwork & Fiverr", href: "/blog/ai-writing-upwork-fiverr-freelancers", description: "Win gigs with AI writing" },
    ],
  },
  detection: {
    name: "AI Detection Hub",
    href: "/ai-checker",
    icon: Shield,
    description: "Free AI detector with 98% accuracy",
    spokes: [
      { title: "How AI Detectors Work", href: "/blog/how-ai-detectors-work", description: "Detection technology explained" },
      { title: "AI Detection Patterns", href: "/blog/ai-detection-patterns-explained", description: "5 patterns detectors look for" },
      { title: "How Detectors Score Text", href: "/blog/how-ai-detectors-score-text", description: "Scoring algorithms decoded" },
      { title: "Signal vs Noise", href: "/blog/signal-vs-noise-human-text", description: "What separates human from AI text" },
      { title: "AI Detection Comparison", href: "/blog/ai-detection-tools-compared-2025", description: "All major detectors compared" },
      { title: "False Positives Guide", href: "/blog/ai-detection-false-positives", description: "Why false positives happen" },
      { title: "How to Detect AI Text", href: "/blog/how-to-detect-ai-generated-text", description: "Complete detection guide" },
      { title: "Check If Written by AI", href: "/blog/how-to-check-if-written-by-ai", description: "Quick verification methods" },
      { title: "Why AI Content Fails Review", href: "/blog/why-ai-content-fails-human-review", description: "Why human reviewers catch AI" },
      { title: "AI Detection in Publishing", href: "/blog/ai-detection-in-publishing-2025", description: "Detection in modern publishing" },
      { title: "Does Grammarly Trigger Detection?", href: "/blog/does-grammarly-trigger-ai-detection", description: "Grammarly + AI detector myths" },
      { title: "Best AI Detector for Teachers", href: "/blog/best-ai-detector-for-teachers", description: "Top detectors for educators" },
      { title: "Free AI Content Detector", href: "/blog/free-ai-content-detector", description: "Best free AI detectors" },
      { title: "AI Essay Checker", href: "/blog/ai-essay-checker", description: "Check essays for AI signals" },
      { title: "ChatGPT Plus Detection", href: "/blog/chatgpt-plus-detection", description: "Detection of ChatGPT Plus output" },
      { title: "Perplexity & Burstiness Patterns", href: "/blog/ai-detection-patterns-perplexity-burstiness", description: "Two core detector metrics" },
      { title: "Does Turnitin Detect ChatGPT?", href: "/blog/does-turnitin-detect-chatgpt", description: "Turnitin vs ChatGPT analysis" },
      { title: "Can AI Writing Be Original?", href: "/blog/can-ai-writing-be-original", description: "Originality and AI text" },
    ],
  },
  bypass: {
    name: "Turnitin Bypass Hub",
    href: "/bypass-turnitin-ai-detection",
    icon: Target,
    description: "Bypass all AI detectors with 99.8% success",
    spokes: [
      { title: "Bypass GPTZero", href: "/bypass-gptzero-detection", description: "98.9% GPTZero bypass rate" },
      { title: "Bypass Originality.AI", href: "/bypass-originality-ai", description: "97.5% Originality bypass rate" },
      { title: "Bypass AI Detection Guide", href: "/blog/bypass-ai-detection-guide", description: "Complete bypass strategy" },
      { title: "Make ChatGPT Undetectable", href: "/blog/make-chatgpt-undetectable-2025", description: "ChatGPT humanization guide" },
      { title: "Pass All Detectors", href: "/blog/pass-all-ai-detectors-guide", description: "Universal bypass guide" },
      { title: "Bypass Copyleaks", href: "/blog/bypass-copyleaks-ai-detection", description: "Copyleaks bypass methods" },
      { title: "Bypass Winston AI", href: "/blog/bypass-winston-ai-detection", description: "Winston AI bypass strategies" },
      { title: "Bypass ZeroGPT", href: "/blog/bypass-zerogpt-ai-detection", description: "ZeroGPT bypass techniques" },
      { title: "Turnitin Accuracy", href: "/blog/turnitin-ai-detection-accuracy", description: "Turnitin detection analysis" },
      { title: "Can Turnitin Detect DeepSeek?", href: "/blog/can-turnitin-detect-deepseek", description: "DeepSeek detection analysis" },
      { title: "Ethical Bypass Tips", href: "/blog/bypass-ai-detection-ethical-tips", description: "Ethical ways to lower AI flags" },
      { title: "Write AI-Resistant Content", href: "/blog/write-ai-resistant-content", description: "Writing that resists detection" },
      { title: "Remove AI Detection From Text", href: "/blog/remove-ai-detection-from-text", description: "Remove AI fingerprints" },
      { title: "Best Undetectable Essay Writer", href: "/blog/best-ai-essay-writer-undetectable", description: "Top undetectable essay tools" },
      { title: "AI Paraphraser vs Plagiarism", href: "/blog/ai-paraphrasing-tool-avoid-plagiarism", description: "Paraphrasing without plagiarism" },
      { title: "AI Homework Helper Undetectable", href: "/blog/ai-homework-helper-undetectable", description: "Undetectable homework AI" },
      { title: "AI Ghostwriter", href: "/blog/ai-ghostwriter", description: "Using AI as a ghostwriter" },
      { title: "AI Content for SEO (Undetectable)", href: "/blog/ai-content-seo-undetectable-articles", description: "Undetectable SEO content" },
      { title: "Originality.AI Review & Bypass", href: "/blog/originality-ai-review-pricing-bypass", description: "Review + bypass strategies" },
      { title: "Make ChatGPT Undetectable Guide", href: "/blog/make-chatgpt-undetectable-guide-2025", description: "Full undetectable guide" },
      { title: "Academic AI Thesis Safely", href: "/blog/academic-ai-writing-thesis-essays-safely", description: "Safe academic AI use" },
      { title: "Editing AI Drafts as a Human", href: "/blog/editing-ai-drafts-human-editor", description: "Human-edit AI drafts" },
    ],
  },
  comparison: {
    name: "Compare AI Tools",
    href: "/compare-ai-humanizers",
    icon: Sparkles,
    description: "Side-by-side AI humanizer comparisons",
    spokes: [
      { title: "vs WriteHuman", href: "/vs-writehuman", description: "98% vs 92% bypass rate comparison" },
      { title: "vs Undetectable AI", href: "/vs-undetectable-ai", description: "$4.99 vs $9.99/mo value comparison" },
      { title: "vs HumanizeAI.pro", href: "/vs-humanizeai-pro", description: "60% cheaper with better features" },
      { title: "GPTinf Comparison", href: "/blog/gptinf-vs-ai-free-text-pro", description: "GPTinf vs AI Free Text Pro" },
      { title: "Quillbot Comparison", href: "/blog/quillbot-vs-ai-free-text-pro", description: "Quillbot vs AI Free Text Pro" },
      { title: "Undetectable AI Comparison", href: "/blog/undetectable-ai-vs-ai-free-text-pro", description: "Deep-dive blog comparison" },
      { title: "ZeroGPT Comparison", href: "/blog/zerogpt-vs-ai-free-text-pro-2025", description: "ZeroGPT vs AI Free Text Pro" },
      { title: "GPTZero vs Turnitin", href: "/blog/gptzero-vs-turnitin-comparison", description: "Detector comparison" },
      { title: "ChatGPT vs Claude vs Gemini", href: "/blog/chatgpt-vs-claude-vs-gemini-detection", description: "AI model detection rates" },
    ],
  },
};

// Helper to find which hub a page belongs to
export function getParentHub(currentPath: string): { name: string; href: string; icon: typeof Pen } | null {
  for (const hub of Object.values(pillarHubs)) {
    if (hub.href === currentPath) return null; // Page IS the hub
    for (const spoke of hub.spokes) {
      if (spoke.href === currentPath) {
        return { name: hub.name, href: hub.href, icon: hub.icon };
      }
    }
  }
  return null;
}

interface PillarHubLinksProps {
  /** Which hub to render spokes for */
  hub: keyof typeof pillarHubs;
  /** Current page path to exclude from links */
  currentPage?: string;
  /** How many spokes to show */
  limit?: number;
  /** Section title override */
  title?: string;
}

/**
 * Renders a hub's spoke links as a navigable section.
 * Used on pillar pages to link to all spokes in that hub.
 */
export const PillarHubLinks = ({ hub, currentPage, limit, title }: PillarHubLinksProps) => {
  const hubData = pillarHubs[hub];
  const spokes = hubData.spokes.filter(s => s.href !== currentPage);
  const displaySpokes = limit ? spokes.slice(0, limit) : spokes;
  const HubIcon = hubData.icon;

  return (
    <section className="py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <HubIcon className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-bold">{title || hubData.name}</h2>
        </div>
        <p className="text-muted-foreground">{hubData.description}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displaySpokes.map((spoke) => (
          <Link
            key={spoke.href}
            to={spoke.href}
            className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            <h3 className="font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
              {spoke.title}
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{spoke.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

/**
 * Small breadcrumb-style link back to the parent hub.
 * Used on spoke pages to link back to their pillar.
 */
export const HubBackLink = ({ currentPath }: { currentPath: string }) => {
  const parentHub = getParentHub(currentPath);
  if (!parentHub) return null;
  const Icon = parentHub.icon;

  return (
    <div className="mb-6">
      <Link
        to={parentHub.href}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
      >
        <Icon className="w-4 h-4" />
        <span>Part of <span className="font-medium text-foreground group-hover:text-primary">{parentHub.name}</span></span>
        <ArrowRight className="w-3 h-3 rotate-180" />
      </Link>
    </div>
  );
};

/**
 * Cross-hub navigation showing all 4 hubs.
 * Used on hub pages to link to sibling hubs.
 */
export const CrossHubNav = ({ currentHub }: { currentHub: keyof typeof pillarHubs }) => {
  const otherHubs = Object.entries(pillarHubs).filter(([key]) => key !== currentHub);

  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Explore All Resource Hubs</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {otherHubs.map(([key, hub]) => {
          const Icon = hub.icon;
          return (
            <Link
              key={key}
              to={hub.href}
              className="group p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all bg-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{hub.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{hub.description}</p>
              <p className="text-xs text-primary font-medium">
                {hub.spokes.length} resources →
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PillarHubLinks;
