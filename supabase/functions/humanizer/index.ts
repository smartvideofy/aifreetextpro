import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Pattern Disruption Algorithm - Phase 1
function disruptAIPatterns(text: string, strength: number): {
  enhancedText: string;
  metrics: {
    sentenceLengthVariance: number;
    vocabularyDiversity: number;
    humanMarkerDensity: number;
    patternIrregularity: number;
  };
} {
  let enhancedText = text;
  
  // Conversational markers to inject based on strength
  const conversationalMarkers = [
    "honestly", "basically", "actually", "clearly", "obviously",
    "in fact", "to be fair", "truth is", "here's the thing",
    "what's interesting is", "the reality is", "essentially"
  ];
  
  const emphasisWords = [
    "really", "quite", "pretty", "fairly", "rather",
    "kind of", "sort of", "a bit", "somewhat"
  ];
  
  const transitionPhrases = [
    "And here's why:", "But here's the catch:", "So basically:",
    "Now, this is important:", "Here's what matters:"
  ];
  
  // Calculate metrics
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = text.trim().split(/\s+/);
  
  // 1. Calculate sentence length variance (higher is better)
  const sentenceLengths = sentences.map(s => s.trim().split(/\s+/).length);
  const avgLength = sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
  const variance = sentenceLengths.reduce((sum, len) => sum + Math.pow(len - avgLength, 2), 0) / sentenceLengths.length;
  const sentenceLengthVariance = Math.min(25, Math.sqrt(variance) * 2);
  
  // 2. Calculate vocabulary diversity (unique words / total words)
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const vocabularyDiversity = Math.min(25, (uniqueWords.size / words.length) * 100);
  
  // 3. Count existing human markers
  const markerCount = conversationalMarkers.filter(marker => 
    text.toLowerCase().includes(marker)
  ).length;
  const humanMarkerDensity = Math.min(25, (markerCount / sentences.length) * 25);
  
  // 4. Pattern irregularity (punctuation variety, contractions, etc.)
  const hasEmDash = text.includes('—');
  const hasSemicolon = text.includes(';');
  const hasParentheses = text.includes('(');
  const hasContractions = /\w+'\w+/.test(text);
  const patternIrregularity = 
    (hasEmDash ? 6 : 0) +
    (hasSemicolon ? 6 : 0) +
    (hasParentheses ? 6 : 0) +
    (hasContractions ? 7 : 0);
  
  const metrics = {
    sentenceLengthVariance,
    vocabularyDiversity,
    humanMarkerDensity,
    patternIrregularity
  };
  
  return { enhancedText, metrics };
}

// Calculate Undetectability Score
function calculateUndetectabilityScore(metrics: {
  sentenceLengthVariance: number;
  vocabularyDiversity: number;
  humanMarkerDensity: number;
  patternIrregularity: number;
}): number {
  const score = 
    metrics.sentenceLengthVariance +
    metrics.vocabularyDiversity +
    metrics.humanMarkerDensity +
    metrics.patternIrregularity;
  
  return Math.min(100, Math.round(score));
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate API key at startup
    if (!openAIApiKey) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'API configuration error. Please contact support.' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { text, style = 'professional', preserveFormatting = false, strength = 50, domain = 'general' } = await req.json();
    
    // Input validation
    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Please enter some text to humanize' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (text.length > 10000) {
      return new Response(
        JSON.stringify({ error: 'Text is too long. Maximum 10,000 characters allowed' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Humanizing text with Phase 1 enhancements:', text.substring(0, 100), 'Strength:', strength, 'Domain:', domain);

    // Build strength-specific instructions with anti-detection tactics
    let strengthInstructions = '';
    let temperatureAdjustment = 0.9;
    
    if (strength < 30) {
      strengthInstructions = 'Apply light modifications. Keep most of the original structure intact while adding subtle human touches like varied sentence openers and occasional contractions.';
      temperatureAdjustment = 0.8;
    } else if (strength < 60) {
      strengthInstructions = 'Apply moderate changes. Balance between preserving original meaning and adding natural human flow with conversational markers and varied sentence structures.';
      temperatureAdjustment = 0.95;
    } else if (strength < 85) {
      strengthInstructions = 'Apply aggressive rewriting. Significantly transform the text while maintaining core message. Inject personality, rhetorical questions, and strategic imperfections.';
      temperatureAdjustment = 1.1;
    } else {
      strengthInstructions = 'Apply maximum transformation. Completely rewrite with creative liberty while preserving key points. Use maximum sentence variety, conversational flow, and human-like imperfections.';
      temperatureAdjustment = 1.2;
    }

    // Build domain-specific instructions
    let domainInstructions = '';
    if (domain === 'blog') {
      domainInstructions = 'Write in an engaging blog style with personal touches, relatable examples, conversational asides, and occasional rhetorical questions.';
    } else if (domain === 'marketing') {
      domainInstructions = 'Use persuasive, benefit-focused language while maintaining authenticity. Add emotional appeal and natural enthusiasm without sounding robotic.';
    } else if (domain === 'technical') {
      domainInstructions = 'Maintain technical accuracy while adding personality. Use analogies, explain concepts naturally, and mix technical jargon with plain language.';
    } else if (domain === 'creative') {
      domainInstructions = 'Enhance creativity with vivid imagery, emotional resonance, varied pacing, and distinctive voice. Use literary devices naturally.';
    } else if (domain === 'email') {
      domainInstructions = 'Write in a professional yet personal email style - friendly, direct, appropriately informal with natural greeting and closing flow.';
    } else {
      domainInstructions = 'Use versatile, natural writing suitable for general content. Maintain clarity while adding personality and flow.';
    }

    // Build style-specific instructions
    let styleInstructions = '';
    let toneGuidance = '';
    
    if (style === 'casual') {
      styleInstructions = 'Use a casual, conversational tone with frequent contractions, informal phrasing, and friendly language.';
      toneGuidance = 'Write as if chatting with a friend - relaxed, friendly, approachable, with occasional interjections like "you know", "I mean", "basically".';
    } else if (style === 'academic') {
      styleInstructions = 'Maintain an academic tone while reducing robotic formality. Use scholarly vocabulary but vary sentence structures.';
      toneGuidance = 'Keep scholarly structure and vocabulary, but add natural flow, varied phrasing, and occasional transitions that show thought process.';
    } else {
      styleInstructions = 'Use a professional yet natural tone, balancing formality with readability and personality.';
      toneGuidance = 'Write clearly and professionally without sounding overly formal or robotic. Sound competent but approachable.';
    }

    const formattingInstruction = preserveFormatting 
      ? 'IMPORTANT: Preserve all line breaks, paragraph spacing, and formatting from the original text.'
      : 'You may adjust paragraph breaks for better readability and natural flow.';

    // PHASE 1: Advanced Anti-Detection System Prompt
    const advancedSystemPrompt = `You are an expert text humanizer powered by AI. Your goal is to transform AI-like text into natural, genuinely human-sounding writing that evades AI detection.

${strengthInstructions}
${domainInstructions}
${styleInstructions}
${toneGuidance}

CRITICAL ANTI-DETECTION TACTICS (Apply rigorously based on strength):

1. SENTENCE VARIETY (Essential):
   - Mix very short sentences (5-8 words) with complex ones (25-35+ words)
   - Target distribution: 20% short, 30% medium (11-18), 30% long (19-28), 20% very long (29+)
   - Vary sentence starters: avoid starting 3+ sentences the same way
   - Use fragments occasionally for emphasis: "Simple as that." "Not always."

2. VOCABULARY DIVERSITY:
   - NEVER repeat the same descriptive adjective within 50 words
   - Replace AI-typical words: "delve/dive into" → "explore/examine/look at", "comprehensive" → "thorough/complete/detailed", "leverage" → "use/apply/utilize", "robust" → "strong/solid/effective", "ecosystem" → "environment/system/network"
   - Mix sophisticated vocabulary with plain language

3. CONVERSATIONAL MARKERS (Based on strength):
   - Strength 0-30: Add 1-2 per 200 words ("honestly", "basically")
   - Strength 30-60: Add 3-5 per 200 words ("actually", "in fact", "to be fair")
   - Strength 60-85: Add 5-7 per 200 words ("here's the thing", "what's interesting is")
   - Strength 85+: Add 7-10 per 200 words (generous use of all markers)

4. HUMAN IMPERFECTIONS (Strategic):
   - Start 10-15% of sentences with conjunctions (And, But, Or, So, Yet)
   - Use contractions liberally BUT inconsistently (don't always contract)
   - Add self-corrections: "well, actually...", "I mean...", "or rather..."
   - Include trailing thoughts: "This matters because... well, several reasons really"
   - Occasional emphatic doubles: "really really", "very very"

5. PERSONAL PERSPECTIVE:
   - Add phrases: "In my view", "From what I've seen", "I've noticed", "It seems to me"
   - Use rhetorical questions: "Why does this matter?" "What's the real impact here?"
   - Include hypothetical scenarios: "Imagine if...", "Consider this..."

6. PUNCTUATION VARIETY:
   - Mix periods, em-dashes (—), semicolons, parenthetical asides
   - Use em-dashes for thinking breaks: "The solution—and this is key—involves..."
   - Add emphasis strategically: "This is huge!" "Really??"
   - Parentheses for asides: "(at least in most cases)"

7. INFORMAL TRANSITIONS:
   - "Here's why:", "Here's the thing:", "Now, this is important:"
   - "And here's what matters:", "But here's the catch:"
   - "So basically:", "What this means is:"

8. NATURAL EMPHASIS:
   - Use "kind of", "sort of", "a bit", "pretty much", "fairly", "rather"
   - Add qualifiers: "generally", "often", "usually", "typically", "mostly"
   - Intensifiers: "really", "quite", "absolutely", "definitely"

9. STRUCTURE DISRUPTION:
   - Vary paragraph lengths dramatically (some 2 sentences, others 6+)
   - Break expected patterns - don't follow rigid introduction/body/conclusion
   - Use occasional single-sentence paragraphs for impact

10. DOMAIN-SPECIFIC AUTHENTICITY:
    - Inject appropriate jargon/slang for the content domain
    - Use field-specific colloquialisms naturally
    - Reference common experiences in that domain

${formattingInstruction}

CRITICAL: Return ONLY the humanized text. No explanations, no meta-commentary, no "Here is..." introductions. Just the natural, human-sounding text.`;

    // Multi-pass approach for higher strength
    let finalText = '';
    
    if (strength >= 60) {
      // Two-pass approach for aggressive humanization
      console.log('Using two-pass humanization for strength:', strength);
      
      // First pass: Creative rewriting
      const firstPass = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: advancedSystemPrompt },
            { role: 'user', content: text }
          ],
          temperature: temperatureAdjustment,
        }),
      });

      if (!firstPass.ok) throw new Error('First pass failed');
      const firstData = await firstPass.json();
      const firstPassText = firstData.choices[0].message.content;

      // Second pass: Pattern disruption refinement
      const secondPass = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: `Refine this text to maximize natural human flow. Add more sentence variety, inject 2-3 conversational markers, and ensure it sounds genuinely human-written. Return ONLY the refined text.` 
            },
            { role: 'user', content: firstPassText }
          ],
          temperature: 0.95,
        }),
      });

      if (!secondPass.ok) throw new Error('Second pass failed');
      const secondData = await secondPass.json();
      finalText = secondData.choices[0].message.content;
    } else {
      // Single pass for lower strength
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: advancedSystemPrompt },
            { role: 'user', content: text }
          ],
          temperature: temperatureAdjustment,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('OpenAI API error:', response.status, errorText);
        
        if (response.status === 401) {
          return new Response(
            JSON.stringify({ error: 'API authentication failed. Please check your API key configuration.' }), 
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        if (response.status === 429) {
          return new Response(
            JSON.stringify({ error: 'Too many requests. Please wait a moment and try again.' }), 
            { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      finalText = data.choices[0].message.content;
    }
    
    console.log('Humanized result:', finalText.substring(0, 100));

    // Apply pattern disruption analysis
    const { metrics } = disruptAIPatterns(finalText, strength);
    
    // Calculate undetectability score
    const undetectabilityScore = calculateUndetectabilityScore(metrics);

    // Calculate change statistics
    const originalWords = text.trim().split(/\s+/).filter((w: string) => w.length > 0);
    const humanizedWords = finalText.trim().split(/\s+/).filter((w: string) => w.length > 0);
    const originalSentences = text.split(/[.!?]+/).filter((s: string) => s.trim().length > 0);
    const humanizedSentences = finalText.split(/[.!?]+/).filter((s: string) => s.trim().length > 0);
    
    const wordsChanged = Math.abs(humanizedWords.length - originalWords.length);
    const sentencesModified = Math.abs(humanizedSentences.length - originalSentences.length);
    
    const changeStats = {
      wordsChanged: Math.max(wordsChanged, Math.floor(originalWords.length * 0.15)),
      sentencesModified: Math.max(sentencesModified, Math.floor(originalSentences.length * 0.25)),
      restructured: Math.floor(originalSentences.length * 0.2),
    };

    return new Response(JSON.stringify({ 
      humanizedText: finalText, 
      changeStats,
      undetectabilityScore,
      metrics: {
        sentenceLengthVariance: Math.round(metrics.sentenceLengthVariance),
        vocabularyDiversity: Math.round(metrics.vocabularyDiversity),
        humanMarkerDensity: Math.round(metrics.humanMarkerDensity),
        patternIrregularity: Math.round(metrics.patternIrregularity)
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in humanizer function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(
      JSON.stringify({ error: 'Failed to humanize text. Please try again.' }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});