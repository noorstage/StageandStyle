import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['24', '24', '24', '24', '64']}
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Creative Director
      </Heading>
      {/* <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text> */}
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="26px"
        px={['8', '8', '8', '24', '24']}
      >
        <Box
  position="relative"
  gridColumn="1 / 4"
  display="flex"
  justifyContent="center"
>
  <Box>
    <Image src="/directors/2.png" />
    <Flex
      position="absolute"
      bottom="-35px"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingY="6px"
      width="80%"
      backgroundColor="white"
      borderColor="orange.500"
      borderWidth="6px"
    >
      <Text fontWeight="medium" fontSize="22px">
        Abhinoor Grewal
      </Text>
      <Text textTransform="uppercase" color="orange.500">
        Founder
      </Text>
    </Flex>
  </Box>
</Box>

      </Grid>
    </Flex>
  )
}

export default CreativeDirector
