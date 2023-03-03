const {searchByName} = require("../model/search.model")




module.exports.searchStudent = async(req,res)=>{
    const {name} = req.query
    try {
       let [data]= await searchByName(name)
       if(data.length>0){
            res.json(data)
       }
    } catch (error) {
        res.json("student is not exist")
    }
}