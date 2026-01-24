import { useState, useEffect } from "react";
import { Search, Sparkles, FileText, CheckCircle, AlertTriangle, Copy, Download } from "lucide-react";

const ProductMockup = () => {
  const [activeTab, setActiveTab] = useState<"detector" | "humanizer">("detector");
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-animate demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Switch tabs periodically
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev === "detector" ? "humanizer" : "detector"));
      setAnimationStep(0);
    }, 12000);
    return () => clearInterval(tabInterval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Browser Chrome */}
      <div className="bg-card/90 backdrop-blur-xl rounded-xl border border-border/50 shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-background/50 rounded-lg text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-primary">🔒</span>
              app.aifreetextpro.com
            </div>
          </div>
        </div>

        {/* App Interface */}
        <div className="p-4 md:p-6 bg-gradient-to-b from-background/95 to-background/80">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => { setActiveTab("detector"); setAnimationStep(0); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "detector"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <Search className="w-4 h-4" />
              AI Detector
            </button>
            <button
              onClick={() => { setActiveTab("humanizer"); setAnimationStep(0); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "humanizer"
                  ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Humanizer
            </button>
          </div>

          {/* Detector Interface */}
          {activeTab === "detector" && (
            <div className="space-y-4 animate-fade-in">
              {/* Text Input Area */}
              <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Input Text</span>
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">247 words</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground/80 font-mono leading-relaxed">
                  <p className={`transition-all duration-500 ${animationStep >= 1 ? "bg-destructive/20 rounded px-1" : ""}`}>
                    Artificial intelligence has revolutionized many industries...
                  </p>
                  <p className={`transition-all duration-500 ${animationStep >= 2 ? "bg-destructive/20 rounded px-1" : ""}`}>
                    The technology enables machines to learn from data...
                  </p>
                  <p className={`transition-all duration-500 ${animationStep >= 3 ? "bg-amber-500/20 rounded px-1" : ""}`}>
                    Organizations are implementing AI solutions to improve...
                  </p>
                </div>
              </div>

              {/* Detection Results */}
              <div className="bg-gradient-to-r from-destructive/10 to-amber-500/10 rounded-lg p-4 border border-destructive/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-semibold">AI Content Detected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-destructive">87%</span>
                    <span className="text-xs text-muted-foreground">AI probability</span>
                  </div>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="h-2 bg-muted/50 rounded-full overflow-hidden mb-3">
                  <div 
                    className="h-full bg-gradient-to-r from-destructive to-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: animationStep > 0 ? "87%" : "0%" }}
                  />
                </div>

                {/* Word Analysis */}
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2 py-0.5 bg-destructive/20 text-destructive rounded">revolutionized</span>
                  <span className="px-2 py-0.5 bg-destructive/20 text-destructive rounded">enables</span>
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded">implementing</span>
                  <span className="px-2 py-0.5 bg-primary/20 text-primary rounded">efficiency</span>
                </div>
              </div>
            </div>
          )}

          {/* Humanizer Interface */}
          {activeTab === "humanizer" && (
            <div className="space-y-4 animate-fade-in">
              {/* Split View */}
              <div className="grid md:grid-cols-2 gap-3">
                {/* Original Text */}
                <div className="bg-muted/30 rounded-lg p-3 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-xs text-muted-foreground">Original (AI)</span>
                  </div>
                  <p className="text-xs text-muted-foreground/80 line-through decoration-destructive/50">
                    Artificial intelligence has revolutionized many industries. The technology enables machines to learn from data.
                  </p>
                </div>

                {/* Humanized Text */}
                <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary font-medium">Humanized</span>
                  </div>
                  <p className={`text-xs transition-all duration-700 ${animationStep > 0 ? "text-foreground" : "text-muted-foreground/60"}`}>
                    AI has been a game-changer across countless industries. These smart systems learn from real-world data and make choices on their own.
                  </p>
                </div>
              </div>

              {/* Style Options */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-full text-xs font-medium border border-secondary/30">
                  ✓ Professional
                </div>
                <div className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-full text-xs">
                  Academic
                </div>
                <div className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-full text-xs">
                  Creative
                </div>
                <div className="px-3 py-1.5 bg-muted/50 text-muted-foreground rounded-full text-xs">
                  Casual
                </div>
              </div>

              {/* Success State */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <div>
                      <span className="text-sm font-semibold text-primary">100% Human Score</span>
                      <p className="text-xs text-muted-foreground">Passes all major detectors</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 bg-background/50 rounded-lg hover:bg-background transition-colors">
                      <Download className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Badges - Desktop */}
      <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium shadow-lg animate-bounce">
        <Sparkles className="w-3 h-3" />
        Live Preview
      </div>
      
      <div className="absolute -bottom-3 -left-3 hidden md:flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs shadow-lg">
        <CheckCircle className="w-3 h-3 text-primary" />
        <span className="text-muted-foreground">Bypasses GPTZero, Turnitin, Originality</span>
      </div>
      
      {/* Mobile Trust Badges - Inline */}
      <div className="flex md:hidden flex-wrap justify-center gap-2 mt-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
          <Sparkles className="w-3 h-3" />
          Live Preview
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-full text-xs">
          <CheckCircle className="w-3 h-3 text-primary" />
          <span className="text-muted-foreground">Bypasses All Detectors</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMockup;
