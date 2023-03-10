const { User, Passenger, Order } = require('../models/models')
const axios = require('axios');

class UserController {
    
//
    async getTransfers(req, res) {
        const {id} = req.params
        console.log(id)
        const transfers = await Order.findAll({
        where: {userId: id},
        order: [['id', 'ASC']],
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
        axios.get(`https://api.telegram.org/bot6012133392:AAF5GhVftU82Fevftn1cQb3Z5by_fygcljQ/sendMessage?chat_id=356840503&text=${JSON.stringify(req.body.order)}`)
        return res.json("Поездка создана")
    }

    async editTransferById(req, res) {
        const {id} = req.params
        // const transfer = await Order.findOne({
        //     where: {id},
        //     include: {
        //         model: Passenger,
        //         as: 'passengers',
        //     }
        // })
        const {share, transferDate, transferTime, pickYouUpFromAirPort, start, end, carType, adults, childrenUnder5, childrenAbove5, passengers, userId} = req.body
        const newTransfer = await Order.update({
            userId,
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
        },
        {
            where: {id}
        })
        const deletePrevios = await Passenger.destroy({
            where: {orderId: id}
        })
        const newPasengers = await Passenger.bulkCreate(
            passengers
        // ,
        // {
        //     where: {orderId: id}
        
        // }
        )
        // const passenger = await Passenger.bulkCreate(passengers)
        // await newTransfer.setPassenger(passenger)

        return res.json('Данные обновлены')
    }


}

module.exports = new UserController()