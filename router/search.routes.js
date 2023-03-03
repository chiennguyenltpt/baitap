const express = require("express");
const router = express.Router();


const {searchStudent} = require("../controller/search.controller")

router.get("/",searchStudent)
module.exports = router