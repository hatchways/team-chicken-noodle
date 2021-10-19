const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  createNotification,
  getAllNotification,
  getUnreadNotification,
  updateNotification,
  updateAllUnreadNotification,
} = require("../controllers/notification");

router.route("/").post(protect, createNotification);
router.route("/").get(protect, getAllNotification);
router.route("/unread").post(protect, getUnreadNotification);
router.route("/:id").patch(protect, updateNotification);
router.route("/").put(protect, updateAllUnreadNotification);

module.exports = router;
