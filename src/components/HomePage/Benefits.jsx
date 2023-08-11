import { Box, Heading, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { MdVerifiedUser, MdSettings, MdUpdate, MdFilterList, MdOutlineSecurity } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { BiCustomize } from "react-icons/bi";

const HomePage = () => {
  return (
    <Box bg="white" py={12}>
    <Box textAlign="center" mb={8}>
      <Heading as="h2" size="xl" mb={4}>
        Perfectlineup has got everything
      </Heading>
      <Text fontSize="lg" color="gray.600">
        to help you create better fantasy teams
      </Text>
    </Box>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={[10,40]}>
        <Box p={4}>
          <Heading as="h1" size="lg" mb={6}>
            Features
          </Heading>
          <Feature
            icon={<GiArtificialHive size={20} color="red" />}
            title="AI-Powered Predictions"
            description="Harness the power of AI to make data-driven decisions. Our algorithms analyze player performance, weather conditions, pitch reports, and more to provide you with the most accurate team recommendations."
          />
          <Feature
            icon={<MdVerifiedUser size={20} color="red" />}
            title="Easy-to-Use Interface"
            description="Whether you're a beginner or a seasoned fantasy cricket player, our user-friendly interface makes team building a breeze. Simply input your preferences, and let our AI do the rest!"
          />
          <Feature
            icon={<MdUpdate size={20} color="red" />}
            title="Real-Time Updates"
            description="Stay ahead of the game with real-time updates on player injuries, form, and other crucial factors. Our system constantly updates to provide you with the latest insights."
          />
          <Feature
            icon={<BiCustomize size={20} color="red" />}
            title="Customizable Strategies"
            description="Want to take control? Customize your team-building strategy with various filters and preferences. Tailor your team to your unique playing style."
          />
          <Feature
            icon={<MdOutlineSecurity size={20} color="red" />}
            title="Secure and Reliable"
            description="Your data is safe with us. We prioritize security and privacy, ensuring a seamless and trustworthy experience."
          />
        </Box>
        <Box p={4}>
          <Image
            src="https://plineup-prod.s3.ap-south-1.amazonaws.com/assets/img/AutoGeneratedteams.png"
            alt="AutoGeneratedTeams"
            maxW="100%"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <Box mb={8} textAlign="left">
      <Flex align="center" mb={2}>
        <Box mr={2}>{icon}</Box>
        <Heading as="h4" size="md">
          {title}
        </Heading>
      </Flex>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

export default HomePage;
