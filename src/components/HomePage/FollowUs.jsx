import { Box, Heading, Link, Stack } from "@chakra-ui/react";

const FollowUs = () => {
  return (
    <Box bg="#fa274e" w="100%" h={["30vh", "70vh"]}>
      <Box textAlign="left" mx={[5, 40]} mt={[50,100]}>
        <Heading as="h1" color="white" fontSize={['20px', '40px']} mb={4}>
        "Ready to take your fantasy cricket game to the next level? Download the Sportskeeda app now and start building your winning team today!"
        </Heading>
        <Stack direction={"row"} spacing={4} mt={[2,6]}>
          <Link
            href=" https://play.google.com/store/apps/details?id=com.sportskeeda.topic"
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
      </Box>
    </Box>
  );
};

export default FollowUs;
