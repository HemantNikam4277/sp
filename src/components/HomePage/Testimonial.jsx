import { Container, Box, chakra, Flex, Text, Avatar, useColorModeValue, Image, IconButton, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const testimonials = [
  {
    name: 'Ben Parker',
    position: 'CEO',
    company: 'Olpers',
    image: '...',
    content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`,
  },
  {
    name: 'John Smith',
    position: 'MD',
    company: 'IKmh',
    image: '...',
    content: `digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`,
  },
  {
    name: 'Allen',
    position: 'Studdent',
    company: 'hdyr',
    image: '...',
    content: `Proin iaculis purus consequat sem cure digni ssim donec hhftr hhfyt bbgd tyyei yudhr ghnt yu porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper`,
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
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((obj, index) => (
            <div key={index} className="carousel-slide">
              <Box
                rounded="md"
                p={6}
                pos="relative"
                bg={useColorModeValue('white', 'gray.800')}
              >
                <Text fontWeight="medium" fontSize="sm">
                  {obj.content}
                </Text>
              </Box>
              <Box textAlign="center">
                <Avatar
                  size="lg"
                  showBorder={true}
                  borderColor="green.400"
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
            </div>
          ))}
        </div>
      </div>

      <Flex justify="start" mt={4} px={6}>
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
