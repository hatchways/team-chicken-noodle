const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createCompany,
  addReview,
  updateCompany,
  addProduct,
} = require("../controllers/company");

router.route("/create").post(protect, createCompany);
router.route("/:id/add-review").post(protect, addReview);
router.route("/:id/update").post(protect, updateCompany);
router.route("/:id/add-product").post(protect, addProduct);

module.exports = router;
