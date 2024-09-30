import React from 'react';
import { Flex, Heading, Grid, Image } from '@chakra-ui/core';

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
        <Image
          src="/gallery/2 (1).JPG"
          width="500px"    // Set fixed width
          height="500px"   // Set fixed height
          objectFit="cover"  // Ensure image fits box without distortion
        />
        {/* Image 2 */}
        <Image
          src="/gallery/2 (2).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 3 */}
        <Image
          src="/gallery/2 (3).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 4 */}
        <Image
          src="/gallery/2 (4).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 5 */}
        <Image
          src="/gallery/2 (5).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 6 */}
        <Image
          src="/gallery/2 (6).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 7 */}
        <Image
          src="/gallery/2 (7).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 8 */}
        <Image
          src="/gallery/2 (8).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 9 */}
        <Image
          src="/gallery/2 (9).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 10 */}
        <Image
          src="/gallery/2 (10).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 11 */}
        <Image
          src="/gallery/2 (11).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
        {/* Image 12 */}
        <Image
          src="/gallery/2 (12).JPG"
          width="500px"
          height="500px"
          objectFit="cover"
        />
      </Grid>
    </Flex>
  );
};

export default GalleryPage;
