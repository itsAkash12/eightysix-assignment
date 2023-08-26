import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostContext } from '../contexts/PostContext';
import { useUserContext } from '../contexts/UserContext';

const PostForm = () => {
  const [loading,setLoading] =useState(false);
  const {users} = useUserContext()
  const [content, setContent] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const { id } = useParams();
  const [allUsers, setAllUsers] = useState([]);
  const toast = useToast();
  const {flag,setFlag} = usePostContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetchPostData();
    }
    fetchAllUsers();
  }, [id]);

  const fetchPostData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts/${id}`);
      const post = response.data;
      setContent(post.content);
      setSelectedUserId(post.user_id);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  const fetchAllUsers = async () => {
    users && setAllUsers(users)
  };

  const handleUserSelect = (e) => {
    setSelectedUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const postData = { content, user_id: selectedUserId };

      if (id) {
        const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/posts/${id}`, postData);
        console.log(response.data)
        toast({
          title: 'Success',
          description: "Post Editted Successfully !",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setFlag(!flag);
        setLoading(false);
        navigate("/post-list")
        
      } else {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, postData);
        console.log(response.data)
        toast({
          title: 'Success',
          description: "Post Successfully Created",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setFlag(!flag);
        setLoading(false);
        navigate("/post-list")
      }
    } catch (error) {
      console.error('Error submitting post data:', error);
      toast({
        title: 'Error',
        description: error.response.data.error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setLoading(false);
    }
  };

  return (
    <Box>
      <Heading textAlign={"center"}>{id ? 'Edit Post' : 'Create Post'}</Heading>
      <Box w={"60%"} m={"auto"} borderWidth={"thin"} borderRadius={"10px"} p={"10px"} mt={"30px"}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          {!id && (
            <FormControl>
              <FormLabel>Select User</FormLabel>
              <Select value={selectedUserId} onChange={handleUserSelect}>
                <option value="" disabled>
                  Select a user
                </option>
                {allUsers.map((user) => (
                  <option key={user.id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </FormControl>
          )}
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" isLoading={loading}>
            {id ? 'Save Changes' : 'Create Post'}
          </Button>
        </VStack>
      </form>
      </Box>
    </Box>
  );
};

export default PostForm;
