import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChevronRight, Rocket, Sparkles, CreditCard, Shield, AlertTriangle, HelpCircle, Search, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const collections = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly",
    articleCount: 4,
    icon: Rocket,
    articles: [
      { title: "How to Create an Account", slug: "create-account" },
      { title: "Your First AI Humanization", slug: "first-humanization" },
      { title: "Understanding Your Dashboard", slug: "understanding-dashboard" },
      { title: "Choosing the Right Writing Style", slug: "choosing-writing-style" },
    ]
  },
  {
    id: "ai-humanizer-guide",
    title: "AI Humanizer Guide",
    description: "Master our AI humanization tools",
    articleCount: 5,
    icon: Sparkles,
    articles: [
      { title: "How AI Humanization Works", slug: "how-humanization-works" },
      { title: "Writing Style Modes Explained", slug: "writing-style-modes" },
      { title: "Tips for Best Results", slug: "tips-best-results" },
      { title: "Bypassing AI Detectors", slug: "bypassing-detectors" },
      { title: "Advanced Settings & Options", slug: "advanced-settings" },
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    description: "Manage your subscription and payments",
    articleCount: 3,
    icon: CreditCard,
    articles: [
      { title: "Subscription Plans Explained", slug: "subscription-plans" },
      { title: "How to Upgrade or Downgrade", slug: "upgrade-downgrade" },
      { title: "Refund Policy & Cancellations", slug: "refund-policy" },
    ]
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    description: "Your data protection and account security",
    articleCount: 2,
    icon: Shield,
    articles: [
      { title: "How We Protect Your Data", slug: "data-protection" },
      { title: "Account Security Best Practices", slug: "account-security" },
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solutions to common issues",
    articleCount: 6,
    icon: AlertTriangle,
    articles: [
      { title: "Why Isn't My Text Being Humanized?", slug: "text-not-humanized" },
      { title: "Login & Account Issues", slug: "login-issues" },
      { title: "Payment Failed - What To Do", slug: "payment-failed" },
      { title: "Browser Compatibility Issues", slug: "browser-compatibility" },
      { title: "Word Count Not Updating", slug: "word-count-issues" },
      { title: "Contact Support", slug: "contact-support" },
    ]
  },
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/help-center" },
  ];

  // Filter articles based on search query
  const filteredCollections = searchQuery
    ? collections.map(collection => ({
        ...collection,
        articles: collection.articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(collection => collection.articles.length > 0)
    : collections;

  return (
    <>
      <Helmet>
        <title>Help Center - AI Free Text Pro Support & Guides</title>
        <meta name="description" content="Browse help articles, guides, and FAQs for AI Free Text Pro. Get support for AI humanization, billing, account issues, and troubleshooting." />
        <meta name="keywords" content="ai free text pro help, support, faq, guides, troubleshooting, ai humanizer help" />
        <link rel="canonical" href="https://aifreetextpro.com/help-center" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-muted-foreground text-lg">
              Browse help articles or contact support
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-card border-border/50"
            />
          </div>

          {/* Collections Count */}
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">
            {filteredCollections.length} Collections
          </p>

          {/* Collections List */}
          <div className="space-y-3">
            {filteredCollections.map((collection) => (
              <Link
                key={collection.id}
                to={`/help-center/${collection.id}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <collection.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {collection.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {searchQuery 
                      ? `${collection.articles.length} matching articles`
                      : `${collection.articleCount} articles`
                    }
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredCollections.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No articles found for "{searchQuery}"</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          )}

          {/* Contact Support CTA */}
          <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Can't find what you're looking for?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help you with any questions.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HelpCenter;
