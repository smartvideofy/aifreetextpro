import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, BookOpen, Search, X, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const blogPosts = [
  {
    slug: "how-to-write-naturally-with-ai",
    title: "How to Write Naturally with AI: A Complete Guide",
    excerpt: "Learn the art of crafting natural, engaging content with AI assistance. Discover techniques for prompting, structuring, and refining AI-generated text.",
    date: "2024-12-20",
    readTime: "14 min read",
    category: "Writing Craft"
  },
  {
    slug: "editing-ai-drafts-human-editor",
    title: "Editing AI Drafts Like a Human Editor",
    excerpt: "Professional editing techniques to transform AI-generated drafts into polished, publication-ready content that reads authentically human.",
    date: "2024-12-18",
    readTime: "12 min read",
    category: "Professional Editing"
  },
  {
    slug: "tone-voice-flow-ai-writing",
    title: "Tone, Voice, and Flow in AI-Assisted Writing",
    excerpt: "Master the three pillars of great writing: tone sets emotional temperature, voice creates distinctiveness, and flow carries readers forward.",
    date: "2024-12-16",
    readTime: "11 min read",
    category: "Writing Craft"
  },
  {
    slug: "make-chatgpt-undetectable-2025",
    title: "How to Improve AI Writing Quality: The Complete 2025 Guide",
    excerpt: "The complete playbook for transforming AI-generated content into natural, human-quality writing that reads authentically.",
    date: "2024-12-15",
    readTime: "15 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-detection-patterns-explained",
    title: "AI vs. Human: 5 Subtle Linguistic Patterns AI Detectors Look For",
    excerpt: "Discover the 5 linguistic patterns AI detectors analyze including perplexity, burstiness, and predictability.",
    date: "2024-12-08",
    readTime: "12 min read",
    category: "Educational"
  },
  {
    slug: "paraphrasing-vs-humanizing",
    title: "Paraphrasing vs. Humanizing: Why Marketers Need a True AI Humanizer",
    excerpt: "Understand the critical difference between AI paraphrasing and humanizing. Learn why simple paraphrasers fail to produce natural-sounding content.",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Marketing"
  },
  {
    slug: "gptinf-vs-ai-free-text-pro",
    title: "GPTinf vs. AI Free Text Pro: Which Humanizer Produces Better Results?",
    excerpt: "Detailed comparison of GPTinf and AI Free Text Pro humanizers with real test results and pricing analysis.",
    date: "2024-11-24",
    readTime: "11 min read",
    category: "Comparison"
  },
  {
    slug: "originality-ai-review-how-to-beat",
    title: "Originality.AI Detector Review: Accuracy, Pricing, and How It Works",
    excerpt: "Complete Originality.AI review covering accuracy, pricing, and what makes content appear more human-like.",
    date: "2024-11-17",
    readTime: "13 min read",
    category: "Detector Review"
  },
  {
    slug: "pass-all-ai-detectors-guide",
    title: "The Definitive Guide to Writing Human-Like Content (2025)",
    excerpt: "How to create naturally human content that reads authentically across GPTZero, Turnitin, Originality.AI, and more.",
    date: "2024-11-10",
    readTime: "14 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-content-seo-undetectable",
    title: "AI Content for SEO: How to Generate Natural Articles That Rank",
    excerpt: "Learn how to use AI for SEO content at scale while ensuring articles sound natural and rank well in search.",
    date: "2024-11-03",
    readTime: "14 min read",
    category: "SEO"
  },
  {
    slug: "academic-ai-writing-safely",
    title: "Maintaining Academic Integrity: Using AI to Write Thesis and Essays Responsibly",
    excerpt: "A thoughtful guide to leveraging AI writing tools responsibly while preserving academic integrity principles.",
    date: "2024-10-27",
    readTime: "12 min read",
    category: "Academic"
  },
  {
    slug: "ai-detection-tools-compared-2025",
    title: "AI Detection Tools Compared: GPTZero vs AI Free Text Pro vs Rewritify",
    excerpt: "See which AI detector is most accurate. We compare GPTZero, Rewritify, and AI Free Text Pro in real-world tests.",
    date: "2024-10-20",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "humanize-ai-text-without-losing-voice",
    title: "How to Humanize AI-Generated Text Without Losing Your Voice",
    excerpt: "Learn proven strategies and tools to make ChatGPT or Gemini text sound naturally human while keeping your tone.",
    date: "2024-10-13",
    readTime: "10 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-writing-students-avoid-plagiarism",
    title: "AI Writing for Students: How to Use AI Responsibly in Academia",
    excerpt: "Discover responsible ways to use AI writing assistants in academia while maintaining academic integrity standards.",
    date: "2024-10-06",
    readTime: "11 min read",
    category: "Academic"
  },
  {
    slug: "zerogpt-vs-ai-free-text-pro-2025",
    title: "ZeroGPT vs AI Free Text Pro: Which Tool Is More Accurate?",
    excerpt: "We test ZeroGPT and AI Free Text Pro on different writing samples — see which tool spots AI content more accurately.",
    date: "2024-09-29",
    readTime: "8 min read",
    category: "Comparison"
  },
  {
    slug: "top-10-ai-humanizer-tools-2025",
    title: "Top 10 AI Humanizer Tools for 2025 (Free & Paid)",
    excerpt: "A curated list of the top AI humanizers this year — features, pricing, and accuracy ratings included.",
    date: "2024-09-22",
    readTime: "12 min read",
    category: "Comparison"
  },
  {
    slug: "how-ai-detectors-work",
    title: "How AI Detectors Work: Inside the Science of AI Text Analysis",
    excerpt: "Understand the machine-learning and linguistic patterns behind AI detectors and how to write authentically human content.",
    date: "2024-09-15",
    readTime: "10 min read",
    category: "Educational"
  },
  {
    slug: "why-ai-content-fails-human-review",
    title: "Why Most AI Content Fails Human Review (and How to Fix It)",
    excerpt: "Discover why AI-generated content still gets flagged and the practical steps to make your writing sound more natural.",
    date: "2024-09-08",
    readTime: "9 min read",
    category: "How-To Guide"
  },
  {
    slug: "ai-tools-for-writers-2025",
    title: "AI Tools for Writers: Boost Creativity and Productivity in 2025",
    excerpt: "The best AI writing tools to plan, edit, and refine your stories and essays — including AI Free Text Pro for authenticity checks.",
    date: "2024-09-01",
    readTime: "11 min read",
    category: "Tools"
  },
  {
    slug: "can-ai-writing-be-original",
    title: "Can AI Writing Be Truly Original? Exploring Creativity in the Age of GPT",
    excerpt: "Explore how AI can assist rather than replace creativity — what 'original' means in the era of ChatGPT and humanizers.",
    date: "2024-08-25",
    readTime: "10 min read",
    category: "Educational"
  },
  {
    slug: "ai-detection-in-publishing-2025",
    title: "AI Detection in Publishing: How Editors and Writers Can Adapt",
    excerpt: "How editors and publishers are adapting to AI-generated content — and why AI Free Text Pro is part of the solution.",
    date: "2024-08-18",
    readTime: "12 min read",
    category: "Industry"
  },
  {
    slug: "how-to-detect-ai-generated-text",
    title: "How to Detect AI-Generated Text: Complete Guide",
    excerpt: "Learn the proven techniques and tools to identify AI-generated content. Discover key patterns, linguistic markers, and detection strategies used by experts.",
    date: "2024-08-11",
    readTime: "8 min read",
    category: "How-To Guide"
  },
  {
    slug: "best-free-ai-humanizer-tools-2025",
    title: "Best Free AI Humanizer Tools in 2025",
    excerpt: "Compare the top free AI humanizer tools available today. Find out which tool works best for your needs, from academic writing to content creation.",
    date: "2024-08-04",
    readTime: "10 min read",
    category: "Tools"
  },
  {
    slug: "bypass-ai-detection-ethical-tips",
    title: "Improve AI Writing Quality: Ethical Tips & Best Practices",
    excerpt: "Discover ethical strategies to make AI-assisted content more human-like. Learn techniques that improve writing quality while maintaining authenticity.",
    date: "2024-07-28",
    readTime: "7 min read",
    category: "How-To Guide"
  }
];

// Extract unique categories
const allCategories = [...new Set(blogPosts.map(post => post.category))].sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
        <title>AI Writing Blog - Tips, Guides & Tools | AI Free Text Pro</title>
        <meta name="description" content="Expert guides on AI detection, humanization tools, and writing tips. Learn how to detect AI-generated text, use AI humanizers effectively, and improve your content quality." />
        <meta name="keywords" content="ai writing blog, ai detection guide, humanizer tools, ai content tips, writing improvement, ai text analysis" />
        <link rel="canonical" href="https://aifreetextpro.com/blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Writing Blog - Tips, Guides & Tools" />
        <meta property="og:description" content="Expert guides on AI detection, humanization tools, and writing tips." />
        <meta property="og:url" content="https://aifreetextpro.com/blog" />
        <meta property="og:type" content="website" />
        
        {/* Blog CollectionPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "AI Writing Blog",
            "description": "Expert guides on AI detection, humanization tools, and writing tips",
            "url": "https://aifreetextpro.com/blog",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": blogPosts.length,
              "itemListElement": blogPosts.slice(0, 10).map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://aifreetextpro.com/blog/${post.slug}`,
                "name": post.title
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
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                          {post.category}
                        </span>
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

                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
                  </Card>
                ))}
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
                Try AI Free Text Pro free — 1,000 words/month with no credit card required.
              </p>
              <a href="https://app.aifreetextpro.com/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Start Free — No Credit Card
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
