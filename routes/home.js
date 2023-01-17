const Router = require('express')
const router = new Router()

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;

const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
//router.post('/login', userController.login)

module.exports = router