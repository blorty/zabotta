import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

import { mainTheme } from './CustomColors';

import NavbarRender from './components/Navbar/NavbarRender';
import HomeRender from './components/Home/HomeRender';
import FooterRender from './components/Footer/FooterRender';

const Container = styled.div`
  background: ${({ theme }) => theme.bgDune};
  width: 100%;
  overflow-x: hidden;
`

// const Wrapper = styled.div`
//   flex-grow: 1; 
// `


function App() {

  return (
    <ThemeProvider theme={mainTheme}>
      <NavbarRender />
      <Container>
        <HomeRender />
        <FooterRender />
      </Container>
    </ThemeProvider>
  )
}

export default App;
