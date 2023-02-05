require('pg')
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "vqjhduqs", // Название базы данных
    'vqjhduqs', // Пользователь
    '1b_Wcx9hGaw7a4QvrC0RZ6WkYCS80YO2', // Пароль
    {
        dialect: 'postgres',
        host: 'dumbo.db.elephantsql.com',
        // port: '9002'
    }
)