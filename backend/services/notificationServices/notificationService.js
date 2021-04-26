const Freelancer = require("../../model/freelancer");
const mongoose = require("mongoose");

module.exports.pushNotification = async function (freelancerId, message) {
  console.log(message);
  console.log(freelancerId);
  const freelancer = await Freelancer.findOne({
    userId: mongoose.Types.ObjectId(freelancerId),
  });

  const notificationObj = {
    freelancerId: freelancerId,
    message: message
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
