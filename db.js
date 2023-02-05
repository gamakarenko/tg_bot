require('pg')
const { Sequelize } = require("sequelize")

module.exports = new Sequelize(
    "ouodzzyy", // Название базы данных
    'ouodzzyy', // Пользователь
    'S1b_Wcx9hGaw7a4QvrC0RZ6WkYCS80YO2', // Пароль
    {
        dialect: 'postgres',
        host: 'dumbo.db.elephantsql.com',
        // port: '9002'
    }
)