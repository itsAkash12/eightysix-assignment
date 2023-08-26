const express = require('express');
const postRoute = express.Router();
const {createPost, getPostById, updatePost, deletePost, likePost, unlikePost, getAllPost, getPostByUserId} = require("../controllers/postControllers")

postRoute.post('/', createPost);
postRoute.get('/', getAllPost);
postRoute.get('/:id', getPostById);
postRoute.get('/user/:userid', getPostByUserId);
postRoute.put('/:id', updatePost);
postRoute.delete('/:id', deletePost);
postRoute.post('/:id/like', likePost);
postRoute.post('/:id/unlike', unlikePost);

module.exports = postRoute;
