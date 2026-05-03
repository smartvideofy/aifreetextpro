# Plan: Post-Prerender Parity Verification + Build Gate

## Goal
After `vite build` emits per-route static HTML, prove the parity gap is closed by re-running the existing audit against the build output, and fail the build if any audited route scores below 4/4.

## Steps

### 1. Tighten audit thresholds
Edit `scripts/seo/mobile-parity-audit.mjs`:
- Replace the current `score < 3` fail threshold with a strict `score < 4` (any FAIL or WARN flips exit code to 1).
- Add a final summary block listing every route that didn't hit 4/4 on either UA, with its specific issues, so CI logs are actionable.
- Keep the existing 0.5-credit WARN logic but treat WARNs as failures for gating purposes (report still shows them as WARN for human readability).

### 2. Add a local-server audit mode
The audit currently fetches `https://aifreetextpro.com` (live site, pre-prerender). To verify the build artifact before deploy, add support for auditing `dist/`:
- New script `scripts/seo/serve-and-audit.mjs` that:
  1. Spawns a static file server (using `sirv` or a tiny built-in `http.createServer` + `fs` — no new heavy dep) rooted at `dist/`, listening on an ephemeral port.
  2. Sets `AUDIT_BASE_URL=http://127.0.0.1:<port>` and runs `mobile-parity-audit.mjs` as a child process.
  3. Captures the audit's exit code, shuts the server down, and exits with the same code.
- This lets the audit run in CI without needing the live domain and confirms the prerendered files themselves are correct.

### 3. Expand route expectations to match prerender list
`scripts/seo/route-expectations.json` only covers 15 routes; the prerender list covers ~45. To make the gate meaningful:
- Extend `route-expectations.json` to include every route in `scripts/seo/prerender-routes.ts` that has distinctive copy.
- For each new entry: pull `titleMustInclude` / `descriptionMustInclude` keywords from the page's `<SEOHead>` props and the `requiredJsonLdTypes` from any schema components used (BreadcrumbList everywhere; Article + FAQPage on blog posts).
- Use a small helper section at the top of the JSON (comment-style) so future contributors know the keyword convention.

### 4. Wire the gate into the build pipeline
Edit `package.json` scripts:
- Add `"audit:parity": "node scripts/seo/serve-and-audit.mjs"`.
- Add `"build:verified": "vite build && npm run audit:parity"`.
- Do **not** change the existing `"build"` script (Lovable's hosted build invokes `vite build` directly; we don't want to break that pipeline). The verified variant is for CI / manual pre-deploy checks.

### 5. Document the workflow
Append a short section to `README.md`:
- How to run `npm run build:verified` locally.
- How to interpret `/mnt/documents/mobile-parity-report.md`.
- Note that the live-site audit (`AUDIT_BASE_URL=https://aifreetextpro.com node scripts/seo/mobile-parity-audit.mjs`) is the post-deploy smoke test.

### 6. Run it once and capture results
After implementation:
- Run `npm run build` to regenerate `dist/` with the prerender plugin.
- Run `npm run audit:parity` against `dist/`.
- Save the resulting `mobile-parity-report.md` as the verification artifact.
- If any route fails, iterate on `vite.config.ts` / `src/main.tsx` (most likely cause: `render-event` firing before Helmet flushes on slow routes — fix by extending the title-swap poll, or by adding the route to a known-slow list with a longer `renderAfterTime`).

## Files touched
- `scripts/seo/mobile-parity-audit.mjs` — strict threshold, failed-routes summary
- `scripts/seo/serve-and-audit.mjs` — new, serves `dist/` and runs the audit
- `scripts/seo/route-expectations.json` — expanded to ~45 routes
- `package.json` — `audit:parity`, `build:verified` scripts
- `README.md` — usage docs

## Out of scope
- Lighthouse / CWV mobile audit (next plan)
- GSC sitemap resubmission
- Adding the remaining ~95 blog posts to the prerender list
- Edge-side dynamic injection for personalized routes

## Deliverables
- Build that fails fast when any prerendered route regresses on title / description / canonical / JSON-LD
- A reproducible `npm run build:verified` command
- A fresh `mobile-parity-report.md` showing 4/4 across all audited routes

Approve to proceed.