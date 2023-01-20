const { User, Passenger, Order } = require('../models/models')


class UserController {
    async getTransfers(req, res) {
        const {id} = req.param
        const transfers = await Order.findAll({
        where: {id},
        include: {
            model: Passenger,
            as: 'passengers',
        }
    })
        return res.json(transfers)
    }
    async getTransferById(req, res) {
        const {id} = req.params
        const transfer = await Order.findOne({
            where: {id},
            include: {
                model: Passenger,
                as: 'passengers',
            }
        })
        return res.json(transfer)
    }

    async createTransfer(req, res, next) {
        const {id} = req.params
        const {share, transferDate, transferTime, pickYouUpFromAirPort, start, end, carType, adults, childrenUnder5, childrenAbove5,passengers} = req.body.order
        const transfer = await Order.create({
            userId: id,
            share,
            transferDate,
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
    }
}

module.exports = new UserController()