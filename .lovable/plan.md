

## Plan: Update Refund Policy & Cancellation Instructions

### Summary
Two changes: (1) Replace the over-permissive "100% money-back, no questions asked" refund policy with a "no refunds unless deemed necessary" stance, and (2) update cancellation instructions to direct users to **Settings → Manage Subscription → Cancel Subscription** instead of "contact support."

### Files to Update

**1. `src/pages/Guarantee.tsx`** — Major rewrite
- Change title from "100% Money-Back Guarantee" to "Satisfaction Guarantee"
- Remove "no questions asked," "100% refund," "full refund" language throughout
- New hero messaging: "We stand behind our technology. Refunds are reviewed on a case-by-case basis where deemed necessary."
- Remove the "Refund Request Email Template" card (encourages easy claims)
- Remove "Real Customers, Real Refunds" testimonials section entirely
- Update "How to Claim" section → "How to Cancel or Request Support" with steps: (1) Go to Settings → Manage Subscription → Cancel Subscription, (2) If you have an issue, contact support@aifreetextpro.com
- Update FAQ answers to reflect no-refund-by-default policy
- Update all meta tags and schema markup to match new policy
- Update CTA section to remove "risk-free" and "nothing to lose" language

**2. `src/data/helpArticles.tsx`** — Update two help articles
- `"refund-policy"` article (~lines 1230-1330): Replace "7-Day Money-Back Guarantee" with "Refund Policy" stating refunds are not offered by default but reviewed case-by-case where deemed necessary. Remove "no-questions-asked" language. Keep contact email for exceptional cases.
- `"subscription-plans"` article (~lines 1163-1226): Cancellation steps already say "Settings → Manage Subscription → Cancel Subscription" — these are correct. Just remove any references to refund guarantees.

**3. `src/pages/TermsOfService.tsx`** — Add/update Refunds section
- Add a "Refunds" section stating: "Refunds are generally not provided. In exceptional circumstances, refunds may be issued at the sole discretion of AI Free Text Pro after review."

**4. `src/pages/Pricing.tsx`** — Minor update
- Update FAQ answer about cancellation (~line 343) to mention: "Go to Settings → Manage Subscription → Cancel Subscription"

### What stays unchanged
- The `/guarantee` route remains (now "Satisfaction Guarantee")
- Blog posts and landing pages are NOT touched in this scope (per your earlier feedback)
- Annual refund policy: no change needed since default is now "no refunds"

