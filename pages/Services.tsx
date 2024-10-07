import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import Nav from '../components/nav'; // Adjust the path if necessary
import Service1 from '../components/service1'; // Import the Service1 component
import Service2 from '../components/service2';
import Footer from '../components/footer'// Import the Service2 component

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
        <Heading as="h2" fontSize={['2xl', '3xl', '4xl']} mb="8" color="white">
          Our Services
        </Heading>
        <Text textAlign="center" fontSize={['md', 'lg']} color="white">
          Discover how we can transform your space.
        </Text>
      </Flex>

      {/* Service1 Section */}
      <Box mt="16px">
        <Service1 /> {/* Render Service1 */}
      </Box>

      {/* Service2 Section */}
      <Box mt="32px"> {/* Margin top to create spacing between Service1 and Service2 */}
        <Service2 /> {/* Render Service2 */}
      </Box>
      {/* Footer Section */}
      <Box mt="32px"> {/* Margin top to create spacing between Service1 and Service2 */}
        <Footer /> {/* Render Service2 */}
      </Box>
      
    </>
  );
};

export default Services;
