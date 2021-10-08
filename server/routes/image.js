const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const protect = require("../middleware/auth");
const { uploadImage, getImage } = require("../controllers/image");

router.route("/:key").get(protect, getImage);
router.route("/").post(protect, upload.single('image'), uploadImage);

module.exports = router;