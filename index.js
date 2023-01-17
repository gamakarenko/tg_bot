const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const router = express.Router();

// replace the value below with the Telegram token you receive from @BotFather
const token = '5741365706:AAF_9pixhfXSGu64g7oQbVrAwZjQUOUePeU';
const webAppUrl = 'https://final-final.vercel.app/'

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const app = express();


app.use(express.json());
app.use(cors());


// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);

});

// Listen for any kind of message. There are different kinds of
// messages.


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
router.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(PORT, () => console.log('server started on PORT ' + PORT))