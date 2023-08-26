import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import backgroundImage from "../assets/4950546.jpg"; // Replace with your background image path

const Homepage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      background={`url(${backgroundImage}) center/cover`}
    >
      <Box
        backgroundColor="rgba(255, 255, 255, 0.8)"
        padding="20px"
        borderRadius="8px"
        textAlign="center"
        boxShadow="lg"
      >
        <Heading as="h1" size="xl" mb="4">
          Welcome to Our Website
        </Heading>
        <p>
          Welcome to ConnectUs - Your Social Hub! 🌟 Connect with friends and
          global minds. Share, explore, and stay updated with trending topics.
          📷Engage in discussions, and make new
          connections. 👍 Like, and contribute your voice in a secure and
          private space.
        </p>
      </Box>
    </Flex>
  );
};

export default Homepage;
