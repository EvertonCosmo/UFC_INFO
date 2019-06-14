const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
     author:String,
     title:String,
     content:String,
     category:String,
     created:{
        type:Date,
        default:Date.now,
     },
     
})

module.exports = mongoose.model("Post",PostSchema)