const {getAllStudent,findOne,addStudent,updateStatusStudent,
        deleteOneStudent,pageValue
} = require("../model/student.model")


module.exports.showStudent = async(req,res)=>{
    try {
        console.log(1);
        const [dataStudent] = await getAllStudent()
        console.log(dataStudent);
        res.json(dataStudent)
    } catch (error) {
        res.json(error) 
    }
}
module.exports.addStudentValue = async(req,res)=>{
    console.log(req.body);
    const {id,name,age,status}= req.body
    try {
        let [value] = await findOne(id,name)
        console.log(value);
        if(value.length>0){
            res.json("student exist")
        }else{
            await addStudent(id,name,age,status).then(()=>{
                res.json({mess:"add studen success"})
            })
        }
    } catch (error) {
        console.log(error);
        res.json({err:error})
    }
}

module.exports.updateStatus =async(req,res)=>{
    const {id} = req.params
    const {status}= req.body
    console.log(id,status);
    await updateStatusStudent(status,id).then(()=>{
        res.json({mess:"update success"})
    })
}
module.exports.deleteStudent = async(req,res)=>{
    try {
        const {id}= req.params;
    await deleteOneStudent(id).then(()=>res.json({mess:"delete success"}))
    } catch (error) {
        res.json({mess:"can not delete"})
    }
}
module.exports.getPage= async(req,res)=>{

    const {curpage,orderby,total} = req.query

    let [data] = await pageValue(curpage,orderby,total)
    console.log(data); 
}