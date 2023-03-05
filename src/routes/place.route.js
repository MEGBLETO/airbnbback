const express = require("express");
const router = express.Router();

const PlaceController = require("../controllers/place.controller");

router.get("/getallplaces", PlaceController.getPlaces);
router.post("/createplace", PlaceController.createPlace);
router.get("/myplace/:uid", PlaceController.getMyPlace )
router.get('/singleplace/:id', PlaceController.getPlaceById)
router.put('/updatemyplace/:id',PlaceController.updatePlaceDetails)


module.exports = router;
