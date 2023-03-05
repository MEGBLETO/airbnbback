const mongoose = require("mongoose");
const MyObjectId = mongoose.Types.ObjectId;

const reservationSchema = mongoose.Schema({
  placeId: {
    type: MyObjectId,
    ref: "Place",
    required: true,
  },
   owner: {
    type: MyObjectId,
    ref: "User",
    required: true,
  },
  numberofGuest:{
    type: Number,
    require: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
