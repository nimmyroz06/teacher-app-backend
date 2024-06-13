const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const{teachermodel}=require("./models/teacher")
mongoose.connect("mongodb+srv://nimmyroz:roz206@cluster0.svkepzi.mongodb.net/teacherdb?retryWrites=true&w=majority&appName=Cluster0")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/",(req,res)=>{
    let input=req.body
    let teacherapp=new teachermodel(input)
    console.log(teacherapp)
    teacherapp.save()
    res.json({"status":"done"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    teachermodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    teachermodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})

app.get("/view",(req,res)=>{
    teachermodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
    res.send("viewed")
})

app.listen(8080,()=>{
    console.log("server started")
})