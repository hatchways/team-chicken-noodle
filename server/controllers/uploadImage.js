const asyncHandler = require("express-async-handler");
const { uploadFile } = require('../utils/s3');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);


// @route POST /uploadImage
// @desc Upload image to S3
// @access Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
  try {
    const file = req.file;
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    res.status(200).json({ imagePath: `/images/${result.Key}`});
  }
  catch (err) {
    res.status(500).json({ error: err });
  }
});
