const express = require('express')
const router = express.Router()
const TypePlaceController = require('../controllers/place.controller')
const verifyToken = require('../middlewares/verifyToken')

const {checkEmail, validation} = require('../../validators/registrationvalidator')
const Typeplacecontroller = require('../controllers/typePlace.controller')




router.post('/addplacetype',  Typeplacecontroller.createTypePlace)
router.get('/typeplaceeuid', Typeplacecontroller.getTyplaceuid)
router.get('/getypeofplaces', Typeplacecontroller.getTypesPlace);



module.exports = router



