const Proposal = require("../model/proposal");

module.exports.getAll = (req, resp, next) => {
  Proposal.find({}, (err, data) => {
    if (!err) {
      resp.status(200).send(data);
    } else return next(err);
  });
};

module.exports.addProposal =  (req, resp, next) => {
  const proposal = new Proposal({ ...req.body });
   proposal.save((err,data) => {
    if (!err) resp.status(200).json(data);
    else return next(err);
  });
};
