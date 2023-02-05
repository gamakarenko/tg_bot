require('pg')
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "vqjhduqs", // Название базы данных
    'vqjhduqs', // Пользователь
    '4oh5JKhdbaFBYy53x5wpxQCpuUojFX8K', // Пароль
    {
        dialect: 'postgres',
        host: 'hattie.db.elephantsql.com',
        // port: '9002'
    }
)