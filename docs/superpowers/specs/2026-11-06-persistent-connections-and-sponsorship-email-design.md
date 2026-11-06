# Persistent connections and sponsorship email

## Outcome
One event record drives event listings, social drafts and sponsorship inquiries. Account connections survive refresh. Sponsorship messages are drafted for approval before sending. Existing event records, posters, ticket allocations and social checklists remain intact.

## Connections
Keep the studio owner-only. Store provider credentials on the server, encrypted with a runtime secret, separately from workspace exports and public source. Record connected account identity, permission scope, expiry and last successful check. Support disconnect and reauthorization. Verify the selected 241 Gmail identity before every email write. The chat's Gmail connection is usable by the assistant but is not evidence of an authenticated studio connection or permission for unattended jobs.

Luma uses its calendar API key. Eventbrite uses an authorized account token and selected organization. Gmail uses provider OAuth with refresh capability. Instagram and LinkedIn require their own authorized publishing accounts and permissions. Partiful remains explicitly browser assisted until a supported integration is verified.

## Per-event mail organization
Each event stores a Gmail label ID and display name. Reuse the owner's existing event label rather than create duplicates. Label lookup and mapping must use IDs; title changes do not reassign conversations. New events may create an event label after their title is confirmed. Label creation must be repeatable without duplicates.

Attach only explicitly assigned sponsorship threads, or new inquiry threads created for that event. Store an event ID, sponsor ID, provider thread ID, draft ID, message IDs, source link and sync timestamp. A shared brand email address alone cannot determine an event. Threads serving multiple events may carry multiple event labels. Ambiguous existing threads go to a review queue. Do not move mail out of the inbox or mark it read as a side effect.

## Inquiry workflow
Use contacts supplied by the owner. Build each inquiry from confirmed event facts, public event link when available, cash ask, exact offered deliverables, audience evidence and receiving/venue needs. Products are separate from cash. Unknown audience sizes or reach cannot be invented. Preserve editable drafts in Gmail and show their preview and event association in the studio.

Draft -> Awaiting approval -> Approved -> Sent -> Reply received -> Negotiating -> Agreed or Declined.

The owner approves the exact recipients, subject, body and attachments. Any edit invalidates approval. A scheduling action does not authorize sending sponsorship mail. No send or follow-up runs without a matching approval. After an uncertain send result, check provider receipts and thread history before retrying.

## Reply tracking and briefs
Incremental sync tracks replies and labels on already linked threads. Show last successful sync and reconnect errors. Extract proposed fees, deliverables, deadlines, handles and attachments with source references; distinguish offers from confirmed terms. New reply summaries do not silently replace agreed sponsor terms. Unread PDFs stay marked unread until actually processed. Updated confirmed obligations feed the existing editable event-day checklist and recap tasks.

## Background operation
A durable job queue handles scheduled publication and mail synchronization without relying on an open browser. Use one job identity per operation and content revision, job leases, bounded retries and receipts. Provider writes with unknown outcomes pause for verification. Display partial success by channel rather than calling an entire campaign published. No credentials or private correspondence enter public GitHub source.

## Delivery sequence
1. Persistent server credential storage and connection health, starting with Luma/Eventbrite.
2. Gmail OAuth, event-label mappings, linked-thread sync and saved drafts with exact-content approval.
3. Instagram/LinkedIn publishing and durable scheduling.
4. Cross-platform RSVP reconciliation and sponsor recap reporting.

## Acceptance checks
- Refresh preserves a connection; backups and browser responses contain no secret tokens.
- Disconnect revokes local access and prevents queued writes for that connection.
- Two events contacting the same brand retain separate thread associations.
- Repeated draft preparation and sync do not duplicate labels, drafts or messages.
- Draft edits invalidate approval; sending without approval is rejected server-side.
- Reply summaries cite the original messages and never turn a proposal into an agreement.
- A simulated timeout after a provider accepts a write cannot produce a duplicate on retry.
- Existing workspace data and event-day checklist progress survive the upgrade.

## Current delivery boundary
This document specifies the next implementation. Persistent studio authentication, automatic thread labeling, background sync and social publishing have not been implemented by saving this design. Provider app credentials and permissions must be configured and verified before live operation.
