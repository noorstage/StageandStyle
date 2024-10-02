import React from 'react';
import { Box, Flex, Heading, Text, List, ListItem } from '@chakra-ui/core';

const Services: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="64px" // Margin top for spacing from top
      px={['8', '8', '8', '24', '24']} // Padding for responsiveness
    >
      {/* Big heading for "Our Services" */}
      <Heading
        as="h1"
        fontSize={['3xl', '4xl', '5xl']} // Responsive font size
        fontWeight="bold"
        textAlign="center"
        mb="24px" // Margin bottom for spacing below heading
      >
        Our Services
      </Heading>

      {/* Text Box below the heading with a Taupe background */}
      <Box
        backgroundColor="#483C32" // Taupe color for the text box
        padding="32px" // Increased padding for better space
        borderRadius="md" // Rounded corners
        boxShadow="lg" // Slight shadow for more depth
        maxW="900px" // Increased width for a more balanced look
        width="100%" // Responsive width
        color="white" // White text for contrast
        textAlign="left" // Align text to the left for list
        mt="16px" // Margin top for spacing above the text box
      >
        <Text fontSize="xl" mb="16px" textAlign="center" fontWeight="semibold">
          Discover how we can transform your space into something extraordinary:
        </Text>
        <List spacing={5} fontSize="lg" lineHeight="1.8">
          <ListItem>✨ <strong>Home Staging</strong> – Attract potential buyers with a professionally staged home that highlights its best features, making it easier to sell at a higher price.</ListItem>
          <ListItem>✨ <strong>AI Staging</strong> – Virtual staging for online listings to captivate buyers before they even visit the property, increasing interest.</ListItem>
          <ListItem>✨ <strong>Interior Design & Decorating</strong> – Custom designs that reflect your personal style while maximizing comfort and functionality, ensuring every space feels like home.</ListItem>
          <ListItem>✨ <strong>Custom Floor Plans</strong> – Tailored layouts that enhance flow, aesthetics, and efficiency, making the most out of every square foot.</ListItem>
          <ListItem>✨ <strong>Airbnb Staging</strong> – Specializing in creating inviting, unforgettable spaces that attract more guests and boost satisfaction for higher ratings.</ListItem>
          <ListItem>✨ <strong>House Painting</strong> – Freshen up your property with expert painting services, both indoors and outdoors, adding new life to your space.</ListItem>
          <ListItem>✨ <strong>Accent Walls & Wallpaper Installation</strong> – Add personality and elegance to any room with beautifully designed accent walls or wallpaper that stands out.</ListItem>
          <ListItem>✨ <strong>Handyman Services</strong> – Get small repairs and maintenance tasks done quickly and with precision to keep your home in top shape.</ListItem>
          <ListItem>✨ <strong>Furniture Selling</strong> – Stylish, high-quality furniture options available to complete your space, making it comfortable and beautiful.</ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Services;
