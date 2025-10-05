import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, Copy, Check, Download, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SAMPLE_AI_TEXT = "The implementation of artificial intelligence in modern business operations has revolutionized organizational efficiency. Companies are increasingly leveraging machine learning algorithms to optimize their processes. This technological advancement enables enhanced decision-making capabilities and improved operational outcomes across various industries.";

type ChangeStats = {
  wordsChanged: number;
  sentencesModified: number;
  restructured: number;
};

const Humanizer = () => {
  const [text, setText] = useState("");
  const [humanizedText, setHumanizedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [style, setStyle] = useState<'professional' | 'casual' | 'academic'>('professional');
  const [preserveFormatting, setPreserveFormatting] = useState(false);
  const [changeStats, setChangeStats] = useState<ChangeStats | null>(null);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  const handleHumanize = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to humanize");
      return;
    }

    setIsLoading(true);
    setHumanizedText("");
    setChangeStats(null);

    try {
      const { data, error } = await supabase.functions.invoke('humanizer', {
        body: { text, style, preserveFormatting }
      });

      if (error) {
        toast.error(data?.error || "Failed to humanize text. Please try again.");
        return;
      }

      setHumanizedText(data.humanizedText);
      setChangeStats(data.changeStats);
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

  const handleDownload = () => {
    const blob = new Blob([humanizedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'humanized-text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded!");
  };

  const loadSample = () => {
    setText(SAMPLE_AI_TEXT);
    setHumanizedText("");
    setChangeStats(null);
    toast.success("Sample AI text loaded");
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
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Original Text</label>
              <Button
                onClick={loadSample}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Try Sample Text
              </Button>
            </div>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your AI-generated or robotic text here..."
              className="min-h-[250px] resize-none bg-background/50 border-border/50 focus:border-secondary transition-all"
              maxLength={10000}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {text.length} / 10,000 characters • {wordCount} words
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="style" className="text-sm font-medium">Writing Style</Label>
              <Select value={style} onValueChange={(val: any) => setStyle(val)}>
                <SelectTrigger id="style" className="bg-background/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {style === 'professional' && 'Balanced formality with natural readability'}
                {style === 'casual' && 'Conversational and friendly tone'}
                {style === 'academic' && 'Scholarly with natural flow'}
              </p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Formatting Options</Label>
              <div className="flex items-center space-x-2 h-10">
                <Checkbox 
                  id="preserve" 
                  checked={preserveFormatting}
                  onCheckedChange={(checked) => setPreserveFormatting(checked as boolean)}
                />
                <label
                  htmlFor="preserve"
                  className="text-sm text-muted-foreground cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Preserve line breaks and spacing
                </label>
              </div>
              <p className="text-xs text-muted-foreground">
                Keep original paragraph structure intact
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
              <div className="flex gap-2">
                <Button
                  onClick={handleHumanize}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Regenerate
                </Button>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
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
            </div>

            {changeStats && (
              <div className="flex items-center gap-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <Sparkles className="h-4 w-4 text-secondary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{changeStats.wordsChanged}</span> words modified • 
                  <span className="font-semibold"> {changeStats.sentencesModified}</span> sentences restructured • 
                  <span className="font-semibold"> {changeStats.restructured}</span> simplified for flow
                </p>
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Before</h4>
                <div className="p-3 bg-background/30 rounded-lg border border-border/30 min-h-[150px] max-h-[300px] overflow-y-auto">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">After</h4>
                <div className="p-3 bg-background/50 rounded-lg border border-border/50 min-h-[150px] max-h-[300px] overflow-y-auto">
                  <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                    {humanizedText}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground pt-2 border-t border-border/50">
              <span>{humanizedText.length} characters • {humanizedText.trim().split(/\s+/).length} words</span>
              <span>✨ Humanized with AI</span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Humanizer;
