import {
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useBreakpointValue,
  SimpleGrid,
  Link
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100vw"
      minH={["60vh", "100vh"]}
    >
      <Box
        flex="1"
        bg="white"
        px={8}
        py={{ base: 8, md: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="600px" ml={[0, 20]} textAlign="start">
          <Heading fontSize={["30px", "50px"]} mb={4}>
            Unleash the Power of AI in{" "}
            <Text as="span" color="#d32f2d">
              Fantasy Cricket!
            </Text>
          </Heading>
          <Text as="span" fontWeight={200} fontSize={["20px", "30px"]}>
            Build the Ultimate Winning Team with Sportskeeda's AI-Driven Fantasy
            Cricket Team Builder!
          </Text>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>
          <Link
              href="https://play.google.com/store/apps/details?id=com.sportskeeda.topic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.perfectlineup.in/web/assets/front/images/playstr.png"
                alt="Google Play Store"
                className="btn-hover-all"
              />
            </Link>
            <Link
              href="https://apps.apple.com/in/app/sportskeeda-wwe-cricket/id1462625228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.perfectlineup.in/web/assets/front/images/applestr.png"
                alt="App Store"
                className="btn-hover-all"
              />
            </Link>
          </Stack>
        </Box>
      </Box>
      <Box flex="1">
        <Image
          src="/mobileapp.png"
          alt="AI Cricket"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
