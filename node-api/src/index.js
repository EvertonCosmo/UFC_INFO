const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors") 
const routes =  require("./routes")
const app = express()
const server = require("http").Server(app)
const json = express.json()
const io =require("socket.io")(server)

mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser:true})
// mongoose.connect("mongodb+srv://ufcDb:ufccrateus123@ufcinfo-cmwbv.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
  app.use((req,res,next) => { 
    req.io = io
    return next()
})
app.use(json)
app.use(routes)
app.use(cors()) 



 io.on("connection",(socket)=>{
    console.log("new user connected")
    
})


server.listen(3000,()=>{
    console.log("server started")
})
