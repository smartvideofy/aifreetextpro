

## Plan: Fix `fetchPriority` React Warning

### Problem
The homepage hero image in `src/pages/Index.tsx` uses `fetchPriority="high"` (camelCase), which triggers a React 18 DOM warning: "React does not recognize the `fetchPriority` prop on a DOM element." This clutters the console and is technically incorrect for React 18.

### Fix
In `src/pages/Index.tsx`, change the `fetchPriority` prop to use the lowercase HTML attribute via a `ref` or simply remove it and use the standard `loading="eager"` approach instead — which achieves the same LCP prioritization without the warning.

**Option chosen**: Replace `fetchPriority="high"` with the React-compatible approach: remove the prop and keep `loading="eager"` (already implied by removing `loading="lazy"`). Alternatively, set it via `ref` callback: `ref={(el) => el?.setAttribute('fetchpriority', 'high')}`.

### Technical Detail
- **File**: `src/pages/Index.tsx`
- **Change**: Replace `fetchPriority="high"` with `ref={(el) => { if (el) el.setAttribute('fetchpriority', 'high'); }}`
- This preserves the browser hint while eliminating the React warning

### Scope
- 1 file modified
- No visual changes
- Eliminates console error

