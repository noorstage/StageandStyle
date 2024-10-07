import React from 'react';
import { Flex, Heading, Grid, Image, Box, Text } from '@chakra-ui/core'; // Added Text here
import Nav from '../components/nav';
import Gallery1 from '../components/gallery1'; 
import Footer from '../components/footer';// Adjust the path if necessary

const GalleryPage: React.FC = () => {
  return (
    <>
      {/* Navigation header */}
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
      {/* Navigation header */}
      <Gallery1 />
      {/* Navigation header */}
      <Footer />
    </>
  );
};

export default GalleryPage;
