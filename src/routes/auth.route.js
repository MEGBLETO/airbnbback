const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')


const {checkEmail, validation} = require('../../validators/registrationvalidator')




router.post('/login', checkEmail, validation, authController.login)
 


module.exports = router
