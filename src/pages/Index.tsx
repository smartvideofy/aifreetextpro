import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Shield, FileText, Sparkles, Brain, Star, Pen, BookOpen, Target, Zap, Lock, Crown, GraduationCap, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SoftwareApplicationSchema } from "@/components/SoftwareApplicationSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import HowToSchema from "@/components/HowToSchema";
import ProductMockup from "@/components/ProductMockup";
import StickyHeaderCTA from "@/components/StickyHeaderCTA";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import aiDetectorFeature from "@/assets/ai-detector-feature.png";
import aiHumanizerFeature from "@/assets/ai-humanizer-feature.png";
import studentWriting from "@/assets/student-writing.png";
import writerProfessional from "@/assets/writer-professional.png";
import researcherWorking from "@/assets/researcher-working.png";
import jamesChen from "@/assets/testimonials/james-chen.jpg";
import sarahPatel from "@/assets/testimonials/sarah-patel.jpg";
import michaelRodriguez from "@/assets/testimonials/michael-rodriguez.jpg";

// Lazy load below-fold heavy components for mobile LCP optimization
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ComparisonTable = lazy(() => import("@/components/ComparisonTable"));
const EnhancedFAQ = lazy(() => import("@/components/EnhancedFAQ"));
const InteractiveDemo = lazy(() => import("@/components/InteractiveDemo"));
const TestimonialCarousel = lazy(() => import("@/components/TestimonialCarousel"));
const AnimatedStats = lazy(() => import("@/components/AnimatedStats"));
const ScrollToTopButton = lazy(() => import("@/components/ScrollToTopButton"));
const TrustBadges = lazy(() => import("@/components/TrustBadges"));
const NewsletterSignup = lazy(() => import("@/components/NewsletterSignup"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));
const PillarHubLinksModule = lazy(() => import("@/components/PillarHubLinks").then(m => ({ default: m.PillarHubLinks })));
const CrossHubNavModule = lazy(() => import("@/components/PillarHubLinks").then(m => ({ default: m.CrossHubNav })));

// fallbackClass reserves the section's real height so the lazy chunk loading
// (and React's Suspense-boundary re-render during hydration) doesn't collapse
// to a short placeholder and then expand, which was driving CLS. Overlay
// sections pass nothing (0 height) since they render null until interaction.
const LazySection = ({ children, fallbackClass = "" }: { children: React.ReactNode; fallbackClass?: string }) => (
  <Suspense fallback={<div className={fallbackClass} aria-hidden="true" />}>
    {children}
  </Suspense>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HowToSchema />
      <Breadcrumbs items={[{ label: "Home" }]} />
      <Helmet>
        <title>Free AI Humanizer & Detector - 98% Accuracy [2026]</title>
        <meta name="description" content="Humanize AI text in seconds and bypass Turnitin, GPTZero, Originality.AI with 98% accuracy. 1,000 free words, no signup. Trusted by 50,000+ writers." />
        <link rel="canonical" href="https://aifreetextpro.com/" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Free AI Humanizer & Detector - 98% Accuracy [2026]" />
        <meta property="og:description" content="Humanize AI text in seconds and bypass Turnitin, GPTZero, Originality.AI with 98% accuracy. 1,000 free words, no signup." />
        <meta property="og:url" content="https://aifreetextpro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aifreetextpro.com/og-image.png" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="Free AI Humanizer & Detector - 98% Accuracy [2026]" />
        <meta name="twitter:description" content="Humanize AI text in seconds and bypass Turnitin, GPTZero, Originality.AI with 98% accuracy. 1,000 free words, no signup." />
        <meta name="twitter:image" content="https://aifreetextpro.com/og-image.png" />
        
        {/* Enhanced Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "AI Free Text Pro - Free AI Humanizer Tool", "alternateName": ["Free AI Humanizer", "AI Checker", "AI Detector", "AI Humanizer Tool Free"], "applicationCategory": "UtilitiesApplication", "offers": {
              "@type": "Offer", "price": "0", "priceCurrency": "USD"
            }, "operatingSystem": "Web Browser", "applicationSubCategory": "AI Text Analysis Tool", "featureList": [
              "Free AI humanizer tool", "AI checker with 98% accuracy", "Unlimited words on Pro plan", "Turnitin bypass", "Originality.AI bypass", "GPTZero bypass", "PDF Export Reports", "Multiple Writing Styles", "File Upload Support (PDF, DOCX, TXT)", "Word-by-word Analysis"
            ], "screenshot": "https://aifreetextpro.com/og-image.png"
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "Product", "name": "AI Free Text Pro - AI Detector & Humanizer", "description": "Free AI detector and humanizer tool. Detect ChatGPT and make AI text sound human with 98% accuracy.", "brand": {
              "@type": "Brand", "name": "AI Free Text Pro"
            }, "offers": {
              "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization", "name": "AI Free Text Pro", "url": "https://aifreetextpro.com", "logo": "https://aifreetextpro.com/logo.png", "description": "Free AI detector and humanizer tool. Detect ChatGPT and make AI text sound human with 98% accuracy.", "sameAs": [
              "https://app.aifreetextpro.com", "https://twitter.com/aifreetextpro", "https://www.linkedin.com/company/aifreetextpro"
            ], "contactPoint": {
              "@type": "ContactPoint", "contactType": "Customer Support", "url": "https://aifreetextpro.com/contact"
            }
          })}
        </script>
        
        {/* Speakable Schema for Voice Assistants */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "WebPage", "name": "Free AI Humanizer & Detector Tool", "url": "https://aifreetextpro.com/", "speakable": {
              "@type": "SpeakableSpecification", "cssSelector": ["h1", ".hero-description", ".key-features"]
            }
          })}
        </script>
        
        {/* FAQ Schema for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
              {
                "@type": "Question", "name": "How accurate is AI Free Text Pro compared to GPTZero?", "acceptedAnswer": {
                  "@type": "Answer", "text": "AI Free Text Pro achieves 98% accuracy using advanced GPT-4o Mini models for text pattern analysis. Our testing shows we outperform GPTZero (90% accuracy) and ZeroGPT (85% accuracy) in detecting ChatGPT, Claude, and other AI-generated content."
                }
              }, {
                "@type": "Question", "name": "Can AI Free Text Pro detect ChatGPT 4 and Claude?", "acceptedAnswer": {
                  "@type": "Answer", "text": "Yes! AI Free Text Pro is specifically designed to detect the latest AI models including ChatGPT-5, GPT-5, Claude 4, Gemini 2, and other leading language models."
                }
              }, {
                "@type": "Question", "name": "Is AI Free Text Pro free forever?", "acceptedAnswer": {
                  "@type": "Answer", "text": "Yes, AI Free Text Pro offers a generous free tier with 1,000 words per analysis, double what competitors like ZeroGPT (500 words) and Rewritify (250 words) offer. Our core AI detection and humanization features remain free forever."
                }
              }, {
                "@type": "Question", "name": "How does the AI humanizer work?", "acceptedAnswer": {
                  "@type": "Answer", "text": "Our AI humanizer transforms robotic AI text into natural, human-like writing using advanced language models. You can choose from 4 writing styles (Professional, Academic, Creative, Casual) and customize settings for tone and complexity."
                }
              }, {
                "@type": "Question", "name": "Is my text stored or shared with anyone?", "acceptedAnswer": {
                  "@type": "Answer", "text": "No, never. Your privacy is our top priority. AI Free Text Pro processes all content in real-time and does not store, log, or share your text with third parties."
                }
              }, {
                "@type": "Question", "name": "What file formats can I upload?", "acceptedAnswer": {
                  "@type": "Answer", "text": "AI Free Text Pro supports PDF, DOCX (Microsoft Word), and TXT file uploads up to 10MB in size. You can also paste text directly into the editor."
                }
              }, {
                "@type": "Question", "name": "Is there a free AI humanizer tool?", "acceptedAnswer": {
                  "@type": "Answer", "text": "Yes! AI Free Text Pro is a free AI humanizer tool that transforms AI-generated text into natural, human-like writing. Get 1,000 free words per month with no credit card required."
                }
              }, {
                "@type": "Question", "name": "Is there a free AI detector with unlimited words?", "acceptedAnswer": {
                  "@type": "Answer", "text": "AI Free Text Pro offers 1,000 free words per month. For unlimited AI detection and humanization, upgrade to our Pro plan with no word limits."
                }
              }, {
                "@type": "Question", "name": "How do I use an AI humanizer for free?", "acceptedAnswer": {
                  "@type": "Answer", "text": "Simply paste your AI-generated text into our free AI humanizer. Select a writing style (Academic, Professional, Creative, or Casual) and click Humanize. Your first 1,000 words each month are completely free."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <SoftwareApplicationSchema
        name="AI Free Text Pro"
        description="Free AI humanizer and AI detector. Rewrite ChatGPT, Claude and Gemini output to read naturally and reduce false flags from Turnitin, GPTZero and Originality.AI."
        url="https://aifreetextpro.com/"
        category="UtilityApplication"
      />
      <Navbar />
      <StickyHeaderCTA />
      <LazySection><ScrollToTopButton /></LazySection>
      <LazySection><ExitIntentPopup /></LazySection>
      
      <main className="flex-1">
        {/* Hero Section - Premium Minimalist */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <AnimatedBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm animate-fade-in">
                <div className="flex -space-x-1.5">
                  {["MR", "JC", "SP", "EW"].map((initials, i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[10px] font-bold text-primary-foreground border-2 border-background"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">50,000+</span> writers trust us
                </span>
                <div className="flex gap-0.5 ml-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Main Headline with Gradient */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] animate-fade-in" style={{ animationDelay: "100ms" }}>
                Free AI Humanizer Tool
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">&</span> AI Checker
              </h1>
              
              {/* Subheadline - Refined */}
              <p className="hero-description text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: "200ms" }}>
                Detect AI-generated content with 98% accuracy. Transform robotic text into natural, human writing in seconds.
              </p>

              {/* Trust Indicators - Minimal inline */}
              <div className="key-features flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant results</span>
                </div>
              </div>
              
              {/* CTA Buttons - Premium styling */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="xl" 
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl shadow-primary/20 group"
                  >
                    <Pen className="mr-2 h-5 w-5" />
                    Start Writing Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
                <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="xl"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    See Live Demo
                  </Button>
                </a>
              </div>

              {/* Money-Back Guarantee - Subtle */}
              <div className="animate-fade-in pt-2" style={{ animationDelay: "500ms" }}>
                <Link to="/guarantee" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Money-Back Guarantee</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Product Mockup Visual */}
              <div className="mt-12 md:mt-20 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <ProductMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <LazySection fallbackClass="min-h-[120px]"><TrustBadges /></LazySection>

        {/* Problem-Solution Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Free AI Humanizer - Transform AI Text Instantly</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">The all-in-one AI checker tool for detecting and humanizing AI content</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-2xl font-bold text-destructive">The Problem</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs md:text-sm">✗</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">AI detectors flagging legitimate content</p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs md:text-sm">✗</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">Robotic, unnatural AI-generated text</p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs md:text-sm">✗</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">Risk of academic or professional consequences</p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-xs md:text-sm">✗</span>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">Time-consuming manual editing</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-2xl font-bold text-primary">The Solution</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm md:text-base">Dual Functionality</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Both detect AND humanize in one platform</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm md:text-base">Bypass All Major Detectors</p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Works against <Link to="/bypass-gptzero-detection" className="text-primary hover:underline">GPTZero</Link>, <Link to="/bypass-turnitin-ai-detection" className="text-primary hover:underline">Turnitin</Link>, <Link to="/bypass-originality-ai" className="text-primary hover:underline">Originality.AI</Link> & more
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm md:text-base">Natural Humanization</p>
                        <p className="text-xs md:text-sm text-muted-foreground">4 writing styles: Professional, Academic, Creative, Casual</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-0.5 text-sm md:text-base">File Support</p>
                        <p className="text-xs md:text-sm text-muted-foreground">PDF, DOCX, TXT uploads up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <LazySection fallbackClass="min-h-[700px] md:min-h-[780px]"><InteractiveDemo /></LazySection>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
              How AI Free Text Pro Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-3 md:space-y-4 group">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-sm md:text-lg font-bold text-primary">1</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold">Input Your Content</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Import or paste your text directly into the intuitive writing workspace.
                </p>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7 md:w-10 md:h-10 text-secondary" />
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <span className="text-sm md:text-lg font-bold text-secondary">2</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold">Smart Analysis</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Advanced AI analyzes patterns and suggests improvements for authenticity.
                </p>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-sm md:text-lg font-bold text-primary">3</span>
                </div>
                <h3 className="text-base md:text-xl font-semibold">Polish & Publish</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Transform your content into polished, authentic writing ready for publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
              Powerful Features
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
              Everything you need to detect and humanize AI content
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
              {/* AI Detector Card */}
              <Card className="p-6 md:p-8 space-y-5 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="space-y-4">
                  {/* Feature Image */}
                  <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6">
                    <img 
                      src={aiDetectorFeature} 
                      alt="AI content detection with magnifying glass analyzing text" 
                      className="w-full h-48 object-cover"
                      width={600}
                      height={192}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">AI Content Detector</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced AI detection with detailed analysis. Identify AI-generated content with precision and confidence.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Instant analysis up to 5,000 words</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Detailed probability scores & word-by-word breakdown</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Professional PDF export reports</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Support for PDF, DOCX, TXT files</span>
                    </div>
                  </div>
                </div>

                <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full group">
                    Try Detector Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
              </Card>

              {/* AI Humanizer Card */}
              <Card className="p-6 md:p-8 space-y-5 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="space-y-4">
                  {/* Feature Image */}
                  <div className="relative -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6">
                    <img 
                      src={aiHumanizerFeature} 
                      alt="AI text humanization transforming robotic text to natural writing" 
                      className="w-full h-48 object-cover"
                      width={600}
                      height={192}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">AI Text Humanizer</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Transform robotic AI text into natural, human-like content that bypasses detection while maintaining meaning.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">4 writing styles: Professional, Casual, Academic, Creative</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">5 content domains with customization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Adjustable humanization strength (0-100%)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">One-click copy & download</span>
                    </div>
                  </div>
                </div>

                <a href="https://app.aifreetextpro.com/humanizer" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="secondary" className="w-full group">
                    Try Humanizer Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
              </Card>
            </div>

            {/* Additional Features Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              <Card className="p-5 md:p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Real-Time Analytics</h4>
                <p className="text-sm text-muted-foreground">Track usage, monitor trends, and view detailed history with comprehensive dashboard.</p>
              </Card>

              <Card className="p-5 md:p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Multi-Format Support</h4>
                <p className="text-sm text-muted-foreground">Upload PDF, DOCX, TXT files up to 10MB or paste text directly.</p>
              </Card>

              <Card className="p-5 md:p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Privacy First</h4>
                <p className="text-sm text-muted-foreground">Your content is never stored. Bank-grade encryption ensures complete security.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Credibility */}
        <section className="py-12 md:py-16 bg-card/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                <span className="text-primary font-bold">98% accuracy</span> tested on thousands of samples • Trusted by writers, students, and professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={michaelRodriguez} alt="Michael Rodriguez" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold">
                        MR
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Content Creator</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "AI Free Text Pro saved me hours of editing. The humanizer makes AI drafts sound natural and authentic."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-secondary/20">
                      <AvatarImage src={jamesChen} alt="James Chen" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-secondary/20 to-primary/20 text-secondary font-bold">
                        JC
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">James Chen</p>
                      <p className="text-sm text-muted-foreground">Graduate Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "The AI checker is incredibly accurate. Helps me ensure my academic writing maintains authenticity."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={sarahPatel} alt="Sarah Patel" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-bold">
                        SP
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Sarah Patel</p>
                      <p className="text-sm text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Perfect for refining AI-assisted content. The results sound genuinely human every time."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <LazySection fallbackClass="min-h-[690px] md:min-h-[720px]"><TestimonialCarousel /></LazySection>

        {/* Why Choose AI Free Text Pro */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Why Choose AI Free Text Pro
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Stay Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Maintain your unique voice while creating polished, professional content.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Stay Human</h3>
                <p className="text-sm text-muted-foreground">
                  Transform content into natural, engaging writing that resonates with readers.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Work Faster</h3>
                <p className="text-sm text-muted-foreground">
                  Streamline your writing process with intelligent refinement suggestions.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your content stays private and secure. No storage, no sharing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <LazySection fallbackClass="min-h-[430px] md:min-h-[450px]"><AnimatedStats /></LazySection>

        {/* Pricing Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Select the perfect plan for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              {/* Free Plan */}
              <Card className="relative hover:shadow-lg transition-shadow flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                  </div>
                  
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1,000 words per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic AI detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic humanization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email support</span>
                    </li>
                  </ul>
                  
                  <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="block mt-6">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Pro Writer Plan - Most Popular */}
              <Card className="relative border-primary shadow-lg md:scale-[1.02] flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-foreground text-background px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
                <div className="p-6 pt-8 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Pro Writer</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$24.99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">50,000 words per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium AI detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium humanization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export reports (PDF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics</span>
                    </li>
                  </ul>
                  
                  <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="block mt-6">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Unlimited Creator Plan */}
              <Card className="relative hover:shadow-lg transition-shadow flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Crown className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Unlimited Creator</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$59.99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Unlimited words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium AI detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium humanization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">24/7 Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export reports (PDF)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated account manager</span>
                    </li>
                  </ul>
                  
                  <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="block mt-6">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="group">
                  Compare all 5 plans
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-6">
                All plans are billed monthly. Cancel anytime with no questions asked.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Secure payments powered by Paystack. Your data is always protected.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Comparison Table */}
        <LazySection fallbackClass="min-h-[1740px] md:min-h-[1280px]"><ComparisonTable /></LazySection>

        {/* Use Cases Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Designed for Everyone</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                From students perfecting essays to professionals crafting reports, AI Free Text Pro helps you write better, faster.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-0 hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src={studentWriting} 
                  alt="Happy student using laptop for academic writing" 
                  className="w-full h-48 object-cover"
                  width={600}
                  height={192}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-card">
                    <BookOpen className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Students</h3>
                  <p className="text-muted-foreground mb-6">
                    Perfect your essays, research papers, and assignments. Ensure authenticity while maintaining academic integrity and improving writing quality.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Essay refinement and polishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Research paper improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Academic integrity checking</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-0 hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src={researcherWorking} 
                  alt="Researcher working on academic papers in modern office" 
                  className="w-full h-48 object-cover"
                  width={600}
                  height={192}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-card">
                    <Target className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Researchers</h3>
                  <p className="text-muted-foreground mb-6">
                    Ensure your technical writing maintains authenticity while refining complex content for publication and peer review.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Technical content refinement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Publication-ready polishing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Authenticity verification</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-0 hover:shadow-lg transition-shadow overflow-hidden">
                <img 
                  src={writerProfessional} 
                  alt="Professional content writer working at modern office" 
                  className="w-full h-48 object-cover"
                  width={600}
                  height={192}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-card">
                    <Pen className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Professionals</h3>
                  <p className="text-muted-foreground mb-6">
                    Create compelling business content that resonates with your audience while maintaining professionalism and authenticity.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Business communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Marketing content creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional reports</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
            
            <div className="text-center pt-12">
              <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6">
                  Join Free, No Credit Card <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* API for Developers Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
                  <Zap className="h-4 w-4" />
                  Developer API
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful API for Developers</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Integrate AI humanization and detection directly into your product with our REST API. Simple authentication, real-time analytics, and 98% bypass accuracy, all programmatically.
                </p>
                <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> RESTful</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> 99.9% Uptime</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> Simple Auth</span>
                </div>
                <Link to="/api">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                    Explore the API <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div>
                <pre className="bg-card border border-border rounded-lg p-6 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                  <code>{`curl -X POST /v1/humanize \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your AI text here...", "style": "academic", "strength": "balanced"
  }'

# Response
{
  "humanized_text": "Natural text...", "confidence_score": 0.97, "detection_risk": "low"
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <LazySection fallbackClass="min-h-[4640px] md:min-h-[2320px]"><AboutSection /></LazySection>

        {/* Blog Links Section - Internal Linking */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Learn More About AI Detection & Humanization</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert guides to help you master AI content tools
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/blog/make-chatgpt-undetectable-2025">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">Make ChatGPT Undetectable: 2026 Guide</h3>
                    <p className="text-muted-foreground text-sm">
                      The ultimate guide to making AI writing completely undetectable by all major detectors
                    </p>
                  </div>
                </Card>
              </Link>

              <Link to="/blog/pass-all-ai-detectors-guide">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-xl">Pass All AI Detectors Guide</h3>
                    <p className="text-muted-foreground text-sm">
                      Definitive guide to bypassing ZeroGPT, Turnitin, Copyleaks and more
                    </p>
                  </div>
                </Card>
              </Link>

              <Link to="/blog/ai-detection-patterns-explained">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">AI Detection Patterns Explained</h3>
                    <p className="text-muted-foreground text-sm">
                      Understand perplexity, burstiness, and what AI detectors really look for
                    </p>
                  </div>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link to="/blog">
                <Button variant="outline" className="group">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Detector-Specific Landing Pages */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Bypass Specific AI Detectors</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Link to="/bypass-turnitin-ai-detection">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gradient-to-br from-card to-primary/5">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">Bypass Turnitin</h3>
                      <p className="text-muted-foreground text-sm">
                        97% success rate bypassing Turnitin's AI detection algorithm
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
                
                <Link to="/bypass-gptzero-detection">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gradient-to-br from-card to-secondary/5">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-bold text-xl">Bypass GPTZero</h3>
                      <p className="text-muted-foreground text-sm">
                        95% success rate against GPTZero's perplexity detection
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
                
                <Link to="/bypass-originality-ai">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full bg-gradient-to-br from-card to-primary/5">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">Bypass Originality.AI</h3>
                      <p className="text-muted-foreground text-sm">
                        96% success rate for long-form content detection bypass
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
            
            {/* Use Case Pages */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Solutions for Your Needs</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Link to="/ai-humanizer-for-students">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">For Students</h3>
                      <p className="text-muted-foreground text-sm">
                        Pass Turnitin checks while maintaining academic integrity. Perfect for essays, research papers, and assignments.
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        View student guide <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
                
                <Link to="/ai-humanizer-for-writers">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Pen className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-bold text-xl">For Content Writers</h3>
                      <p className="text-muted-foreground text-sm">
                        Scale content production 10x while maintaining authenticity. Ideal for blogs, articles, and marketing copy.
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        View writer guide <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-border/50">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex -space-x-4">
                    {["SC", "MW", "ER", "JO"].map((initials, i) => (
                      <div 
                        key={i} 
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground border-4 border-background"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-xl font-bold mb-2">Built by Experts in AI & Linguistics</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Our team includes Ph.D. researchers from MIT, Stanford, and Carnegie Mellon with decades of experience in NLP and machine learning.
                    </p>
                    <Link to="/team" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                      Meet our team <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pillar Hub: AI Humanizer Spokes */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <LazySection fallbackClass="min-h-[1300px] md:min-h-[600px]"><PillarHubLinksModule hub="humanizer" currentPage="/" limit={6} title="AI Humanizer Resources" /></LazySection>
            <LazySection fallbackClass="min-h-[150px]"><CrossHubNavModule currentHub="humanizer" /></LazySection>
          </div>
        </section>

        {/* Newsletter Signup */}
        <LazySection fallbackClass="min-h-[460px] md:min-h-[530px]"><NewsletterSignup /></LazySection>

        {/* Enhanced FAQ Section */}
        <LazySection fallbackClass="min-h-[1870px] md:min-h-[1680px]"><EnhancedFAQ /></LazySection>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-16 border border-border/50">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Write Smarter?
              </h2>
              <p className="text-lg md:text-2xl text-muted-foreground">
                Join 50,000+ writers creating authentic, polished content with AI Free Text Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl hover:shadow-2xl shadow-primary/20 w-full font-bold transition-all group">
                    Start Writing Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 w-full font-bold transition-all group border-2">
                    View Live Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
