import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <Box margin="0" transition="0.5s ease-out">
      <Box as="main">{children}
       <Footer />
      </Box>
    </Box>
  );
};

export default DefaultLayout;
