const { User } = require('../models/models')


class UserController {
    async registration(req, res, next) {
        const { email, telegramId, role } = req.body
        const user = await User.create({ email, role, telegramId })
        return res.json({ message: 'Пользователь создан' })
    }
}

module.exports = new UserController()