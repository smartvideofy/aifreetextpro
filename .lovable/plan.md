

# Plan: AI-Generated Unique Blog Thumbnails

## Approach

Use an AI image generation model (available via Lovable AI — `google/gemini-3-pro-image-preview`) to generate a unique thumbnail for each blog post, stored in file storage for reuse.

## How it works

### 1. Create edge function `generate-blog-thumbnail`
- Accepts `slug` and `title` as input
- Generates a prompt like: "Modern minimalist blog header illustration for an article titled '{title}', abstract tech/writing theme, gradient background, no text, 16:9 aspect ratio"
- Calls the Gemini image generation model
- Uploads the resulting image to a `blog-thumbnails` storage bucket
- Returns the public URL

### 2. Create `blog_thumbnails` database table
- `slug` (text, primary key), `image_url` (text), `created_at` (timestamp)
- No RLS needed — public read access for blog images

### 3. Create storage bucket `blog-thumbnails`
- Public bucket for serving images

### 4. Create admin/utility page or script to batch-generate
- Loops through all 100 slugs, calls the edge function, stores results
- Can be triggered manually; skips slugs that already have thumbnails

### 5. Update `Blog.tsx`
- Fetch thumbnail URLs from the database table
- Fall back to the existing category thumbnails if no generated image exists yet
- Use the real image URL for the card display

### 6. Update SEO `<Helmet>` in each blog post
- Add `og:image` meta tag pointing to the generated thumbnail URL
- This enables rich social sharing previews

## Alternative: Simpler approach

If AI generation feels over-engineered for now, we could instead:
- Create 25-30 unique illustrations manually (or generate them once outside the app)
- Place them in `src/assets/blog/` as static files
- Map each post to a specific image in `Blog.tsx`

This is simpler but requires manual curation. The AI approach scales automatically as new posts are added.

## Recommendation

Start with the AI generation approach — it scales to any number of posts and produces unique visuals. The edge function + storage pattern is reusable for future content.

