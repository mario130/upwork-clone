const mongoose = require("mongoose");
const job = require("../model/job");

const Job = require("../model/job");
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
                    jobDoc.save((err, updated) => {
                      if (!err) {
                        if (updated) {
                          resp.status(200).send(createdcontract);
                        }
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

  (await Job.findById(mongoose.Types.ObjectId(jobId)))
    .populate("contractId")
    .execPopulate((err, jobDoc) => {
      if (!err) {
        if (jobDoc) {
          jobDoc.status = "closed";
          jobDoc.contractId.status = "ended";
          jobDoc.save((err, data) => {
            if (!err) {
              if (data) {
                res.status(200).json( {status :jobDoc.contractId.status})
              } else return next(err);
            } else return next(err);
          });
        } else return next(err);
      } else return next(err);
    });
};
