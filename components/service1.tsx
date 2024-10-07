import React from 'react';
import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

const Service1: React.FC = () => {
  return (
    <Flex
      direction={['column', 'column', 'row']} // Column on smaller screens, row on larger
      align="center"
      justify="space-between"
      p={8}
      maxW="1200px" // Max width for the layout
      mx="auto" // Center the layout
    >
      {/* Text Section */}
      <Box flex="1" mr={[0, 0, 8]} mb={[8, 8, 0]}> {/* Margin adjustments for responsiveness */}
        <Heading as="h1" size="2xl" mb={4} fontFamily="Arial, sans-serif">
          Our Staging Services
        </Heading>
        <Text fontSize="xl" mb={4} fontFamily="Arial, sans-serif">
          At Stage Smart Inc., we transform living spaces into memorable, unique, and beautiful rooms.
        </Text>
        <Text fontSize="xl" mb={4} fontFamily="Arial, sans-serif">
          Working with us is never a rushed experience as we like to maintain professionalism. At each home we visit, we pay attention to detail and comments to deliver client needs and achieve their goals.
        </Text>

        {/* Centered Button Section */}
        <Flex justify="center" mt={6}>
          <Button 
            size="lg"
            bg="white" // Set background color to white
            color="black" // Set text color to black
            border="2px solid black" // Add a black border
            _hover={{ bg: 'black', color: 'white', transition: 'background-color 0.3s ease, color 0.3s ease' }} // Change background and text color on hover
            px={10} // Add horizontal padding for a rectangular shape
            borderRadius="md" // Rounded corners
            textAlign="center" // Center the text
            w="200px" // Set a fixed width for the button
          >
            Contact Us
          </Button>
        </Flex>
      </Box>

      {/* Image Section */}
      <Box flex="1" textAlign="right">
        <Image
          src="/gallery/2 (3).jpg" // Replace with the correct path to your image
          alt="Staging Example"
          borderRadius="md"
          boxShadow="md" // Optional shadow for a bit of depth
          objectFit="cover" // Make the image cover the container
          maxW="100%" // Ensure the image is responsive
          height="auto" // Maintain aspect ratio
        />
      </Box>
    </Flex>
  );
};

export default Service1;
