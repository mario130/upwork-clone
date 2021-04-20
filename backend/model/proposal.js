// userID, proposalID,bid,upworkFees,received,coverLetter

const mongoose = require("mongoose");

const proposalSchema = mongoose.Schema({
//   userID: {
//     type: String,
//     required: true,
//   },
//   jobID: {
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
  duaration: {
    type: String,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Proposal", proposalSchema);
