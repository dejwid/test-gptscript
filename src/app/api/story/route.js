import {GPTScript} from "@gptscript-ai/gptscript";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const g = new GPTScript();
    const run = await g.run('./story.gpt', {input: '--link https://www.reddit.com/r/CryptoCurrency/comments/1cshgnd/luna_crashing_to_0_in_1_day_exactly_2_years_ago_a/'});
    const result = await run.text();
    await run.close();
    await g.close();
    return Response.json(result);
  } catch (e) {
    console.log(e);
    return Response.json('error');
  }
}