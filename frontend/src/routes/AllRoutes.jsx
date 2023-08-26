import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserForm from '../components/userForm';
import PostForm from '../components/postForm';
import UserList from '../components/userList';
import PostList from '../components/postList';
import UserAnalytics from '../components/userAnalytics';
import PostAnalytics from '../components/postAnalytics';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UserForm />} />
      <Route path="/posts" element={<PostForm />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/user-analytics" element={<UserAnalytics />} />
      <Route path="/post-analytics" element={<PostAnalytics />} />
    </Routes>
  );
};

export default AllRoutes;
