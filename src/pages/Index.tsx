import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Sparkles, ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/10">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-top duration-700">
            <div className="inline-flex items-center gap-3 text-primary mb-4">
              <Brain className="w-12 h-12" />
              <Sparkles className="w-12 h-12 text-secondary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              AI Text Tools
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Detect AI-generated content and transform robotic text into natural, human-like writing
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {/* AI Checker Card */}
            <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="text-2xl font-bold text-foreground">AI Checker</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  Advanced AI detection system that analyzes text and provides probability scores for AI-generated vs. human-written content.
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>Accurate AI probability analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>Instant results with detailed breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>Powered by GPT-4o Mini</span>
                  </li>
                </ul>
              </div>

              <Link to="/ai-checker" className="block">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all shadow-lg group">
                  Try AI Checker
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Humanizer Card */}
            <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-right duration-700">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                
                <h2 className="text-2xl font-bold text-foreground">Text Humanizer</h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  Transform AI-generated or robotic text into natural, engaging content with improved flow, vocabulary, and authenticity.
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span>Natural, human-like writing style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span>Varied sentence structure and flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    <span>Maintains original meaning</span>
                  </li>
                </ul>
              </div>

              <Link to="/humanizer" className="block">
                <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transition-all shadow-lg group">
                  Try Humanizer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-16 bg-card/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paste Your Text</h3>
              <p className="text-muted-foreground">
                Simply paste the text you want to analyze or humanize into the text area.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Processing</h3>
              <p className="text-muted-foreground">
                Our advanced AI models analyze or transform your text in seconds.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Get Results</h3>
              <p className="text-muted-foreground">
                Receive instant results with detailed analysis and actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Choose AI Text Tools</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get instant results with our optimized AI processing pipeline. No waiting, no delays.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Privacy First</h3>
              <p className="text-muted-foreground">
                Your text is processed in real-time and never stored. We respect your privacy.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Highly Accurate</h3>
              <p className="text-muted-foreground">
                Powered by state-of-the-art AI models for maximum accuracy and reliability.
              </p>
            </Card>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto px-4 py-16 bg-card/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Perfect For</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Content Creators</h3>
                <p className="text-sm text-muted-foreground">Ensure your content feels authentic and natural</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Educators</h3>
                <p className="text-sm text-muted-foreground">Verify student submissions for AI-generated content</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Marketers</h3>
                <p className="text-sm text-muted-foreground">Create engaging copy that resonates with your audience</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Researchers</h3>
                <p className="text-sm text-muted-foreground">Analyze text authenticity for academic purposes</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Writers</h3>
                <p className="text-sm text-muted-foreground">Refine AI-assisted drafts to sound more human</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Businesses</h3>
                <p className="text-sm text-muted-foreground">Maintain authentic brand voice across all content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="container mx-auto px-4 py-16 text-center animate-in fade-in duration-1000 delay-300">
          <p className="text-sm text-muted-foreground">
            Powered by OpenAI's GPT-4o Mini • Fast & Accurate Results
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
