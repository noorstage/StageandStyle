import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Flex alignItems="center">
      <Image src="/logo-bg.png" height="148px" /> {/* Increased the height to 48px */}
    </Flex>
  );
}

export default Logo;
