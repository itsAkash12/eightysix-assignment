import React, { useState } from "react";
import {
  Box,
  Text,
  IconButton,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { getRandomColor } from "../helpers/getRandomColor";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../contexts/PostContext";

const PostListItem = ({ post }) => {
  const { handleDelete, handleLike, handleUnlike } = usePostContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const cardColor = getRandomColor();

  const handleEdit = (post) => {
    navigate(`/posts/${post._id}`);
  };

  const viewModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      key={post._id}
      borderWidth="1px"
      padding={4}
      borderRadius="md"
      bg={`${cardColor}.50`}
      borderColor={`${cardColor}.200`}
    >
      <Box p={4} color={`${cardColor}.800`}>
        <Text fontWeight="bold" mb={2} fontSize={"14px"}>
          {post?.user_id?._id}
        </Text>
        <Text fontWeight="bold" mb={2}>
          {post?.user_id?.name || "Removed User"}
        </Text>
        <Text>{post.content}</Text>
        <Text>Likes: {post.likes}</Text>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        p={4}
        borderTopWidth="1px"
        borderColor="gray.200"
      >
        <Flex align="center">
          <IconButton
            icon={<FaThumbsUp />}
            aria-label="Like"
            onClick={() => handleLike(post._id)}
            mr={2}
            colorScheme="green"
          />
          <IconButton
            icon={<FaThumbsDown />}
            aria-label="Unlike"
            onClick={() => handleUnlike(post._id)}
            mr={2}
            colorScheme="orange"
          />
          <IconButton
            icon={<FaEdit />}
            aria-label="Edit"
            mr={2}
            onClick={() => handleEdit(post)}
          />
          <IconButton
            icon={<FaEye />}
            aria-label="View"
            onClick={viewModal}
          />
        </Flex>
        <IconButton
          icon={<FaTrash />}
          aria-label="Delete"
          onClick={() => handleDelete(post._id)}
          colorScheme="red"
        />
      </Flex>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb={2} fontSize={"14px"}>
              userID: {post?.user_id?._id}
            </Text>
            <Text fontWeight="bold" mb={2}>
              Username: {post?.user_id?.name || "Removed User"}
            </Text>
            <Text>Content: {post.content}</Text>
            <Text>Likes: {post.likes}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PostListItem;
