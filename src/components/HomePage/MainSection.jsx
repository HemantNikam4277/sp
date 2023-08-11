import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100vw"
      minH={["60vh", "100vh"]}
      bg="gray.100"
    >
      <Box
        flex="1"
        order={{ base: 2, md: 1 }} // Order for desktop: Image first
      >
        <Image
          src="/virat.png"
          alt="AI Cricket"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Box
        flex="1"
        order={{ base: 1, md: 2 }} // Order for mobile: Text first
        px={8}
        py={{ base: 8, md: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="600px" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Welcome to the Future of <br />
            <Text as="span" color="#d32f2d">
              Fantasy Cricket!
            </Text>
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
