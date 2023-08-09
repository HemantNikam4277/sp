import { Flex, VStack, Box, Heading, Text, Button, Stack, useBreakpointValue } from "@chakra-ui/react"; 

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={["45vh", "100vh"]}
      pos="relative"
    >
      <VStack
        mx={[10,20]}
        w={"full"}
        justify={"flex-start"} // Change from "center" to "flex-start"
        align={"flex-start"} // Change from "center" to "flex-start"
        px={useBreakpointValue({ base: 2, md: 6 })}
        py={useBreakpointValue({ base: 10, md: 40 })} // Adding vertical padding
      >
        <Box
          color={"black"}
          fontWeight={700}
          textAlign="left"
          w={"full"} // Ensure content takes full width
          maxW={"2xl"}
          spacing={6}
        >
        <Heading fontSize={["30px", "50px"]} mb={4}>Unleash the Power of AI in <Text as="span" color="red">Fantasy Cricket!</Text></Heading>
          <Text as="span" fontWeight={200} fontSize={["20px", "30px"]}>
            Build the Ultimate Winning Team with Sportskeeda's AI-Driven Fantasy Cricket Team Builder!
          </Text>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>
            <Button colorScheme="white" size="lg" variant="outline">
              Get Started
            </Button>
            <Button colorScheme="white" size="lg" variant="outline">
              Learn More
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
