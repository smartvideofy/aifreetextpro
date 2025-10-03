import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
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

        {/* Footer Note */}
        <div className="text-center mt-16 animate-in fade-in duration-1000 delay-300">
          <p className="text-sm text-muted-foreground">
            Powered by OpenAI's GPT-4o Mini • Fast & Accurate Results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
