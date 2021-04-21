const mongoose = require("mongoose");
const proposalSchema = require("./proposal");

const freelancerSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Client ID field can't be empty",
    unique: true,
    ref: "User",
  },
  submittedProposals: [proposalSchema],
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
