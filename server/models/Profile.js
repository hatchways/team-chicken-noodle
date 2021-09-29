const mongoose = require("mongoose");

const reqString = {
    type: String,
    require: true
};

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    description: {
        type: String,
        maxlength: 300
    },
    gender: String,
    birthDate: Date,
    phoneNumber: [String],
    hourlyRate: Number,
    address: {
      city: String,
      province: String,
      country: String,
    },
    isAvailable:{
        type: Boolean,
        default: false
    },
    availability: {
        days: [String],
        hours: String
    },
    profilePhoto: [String] 
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);