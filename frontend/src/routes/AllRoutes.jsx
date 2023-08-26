import React from 'react';
import {Box} from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom';
import UserForm from '../components/UserForm';
import PostForm from '../components/PostForm';
import UserList from '../components/UserList';
import PostList from '../components/PostList';
import UserAnalytics from '../components/UserAnalytics';
import PostAnalytics from '../components/PostAnalytics';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<UserForm />} />
      <Route path="/users/:userId" element={<UserForm />} />
      <Route path="/posts" element={<PostForm />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/user-analytics" element={<UserAnalytics />} />
      <Route path="/post-analytics" element={<PostAnalytics />} />
      <Route path="*" element={<Box>404 Page Not Found</Box>} />
    </Routes>
  );
};

export default AllRoutes;
