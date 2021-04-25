const mongoose = require("mongoose")
const Client = require("./../model/client");
const Contract = require("./../model/contract");

const Job = require("../model/job");
module.exports.hireFreelancer = (req, resp, next) => {

  // change job status to active
    const jobId= req.params.jobId
    
    Job.findById((mongoose.Types.ObjectId(jobId)),(err,data)=>{
     
        if(!err){
            if(data){
                data.status = "active"
                data.save((err,job)=>{
                    if(err) next(err)
                    const contract = new Contract( {
                        freelancerId : req.body.freelancerId,
                        jobId : job._id,
                        clientId:job.clientId
                    })
                    contract.save((err,contract)=>{
                        if(!err){
                            if(contract){
                                resp.status(200).send(contract)
                            }
                        }else {
                            return next(err)
                        }
                    })
                })
            }
        }else {
            return next(err)
        }
    })
    /// 
};
