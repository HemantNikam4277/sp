import { Box, Text, Heading, Flex, Image, VStack } from "@chakra-ui/react";

const StepsToPlay = () => {
  const steps = [
    {
      title: "Choose Your Match",
      description: "Select the upcoming match you want to build a team for.",
      imageSrc: "https://www.perfectlineup.in/web/assets/front/images/sec1-step1.png",
      altText: "Choose Your Match Screenshot",
    },
    {
      title: "Set Your Preferences",
      description: "Customize your team-building strategy or go with our AI's recommendations.",
      imageSrc: "https://www.perfectlineup.in/web/assets/front/images/sec1-step2.png",
      altText: "Set Your Preferences Screenshot",
    },
    {
      title: "Build Your Team",
      description: "Review the suggested team and make any final adjustments.",
      imageSrc: "https://www.perfectlineup.in/web/assets/front/images/sec1-step3.png",
      altText: "Build Your Team Screenshot",
    },
    {
      title: "Dominate the Game",
      description: "Enter your team into platforms like Dream11 and watch them win!",
      imageSrc: "https://www.perfectlineup.in/web/assets/front/images/sec1-step4.png",
      altText: "Dominate the Game Screenshot",
    },
  ];
  return (
    <Box py={12} bg="gray.100">
      <Box textAlign="center" mx={10}>
        <Heading as="h2" size="xl" mb={6}>
          How It Works
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={10}>
          A step-by-step guide to building your winning team with Sportskeeda's AI-driven fantasy cricket team builder.
        </Text>

        <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const Step = ({ title, description, imageSrc, altText }) => {
  return (
    <VStack spacing={6} alignItems="center" flex="1" p={6} rounded="lg">
      <Image src={imageSrc} alt={altText} mb={4} />
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  );
};

export default StepsToPlay;