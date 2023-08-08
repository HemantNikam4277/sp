import { Flex } from "@chakra-ui/react";
import Benefits from "./Benefits";
import EarnMore from "./EarnMore";
import HeroSection from "./HeroSection";
import Testimonial from "./Testimonial";
import StepsToPlay from "./StepToPlay";
import Download from "../Download/Download";
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
      
      <Download />
      <EarnMore title={"Play Fantasy Game Online & Earn More"} />
      <Benefits title={"HalaPlay Benefits"} />
      <StepsToPlay />
      <Testimonial title={"What our users say"} />
      <FollowUs />
    </Flex>
  );
};

export default HomePage;
