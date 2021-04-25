const mongoose = require("mongoose");

const proposalSchema = mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // },
  //   job: {
  //     type: String,
  //     required: true,
  //   },
  bid: {
    type: Number,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  // imgPath: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = proposalSchema;
