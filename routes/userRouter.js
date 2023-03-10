const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/create/:id', userController.createTransfer)
router.get('/transfers/:id', userController.getTransfers)
router.get('/transfer/:id', userController.getTransferById)
router.post('/transfer/:id', userController.editTransferById)
//router.post('/login', userController.login)
//router.post('/login', userController.login)
//router.post('/login', userController.login)

module.exports = router