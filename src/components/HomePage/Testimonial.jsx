import { 
  Container, 
  Box, 
  Flex, 
  Text, 
  useColorModeValue, 
  Image, 
  IconButton, 
  SimpleGrid, 
  Heading 
} from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { TESTIMONIAL } from '@/constants/sharedData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIAL.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIAL.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container 
      maxW="5xl" 
      py={20} 
      px={6}
    >
      <Flex justify="center" mb={8}>
        <Heading 
          fontSize="3xl" 
          fontWeight="bold" 
          mb={3} 
          textAlign="center"
        >
          "See what other fantasy cricket enthusiasts are saying about our AI-driven fantasy cricket team builder!"
        </Heading>
      </Flex>

    <SimpleGrid columns={[1,2]}>
      <Box px={8}>
        <Image
          src="	https://plineup-prod.s3.ap-south-1.amazonaws.com/assets/img/quote_sign.png"
          alt="AI Cricket"
          w={[30, 60]}
          h={[30, 60]}
        />
      </Box>
      <Box>
      <Box className="carousel-container">
        <Box 
          className="carousel" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TESTIMONIAL.map((obj, index) => (
            <Box 
              key={index} 
              className="carousel-slide" 
              justifyItems="center"
            >
              <Box
                rounded="md"
                py={6}
                pos="relative"
                bg={useColorModeValue('white', 'gray.800')}
              >
                <Text fontWeight="medium" fontSize="sm">
                  {obj.content}
                </Text>
              </Box>
              
              <Box align="center">
                <Image
                  src={obj.image}
                  alt={`${obj.name} Avatar`}
                  w={24} 
                  h={24} 
                  m={4}
                />

                <Text fontWeight="bold" fontSize="md">
                  {obj.name}
                </Text>

                <Text fontWeight="medium" fontSize="xs" color="gray.400">
                  {obj.position}, {obj.company}
                </Text>

              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Flex justify={["center", "start"]} mt={4} px={6}>
        <IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          onClick={handlePrevSlide}
          mr={4}
          isRound={true}
        />
        <IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          onClick={handleNextSlide}
          isRound={true}
        />
      </Flex>
      </Box>
    </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
