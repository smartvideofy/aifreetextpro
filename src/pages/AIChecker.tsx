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
      title: "Multi-Detector Analysis",
      description: "Check against GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, and 15+ other AI detectors simultaneously."
    },
    {
      icon: Target,
      title: "98% Accuracy Rate",
      description: "Industry-leading detection accuracy with detailed probability scores and highlighted AI-generated sections."
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
      description: "Your content is never stored or shared. Full encryption and automatic deletion after analysis."
    },
    {
      icon: Zap,
      title: "Built-In Humanizer",
      description: "Detected AI content? One-click humanization to bypass any detector with 97% success rate."
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI Checker?",
      answer: "Our AI Checker has a 98% accuracy rate, tested against thousands of AI-generated and human-written samples. We use multiple detection models to minimize false positives and provide reliable results."
    },
    {
      question: "Which AI detectors does it check against?",
      answer: "Our tool checks against GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, Crossplag, and 15+ other major AI detection systems to give you comprehensive coverage."
    },
    {
      question: "Is my content safe and private?",
      answer: "Absolutely. Your content is encrypted during analysis and automatically deleted after processing. We never store, share, or use your content for training purposes."
    },
    {
      question: "Can I check and humanize in one tool?",
      answer: "Yes! AI Free Text Pro is the only tool that combines AI detection and humanization. Detect AI content, then humanize it with one click, no need for separate tools."
    },
    {
      question: "How many words can I check for free?",
      answer: "Our free plan includes 1,000 words per month for detection and humanization. Upgrade to a paid plan for higher limits and additional features."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Free AI Detector 2026: Unlimited Words, No Signup</title>
        <meta name="description" content="Catch ChatGPT, Claude and Gemini text in 30 seconds. Free AI detector tested against GPTZero, Turnitin and Originality.AI. Unlimited words, no signup. Try it free." />
        <meta name="keywords" content="free ai detector, ai checker, ai detector unlimited words, free ai detector unlimited words, ai content detector, check ai text, detect ai writing, ai detection tool, free ai checker" />
        <link rel="canonical" href="https://aifreetextpro.com/ai-checker" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Free AI Detector 2026: Unlimited Words, No Signup" />
        <meta property="og:description" content="Check text against 15+ AI detectors in one click. Free, instant, private. Unlimited words, no account required." />
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
            "description": "Use AI Free Text Pro to check any text against 15+ AI detectors in one click.",
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
                "name": "Run Multi-Detector Analysis",
                "text": "Click 'Check for AI' to analyze against GPTZero, Turnitin, Originality.AI, and 15+ other detectors simultaneously."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Review Results & Humanize",
                "text": "View detailed probability scores with highlighted AI sections. One-click humanize any flagged content."
              }
            ]
          })}
        </script>
      </Helmet>
      <SoftwareApplicationSchema
        name="Free AI Detector"
        description="Free AI content detector. Check essays, blog posts and marketing copy for AI patterns before you publish. No signup, instant results."
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
                <span className="text-sm font-medium">98% Detection Accuracy</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free AI Detector & AI Checker
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Free AI detector with 98% accuracy. Check against GPTZero, Turnitin, Originality.AI & 15+ detectors. Unlimited words on Pro plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://app.aifreetextpro.com/detector" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                    <Eye className="mr-2 h-5 w-5" />
                    Check Text Free
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
                1,000 free words/month • No credit card required • Privacy protected
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
                <span>98% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>15+ Detectors</span>
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
                The most comprehensive AI detection tool available, check, analyze, and humanize all in one place.
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
                <p className="text-muted-foreground">Our AI checks against 15+ detectors and provides detailed probability scores.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">3</div>
                <h3 className="text-xl font-semibold mb-2">Review & Humanize</h3>
                <p className="text-muted-foreground">See highlighted AI sections and one-click humanize to bypass detection.</p>
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
              <a href="https://app.aifreetextpro.com/detector" className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                  <Zap className="mr-2 h-5 w-5" />
                  Try AI Checker Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required • 1,000 free words/month
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
              description: "Learn techniques to make AI-generated content pass detection while maintaining your unique writing style.",
              href: "/blog/humanize-ai-text-without-losing-voice",
              category: "Guide"
            }
          ]} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChecker;