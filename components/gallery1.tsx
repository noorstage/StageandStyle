import React from 'react';
import { Flex, Heading, Grid, Image, Box } from '@chakra-ui/core';

const OurProject: React.FC = () => {
  return (
    <Flex flexDirection="column" alignItems="center" mt="24">
      
      {/* Property 1 */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Property 1
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="0"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/gallery/1.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/2.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/3.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/4.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/5.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/6.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Grid>

      {/* Spacing between properties */}
      <Box my="40px" />

      {/* Property 2 */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Property 2
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="0"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/gallery/7.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/8.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/9.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/10.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/11.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/12.jpeg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Grid>

      {/* Spacing between properties */}
      <Box my="40px" />

      {/* Property 3 */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Property 3
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="0"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/gallery/13.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/14.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/15.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/16.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/17.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/18.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Grid>
      {/* Property 4 */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Property 4
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="0"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/gallery/19.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/20.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/21.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/22.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/23.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/24.JPG"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Grid>

      {/* Spacing between properties */}
      <Box my="40px" />

      {/* Property 5 */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Property 5
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridGap="0"
        px={['8', '8', '8', '24', '24']}
      >
        <Image
          src="/gallery/25.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/26.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/27.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/28.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/29.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Image
          src="/gallery/30.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Grid>

    </Flex>
  );
};

export default OurProject;
