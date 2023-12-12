import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

import './App.css';

import { mainTheme } from './CustomColors';

import NavbarRender from './components/Navbar';
import HomeRender from './components/Home';
import ProjectRender from './components/Projects';  
import FooterRender from './components/Footer';

const Container = styled.div`
  background: ${({ theme }) => theme.bgDune};
  width: 100%;
  overflow-x: hidden;
`

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }
  , []);

  return (
    <ThemeProvider theme={mainTheme}>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <NavbarRender />
      <Container>
        <HomeRender />
        <ProjectRender />
        <FooterRender />
      </Container>
    </ThemeProvider>
  );
};

export default App;
