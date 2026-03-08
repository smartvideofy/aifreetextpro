-- Tighten blog_thumbnails insert/update to admin only
DROP POLICY "Authenticated users can insert blog thumbnails" ON public.blog_thumbnails;
DROP POLICY "Authenticated users can update blog thumbnails" ON public.blog_thumbnails;

CREATE POLICY "Admins can insert blog thumbnails"
  ON public.blog_thumbnails
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog thumbnails"
  ON public.blog_thumbnails
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));