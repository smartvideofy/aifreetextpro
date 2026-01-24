import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Search, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

const InteractiveDemo = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { type: "detect" | "humanize"; score?: number; humanizedText?: string }>(null);

  const sampleText = "Artificial intelligence has revolutionized many industries. The technology enables machines to learn from data and make decisions. Organizations are implementing AI solutions to improve efficiency and reduce costs. The impact of artificial intelligence continues to grow across various sectors.";

  const handleDetect = () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      const baseScore = 85 + Math.floor(Math.random() * 10);
      setResult({ type: "detect", score: baseScore });
    }, 1500);
  };

  const handleHumanize = () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({ 
        type: "humanize", 
        humanizedText: "AI has been a game-changer across countless industries. These smart systems learn from real-world data and make informed choices on their own. Companies everywhere are jumping on board, using AI to streamline operations and cut expenses. And honestly? The influence of AI just keeps expanding into new areas every day."
      });
    }, 2000);
  };

  const handleTrySample = () => {
    setText(sampleText);
    setResult(null);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Try It Now</h2>
            <p className="text-muted-foreground text-base md:text-lg">No sign up required — paste your text and see results instantly</p>
          </div>
          
          <Card className="p-6 md:p-8 shadow-lg border-border/50">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <label className="text-sm font-medium text-foreground">Your Text</label>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-xs text-muted-foreground">
                    {text.trim().split(/\s+/).filter(Boolean).length} words
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleTrySample} 
                    className="text-xs text-muted-foreground hover:text-primary h-7 px-2"
                  >
                    Try sample
                  </Button>
                </div>
              </div>
              
              <Textarea 
                placeholder="Paste your AI-generated text here..."
                value={text}
                onChange={(e) => { setText(e.target.value); setResult(null); }}
                className="min-h-[120px] md:min-h-[160px] resize-none bg-muted/30 border-border/50 focus:border-primary/50 focus:bg-background transition-all text-sm"
                maxLength={5000}
              />
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={handleDetect}
                  disabled={!text.trim() || isAnalyzing}
                  variant="outline"
                  className="py-6"
                >
                  {isAnalyzing && result === null ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="mr-2 h-4 w-4" />
                  )}
                  Detect AI
                </Button>
                <Button 
                  onClick={handleHumanize}
                  disabled={!text.trim() || isAnalyzing}
                  className="py-6"
                >
                  {isAnalyzing && result === null ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Humanize
                </Button>
              </div>
              
              {/* Results */}
              {result && (
                <div className="mt-6 p-5 rounded-xl bg-muted/40 border border-border/40 animate-fade-in">
                  {result.type === "detect" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <span className="font-semibold">AI Detection Result</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-muted rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-400 to-destructive transition-all duration-1000 ease-out"
                            style={{ width: `${result.score}%` }}
                          />
                        </div>
                        <span className="text-2xl font-bold text-destructive">{result.score}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This text appears to be <strong className="text-foreground">AI-generated</strong>. Click "Humanize" to make it undetectable.
                      </p>
                    </div>
                  )}
                  
                  {result.type === "humanize" && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Humanized Result</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {result.humanizedText}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        ✓ This text now reads as 100% human-written
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="pt-5 text-center border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-4">Want unlimited access with advanced features?</p>
                <a href="https://app.aifreetextpro.com/">
                  <Button size="lg" className="shadow-md w-full sm:w-auto">
                    Get Full Access — Free to Start 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
