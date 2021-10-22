const express = require("express");
const protect = require("../middleware/auth");

const { 
    createProfile,
    findAllProfiles,
    findProfileById,
    updateProfile
} = require("../controllers/profile");

const router = express.Router();

router.route("/").post(protect, createProfile);

router.route("/profiles").get(protect, findAllProfiles);

router.route("/").get(protect, findProfileById).put(protect, updateProfile);

module.exports = router;

