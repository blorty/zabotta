import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

import './App.css';

import { mainTheme } from './CustomColors';

import NavbarRender from './components/NavbarRender';
import HomeRender from './components/HomeRender';
import FooterRender from './components/FooterRender';

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
    }, 2500); // 3000ms = 3 seconds
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
        <FooterRender />
      </Container>
    </ThemeProvider>
  );
};

export default App;
