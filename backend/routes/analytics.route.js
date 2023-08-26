const express = require('express');
const { getUserAnalytics, getTopActiveUsers, getPostAnalytics, getTopLikedPosts } = require('../controllers/analyticsControllers');
const analyticsRoute = express.Router();

analyticsRoute.get('/users', getUserAnalytics);
analyticsRoute.get('/users/top-active', getTopActiveUsers);
analyticsRoute.get('/posts', getPostAnalytics);
analyticsRoute.get('/posts/top-liked', getTopLikedPosts);

module.exports = analyticsRoute;
