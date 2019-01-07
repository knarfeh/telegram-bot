import Telegraf from 'telegraf'
import Server from './server';
import { allText } from './commands';
// import * as Stage from 'telegraf/stage';
// import { sgroupScene, sbotScene, schannelScene } from './stages';
// import { i18n } from './constants/lang';
// const I18n = require('telegraf-i18n');

// const RedisSession = require('telegraf-session-redis')
// const enter = Stage.enter
export const server = new Server(new Telegraf(process.env.BOT_TOKEN, {
  telegram: { webhookReply: true },
}));
// const stage = new Stage([sgroupScene, sbotScene, schannelScene], { ttl: 15 })
// const session = new RedisSession({
//   store: {
//     host: process.env.REDIS_HOST || '127.0.0.1',
//     port: process.env.REDIS_PORT || 6379
//   }
// })

// server.bot.use(session.middleware());
// server.bot.use(i18n.middleware());
// server.bot.use(stage.middleware());

// Handle all kinds of text.
server.bot.on('text', async (ctx: any) => { await allText(ctx, server); })
