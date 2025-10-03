import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Brain } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AIChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{ ai_probability: number; human_probability: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to check");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('ai-checker', {
        body: { text }
      });

      if (error) throw error;

      setResult(data);
      toast.success("Analysis complete!");
    } catch (error) {
      console.error('Error checking text:', error);
      toast.error("Failed to analyze text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center gap-2 text-primary">
            <Brain className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Content Detector
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste your text below and let our advanced AI analyze whether it was written by a human or AI
          </p>
        </div>

        <Card className="p-6 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-700">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Your Text</label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here for AI detection analysis..."
              className="min-h-[300px] resize-none bg-background/50 border-border/50 focus:border-primary transition-all"
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {text.length} characters
              </p>
            </div>
          </div>

          <Button
            onClick={handleCheck}
            disabled={isLoading || !text.trim()}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Check Text"
            )}
          </Button>
        </Card>

        {result && (
          <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-500">
            <h3 className="text-xl font-semibold text-center">Analysis Results</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">AI Probability</span>
                  <span className="text-2xl font-bold text-primary">{result.ai_probability}%</span>
                </div>
                <div className="h-3 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out"
                    style={{ width: `${result.ai_probability}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Human Probability</span>
                  <span className="text-2xl font-bold text-secondary">{result.human_probability}%</span>
                </div>
                <div className="h-3 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary/80 transition-all duration-1000 ease-out"
                    style={{ width: `${result.human_probability}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-center text-sm text-muted-foreground">
                {result.ai_probability > result.human_probability
                  ? "This text appears to be AI-generated"
                  : "This text appears to be human-written"}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIChecker;
