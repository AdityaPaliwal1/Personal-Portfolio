import React from "react";
import { Box, Flex, Stack, HStack, VStack, Button, Heading, Img, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <Box>
            <Flex
                w={'100%'}
                h={'100%'}
                bg={'none'}
                color={'gray.500'}
                justify={'center'}
                align={'center'}
                direction={'column'}
                pt={3}
                pb={3}
                >
                <Text fontFamily={'Kanit'} fontSize={"sm"} fontWeight={"400"}>
                  Made with ❤️ by Aditya Paliwal
                </Text>
                <Text fontFamily={'Kanit'} fontSize={"sm"} fontWeight={"400"}>
                    © 2025 Aditya Paliwal. All rights reserved.
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer;