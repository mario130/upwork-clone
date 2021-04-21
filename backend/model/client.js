const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: "Client ID field can\'t be empty",
        ref:'User',
        unique: true,

    },
    jobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    
})

module.exports = mongoose.model("Client", clientSchema);