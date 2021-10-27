const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  review: String,
  rating: { type: Number, required: true },
});

module.exports = Review = mongoose.model("review", reviewSchema);
