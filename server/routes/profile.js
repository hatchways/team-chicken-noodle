const express = require("express");
const protect = require("../middleware/auth");

{
    createProfile,
    findProfileById,
    updateProfileById,
    findAllProfiles
} = require("../controllers/profile")

const router = express.Router();

router.route("/create").post(protect,createProfile)
router.route("/").get(protect,findAllProfiles)
router.route("/:id").get(protect,findProfileById)
router.route("/update").put(protect,updateProfile)

const router = express.Router();

