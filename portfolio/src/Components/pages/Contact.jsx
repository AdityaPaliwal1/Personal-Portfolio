import React from "react";
import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  HStack,
  VStack,
  Text,
  Button,
  Img,
  Input,
  Textarea,
  useToast,
  CircularProgress,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import contactImage from "../asset/contact.png";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const animations = {
    div: {
      initial: {
        y: "50%",
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
        duration: 1,
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
      <Box id="contact">
        <motion.div {...animations.div}>
          <Flex>
            <HStack
              align={"center"}
              justify={"space-between"}
              w={{ base: "80%", sm: "50%", md: "100%" }}
              gap={{ base: 20, md: 30 }}
              mt={{ base: 5, md: 10 }}
              p={{ base: 5, md: 8 }}
            >
              <Heading
                w={{ base: "30%", sm: "50%", md: "90%" }}
                fontSize={{ base: "xl", md: "5xl" }}
                fontFamily={"Kanit"}
                fontWeight={"bold"}
                bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                bgClip="text"
                ml={"7"}
              >
                Contact Me....{" "}
              </Heading>

              <Box w={{ base: "100%", sm: "60%", md: "30%" }}>
                <Img src={contactImage} />
              </Box>
            </HStack>
          </Flex>
        </motion.div>
      </Box>

      {/* //contact form here // */}
      <Box>
        <motion.div {...animations.div}>
          <Form />
          <Social />
        </motion.div>
      </Box>
    </Box>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 2000,
        isClosable: true,

        position: "top-center",
      });
      return; // Exit the function early
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/sendmail",
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

       
        
      if (res.status === 200 && res.data.success === true) {
        toast({
          title: "Success",
          description: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-center",
        });


      } else {
        toast({
          title: "Error",
          description: res.data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-center",
        });
        
       
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <Box>
      <Flex align="center" justify="center">
        <Box bg="white" p={6} w={{ base: "100%", md: "30%" }}>
          <form onSubmit={(event) => submitHandler(event)}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel
                  htmlFor="text"
                  bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                  bgClip={"text"}
                >
                  Full Name
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  variant="filled"
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="email"
                  bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                  bgClip={"text"}
                >
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="textarea"
                  bgGradient="linear(to-l,#4BA4A6, #1D4646 )"
                  bgClip={"text"}
                >
                  Message here...
                </FormLabel>
                <Textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  resize={"none"}
                  name="message"
                  variant="filled"
                />
              </FormControl>

              <Button
                type="submit"
                bgGradient="linear(to-l,#4BA4A6, #1D4646 ) "
                padding={"15px"}
                color={"white"}
                _hover={{
                  bg: "#1D4646",
                }}
                width="full"
                m={"auto"}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size="30px" color="teal" />
                ) : (
                  <>
                    <ArrowRightIcon mr={7} />
                    Send
                  </>
                )}
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

const Social = () => {
  return (
    <Box>
      <Flex align="center" justify="center">
        <HStack gap={{ base: "10", md: "20" }} my={4}>
          <SocialIcon
            url="https://twitter.com/AdityaPaliwal04"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="https://facebook.com/"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="https://linkedin.com/adityapaliwal1"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="   https://instagram.com/adityapaliwal_online"
            style={{ height: "30px", width: "30px" }}
          />
          <SocialIcon
            url="https://github.com/AdityaPaliwal1"
            style={{ height: "30px", width: "30px" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Contact;
