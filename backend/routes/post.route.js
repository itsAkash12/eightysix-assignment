const express = require('express');
const postRoute = express.Router();
const {createPost, getPostById, updatePost, deletePost, likePost, unlikePost} = require("../controllers/postControllers")

postRoute.post('/', createPost);
postRoute.get('/:id', getPostById);
postRoute.patch('/:id', updatePost);
postRoute.delete('/:id', deletePost);
postRoute.post('/:id/like', likePost);
postRoute.post('/:id/unlike', unlikePost);

module.exports = postRoute;
