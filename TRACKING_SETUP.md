# Marketing tracking setup and limits

The original four-sprint roadmap assigns US content to Sprint 3 and Meta/X tracking to Sprint 4. All indexed pages remain intact.

## Public configuration

Set these publishable values in the hosting/build environment, then publish:

- `VITE_META_PIXEL_ID`: confirmed Meta dataset/pixel ID.
- `VITE_X_PIXEL_ID`: confirmed X pixel ID.
- `VITE_X_PAGE_VIEW_EVENT_ID`: the X Events Manager Page View event ID (`tw-<pixel>-<event>`). Do not use the pixel ID as an event ID.

Empty or invalid identifiers leave the relevant tracking disabled. No real provider receipt has been verified yet. No backend, CAPI, customer matching, lead, registration or purchase reporting was added.

## Events and consent

- Meta: `PageView` and custom `OutboundClick` for links to the app. Outbound engagement is not a Lead and must not be presented as a signup/purchase conversion.
- X: configured website base tag and explicitly configured Page View event. Base-tag automatic behavior must be checked with the real pixel to avoid duplicate configured events. Business conversions require an agreed outcome and the matching event ID in the separate app.
- Google Analytics: load and events require Analytics Cookies acceptance.
- Advertising and campaign identifier capture require Marketing Cookies acceptance globally. This preserves the existing global opt-in banner; no geographic permission inference is used.
- Versioned consent evidence is browser-local, including visitor reference, notice, timestamp, choices and withdrawal. It is not a central audit trail or an authorization for the app subdomain. Retain appropriate server evidence in the app before any server reporting.
- Settings and cross-tab changes immediately update gates. Meta receives revocation; an already loaded X SDK requires a page reload on withdrawal to remove its own automatic listeners.
- URLs are stripped of query/hash after consented attribution capture before advertising SDK load. Blocked events are not replayed.

## Required real-account checks

1. Confirm Meta dataset restrictions and accept Business Tools Terms. Review privacy disclosure and withdrawal route.
2. Publish with the verified IDs. In a private window, verify no optional provider requests before acceptance or after refusal.
3. Accept, navigate to another page and click an app CTA. Check actual requests, identifiers and event counts; verify Meta Test Events and X Events Manager receipt. Queued calls or SDK loading alone are not receipt.
4. Withdraw in Cookie Settings and another tab; verify no new tracking. Existing data cannot be recalled.
5. The `aftp_attr` cookie uses `.aifreetextpro.com`, Secure, SameSite=Lax, a 90-day lifetime and first-touch rules. Verify actual app readback after a campaign visit. Localhost checks alone do not establish cross-subdomain handoff.
6. Agree campaign success (signup or paid subscription) before configuring conversion optimization. Implement and verify that real outcome in app.aifreetextpro.com; do not optimize signups on this marketing site's outbound-click proxy.