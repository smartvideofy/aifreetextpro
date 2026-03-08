

# Plan: Remove Admin Thumbnail Generator

Now that all thumbnails are generated and stored, we can clean up the admin utility.

## Changes

### 1. Delete `src/pages/AdminThumbnails.tsx`
Remove the entire file.

### 2. Edit `src/App.tsx`
- Remove the `AdminThumbnails` lazy import (line 53)
- Remove the `/admin/thumbnails` route (line 188)

That's it — two quick changes for a cleaner codebase. The generated thumbnails remain safely stored in the database and storage bucket.

