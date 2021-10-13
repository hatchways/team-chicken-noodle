const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createNotification, getAllNotification, getUnreadNotification, updateNotification } = require("../controllers/notification");

router.route("/create").post(protect, createNotification);
router.route("/all").get(protect, getAllNotification);
router.route("/").get(protect, getUnreadNotification);
router.route("/").put(protect, updateNotification)


module.exports = router;