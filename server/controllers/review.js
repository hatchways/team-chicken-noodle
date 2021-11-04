const Review = require("../models/Review");
const asyncHandler = require("express-async-handler");

exports.createReview = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { review, rating } = req.body;

  const newReview = await Review.create({
    userId,
    review,
    rating,
  });

  res.status(201).json({ message: "review created", review: newReview });
});

exports.updateReview = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { id, review, rating } = req.body;

  const reviewToUpdate = await Review.findById(id);

  if (reviewToUpdate.userId !== userId) {
    res.status(200).json({
      message: "cannot update review of other user",
      review: reviewToUpdate,
    });
  }

  reviewToUpdate.review = review;
  reviewToUpdate.rating = rating;
  await reviewToUpdate.save();

  res.status(200).json({ message: "review updated", review: reviewToUpdate });
});
