const express=require("express")

const app=express()
const Datee=require("./middleware/Datee")

app.use(Datee)
//first route
app.get("/home",(req,res)=>{
    res.sendFile(dirname + "/public/home.html")
})



//second route
app.get("/service",(req,res)=>{
    res.sendFile(dirname+"/public/OurService.html")
})


//third route
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname + "/Public/contactUs.html")
})


const port=5000

app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running on port 5000")
})