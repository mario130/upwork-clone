const Job = require("../model/job");
const Proposal = require("../model/proposal");
const mongoose = require("mongoose");
const Freelancer = require("../model/freelancer");
module.exports.getFreelancerProposoal = (req, resp, next) => {
  Freelancer.findOne({ userId: req._id }, (err, data) => {
    if (!err) {
      if(data){
        resp.status(200).send(data.submittedProposals);
      }else {
        return next(err)
      }
    } else return next(err);
  });
};
module.exports.getJobProposals = (req, resp, next) => {
  console.log(mongoose.Types.ObjectId(req.params.jobId));
  Job.findById(mongoose.Types.ObjectId(req.params.jobId))
  .populate({ 
      path: 'proposals.freelancerId',
      model:"User",
   })
    .exec((err, data) => {
      if (!err) {
        resp.status(200).send(data);
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
      // imgPath: req.body.imgPath,
      freelancerId: req._id,
      accepted: false
    };

    const alreadySumitted = job.proposals.find((proposal) => {
      return proposal.freelancerId.toString() == req._id.toString();
    });
    if (alreadySumitted) {
      return next("Already submitted");
    }

    const freelancer = await Freelancer.findOne({
      userId: mongoose.Types.ObjectId(req._id),
    });
    console.log(proposal)
    if (freelancer) {
      freelancer.submittedProposals.push(proposal);
      freelancer.save((err, data) => {
        if (err) {
          return next(err);
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
