const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
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
    days: {
      Monday: { type: Boolean, default: true },
      Tuesday: { type: Boolean, default: true },
      Wednesday: { type: Boolean, default: true },
      Thursday: { type: Boolean, default: true },
      Friday: { type: Boolean, default: true },
      Saturday: { type: Boolean, default: false },
      Sunday: { type: Boolean, default: false },
    },
    hours: {
      end: String,
      start: String,
    },
  },
  profilePhoto: String,
  bioImage: [String],
  shortDescription: {
    type: String,
    maxlength: 20,
  },
});

module.exports = Notification = mongoose.model('notification', notificationSchema);