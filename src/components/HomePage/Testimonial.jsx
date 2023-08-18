import { Container, Box, chakra, Flex, Text, Avatar, useColorModeValue, Image, IconButton, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const testimonials = [
  {
    name: 'Alok Verma',
    position: 'B.Tech Student',
    company: 'Pune',
    image: '/assets/testimonials/1.png',
    content: `The feature allowing customizable teams is simply brilliant! It lets me shape my team's creation according to my unique  cricket insights. Plus, I'm absolutely confident about this app – it is a well known brand.`,
  },
  {
    name: 'Rishabh Agarwal',
    position: 'Businessman',
    company: 'New Delhi',
    image: '/assets/testimonials/5.png',
    content: `Being a cricket enthusiast since childhood, this fantasy cricket team builder has taken my passion for the game to an unparalleled height. The AI-driven team suggestions have revolutionized how I design my dream teams. It's as if the app understands the pulse of Indian cricket!`,
  },
  {
    name: 'Dr. Karan Joshi',
    position: 'HealthCare',
    company: 'Mumbai',
    image: '/assets/testimonials/3.png',
    content: `The precision with which the app predicts is just mind-blowing! With its insights, I've consistently been at the top in my fantasy leagues. It feels like I have a dedicated cricket guru right in my mobile. The intuitive design and real-time alerts make it all the more special.`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container maxW="5xl" py={20} px={6}>
      <Flex justify="center" mb={8}>
        <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3} textAlign="center">
          "See what other fantasy cricket enthusiasts are saying about our AI-driven fantasy cricket team builder!"
        </chakra.h3>
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
        <Box className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((obj, index) => (
            <Box key={index} className="carousel-slide" justifyItems="center">
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
                  w={24} // Customize the width
                  h={24} // Customize the height
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
