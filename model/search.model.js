const db = require("../utils/database")

const mysql = require("mysql2");
module.exports.searchByName = (name)=>{
    let sql = "SELECT * FROM student_schemas.Student  where name = ?";
    let value = [name]
    sql = mysql.format(sql,value)
    return db.query(sql)
}