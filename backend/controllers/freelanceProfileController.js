const mongoose = require("mongoose");
const Freelancer = require("../model/freelancer");
const FreelanceProfile = require("../model/freelanceProfile");
const User = require("../model/user");

module.exports.addProfile = (req, resp, next) => {
  let freelanceProfile = new FreelanceProfile();
  freelanceProfile.userId = req._id;
  freelanceProfile.category = req.body.category;
  freelanceProfile.subcategory = req.body.subcategory;
  freelanceProfile.expertise = req.body.expertise;
  freelanceProfile.expertiseLevel = req.body.expertiseLevel;
  freelanceProfile.education = req.body.education;
  freelanceProfile.languages = req.body.languages;
  freelanceProfile.hourlyRate = req.body.hourlyRate;
  freelanceProfile.title = req.body.title;
  freelanceProfile.overView = req.body.overView;
  freelanceProfile.profilePhoto = req.file.path;
  freelanceProfile.location = req.body.location;
  freelanceProfile.phone = req.body.phone;

  freelanceProfile.save((err, doc) => {
    if (!err) resp.send(doc);
    else if (err.code == 11000) {
      resp.status(422).send("User already has profile");
    } else {
      return next(err);
    }
  });
};

module.exports.getData = (req, resp, next) => {
  FreelanceProfile.find({ userId: req._id }, (err, profileData) => {
    if (err) {
      return next(err);
    } else {
      User.find({ _id: req._id }, (err, user) => {
        if (!user) {
          return resp
            .status(404)
            .json({ status: false, message: "user record not found" });
        } else {
          resp.status(200).json({ profileData, user });
        }
      }).select("email firstName lastName userName country");
    }
  });
};

/* module.exports.getData = (req,resp,next) => {
  FreelanceProfile.findOne({ userId: req._id })
    .populate({
      path:"userId",
      model: "User",
      select:"email firstName lastName userName country"
    })
    .exec((err, data) => {
      if (!err) {
        if (data) {
          resp.status(200).send(data);
        } else {
          return next(err);
        }
      } else return next(err);
    });
} */

module.exports.updateProfile = (req, resp, next) => {
  let freelanceProfile = req.body;
  User.updateOne({ _id: req.params.id }, freelanceProfile).then((data, err) => {
    if (!err) {
      if (data === null) {
        return resp.status(200).send("Not found");
      }
      return resp.status(200).send(data);
    } else {
      resp.status(400).send(err);
    }
  });
};
module.exports.addFeedback = (req, res, next) => {
  const feedback = {
    feedback: req.body.feedback,
    rate: req.body.rate,
  };
  Freelancer.findOne({ userId: req.params.id }, (err, freelancer) => {
    if (!err) {
      if (freelancer) {
        freelancer.profile.feedbacks = feedback;
        freelancer.save((err,data)=>{
            if(!err){
                if(data){
                    
                    res.status(200).json("feedback added successfully")
                }
            }return next(err)
        })
      } else {
        return next(err);
      }
    } else return next(err);
  });
};


module.exports.getAllNotifications = (req, resp, next) => {
  console.log(req.params.email)
  User.findOne({ email: req.params.email }, async(err, data) => {
    if (!err){
      if (data == null) {
        resp.status(400).json(err)
      } else {
        if (data.userType == "freelancer") {
          const freelancerNotifications = await Freelancer.findOne({
            userId: mongoose.Types.ObjectId(data._id),
          }).select("notifications");
          console.log(freelancerNotifications);
          if (freelancerNotifications) {
            resp.status(200).json(freelancerNotifications)
          }else{
            resp.status(200).json("you haven't notifications")
          }
        }
        else{
          resp.status(200).json("Client: haven't notifications")
        }
      }
    }
    else return next(err);
  });
};