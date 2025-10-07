import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Brain, AlertCircle, Info, Filter, Clock, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { 
  trackAICheckerStart, 
  trackAICheckerComplete, 
  trackAICheckerSample, 
  trackAICheckerCopyReport,
  trackError 
} from "@/lib/analytics";

type Segment = {
  text: string;
  ai_probability: number;
  reason?: string;
};

type CheckResult = {
  ai_probability: number;
  human_probability: number;
  confidence?: string;
  reasoning?: string;
  segments?: Segment[];
};

const SAMPLE_TEXTS = {
  ai: "The implementation of artificial intelligence in modern business operations has revolutionized organizational efficiency. Companies are increasingly leveraging machine learning algorithms to optimize their processes and streamline workflows. This technological advancement enables enhanced decision-making capabilities and improved operational outcomes across various industries. Organizations must carefully evaluate the integration of these systems to maximize return on investment and ensure sustainable competitive advantages in the marketplace.",
  human: "Look, I've been working with AI tools for months now, and honestly? It's pretty wild how much they've changed my workflow. Sure, they're not perfect - sometimes they mess up in hilarious ways - but when they work, they're absolute game-changers for my productivity. The other day, I spent like 3 hours trying to get this one tool to understand what I wanted, and by the end I was ready to just do it the old-fashioned way. But then it clicked, and boom - task done in 5 minutes. That's the thing with these tools, you know? They're getting better every day."
};

const AIChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHighlights, setShowHighlights] = useState(true);
  const [segmentFilter, setSegmentFilter] = useState<'all' | 'ai' | 'uncertain' | 'human'>('all');
  const [processingTime, setProcessingTime] = useState<number | null>(null);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (text.trim() && wordCount >= 50 && !isLoading) {
          handleCheck();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [text, isLoading]);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  const handleCheck = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text to check");
      return;
    }

    if (wordCount < 50) {
      toast.error("Please provide at least 50 words for accurate detection");
      return;
    }

    // Track start of AI check
    trackAICheckerStart(wordCount);

    setIsLoading(true);
    setResult(null);
    setProcessingTime(null);
    const startTime = Date.now();

    try {
      const { data, error } = await supabase.functions.invoke('ai-checker', {
        body: { text }
      });

      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000;
      setProcessingTime(timeTaken);

      if (error) {
        trackError('ai_checker_error', data?.error || 'Unknown error');
        toast.error(data?.error || "Failed to analyze text. Please try again.");
        return;
      }

      setResult(data);
      
      // Track successful completion
      trackAICheckerComplete(data.ai_probability, timeTaken);
      
      toast.success("Analysis complete!");
    } catch (error) {
      console.error('Error checking text:', error);
      trackError('ai_checker_exception', error instanceof Error ? error.message : 'Unknown error');
      toast.error("Failed to analyze text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadSample = (type: 'ai' | 'human') => {
    trackAICheckerSample(type);
    setText(SAMPLE_TEXTS[type]);
    setResult(null);
    toast.success(`Sample ${type === 'ai' ? 'AI' : 'human'} text loaded`);
  };

  const getConfidenceColor = (confidence?: string) => {
    if (!confidence) return 'text-muted-foreground';
    switch (confidence.toLowerCase()) {
      case 'high': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-orange-500';
      default: return 'text-muted-foreground';
    }
  };

  const getResultZone = (aiProb: number) => {
    if (aiProb >= 70) return { label: 'Likely AI', color: 'from-red-500/20 to-red-600/20 border-red-500/50' };
    if (aiProb >= 40) return { label: 'Uncertain', color: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/50' };
    return { label: 'Likely Human', color: 'from-green-500/20 to-green-600/20 border-green-500/50' };
  };

  const getSegmentHighlight = (aiProb: number) => {
    if (aiProb >= 70) return 'bg-red-200/80 text-red-900 dark:bg-red-500/40 dark:text-red-50';
    if (aiProb >= 40) return 'bg-yellow-200/80 text-yellow-900 dark:bg-yellow-500/40 dark:text-yellow-50';
    return 'bg-green-200/80 text-green-900 dark:bg-green-500/40 dark:text-green-50';
  };

  const getBreakdownStats = () => {
    if (!result?.segments) return { ai: 0, uncertain: 0, human: 0 };
    
    return result.segments.reduce(
      (acc, segment) => {
        if (segment.ai_probability >= 70) acc.ai++;
        else if (segment.ai_probability >= 40) acc.uncertain++;
        else acc.human++;
        return acc;
      },
      { ai: 0, uncertain: 0, human: 0 }
    );
  };

  const copyAnalysisReport = () => {
    if (!result) return;
    
    trackAICheckerCopyReport();
    
    const zone = getResultZone(result.ai_probability);
    const stats = getBreakdownStats();
    
    const report = `
AI CONTENT ANALYSIS REPORT
===========================

OVERALL VERDICT: ${zone.label}
AI Probability: ${result.ai_probability}%
Human Probability: ${result.human_probability}%
Confidence Level: ${result.confidence ? result.confidence.charAt(0).toUpperCase() + result.confidence.slice(1) : 'N/A'}

ANALYSIS:
${result.reasoning || 'No detailed reasoning provided'}

BREAKDOWN:
• ${stats.ai} segment(s) flagged as likely AI
• ${stats.uncertain} segment(s) uncertain
• ${stats.human} segment(s) flagged as likely human

Generated by AI Content Detector
    `.trim();
    
    navigator.clipboard.writeText(report);
    toast.success("Analysis report copied to clipboard!");
  };

  const getDetailedSummary = () => {
    if (!result) return '';
    
    const aiProb = result.ai_probability;
    const indicators: string[] = [];
    
    if (result.segments) {
      const stats = getBreakdownStats();
      if (stats.ai > stats.human) indicators.push('repetitive sentence structures');
      if (aiProb >= 70) indicators.push('overly formal tone');
      if (aiProb >= 60) indicators.push('lack of personal voice');
    }
    
    if (aiProb >= 70) {
      return `This text is ${aiProb}% likely to be AI-written. Key indicators: ${indicators.join(', ') || 'multiple AI patterns detected'}.`;
    } else if (aiProb >= 40) {
      return `This text shows mixed characteristics (${aiProb}% AI probability). Some segments may be AI-assisted or edited.`;
    } else {
      return `This text is ${result.human_probability}% likely to be human-written. It shows natural language patterns and personal voice.`;
    }
  };

  const getSmartRecommendation = () => {
    if (!result) return null;
    
    const aiProb = result.ai_probability;
    
    if (aiProb >= 80) {
      return {
        level: 'critical',
        title: 'Major Revision Needed',
        description: 'This text is highly likely to be flagged by AI detectors.',
        steps: [
          'Add personal anecdotes or experiences',
          'Vary sentence structure and length',
          'Use contractions and informal language',
          'Include specific examples and details'
        ]
      };
    } else if (aiProb >= 60) {
      return {
        level: 'warning',
        title: 'Moderate Revision Recommended',
        description: 'Several AI patterns detected. Consider humanizing.',
        steps: [
          'Rewrite the most formal segments',
          'Add conversational transitions',
          'Break up long, complex sentences',
          'Include varied vocabulary'
        ]
      };
    } else if (aiProb >= 40) {
      return {
        level: 'info',
        title: 'Minor Adjustments Suggested',
        description: 'Some AI-like patterns present but mostly natural.',
        steps: [
          'Review highlighted segments',
          'Add more personality where appropriate',
          'Consider varying word choice'
        ]
      };
    } else {
      return {
        level: 'success',
        title: 'Looks Great!',
        description: 'This text appears naturally written.',
        steps: [
          'Your text shows strong human writing patterns',
          'Continue using natural, varied language',
          'Maintain your authentic voice'
        ]
      };
    }
  };

  const filteredSegments = result?.segments?.filter(segment => {
    if (segmentFilter === 'all') return true;
    if (segmentFilter === 'ai') return segment.ai_probability >= 70;
    if (segmentFilter === 'uncertain') return segment.ai_probability >= 40 && segment.ai_probability < 70;
    if (segmentFilter === 'human') return segment.ai_probability < 40;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Free AI Text Detector - Check AI-Generated Content | AI Free Text Pro</title>
        <meta name="description" content="Detect AI-generated text with 98% accuracy. Free AI content detector for ChatGPT, GPT-4, Claude, and all AI writing tools. Analyze text patterns and identify AI writing instantly." />
        <meta name="keywords" content="ai detector, ai text checker, chatgpt detector, detect ai writing, ai content detection, free ai checker, gpt detector, ai writing detector, zerogpt, copyleaks alternative" />
        <link rel="canonical" href="https://aifreetextpro.com/ai-checker" />
        <meta property="og:title" content="Free AI Text Detector - Check AI-Generated Content" />
        <meta property="og:description" content="Detect AI-generated text with 98% accuracy. Free AI content detector for ChatGPT, GPT-4, Claude, and all AI writing tools." />
        <meta property="og:url" content="https://aifreetextpro.com/ai-checker" />
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-8 p-6">
        <div className="text-center space-y-3 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center gap-2 text-primary">
            <Brain className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Content Detector
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced AI detection powered by AI - analyze text with precision and confidence
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className="text-xs gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            {showHowItWorks ? 'Hide' : 'How does this work?'}
          </Button>
        </div>

        {showHowItWorks && (
          <Card className="p-6 space-y-4 bg-card/50 border-primary/20 animate-in fade-in slide-in-from-top duration-300">
            <h3 className="font-semibold flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              How AI Detection Works
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Our AI detector analyzes your text for patterns commonly found in AI-generated content:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Repetitive sentence structures and predictable patterns</li>
                <li>Overly formal or generic language without personal voice</li>
                <li>Perfect grammar with no natural human variations</li>
                <li>Uniform vocabulary complexity throughout the text</li>
                <li>Generic transitions and connector words</li>
                <li>Absence of colloquialisms or informal expressions</li>
              </ul>
              <p className="text-xs pt-2 border-t border-border/50">
                <strong>Note:</strong> No AI detector is 100% accurate. Results should be used as a guide, not absolute proof. 
                Human-edited AI text or AI-assisted human writing may show mixed results.
              </p>
            </div>
          </Card>
        )}

        <Card className="p-6 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 shadow-xl animate-in fade-in slide-in-from-bottom duration-700">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-foreground">Your Text</label>
              <div className="flex gap-2">
                <Button
                  onClick={() => loadSample('ai')}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Try AI Sample
                </Button>
                <Button
                  onClick={() => loadSample('human')}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Try Human Sample
                </Button>
              </div>
            </div>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here for AI detection analysis..."
              className="min-h-[300px] resize-none bg-background/50 border-border/50 focus:border-primary transition-all"
              maxLength={10000}
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {text.length} / 10,000 characters • {wordCount} words
              </p>
              {wordCount > 0 && wordCount < 50 && (
                <p className="text-xs text-orange-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Need 50+ words for accuracy
                </p>
              )}
            </div>
          </div>

          <Button
            onClick={handleCheck}
            disabled={isLoading || !text.trim() || wordCount < 50}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
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
                Check Text
                <span className="ml-2 text-xs opacity-70">(Ctrl+Enter)</span>
              </>
            )}
          </Button>
        </Card>

        {result && (
          <Card className={`p-8 space-y-6 bg-gradient-to-br ${getResultZone(result.ai_probability).color} backdrop-blur border shadow-xl animate-in fade-in slide-in-from-bottom duration-500`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold">Analysis Results</h3>
                {processingTime && (
                  <Badge variant="outline" className="gap-1">
                    <Clock className="w-3 h-3" />
                    {processingTime.toFixed(2)}s
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                {result.confidence && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className={`text-sm font-medium ${getConfidenceColor(result.confidence)} cursor-help flex items-center gap-1`}>
                        {result.confidence.charAt(0).toUpperCase() + result.confidence.slice(1)} Confidence
                        <Info className="w-3 h-3" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs max-w-xs">
                        {result.confidence === 'high' && 'Strong indicators present - high reliability'}
                        {result.confidence === 'medium' && 'Moderate indicators - good reliability'}
                        {result.confidence === 'low' && 'Weak indicators - use with caution'}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                )}
                <Button
                  onClick={copyAnalysisReport}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Copy Report
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-card/50 rounded-lg border border-border/30">
              <p className="text-center text-2xl font-bold">
                {getResultZone(result.ai_probability).label}
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                {getDetailedSummary()}
              </p>
            </div>
            
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

            {result.segments && result.segments.length > 0 && (
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground">Breakdown</h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      {getBreakdownStats().ai} AI
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      {getBreakdownStats().uncertain} Uncertain
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      {getBreakdownStats().human} Human
                    </span>
                  </div>
                </div>
              </div>
            )}

            {result.reasoning && (
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Detailed Analysis: </span>
                  {result.reasoning}
                </p>
              </div>
            )}

            {getSmartRecommendation() && (
              <div className="pt-4 border-t border-border/50">
                <Card className={`p-4 ${
                  getSmartRecommendation()?.level === 'critical' ? 'bg-red-500/10 border-red-500/30' :
                  getSmartRecommendation()?.level === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                  getSmartRecommendation()?.level === 'info' ? 'bg-blue-500/10 border-blue-500/30' :
                  'bg-green-500/10 border-green-500/30'
                }`}>
                  <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4" />
                    {getSmartRecommendation()?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {getSmartRecommendation()?.description}
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {getSmartRecommendation()?.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}

            {result.segments && result.segments.length > 0 && (
              <div className="pt-6 border-t border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">Highlighted Text Analysis</h4>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <Button
                        onClick={() => setSegmentFilter('all')}
                        variant={segmentFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        className="text-xs h-7"
                      >
                        All
                      </Button>
                      <Button
                        onClick={() => setSegmentFilter('ai')}
                        variant={segmentFilter === 'ai' ? 'default' : 'outline'}
                        size="sm"
                        className="text-xs h-7"
                      >
                        AI ({getBreakdownStats().ai})
                      </Button>
                      <Button
                        onClick={() => setSegmentFilter('uncertain')}
                        variant={segmentFilter === 'uncertain' ? 'default' : 'outline'}
                        size="sm"
                        className="text-xs h-7"
                      >
                        Uncertain ({getBreakdownStats().uncertain})
                      </Button>
                      <Button
                        onClick={() => setSegmentFilter('human')}
                        variant={segmentFilter === 'human' ? 'default' : 'outline'}
                        size="sm"
                        className="text-xs h-7"
                      >
                        Human ({getBreakdownStats().human})
                      </Button>
                    </div>
                    <Button
                      onClick={() => setShowHighlights(!showHighlights)}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      {showHighlights ? 'Hide' : 'Show'} Highlights
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-border/30 leading-relaxed">
                  {(filteredSegments && filteredSegments.length > 0) ? (
                    filteredSegments.map((segment, index) => (
                      <span
                        key={index}
                        className={`${showHighlights ? getSegmentHighlight(segment.ai_probability) : ''} px-1 py-0.5 rounded transition-colors cursor-help`}
                        title={segment.reason ? `${segment.reason} (AI: ${segment.ai_probability}%)` : `AI Probability: ${segment.ai_probability}%`}
                      >
                        {segment.text}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No segments match the selected filter
                    </p>
                  )}
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AIChecker;
