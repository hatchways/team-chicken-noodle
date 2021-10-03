const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const  {getImage}  = require("../controllers/getImage");

router.route("/:key").get(protect,getImage);

module.exports = router;