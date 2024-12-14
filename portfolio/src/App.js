
import './App.css';
import React from 'react';
import { ChakraProvider  , Divider } from '@chakra-ui/react';
import Header from './Components/Layouts/Header';
import Hero from './Components/pages/Hero';
import About from './Components/pages/About';
import Skills from './Components/pages/Skills';
import Contact from './Components/pages/Contact';
import Footer from './Components/Layouts/Footer';
import Projects from './Components/pages/Projects';
function App() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <Divider/>
      <About/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Contact/>
      <Divider/>
      <Footer/>
    </ChakraProvider>
  );
  
}

export default App;
