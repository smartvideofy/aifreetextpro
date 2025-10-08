import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles, Copy, Check, Download, RefreshCw, Clock, Info, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  trackHumanizerStart,
  trackHumanizerComplete,
  trackHumanizerCopy,
  trackHumanizerDownload,
  trackHumanizerRegenerate,
  trackHumanizerSample,
  trackHumanizerRecheck,
  trackError
} from "@/lib/analytics";

const SAMPLE_AI_TEXT = "Artificial intelligence has fundamentally transformed how businesses operate in the modern era. Organizations across diverse sectors are increasingly adopting machine learning algorithms to optimize workflows, enhance productivity, and streamline complex processes. This technological revolution enables companies to make more informed decisions, improve operational efficiency, and achieve better outcomes. However, successful integration requires careful evaluation of costs, benefits, and organizational readiness. Leaders must consider factors such as employee training, system compatibility, data security, and long-term scalability. The implementation process demands strategic planning, substantial investment, and ongoing commitment to adaptation. Companies that navigate these challenges effectively position themselves for sustained competitive advantage in an increasingly digital marketplace. The key lies in balancing innovation with practical execution, ensuring that technological adoption aligns with core business objectives and delivers measurable value.";

type ChangeStats = {
  wordsChanged: number;
  sentencesModified: number;
  restructured: number;
};

type QualityMetrics = {
  sentenceLengthVariance: number;
  vocabularyDiversity: number;
  humanMarkerDensity: number;
  patternIrregularity: number;
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
  const [undetectabilityScore, setUndetectabilityScore] = useState<number | null>(null);
  const [qualityMetrics, setQualityMetrics] = useState<QualityMetrics | null>(null);
  const [processingStage, setProcessingStage] = useState<string>('');
  const [originalAiProbability, setOriginalAiProbability] = useState<number | null>(null);

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

    // Track start of humanization
    trackHumanizerStart(wordCount, style, strength);

    setIsLoading(true);
    setHumanizedText("");
    setChangeStats(null);
    setRecheckResult(null);
    setProcessingTime(null);
    setUndetectabilityScore(null);
    setQualityMetrics(null);
    setOriginalAiProbability(null);
    const startTime = Date.now();

    try {
      // Stage 1: Analyzing
      setProcessingStage('Analyzing patterns...');
      await new Promise(resolve => setTimeout(resolve, 300));

      // Stage 2: Rewriting
      setProcessingStage(strength >= 60 ? 'Multi-pass rewriting...' : 'Rewriting...');
      
      const { data, error } = await supabase.functions.invoke('humanizer', {
        body: { text, style, preserveFormatting, strength, domain }
      });

      // Stage 3: Enhancing
      setProcessingStage('Enhancing quality...');
      await new Promise(resolve => setTimeout(resolve, 200));

      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000;
      setProcessingTime(timeTaken);

      if (error) {
        trackError('humanizer_error', data?.error || 'Unknown error');
        toast.error(data?.error || "Failed to humanize text. Please try again.");
        setProcessingStage('');
        return;
      }

      setHumanizedText(data.humanizedText);
      setChangeStats(data.changeStats);
      setUndetectabilityScore(data.undetectabilityScore);
      setQualityMetrics(data.metrics);
      
      // Track successful completion
      trackHumanizerComplete(
        data.undetectabilityScore,
        timeTaken,
        data.changeStats?.wordsChanged || 0
      );
      
      // Stage 4: Finalizing
      setProcessingStage('Finalizing...');
      await new Promise(resolve => setTimeout(resolve, 200));
      
      toast.success("Text humanized successfully!");

      // Auto re-check if enabled
      if (autoRecheck) {
        setProcessingStage('Running AI detection check...');
        await performRecheck(data.humanizedText, true);
      }
    } catch (error) {
      console.error('Error humanizing text:', error);
      trackError('humanizer_exception', error instanceof Error ? error.message : 'Unknown error');
      toast.error("Failed to humanize text. Please try again.");
    } finally {
      setIsLoading(false);
      setProcessingStage('');
    }
  };

  const performRecheck = async (textToCheck: string, storeOriginal = false) => {
    try {
      // Check original if requested
      if (storeOriginal) {
        const { data: originalData } = await supabase.functions.invoke('ai-checker', {
          body: { text }
        });
        if (originalData) {
          setOriginalAiProbability(originalData.ai_probability);
        }
      }

      const { data, error } = await supabase.functions.invoke('ai-checker', {
        body: { text: textToCheck }
      });

      if (!error && data) {
        setRecheckResult(data);
        trackHumanizerRecheck(data.ai_probability);
      }
    } catch (error) {
      console.error('Error rechecking text:', error);
      trackError('humanizer_recheck_error', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const handleCopy = async () => {
    trackHumanizerCopy();
    await navigator.clipboard.writeText(humanizedText);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    trackHumanizerDownload();
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
    trackHumanizerSample();
    setText(SAMPLE_AI_TEXT);
    setHumanizedText("");
    setChangeStats(null);
    setRecheckResult(null);
    setUndetectabilityScore(null);
    setQualityMetrics(null);
    setOriginalAiProbability(null);
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

  const faqs = [
    {
      question: "What is AI text humanization?",
      answer: "AI humanization transforms robotic, AI-generated text into natural, human-like writing by varying sentence structure, adding personality, and making the content more engaging while preserving the original meaning."
    },
    {
      question: "Will humanized text bypass AI detectors?",
      answer: "Yes, our humanizer is specifically designed to reduce AI detection scores. Most humanized text scores below 30% on AI detectors, making it indistinguishable from human writing."
    },
    {
      question: "Does humanizing change the meaning of my text?",
      answer: "No, the humanizer preserves your original meaning and intent. It only improves readability, flow, and naturalness by restructuring sentences and varying vocabulary."
    },
    {
      question: "How many times can I use the humanizer for free?",
      answer: "Unlimited! Our humanizer is completely free with no usage limits or hidden fees."
    },
    {
      question: "What's the difference between humanization strengths?",
      answer: "Light (0-30%) makes minimal changes, Moderate (30-60%) balances naturalness and originality, Aggressive (60-85%) significantly rewrites the text, and Maximum (85-100%) completely transforms it for maximum humanization."
    }
  ];

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Humanize AI Text",
    "description": "Step-by-step guide to convert AI-generated text into natural, human-like writing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paste AI Text",
        "text": "Copy and paste your AI-generated or robotic text into the input field."
      },
      {
        "@type": "HowToStep",
        "name": "Choose Settings",
        "text": "Select your preferred writing style (professional, casual, or academic) and humanization strength."
      },
      {
        "@type": "HowToStep",
        "name": "Humanize",
        "text": "Click 'Humanize Text' button or press Ctrl+Enter to transform your text."
      },
      {
        "@type": "HowToStep",
        "name": "Copy Result",
        "text": "Review the humanized text and copy it to use in your content."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Helmet>
        <title>Free AI Humanizer - Convert AI Text to Human Writing | Bypass AI Detection</title>
        <meta name="description" content="Free AI humanizer tool to convert robotic AI text into natural, human-like writing. Bypass AI detectors, improve readability, and make AI content undetectable. Works with ChatGPT, GPT-4, and all AI writers." />
        <meta name="keywords" content="ai humanizer, humanize ai text, bypass ai detection, undetectable ai, ai to human text, make ai text human, chatgpt humanizer, ai text converter, bypass turnitin, humanize chatgpt" />
        <link rel="canonical" href="https://aifreetextpro.com/humanizer" />
        <meta property="og:title" content="Free AI Humanizer - Convert AI Text to Human Writing" />
        <meta property="og:description" content="Free AI humanizer tool to convert robotic AI text into natural, human-like writing. Bypass AI detectors and improve readability." />
        <meta property="og:url" content="https://aifreetextpro.com/humanizer" />
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-8 p-6">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Text Humanizer' }
        ]} />
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
                {processingStage || (autoRecheck ? 'Humanizing & Checking...' : 'Humanizing...')}
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
                  onClick={() => {
                    trackHumanizerRegenerate();
                    handleHumanize();
                  }}
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

            {undetectabilityScore !== null && (
              <Card className="p-5 bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/30">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      Undetectability Score
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-lg font-bold px-3 py-1 ${
                        undetectabilityScore >= 85 ? 'border-green-500/50 text-green-600' :
                        undetectabilityScore >= 70 ? 'border-blue-500/50 text-blue-600' :
                        undetectabilityScore >= 55 ? 'border-yellow-500/50 text-yellow-600' :
                        'border-red-500/50 text-red-600'
                      }`}
                    >
                      {undetectabilityScore}/100
                    </Badge>
                  </div>
                  
                  {/* Visual Gauge */}
                  <div className="space-y-2">
                    <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${
                          undetectabilityScore >= 85 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          undetectabilityScore >= 70 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                          undetectabilityScore >= 55 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                          'bg-gradient-to-r from-red-500 to-red-600'
                        }`}
                        style={{ width: `${undetectabilityScore}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Detectable</span>
                      <span>Highly Natural</span>
                    </div>
                  </div>

                  <p className="text-sm text-foreground">
                    {undetectabilityScore >= 85 ? (
                      <span className="text-green-600 font-medium">🎯 Excellent - Highly unlikely to be detected as AI</span>
                    ) : undetectabilityScore >= 70 ? (
                      <span className="text-blue-600 font-medium">✅ Good - Should pass most AI detectors</span>
                    ) : undetectabilityScore >= 55 ? (
                      <span className="text-yellow-600 font-medium">⚠️ Fair - May trigger some detectors</span>
                    ) : (
                      <span className="text-red-600 font-medium">⚡ Needs improvement - Try increasing strength</span>
                    )}
                  </p>

                  {/* Metrics Breakdown */}
                  {qualityMetrics && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/30">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Sentence Variety:</span>
                        <Badge variant="outline" className="text-xs">
                          {qualityMetrics.sentenceLengthVariance}/25
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Vocabulary:</span>
                        <Badge variant="outline" className="text-xs">
                          {qualityMetrics.vocabularyDiversity}/25
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Human Markers:</span>
                        <Badge variant="outline" className="text-xs">
                          {qualityMetrics.humanMarkerDensity}/25
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Pattern Mix:</span>
                        <Badge variant="outline" className="text-xs">
                          {qualityMetrics.patternIrregularity}/25
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {recheckResult && (
              <Card className={`p-4 ${
                recheckResult.ai_probability < 40 ? 'bg-green-500/10 border-green-500/30' :
                recheckResult.ai_probability < 70 ? 'bg-yellow-500/10 border-yellow-500/30' :
                'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    AI Detection Re-check
                  </h4>
                  <div className="flex items-center gap-2">
                    {originalAiProbability !== null && (
                      <div className="text-xs text-muted-foreground">
                        Before: <span className="font-semibold">{originalAiProbability}%</span>
                      </div>
                    )}
                    <Badge variant="outline" className={
                      recheckResult.ai_probability < 40 ? 'border-green-500/50 text-green-600' :
                      recheckResult.ai_probability < 70 ? 'border-yellow-500/50 text-yellow-600' :
                      'border-red-500/50 text-red-600'
                    }>
                      After: {recheckResult.ai_probability}%
                    </Badge>
                  </div>
                </div>

                {originalAiProbability !== null && (
                  <div className="mb-3 p-2 bg-background/50 rounded border border-border/30">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Improvement:</span>
                      <span className={`font-semibold ${
                        originalAiProbability - recheckResult.ai_probability > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {originalAiProbability - recheckResult.ai_probability > 0 ? '↓' : '↑'} 
                        {Math.abs(originalAiProbability - recheckResult.ai_probability)}% 
                        {originalAiProbability - recheckResult.ai_probability > 0 ? ' reduced' : ' increased'}
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-sm text-foreground mb-2">
                  {recheckResult.ai_probability < 40 ? (
                    '✅ Excellent! Text appears naturally written and likely to pass AI detectors.'
                  ) : recheckResult.ai_probability < 70 ? (
                    '⚠️ Some AI patterns still detected. Consider these actions:'
                  ) : (
                    '❌ Strong AI patterns detected. Recommended actions:'
                  )}
                </p>

                {recheckResult.ai_probability >= 40 && (
                  <ul className="text-xs text-muted-foreground space-y-1 ml-4 list-disc">
                    {recheckResult.ai_probability >= 70 && (
                      <>
                        <li>Increase humanization strength to 80+ for aggressive rewriting</li>
                        <li>Try regenerating with a different writing style</li>
                        <li>Consider manual edits to add more personal touches</li>
                      </>
                    )}
                    {recheckResult.ai_probability >= 40 && recheckResult.ai_probability < 70 && (
                      <>
                        <li>Increase strength by 20-30 points for better results</li>
                        <li>Add more conversational elements manually</li>
                        <li>Vary sentence structures further</li>
                      </>
                    )}
                  </ul>
                )}
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

        <FAQSection faqs={faqs} title="Common Questions About Text Humanization" />
      </div>
      <Footer />
    </div>
  );
};

export default Humanizer;
