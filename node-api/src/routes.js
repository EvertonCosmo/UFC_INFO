const express = require("express");
const routes = express.Router();
const PostController= require("./controller/PostController");

routes.get("/posts",PostController.index)
routes.get("/posts/:id",PostController.singlePost)
routes.post("/posts", PostController.store)

module.exports = routes


