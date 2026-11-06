import {getChatGPTUser} from '../../../chatgpt-auth';
import {fetchLumaRegistrations,LumaError,validLumaUrl} from '../../../../lib/luma';
export const dynamic='force-dynamic';
const reply=(body:unknown,status=200,retryAfter?:string)=>Response.json(body,{status,headers:{'Cache-Control':'private, no-store',...(retryAfter&&/^\d{1,6}$/.test(retryAfter)?{'Retry-After':retryAfter}:{})}});
export async function POST(request:Request){
 if(!await getChatGPTUser())return reply({error:'Sign in to refresh RSVP counts.'},401);
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply({error:'Invalid request origin.'},403);
 if(Number(request.headers.get('content-length')||0)>4096)return reply({error:'Request is too large.'},413);
 let input;try{const raw=await request.text();if(raw.length>4096)return reply({error:'Request is too large.'},413);input=JSON.parse(raw);}catch{return reply({error:'Invalid request.'},400);}
 if(!input||typeof input.apiKey!=='string'||input.apiKey.trim().length<8||input.apiKey.length>500||/[\r\n]/.test(input.apiKey)||!validLumaUrl(input.eventUrl))return reply({error:'Enter a valid calendar API key and Luma event link.'},400);
 try{return reply({snapshot:await fetchLumaRegistrations(input.apiKey.trim(),input.eventUrl)});}catch(error){if(error instanceof LumaError)return reply({error:error.message},error.status,error.retryAfter);return reply({error:'Could not refresh Luma. Previous totals have been kept.'},502);}
}
