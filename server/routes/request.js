const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { 
  requestList,
  requestCreate,
  requestUpdate
} = require("../controllers/request");
const { validateRequest } = require("../validate");

router.route("/list").get(protect, requestList);
router.route("/create").post(protect, requestCreate);
router.route("/update").put(protect, requestUpdate);

module.exports = router;
