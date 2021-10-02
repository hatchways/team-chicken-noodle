const asyncHandler = require("express-async-handler");
const { uploadFile } = require('../utils/s3')

// @route POST /uploadImage
// @desc Upload image to S3
// @access Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
  try {
    const file = req.file;
    const result = await uploadFile(file);
    console.log(result);
    res.status(200).json({ imagePath: `/images/${result.Key}`});
  }
  catch (err) {
    console.log(err);
  }
});
