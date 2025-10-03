import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Humanizer = () => {
  const [text, setText] = useState("");
  const [humanizedText, setHumanizedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleHumanize = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to humanize");
      return;
    }

    setIsLoading(true);
    setHumanizedText("");

    try {
      const { data, error } = await supabase.functions.invoke('humanizer', {
        body: { text }
      });

      if (error) throw error;

      setHumanizedText(data.humanizedText);
      toast.success("Text humanized successfully!");
    } catch (error) {
      console.error('Error humanizing text:', error);
      toast.error("Failed to humanize text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(humanizedText);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center gap-2 text-secondary">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Text Humanizer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform AI-generated text into natural, human-like writing with improved flow and authenticity
          </p>
        </div>

        <Card className="p-6 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-700">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Original Text</label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your AI-generated or robotic text here..."
              className="min-h-[250px] resize-none bg-background/50 border-border/50 focus:border-secondary transition-all"
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {text.length} characters
              </p>
            </div>
          </div>

          <Button
            onClick={handleHumanize}
            disabled={isLoading || !text.trim()}
            className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
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
        </Card>

        {humanizedText && (
          <Card className="p-6 space-y-4 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Humanized Result</h3>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            
            <div className="p-4 bg-background/50 rounded-lg border border-border/50 min-h-[200px]">
              <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                {humanizedText}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground pt-2 border-t border-border/50">
              <span>{humanizedText.length} characters</span>
              <span>✨ Humanized with AI</span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Humanizer;
