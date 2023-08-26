import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import UserAnalytics from '../components/UserAnalytics';
import PostAnalytics from '../components/PostAnalytics';

const Analytics = () => {
  return (
    <Box p="5px">
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20px">
        <UserAnalytics />
        <PostAnalytics />
      </SimpleGrid>
    </Box>
  );
};

export default Analytics;
