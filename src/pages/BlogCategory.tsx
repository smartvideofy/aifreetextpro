import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/pages/Blog";
import { PillarHubLinks } from "@/components/PillarHubLinks";
import categorySeo from "@/assets/blog/category-seo.png";

// Category slug → display config + category-label match set
type CategoryDef = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  matches: string[]; // category labels from Blog.tsx blogPosts
  slugIncludes?: string[]; // additional slug substring filters
  pillarHub?: "humanizer" | "detection" | "bypass" | "comparison";
};

export const blogCategories: CategoryDef[] = [
  {
    slug: "detection", title: "AI Detection Guides", metaTitle: "AI Detection Guides, How Detectors Work & Score Text", metaDescription:
      "Free guides on how AI detectors work, score text, and produce false positives. Reviews of Turnitin, GPTZero, Originality.AI, Copyleaks and more.", description:
      "Everything you need to understand AI detection: how detectors score text, why false positives happen, and which tools are actually accurate.", matches: ["Detector Review", "Technical"], slugIncludes: ["detector", "detection", "gptzero", "turnitin", "originality", "copyleaks", "winston"], pillarHub: "detection", }, {
    slug: "humanizer", title: "AI Humanizer Guides", metaTitle: "AI Humanizer Guides, Make AI Text Sound Human", metaDescription:
      "Step-by-step humanizer workflows for ChatGPT, Claude, Gemini and more. Tone, voice, and flow techniques that reduce AI flags without losing meaning.", description:
      "Workflows, tone-and-voice frameworks, and humanizer comparisons to make AI writing read naturally.", matches: ["How-To Guide", "Writing Craft", "Creative Writing", "Professional Editing"], slugIncludes: ["humaniz", "rewrite", "tone-voice", "make-ai-writing"], pillarHub: "humanizer", }, {
    slug: "bypass", title: "Bypass AI Detection Guides", metaTitle: "Bypass AI Detection Guides, Reduce False Flags Ethically", metaDescription:
      "Ethical guides to reduce AI-detection false flags on Turnitin, GPTZero, Originality.AI, Copyleaks, ZeroGPT and Winston AI.", description:
      "Reduce false flags and pass AI detectors ethically. Tool-by-tool bypass guides and editing workflows.", matches: ["Best Practices"], slugIncludes: ["bypass", "undetectable", "pass-all", "remove-ai-detection"], pillarHub: "bypass", }, {
    slug: "comparison", title: "AI Tool Comparisons", metaTitle: "AI Humanizer & Detector Comparisons (2026)", metaDescription:
      "Side-by-side comparisons of AI humanizers and detectors. Pricing, accuracy, and feature breakdowns for the top tools in 2026.", description:
      "Compare AI humanizers and detectors side-by-side. Pricing, bypass rates, and real-world accuracy benchmarks.", matches: ["Comparison"], slugIncludes: ["vs-", "comparison", "alternatives"], pillarHub: "comparison", }, {
    slug: "use-cases", title: "AI Writing Use Cases", metaTitle: "AI Writing Use Cases, Students, Writers, Marketers & More", metaDescription:
      "Use-case guides for AI writing across academics, marketing, social media, and professional content. Industry-specific playbooks and best practices.", description:
      "Industry-specific AI writing playbooks for students, freelancers, marketers, and professionals.", matches: [
      "Academic", "Marketing", "Email Marketing", "Social Media", "Content Creation", "Career", "Professional", "Travel Writing", "Tools", "eCommerce", "Industry", "Educational", "SEO", ], pillarHub: "humanizer", },
];

const POSTS_PER_PAGE = 24;

const BlogCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const cat = blogCategories.find((c) => c.slug === slug);
  const [page, setPage] = useState(1);

  const matchedPosts = useMemo(() => {
    if (!cat) return [];
    const matchSet = new Set(cat.matches);
    return blogPosts
      .filter((p: { category: string; slug: string }) => {
        if (matchSet.has(p.category)) return true;
        if (cat.slugIncludes && cat.slugIncludes.some((s) => p.slug.includes(s))) return true;
        return false;
      })
      .sort((a: { date: string }, b: { date: string }) => (a.date < b.date ? 1 : -1));
  }, [cat]);

  if (!cat) return <Navigate to="/blog" replace />;

  const totalPages = Math.max(1, Math.ceil(matchedPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = matchedPosts.slice(pageStart, pageStart + POSTS_PER_PAGE);

  const canonical = `https://aifreetextpro.com/blog/category/${cat.slug}`;

  const collectionLd = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: cat.title, description: cat.metaDescription, url: canonical, isPartOf: {
      "@type": "WebSite", name: "AI Free Text Pro", url: "https://aifreetextpro.com", }, hasPart: matchedPosts.slice(0, 50).map((p: { title: string; slug: string; date: string }) => ({
      "@type": "Article", headline: p.title, url: `https://aifreetextpro.com/blog/${p.slug}`, datePublished: p.date, })), };

  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aifreetextpro.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://aifreetextpro.com/blog" }, { "@type": "ListItem", position: 3, name: cat.title, item: canonical }, ], };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{cat.metaTitle}</title>
        <meta name="description" content={cat.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={cat.metaTitle} />
        <meta property="og:description" content={cat.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(collectionLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" }, { label: cat.title }, ]}
        />

        <header className="mt-6 mb-10">
          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Category</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{cat.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{cat.description}</p>
          <p className="text-sm text-muted-foreground mt-2">
            {matchedPosts.length} {matchedPosts.length === 1 ? "guide" : "guides"} in this category
          </p>
        </header>

        <section aria-label={`${cat.title} posts`}>
          {pagePosts.length === 0 ? (
            <p className="text-muted-foreground">No posts in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagePosts.map((post: { slug: string; title: string; category: string; excerpt: string; date: string; readTime: string }) => {
                const thumb = categorySeo;
                return (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all bg-card/50 border-border/50">
                      <div className="aspect-[16/9] bg-muted overflow-hidden">
                        <img
                          src={thumb}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <span className="text-xs text-primary font-medium uppercase tracking-wide">
                          {post.category}
                        </span>
                        <h2 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                        <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Read guide
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        {totalPages > 1 && (
          <nav
            aria-label="Pagination"
            className="flex items-center justify-center gap-2 mt-10"
          >
            <button
              type="button"
              className="px-3 py-2 rounded-md border border-border text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              className="px-3 py-2 rounded-md border border-border text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </nav>
        )}

        {cat.pillarHub && (
          <PillarHubLinks hub={cat.pillarHub} title={`Related from ${cat.title}`} limit={9} />
        )}

        <section className="mt-12 p-6 rounded-lg border border-border bg-muted/30">
          <h2 className="text-xl font-bold mb-3">Browse other categories</h2>
          <div className="flex flex-wrap gap-2">
            {blogCategories
              .filter((c) => c.slug !== cat.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/blog/category/${c.slug}`}
                  className="px-3 py-1.5 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {c.title}
                </Link>
              ))}
            <Link
              to="/blog"
              className="px-3 py-1.5 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition-colors"
            >
              All posts
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogCategory;
