import React from 'react';
import { Flex, Heading, Grid, Image } from '@chakra-ui/core';

const GalleryPage: React.FC = () => {
  return (
    // Main container using Flexbox, aligning content to the center
    <Flex flexDirection="column" alignItems="center" mt="24">
      
      {/* Page title (Heading) */}
      <Heading 
        as="h1" // Change to h1 for a bigger heading
        fontSize="3xl" // Set a larger font size
        textDecoration="underline" // Underline the text
        color="teal.500" // Change the text color
        mb="20px" // Margin bottom
      >
        Gallery
      </Heading>

      {/* Grid layout for images */}
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"  // 12 equal columns
        gridGap="16px"  // Gap between images
        px={['8', '8', '8', '24', '24']}  // Responsive padding on the sides
      >
        {/* Generate URLs for 514 images */}
        {[...Array(514)].map((_, index) => (
          <Image
            key={index}
            src={`/gallery/image (${index + 1}).JPG`} // Dynamically generating image URLs
            alt={`Gallery image ${index + 1}`}
            width="150px" // Set fixed width for images
            height="150px" // Set fixed height for images
            objectFit="cover" // Ensures the image covers the area without distortion
            borderRadius="md" // Optional: Adds rounded corners to images
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default GalleryPage;
