import React from 'react'
import {Box,Flex,Stack,HStack,Text, Heading,Img} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import skillsImage from '../asset/skills.png'
import c from '../asset/c.png'
import cpp from '../asset/cpp.png'
import java from '../asset/java.png'
import python from '../asset/python.png'
import csharp from '../asset/c#.png'
import html from '../asset/html.png'
import css from '../asset/css.png'
import js from '../asset/javascript.png'

import node from '../asset/node.png'
import express from '../asset/express.png'
import mongodb from '../asset/mongo.png'
import mongoose from '../asset/mongoose.png'
import react from '../asset/react.png'
import redux from '../asset/redux.png'
import npm from '../asset/npm.png'
import mysql from '../asset/mysql.png'
import bootstrap from '../asset/bootstrap.jpg'

import tailwindcss from '../asset/tailwind.png'
import git from '../asset/git.png'
import github from '../asset/github.png'
import axios from '../asset/axios.png'
import photoshop from '../asset/photoshop.png'
import figma from '../asset/figma.png'

import canva from '../asset/canva.jpg'
import chakraui from '../asset/chakra.jpg'
import postman from '../asset/postman.png'


import vercel from '../asset/vercel.png'

const Skills = () =>{
    const animations = {
        div: {
            initial: {
                y: '100%',
                opacity: 0
            },
            whileInView: {
                y: '0',
                opacity: 1
            },
            transition: {
                duration: 0.5,
            }
        },
        headdiv: {
            initial: {
                y: '100%',
                opacity: 0
            },
            whileInView: {
                y: '0',
                opacity: 1
            },
            transition: {
                duration: 1,
                delay: 0.5,
            }
        },
        home: {
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            transition: {
                duration: 1.2,
            }
        },
    }

 const skills = [c,cpp,java,python,csharp,html,css,js,node,express,mongodb,mongoose,mysql,react,chakraui,bootstrap,tailwindcss,redux,axios,npm,git,github,photoshop,figma,canva,postman,vercel]
    return(
        <Box id='skills' >
            <Box >
                <motion.div {...animations.div}>
                <Flex>
                    <HStack
                    align={"center"}
                    justify={"space-between"}
                    w={{ base: "80%", sm: "50%", md: "100%" }}
                    gap={{ base: 20, md: 30 }}
                    p={{ base: 5, md: 8 }}
                    >
                        <Heading
                        w={{ base: "30%", sm: "50%", md: "90%" }}
                        fontSize={{ base: "2xl", md: "5xl" }}
                        fontFamily={"Kanit"}
                        fontWeight={"bold"}
                        bgGradient='linear(to-l,#4BA4A6, #1D4646 )'
                        bgClip='text'
                        ml={"7"}
                        >
                            Skills...
                        </Heading>

                        <Box
                        w={{ base: "70%", sm: "60%", md: "20%" }}
                        mr={{base:0,md:5}}
                        
                        
                        >
                            <Img src={skillsImage}
                           
                        />
                        </Box>
                    </HStack>
                </Flex>
                </motion.div>
            </Box>
            <Box className='skillcontent'
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            width={{base:"90vw",md:"80vw"}}
            
            m={"1rem auto"}
            p={"1rem"}
            boxShadow={"0 0 10px 0 #000000"}
            borderRadius={"10px"}
            
            >

                <Flex 
                align={"center"}
                justify={"space-around"}
                
                flexWrap={"wrap"}
            
                >
             {skills.map((skill, index) => (
                 <HStack 
                // border={"2px solid black"}
                w={{base:"20%",md:"10%"}}
                
                    
                 >
                    <Box
                    m={" 6px "}
                    
                    // border={"2px solid black"}
                    
                   
                    
                    >
                    <motion.div {...animations.div} className='skill' key={index}
                 

                 >
                     <img src={skill} alt='skills here' 
                     width={"60%"} 
                     />
                 </motion.div>
                 </Box>
                 </HStack>
             ))}
                </Flex>
        </Box>
          
        </Box>



    );
};

export default Skills;