import React, { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getRandomColor } from '../helpers/getRandomColor';

const PostAnalytics = () => {
  const cardColor = getRandomColor();
  const [totalPosts, setTotalPosts] = useState(0);
  const [topLikedPosts, setTopLikedPosts] = useState([]);

  useEffect(() => {
    fetchPostAnalytics();
  }, []);

  const fetchPostAnalytics = async () => {
    try {
      const totalRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/analytics/posts`);
      setTotalPosts(totalRes.data.totalPosts);

      const topRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/analytics/posts/top-liked`);
      setTopLikedPosts(topRes.data);
    } catch (error) {
      console.error('Error fetching post analytics:', error);
    }
  };

  return (
    <Box>
      <Heading mb="4" textAlign={"center"}>Post Analytics</Heading>
      <Box bg="red.200" p="4" borderRadius="md" shadow="md" >
        <Text>Total Posts: {totalPosts}</Text>
      </Box>
      <Box mt="8">
        <Heading size="md">Top Liked Posts</Heading>
        {topLikedPosts.map((post, index) => (
          <Box key={post._id} p="4" mt="4" borderRadius="md" shadow="md" borderWidth="1px" bg={`${cardColor}.600`} color={"white"} borderColor={`${cardColor}.200`}>
            <Text>{index + 1}. {post.content} - Likes: {post.likes}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostAnalytics;
