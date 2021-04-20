const FreelanceProfile = require('../model/freelanceProfile');
const User = require('../model/user');


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
    freelanceProfile.profilePhoto=req.file.path;
    freelanceProfile.location=req.body.location;
    freelanceProfile.phone=req.body.phone;

    freelanceProfile.save((err,doc) =>{
        if(!err)
            resp.send(doc);
        else if(err.code == 11000)
        {
            resp.status(422).send('User already has profile');
        }
        else{
            return next(err);
        }
    })   
}

module.exports.getData = (req,resp,next) => {
    FreelanceProfile.find({userId:req._id},(err,profileData) => {
        if(err){
            return next(err)
        }
        else{
            User.find({_id:req._id},(err,user) => {
                if(!user){
                    return resp.status(404).json( {status:false,message:'user record not found'} )
                 }else{
                     resp.status(200).json({profileData, user })
                 }
            }).select('email firstName lastName userName country')
         }
        }
    )
}

module.exports.updateProfile = (req,resp,next) => {
    let freelanceProfile=req.body
    User.updateOne({_id: req.params.id},freelanceProfile).then((data, err) => {
        if (!err) {
          if(data === null){
            return resp.status(200).send('Not found')
          }
          return resp.status(200).send(data)
        } else {
          resp.status(400).send(err)
        }
    })
}