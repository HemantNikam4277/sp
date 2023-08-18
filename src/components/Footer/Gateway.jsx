import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

const Gateway = () => {
  return (
    <Box py={10}>
      <Stack display="flex" alignItems="center">
        <Text
          color="gray.600"
          fontSize={["sm", "md"]}
          pt={5}
          align={["center", "center"]}
          p={3}
        >
          This game involves an element of financial risk and may be addictive
          Please play responssibly at your own risk<br></br>
          The game is applicable for people above 18 only
        </Text>
      </Stack>
    </Box>
  );
};

export default Gateway;
