
// CRUD 
const Post = require("../model/Post");

module.exports = {

    async index(req,res){
        const posts = await Post.find({}).sort("-created") // sort
        return res.json(posts)
    },
    async store(req ,res){
        const post = await Post.create(req.body);
   
        
        req.io.emit('post',post); 
        console.log(post)
        
        return res.json(post);
    },
    async singlePost(req,res){
    	const post = await Post.findById(req.params.id);
    	return res.json(post)
    }

}