import { Flex } from "@chakra-ui/react";
import Features from "./Features";
import MainSection from "./MainSection";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import StepsToPlay from "./StepToPlay";
import FollowUs from "./FollowUs";
import Header from "../Header";

const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      mb={4}
      w="full"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        w="full"
        backgroundColor={'white'}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center center"}
        pos="relative"
      >
        <Header />
        <HeroSection />
      </Flex>
      
      <MainSection />
      <Features />
      <StepsToPlay />
      <Testimonial />
      <FollowUs />
    </Flex>
  );
};

export default HomePage;
