import React from 'react';
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core';

const Services2: React.FC = () => {
  return (
    <Box maxW="1200px" mx="auto" p={6}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        WHAT WE OFFER
      </Heading>

      <Grid templateColumns={['1fr', 'repeat(4, 1fr)']} gap={6}>
        {/* Card 1 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/1.jpeg" // Placeholder image
            alt="Service 1"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Home Staging
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Attract potential buyers with a professionally staged home that highlights its best features.
          </Text>
        </Flex>

        {/* Card 2 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/2.jpeg" // Placeholder image
            alt="Service 2"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            AI Staging
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Virtual staging for online listings to captivate buyers before they visit.
          </Text>
        </Flex>

        {/* Card 3 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/3.jpeg" // Placeholder image
            alt="Service 3"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Custom Floor Plans
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Tailored layouts that enhance flow and aesthetics.
          </Text>
        </Flex>

        {/* Card 4 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/4.jpg" // Placeholder image
            alt="Service 4"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
          Airbnb Staging
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
          Specializing in creating inviting, unforgettable spaces to increase guest bookings and satisfaction
          </Text>
        </Flex>

        {/* Card 5 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/5.jpg" // Placeholder image
            alt="Service 5"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
          House Painting
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
          Freshen up your property with expert painting services, indoors and outdoors.
          </Text>
        </Flex>

        {/* Card 6 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/6.jpg" // Placeholder image
            alt="Service 6"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
          Accent Walls & Wallpaper Installation
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
          Add personality and elegance to any room with beautifully designed accent walls.

          </Text>
        </Flex>

        {/* Card 7 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/7.jpg" // Placeholder image
            alt="Service 7"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
          Handyman Services
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
          Get small repairs and maintenance tasks done with care and precision.

          </Text>
        </Flex>

        {/* Card 8 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/8.JPG" // Placeholder image
            alt="Service 8"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
          Furniture Selling
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            BNeed furniture? We offer stylish, high-quality options to complete your space.

          </Text>
        </Flex>

        {/* Card 9 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/9.jpg" // Placeholder image
            alt="Service 9"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Color Consultation
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Expert advice on paint and finishes to give your home a fresh look.
          </Text>
        </Flex>

        {/* Card 10 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/10.jpg" // Placeholder image
            alt="Service 10"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Lighting Design
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Enhance your space with custom lighting solutions.
          </Text>
        </Flex>

        {/* Card 11 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/11.jpg" // Placeholder image
            alt="Service 11"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Window Treatments
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Custom blinds, shades, and drapery to complement your design.
          </Text>
        </Flex>

        {/* Card 12 */}
        <Flex
          direction="column"
          alignItems="center"
          borderRadius="md"
          boxShadow="lg"
          overflow="hidden"
          bg="white"
          p={4}
        >
          <Image
            src="/Servicesi/12.jpg" // Placeholder image
            alt="Service 12"
            objectFit="cover"
            w="100%"
            h="200px"
            borderRadius="md"
          />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            3D Rendering
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            High-quality 3D renderings for your home or office projects.
          </Text>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Services2;
