import React from 'react';
import {Box} from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom';
import UserForm from '../components/UserForm';
import PostForm from '../components/PostForm';
import UserList from '../components/UserList';
import PostList from '../components/PostList';
import UserAnalytics from '../components/UserAnalytics';
import PostAnalytics from '../components/PostAnalytics';
import UserView from '../components/UserView';
import Homepage from '../components/Homepage';
import Analytics from '../pages/Analytics';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users" element={<UserForm />} />
      <Route path="/users/:userId" element={<UserForm />} />
      <Route path="/users-view/:userId" element={<UserView />} />
      <Route path="/posts/:id" element={<PostForm />} />
      <Route path="/user-list" element={<UserList />} />
      <Route path="/post-list" element={<PostList />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<Box>404 Page Not Found</Box>} />
    </Routes>
  );
};

export default AllRoutes;
