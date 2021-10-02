const asyncHandler = require("express-async-handler");

// @route POST /uploadImage
// @desc Upload image to S3
// @access Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
console.log(req.file)
  res.status(200).json({});
});
