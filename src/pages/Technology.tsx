import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { 
  Cpu, Brain, Layers, Zap, Shield, Target, 
  BarChart3, RefreshCw, Lock, Eye, Sparkles, CheckCircle, ArrowRight, Users 
} from "lucide-react";

const Technology = () => {
  const technologySchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How AI Free Text Pro Technology Works",
    "description": "Deep dive into our proprietary AI humanization technology, including stylometric analysis, contextual rewriting, and adaptive learning systems.",
    "author": {
      "@type": "Organization",
      "name": "AI Free Text Pro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Free Text Pro",
      "url": "https://aifreetextpro.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Our Technology - How AI Free Text Pro Works | Advanced AI Humanization</title>
        <meta name="description" content="Discover how AI Free Text Pro's proprietary technology transforms AI-generated text into natural, human-like writing. Learn about our stylometric analysis, contextual rewriting, and zero-knowledge architecture." />
        <meta name="keywords" content="AI humanization technology, NLP algorithms, stylometric analysis, AI detection bypass, text transformation technology" />
        <link rel="canonical" href="https://aifreetextpro.com/technology" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Technology - How AI Free Text Pro Works" />
        <meta property="og:description" content="Deep dive into our proprietary AI humanization technology and how it transforms robotic text into natural writing." />
        <meta property="og:url" content="https://aifreetextpro.com/technology" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="Our Technology - How AI Free Text Pro Works" />
        <meta name="twitter:description" content="Deep dive into our proprietary AI humanization technology and how it transforms robotic text into natural writing." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <script type="application/ld+json">
          {JSON.stringify(technologySchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Technology" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Advanced Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                The Science Behind Human-Like AI Text
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proprietary algorithms analyze linguistic fingerprints, detect AI patterns, and intelligently rewrite text to match authentic human writing styles.
              </p>
            </div>
          </div>
        </section>

        {/* How AI Detection Works */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding AI Detection</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To bypass AI detectors, you must first understand how they work. Here's what makes AI-generated text identifiable:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Perplexity Scores</h3>
                      <p className="text-muted-foreground text-sm">
                        AI detectors measure how "surprising" word choices are. AI text tends to have low perplexity because it predicts statistically common next words. Human text is more varied and unpredictable.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Burstiness Patterns</h3>
                      <p className="text-muted-foreground text-sm">
                        Humans write with varying sentence lengths and complexity "bursts." AI maintains consistent patterns, making text feel mechanically uniform.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Transition Markers</h3>
                      <p className="text-muted-foreground text-sm">
                        AI overuses certain transition words ("Furthermore," "Additionally," "In conclusion") that create detectable patterns. Humans use more diverse connectors.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Semantic Uniformity</h3>
                      <p className="text-muted-foreground text-sm">
                        AI maintains consistent register and tone throughout text. Human writers naturally shift between formal and casual language, adding personal touches.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Technology */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Humanization Works</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our multi-stage pipeline analyzes, transforms, and validates text to ensure natural, human-like output.
                </p>
              </div>

              {/* Pipeline Steps */}
              <div className="space-y-8">
                <Card className="p-8 border-border/50 bg-gradient-to-r from-primary/5 to-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Target className="w-6 h-6 text-primary" />
                        Stylometric Analysis
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Our AI first scans your text for the telltale signs of machine generation. We analyze over 200 linguistic features including:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Sentence length distribution",
                          "Vocabulary richness (TTR)",
                          "Transition word frequency",
                          "Passive vs. active voice ratio",
                          "Punctuation patterns",
                          "Paragraph structure",
                          "Semantic coherence",
                          "Register consistency"
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border/50 bg-gradient-to-r from-secondary/5 to-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <RefreshCw className="w-6 h-6 text-secondary" />
                        Contextual Rewriting
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Unlike simple paraphrasers, our engine understands context and meaning. We preserve your message while transforming how it's expressed:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span><strong>Sentence restructuring:</strong> Varying complexity and length to mimic human "burstiness"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span><strong>Vocabulary injection:</strong> Replacing overused AI words with natural alternatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span><strong>Tone modulation:</strong> Adding subtle personality and voice variations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span><strong>Transition diversification:</strong> Replacing repetitive connectors with varied alternatives</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border/50 bg-gradient-to-r from-primary/5 to-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-primary" />
                        Multi-Detector Validation
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Before returning your humanized text, we run it through our internal detection suite that mirrors major AI detectors:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { name: "GPTZero", status: "Tested" },
                          { name: "Turnitin", status: "Tested" },
                          { name: "Originality.AI", status: "Tested" },
                          { name: "ZeroGPT", status: "Tested" },
                          { name: "Copyleaks", status: "Tested" },
                          { name: "15+ Others", status: "Tested" }
                        ].map((detector, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm bg-primary/5 rounded-lg p-3">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="font-medium">{detector.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border/50 bg-gradient-to-r from-secondary/5 to-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary">4</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-secondary" />
                        Adaptive Learning
                      </h3>
                      <p className="text-muted-foreground">
                        AI detection technology evolves constantly. Our models are continuously retrained on the latest detector updates, ensuring our humanization stays ahead of the curve. When GPTZero or Turnitin update their algorithms, we update ours within 48 hours.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Zero-Knowledge Architecture</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Your privacy is paramount. We've built our infrastructure so your content is never stored, logged, or used for training.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-border/50">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">No Data Retention</h3>
                  <p className="text-muted-foreground text-sm">
                    Text is processed in memory and immediately discarded. We never store your content.
                  </p>
                </Card>

                <Card className="p-6 text-center border-border/50">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">End-to-End Encryption</h3>
                  <p className="text-muted-foreground text-sm">
                    All data transmission uses TLS 1.3 encryption. Your text is protected in transit.
                  </p>
                </Card>

                <Card className="p-6 text-center border-border/50">
                  <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">No Training on Your Data</h3>
                  <p className="text-muted-foreground text-sm">
                    Your content is never used to train our models. Your words remain yours.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Explore More</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/team" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Meet Our Team</h3>
                    <p className="text-sm text-muted-foreground mb-3">The experts behind our AI technology.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      View team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/case-studies" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <BarChart3 className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Case Studies</h3>
                    <p className="text-sm text-muted-foreground mb-3">Real results from our customers.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      See results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/blog/how-ai-detectors-work" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <Brain className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">How Detectors Work</h3>
                    <p className="text-sm text-muted-foreground mb-3">Deep dive into AI detection methods.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-10 text-center bg-gradient-to-br from-primary via-primary to-secondary border-0 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Technology</h2>
              <p className="text-xl mb-8 opacity-90">
                See our humanization in action. Try it free with no signup required.
              </p>
              <a 
                href="https://app.aifreetextpro.com/humanizer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-background text-foreground font-bold text-lg hover:bg-background/90 transition-colors"
              >
                Try It Free Now
              </a>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;