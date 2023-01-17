const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

router.post('/reg', userController.registration)
//router.post('/login', userController.login)

module.exports = router