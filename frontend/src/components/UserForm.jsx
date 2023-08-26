import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

const UserForm = () => {
  const [loading,setLoading] = useState(false);
  const {flag,setFlag} = useUserContext()
  const navigate = useNavigate()
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const param = useParams();
  const userId = param.userId

  useEffect(() => {
    // Fetching user data if editing an existing user
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const fetchUserData = async () => {
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}`);
      const user = response.data;
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userData = { name, email, bio };

    try {
      if (userId) {
        let response = await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${userId}`, userData);
        console.log(response.data);
        toast({
          title: 'User Updated',
          description: "User Updated Successfully !",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/user-list")
        setFlag(!flag)
        setLoading(false);
      } else {
        let response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, userData);
        console.log(response.data);
        toast({
          title: 'User Created',
          description: "User Created Successfully !",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navigate("/user-list")
        setFlag(!flag)
        setLoading(false);
      }
     
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: error?.response?.data?.error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setLoading(false);
    }
  };

  return (
    <Box h={"100vh"}>
      <Heading textAlign={"center"}>{userId ? 'Edit User' : 'Create User'}</Heading>
      <Box w={"60%"} m={"auto"} borderWidth={"thin"} borderRadius={"10px"} p={"10px"} mt={"30px"}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" isLoading={loading}>
            {userId ? 'Save Changes' : 'Create User'}
          </Button>
        </VStack>
      </form>
      </Box>
    </Box>
  );
};

export default UserForm;
