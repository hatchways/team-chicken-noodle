const express = require("express");
const protect = require("../middleware/auth");

const { 
    createProfile,
    findAllProfiles, 
    findProfileById,
    updateProfile
} = require("../controllers/profile.js");

const router = express.Router();

router.route("/create").post(protect, createProfile);
router.route("/").get(protect, findAllProfiles);
router.route("/:id").get(protect, findProfileById);
router.route("/update").put(protect, updateProfile);

module.exports = router;

