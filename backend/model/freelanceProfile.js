const mongoose = require("mongoose");

const freelanceProfileSchema = mongoose.Schema({
    userId:{
        type: String,
        required: "User ID field can\'t be empty",
        unique:true,
    
        validate: async function(){
            let User=mongoose.model('Freelancer');
            return await User.findOne({_id:this.userId})
        }
    },
    categoryType:{
        type:String,
        required: "Category type field can\'t be empty"
    },
    categoryInfo:{
        type:String,
        required: "Category info field can\'t be empty"
    },
    expertise:{
        type:Array,
        required: "At least one skill is required"
    },
    expertiseLevel:{
        type:String,
        required: "Expertise level field can\'t be empty"
    },
    education:{
        type:Object,
        required: "Add at least one item in education field"
    },
    employment:{
        type:Object,
        required: "Add at least one item in employment field"
    },
    languages:{
        type:Array,
        required: "Add at least one item in languages field"
    },
    hourlyRate:{
        type:Number,
        required: "Hourly rate field can\'t be empty"
    },
    title:{
        type:String,
        required: "Title field can\'t be empty"
    },
    overView:{
        type:String,
        required: "Over view field can\'t be empty",
        minlength: [100,"Over view can\'t be less than 100 characters"]
    },
    profilePhoto:{
        type:String,
        required: "Profile photo field can\'t be empty"
    },
    location:{
        type:Object,
        required: "location field can\'t be empty"

    },
    phone:{
        type:String,
        required: "Phone field can\'t be empty"
    },
    proposals:[]
})

module.exports = mongoose.model("FreelanceProfile", freelanceProfileSchema);