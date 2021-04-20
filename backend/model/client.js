const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Client ID field can\'t be empty",
        unique:true,
        ref:'User',

        validate: async function(){
            let User=mongoose.model('User');
            return await User.findOne({_id:this.userId,userType:'client'})
        }
    },
    jobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    totalPaid: {
        type:Number,
        required:true
    }
    
})

module.exports = mongoose.model("Client", userSchema);