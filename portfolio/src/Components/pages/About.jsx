import React from "react";
import {
  Box,
  Flex,
  Stack,
  HStack,
  VStack,
  Button,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import aboutImage from "../asset/about.png";
import adityaImage from "../asset/Aditya.JPG";

const About = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
        behavior: "smooth",
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
    <Box>
      <Stack gap={1} align={"center"}>
        <Box id="about">
          <motion.div {...animations.div}>
            <Flex>
              <HStack
                align={"center"}
                justify={"space-between"}
                w={{ base: "80%", sm: "50%", md: "100%" }}
                gap={{ base: 20, md: 30 }}
                mt={{ base: 5, md: 10 }}
                p={{ base: 5, md: 8 }}
                ml={{ base: 5, md: 0 }}
              >
                <Text
                  w={{ base: "30%", sm: "50%", md: "80%" }}
                  fontSize={{ base: "2xl", md: "5xl" }}
                  fontFamily={"Kanit"}
                  fontWeight={"bold"}
                  bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                  bgClip="text"
                  ml={{ base: 0, md: 7 }}
                >
                  About Me
                </Text>
                <Box w={{ base: "80%", sm: "60%", md: "40%" }}>
                  <Img src={aboutImage} />
                </Box>
              </HStack>
            </Flex>
          </motion.div>
        </Box>

        <Box>
          <motion.div {...animations.home}>
            <Flex
              align={"center"}
              gap={{ base: "2", md: "20" }}
              justify={"flex-start"}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                w={{ base: "70%", sm: "50%", md: "40%" }}
                mb={{ base: 12, md: 5 }}
                mt={{ base: 10, md: 2 }}
                ml={{ base: 4, md: 15 }}
                border={"2px solid gray.300"}
              >
                <Img src={adityaImage} borderRadius={"10px"} />
              </Box>

              <Box
                w={{ base: "70%", sm: "50%", md: "60%" }}
                mb={{ base: 12, md: 5 }}
                mt={{ base: 10, md: 2 }}
                mr={{ base: 0, md: 2 }}
                alignItems={"center"}
              >
                <motion.div {...animations.div}>
                  <Text
                    fontSize={{ base: "sm", md: "2xl" }}
                    fontFamily={"Kanit"}
                  >
                    <Text
                      as={"span"}
                      fontSize={{ base: "sm", md: "3xl" }}
                      fontWeight={"bold"}
                      bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                      bgClip="text"
                    >
                      This is Aditya Paliwal ,{" "}
                    </Text>
                    computer science undergraduate, pursuing B.Tech from
                    Acropolis Institute of Technology and Research, Indore. I am
                    always fascinated by programming and passionate about
                    exploring the latest technology and developing new cool
                    things. An enthusiastic person with a touch of curiosity and
                    hard work and is heavily ambitious to improve knowledge.
                    Always aiming to be a rainbow at the end of a thunderstorm.
                  </Text>

                  <Text
                    fontSize={{ base: "sm", md: "2xl" }}
                    fontFamily={"Kanit"}
                  >
                    I am a{" "}
                    <Text
                      as={"span"}
                      bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                      bgClip="text"
                    >
                      Full Stack Developer
                    </Text>
                    , and a UX/UI Designer who loves to work with frontend and
                    design things creatively and curiously.
                  </Text>
                </motion.div>

                <Box my={{ base: "5", md: "15" }}>
                  <motion.div {...animations.headdiv}>
                    <Text
                      color={"white"}
                      fontFamily={"Kanit"}
                      fontWeight={"semibold"}
                      bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                      padding={{ base: 3, md: 6 }}
                      borderRadius={"6px"}
                      textAlign={"center"}
                      fontSize={{ base: "sm", md: "2xl" }}
                    >
                      {<ExternalLinkIcon />} Open for Job opportunity in
                      Frontend And Backend Develpoer Roles...{" "}
                    </Text>
                  </motion.div>
                </Box>
              </Box>
            </Flex>
          </motion.div>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
