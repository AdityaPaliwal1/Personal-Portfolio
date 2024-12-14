import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Img,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../asset/hero.png";
import About from "./About";
import pdf from "../asset/Updated_Resume 29-08-24.pdf";

const Hero = () => {
  document.title = "Aditya Paliwal : Full Stack Developer";

  const animations = {
    div: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
      transition: {
        duration: 0.5,
      },
    },
    headdiv: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    home: {
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
      transition: {
        duration: 1.2,
      },
    },
  };
  return (
    <Box id="#" h={{ base: "120vh", md: "100vh" }}>
      <motion.div {...animations.home}>
        <Flex
          align={"center"}
          justify={{
            base: "center",
            md: "space-around",
            xl: "space-between",
          }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="no-wrap"
          minH="70vh"
          px={8}
          mb={16}
        >
          <VStack
            ml={"30px"}
            spacing={"1px"}
            w={{ base: "80%", md: "50%" }}
            align={["center", "center", "flex-start", "flex-start"]}
            mb={{ base: 8, md: 0 }}
          >
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              as={"span"}
              bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
              bgClip="text"
              fontWeight={"semibold"}
              my={{ base: 0, md: 2 }}
              fontFamily={"Kanit"}
              mr={{ base: 10, md: 0 }}
            >
              Hii I am,
            </Text>

            <Text
              fontSize={{ base: "6xl", md: "7xl" }}
              my={{ base: 0, md: 2 }}
              bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
              bgClip="text"
              fontWeight={"bold"}
              fontFamily={"Kanit"}
            >
              Aditya Paliwal
            </Text>

            <Text></Text>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              ml={"8px"}
              color={"gray.500"}
              fontWeight={"semibold"}
              fontFamily={"Kanit"}
            >
              As a full-stack web developer, I have a strong foundation in a
              range of technologies. My expertise spans from front-end
              development to back-end programming.One of my favourite
              technologies to work with is React.js, particularly within the
              MERN stack.
            </Text>

            <ButtonGroup mt={"50px"} gap={"5px"}>
              <a href={pdf}>
                {" "}
                <Button
                  padding={"15px"}
                  _hover={{
                    bg: "#1D4646",
                    color: "white",
                  }}
                >
                  View Resume
                </Button>
              </a>
              <Button
                bgGradient="linear(to-l,#4BA4A6, #1D4646 ) "
                padding={"15px"}
                color={"white"}
                _hover={{
                  bg: "#1D4646",
                }}
              >
                <SocialIcon
                  network="github"
                  style={{
                    height: "25px",
                    width: "25px",
                    marginRight: "6px",
                  }}
                />{" "}
                View Source
              </Button>
            </ButtonGroup>
          </VStack>
          <Box
            w={{ base: "70%", sm: "50%", md: "40%" }}
            mb={{ base: 12, md: 0 }}
            mt={{ base: 10, md: 10 }}
            filter=" drop-shadow(3px 3px 3px #222)"
          >
            <Img src={heroImage} />
          </Box>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Hero;
