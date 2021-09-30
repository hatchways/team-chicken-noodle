const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { 
  requestList,
  requestCreate,
  requestUpdate
} = require("../controllers/request");

router.route("/").get(protect, requestList);
router.route("/").post(protect, requestCreate);
router.route("/:id").post(protect, requestUpdate);

module.exports = router;
