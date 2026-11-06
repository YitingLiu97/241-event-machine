# 241 Event Machine

Private event planning and social production studio for 241.

Live owner-only studio: https://studio-241-events.kikiyl.chatgpt.site

## Current features

- Friendsgiving, Shanghai After Dark and Future of NYC Design event records and existing Luma posters.
- Event checklists, cash sponsorship packages and separate product contributions.
- Multi-platform publishing previews, separate ticket allocations, Luma/Eventbrite draft and publish adapters, native ticket price phases, private durable receipts and a Partiful browser handoff.
- Sponsor briefs, outreach drafts and conversation history.
- Live Luma RSVP totals via a session-only calendar API key, optional five-minute refresh while the RSVP panel is open, plus CSV imports and manual snapshot history.
- Editable on-site bullet checklists, capture checkmarks, field notes and Markdown checklist exports.
- Social caption drafts, per-brand shot lists, media links, review status and published-post receipts.
- Private D1 workspace storage, private R2 image assets and backup import/export.

## Connection status

The Publishing page supports session-based Luma/Eventbrite credentials, draft preparation, explicit publish actions, verification and durable per-channel receipts. Partiful remains browser-assisted. Live provider writes require real account configuration and have not been exercised against the owner’s accounts. Luma RSVP counts can refresh on demand or every five minutes while the RSVP panel is open and enabled. Calendar keys remain in page memory and are never persisted. Background sync while closed, Gmail/Onbrand continuous sync, video batch rendering and social-media publishing are not enabled.

Remaining work: verify live Luma reads with the owner’s calendar key; hosted Gmail connector access; full Onbrand brief/PDF import; social publishing connection and verification. No current RSVP count is asserted by this repository.

Friendsgiving runs noon–3 p.m. ET on November 22, 2026. Approved ticket plan: $45 through November 12 and $49 starting November 13, ET; one ticket includes the published brunch menu, tea, water, one welcome mimosa (21+) and creative activities. The live ticket switch has not yet been applied or verified.

## Privacy and source provenance

This is a sanitized export of private studio source `d1ab2a89f1e2a289fa437cac3a541bc83f1e5235`, including multi-platform publishing. Private email summaries, partner correspondence, contacts, guest data, local databases, runtime state and credentials are excluded. The public evidence seed is intentionally empty; authorized workspace data is saved privately through the application.

This GitHub repository and the private Sites deployment are separate. A GitHub push does not automatically deploy the studio or connect external accounts. Future changes should be checked for private data before publication.

## Development

Use Node.js >=22.13.0. Run `npm ci`, then `npm run dev` for local development. Run `npx tsc --noEmit` and `node --test tests/*.test.mjs` for checks. See [platform setup](docs/platform-setup.md) for the retained Vinext/Sites instructions.
