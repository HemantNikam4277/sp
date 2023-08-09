import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} w="100vw" minH={["60vh","100vh"]}>
      <Box flex="1">
        <Image
          src="https://t3.ftcdn.net/jpg/05/92/64/14/240_F_592641465_TaUrjQsTxOfDs1K2BjiPBpzlV9mYuWBn.jpg"
          alt="AI Cricket"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      <Box flex="1" bg="white" px={8} py={{ base: 8, md: 0 }} display="flex" justifyContent="center" alignItems="center">
        <Box maxW="600px" mx="auto" textAlign="center">
          <Heading size="xl" mb={4}>
            Welcome to the Future of Fantasy Cricket!
          </Heading>
          <Text fontSize="lg" color="gray.600">
            With Sportskeeda's AI-driven fantasy cricket team builder, you can
            now create the most competitive teams using the power of artificial
            intelligence. Our advanced algorithms analyze thousands of data
            points from historical cricket matches to provide you with the best
            team combinations for platforms like Dream11. Get ready to dominate
            the game!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomePage;
