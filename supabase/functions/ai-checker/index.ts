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

    const { text } = await req.json();
    
    // Input validation
    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Please enter some text to analyze' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 50) {
      return new Response(
        JSON.stringify({ error: 'Please provide at least 50 words for accurate detection' }), 
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

    console.log('Checking text for AI probability:', text.substring(0, 100), `(${wordCount} words)`);

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
            content: `You are an advanced AI detection system. Analyze the text for AI-generated patterns and provide both overall and sentence-level analysis.

Analyze each sentence for:
- Repetitive sentence structures and predictable patterns
- Overly formal or generic language
- Lack of personal voice or unique perspective
- Perfect grammar with no natural human errors
- Uniform vocabulary complexity
- Generic transitions and connector words
- Absence of colloquialisms or informal expressions

Respond ONLY with JSON in this exact format: 
{
  "ai_probability": <number 0-100>, 
  "human_probability": <number 0-100>,
  "confidence": <"high" | "medium" | "low">,
  "reasoning": "<brief 1-2 sentence explanation>",
  "segments": [
    {
      "text": "<exact sentence or phrase from input>",
      "ai_probability": <number 0-100>,
      "reason": "<brief explanation why this segment was flagged>"
    }
  ]
}

Break the text into natural segments (sentences or short phrases). Each segment should have its own AI probability score and a brief reason explaining the detection (e.g., "Formal structure and repetitive phrasing", "Natural conversational tone", "Generic AI transitions").`
          },
          { role: 'user', content: text }
        ],
        temperature: 0.3,
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
    const result = data.choices[0].message.content;
    
    console.log('AI checker result:', result);
    
    // Parse the JSON response from OpenAI
    const parsedResult = JSON.parse(result);

    return new Response(JSON.stringify(parsedResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-checker function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(
      JSON.stringify({ error: 'Failed to analyze text. Please try again.' }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
