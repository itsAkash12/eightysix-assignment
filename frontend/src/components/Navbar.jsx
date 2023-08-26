import React from 'react';
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="md" color="white">
          Social Media App
        </Heading>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/users" color="white" mr={4}>
          Create User
        </Link>
        <Link as={RouterLink} to="/user-list" color="white" mr={4}>
          All Users
        </Link>
        <Link as={RouterLink} to="/post-list" color="white" mr={4}>
          Posts
        </Link>
        <Link as={RouterLink} to="/analytics" color="white">
          Analytics
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
