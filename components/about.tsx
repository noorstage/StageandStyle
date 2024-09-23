import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
        Welcome to Stage and Style by Noor, your ultimate destination for curated fashion that brings together the elegance of 
        classic styles and the vibrancy of modern trends. Founded by Noor, a passionate designer with an eye for detail, we believe 
        in crafting timeless pieces that empower individuals to express their unique style on any occasion.
        </Text>
        <Button>Learn More</Button>
      </Flex>
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
        />
      </Box>
    </Grid>
  )
}

export default About
