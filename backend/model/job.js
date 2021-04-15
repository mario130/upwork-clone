const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title:{
        type: String,
        required: "A job must have a title"
    },
    category:{
        type: String,
        required: "A job must have a category"
    },
    description:{
        type: String,
        required: "A job must have a description"
    },
    projectType:{
        type: String,
        required: "A job must have a type"
    },
    budget:{
        type: String,
        required: "A job must have a budget"
    },
    duration:{
        type: String,
        required: "A job must have a duration"
    },
    experience:{
        type: String,
        required: "A job must have a experience"
    },

    //todo SOME FIELDS ARE STILL MISSING!
})

module.exports = mongoose.model("Job", jobSchema);