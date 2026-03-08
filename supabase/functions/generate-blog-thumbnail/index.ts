import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { slug, title } = await req.json();

    if (!slug || !title) {
      return new Response(
        JSON.stringify({ error: "slug and title are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if thumbnail already exists
    const { data: existing } = await supabase
      .from("blog_thumbnails")
      .select("image_url")
      .eq("slug", slug)
      .maybeSingle();

    if (existing?.image_url) {
      return new Response(
        JSON.stringify({ image_url: existing.image_url, cached: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate image via Lovable AI with retry logic
    const prompt = `Generate an image: a modern, professional blog header illustration for an article titled "${title}". Style: abstract, minimalist digital art with soft gradients. 16:9 landscape composition. No text, letters, words, or typography. Focus on abstract shapes, flowing lines, and a cohesive color palette. Professional and clean aesthetic suitable for a tech blog. On a clean background.`;

    console.log(`Generating thumbnail for: ${slug}`);

    const models = ["google/gemini-2.5-flash-image", "google/gemini-3-pro-image-preview"];
    let imageData: string | undefined;

    for (const model of models) {
      for (let attempt = 0; attempt < 2; attempt++) {
        console.log(`Trying model ${model}, attempt ${attempt + 1}`);
        
        const aiResponse = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "user", content: prompt }],
              modalities: ["image", "text"],
            }),
          }
        );

        if (aiResponse.status === 429) {
          const errorText = await aiResponse.text();
          console.error("Rate limited:", errorText);
          if (attempt === 0) {
            // Wait 15s and retry same model
            await new Promise(r => setTimeout(r, 15000));
            continue;
          }
          return new Response(
            JSON.stringify({ error: "Rate limited. Please try again later." }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        if (aiResponse.status === 402) {
          await aiResponse.text();
          return new Response(
            JSON.stringify({ error: "AI credits exhausted. Please add credits." }),
            { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }

        if (!aiResponse.ok) {
          const errorText = await aiResponse.text();
          console.error("AI gateway error:", aiResponse.status, errorText);
          if (attempt === 0) {
            await new Promise(r => setTimeout(r, 5000));
            continue;
          }
          break; // Try next model
        }

        const aiData = await aiResponse.json();
        imageData = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

        if (imageData) break;
        
        console.error("No image in response from", model, "- response:", JSON.stringify(aiData).slice(0, 300));
        // No image returned, try again or next model
        if (attempt === 0) {
          await new Promise(r => setTimeout(r, 3000));
        }
      }
      if (imageData) break;
    }

    if (!imageData) {
      throw new Error("No image generated after all retries");
    }

    // Extract base64 data
    const base64Match = imageData.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!base64Match) {
      throw new Error("Invalid base64 image data");
    }

    const imageFormat = base64Match[1]; // png, jpeg, etc.
    const base64Data = base64Match[2];

    // Convert base64 to Uint8Array
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Upload to storage
    const filePath = `${slug}.${imageFormat}`;
    const { error: uploadError } = await supabase.storage
      .from("blog-thumbnails")
      .upload(filePath, bytes, {
        contentType: `image/${imageFormat}`,
        upsert: true,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw new Error(`Failed to upload: ${uploadError.message}`);
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("blog-thumbnails")
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData.publicUrl;

    // Store in database
    const { error: dbError } = await supabase
      .from("blog_thumbnails")
      .upsert({ slug, image_url: imageUrl }, { onConflict: "slug" });

    if (dbError) {
      console.error("DB error:", dbError);
      throw new Error(`Failed to save to database: ${dbError.message}`);
    }

    console.log(`Generated thumbnail for ${slug}: ${imageUrl}`);

    return new Response(
      JSON.stringify({ image_url: imageUrl, cached: false }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("generate-blog-thumbnail error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
