import {GPTScript} from "@gptscript-ai/gptscript";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function GET() {
  const g = new GPTScript();
  const run = await g.run('./test.gpt');
  const result =  await run.text();
  await run.close();
  await g.close();
  return Response.json(result);
}