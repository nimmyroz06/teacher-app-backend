const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/",(req,res)=>{
    let input=req.body
    res.json({"status":"done"})
})

app.get("/view",(req,res)=>{
    res.send("viewedd")
})

app.listen(8080,()=>{
    console.log("server started")
})