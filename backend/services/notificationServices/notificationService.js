
module.exports.pushNotification = function (message) {
  const freelancer = await Freelancer.findOne({
    userId: mongoose.Types.ObjectId(req._id),
  });
  const notificationObj={
    message : message
  }
  if (freelancer) {
    freelancer.notification.push(notificationObj);
    freelancer.save(function (err) {
      if (!err) {
        return "message saved";
      } else {
        return "message not saved";
      }
    });
  }
};
