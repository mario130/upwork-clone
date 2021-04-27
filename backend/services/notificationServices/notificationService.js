const Freelancer = require("../../model/freelancer");
const mongoose = require("mongoose");

module.exports.pushNotification = async function (freelancerId, job) {
  console.log(job);
  console.log(freelancerId);
  const freelancer = await Freelancer.findOne({
    userId: mongoose.Types.ObjectId(freelancerId),
  });
  var m = new Date();
  var dateString =
      m.getUTCFullYear() + "/" +
      ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
      ("0" + m.getUTCDate()).slice(-2) + " " +
      ("0" + m.getUTCHours()).slice(-2) + ":" +
      ("0" + m.getUTCMinutes()).slice(-2) + ":" +
      ("0" + m.getUTCSeconds()).slice(-2);

  const notificationObj = {
    freelancerId: freelancerId,
    message:  "You are Hired in " + job.title,
    date : dateString,
    jobLink : "/job/"+job._id
  };

  if (freelancer) {
    freelancer.notifications.push(notificationObj);
    freelancer.save(function (err) {
      if (!err) {
        return "message saved";
      } else {
        return "message not saved";
      }
    });
  }
};
