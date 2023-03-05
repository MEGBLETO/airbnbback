const mongoose = require("mongoose");
const MyObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 5,
    maxLength: 100,
  },
  types: {
    type: MyObjectId,
    ref: "TypePlace",
    required: true,
  },
  owner: {
    type: MyObjectId,
    ref: "User",
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    pricePerDAy: {
      type: Number,
      required: true,
    },
  },
  capacity: {
    type: Number,
    required: true,
    default: false,
  },
  description: {
    type: String,
    minLength: 20,
    required: true,
  },
  Address: {
    city: String,
    street: String,
    zipCode: { type: Number, maxLength: 5, minLength: 10 },
    gps: { lat: Number, long: Number },
  },
});

module.exports = mongoose.model("Place", userSchema);
