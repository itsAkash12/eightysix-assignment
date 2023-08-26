import { Box } from '@chakra-ui/react'
import React from 'react'
import UserAnalytics from '../components/UserAnalytics'
import PostAnalytics from '../components/PostAnalytics'

const Analytics = () => {
  return (
    <Box p={"5px"}>
        <UserAnalytics></UserAnalytics>
        <PostAnalytics></PostAnalytics>
    </Box>
  )
}

export default Analytics