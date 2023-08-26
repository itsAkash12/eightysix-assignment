import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { useToast } from "@chakra-ui/react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [flag,setFlag] = useState(false);
    const toast = useToast();

  useEffect(() => {
    fetchUsers();
  }, [flag]);

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
      toast({
        title: 'User Deleted',
        description: "User Deleted Successfully !",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setFlag(!flag)
    } catch (error) {
      console.error('Error deleting user:', error);
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  };
  return <UserContext.Provider value={{flag,setFlag,users,setUsers,fetchUsers,deleteUser}}>{children}</UserContext.Provider>;
};
