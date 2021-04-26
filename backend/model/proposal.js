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
  accepted:{
    type:Boolean,
    required:true,
    default:false
  },
  imgPath: {
    type: String,
  }
});

module.exports = proposalSchema;
