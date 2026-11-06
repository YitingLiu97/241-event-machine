# Multi-platform Publishing Implementation Plan

> **For agentic workers:** Use inline execution for this approved change. Checkpoints follow the dependency order below.

**Goal:** Prepare and publish an event and poster across the three selected channels, retaining separate ticket allocations and receipts.

**Architecture:** Publishing settings live on each event; provider credentials remain session-only. An authenticated same-origin endpoint validates the complete event and capacity plan, then runs an adapter with a durable provider receipt and conditional R2 lock. The client renders every provider independently. Partiful is an assisted provider, not an API claim.

**Tech Stack:** React, TypeScript, Vinext, Cloudflare Workers/R2/D1, official Luma and Eventbrite APIs.

## Constraints

Preserve owner-only access, current event data and existing listing links. Do not send invitations. Never store credentials in source, workspace JSON or provider job records. A network-uncertain write must not be retried blindly. Count tickets rather than registration rows. Reject allocations exceeding total capacity. Publish only from an explicit click after a saved preview.

### Task 1: Publishing plan and validation

- [x] Add `lib/publishing.ts`: typed channel settings, per-event plan, UTC conversion, capacity and required-field checks, preview and export copy.
- [x] Extend `lib/studio.ts` optional publishing settings and backup validation without changing old records.
- [x] Add tests for excess capacity, disabled allocations, DST conversion, missing poster/details and partial receipts.

### Task 2: Provider operations and durable receipts

- [x] Add `lib/publish-providers.ts`: fixed-host Luma and Eventbrite HTTP operations, poster upload and event draft/update/publish validation. Parse real provider errors without echoing credentials.
- [x] Add `app/api/publishing/route.ts`: authenticated reads and same-origin writes, validated event snapshots, user-scoped conditional R2 job locks and checkpoints. Save provider IDs immediately; retain uncertain results as needs-verification.
- [x] Check real official request schemas before implementing each adapter. Unsupported transitions stay explicit provider-review steps.
- [x] Test provider success, rejected authorization, uncertain writes, duplicate prevention and independent channel failure.

### Task 3: Publisher UI

- [x] Add `app/publishing-studio.tsx`: selected poster, event preview, three channel selections, per-channel seat quotas, reserved seats, platform links, session credentials, account configuration, publishing actions and receipt history.
- [x] Link the page in `app/studio.tsx`. Save settings through the existing workspace flow. Server job state persists independently of client Save.
- [x] Include an explicit Partiful handoff brief and a receipt field; never infer publication from clicking an editor link.
- [x] Check old event loading and uploaded-poster behavior in the built Worker.

### Task 4: Verification and delivery

- [x] Run TypeScript, tests and a production build. Check authenticated route, invalid origin/body, allocation validation and startup regression.
- [x] Check the UI in the supported browser. Do not publish synthetic real events without the intended account and event configuration.
- [x] Deploy owner-private through the Sites source workflow. Copy only changed public-safe files to GitHub; retain private seeds outside GitHub. Report connection and live-write verification gaps precisely.

## Verification result

Private source: 26 tests passed, TypeScript passed, production build passed. Built-Worker checks confirmed saved workspace handling, durable manual receipts, 401 for anonymous requests, 403 for cross-origin writes and 400 for malformed input. No real provider events were created. Live Luma/Eventbrite writes remain unverified until the owner enters credentials and confirms ticket allocations. Partiful is browser-assisted and manual URLs are explicitly unverified.

Live inventory is not automatically reallocated: existing live provider quotas must be changed and outstanding checkouts reconciled natively, then verified before moving seats to another platform.
