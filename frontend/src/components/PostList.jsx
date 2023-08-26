import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { Link } from "react-router-dom";
import PostListItem from "./PostListItem";

const PostList = ({ userid }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [userid]);

  const fetchPosts = async () => {
    try {
      let url = `${import.meta.env.VITE_BASE_URL}/posts`;
      if (userid) {
        url = `${import.meta.env.VITE_BASE_URL}/posts/user/${userid}`;
      }
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/posts/${postId}/like`);
      fetchPosts();
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts/${postId}/unlike`
      );
      fetchPosts();
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Heading size="lg">Posts</Heading>
        <Link to={`/posts/${userid}`}>
          <Button colorScheme="yellow">Create New Post</Button>
        </Link>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4} p={"30px"}>
        {posts.length <= 0 ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>No Post Found !!</Text>
          </Box>
        ) : (
          posts &&
          posts.map((post) => (
            <PostListItem  key={post._id} post={post} handleDelete={handleDelete} handleLike={handleLike} handleUnlike={handleUnlike}/>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
