const express = require('express');
const postRoute = express.Router();

postRoute.post('/', createPost);
postRoute.get('/:id', getPostById);
postRoute.put('/:id', updatePost);
postRoute.delete('/:id', deletePost);
postRoute.post('/:id/like', likePost);
postRoute.post('/:id/unlike', unlikePost);

module.exports = postRoute;
