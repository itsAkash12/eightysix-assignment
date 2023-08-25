const express = require('express');
const analyticsRoute = express.Router();

analyticsRoute.get('/users', getUserAnalytics);
analyticsRoute.get('/users/top-active', getTopActiveUsers);
analyticsRoute.get('/posts', getPostAnalytics);
analyticsRoute.get('/posts/top-liked', getTopLikedPosts);

module.exports = analyticsRoute;
