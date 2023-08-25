const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    minlength: [1, 'Name must be at least 1 character.'],
    maxlength: [50, 'Name cannot exceed 50 characters.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    match: [/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/, 'Invalid email format.']
  },
  bio: {
    type: String,
    maxlength: [200, 'Bio cannot exceed 200 characters.']
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
