import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, CheckCircle, XCircle, Image, Play, Pause } from "lucide-react";

// Import blog post data - we need slugs and titles
const blogPosts = [
  { slug: "chatgpt-alternatives-essays", title: "ChatGPT Alternatives for Essay Writing (2026)" },
  { slug: "ai-blog-post-generator", title: "AI Blog Post Generator That Passes AI Detection (2026)" },
  { slug: "ai-essay-checker", title: "Best AI Essay Checker: Self-Check Before You Submit (2026)" },
  { slug: "make-ai-writing-creative", title: "How to Make AI Writing More Creative and Original" },
  { slug: "ai-content-at-scale", title: "AI Content at Scale: 100+ Articles Without Getting Flagged" },
  { slug: "ai-grant-writing", title: "AI for Grant Writing: Win Funding Without Detection (2026)" },
  { slug: "wordtune-vs-ai-free-text-pro", title: "Wordtune vs AI Free Text Pro: Rewriter vs Humanizer (2026)" },
  { slug: "ai-press-releases", title: "AI for Press Releases: Generate & Humanize (2026)" },
  { slug: "chatgpt-plus-ai-detection", title: "Can ChatGPT Plus Bypass AI Detection? (2026 Test)" },
  { slug: "ai-medical-scientific-writing", title: "AI for Medical & Scientific Writing: Detection-Free (2026)" },
  { slug: "humanize-chatgpt-text", title: "How to Humanize ChatGPT Text" },
  { slug: "best-ai-tools-students-2026", title: "Best AI Tools for Students in 2026" },
  { slug: "can-turnitin-detect-perplexity", title: "Can Turnitin Detect Perplexity AI?" },
  { slug: "turnitin-similarity-vs-ai-score", title: "Turnitin Similarity vs AI Score Explained" },
  { slug: "gptzero-accuracy-review", title: "GPTZero Accuracy Review 2026" },
  { slug: "ai-ghostwriter", title: "AI Ghostwriter: The Complete Guide" },
  { slug: "ai-dissertation-thesis", title: "AI for Dissertation & Thesis Writing" },
  { slug: "copyleaks-vs-turnitin", title: "Copyleaks vs Turnitin Comparison" },
  { slug: "ai-instagram-captions", title: "AI Instagram Captions Generator" },
  { slug: "ai-cover-letter-generator", title: "AI Cover Letter Generator" },
  { slug: "is-it-illegal-to-use-ai-for-school", title: "Is It Illegal to Use AI for School?" },
  { slug: "quillbot-vs-ai-free-text-pro", title: "Quillbot vs AI Free Text Pro" },
  { slug: "how-to-check-if-written-by-ai", title: "How to Check If Something Was Written by AI" },
  { slug: "how-to-cite-ai-generated-content", title: "How to Cite AI-Generated Content" },
  { slug: "ai-humanizer-for-blog-posts", title: "AI Humanizer for Blog Posts" },
  { slug: "ai-writing-high-school-students", title: "AI Writing for High School Students" },
  { slug: "turnitin-ai-detection-accuracy", title: "Turnitin AI Detection Accuracy" },
  { slug: "ai-disclosure-policies-2026", title: "AI Disclosure Policies 2026" },
  { slug: "ai-writing-for-freelancers", title: "AI Writing for Freelancers" },
  { slug: "chatgpt-vs-claude-vs-gemini-detection", title: "ChatGPT vs Claude vs Gemini Detection" },
  { slug: "how-to-detect-ai-generated-text", title: "How to Detect AI Generated Text" },
  { slug: "best-free-ai-humanizer-tools-2025", title: "Best Free AI Humanizer Tools" },
  { slug: "bypass-ai-detection-ethical-tips", title: "Bypass AI Detection: Ethical Tips" },
  { slug: "ai-detection-tools-compared-2025", title: "AI Detection Tools Compared" },
  { slug: "humanize-ai-text-without-losing-voice", title: "Humanize AI Text Without Losing Voice" },
  { slug: "ai-writing-students-avoid-plagiarism", title: "AI Writing for Students: Avoid Plagiarism" },
  { slug: "zerogpt-vs-ai-free-text-pro-2025", title: "ZeroGPT vs AI Free Text Pro" },
  { slug: "top-10-ai-humanizers-2025", title: "Top 10 AI Humanizers" },
  { slug: "how-ai-detectors-work-2025", title: "How AI Detectors Work" },
  { slug: "why-ai-content-fails-detection", title: "Why AI Content Fails Detection" },
  { slug: "best-ai-tools-for-writers-2025", title: "Best AI Tools for Writers" },
  { slug: "ai-creativity-vs-originality", title: "AI Creativity vs Originality" },
  { slug: "ai-detection-publishing-industry", title: "AI Detection in Publishing Industry" },
  { slug: "make-chatgpt-text-undetectable", title: "Make ChatGPT Text Undetectable" },
  { slug: "ai-detection-patterns-avoid", title: "AI Detection Patterns to Avoid" },
  { slug: "paraphrasing-vs-humanizing", title: "Paraphrasing vs Humanizing" },
  { slug: "gptinf-comparison-review", title: "GPTinf Comparison Review" },
  { slug: "originality-ai-review-2025", title: "Originality AI Review" },
  { slug: "pass-all-ai-detectors-guide", title: "Pass All AI Detectors Guide" },
  { slug: "ai-content-seo-optimization", title: "AI Content SEO Optimization" },
  { slug: "academic-ai-writing-safely", title: "Academic AI Writing Safely" },
  { slug: "write-naturally-with-ai-assistance", title: "Write Naturally With AI Assistance" },
  { slug: "editing-ai-drafts-human-editor", title: "Editing AI Drafts as Human Editor" },
  { slug: "tone-voice-flow-ai-writing", title: "Tone Voice Flow in AI Writing" },
  { slug: "how-ai-detectors-score-text", title: "How AI Detectors Score Text" },
  { slug: "signal-vs-noise-human-text", title: "Signal vs Noise in Human Text" },
  { slug: "bypass-ai-detection-complete-guide", title: "Bypass AI Detection Complete Guide" },
  { slug: "bypass-copyleaks-detection", title: "Bypass Copyleaks Detection" },
  { slug: "bypass-winston-ai-detection", title: "Bypass Winston AI Detection" },
  { slug: "bypass-zerogpt-detection", title: "Bypass ZeroGPT Detection" },
  { slug: "free-ai-content-detector", title: "Free AI Content Detector" },
  { slug: "ai-humanizer-resumes", title: "AI Humanizer for Resumes" },
  { slug: "ai-text-converter", title: "AI Text Converter" },
  { slug: "rewrite-ai-text", title: "Rewrite AI Text" },
  { slug: "remove-ai-detection", title: "Remove AI Detection" },
  { slug: "undetectable-ai-essay-writer", title: "Undetectable AI Essay Writer" },
  { slug: "undetectable-ai-alternatives", title: "Undetectable AI Alternatives" },
  { slug: "ai-detection-false-positives", title: "AI Detection False Positives" },
  { slug: "ai-writing-academia-2025", title: "AI Writing in Academia" },
  { slug: "humanize-ai-text-free-no-signup", title: "Humanize AI Text Free No Signup" },
  { slug: "best-chatgpt-prompts-for-essays", title: "Best ChatGPT Prompts for Essays" },
  { slug: "can-teachers-detect-chatgpt", title: "Can Teachers Detect ChatGPT?" },
  { slug: "best-ai-detector-for-teachers", title: "Best AI Detector for Teachers" },
  { slug: "ai-paraphrasing-tool-plagiarism", title: "AI Paraphrasing Tool & Plagiarism" },
  { slug: "ai-homework-helper", title: "AI Homework Helper" },
  { slug: "ai-product-descriptions", title: "AI Product Descriptions" },
  { slug: "ai-writing-business-reports", title: "AI Writing for Business Reports" },
  { slug: "ai-humanizer-travel-blogs", title: "AI Humanizer for Travel Blogs" },
  { slug: "humanize-ai-travel-blogs", title: "Humanize AI Travel Blogs" },
  { slug: "humanize-ai-stories", title: "Humanize AI Stories" },
  { slug: "ai-youtube-scripts", title: "AI YouTube Scripts" },
  { slug: "originality-ai-accuracy-false-positives", title: "Originality AI Accuracy & False Positives" },
  { slug: "gptzero-vs-turnitin", title: "GPTZero vs Turnitin" },
  { slug: "ai-detector-employers", title: "AI Detector for Employers" },
  { slug: "ai-for-research-papers", title: "AI for Research Papers" },
  { slug: "ai-humanization-pitfalls", title: "AI Humanization Pitfalls" },
  { slug: "write-ai-resistant-content", title: "Write AI-Resistant Content" },
  { slug: "ai-humanizers-email-marketing", title: "AI Humanizers for Email Marketing" },
  { slug: "ai-content-marketing-trends-2026", title: "AI Content Marketing Trends 2026" },
  { slug: "ai-powered-seo-content-2026", title: "AI Powered SEO Content 2026" },
  { slug: "humanize-ai-linkedin-2026", title: "Humanize AI for LinkedIn 2026" },
  { slug: "humanize-ai-social-media-2026", title: "Humanize AI for Social Media 2026" },
  { slug: "mastering-ai-email-campaigns-2026", title: "Mastering AI Email Campaigns 2026" },
  { slug: "top-10-ai-writing-tools-2026", title: "Top 10 AI Writing Tools 2026" },
  { slug: "zero-click-search-ai-2026", title: "Zero-Click Search AI 2026" },
  { slug: "ai-detectors-claude-gemini-gpt5", title: "AI Detectors: Claude, Gemini, GPT-5" },
  { slug: "can-turnitin-detect-deepseek", title: "Can Turnitin Detect DeepSeek?" },
  { slug: "chatgpt-college-essays", title: "ChatGPT for College Essays" },
  { slug: "claude-academic-writing", title: "Claude for Academic Writing" },
  { slug: "does-grammarly-trigger-ai-detection", title: "Does Grammarly Trigger AI Detection?" },
  { slug: "does-turnitin-detect-gemini", title: "Does Turnitin Detect Gemini?" },
  { slug: "turnitin-appeal", title: "How to Appeal Turnitin AI Detection" },
  { slug: "undetectable-ai-vs-ai-free-text-pro", title: "Undetectable AI vs AI Free Text Pro" },
];

type ThumbnailStatus = {
  slug: string;
  title: string;
  status: "pending" | "generating" | "done" | "error";
  imageUrl?: string;
  error?: string;
};

const AdminThumbnails = () => {
  const [thumbnails, setThumbnails] = useState<ThumbnailStatus[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load existing thumbnails on mount
  useEffect(() => {
    loadExisting();
  }, []);

  const loadExisting = async () => {
    const { data } = await supabase
      .from("blog_thumbnails")
      .select("slug, image_url");

    const existingMap = new Map(
      (data || []).map((t: any) => [t.slug, t.image_url])
    );

    setThumbnails(
      blogPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        status: existingMap.has(post.slug) ? "done" : "pending",
        imageUrl: existingMap.get(post.slug),
      }))
    );
  };

  const generateOne = async (slug: string, title: string, retries = 3): Promise<{ image_url: string } | null> => {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const { data, error } = await supabase.functions.invoke(
          "generate-blog-thumbnail",
          { body: { slug, title } }
        );

        if (error) {
          const errMsg = error.message || "";
          if ((errMsg.includes("non-2xx") || errMsg.includes("429")) && attempt < retries - 1) {
            const wait = 30000 + attempt * 15000;
            console.log(`Rate limited for ${slug}, retrying in ${wait / 1000}s (attempt ${attempt + 1}/${retries})`);
            await new Promise((r) => setTimeout(r, wait));
            continue;
          }
          throw new Error(errMsg);
        }
        if (data?.error) {
          if (data.error.includes("Rate limited") && attempt < retries - 1) {
            const wait = 30000 + attempt * 15000;
            console.log(`Rate limited for ${slug}, retrying in ${wait / 1000}s`);
            await new Promise((r) => setTimeout(r, wait));
            continue;
          }
          throw new Error(data.error);
        }
        return data;
      } catch (err: any) {
        if (attempt === retries - 1) {
          console.error(`Failed for ${slug} after ${retries} attempts:`, err);
          throw err;
        }
        const wait = 30000 + attempt * 15000;
        console.log(`Error for ${slug}, retrying in ${wait / 1000}s`);
        await new Promise((r) => setTimeout(r, wait));
      }
    }
    return null;
  };

  const startBatchGeneration = async () => {
    isRunningRef.current = true;
    setIsRunning(true);
    const pending = thumbnails
      .map((t, i) => ({ ...t, index: i }))
      .filter((t) => t.status === "pending");

    for (const item of pending) {
      if (!isRunningRef.current) break;

      setThumbnails((prev) =>
        prev.map((t, i) =>
          i === item.index ? { ...t, status: "generating" } : t
        )
      );
      setCurrentIndex(item.index);

      try {
        const result = await generateOne(item.slug, item.title);
        setThumbnails((prev) =>
          prev.map((t, i) =>
            i === item.index
              ? { ...t, status: "done", imageUrl: result?.image_url }
              : t
          )
        );
      } catch (err: any) {
        setThumbnails((prev) =>
          prev.map((t, i) =>
            i === item.index
              ? { ...t, status: "error", error: err.message }
              : t
          )
        );
        // Longer delay after error (rate limit recovery)
        await new Promise((r) => setTimeout(r, 20000));
      }

      // Longer delay between generations to avoid rate limits
      await new Promise((r) => setTimeout(r, 15000));
    }

    setIsRunning(false);
    toast.success("Batch generation complete!");
  };

  const stopGeneration = () => {
    isRunningRef.current = false;
    setIsRunning(false);
  };

  const retryFailed = () => {
    setThumbnails((prev) =>
      prev.map((t) =>
        t.status === "error" ? { ...t, status: "pending", error: undefined } : t
      )
    );
  };

  const stats = {
    done: thumbnails.filter((t) => t.status === "done").length,
    pending: thumbnails.filter((t) => t.status === "pending").length,
    error: thumbnails.filter((t) => t.status === "error").length,
    total: thumbnails.length,
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Blog Thumbnail Generator</h1>
        <p className="text-muted-foreground mb-6">
          Generate unique AI thumbnails for all {stats.total} blog posts.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">{stats.done}</div>
            <div className="text-sm text-muted-foreground">Done</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">{stats.error}</div>
            <div className="text-sm text-muted-foreground">Failed</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </Card>
        </div>

        {/* Controls */}
        <div className="flex gap-3 mb-8">
          {!isRunning ? (
            <Button onClick={startBatchGeneration} disabled={stats.pending === 0}>
              <Play className="w-4 h-4 mr-2" />
              Generate {stats.pending} Remaining
            </Button>
          ) : (
            <Button onClick={stopGeneration} variant="destructive">
              <Pause className="w-4 h-4 mr-2" />
              Stop Generation
            </Button>
          )}
          {stats.error > 0 && (
            <Button variant="outline" onClick={retryFailed}>
              Retry {stats.error} Failed
            </Button>
          )}
          <Button variant="outline" onClick={loadExisting}>
            Refresh Status
          </Button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {thumbnails.map((t) => (
            <Card key={t.slug} className="overflow-hidden">
              <div className="h-32 bg-muted flex items-center justify-center relative">
                {t.status === "done" && t.imageUrl ? (
                  <img
                    src={t.imageUrl}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                ) : t.status === "generating" ? (
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                ) : t.status === "error" ? (
                  <XCircle className="w-8 h-8 text-red-500" />
                ) : (
                  <Image className="w-8 h-8 text-muted-foreground" />
                )}
                {t.status === "done" && (
                  <CheckCircle className="absolute top-2 right-2 w-5 h-5 text-green-500 bg-background rounded-full" />
                )}
              </div>
              <div className="p-3">
                <p className="text-xs font-medium line-clamp-2">{t.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.slug}</p>
                {t.error && (
                  <p className="text-xs text-red-500 mt-1">{t.error}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminThumbnails;
