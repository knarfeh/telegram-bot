import { promisify } from 'util';
import Telegraf from 'telegraf';
const Extra = (Telegraf as any).Extra;

export async function allText(ctx: any, server: any) {
  const payloadList = ctx.message.text.split(/_(.+)/, 2)
  console.dir(payloadList)
}
