const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { createNotification, getAllNotification, getUnreadNotification, updateNotification, updateAllUnreadNotification } = require("../controllers/notification");

router.route("/create").post(protect, createNotification);
router.route("/all").get(protect, getAllNotification);
router.route("/").get(protect, getUnreadNotification);
router.route("/:id").put(protect, updateNotification);
router.route("/").put(protect, updateAllUnreadNotification);


module.exports = router;