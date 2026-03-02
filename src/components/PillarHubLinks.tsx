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
