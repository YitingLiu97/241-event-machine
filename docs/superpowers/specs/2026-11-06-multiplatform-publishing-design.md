# Publish one event across Luma, Partiful and Eventbrite

## User outcome

Yiting supplies an event concept, confirmed details and selected poster once. The studio prepares consistent platform-specific listings and helps publish to the selected accounts. Each platform sells its own tickets with a separate seat allocation, as selected by Yiting on November 6, 2026.

## Proposed workflow

1. Complete the event brief: title, description, date, start/end time, timezone, venue/address, inclusions, ticket phases, total ticket capacity and selected poster.
2. Select Luma, Partiful and/or Eventbrite. Enter a ticket allocation for each selected platform. Existing published events are linked and updated rather than recreated.
3. Preview each listing, poster crop, price phase and capacity. Show the platform's displayed checkout price and organizer net proceeds when available; do not silently change approved prices to compensate for fees.
4. Publish selected API-supported channels. Partiful uses an explicitly identified browser-assisted step with the assistant and a signed-in browser. It must not be labelled API-connected or automatically completed by the site.
5. Save each provider's event ID, URL, publication state and verified receipt. A partial failure retains successful results; an uncertain create response requires checking the provider before retrying.

## Ticket inventory

- Count tickets/seats, not just guest-registration records: one registration may hold multiple tickets.
- Sum of platform allocations and any explicitly reserved seats must not exceed the event's total capacity.
- A paid event with missing capacity, allocations, pricing phases or required payout setup is not ready to publish.
- Independent platform quotas protect the total capacity without claiming a shared real-time checkout inventory.
- Existing sales and published limits must be reconciled before changing allocations. Do not expand quotas based solely on stale RSVP snapshots.
- Keep one all-inclusive admission product per platform; early-bird and regular phases describe the same admission. Preview sales transition times in the event timezone.

## Integration scope and current prerequisites

### Luma

The current studio implements read-only session-based API access for aggregate RSVP counts. Publishing needs the additional create/update event, image-upload and ticket-type operations. Luma Plus is confirmed; the calendar key has not yet been verified in the hosted studio. Keep credentials out of source, GitHub and workspace backups. Existing session-key behavior remains the baseline; persistent/background publishing access is not assumed.

Official reference: https://docs.luma.com/reference/post_v1-events-create

### Eventbrite

Use its official API for event drafts, venue/organizer selection, image upload, ticket classes and publishing after provider validation. An authenticated organizer connection and any required payment configuration still need to be verified. Native Eventbrite ticket sales use the allocated quota; do not assume external-ticketing eligibility.

Official reference: https://www.eventbrite.com/platform/new/api

### Partiful

Use the host's native ticketing with its allocated quota. No supported public publishing API or connected plugin was found in the available discovery results. Use browser assistance after sign-in and verify the actual saved/published page. Do not implement undocumented private endpoints or claim unattended site-side browser automation.

Official event creation guide: https://help.partiful.com/en-us/articles/15525299-creating-your-first-partiful-event
Official external checkout limitation: https://help.partiful.com/en-us/articles/17223208-how-do-i-sell-tickets-if-i-already-collected-rsvps

## Dashboard and validation

Add per-channel states: needs connection, needs details, ready, publishing, published, failed or needs verification. Display the exact last error without credentials. Retain publication URLs and timestamps through Save/backup. Poster preview uses the selected event artwork.

Check allocation sums, timezone conversion, price-phase transitions, provider payloads, partial failure handling and duplicate prevention. Use mocked provider responses for automated checks, then verify real drafts and publishing only against authorized connected accounts. Builds and fixtures do not establish that a provider connection works.

## Boundaries

This setup covers the three named listing platforms. Existing Onbrand sponsor outreach and social content workflows remain separate. Email invitations, sponsor messages and social posts are not sent merely because an event listing is published. No new accounts, paid upgrades or payout agreements are created automatically.
