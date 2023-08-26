import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import PostListItem from "./PostListItem";
import { usePostContext } from "../contexts/PostContext";

const PostList = ({ userid }) => {
  const { posts,setPosts,flag,currentUser,setCurrentUser} = usePostContext();
  const navigate = useNavigate();

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
  
  useEffect(() => {
    fetchPosts();
  }, [userid, flag]);

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
        
          <Button colorScheme="yellow" onClick={()=> navigate("/posts")}>Create New Post</Button>
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
            <PostListItem  key={post._id} post={post}/>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
