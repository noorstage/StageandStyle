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
        justifyContent="center"
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
          textAlign="center" // Center the heading
          alignSelf="center"  // Align heading in the middle of the flex container
        >
          Our Services
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="center" textAlign="center">
          At Stage and Style, we specialize in transforming houses into stunning, market-ready homes. 
          Our expert team blends style and functionality to create spaces that captivate potential buyers, 
          ensuring each home stands out. From modern minimalism to classic elegance, 
          we stage homes to reflect their true potential and charm.
        </Text>

        {/* Wrap the button with an anchor tag */}
        <a href="/Contact">
          <Button>Contact Us</Button>
        </a>
      </Flex>
      
      <Box gridColumn="4 / 7">
        <Image
          src="/Servicesi/1.jpeg"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
          borderRadius="20px" // Add curved edges to the image
          boxShadow="lg" // Optional: add shadow for depth effect
        />
      </Box>
    </Grid>
  )
}

export default About
