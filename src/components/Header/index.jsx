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
            w={["140px", "230px"]}
            h={["50px", "75px"]}
            pos="relative"
            overflow={"hidden"}
            p={4}
          >
            <NextImage
              fill
              title="halaplay_logo"
              alt="halaplay_logo"
              style={{ objectFit: "contain" }}
              src="https://www.perfectlineup.in/web/assets/front/images/main-logo.png"
            />
          </Box>
          {/* <Image objectFit="contain" src="/assets/halaplay_logo.png" /> */}
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
