import React from "react";
import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown, FaEdit, FaTrash } from "react-icons/fa";
import { getRandomColor } from "../helpers/getRandomColor";
import { useNavigate } from "react-router-dom";

const PostListItem = ({post,handleDelete,handleLike,handleUnlike}) => {
    const navigate = useNavigate()
  const cardColor = getRandomColor();
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
          {post.user_id._id}
        </Text>
        <Text fontWeight="bold" mb={2}>
          {post.user_id.name}
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
          <IconButton icon={<FaEdit />} aria-label="Edit" mr={2} onClick={()=>navigate(`/posts/${post._id}`)} />
        </Flex>
        <IconButton
          icon={<FaTrash />}
          aria-label="Delete"
          onClick={() => handleDelete(post._id)}
          colorScheme="red"
        />
      </Flex>
    </Box>
  );
};

export default PostListItem;
