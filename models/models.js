const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    telegramId: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    share: {type: DataTypes.BOOLEAN, defaultValue: false},
    transferDate: {type: DataTypes.STRING},
    transferTime: {type: DataTypes.STRING}, 
    pickYouUpFromAirPort: {type: DataTypes.BOOLEAN},
    start: {type: DataTypes.STRING},
    end: {type: DataTypes.STRING},
    carType: {type: DataTypes.STRING},
    adults: {type: DataTypes.INTEGER},
    childrenUnder5: {type: DataTypes.INTEGER},
    childrenAbove5: {type: DataTypes.INTEGER},
})

const Passenger = sequelize.define('passenger', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: { type: DataTypes.STRING},
    flightId: {type: DataTypes.STRING},
    age: {type: DataTypes.STRING, defaultValue: 'Adult'},
    passportId: { type: DataTypes.STRING },
    telegramId: { type: DataTypes.STRING },
    departureDate: {type: DataTypes.STRING},
    departureTime: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    transferComment: {type: DataTypes.STRING},
})
Order.hasMany(Passenger)
Passenger.belongsTo(Order)

module.exports = {User, Order, Passenger}