const Reservation = require("../Database/reservation.model");

exports.makeReservation = (req, res) => {
  const newReservation = new Reservation({
    placeId: req.body.placeId,
    owner: req.body.owner,
    numberofGuest: req.body.numberofGuest,
    startDate: req.body.startDate,
    endDate:  req.body.endDate,
    totalPrice: 500,
    isPaid: true,
  });
  newReservation
    .save()
    .then((reservation) => res.send(reservation))
    .catch((err) => res.status(400).send(err));
};

exports.getAllReservations = (req, res) => {
       Reservation.find()
    .then((reservation) => {
      res.send(reservation);
    })
    .catch((err) => res.status(400).send(err));
};
