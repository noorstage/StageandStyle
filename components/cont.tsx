import React from 'react';
import { Box, Flex, Heading, Text, Input, Textarea, Button, Stack } from '@chakra-ui/core';
import Nav from '../components/nav'; // Import Nav component
import Footer from './footer';

const Contact: React.FC = () => {
  return (
    <>
      {/* Nav Section */}
      <Nav /> {/* Add Nav component */}

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

      {/* Contact Section */}
      <Flex
        direction={['column', 'column', 'row']}
        justify="center"
        align="center"
        width="100%"
        padding="2em"
      >
        {/* Left Side: Contact Information */}
        <Box
          flex="1"
          padding="2em"
          textAlign={['center', 'center', 'left']}
          fontFamily="Georgia, serif"
        >
          <Heading as="h1" size="2xl" marginBottom="1em">
            Contact Us
          </Heading>
          <Text fontSize="lg" marginBottom="1em">
            We are here to design the home, work, or event space of your dreams.
          </Text>
          <Text fontSize="md" marginBottom="1em">
            If you have any questions about our staging or decorating services, call, email, or send us a message using the contact form.
          </Text>

          {/* Contact Details */}
          <Text fontWeight="bold" marginBottom="0.5em">
            Email
          </Text>
          <Text marginBottom="1em">stageandstyle08@gmail.com</Text>

          <Text fontWeight="bold" marginBottom="0.5em">
            Phone
          </Text>
          <Text marginBottom="1em">365-476-8787</Text>

          
        </Box>

        {/* Right Side: Contact Form */}
        <Box flex="1" padding="2em">
          <form>
            <Stack spacing={4}>
              <Flex justify="space-between">
                {/* First Name */}
                <Box flex="1" mr="1em">
                  <Input placeholder="First Name" size="lg" isRequired />
                </Box>
                {/* Last Name */}
                <Box flex="1">
                  <Input placeholder="Last Name" size="lg" isRequired />
                </Box>
              </Flex>

              {/* Email */}
              <Input placeholder="Email" size="lg" type="email" isRequired />

              {/* Phone */}
              <Input placeholder="Phone" size="lg" isRequired />

              {/* Subject */}
              <Input placeholder="Subject" size="lg" isRequired />

              {/* Message */}
              <Textarea placeholder="Message" size="lg" height="150px" isRequired />

              {/* Submit Button */}
              <Button type="submit"  size="lg">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
      {/* Nav Section */}
      <Footer /> {/* Add Nav component */}
    </>
  );
};

export default Contact;
