const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors") 
const routes =  require("./routes")
const app = express()
const server = require("http").createServer(app)
const json = express.json()
const io =require("socket.io")(server)

mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser:true})
app.use(json)
app.use(routes)
app.use(cors()) 

app.use((req,res,next) => { 
    req.io = io
    return next()
})
io.on("connection",(socket)=>{
    console.log("new user connected")
})


server.listen(3000,()=>{
    console.log("server started")
})
