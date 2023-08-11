/* eslint-disable import/no-extraneous-dependencies */
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import NextImage from "next/image";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Box mt={4}>
    <Flex
      as="header"
      color="black"
      py={{ base: 2 }}
      px={{ base: 4 }}
      align="center"
    >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex p={2} px={["90px", "0"]}>
          <Box
            alignSelf={useBreakpointValue({
              base: "center",
              md: "left",
            })}
            onClick={() => router.push("/")}
            cursor="pointer"
            w={["150px", "250px"]}
            h={["60px", "80px"]}
            pos="relative"
          >
            <NextImage
              fill
              title="sportkeeda_logo"
              alt="sportkeeda_logo"
              style={{ objectFit: "contain" }}
              src="/sportkeeda_logo.jpg"
            />
          </Box>
          {/* <Image objectFit="contain" src="/assets/sportkeeda_logo.png" /> */}
          <Flex display={{ base: "none", md: "flex" }} ml={60} mt={6}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
