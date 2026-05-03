```javascript id="f2"
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 Bot funcionando!");
});

bot.onText(/\/teste/, (msg) => {
  bot.sendMessage(msg.chat.id, "✅ Está tudo certo!");
});
```
