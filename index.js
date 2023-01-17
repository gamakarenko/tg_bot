const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const router = express.Router();
const home = require("./routes/home");

const token = '5741365706:AAF_9pixhfXSGu64g7oQbVrAwZjQUOUePeU';
const webAppUrl = 'https://final-final.vercel.app/'

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());



bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);

});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

    if(text === '/start') {
         bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
            reply_markup: {
                keyboard: [
                    [{text: 'Отправить данные', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

  if(msg?.web_app_data?.data) {
    const data = JSON.parse(msg?.web_app_data?.data)
    console.log(data)
    bot.sendMessage(chatId, JSON.stringify(data))
}
});
PORT = 9002;
app.use("/home", home);

app.listen(PORT, () => console.log('server started on PORT ' + PORT))