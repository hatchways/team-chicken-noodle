const asyncHandler = require("express-async-handler");
const { getFileStream } = require('../utils/s3')

// @route GET /images/:key
// @desc create read stream for image from S3 bucket
// @access Private
exports.getImage = asyncHandler(async (req, res, next) => {
    const imageKey = req.params.key
    const readStream = getFileStream(imageKey);
    readStream.pipe(res);
});
