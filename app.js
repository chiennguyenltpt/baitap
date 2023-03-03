const express = require("express");
const app = express()
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const multer  = require('multer')
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))





const student = require("./router/student.routes")
const search = require("./router/search.routes")
app.use("/student",student)
app.use("/search",search)
http.listen(port,()=>{
    console.log("server is on running");
});



