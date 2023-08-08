import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Collapsible from "react-collapsible";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";

const FAQRow = (props) => {
  const { row, index, currentOpen, setCurrentOpen } = props;
  const [isExpanded, setExpanded] = useState(false);

  const Icon = isExpanded ? AiFillCloseCircle : AiFillPlusCircle;
  const markdowntheme = {
    p: (props) => {
      const { children } = props;
      return (
        <Text m={2} fontWeight={400} textIndent={2} lineHeight={1.5}>
          {children}{" "}
        </Text>
      );
    },
    a: (props) => {
      const { children } = props;
      return (
        <a style={{ textDecoration: "underline!important" }}>{children} </a>
      );
    },
  };

  return (
    <Box
      bg="gray.100"
      minH="70px"
      p="22px"
      pl="20px"
      boxShadow="md"
      mt="20px"
      mb="25px"
      fontFamily={"inherit"}
    >
      <Collapsible
        open={currentOpen === index}
        transitionTime={200}
        onOpen={() => setExpanded(true)}
        triggerElementProps={{ id: "question" + index }}
        handleTriggerClick={() => {
          if (currentOpen === index) setCurrentOpen(-1);
          else setCurrentOpen(index);
        }}
        onClose={() => setExpanded(false)}
        trigger={
          <Flex align="center" w="100%">
            <Text
              fontSize={["16px", "16px", "16px", "18px"]}
              color="grey.900"
              textAlign="left"
            >
              {row.question}
            </Text>

            <Box ml="auto">
              <Icon style={{ fill: "#2C1758", fontSize: "30px" }} />
            </Box>
          </Flex>
        }
      >
        {/* <Text mt="6px" color="grey.900" textAlign="left">
          {row.answer}
        </Text> */}
        <ReactMarkdown
          id={"answer" + index}
          skipHtml={false}
          components={ChakraUIRenderer(markdowntheme)}
        >
          {row.answer}
        </ReactMarkdown>
      </Collapsible>
    </Box>
  );
};
export default FAQRow;
