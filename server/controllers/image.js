const asyncHandler = require("express-async-handler");
const { uploadFile, getFile } = require('../utils/s3');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);


// @route POST /images
// @desc Upload image to S3
// @access Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
  const file = req.file;
  const result = await uploadFile(file);
  await unlinkFile(file.path);
  res.status(200).json({ success: { key: result.Key }});
});

// @route GET /images/:key
// @desc create read stream for image from S3 bucket
// @access Private
exports.getImage = asyncHandler(async (req, res, next) => {
  const imageKey = req.params.key
  const imageFile = await getFile(imageKey);
  res.send(imageFile);
});
