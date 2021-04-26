const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = notificationSchema;
