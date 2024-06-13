const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "mob":{type:String,required:true},
        "email":{type:String,required:true},
        "place":{type:String,required:true},
        "sname":{type:String,required:true}
    }
)
let teachermodel=mongoose.model("teacherapp",schema)
module.exports={teachermodel}