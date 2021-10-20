const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    from: {
      name: {
        type: String,
      },
      profileImage: {
        type: String,
      },
    },
    type: {
      type: String,
      enum: ["request", "accept", "decline"],
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
    context: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Notification = mongoose.model(
  "notification",
  notificationSchema
);
