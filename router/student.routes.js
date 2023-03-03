const express = require("express");
const router = express.Router()
const {showStudent,addStudentValue,
updateStatus,getPage} = require("../controller/student.controller")

router.get("/",showStudent )
router.post("/",addStudentValue)
router.put("/update/:id",updateStatus)
router.delete("/delete/:id")
router.get("/page",getPage)
module.exports = router