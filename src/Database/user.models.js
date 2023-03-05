const mongoose = require("mongoose");

const MyObjectId = mongoose.Types.ObjectId;

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  type: [
    {
      type: String,
      enum: ["CUSTOMER, OWNER"],
      default: ["CUSTOMER"],
    },
  ],
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  places: [
    {
      type: MyObjectId,
      ref: "Place",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
