import { 
  Box, 
  Link, 
  SimpleGrid, 
  Center, 
  Flex, 
  Stack 
} from "@chakra-ui/react";
import NextImage from "next/image";
import Gateway from "./Gateway";

const footerLinks = [
  { label: "About Us", href: "https://www.sportskeeda.com/about-us" },
  { label: "Privacy Policy", href: "https://www.sportskeeda.com/privacy-policy" },
  { label: "Terms of Service", href: "https://www.sportskeeda.com/terms-of-use" },
  { label: "Contact Us", href: "https://www.sportskeeda.com/contact" },
  { label: "GDPR", href: "https://www.sportskeeda.com/gdpr-compliance" },
];

const googlePlayStoreLink = "https://play.google.com/store/apps/details?id=com.sportskeeda.topic";
const appStoreLink = "https://apps.apple.com/in/app/sportskeeda-wwe-cricket/id1462625228";

const linkStyles = {
  color: "gray.600",
  lineHeight: 8,
  fontWeight: "bold",
};

const Footer = () => {
  return (
    <Box 
      bg="white" 
      px={4} 
      py={12}
    >
      <SimpleGrid 
        columns={{ base: 1, md: 3 }} 
        spacing={6} 
        textAlign="left"
      >
        <Center>
          <NextImage
            src="/sportkeeda_logo.jpg"
            alt="sportkeeda_logo"
            title="sportkeeda_logo"
            width={150}
            height={60}
          />
        </Center>

        <Center>
          <Flex 
            direction="column" 
            alignItems="left" 
            color="gray.600" 
            {...linkStyles}
          >
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Flex>
        </Center>

        <Center 
          justify={["start", "center"]} 
          paddingX={4}
        >
          <Stack 
            direction="column" 
            spacing={4} 
            mt={[6, 0]}
          >
            <Link href={googlePlayStoreLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.perfectlineup.in/web/assets/front/images/playstr.png"
                alt="Google Play Store"
                className="btn-hover-all"
              />
            </Link>
            <Link href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.perfectlineup.in/web/assets/front/images/applestr.png"
                alt="App Store"
                className="btn-hover-all"
              />
            </Link>
          </Stack>

        </Center>
      </SimpleGrid>

      <Box mt={6}>
        <Gateway />
      </Box>

    </Box>
  );
};

export default Footer;
