const Job = require("../model/job");

module.exports.getAll = (req, resp, next) => {
  Job.find({}, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};

module.exports.getById = (req, resp, next) => {
  Job.findOne({ _id: req.params.jobId }, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};
module.exports.addJob =  (req, resp, next) => {
  const job = new Job({ ...req.body });
   job.save((err,data) => {
    if (!err) resp.status(200).json(data);
    else return next(err);
  });
};
