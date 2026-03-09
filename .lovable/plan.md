

# Plan: Showcase API Capability on Marketing Pages

## What to build

Three touchpoints to promote the new API across the marketing site, targeting developers and SaaS teams.

---

## 1. New Dedicated `/api` Landing Page

A developer-focused marketing page (`src/pages/Api.tsx`) with:

- **Hero section**: Headline like "Build with AI Free Text Pro API", subheadline about programmatic access to humanization and detection, CTA button to the API Developer Portal
- **Code snippet showcase**: Tabbed code examples (cURL, Python, JavaScript) showing a simple `POST /api-humanize` request and response -- static/hardcoded, not live
- **Key benefits cards**: Rate limits, 98% accuracy, simple REST interface, API key management
- **Use cases for developers**: Content platforms, CMS plugins, writing tools, agency automation
- **Pricing/tier reference**: Which plans include API access, link to `/pricing`
- **FAQ section** (4-5 developer-focused FAQs) with JSON-LD schema
- **CTA**: Link to `https://api.aifreetextpro.com/` (or wherever the portal lives)

Full SEO treatment: Helmet meta tags, BreadcrumbList JSON-LD, SoftwareApplication schema. Route added to `App.tsx`, sitemap entry.

## 2. Homepage API Section

Add a new section on `Index.tsx` (between the Use Cases and Blog Links sections, around line 1150) with:

- Headline: "Powerful API for Developers"
- Short description (2-3 sentences) about programmatic access
- A minimal code snippet preview (single cURL example in a dark code block)
- CTA button: "Explore the API" linking to `/api`
- Developer-oriented trust signals (e.g., "RESTful", "99.9% uptime", "Simple authentication")

## 3. Navigation, Pricing, and Footer Updates

- **Navbar**: Add "API" link under the Tools dropdown menu (with a separator + "For Developers" label)
- **MobileNav**: Add corresponding API link
- **Footer**: Add "API" link to the "Product" section in footer
- **Pricing page**: Add an "API Access" feature line to Pro Writer and Unlimited Creator plans (the tiers that include API access), with a note like "API access included" or "REST API"
- **Sitemap**: Add `/api` URL entry

---

## Technical Notes

- The `/api` page follows the same component pattern as other marketing pages: `Navbar`, `Footer`, `Breadcrumbs`, `Helmet`, `Card` components
- All CTAs point to the external API portal URL (to be confirmed -- likely `https://api.aifreetextpro.com/` or `https://app.aifreetextpro.com/api`)
- Code snippets are static JSX with syntax-highlighted `<pre>` blocks styled with Tailwind (monospace, dark background, rounded corners)
- No backend changes needed -- this is purely marketing content

