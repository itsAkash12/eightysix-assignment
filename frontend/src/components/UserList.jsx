import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import UserListItem from './UserListItem';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Box>
      <Heading textAlign="center">Users List</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} p={4}>
        {users.map((user) => (
          <UserListItem key={user._id} user={user} onDeleteUser={deleteUser} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserList;
