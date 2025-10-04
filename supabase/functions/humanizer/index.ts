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

    console.log('Humanizing text:', text.substring(0, 100));

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
            content: `You are a professional humanizer. Transform AI-like text into natural, human-like writing by:

1. Varying sentence length - mix short punchy sentences with longer, more complex ones
2. Adding natural flow - use transitions that sound conversational, not robotic
3. Including subtle imperfections - occasional contractions, informal phrasing where appropriate
4. Using richer vocabulary - replace generic words with more specific, vivid alternatives
5. Adding human touches - personal perspective, natural emphasis, relatable examples
6. Maintaining authenticity - ensure the tone feels genuine and conversational
7. Preserving the original meaning - keep all key points and information intact

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

    return new Response(JSON.stringify({ humanizedText }), {
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
