const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'User ID is required.']
  },
  content: {
    type: String,
    required: [true, 'Content is required.'],
    minlength: [1, 'Content must be at least 1 character.'],
    maxlength: [300, 'Content cannot exceed 300 characters.']
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0,
    min: [0, 'Likes count cannot be negative.']
  }
});

const PostModel = mongoose.model('posts', postSchema);

module.exports = PostModel;
