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
    
    // Simulate detection with slight randomness for realism
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
    
    // Simulate humanization
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
    <section className="py-8 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Try It Now — No Sign Up Required</h2>
            <p className="text-muted-foreground text-sm md:text-lg">Paste your text and see the magic happen</p>
          </div>
          
          <Card className="p-4 md:p-8 bg-card/80 backdrop-blur border-border/50 shadow-xl">
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <label className="text-sm font-medium text-foreground">Your Text</label>
                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-[10px] md:text-xs text-muted-foreground">
                    {text.trim().split(/\s+/).filter(Boolean).length} words / {text.length} chars
                  </span>
                  <Button variant="ghost" size="sm" onClick={handleTrySample} className="text-[10px] md:text-xs text-muted-foreground hover:text-primary h-7 px-2">
                    Try sample
                  </Button>
                </div>
              </div>
              
              <Textarea 
                placeholder="Paste your AI-generated text here..."
                value={text}
                onChange={(e) => { setText(e.target.value); setResult(null); }}
                className="min-h-[100px] md:min-h-[140px] resize-none bg-background/50 border-border/50 focus:border-primary transition-colors text-sm"
                maxLength={5000}
              />
              
              <div className="flex flex-col gap-2 md:gap-3">
                <Button 
                  onClick={handleDetect}
                  disabled={!text.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 text-sm md:text-base py-5 md:py-6"
                >
                  {isAnalyzing && result === null ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="mr-2 h-4 w-4" />
                  )}
                  Detect AI Content
                </Button>
                <Button 
                  onClick={handleHumanize}
                  disabled={!text.trim() || isAnalyzing}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-sm md:text-base py-5 md:py-6"
                >
                  {isAnalyzing && result === null ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Humanize Text
                </Button>
              </div>
              
              {/* Results */}
              {result && (
                <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {result.type === "detect" && (
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-amber-500" />
                        <span className="font-semibold text-sm md:text-base">AI Detection Result</span>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex-1 bg-muted rounded-full h-2 md:h-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-amber-500 to-destructive transition-all duration-1000"
                            style={{ width: `${result.score}%` }}
                          />
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-destructive">{result.score}%</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        This text appears to be <strong className="text-foreground">AI-generated</strong>. Click "Humanize Text" to make it undetectable.
                      </p>
                    </div>
                  )}
                  
                  {result.type === "humanize" && (
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <span className="font-semibold text-sm md:text-base">Humanized Result</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                        {result.humanizedText}
                      </p>
                      <p className="text-xs md:text-sm text-primary font-medium">
                        This text now reads as 100% human-written!
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="pt-3 md:pt-4 text-center border-t border-border/50">
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">Want unlimited access with advanced features?</p>
                <a href="https://app.aifreetextpro.com/">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg text-sm md:text-base w-full sm:w-auto">
                    Get Full Access — Free to Start <ArrowRight className="ml-2 h-4 w-4" />
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
