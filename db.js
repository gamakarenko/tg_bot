require('pg')
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "vqjhduqs", // Название базы данных
    'vqjhduqs', // Пользователь
    'Mchm77xSjDB39xHnfRaL0BmIVIrexBTO', // Пароль
    {
        dialect: 'postgres',
        host: 'hattie.db.elephantsql.com',
        // port: '9002'
    }
)