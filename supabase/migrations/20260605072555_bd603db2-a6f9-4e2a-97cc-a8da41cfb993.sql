-- Fix: prevent users from escalating their subscription tier via profile UPDATE
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND subscription_tier = (SELECT p.subscription_tier FROM public.profiles p WHERE p.id = auth.uid())
  );

-- Fix: restrict blog-thumbnails storage uploads to admins only (aligns with table policy)
DROP POLICY IF EXISTS "Auth upload blog thumbnails storage" ON storage.objects;
CREATE POLICY "Admin upload blog thumbnails storage"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'blog-thumbnails'
    AND public.has_role(auth.uid(), 'admin')
  );