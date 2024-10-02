import React from 'react';
import { Flex, Heading, Grid, Image, Box } from '@chakra-ui/core';

const GalleryPage: React.FC = () => {
  return (
    // Main container using Flexbox, aligning content to the center
    <Flex flexDirection="column" alignItems="center" mt="24">
      
      {/* Page title (Heading) */}
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Gallery
      </Heading>

      {/* Grid layout for images */}
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"  // 3 equal columns
        gridGap="16px"  // Gap between images
        px={['8', '8', '8', '24', '24']}  // Responsive padding on the sides
      >
        {/* Image 1 */}
        <Box
          padding="10px"              // Padding inside the box for the frame effect
          backgroundColor="#483C32"   // Taupe background for the frame
          borderRadius="md"           // Optional: rounded corners for the frame
        >
          <Image
            src="/gallery/2 (1).jpg"
            width="500px"    // Set fixed width
            height="500px"   // Set fixed height
            objectFit="cover"  // Ensure image fits box without distortion
            loading='eager'
          />
        </Box>
        
        {/* Image 2 */}
        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (2).JPG"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        {/* Image 3 */}
        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (3).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        {/* Repeat for other images */}
        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (4).JPG"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (5).JPG"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (6).JPG"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (7).JPG"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (8).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (9).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (10).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (11).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>

        <Box padding="10px" backgroundColor="#483C32" borderRadius="md">
          <Image
            src="/gallery/2 (12).jpg"
            width="500px"
            height="500px"
            objectFit="cover"
            loading='eager'
          />
        </Box>
      </Grid>
    </Flex>
  );
};

export default GalleryPage;
