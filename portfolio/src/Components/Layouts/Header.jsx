import React from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {Link as ScrollLink} from 'react-scroll'
import About from '../pages/About';
import Skills from '../pages/Skills';

export default function WithSubnavigation() {


  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="1000" 
    backdropFilter={"blur(10px)"}
    >
      <Flex
       
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Link href={"#"}
        _hover={{
          textDecoration: 'none',
        }}
        >
          <Text
            bgGradient="linear(to-l,#4BA4A6, #1D4646)"
            bgClip="text"
            fontSize={'xl'}
            fontWeight={'bold'}
            fontFamily={'Kanit'}
            _hover={{
              bgGradient: 'linear(to-l,#1D4646,#4BA4A6 )',
              bgClip: 'text',
            }}
          >
            Aditya Paliwal
          </Text>
        </Link>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav isOpen={isOpen} onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={10}>
      <DesktopNavItem label="About" href={"#about"} />
      <DesktopNavItem label="Skills" href={"#skills"} />
      <DesktopNavItem label="Projects" href={"#projects"} />
      <DesktopNavItem label="Contact" href={"#contact"} />
    </Stack>
  );
};

const DesktopNavItem = ({ label, href }) => {
  return (
    <Box key={label}>
      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Box
            as="a"
            p={2}
            href={href ?? '#'}
            fontSize={'lg'}
            fontFamily={'Kanit'}
            fontWeight={600}
            bgGradient={'linear(to-l,#4BA4A6, #1D4646 )'}
            bgClip={'text'}
            _hover={{
              textDecoration: 'none',
              bgGradient: 'linear(to-l,#1D4646,#4BA4A6  )',
              bgClip: 'text',
            }}
          >
            {label}
          </Box>
        </PopoverTrigger>
      </Popover>
    </Box>
  );
};

const MobileNav = ({ isOpen, onToggle }) => {
  
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <MobileNavItem label="About" href={"#about"} onToggle={onToggle} />
      <MobileNavItem label="Skills" href={"#skills"} onToggle={onToggle} />
      <MobileNavItem label="Projects" href={"#projects"} onToggle={onToggle} />
      <MobileNavItem label="Contact" href={"#contact"} onToggle={onToggle} />
    </Stack>
  );
};

const MobileNavItem = ({ label, href,onToggle }) => {

  return (
    <Flex spacing={20} onClick={onToggle} justify={'center'} align={'center'} direction="column">
      <Link href={href ?? '#'} textDecoration="none" >
        <Text
          fontWeight={700}
          bgGradient={'linear(to-l,#4BA4A6, #1D4646 )'}
          bgClip={'text'}
          _hover={{
            bgGradient: 'linear(to-l,#1D4646,#4BA4A6)',
            bgClip: 'text',
          }}
        >
          {label}
        </Text>
      </Link>
    </Flex>
  );
};
