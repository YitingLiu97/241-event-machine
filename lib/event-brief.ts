import type {ContentItem,EventRecord,Sponsor} from './studio.ts';
export type BriefPoint={id:string;text:string;done:boolean};
export function bulletPoints(text:string){return text.split(/\n+/).flatMap(line=>line.trim().replace(/^[-*•]\s*(\[[ xX]\]\s*)?/,'').split(/;\s+|(?<=[.!?])\s+(?=[A-Z])/)).map(t=>t.trim()).filter(Boolean);}
export function briefMarkdown(text:string){return bulletPoints(text).map(t=>'- '+t).join('\n');}
export function fieldChecklist(item:ContentItem,event:EventRecord,sponsor?:Sponsor):BriefPoint[]{if(item.checklist)return item.checklist;const points=sponsor?[
 `Check ${sponsor.name} placement and keep competing products out of its individual shots.`,
 ...bulletPoints(sponsor.deliverables),
 `Capture a clean product close-up and a vertical clip of the product in use.`,
 `Verify the brand tag: ${sponsor.handle||'handle still needs confirmation'}.`,
 `Record what was captured and anything still owed${sponsor.recapDeadline?' before '+sponsor.recapDeadline:''}.`
 ]:[
 `Capture ${event.venue||'the venue'} and the finished setup before guests arrive.`,
 'Photograph the food, drinks and creative stations before service.',
 'Capture short vertical clips of arrivals, conversations and the main activity.',
 'Capture each confirmed partner separately, following its own brief.',
 'Record one memorable moment or guest quote for the recap.',
 'Check footage, note missing shots and record actual attendance before leaving.'
 ];return points.map((text,i)=>({id:item.id+'-point-'+i,text,done:false}));}
export function fieldBriefExport(event:EventRecord,items:ContentItem[],sponsors:Sponsor[]){return `# ${event.title} — at the event\n\n- Date: ${event.date}\n- Time: ${event.time}–${event.endTime} ET\n- Venue: ${event.venue}\n\n`+items.map(item=>`## ${item.title}\n\n${fieldChecklist(item,event,sponsors.find(s=>s.id===item.sponsorId)).map(p=>`- [${p.done?'x':' '}] ${p.text}`).join('\n')}\n\n- Notes: ${item.fieldNotes||'Add moments, file names, missing shots and follow-ups.'}\n`).join('\n');}
