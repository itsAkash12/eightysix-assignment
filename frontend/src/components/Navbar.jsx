import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading size="md" color="white">
          Connect Us
        </Heading>
        <Spacer />
        {isMobile ? (
          <>
            <IconButton
              icon={<FaBars />}
              aria-label="Open menu"
              color="white"
              onClick={onOpen}
              mr={4}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <List spacing={3}>
                    <ListItem>
                      <Link as={RouterLink} to="/" color="teal.800">
                        Home
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link as={RouterLink} to="/users" color="teal.800">
                        Create User
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link as={RouterLink} to="/user-list" color="teal.800">
                        All Users
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link as={RouterLink} to="/post-list" color="teal.800">
                        Posts
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link as={RouterLink} to="/analytics" color="teal.800">
                        Analytics
                      </Link>
                    </ListItem>
                  </List>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
