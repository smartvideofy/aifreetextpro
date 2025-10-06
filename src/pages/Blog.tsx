import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    slug: "how-to-detect-ai-generated-text",
    title: "How to Detect AI-Generated Text: Complete Guide",
    excerpt: "Learn the proven techniques and tools to identify AI-generated content. Discover key patterns, linguistic markers, and detection strategies used by experts.",
    date: "2025-10-05",
    readTime: "8 min read",
    category: "AI Detection"
  },
  {
    slug: "best-free-ai-humanizer-tools-2025",
    title: "Best Free AI Humanizer Tools in 2025",
    excerpt: "Compare the top free AI humanizer tools available today. Find out which tool works best for your needs, from academic writing to content creation.",
    date: "2025-10-04",
    readTime: "10 min read",
    category: "AI Tools"
  },
  {
    slug: "bypass-ai-detection-ethical-tips",
    title: "Bypass AI Detection: Ethical Tips & Tricks",
    excerpt: "Discover ethical strategies to make AI-assisted content more human-like. Learn techniques that improve writing quality while maintaining authenticity.",
    date: "2025-10-03",
    readTime: "7 min read",
    category: "Writing Tips"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Writing Blog - Tips, Guides & Tools | AI Free Text Pro</title>
        <meta name="description" content="Expert guides on AI detection, humanization tools, and writing tips. Learn how to detect AI-generated text, use AI humanizers effectively, and improve your content quality." />
        <meta name="keywords" content="ai writing blog, ai detection guide, humanizer tools, ai content tips, writing improvement, ai text analysis" />
        <link rel="canonical" href="https://aifreetextpro.com/blog" />
        <meta property="og:title" content="AI Writing Blog - Tips, Guides & Tools" />
        <meta property="og:description" content="Expert guides on AI detection, humanization tools, and writing tips." />
        <meta property="og:url" content="https://aifreetextpro.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <main className="flex-1 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
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

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="group">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
