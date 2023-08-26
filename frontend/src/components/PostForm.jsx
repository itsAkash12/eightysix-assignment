import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(''); // Add userId state
  const params = useParams(); // Extract post ID from the URL
  console.log(params);
  let postId = params.id

  useEffect(() => {
    // Fetch post data if editing an existing post
    if (postId) {
      fetchPostData();
    }
    // Fetch userId here if needed
    fetchUserId();
  }, [postId]);

  const fetchPostData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`);
      const post = response.data;
      setContent(post.content);
      setUserId(post.user_id); // Set userId from the post data
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  const fetchUserId = async () => {
    try {
      // Fetch userId logic here if needed
      // Example: const response = await axios.get(`/api/users/${userId}`);
      // const user = response.data;
      // setUserId(user.id);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { content, user_id: userId }; // Include userId in the postData

    try {
      if (postId) {
        await axios.put(`/api/posts/${postId}`, postData);
      } else {
        await axios.post('/api/posts', postData);
      }
      // Redirect or show success message as needed
    } catch (error) {
      console.error('Error submitting post data:', error);
    }
  };

  return (
    <Box>
      <Heading>{postId ? 'Edit Post' : 'Create Post'}</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          {/* Add userId input field */}
          <FormControl>
            <FormLabel>User ID</FormLabel>
            <Input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            {postId ? 'Save Changes' : 'Create Post'}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default PostForm;
