const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  type: {
    type: String,
    enum: ['request', 'accept', 'decline'],
  },
  title: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Notification = mongoose.model('notification', notificationSchema);