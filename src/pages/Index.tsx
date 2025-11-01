import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Shield, FileText, Sparkles, Brain, Star, Pen, BookOpen, Target, Zap, Users, TrendingUp, Lock, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import beforeAfterDemo from "@/assets/before-after-demo.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import AboutSection from "@/components/AboutSection";
import { InContentAd } from "@/components/AdZone";
import ComparisonTable from "@/components/ComparisonTable";
import EnhancedFAQ from "@/components/EnhancedFAQ";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import HowToSchema from "@/components/HowToSchema";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HowToSchema />
      <Helmet>
        <title>Free AI Detector & Humanizer Tool - Detect ChatGPT & Make Text Human (2025)</title>
        <meta name="description" content="Transform AI text in 3 seconds with 98% accuracy. Free AI detector spots ChatGPT instantly. Humanize AI content to bypass detection. Join 50,000+ users. Free forever, no credit card." />
        <meta name="keywords" content="free ai detector, ai humanizer, detect chatgpt, detect ai text, chatgpt detector, bypass turnitin ai detection, make ai text human, ai content detector, zerogpt alternative, gptzero alternative" />
        <link rel="canonical" href="https://aifreetextpro.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Free AI Detector & Humanizer - Detect ChatGPT & Make Text Human (2025)" />
        <meta property="og:description" content="Transform AI text in 3 seconds. Free AI detector + humanizer. Join 50,000+ users. 98% accuracy. Free forever." />
        <meta property="og:url" content="https://aifreetextpro.com/" />
        <meta property="og:type" content="website" />
        
        {/* Enhanced Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Free Text Pro",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247",
              "bestRating": "5",
              "worstRating": "1"
            },
            "operatingSystem": "Web Browser",
            "applicationSubCategory": "AI Text Analysis Tool",
            "featureList": [
              "AI Content Detection",
              "Text Humanization",
              "PDF Export Reports",
              "Multiple Writing Styles",
              "File Upload Support (PDF, DOCX, TXT)",
              "Word-by-word Analysis"
            ],
            "screenshot": "https://aifreetextpro.com/before-after-demo.png"
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AI Free Text Pro - AI Detector & Humanizer",
            "description": "Free AI detector and humanizer tool. Detect ChatGPT and make AI text sound human with 98% accuracy.",
            "brand": {
              "@type": "Brand",
              "name": "AI Free Text Pro"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1247"
            }
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[{ label: "Home" }]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <AnimatedBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  Free AI Detector & Humanizer
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl">Detect ChatGPT & Make Text Human (2025)</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Free AI content detector spots ChatGPT instantly with 98% accuracy. Transform AI text to human writing in 3 seconds. Bypass Turnitin, ZeroGPT & all AI detectors. Trusted by 50,000+ students, writers & professionals.
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>50K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>98% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free Forever</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://app.aifreetextpro.com/auth" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary via-primary/90 to-secondary hover:opacity-90 shadow-xl hover:shadow-2xl shadow-primary/20 group w-full transition-all font-bold"
                  >
                    <Pen className="mr-2 h-5 w-5" />
                    Try Free — Instant Access
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="https://app.aifreetextpro.com/auth" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 group w-full transition-all font-bold border-2"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    See Live Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Why AI Free Text Pro?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-destructive">The Problem</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-destructive text-sm">✗</span>
                      </div>
                      <p className="text-muted-foreground">AI detectors flagging legitimate content</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-destructive text-sm">✗</span>
                      </div>
                      <p className="text-muted-foreground">Robotic, unnatural AI-generated text</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-destructive text-sm">✗</span>
                      </div>
                      <p className="text-muted-foreground">Risk of academic or professional consequences</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-destructive text-sm">✗</span>
                      </div>
                      <p className="text-muted-foreground">Time-consuming manual editing</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">The Solution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Dual Functionality</p>
                        <p className="text-sm text-muted-foreground">Both detect AND humanize in one platform</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Enterprise-Grade Detection</p>
                        <p className="text-sm text-muted-foreground">Advanced algorithms with detailed reports</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Natural Humanization</p>
                        <p className="text-sm text-muted-foreground">4 writing styles: Professional, Academic, Creative, Casual</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">File Support</p>
                        <p className="text-sm text-muted-foreground">PDF, DOCX, TXT uploads up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Demo Preview */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">See It in Action</h2>
                <p className="text-muted-foreground text-lg">Experience the power of AI detection and humanization</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur">
                <img 
                  src={beforeAfterDemo} 
                  alt="AI Free Text Pro dashboard demo - Before and after comparison showing AI text detection scores and humanized output with professional writing style" 
                  className="w-full h-auto"
                  width="1200"
                  height="675"
                  loading="eager"
                  decoding="async"
                />
                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                  <p className="text-sm text-muted-foreground mb-4">Join 50,000+ writers transforming their content</p>
                  <a href="https://app.aifreetextpro.com/auth">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                      Start Free — 1,000 Words <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              How AI Free Text Pro Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Input Your Content</h3>
                <p className="text-muted-foreground">
                  Import or paste your text directly into the intuitive writing workspace.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10 text-secondary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Smart Analysis & Refinement</h3>
                <p className="text-muted-foreground">
                  Advanced AI analyzes patterns and suggests improvements for authenticity and readability.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Polish & Publish</h3>
                <p className="text-muted-foreground">
                  Transform your content into polished, authentic writing ready for publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Powerful Features
            </h2>
            <p className="text-center text-muted-foreground text-lg md:text-xl mb-20 max-w-2xl mx-auto">
              Everything you need to detect and humanize AI content, all in one platform
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {/* AI Detector Card */}
              <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
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

                <a href="https://app.aifreetextpro.com/auth" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all group">
                    Try Detector Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </Card>

              {/* AI Humanizer Card */}
              <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
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

                <a href="https://app.aifreetextpro.com/auth" className="block">
                  <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transition-all group">
                    Try Humanizer Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </Card>
            </div>

            {/* Additional Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Real-Time Analytics</h4>
                <p className="text-sm text-muted-foreground">Track usage, monitor trends, and view detailed history with comprehensive dashboard.</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Multi-Format Support</h4>
                <p className="text-sm text-muted-foreground">Upload PDF, DOCX, TXT files up to 10MB or paste text directly.</p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Privacy First</h4>
                <p className="text-sm text-muted-foreground">Your content is never stored. Bank-grade encryption ensures complete security.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Ad Placement - After Core Features, good spacing from CTAs */}
        <InContentAd className="container mx-auto px-4" />

        {/* Trust & Credibility */}
        <section className="py-12 md:py-16 bg-card/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                <span className="text-primary font-bold">98% accuracy</span> tested on thousands of samples • Trusted by writers, students, and professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold">
                      MR
                    </div>
                    <div>
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "AI Free Text Pro saved me hours of editing. The humanizer makes AI drafts sound natural and authentic."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold">
                      JC
                    </div>
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

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold">
                      SP
                    </div>
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

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-card/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Writers Worldwide</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of professionals, students, and creators who rely on AI Free Text Pro
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary">2M+</div>
                <div className="text-sm text-muted-foreground">Texts Analyzed</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-4xl font-bold text-secondary">120+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-card/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Plan</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Select the perfect plan for your needs. All plans include our core AI detection and humanization features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Starter Plan */}
              <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Starter</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$0</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1,000 words per month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic AI detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic humanization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>

                  <a href="https://app.aifreetextpro.com/auth" className="block">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Lite Plan */}
              <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Lite</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$9.99</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">10,000 words per month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced AI detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced humanization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Priority email support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export reports (PDF)</span>
                    </div>
                  </div>

                  <a href="https://app.aifreetextpro.com/auth" className="block">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Pro Writer Plan - Most Popular */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/10 backdrop-blur border-primary/50 hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Pro Writer</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$24.99</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">50,000 words per month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium AI detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium humanization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export reports (PDF)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                  </div>

                  <a href="https://app.aifreetextpro.com/auth" className="block">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </Card>

              {/* Unlimited Creator Plan */}
              <Card className="p-6 bg-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Unlimited</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$59.99</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">Unlimited words</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium AI detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Premium humanization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">24/7 Priority support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Export reports (PDF)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                  </div>

                  <a href="https://app.aifreetextpro.com/auth" className="block">
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                      Subscribe Now
                    </Button>
                  </a>
                </div>
              </Card>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-8">
              All plans are billed monthly. Cancel anytime with no questions asked.
            </p>
          </div>
        </section>

        {/* Enhanced Comparison Table */}
        <ComparisonTable />

        {/* Use Cases Section */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Designed for Everyone</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From students perfecting essays to professionals crafting reports, AI Free Text Pro helps you write better, faster.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
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
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
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
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
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
              </Card>
            </div>
            
            <div className="text-center pt-12">
              <a href="https://app.aifreetextpro.com/auth">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6">
                  Join Free — No Credit Card <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Blog Links Section - Internal Linking */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About AI Detection & Humanization</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert guides to help you master AI content tools
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link to="/blog/how-to-detect-ai-generated-text">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">How to Detect AI-Generated Text</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn proven techniques to identify AI content and understand detection patterns
                    </p>
                  </div>
                </Card>
              </Link>

              <Link to="/blog/best-free-ai-humanizer-tools-2025">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-bold text-xl">Best AI Humanizer Tools 2025</h3>
                    <p className="text-muted-foreground text-sm">
                      Compare top AI humanizer tools and find the best solution for your needs
                    </p>
                  </div>
                </Card>
              </Link>

              <Link to="/blog/ai-detection-tools-compared-2025">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">AI Detection Tools Compared</h3>
                    <p className="text-muted-foreground text-sm">
                      See how GPTZero, ZeroGPT, and AI Free Text Pro compare in accuracy
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
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <EnhancedFAQ />

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
                <a href="https://app.aifreetextpro.com/auth" className="w-full sm:w-auto">
                  <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl hover:shadow-2xl shadow-primary/20 w-full font-bold transition-all group">
                    Start Writing Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="https://app.aifreetextpro.com/auth" className="w-full sm:w-auto">
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
