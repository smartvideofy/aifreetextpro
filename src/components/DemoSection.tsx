import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Brain, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SAMPLE_TEXT = "Artificial intelligence has revolutionized various industries by enabling automation and enhancing efficiency. Organizations are increasingly adopting machine learning algorithms to optimize workflows and improve decision-making processes. This technological advancement represents a significant milestone in human progress.";

const DemoSection = () => {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [activeTab, setActiveTab] = useState<"detect" | "humanize">("detect");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDetect = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('ai-checker', {
        body: { text }
      });

      if (error) {
        toast.error("Failed to analyze. Please try again.");
        return;
      }

      setResult({ type: 'detect', data });
      toast.success("Analysis complete!");
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to analyze text.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleHumanize = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('humanizer', {
        body: { text, style: 'professional', preserveFormatting: false, strength: 50, domain: 'general' }
      });

      if (error) {
        toast.error("Failed to humanize. Please try again.");
        return;
      }

      setResult({ type: 'humanize', data });
      toast.success("Text humanized!");
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to humanize text.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setText(SAMPLE_TEXT);
    setResult(null);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Try It <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Free</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test our AI detector and humanizer with the sample text below, or paste your own.
          </p>
        </div>

        <Card className="p-6 bg-card/50 backdrop-blur border-border/50 shadow-xl">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="detect" className="gap-2">
                <Brain className="w-4 h-4" />
                Detect AI
              </TabsTrigger>
              <TabsTrigger value="humanize" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Humanize
              </TabsTrigger>
            </TabsList>

            <div className="space-y-4">
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here..."
                className="min-h-[200px] resize-none bg-background/50"
                maxLength={5000}
              />
              <div className="text-xs text-muted-foreground text-right">
                {text.length} / 5,000 characters
              </div>
            </div>

            <TabsContent value="detect" className="space-y-4 mt-4">
              <div className="flex gap-2">
                <Button
                  onClick={handleDetect}
                  disabled={isLoading || !text.trim()}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 h-4 w-4" />
                      Detect AI
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline" size="lg">
                  Reset
                </Button>
              </div>

              {result?.type === 'detect' && (
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-in fade-in">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Detection Result</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">AI Probability</span>
                        <span className="text-2xl font-bold text-primary">{result.data.ai_probability}%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                          style={{ width: `${result.data.ai_probability}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        {result.data.reasoning || "Analysis complete"}
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="humanize" className="space-y-4 mt-4">
              <div className="flex gap-2">
                <Button
                  onClick={handleHumanize}
                  disabled={isLoading || !text.trim()}
                  className="flex-1 bg-gradient-to-r from-secondary to-primary"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Humanizing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Humanize Text
                    </>
                  )}
                </Button>
                <Button onClick={handleReset} variant="outline" size="lg">
                  Reset
                </Button>
              </div>

              {result?.type === 'humanize' && (
                <Card className="p-6 bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 animate-in fade-in">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Humanized Text</h4>
                    <div className="p-4 bg-background/50 rounded-lg text-sm leading-relaxed">
                      {result.data.humanizedText}
                    </div>
                    {result.data.changeStats && (
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>✓ {result.data.changeStats.wordsChanged} words changed</span>
                        <span>✓ {result.data.changeStats.sentencesModified} sentences improved</span>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
