import { Box, Link, SimpleGrid, Text, Button, Flex, Stack } from "@chakra-ui/react";
import NextImage from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Gateway from "./Gateway";

const Footer = () => {
  return (
    <Box bg="white" py={6}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} textAlign={{ base: "center", md: "left" }} mx={10} mt={10}>
        <Box>
          <NextImage
            src="https://www.perfectlineup.in/web/assets/front/images/main-logo.png"
            alt="halaplay_logo"
            title="halaplay_logo"
            width={150}
            height={60}
          />
        </Box>
        <Box>
          <Flex direction= "column" alignItems="start" color="gray.600" lineHeight={8} fontWeight="bold">
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"https://www.sportskeeda.com/privacy-policy"}>Privacy Policy</Link>
            <Link href={"https://www.sportskeeda.com/terms-of-use"}>Terms of Service</Link>
            <Link href={"https://www.sportskeeda.com/contact"}>Contact Us</Link>
            <Link href={"https://www.sportskeeda.com/gdpr-compliance"}>GDPR</Link>
          </Flex>
        </Box>
        <Flex justify="start">
          <Stack direction="column" spacing={4} mt={[6, 0]}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.sportskeeda.topic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.perfectlineup.in/web/assets/front/images/gplayWt.png"
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
                src="https://www.perfectlineup.in/web/assets/front/images/appWt.png"
                alt="App Store"
                className="btn-hover-all"
              />
            </Link>
          </Stack>
        </Flex>
      </SimpleGrid>
      <Box mt={6}>
        <Gateway />
      </Box>
    </Box>
  );
};

export default Footer;
