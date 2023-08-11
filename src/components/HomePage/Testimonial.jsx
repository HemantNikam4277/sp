import { Container, Box, chakra, Flex, Text, Avatar, useColorModeValue, Image, IconButton, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const testimonials = [
  {
    name: 'Ben Parker',
    position: 'CEO',
    company: 'Olpers',
    image: '/assests/testimonials/1.png',
    content: `"I've been a cricket fan for years, and discovering the cricket fantasy app has truly taken my love for the game to a whole new level. As an avid player, I can't stress enough how addictive and exciting this app is. The AI-driven team recommendations have completely changed the way I approach creating my fantasy teams.`,
  },
  {
    name: 'John Smith',
    position: 'MD',
    company: 'IKmh',
    image: '',
    content: `The accuracy of the predictions is astonishing! I've found myself consistently getting better results in my fantasy leagues, thanks to the insights provided by the app. It's like having a personal cricket analyst in my pocket. The app's user-friendly interface and real-time updates make the experience even more enjoyable.`,
  },
  {
    name: 'Allen',
    position: 'Studdent',
    company: 'hdyr',
    image: '',
    content: `I also love the customizable strategies feature. It allows me to tailor my team-building approach according to my preferences and strategies. And the best part? The app is incredibly secure and reliable. I can trust that my data and transactions are safe.`,
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
                <Avatar
                  size="lg"
                  showBorder={true}
                  borderColor="red.40;0"
                  name="avatar"
                  m={4}
                  src={obj.image}
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
