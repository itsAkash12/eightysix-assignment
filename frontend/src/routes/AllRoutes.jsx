import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import PostPage from '../pages/PostPage';
import UserAnalyticsPage from '../pages/UserAnalyticsPage';
import PostAnalyticsPage from '../pages/PostAnalyticsPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/user-analytics" element={<UserAnalyticsPage />} />
      <Route path="/post-analytics" element={<PostAnalyticsPage />} />
    </Routes>
  );
};

export default AllRoutes;
