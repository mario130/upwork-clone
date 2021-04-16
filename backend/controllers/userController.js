const User = require('../model/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

module.exports.register = (req,resp,next) => {
    let user=new User();
    user.firstName=req.body.firstName;
    user.email=req.body.email;
    user.lastName=req.body.lastName;
    user.password=req.body.password;
    user.userName=req.body.userName;
    user.country=req.body.country;
    user.userType=req.body.userType;
    user.save((err,doc) =>{
        if(!err)
            {
              // resp.send(doc);
              resp.redirect(`http://localhost:3000/freelancer`)
            }
        else{
            if(err.code == 11000)
            {
              console.log(err);
              resp.status(422).send('E-mail already exists');
            }
            else
                return next(err);
        }
    })
}

module.exports.authenticate = (req,resp,next) => {
    passport.authenticate('local',(err , user, info) => {
        // check if there is an error from passport middleware
        if(err)
          return resp.status(400).json(err);
        // registered user
        else if(user)
          return resp.status(200).json({'token': user.generateJwt() });
        // Unknown user or wrong password
        else
          return resp.status(404).json(info);
      })(req,resp)
}

module.exports.getAll = (req,resp,next) => {
    User.find({},(err,data) => {
        if(!err){
            resp.status(200).send(data)
         }else return next(err)
    })
}

module.exports.getById = (req,resp,next) => {
    User.findOne({_id:req.params.id},(err,data) => {
        if(!err)
            resp.status(200).send(data)
        else
            return next(err)
    })
}

module.exports.getByEmail = (req,resp,next) => {
    User.findOne({email:req.body.email},(err,data) => {
        if(!err)
            if(data == null) {
              // resp.status(422).json("User E-Mail is not correct!!")
              resp.redirect(`http://localhost:3000/signup/details?email=${req.body.email}`)
            }
            else {
              // resp.status(200).json('Valid E-Mail')
              resp.redirect(`http://localhost:3000/login?email=${req.body.email}`)
            }
        else
            return next(err)
    })
}

/* module.exports.update = (req,resp,next) => {
    let user=req.body
    User.updateOne({_id:req.params.id},user,(err,data) => {
        if(!err){
            if(user.password){
                req.params.password = bcrypt.hashSync(req.params.password,10)
            }
            resp.status(200).send(data)
        }else return next(err)
    })
} */

module.exports.update = (req,resp,next) => {
    let user=req.body
    User.updateOne({_id: req.params.id},user).then((data, err) => {
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

module.exports.delete = (req,resp,next) => {
    User.deleteOne({_id:req.params.id},(err,data) => {
        if(!err){
            resp.status(200).send(data)
        }else return next(err)
    })
}