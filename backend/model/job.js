const mongoose = require("mongoose");
const proposalSchema = require("./proposal");

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: [15, "title shoud be more than 15 letters"],
    trim: true,
    required: "A job must have a title",
  },
  category: {
    type: String,
    required: "A job must have a category",
  },
  description: {
    type: String,
    minLength: [10, "title shoud be more than 40 letters"],
    trim: true,
    required: "A job must have a description",
  },
  projectType: {
    type: String,
    required: "A job must have a type",
  },
  skills: {
    type: [String],
    validate: {
      validator: function () {
        return this.skills.length > 0;
      },
      message: "minimum 1 skill should be added",
    },
    required: "A job must have skills",
  },
  experience: {
    type: String,
    required: "A job must have a experience",
  },
  paymentChoice: {
    type: String,
    required: "A job must have a paymentChoice",
  },
  budget: {
    type: Number,
    min: [5, "budget should more than 5$"],
    required: "A job must have a budget",
  },
  duration: {
    type: String,
    required: "A job must have a duration",
  },
  proposals: [proposalSchema],
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  status:{
    type:String,
    required:true,
    default:"listed"
  },
  jobDate:{
    type:Date,
    default:Date.now
  },
  contractId: { type: mongoose.Schema.Types.ObjectId, ref: "Contract" },
});

module.exports = mongoose.model("Job", jobSchema);
