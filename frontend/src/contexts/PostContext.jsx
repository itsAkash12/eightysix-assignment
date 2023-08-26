import React, { createContext, useState, useContext } from "react";
import axios from "axios";
const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [flag,setFlag]= useState(false);

  const handleLike = async (postId) => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/posts/${postId}/like`);
      // fetchPosts();
      setFlag(!flag)
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/posts/${postId}/unlike`
      );
      // fetchPosts();
      setFlag(!flag)
    } catch (error) {
      console.error("Error unliking post:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${postId}`);
      // fetchPosts();
      setFlag(!flag)
    } catch (error) {
      console.error("Error deleting post:", error);
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
