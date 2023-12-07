import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

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

  return (
    <ThemeProvider theme={mainTheme}>
      <NavbarRender />
      <Container>
        <HomeRender />
        <FooterRender />
      </Container>
    </ThemeProvider>
  );
};

export default App;
