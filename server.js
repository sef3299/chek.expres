const express=require("express")

const app=express()
const port=8000
console.log(__dirname)
const day=new Date().getDay()
const hour=new Date().getHours()
console.log(hour)
const middleware=(req,res,next)=>{
    if(day<1 || day>5 || hour>16 || hour<9){
        res.send("we are closed ")
    }
    else{
        next()
    }
}
app.get("/",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})
app.get("/Contactus",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/Contactus.html")
})
app.get("/Ourservice",middleware,(req,res)=>{
    res.sendFile(__dirname+"/public/Ourservice.html")
})
app.listen(port,console.log("server is running"))