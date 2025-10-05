import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, Copy, Check, Download, RefreshCw, Clock, Info, Brain } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const SAMPLE_AI_TEXT = "The implementation of artificial intelligence in modern business operations has revolutionized organizational efficiency. Companies are increasingly leveraging machine learning algorithms to optimize their processes and streamline workflows. This technological advancement enables enhanced decision-making capabilities and improved operational outcomes across various industries. Organizations must carefully evaluate the integration of these systems to maximize return on investment.";

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
  const [strength, setStrength] = useState<number>(50);
  const [domain, setDomain] = useState<string>('general');
  const [processingTime, setProcessingTime] = useState<number | null>(null);
  const [autoRecheck, setAutoRecheck] = useState(false);
  const [recheckResult, setRecheckResult] = useState<any>(null);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (text.trim() && !isLoading) {
          handleHumanize();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [text, isLoading]);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  const handleHumanize = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to humanize");
      return;
    }

    setIsLoading(true);
    setHumanizedText("");
    setChangeStats(null);
    setRecheckResult(null);
    setProcessingTime(null);
    const startTime = Date.now();

    try {
      const { data, error } = await supabase.functions.invoke('humanizer', {
        body: { text, style, preserveFormatting, strength, domain }
      });

      const endTime = Date.now();
      setProcessingTime((endTime - startTime) / 1000);

      if (error) {
        toast.error(data?.error || "Failed to humanize text. Please try again.");
        return;
      }

      setHumanizedText(data.humanizedText);
      setChangeStats(data.changeStats);
      toast.success("Text humanized successfully!");

      // Auto re-check if enabled
      if (autoRecheck) {
        await performRecheck(data.humanizedText);
      }
    } catch (error) {
      console.error('Error humanizing text:', error);
      toast.error("Failed to humanize text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const performRecheck = async (textToCheck: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('ai-checker', {
        body: { text: textToCheck }
      });

      if (!error && data) {
        setRecheckResult(data);
      }
    } catch (error) {
      console.error('Error rechecking text:', error);
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
    setRecheckResult(null);
    toast.success("Sample AI text loaded");
  };

  const getStrengthLabel = () => {
    if (strength < 30) return 'Light';
    if (strength < 60) return 'Moderate';
    if (strength < 85) return 'Aggressive';
    return 'Maximum';
  };

  const getStrengthDescription = () => {
    if (strength < 30) return 'Minimal changes, preserve most original structure';
    if (strength < 60) return 'Balanced approach with natural improvements';
    if (strength < 85) return 'Significant rewriting for maximum humanization';
    return 'Complete transformation with creative liberty';
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
            Transform AI-generated text into natural, human-like writing powered by AI
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

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Humanization Strength: {getStrengthLabel()}</Label>
              <Slider
                value={[strength]}
                onValueChange={(val) => setStrength(val[0])}
                min={0}
                max={100}
                step={10}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">{getStrengthDescription()}</p>
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
                <Label htmlFor="domain" className="text-sm font-medium">Content Domain</Label>
                <Select value={domain} onValueChange={setDomain}>
                  <SelectTrigger id="domain" className="bg-background/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="marketing">Marketing Copy</SelectItem>
                    <SelectItem value="technical">Technical Writing</SelectItem>
                    <SelectItem value="creative">Creative Writing</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {domain === 'general' && 'Versatile humanization for any content'}
                  {domain === 'blog' && 'Engaging, conversational blog style'}
                  {domain === 'marketing' && 'Persuasive with natural flow'}
                  {domain === 'technical' && 'Clear technical content with personality'}
                  {domain === 'creative' && 'Enhanced creativity and flair'}
                  {domain === 'email' && 'Professional yet personal communication'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Options</Label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="preserve" 
                    checked={preserveFormatting}
                    onCheckedChange={(checked) => setPreserveFormatting(checked as boolean)}
                  />
                  <label
                    htmlFor="preserve"
                    className="text-sm text-muted-foreground cursor-pointer leading-none"
                  >
                    Preserve line breaks and spacing
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="autoRecheck" 
                    checked={autoRecheck}
                    onCheckedChange={(checked) => setAutoRecheck(checked as boolean)}
                  />
                  <label
                    htmlFor="autoRecheck"
                    className="text-sm text-muted-foreground cursor-pointer leading-none"
                  >
                    Auto re-check with AI detector after humanizing
                  </label>
                </div>
              </div>
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
                {autoRecheck ? 'Humanizing & Checking...' : 'Humanizing...'}
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Humanize Text
                <span className="ml-2 text-xs opacity-70">(Ctrl+Enter)</span>
              </>
            )}
          </Button>
        </Card>

        {humanizedText && (
          <Card className="p-6 space-y-4 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold">Humanized Result</h3>
                {processingTime && (
                  <Badge variant="outline" className="gap-1">
                    <Clock className="w-3 h-3" />
                    {processingTime.toFixed(2)}s
                  </Badge>
                )}
              </div>
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

            {recheckResult && (
              <Card className={`p-4 ${
                recheckResult.ai_probability < 40 ? 'bg-green-500/10 border-green-500/30' :
                recheckResult.ai_probability < 70 ? 'bg-yellow-500/10 border-yellow-500/30' :
                'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    AI Detection Re-check
                  </h4>
                  <Badge variant="outline">
                    {recheckResult.ai_probability}% AI Probability
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {recheckResult.ai_probability < 40 ? (
                    '✅ Great! Text appears naturally written and likely to pass AI detectors.'
                  ) : recheckResult.ai_probability < 70 ? (
                    '⚠️ Some AI patterns still detected. Consider adjusting humanization strength.'
                  ) : (
                    '❌ Still showing strong AI patterns. Try increasing humanization strength or regenerating.'
                  )}
                </p>
              </Card>
            )}

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
              <span>✨ Powered by AI</span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Humanizer;
