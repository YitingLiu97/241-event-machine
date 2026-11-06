import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
test('server modules can load without request-only random generation',()=>{const script=`Object.defineProperty(globalThis.crypto,'randomUUID',{value:()=>{throw new Error('Random generation during module startup');}});await import('./lib/social.ts');await import('./lib/publication.ts');await import('./lib/luma.ts');await import('./lib/publish-providers.ts');`;const result=spawnSync(process.execPath,['--input-type=module','-e',script],{cwd:new URL('..',import.meta.url),encoding:'utf8'});assert.equal(result.status,0,result.stderr);});
