-- Create blog_thumbnails table
CREATE TABLE public.blog_thumbnails (
  slug TEXT PRIMARY KEY,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_thumbnails ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view blog thumbnails"
  ON public.blog_thumbnails
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can insert/update (for admin generation)
CREATE POLICY "Authenticated users can insert blog thumbnails"
  ON public.blog_thumbnails
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog thumbnails"
  ON public.blog_thumbnails
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create public storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-thumbnails', 'blog-thumbnails', true);

-- Public read for storage
CREATE POLICY "Public read blog thumbnails storage"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'blog-thumbnails');

-- Authenticated upload
CREATE POLICY "Auth upload blog thumbnails storage"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-thumbnails');

-- Service role full access
CREATE POLICY "Service role manage blog thumbnails storage"
  ON storage.objects
  FOR ALL
  TO service_role
  USING (bucket_id = 'blog-thumbnails');