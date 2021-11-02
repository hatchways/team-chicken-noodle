const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { addReview } = require("../controllers/product");

router.route("/:id/add-review").post(protect, addReview);

module.exports = router;
