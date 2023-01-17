require('pg')
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "ouodzzyy", // Название базы данных
    'ouodzzyy', // Пользователь
    'Shsc92QRXjoqNwaOaPTZQR_kOBaRxalV', // Пароль
    {
        dialect: 'postgres',
        host: 'dumbo.db.elephantsql.com',
        // port: '9002'
    }
)