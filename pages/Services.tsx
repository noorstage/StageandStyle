import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import Nav from '../components/nav'; // Adjust the path if necessary
import Service1 from '../components/service1'; // Import the Service1 component

const Services: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <Nav /> 

      {/* Our Services Section */}
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="16px" // Margin top for spacing from top
        px={['8', '8', '8', '24', '24']} // Padding for responsiveness
        mb="64px" // Margin bottom to separate from the Service1 section
      >
        {/* Big heading for "Our Services" */}
        <Heading as="h2" fontSize={['2xl', '3xl', '4xl']} mb="8" color = "white">
          Our Services
        </Heading>
        <Text textAlign="center" fontSize={['md', 'lg']} color="white">
          Discover how we can transform your space.
        </Text>
      </Flex>

      {/* Service1 Section */}
      <Box mt="16px"> {/* Added margin-top for spacing from the Services section */}
        <Service1 /> {/* This will render the Service1 component below the Services section */}
      </Box>
    </>
  );
};

export default Services;
