import React from 'react'
import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['24', '24', '24', '24', '64']}
      px={['8', '8', '8', '24', '24']} // Padding for responsiveness
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Creative Director
      </Heading>

      {/* Grid layout with 2 columns: left for text, right for image */}
      <Grid
        gridTemplateColumns="1fr 1fr" // 50% width for each column
        gridGap="26px" // Gap between columns
        width="100%"
        alignItems="center" // Align items vertically in the center
      >
        {/* Left side (Text box) */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          backgroundColor="#483C32" // Taupe color
          padding="24px"
          borderRadius="md"
          boxShadow="md"
          color="white" // White text for contrast
        >
          <Text fontSize="lg" mb="16px" fontWeight="bold">
            Good Evening,
          </Text>
          <Text fontSize="md" lineHeight="1.6">
          I am Noor, the proud founder of Stage and Style with Noor, where we bring beauty, style, and functionality together to make your spaces stand out. Whether you're selling a home, hosting Airbnb guests, or redesigning your space, we specialize in creating environments that make a lasting impression.
          </Text>
        </Flex>

        {/* Right side (Image and name section) */}
        <Box position="relative" display="flex" justifyContent="center">
          <Box>
            <Image
              src="/directors/1.jpg"
              width="275px" // Fixed image width
              height="auto" // Maintain aspect ratio
              loading="eager"
              border="8px solid #483C32" // Taupe color frame for the image
              borderRadius="md" // Optional rounded corners
            />
            <Flex
              position="absolute"
              bottom="-35px"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              paddingY="6px"
              width="220px" // Fixed width to control text box size
              backgroundColor="white"
              borderColor="orange.500"
              borderWidth="6px"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontWeight="medium" fontSize="22px">
                Noor
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
