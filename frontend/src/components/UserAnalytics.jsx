import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import { getRandomColor } from '../helpers/getRandomColor';

const UserAnalytics = () => {
  const [loading,setLoading] = useState(false);
  const cardColor = getRandomColor();
  const [totalUsers, setTotalUsers] = useState(0);
  const [topActiveUsers, setTopActiveUsers] = useState([]);

  useEffect(() => {
    fetchUserAnalytics();
  }, []);

  const fetchUserAnalytics = async () => {
    setLoading(true);
    try {
      const totalRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/analytics/users`);
      setTotalUsers(totalRes.data.totalUsers);

      const activeRes = await axios.get(`${import.meta.env.VITE_BASE_URL}/analytics/users/top-active`);
      setTopActiveUsers(activeRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user analytics:', error);
      setLoading(false);
    }
  };

  return (
    <Box>
      <Heading mb="4" textAlign={"center"}>User Analytics</Heading>
      {
        loading ? <Text textAlign={"center"}>Loading...</Text>:<Box>
          <Box bg="red.200" p="4" borderRadius="md" shadow="md">
        <Text>Total Users: {totalUsers}</Text>
      </Box>
      <Box mt="8">
        <Heading size="md">Top Active Users</Heading>
        {topActiveUsers.map((user, index) => (
          <Box key={user._id} p="4" mt="4" borderRadius="md" shadow="md" borderWidth="1px" bg={`${cardColor}.600`} color={"white"} borderColor={`${cardColor}.200`}>
            <Text>{index + 1}. {user.name} - Posts: {user.postCount}</Text>
          </Box>
        ))}
      </Box>
        </Box>
      }
    </Box>
  );
};

export default UserAnalytics;
