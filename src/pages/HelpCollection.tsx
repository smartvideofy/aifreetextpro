import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChevronRight, Rocket, Sparkles, CreditCard, Shield, AlertTriangle, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and get up and running quickly with AI Free Text Pro",
    icon: Rocket,
    articles: [
      { 
        title: "How to Create an Account", 
        slug: "create-account",
        description: "Step-by-step guide to signing up for AI Free Text Pro"
      },
      { 
        title: "Your First AI Humanization", 
        slug: "first-humanization",
        description: "Transform your first AI-generated text in under 30 seconds"
      },
      { 
        title: "Understanding Your Dashboard", 
        slug: "understanding-dashboard",
        description: "Navigate your account dashboard and track your usage"
      },
      { 
        title: "Choosing the Right Writing Style", 
        slug: "choosing-writing-style",
        description: "Academic, Professional, Creative, or Casual - which is right for you?"
      },
    ]
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
        description: "Understand the technology behind our 98% accuracy rate"
      },
      { 
        title: "Writing Style Modes Explained", 
        slug: "writing-style-modes",
        description: "Deep dive into each writing style and when to use them"
      },
      { 
        title: "Tips for Best Results", 
        slug: "tips-best-results",
        description: "Expert tips to maximize your humanization success rate"
      },
      { 
        title: "Bypassing AI Detectors", 
        slug: "bypassing-detectors",
        description: "How to pass Turnitin, GPTZero, and Originality.AI"
      },
      { 
        title: "Advanced Settings & Options", 
        slug: "advanced-settings",
        description: "Fine-tune your humanization with advanced controls"
      },
    ]
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    description: "Manage your subscription, payments, and account billing",
    icon: CreditCard,
    articles: [
      { 
        title: "Subscription Plans Explained", 
        slug: "subscription-plans",
        description: "Compare Free vs Pro plans and features"
      },
      { 
        title: "How to Upgrade or Downgrade", 
        slug: "upgrade-downgrade",
        description: "Change your plan at any time with no penalties"
      },
      { 
        title: "Refund Policy & Cancellations", 
        slug: "refund-policy",
        description: "Our 7-day money-back guarantee and cancellation process"
      },
    ]
  },
  {
    id: "privacy-security",
    title: "Privacy & Security",
    description: "Learn how we protect your data and keep your account secure",
    icon: Shield,
    articles: [
      { 
        title: "How We Protect Your Data", 
        slug: "data-protection",
        description: "Our security measures and data handling practices"
      },
      { 
        title: "Account Security Best Practices", 
        slug: "account-security",
        description: "Tips to keep your account safe and secure"
      },
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Find solutions to common issues and problems",
    icon: AlertTriangle,
    articles: [
      { 
        title: "Why Isn't My Text Being Humanized?", 
        slug: "text-not-humanized",
        description: "Common reasons and quick fixes"
      },
      { 
        title: "Login & Account Issues", 
        slug: "login-issues",
        description: "Can't log in? Reset password not working? We can help"
      },
      { 
        title: "Payment Failed - What To Do", 
        slug: "payment-failed",
        description: "Troubleshoot payment issues and update payment methods"
      },
      { 
        title: "Browser Compatibility Issues", 
        slug: "browser-compatibility",
        description: "Supported browsers and how to fix display issues"
      },
      { 
        title: "Word Count Not Updating", 
        slug: "word-count-issues",
        description: "Fix issues with word count tracking and limits"
      },
      { 
        title: "Contact Support", 
        slug: "contact-support",
        description: "Reach our support team for personalized help"
      },
    ]
  },
];

const HelpCollection = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  
  const collection = collections.find(c => c.id === collectionId);

  if (!collection) {
    return <Navigate to="/help-center" replace />;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/help-center" },
    { label: collection.title, href: `/help-center/${collection.id}` },
  ];

  const IconComponent = collection.icon;

  // Generate ItemList schema for articles
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${collection.title} - Help Center`,
    "description": collection.description,
    "url": `https://aifreetextpro.com/help-center/${collection.id}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": collection.articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.description,
        "url": `https://aifreetextpro.com/help-center/${collection.id}/${article.slug}`
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Free Text Pro",
      "url": "https://aifreetextpro.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{collection.title} - Help Center | AI Free Text Pro</title>
        <meta name="description" content={collection.description} />
        <link rel="canonical" href={`https://aifreetextpro.com/help-center/${collection.id}`} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content={`${collection.title} - Help Center | AI Free Text Pro`} />
        <meta property="og:description" content={collection.description} />
        <meta property="og:url" content={`https://aifreetextpro.com/help-center/${collection.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${collection.title} - Help Center`} />
        <meta name="twitter:description" content={collection.description} />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to="/help-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
          </Button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{collection.title}</h1>
              <p className="text-muted-foreground">{collection.description}</p>
            </div>
          </div>

          {/* Articles Count */}
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">
            {collection.articles.length} Articles
          </p>

          {/* Articles List */}
          <div className="space-y-3">
            {collection.articles.map((article, index) => (
              <Link
                key={article.slug}
                to={`/help-center/${collection.id}/${article.slug}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {article.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HelpCollection;
