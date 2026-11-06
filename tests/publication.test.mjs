import test from 'node:test';
import assert from 'node:assert/strict';
import { eventArtwork, publishingBrief, onbrandCopy } from '../lib/publication.ts';
import { newWorkspace } from '../lib/studio.ts';
test('existing saved events resolve to their approved Luma covers without a data migration',()=>{const w=newWorkspace();assert.equal(eventArtwork(w.events[0]),'/posters/friendsgiving.png');assert.equal(eventArtwork(w.events[1]),'/posters/future-of-nyc-design.png');});
test('new selected artwork can override the imported cover or return to the template',()=>{const e=newWorkspace().events[0];assert.equal(eventArtwork({...e,posterAssetId:'abc',posterMode:'existing'}),'/api/assets?id=abc');assert.equal(eventArtwork({...e,posterMode:'template'}),'');});
test('publishing brief preserves the specific existing editing routes and flags old poster copy',()=>{const e=newWorkspace().events[0];assert.ok(publishingBrief(e).includes('evt-DhQxOL2Abxrl48p'));assert.ok(publishingBrief(e).includes('Turkey lunch'));assert.ok(onbrandCopy(e).includes('cash partnerships'));assert.ok(onbrandCopy(e).includes('12:00–15:00'));assert.ok(!onbrandCopy(e).includes('30 afternoon'));});
test('the conference seed uses the latest published 11–4 schedule',()=>{const e=newWorkspace().events.find(e=>e.id==='future-design');assert.equal(e.time,'11:00');assert.equal(e.endTime,'16:00');});
