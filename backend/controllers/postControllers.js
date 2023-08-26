const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");

// Creating a new post
const createPost = async (req, res) => {
  try {
    const { user_id, content } = req.body;
    const userExists = await UserModel.findOne({ _id: user_id });
    if (!userExists) {
      return res.status(404).json({ message: "User not found." });
    }

    const newPost = await PostModel.create({ user_id, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retrieving a post by id
const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Updating a post's content by id
const updatePost = async (req, res) => {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true, runValidators:true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deleting a post by id
const deletePost = async (req, res) => {
  try {
    const deletedPost = await PostModel.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json({ message: "Post deleted." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Incrementing the like count of a post by id
const likePost = async (req, res) => {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Decrementing the like count of a post by id
const unlikePost = async (req, res) => {
  try {
    const post = await PostModel.findOne({ _id: req.params.id });
    if (post.likes > 0) {
      const updatedPost = await PostModel.findByIdAndUpdate(
        req.params.id,
        { $inc: { likes: -1 }},
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found." });
      }
      res.json(updatedPost);
    }else{
      return res.status(404).json({message:"Likes can't decrement after 0"})
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
};
