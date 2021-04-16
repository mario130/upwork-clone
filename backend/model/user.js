const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: "First name field can\'t be empty"
    },
    lastName:{
        type: String,
        required: "Last name field can\'t be empty"
    },
    email:{
        type:String,
        required: "Email field can\'t be empty",
        unique:true
    },
    password:{
        type:String,
        required: "password field can\'t be empty",
        minlength: [6,"password can\'t be less than 6 characters"]
    },
    saltSecret:{
        type:String
    },
    userName:{
        type:String,
        // required: "User name field can\'t be empty",
        unique:true
    },
    country:{
        type:String,
        required: "country field can\'t be empty"
    },
    userType:{
        type:String,
        required: "userType field can\'t be empty"
    }
})

//Custom Validation
userSchema.path('email').validate((val) => {
    emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    return emailRegex.test(val)
},'Invalid E-mail address')

// Pre Event
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(this.password,salt,(err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXP
        });
}


module.exports = mongoose.model("User", userSchema);