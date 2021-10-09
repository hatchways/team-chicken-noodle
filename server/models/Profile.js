const mongoose = require('mongoose');

const hourSchema = mongoose.Schema({
  from: String,
  to: String,
});

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
    state: String,
    country: String,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
  availability: {
    monday: hourSchema,
    tuesday: hourSchema,
    wednesday: hourSchema,
    thursday: hourSchema,
    friday: hourSchema,
    saturday: hourSchema,
    sunday: hourSchema,
  },
  profilePhoto: String,
  bioImage: [String],
  shortDescription: {
    type: String,
    maxlength: 20,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
