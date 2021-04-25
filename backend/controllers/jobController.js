const Job = require("../model/job");
const mongoose = require("mongoose")
const Client = require("./../model/client")
module.exports.getAllClientJobs = (req, resp, next) => {

  Client.findOne({userId:req._id}).populate("jobs")
  .exec((err,jobs)=>{
    if (!err) {
      resp.status(200).send(jobs);
    } else return next(err);

  })

};

module.exports.getAllJobs = (req, res, next) => {
  Job.find({status:"listed"}, (err, data) => {
    if (!err){
      res.status(200).send(data)
    } else {
      return next(err)
    } 
  })
}

module.exports.getById = (req, resp, next) => {
  Job.findOne({ _id: req.params.jobId }, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};
module.exports.addJob = async (req, resp, next) => {
  const job = new Job({ ...req.body});
  
  job.clientId = req._id
const client= await  Client.findOne({userId:mongoose.Types.ObjectId(req._id)});

if(client) {
  client.jobs.push(job)
   job.save((err,data) => {
     
    if (!err) {
     client.save((err)=>{
       if(err) console.log(err)
     }) 
     resp.status(200).json(data)
    }
    else return next(err);
  });
}
};
