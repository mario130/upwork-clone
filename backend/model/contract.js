const mongoose = require("mongoose");

const contractSchema = mongoose.Schema({
    clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Client ID field can't be empty",
    ref: "User",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Job ID field can't be empty",
    ref: "Job",
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Freelancer ID field can't be empty",
    ref: "User",
  },
  status:{
      type:String,
      required:true,
      default:"open"
  }

});

module.exports = mongoose.model("Contract", contractSchema);
