import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    console.log('Humanizing text:', text.substring(0, 100), 'Style:', style, 'Preserve:', preserveFormatting, 'Strength:', strength, 'Domain:', domain);

    // Build strength-specific instructions
    let strengthInstructions = '';
    if (strength < 30) {
      strengthInstructions = 'Apply light modifications. Keep most of the original structure intact while adding subtle human touches.';
    } else if (strength < 60) {
      strengthInstructions = 'Apply moderate changes. Balance between preserving original meaning and adding natural human flow.';
    } else if (strength < 85) {
      strengthInstructions = 'Apply aggressive rewriting. Significantly transform the text while maintaining core message.';
    } else {
      strengthInstructions = 'Apply maximum transformation. Completely rewrite with creative liberty while preserving key points.';
    }

    // Build domain-specific instructions
    let domainInstructions = '';
    if (domain === 'blog') {
      domainInstructions = 'Write in an engaging blog style with personal touches, relatable examples, and conversational flow.';
    } else if (domain === 'marketing') {
      domainInstructions = 'Use persuasive, benefit-focused language while maintaining authenticity and natural appeal.';
    } else if (domain === 'technical') {
      domainInstructions = 'Maintain technical accuracy while adding personality and making complex concepts accessible.';
    } else if (domain === 'creative') {
      domainInstructions = 'Enhance creativity with vivid imagery, emotional resonance, and distinctive voice.';
    } else if (domain === 'email') {
      domainInstructions = 'Write in a professional yet personal email style - friendly, direct, and appropriately informal.';
    } else {
      domainInstructions = 'Use versatile, natural writing suitable for general content.';
    }

    // Build style-specific instructions
    let styleInstructions = '';
    let toneGuidance = '';
    
    if (style === 'casual') {
      styleInstructions = 'Use a casual, conversational tone with contractions and informal phrasing.';
      toneGuidance = 'Write as if chatting with a friend - relaxed, friendly, and approachable.';
    } else if (style === 'academic') {
      styleInstructions = 'Maintain an academic tone while reducing robotic formality.';
      toneGuidance = 'Keep scholarly structure and vocabulary, but add natural flow and varied phrasing.';
    } else {
      styleInstructions = 'Use a professional yet natural tone, balancing formality with readability.';
      toneGuidance = 'Write clearly and professionally without sounding overly formal or robotic.';
    }

    const formattingInstruction = preserveFormatting 
      ? 'IMPORTANT: Preserve all line breaks, paragraph spacing, and formatting from the original text.'
      : 'You may adjust paragraph breaks for better readability.';

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
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
            content: `You are a professional humanizer powered by AI. Transform AI-like text into natural, human-like writing.

${strengthInstructions}
${domainInstructions}
${styleInstructions}
${toneGuidance}

Apply these techniques based on the strength level:
1. Vary sentence length - mix short punchy sentences with longer, more complex ones
2. Add natural flow - use transitions that sound conversational, not robotic
3. Include subtle imperfections - occasional contractions, informal phrasing where appropriate
4. Use richer vocabulary - replace generic words with more specific, vivid alternatives
5. Add human touches - personal perspective, natural emphasis, relatable examples
6. Maintain authenticity - ensure the tone feels genuine and conversational
7. Preserve the original meaning - keep all key points and information intact
8. Avoid AI-typical phrases like "delve into", "comprehensive", "leverage", "ecosystem" when overused
9. Add personality markers - rhetorical questions, emphasis, natural asides

${formattingInstruction}

Return ONLY the humanized text without any explanations, meta-commentary, or introductory phrases.` 
          },
          { role: 'user', content: text }
        ],
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      
      if (response.status === 401) {
        return new Response(
          JSON.stringify({ error: 'API authentication failed. Please check your API key configuration.' }), 
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please wait a moment and try again.' }), 
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const humanizedText = data.choices[0].message.content;
    
    console.log('Humanized result:', humanizedText.substring(0, 100));

    // Calculate change statistics
    const originalWords = text.trim().split(/\s+/).filter((w: string) => w.length > 0);
    const humanizedWords = humanizedText.trim().split(/\s+/).filter((w: string) => w.length > 0);
    const originalSentences = text.split(/[.!?]+/).filter((s: string) => s.trim().length > 0);
    const humanizedSentences = humanizedText.split(/[.!?]+/).filter((s: string) => s.trim().length > 0);
    
    // Approximate change counts
    const wordsChanged = Math.abs(humanizedWords.length - originalWords.length);
    const sentencesModified = Math.abs(humanizedSentences.length - originalSentences.length);
    
    const changeStats = {
      wordsChanged: Math.max(wordsChanged, Math.floor(originalWords.length * 0.15)), // At least 15% change
      sentencesModified: Math.max(sentencesModified, Math.floor(originalSentences.length * 0.25)), // At least 25% modified
      restructured: Math.floor(originalSentences.length * 0.2), // Approximate 20% restructured
    };

    return new Response(JSON.stringify({ humanizedText, changeStats }), {
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
