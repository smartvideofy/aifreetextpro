
# Plan: Pinpoint Helmet flush failures on /ai-checker

Goal: when `/ai-checker` (or any route in a `DEBUG_ROUTES` list) is prerendered/audited, emit a tag-by-tag diff between what Helmet *should* have produced (the route's React tree) and what actually landed in the prerendered HTML, plus a timeline of when each Helmet tag was flushed during the Puppeteer render.

## 1. Prerender-time logging (`src/main.tsx`)

Add a debug branch that activates only when `window.__PRERENDER_DEBUG__` is true (set by the Puppeteer page via `pageContext`/`inject` for the routes we care about — initially `/ai-checker`).

For those routes:
- Log every `MutationRecord` on `<head>` to `console.log("[helmet-debug] +tag", outerHTML)` / `"-tag"` for removals, with `Date.now() - start` ms.
- Before dispatching `render-event`, dump a final inventory: counts and the full `outerHTML` of every `<title>`, `<meta>`, `<link rel=canonical>`, and `<script type="application/ld+json">` (parsed `@type`s) to console.
- Also dump `document.head.innerHTML.length` and the list of tags carrying `data-rh="true"` vs not.

Puppeteer's `console` events are surfaced by `@prerenderer/renderer-puppeteer` only when `consoleHandler` is wired, so:

## 2. Prerender plugin config (`vite.config.ts`)

- Add `inject: { __PRERENDER_DEBUG__: true }` scoped via a per-route override. The plugin supports a `routes` array of strings *or* objects; switch `/ai-checker` (and any path in `process.env.PRERENDER_DEBUG_ROUTES`) to `{ route, inject: { __PRERENDER_DEBUG__: true } }`.
- Add a `consoleHandler(route, message)` option that prefixes lines starting with `[helmet-debug]` and writes them to `dist/_debug/<slug>.log` (and stderr) so we keep the timeline after the build finishes.
- In `postProcess`, when the route is in the debug set, also write the final `rendered.html` to `dist/_debug/<slug>.html` for offline inspection.

## 3. Audit-time tag-by-tag diff (`scripts/seo/mobile-parity-audit.mjs`)

For routes flagged in `route-expectations.json` with `"debug": true` (start with `/ai-checker`):
- Extract every `<title>`, `<meta>` (by `name`/`property`), `<link rel=canonical>`, and JSON-LD `@type` from the raw HTML.
- Build an `expected` set from `route-expectations.json` (titleMustInclude, descriptionMustInclude, canonical, requiredJsonLdTypes).
- Emit a per-tag table to the report:

  ```text
  | Tag | Expected | Found | data-rh | Source |
  |-----|----------|-------|---------|--------|
  | <title> | "AI Checker..." | "Free AI Humanizer..." | no | static index.html (FALLBACK) |
  | meta[name=description] | "Detect AI..." | (missing) | — | NOT FLUSHED |
  | link[rel=canonical] | /ai-checker | /ai-checker | yes | helmet |
  | jsonld @type=SoftwareApplication | required | present | — | helmet |
  | jsonld @type=FAQPage | required | MISSING | — | NOT FLUSHED |
  ```

- For every tag, mark whether it has `data-rh="true"` (Helmet-managed) or not (static fallback survived).
- Log to stderr the same diff for quick CI scanning.

## 4. Optional: capture Helmet's own state

Patch `<SEOHead>` to, when `import.meta.env.PROD && window.__PRERENDER_DEBUG__`, call `Helmet.peek()` after mount inside a `useEffect` and `console.log("[helmet-debug] peek", JSON.stringify(state))`. This tells us what Helmet *thinks* it has, vs what the DOM observer sees — distinguishing "Helmet never ran" from "Helmet ran but didn't flush before snapshot."

## 5. Wiring

- New script: `npm run audit:debug` → `PRERENDER_DEBUG_ROUTES=/ai-checker npm run build && node scripts/seo/serve-and-audit.mjs` (no exit-on-fail; produces the diff section).
- Add a "Debug routes" section at the top of `mobile-parity-report.md` listing per-tag diffs and pointing to `dist/_debug/*.log` / `*.html`.

## Files to touch

- `src/main.tsx` — gated debug observer + final dump.
- `src/components/SEOHead.tsx` — optional `Helmet.peek()` log behind the same flag.
- `vite.config.ts` — per-route inject, `consoleHandler`, debug HTML/log dump in `postProcess`.
- `scripts/seo/prerender-routes.ts` — allow object-form entries; mark `/ai-checker` as debug when env flag set.
- `scripts/seo/mobile-parity-audit.mjs` — tag-by-tag diff section for debug routes.
- `scripts/seo/route-expectations.json` — add `"debug": true` to `/ai-checker`.
- `package.json` — `audit:debug` script.

No production behavior changes for non-debug routes; the build gate stays as-is.
