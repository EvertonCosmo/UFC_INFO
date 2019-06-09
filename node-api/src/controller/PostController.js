
// CRUD 
const Post = require("../model/Post");

module.exports = {

    async index(req,res){
        const posts = await Post.find({}).sort("-created") // sort
        return res.json(posts)
    },
    async store(req ,res){
        const post = await Post.create(req.body);
   
        
        req.emit("post",post); 
        
        return res.json(post);
    }

}