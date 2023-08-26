import React from 'react';
import { Box, Flex, Button, VStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getRandomColor } from '../helpers/getRandomColor';


const UserListItem = ({ user, onDeleteUser }) => {
  const cardColor = getRandomColor();

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      bg={`${cardColor}.50`}
      borderColor={`${cardColor}.200`}
    >
      <Flex justify="space-between" alignItems="center" mb={2}>
        <Text fontWeight="bold" color={`${cardColor}.800`}>
          {user.name}
        </Text>
        <Button colorScheme="red" size="sm" onClick={() => onDeleteUser(user._id)}>
          Delete
        </Button>
      </Flex>
      <Text color={`${cardColor}.600`}>Email: {user.email}</Text>
      <Text color={`${cardColor}.600`}>Bio: {user.bio}</Text>
      <VStack mt={4} spacing={2} align="stretch">
        <Button colorScheme={`${cardColor}`} size="sm">
          <Link to={`/users-view/${user._id}`}>View</Link>
        </Button>
        <Button colorScheme={`${cardColor}`} size="sm">
          <Link to={`/users/${user._id}`}>Edit</Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default UserListItem;
