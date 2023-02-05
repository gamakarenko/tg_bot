const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors');
const router = require('./routes/index')



const token = '6012133392:AAF5GhVftU82Fevftn1cQb3Z5by_fygcljQ';
const webAppUrl = 'https://final-final-nu.vercel.app'
PORT = 9002 || 5000

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/api', router)


// bot.onText(/\/echo (.+)/, (msg, match) => {

//   const chatId = msg.chat.id;
//   const resp = match[1];

//   bot.sendMessage(chatId, resp);

// });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

    // if(text === '/start') {
    //      bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
    //         reply_markup: {
    //             keyboard: [
    //                 [{text: 'Отправить данные', web_app: {url: webAppUrl}}]
    //             ]
    //         }
    //     })
    // }

//   if(msg?.web_app_data?.data) {
//     const data = JSON.parse(msg?.web_app_data?.data)
//     console.log(data)
//     bot.sendMessage(chatId, JSON.stringify(data))
// }
// });

const start = async () => {
try {
    await sequelize.authenticate()
    await sequelize.sync()  // Синхронизация модели с таблицей
/*
    User.sync() — создает таблицу при отсутствии (существующая таблица остается неизменной)
User.sync({ force: true }) — удаляет существующую таблицу и создает новую
User.sync({ alter: true }) — приводит таблицу в соответствие с моделью
*/

    app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
} catch (warning) {
    console.log(warning)
}
}

start()
