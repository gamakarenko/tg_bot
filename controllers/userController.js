const { User, Passenger, Order } = require('../models/models')


class UserController {
    async registration(req, res, next) {
        const { email, telegramId, role } = req.body
        const user = await User.create({ email, role, telegramId })
        return res.json({ message: 'Пользователь создан' })
    }
    async getAll(req, res) {
        const brands = await User.findAll()
        return res.json(brands)
    }
    async getTransfersById(req, res) {
        const {id} = req.params
        console.log(id)
        const transfers = await Order.findAll({
        //     where: {
        //         share: false,
        //     }
        // ,
        include: {
                model: Passenger,
                as: 'passengers',
                // where: {age: 'adult'}
        }
    })
        return res.json(transfers)
    }

    async createTransfer(req, res, next) {
        const {share, transferDate, transferTime, pickYouUpFromAirPort, start, end, carType, adults, childrenUnder5, childrenAbove5,passengers} = req.body.order
        const transfer = await Order.create({
            share,
            transferDate: transferDate,
            transferTime,
            pickYouUpFromAirPort,
            start,
            end,
            carType,
            adults,
            childrenUnder5,
            childrenAbove5,
        })
        const passenger = await Passenger.bulkCreate(passengers)
        await transfer.addPassenger(passenger)
        return res.json("Поездка создана")
        // const passenger = await Passenger.bulkCreate(
        //     passengers
        // )
    }
}

module.exports = new UserController()