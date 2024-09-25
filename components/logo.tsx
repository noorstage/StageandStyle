import React from 'react';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Flex alignItems="center">
      <Image src="/logo-bg.png" height="24px" mr={2} /> {/* Adjust the height as needed */}
      <Heading as="h1" size="lg" color="orange.500" textTransform="uppercase">
        <Text display="inline" fontWeight="extrabold">
          Stage and
        </Text>{' '}
        <Text display="inline" fontWeight="medium">
          Style
        </Text>
      </Heading>
    </Flex>
  );
}

export default Logo;
