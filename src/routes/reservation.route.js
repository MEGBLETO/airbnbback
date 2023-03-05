const express = require("express");
const router = express.Router();

const ReservationController = require("../controllers/reservation.controller");

router.post("/makereservations",  ReservationController.makeReservation);
router.get("/getallreservations",   ReservationController.getAllReservations);

module.exports = router;
