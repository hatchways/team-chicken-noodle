const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  firstName: {
    type: String,
    required: [true, 'Please Provide First Name.'],
  },
  lastName: {
    type: String,
    required: [true, 'Please Provide Last Name.'],
  },
  description: {
    type: String,
    maxlength: 300,
  },
  gender: {
    type: String,
    enum: ['Unkown', 'Male', 'Female'],
  },
  birthDate: Date,
  phoneNumber: String,
  hourlyRate: Number,
  address: {
    city: String,
    province: String,
    country: String,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  availability: {
    mon: {
      from: String,
      to: String,
    },
    tue: {
      from: String,
      to: String,
    },
    Wed: {
      from: String,
      to: String,
    },
    thu: {
      from: String,
      to: String,
    },
    fri: {
      from: String,
      to: String,
    },
    sat: {
      from: String,
      to: String,
    },
    sun: {
      from: String,
      to: String,
    },
  },
  profilePhoto: String,
  bioImage: [String],
  shortDescription: {
    type: String,
    maxlength: 20,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
