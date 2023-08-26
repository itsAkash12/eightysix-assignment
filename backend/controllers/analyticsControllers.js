const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');

// Getting total number of users
exports.getUserAnalytics = async (req, res) => {
  try {
    const totalUsers = await UserModel.countDocuments();
    res.json({ totalUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Getting the top 5 most active users
exports.getTopActiveUsers = async (req, res) => {
  try {
    const topActiveUsers = await UserModel.aggregate([
      {
        $lookup: {
          from: 'posts',
          localField: '_id',
          foreignField: 'user_id',
          as: 'posts'
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          postCount: { $size: '$posts' }
        }
      },
      { $sort: { postCount: -1 } },
      { $limit: 5 }
    ]);

    res.json(topActiveUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Getting total number of posts
exports.getPostAnalytics = async (req, res) => {
  try {
    const totalPosts = await PostModel.countDocuments();
    res.json({ totalPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Getting the top 5 most liked posts
exports.getTopLikedPosts = async (req, res) => {
  try {
    const topLikedPosts = await PostModel.aggregate([
      {
        $sort: { likes: -1 }
      },
      { $limit: 5 }
    ]);

    res.json(topLikedPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
