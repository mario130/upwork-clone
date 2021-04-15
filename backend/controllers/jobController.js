const Job = require("../model/job");

module.exports.getAll = (req, resp, next) => {
  Job.find({}, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};
