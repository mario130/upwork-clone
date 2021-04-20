const Job = require("../model/job");
const Proposal = require("../model/proposal");
const mongoose = require("mongoose")
module.exports.getAll = (req, resp, next) => {
  Proposal.find({}, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};

module.exports.addProposal = async (req, resp, next) => {

  const job = await Job.findById(
    mongoose.Types.ObjectId(req.params.jobId)
    )
    if(job){
     const proposal = {
       bid:req.body.bid,
       coverLetter:req.body.coverLetter,
       duration:req.body.duration,
       imgPath:req.body.imgPath,
       freelancer:req._id
      };
     const alreadySumitted= job.proposals.find((proposal) => {
      return proposal.freelancer.toString() === req._id.toString()});
      if(alreadySumitted){
       return next({msg:"Already submitted",isSubmitted:true});

      }
      job.proposals.push(proposal)
      job.save((err,data)=>{
          if (!err) resp.status(200).json("successfully submit proposal");
          else return next(err);
      })
   }


};
