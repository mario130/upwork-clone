const mongoose = require("mongoose");
const Client = require("./../model/client");
const Contract = require("./../model/contract");

const Job = require("../model/job");
module.exports.hireFreelancer = (req, resp, next) => {
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

            const contract = new Contract({
              freelancerId:proposal.freelancerId,
              jobId: job._id,
              clientId: job.clientId,
            });
            contract.save((err, contract) => {
              if (!err) {
                if (contract) {
                  resp.status(200).send(contract);
                }
              } else {
                return next(err);
              }
            });
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
