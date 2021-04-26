const mongoose = require("mongoose");
const proposalSchema = require("./proposal");
const ProfileSchema = require("./freelanceProfile");

const freelancerSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: "Client ID field can't be empty",
    ref: "User",
  },
  submittedProposals: [proposalSchema],
  profile: {
    category: {
      type: String,
      required: "Category type field can't be empty",
      default: "it",
    },
    subcategory: {
      type: String,
      required: "subcategory info field can't be empty",
      default: "Web, Mobile & Software Dev",
    },
    title: {
      type: String,
      required: "Title can't be empty",
      default: "full Stack developer",
    },
    overview: {
      type: String,
      required: "overview can't be empty",
      minlength: [100, "Over view can't be less than 100 characters"],
      default:
        "What is Upwork? Upwork is a huge virtual international market place where a large number of clients and freelancers are available to hire and to be hired. It is a ...",
    },
    // skills: {
    //   type: [String] ,
    //   required: "At least one skill is required",
    //   validate: {
    //     validator: function () {
    //       return this.expertise.length > 0;
    //     },
    //     message: "minimum 1 skill should be added",
    //   },
    //   default: ["skill1"],
    // },
    expertiseLevel: {
      type: String,
      required: "Expertise level field can't be empty",
      default: "entry level",
    },
    education: {
      school: {
        type: String,
        required: "school field can't be empty",
        default: "school1",
      },
      AreaOfStudy: String,
      degree: String,
    },

    languages: {
      type: [String],
      required: "Add at least one item in languages field",
      default: ["english"],
    },
    hourlyRate: {
      type: Number,
      required: "Hourly rate field can't be empty",
      default: 10,
    },

    profilePhoto: {
      type: String,
      required: "Profile photo field can't be empty",
      default: "/src/photo1",
    },
    location: {
      country: {
        type: String,
        required: true,
        default: "egypt",
      },
      streetAddress: {
        type: String,
        required: true,
        default: "salah salem",
      },
      city: {
        type: String,
        required: true,
        default: "beni suef",
      },
      postCode: {
        type: String,
        required: true,
        default: "61255",
      },
    },
    phone: {
      type: String,
      required: "Phone field can't be empty",
      default: "01008005403",
    },
    feedbacks:[{
      feedback:{
        type:String,
        required:true
      },
      rate:{
        type:Number,
        required:true
      }
    }]
  },

});

module.exports = mongoose.model("Freelancer", freelancerSchema);
