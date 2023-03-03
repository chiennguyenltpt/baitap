const db = require("../utils/database")

const mysql = require("mysql2");

module.exports.getAllStudent = ()=>{
    let sql = "SELECT * FROM Student"
    return db.query(sql)
}
module.exports.findOne = (id,name)=>{
    let sql = "SELECT * FROM student_schemas.Student where id = ? and name = ?;"
    let value = [id,name];
    sql = mysql.format(sql,value)
    return db.query(sql)
}
module.exports.addStudent = (id,name,age,status)=>{
    let sql = "INSERT INTO `student_schemas`.`Student` (`id`, `Name`, `age`, `status`) VALUES (?, ?, ?, ?);"
    let value = [id,name,age,status];
    sql = mysql.format(sql,value)
    return db.query(sql)
}
module.exports.updateStatusStudent =(valueUpdate,id)=>{
    let sql = "UPDATE `student_schemas`.`Student` SET `status` = ? WHERE (`id` = ?)"
    let value = [valueUpdate,id];
    sql = mysql.format(sql,value)
    return db.query(sql)
}
module.exports.deleteOneStudent = (id)=>{
    let sql = "DELETE FROM `student_schemas`.`Student` WHERE (`id` = ?);"
    let value =[id]
    sql = mysql.format(sql,value)
    return db.query(sql)
}

module.exports.pageValue = (curPage,sortby,total)=>{
    console.log(sortby);
    console.log(sortby==""|| sortby=='tang');
    if(sortby==""|| sortby=='tang'){
        let sql = `SELECT * FROM student_schemas.Student  order by Age   limit ${(Number(curPage)-1)*total},${total}`
        console.log(sql);
        return db.query(sql) 
    }else if(sortby=="giam"){
        let sql = `SELECT * FROM student_schemas.Student  order by Age  desc limit ${(Number(curPage)-1)*total},${Number(total)}`;
        return db.query(sql)
    }
}