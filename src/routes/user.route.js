const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controlller')
const verifyToken = require('../middlewares/verifyToken')

const {checkEmail, validation} = require('../../validators/registrationvalidator')




router.post('/adduser', userController.auth)
router.get('/single/', verifyToken, userController.getSingleUser)
router.get('/all', userController.getAllUsers)
router.put('/update/', verifyToken,userController.getUserANdupdate)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router



