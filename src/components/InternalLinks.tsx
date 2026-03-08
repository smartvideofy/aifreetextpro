import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Target, Users, Sparkles } from "lucide-react";

interface InternalLinksProps {
  currentPage?: string;
  showTitle?: boolean;
  variant?: "compact" | "full" | "inline";
}

// Key internal pages to link to for SEO
const keyPages = [
  {
    title: "AI Detector",
    href: "/ai-checker",
    description: "Check if text is AI-generated with 98% accuracy",
    icon: Shield,
    category: "tool"
  },
  {
    title: "Bypass Turnitin",
    href: "/bypass-turnitin-ai-detection",
    description: "Make AI content undetectable by Turnitin",
    icon: Target,
    category: "bypass"
  },
  {
    title: "Bypass GPTZero",
    href: "/bypass-gptzero-detection",
    description: "Pass GPTZero AI detection",
    icon: Target,
    category: "bypass"
  },
  {
    title: "Bypass Originality.AI",
    href: "/bypass-originality-ai",
    description: "Humanize content for Originality.AI",
    icon: Target,
    category: "bypass"
  },
  {
    title: "For Students",
    href: "/ai-humanizer-for-students",
    description: "AI humanizer designed for academic use",
    icon: Users,
    category: "usecase"
  },
  {
    title: "For Writers",
    href: "/ai-humanizer-for-writers",
    description: "Professional AI writing tools for content creators",
    icon: Users,
    category: "usecase"
  },
  {
    title: "Academic Writing",
    href: "/academic-ai-writing-tool",
    description: "AI tools for thesis and essay writing",
    icon: BookOpen,
    category: "usecase"
  },
  {
    title: "vs WriteHuman",
    href: "/vs-writehuman",
    description: "Compare AI Free Text Pro to WriteHuman",
    icon: Sparkles,
    category: "compare"
  },
  {
    title: "vs Undetectable AI",
    href: "/vs-undetectable-ai",
    description: "AI Free Text Pro vs Undetectable.AI comparison",
    icon: Sparkles,
    category: "compare"
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "View plans and pricing",
    icon: Shield,
    category: "main"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "AI writing tips and guides",
    icon: BookOpen,
    category: "main"
  }
];

const blogPosts = [
  { title: "How AI Detectors Work", href: "/blog/how-ai-detectors-work" },
  { title: "Humanize AI Text Guide", href: "/blog/humanize-ai-text-without-losing-voice" },
  { title: "AI Writing for Students", href: "/blog/ai-writing-students-avoid-plagiarism" },
  { title: "Top 10 AI Humanizers", href: "/blog/top-10-ai-humanizer-tools-2025" },
  { title: "Bypass AI Detection", href: "/blog/bypass-ai-detection-guide" },
  { title: "AI Detection Patterns", href: "/blog/ai-detection-patterns-explained" },
  { title: "AI Content for SEO", href: "/blog/ai-content-seo-undetectable" },
  { title: "Academic AI Writing", href: "/blog/academic-ai-writing-safely" },
  { title: "Originality.AI Review", href: "/blog/originality-ai-review-how-to-beat" },
  { title: "Pass All AI Detectors", href: "/blog/pass-all-ai-detectors-guide" },
  { title: "Make ChatGPT Undetectable", href: "/blog/make-chatgpt-undetectable-2025" },
  { title: "GPTinf Comparison", href: "/blog/gptinf-vs-ai-free-text-pro" },
  { title: "Paraphrasing vs Humanizing", href: "/blog/paraphrasing-vs-humanizing" },
  { title: "Bypass ZeroGPT", href: "/blog/bypass-zerogpt-ai-detection" },
  { title: "Bypass Winston AI", href: "/blog/bypass-winston-ai-detection" },
  { title: "Bypass Copyleaks", href: "/blog/bypass-copyleaks-ai-detection" },
  { title: "How AI Detectors Score Text", href: "/blog/how-ai-detectors-score-text" },
  { title: "Signal vs Noise in Human Text", href: "/blog/signal-vs-noise-human-text" },
  { title: "AI Humanization Pitfalls", href: "/blog/ai-humanization-pitfalls" },
  { title: "Tone Voice Flow AI Writing", href: "/blog/tone-voice-flow-ai-writing" },
  { title: "Edit AI Drafts Like a Pro", href: "/blog/editing-ai-drafts-human-editor" },
  { title: "Write Naturally with AI", href: "/blog/how-to-write-naturally-with-ai" },
  { title: "Best Free AI Humanizers", href: "/blog/best-free-ai-humanizer-tools-2025" },
  { title: "ZeroGPT Comparison", href: "/blog/zerogpt-vs-ai-free-text-pro-2025" },
  { title: "Can Teachers Detect ChatGPT?", href: "/blog/can-teachers-detect-chatgpt" },
  { title: "Can Turnitin Detect DeepSeek?", href: "/blog/can-turnitin-detect-deepseek" },
  { title: "ChatGPT Prompts for Essays", href: "/blog/best-chatgpt-prompts-for-essays" },
  { title: "AI Detection False Positives", href: "/blog/ai-detection-false-positives" },
  { title: "Humanize AI Text Free", href: "/blog/humanize-ai-text-free-no-signup" },
  { title: "GPTZero vs Turnitin", href: "/blog/gptzero-vs-turnitin-comparison" },
  { title: "Is AI for School Illegal?", href: "/blog/is-it-illegal-to-use-ai-for-school" },
  { title: "How to Cite AI Content", href: "/blog/how-to-cite-ai-generated-content" },
  { title: "ChatGPT vs Claude vs Gemini", href: "/blog/chatgpt-vs-claude-vs-gemini-detection" },
  { title: "AI for High School Students", href: "/blog/ai-writing-high-school-students" },
  { title: "Check If Written by AI", href: "/blog/how-to-check-if-written-by-ai" },
  { title: "Quillbot vs AI Free Text Pro", href: "/blog/quillbot-vs-ai-free-text-pro" },
  { title: "Turnitin AI Detection Accuracy", href: "/blog/turnitin-ai-detection-accuracy" },
  { title: "AI Humanizer for Blog Posts", href: "/blog/ai-humanizer-for-blog-posts" },
  { title: "Originality.AI Accuracy", href: "/blog/originality-ai-accuracy-false-positives" },
  { title: "Remove AI Detection", href: "/blog/remove-ai-detection-from-text" },
  { title: "Undetectable AI Essay Writer", href: "/blog/best-ai-essay-writer-undetectable" },
  { title: "AI Paraphrasing Tool", href: "/blog/ai-paraphrasing-tool-avoid-plagiarism" },
  { title: "AI Homework Helper", href: "/blog/ai-homework-helper-undetectable" },
  { title: "Rewrite AI Text", href: "/blog/rewrite-ai-text-sound-human" },
  { title: "Appeal Turnitin Results", href: "/blog/turnitin-appeal-ai-detection" },
  { title: "Free AI Content Detector", href: "/blog/free-ai-content-detector" },
  { title: "ChatGPT for College Essays", href: "/blog/chatgpt-college-essays-detection" },
  { title: "AI Text Converter", href: "/blog/ai-text-converter-human" },
  { title: "Does Turnitin Detect Gemini?", href: "/blog/does-turnitin-detect-gemini" },
  { title: "AI Detector for Employers", href: "/blog/ai-writing-detector-employers" },
  { title: "Undetectable AI Alternatives", href: "/blog/undetectable-ai-alternatives" },
  { title: "Claude Academic Writing", href: "/blog/claude-academic-writing-undetectable" },
];

export const InternalLinks = ({ currentPage, showTitle = true, variant = "compact" }: InternalLinksProps) => {
  // Filter out current page from links
  const filteredPages = keyPages.filter(page => page.href !== currentPage);
  const filteredBlogPosts = blogPosts.filter(post => post.href !== currentPage);
  
  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-2 text-sm">
        {filteredPages.slice(0, 6).map((page) => (
          <Link 
            key={page.href} 
            to={page.href}
            className="text-primary hover:text-primary/80 hover:underline"
          >
            {page.title}
          </Link>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="my-8 p-6 bg-muted/50 rounded-lg border border-border">
        {showTitle && (
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            Related Resources
          </h3>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {filteredPages.slice(0, 6).map((page) => (
            <Link 
              key={page.href} 
              to={page.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
            >
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              {page.title}
            </Link>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm font-medium mb-2">Popular Blog Posts:</p>
          <div className="grid grid-cols-2 gap-2">
            {filteredBlogPosts.slice(0, 6).map((post) => (
              <Link 
                key={post.href} 
                to={post.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                → {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {showTitle && (
          <h2 className="text-2xl font-bold mb-8 text-center">Explore More AI Tools & Resources</h2>
        )}
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Bypass Tools */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Bypass Guides
            </h3>
            <ul className="space-y-2">
              {filteredPages.filter(p => p.category === "bypass").map((page) => (
                <li key={page.href}>
                  <Link to={page.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Use Cases
            </h3>
            <ul className="space-y-2">
              {filteredPages.filter(p => p.category === "usecase").map((page) => (
                <li key={page.href}>
                  <Link to={page.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Compare Tools
            </h3>
            <ul className="space-y-2">
              {filteredPages.filter(p => p.category === "compare").map((page) => (
                <li key={page.href}>
                  <Link to={page.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              Popular Guides
            </h3>
            <ul className="space-y-2">
              {filteredBlogPosts.slice(0, 5).map((post) => (
                <li key={post.href}>
                  <Link to={post.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
