const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    clientId:{
        type: mongoose.Schema.Types.clientId,
        required: "Client ID field can\'t be empty",
        unique:true,
        ref:'User',

        validate: async function(){
            let User=mongoose.model('User');
            return await User.findOne({_id:this.userId,userType:'client'})
        }
    },
    job:{
        type: Array
    },
    hiredFreelancers:{
        type: Array
    },
    proposals:{
        type:Array
    }
})

module.exports = mongoose.model("Client", userSchema);