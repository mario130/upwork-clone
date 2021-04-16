const FreelanceProfile = require('../model/freelanceProfile');
const User = require('../model/user');
const g = require('lodash');
const { pick } = require('lodash');

module.exports.addProfile = (req,resp,next) => {
    let freelanceProfile = new FreelanceProfile();
    freelanceProfile.userId=req._id;
    freelanceProfile.categoryType=req.body.categoryType;
    freelanceProfile.categoryInfo=req.body.categoryInfo;
    freelanceProfile.expertise=req.body.expertise;
    freelanceProfile.expertiseLevel=req.body.expertiseLevel;
    freelanceProfile.education=req.body.education;
    freelanceProfile.employment=req.body.employment;
    freelanceProfile.languages=req.body.languages;
    freelanceProfile.hourlyRate=req.body.hourlyRate;
    freelanceProfile.title=req.body.title;
    freelanceProfile.overView=req.body.overView;
    freelanceProfile.profilePhoto=req.body.profilePhoto;
    freelanceProfile.location=req.body.location;
    freelanceProfile.phone=req.body.phone;

    freelanceProfile.save((err,doc) =>{
        if(!err)
            resp.send(doc);
        else{
            return next(err);
        }
    })   
}

module.exports.getData = (req,resp,next) => {
    FreelanceProfile.find({userId:req._id},(err,data) => {
        if(err){
            return next(err)
        }
        else{
            User.find({_id:req._id},(err,user) => {
                if(!user){
                    return resp.status(404).json( {status:false,message:'user record not found'} )
                 }else{
                     resp.status(200).json({data, user : g.pick(user,['email','firstName'])})
                 }
            })
         }
        }
    )
}