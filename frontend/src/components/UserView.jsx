import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Divider, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PostList from './PostList';


const UserView = () => {
    const params = useParams();
    const id = params.userId;
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetchUserData();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  return (
    <Box p={"20px"}>
      {user && (
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading>{user.name}</Heading>
            <Text>Email: {user.email}</Text>
            <Text>Bio: {user.bio || 'No bio available'}</Text>
          </Box>
          <Divider />
          <PostList userid={user._id}/>
        </VStack>
      )}
    </Box>
  );
};

export default UserView;
