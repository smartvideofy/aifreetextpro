import FeaturedGuides from "@/components/FeaturedGuides";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { SoftwareApplicationSchema } from "@/components/SoftwareApplicationSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { CheckCircle, ArrowRight, Zap, Shield, Eye, FileText, Clock, Target } from "lucide-react";
import { PillarHubLinks, CrossHubNav } from "@/components/PillarHubLinks";

const AIChecker = () => {
  const features = [
    {
      icon: Eye,
      title: "AI Writing Review",
      description: "Check essays, articles and other drafts for patterns that may indicate AI-generated writing."
    },
    {
      icon: Target,
      title: "Scores With Context",
      description: "Use an AI score as a prompt for review, not proof of authorship. Human writing can also be flagged."
    },
    {
      icon: FileText,
      title: "PDF & DOCX Support",
      description: "Upload files directly, no more copy-pasting. Support for PDF, DOCX, and TXT files up to 10MB."
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get comprehensive detection results in under 30 seconds. Real-time analysis with detailed breakdown."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Review our privacy policy before submitting sensitive text, personal information or unpublished work."
    },
    {
      icon: Zap,
      title: "Built-In Humanizer",
      description: "Move from checking to revising your draft for clearer language and a more natural voice."
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI Checker?",
      answer: "AI detection is an estimate, not proof that a person used AI. False positives and missed AI text are possible. Review the result alongside sources, draft history and your own reading of the text."
    },
    {
      question: "Is this the same as a Turnitin or GPTZero report?",
      answer: "No. This checker provides an AI-writing assessment in AI Free Text Pro. Different detectors can disagree, and its result does not predict a Turnitin, GPTZero or Originality.AI score."
    },
    {
      question: "Is my content safe and private?",
      answer: "Read our privacy policy for how submitted content is handled. Remove confidential or identifying information before checking text you do not have permission to share."
    },
    {
      question: "Can I check and humanize in one tool?",
      answer: "Yes. AI Free Text Pro includes an AI checker and a humanizer, so you can check a draft and then revise its wording within the same app. A revised score is not a guarantee of academic or workplace compliance."
    },
    {
      question: "How many words can I check for free?",
      answer: "Our free plan includes 250 words per month for detection and humanization. Upgrade to a paid plan for higher limits and additional features."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free AI Checker for Essays &amp; Text | AI Free Text Pro</title>
        <meta name="description" content="Check essays, articles and drafts for AI-writing patterns with AI Free Text Pro. Review an AI score, improve your draft and understand false positives." />

        <meta name="keywords" content="free ai detector, ai checker, ai content detector, check ai text, detect ai writing, ai detection tool, free ai checker" />
        <link rel="canonical" href="https://aifreetextpro.com/ai-checker" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Free AI Checker for Essays & Text | AI Free Text Pro" />
        <meta property="og:description" content="Check essays, articles and drafts for AI-writing patterns with AI Free Text Pro. Review an AI score, improve your draft and understand false positives." />
        <meta name="twitter:title" content="Free AI Checker for Essays & Text | AI Free Text Pro" />
        <meta name="twitter:description" content="Check essays, articles and drafts for AI-writing patterns with AI Free Text Pro. Review an AI score, improve your draft and understand false positives." />

        <meta property="og:url" content="https://aifreetextpro.com/ai-checker" />
        <meta property="og:type" content="website" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* SoftwareApplication Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Free Text Pro AI Checker",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>


        {/* HowTo Schema for AI Checker */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Check Text for AI Detection",
            "description": "Use AI Free Text Pro to check a draft for AI-writing patterns and review the result in context.",
            "totalTime": "PT1M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "0" },
            "tool": [{ "@type": "HowToTool", "name": "AI Free Text Pro AI Checker" }],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Paste or Upload Your Text",
                "text": "Copy and paste your text into the checker, or upload a PDF, DOCX, or TXT file up to 10MB."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Check for AI Writing",
                "text": "Run the AI check in the app to receive an assessment of AI-writing patterns."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Review Results & Humanize",
                "text": "Read the AI score alongside your sources and draft history, then revise unclear or generic wording if needed."
              }
            ]
          })}
        </script>
      </Helmet>
      <SoftwareApplicationSchema
        name="Free AI Detector"
        description="Free AI content detector. Check essays, blog posts and marketing copy for AI patterns before you publish. Free account, instant results."
        url="https://aifreetextpro.com/ai-checker"
        category="UtilityApplication"
      />

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "AI Checker" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">AI Writing Review</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free AI Checker for Essays and Text
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Check an essay, article or draft for AI-writing patterns. Review the AI score, then use the built-in humanizer to improve clarity and preserve your voice. A detector score is a starting point for review, not proof of who wrote the text.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                    <Eye className="mr-2 h-5 w-5" />
                    Check My Text Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6">
                    View Plans
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Free plan available • No credit card required • <Link to="/free-ai-detector-word-limit" className="text-primary hover:underline">See current free limits</Link>
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Want the method rather than the tool? Read{" "}
                <Link to="/blog/how-to-check-if-written-by-ai" className="text-primary hover:underline">how to tell if AI wrote something</Link>{" "}
                or the{" "}
                <Link to="/free-ai-detector-word-limit" className="text-primary hover:underline">real free word limits</Link>.
              </p>

            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 border-y border-border/40 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>50,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Review AI-Writing Patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Checker &amp; Humanizer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our AI Checker?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check your draft, interpret the result and improve its wording in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How the AI Checker Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to detect AI-generated content
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">1</div>
                <h3 className="text-xl font-semibold mb-2">Paste or Upload</h3>
                <p className="text-muted-foreground">Paste your text or upload a PDF, DOCX, or TXT file up to 10MB.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">2</div>
                <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                <p className="text-muted-foreground">Run an AI-writing check and review the score in context.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">3</div>
                <h3 className="text-xl font-semibold mb-2">Review & Humanize</h3>
                <p className="text-muted-foreground">Review your sources and draft history, then revise for clarity and a natural voice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start Checking AI Content Free
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 50,000+ users who trust AI Free Text Pro for accurate AI detection and humanization.
              </p>
              <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                  <Zap className="mr-2 h-5 w-5" />
                  Try AI Checker Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required • 250 free words/month
              </p>
            </div>
          </div>
        </section>

        {/* AI Detection Hub Spokes */}
        <div className="container mx-auto px-4">
          <PillarHubLinks hub="detection" currentPage="/ai-checker" title="AI Detection Resources" />
          <CrossHubNav currentHub="detection" />
        </div>

        {/* Related Articles */}
        <div className="container mx-auto px-4">
          <RelatedArticles articles={[
            {
              title: "How AI Detectors Work: Complete Guide",
              description: "Understand the technology behind AI detection systems and how they identify AI-generated content.",
              href: "/blog/how-ai-detectors-work",
              category: "Education"
            },
            {
              title: "AI Detection Tools Compared 2025",
              description: "Comprehensive comparison of GPTZero, Turnitin, Originality.AI, and other major AI detection tools.",
              href: "/blog/ai-detection-tools-compared-2025",
              category: "Comparison"
            },
            {
              title: "How to Humanize AI Text Without Losing Voice",
              description: "Learn editing techniques for clearer AI-assisted drafts while maintaining your unique writing style.",
              href: "/blog/humanize-ai-text-without-losing-voice",
              category: "Guide"
            }
          ]} />
          <FeaturedGuides currentPage="/ai-checker" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChecker;