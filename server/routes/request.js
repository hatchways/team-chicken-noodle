const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  requestList,
  requestCreate,
  requestUpdate,
  makePaymentIntent,
} = require("../controllers/request");

router.route("/").get(protect, requestList);
router.route("/").post(protect, requestCreate);
router.route("/:id").post(protect, requestUpdate);
router.route("/:id/pay").post(protect, makePaymentIntent);

module.exports = router;
