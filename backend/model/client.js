const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Client ID field can\'t be empty",
        ref:'User',

        // validate: async function(){
        //     let User=mongoose.model('User');
        //     return await User.findOne({_id:this.userId,userType:'client'})
        // }
    },
    // jobs:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Job"
    // }],
    // totalPaid: {
    //     type:Number,
    //     required:true
    // }
    
})

module.exports = mongoose.model("Client", clientSchema);