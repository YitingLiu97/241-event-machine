# 241 Event Machine

Private event planning and social production studio for 241.

Live owner-only studio: https://studio-241-events.kikiyl.chatgpt.site

## Current features

- Friendsgiving, Shanghai After Dark and Future of NYC Design event records and existing Luma posters.
- Event checklists, cash sponsorship packages and separate product contributions.
- Sponsor briefs, outreach drafts and conversation history.
- RSVP CSV imports, manual count snapshots and snapshot history.
- Social caption drafts, per-brand shot lists, media links, review status and published-post receipts.
- Private D1 workspace storage, private R2 image assets and backup import/export.

## Connection status

The studio currently prepares drafts and opens provider editors. It does not yet continuously sync Luma, Gmail or Onbrand, render video batches, or publish to social platforms.

Remaining work: authenticated Luma RSVP sync; hosted Gmail connector access; full Onbrand brief/PDF import; social publishing connection and verification. No current RSVP count is asserted by this repository.

Friendsgiving runs noon–3 p.m. ET on November 22, 2026. Approved ticket plan: $45 through November 12 and $49 starting November 13, ET; one ticket includes the published brunch menu, tea, water, one welcome mimosa (21+) and creative activities. The live ticket switch has not yet been applied or verified.

## Privacy and source provenance

This is a sanitized export of the deployed studio source at `07e6cfc456a4c7042b9f7d7c64bc82857d8ff42e`. Private email summaries, partner correspondence, contacts, guest data, local databases, runtime state and credentials are excluded. The public evidence seed is intentionally empty; authorized workspace data is saved privately through the application.

This GitHub repository and the private Sites deployment are separate. A GitHub push does not automatically deploy the studio or connect external accounts. Future changes should be checked for private data before publication.

## Development

Use Node.js >=22.13.0. Run `npm ci`, then `npm run dev` for local development. Run `npx tsc --noEmit` and `node --test tests/*.test.mjs` for checks. See [platform setup](docs/platform-setup.md) for the retained Vinext/Sites instructions.
