import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [flag,setFlag]= useState(false);

  const handleLike = async (postId) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/posts/${postId}/like`);
      setFlag(!flag)
      toast({
        title: 'Success',
        description: "Post Liked!",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    } catch (error) {
      console.error("Error liking post:", error);
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts/${postId}/unlike`
      );
      setFlag(!flag)
      toast({
        title: 'Success',
        description: "Post Unliked",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    } catch (error) {
      console.error("Error unliking post:", error);
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`);
      setFlag(!flag)
      toast({
        title: 'Success',
        description: "Post Deleted Successfully",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: 'Error',
        description: "Error While Deleting the Post",
        status: 'error',
        duration: 1000,
        isClosable: true,
      })
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        flag,
        setFlag,
        handleLike,
        handleUnlike,
        handleDelete,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
