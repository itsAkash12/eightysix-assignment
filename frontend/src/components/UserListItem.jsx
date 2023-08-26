import React from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const UserListItem = ({ user, onDeleteUser }) => {
  
  return (
    <Tr key={user._id}>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.bio}</Td>
      <Td display={"flex"} flexDirection={"column"} gap={"5px"}>
        <Button colorScheme='green'><Link to={`/users-view/${user._id}`}>View</Link></Button>
        <Button colorScheme='blue'><Link to={`/users/${user._id}`}>Edit</Link></Button>
        <Button colorScheme='red' onClick={() => onDeleteUser(user._id)}>Delete</Button>
      </Td>
    </Tr>
  );
};

export default UserListItem;
