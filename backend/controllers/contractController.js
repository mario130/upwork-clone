const mongoose = require("mongoose");
const Freelancer = require("../model/freelancer");
const User = require("../model/user");

const Job = require("../model/job");
const { sendMail } = require("../services/mailServices/mailSevices");
const {
  pushNotification,
} = require("../services/notificationServices/notificationService");
const Contract = require("./../model/contract");

module.exports.hireFreelancer = async (req, resp, next) => {
  // change job status to active
  const jobId = req.params.jobId;

  Job.findById(mongoose.Types.ObjectId(jobId), (err, jobDoc) => {
    if (!err) {
      if (jobDoc) {
        jobDoc.status = "active";
        const proposal = jobDoc.proposals.find(
          (pro) => pro._id.toString() === req.body.proposalId.toString()
        );

        if (proposal) {
          proposal.accepted = true;

          jobDoc.save((err, job) => {
            if (err) next(err);
            if (job) {
              const contract = new Contract({
                freelancerId: proposal.freelancerId,
                jobId: job._id,
                clientId: job.clientId,
              });
              contract.save((err, createdcontract) => {
                if (!err) {
                  if (createdcontract) {
                    jobDoc.contractId = createdcontract._id;
                    jobDoc.save(async (err, updated) => {
                      if (!err) {
                        if (updated) {
                          resp.status(200).send(createdcontract);
                        }
                        pushNotification(
                          proposal.freelancerId,
                          "You are Hired in " + job.title
                        );
                        console.log(proposal.freelancerId);
                        const user = await User.findOne({
                          _id: mongoose.Types.ObjectId(proposal.freelancerId),
                        });
                        console.log( "from console" + user);
                        
                        sendMail(user.email);
                        console.log( "from console : email sent to " + user.email);
                      }
                    });
                  } else {
                    return next(err);
                  }
                }
              });
            }
          });
        } else {
          return resp.status(400).json("proposal id is invalid");
        }
      }
    } else {
      return next(err);
    }
  });
  ///
};
module.exports.endContract = async (req, res, next) => {
  const jobId = req.params.jobId;

  // change job to closed

  (await Job.findById(jobId))
    .populate("contractId")
    .execPopulate((err, jobDoc) => {
      if (!err) {
        if (jobDoc) {
          jobDoc.status = "closed";
          jobDoc.contractId.status = "ended";
          console.log(jobDoc.contractId.status);
          jobDoc.save((err, data) => {
            if (!err) {
              if (data) {
                //add review
                Freelancer.findOne(
                  {
                    userId: mongoose.Types.ObjectId(
                      jobDoc.contractId.freelancerId
                    ),
                  },
                  (err, freelancer) => {
                    if (!err) {
                      if (freelancer) {
                        const feedback = {
                          feedback: req.body.feedback,
                          rate: req.body.rate,
                        };
                        freelancer.profile.feedbacks.push(feedback);
                        freelancer.save((err, updatedDoc) => {
                          if (!err) {
                            if (updatedDoc) {
                              Contract.findById(
                                jobDoc.contractId,
                                (err, contract) => {
                                  if (!err) {
                                    if (contract) {
                                      contract.status = "ended";
                                      contract.save();
                                    } else return next(err);
                                  } else return next(err);
                                }
                              );

                              res
                                .status(200)
                                .json({ status: jobDoc.contractId.status });
                            }
                          }
                          return next(err);
                        });
                      } else {
                        return next(err);
                      }
                    } else return next(err);
                  }
                );

                //end
              } else return next(err);
            } else return next(err);
          });
        } else return next(err);
      } else return next(err);
    });
};
