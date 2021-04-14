const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(
    new localStrategy({ usernameField:'email'} , 
    (username,password,done) => {
        User.findOne({email:username},
            (err,user) => {
                if(err)
                    return done(err);
                // Unknown User
                else if(!user)
                    return done(null,false,{message:'Email is not registered'});
                // Wrong Password
                else if(!user.verifyPassword(password))
                    return done(null,false,{message:'Wrong password'});
                //Succeeded Login
                else
                    return done(null,user);
            });
    })
)