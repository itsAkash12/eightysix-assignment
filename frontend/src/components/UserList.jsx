import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import UserListItem from './UserListItem';
import { useUserContext } from '../contexts/UserContext';

const UserList = () => {
  const {users,deleteUser} = useUserContext()

  return (
    <Box>
      <Heading textAlign="center">Users List</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} p={4}>
        {users && users.map((user) => (
          <UserListItem key={user._id} user={user} onDeleteUser={deleteUser} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserList;
