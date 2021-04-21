const Job = require("../model/job");
const Proposal = require("../model/proposal");
const mongoose = require("mongoose");
const Freelancer = require("../model/freelancer");
module.exports.getFreelancerProposoal = (req, resp, next) => {
  Freelancer.find({userId: req._id}, (err, data) => {
    if (!err) {
      resp.status(200).send(data[0].submittedProposals);
    } else return next(err);
  });
};
module.exports.getJobProposals = (req, resp, next) => {
  console.log(mongoose.Types.ObjectId(req.params.jobId))
  Job.findById( mongoose.Types.ObjectId(req.params.jobId), (err, data) => {
    if (!err) {
      resp.status(200).send(data.proposals);
    } else return next(err);
  });
};


module.exports.addProposal = async (req, resp, next) => {
  const job = await Job.findById(mongoose.Types.ObjectId(req.params.jobId));
  if (job) {
    const proposal = {
      bid: req.body.bid,
      coverLetter: req.body.coverLetter,
      duration: req.body.duration,
      imgPath: req.file.path,
      freelancerId: req._id,
    };

    const alreadySumitted = job.proposals.find((proposal) => {
      return proposal.freelancerId.toString() == req._id.toString();
    });
    if (alreadySumitted) {
      return next("Already submitted");
    }

    const freelancer = await Freelancer.find({
      userId: mongoose.Types.ObjectId(req._id),
    });
    if (freelancer) {
      freelancer[0].submittedProposals.push(proposal);
      freelancer[0].save((err, data) => {
        if (err) {
          return next("error in saving proposalin freelancer");
        }
      });
    }
    job.proposals.push(proposal);
    job.save((err, data) => {
      if (!err) resp.status(200).json("successfully submit proposal");
      else return next(err);
    });
  }
};
