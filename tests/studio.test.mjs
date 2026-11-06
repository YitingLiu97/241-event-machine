import test from 'node:test';
import assert from 'node:assert/strict';
import { cashTotals, validateWorkspace, posterSvg, newWorkspace } from '../lib/studio.ts';
test('cash excludes products and unreceived promises',()=>{assert.deepEqual(cashTotals([{cash:1000,status:'Proposed',productValue:300},{cash:500,status:'Agreed'},{cash:200,status:'Paid'}]),{proposed:1000,contracted:700,received:200});});
test('invalid records cannot overwrite workspace',()=>{assert.equal(validateWorkspace({events:[],sponsors:[],tasks:[],notes:[],assets:[]}),true);assert.equal(validateWorkspace({events:[{id:'x',title:'X',date:'wrong'}],sponsors:[],tasks:[],notes:[],assets:[]}),false);});
test('poster export escapes editable content',()=>{const e=newWorkspace().events[0];const svg=posterSvg({...e,title:'A < B & C',posterTitle:'A < B & C'},'table');assert.ok(svg.includes('A &lt; B &amp; C'));assert.ok(!svg.includes('A < B'));assert.ok(svg.includes('viewBox="0 0 1080 1350"'));});
test('new workspaces contain only the two confirmed current events',()=>{const w=newWorkspace();assert.equal(w.events.length,2);assert.equal(w.events[0].time,'12:00');assert.equal(w.events[0].endTime,'15:00');assert.ok(!w.events[0].inclusions.toLowerCase().includes('turkey'));assert.equal(validateWorkspace(w),true);});
