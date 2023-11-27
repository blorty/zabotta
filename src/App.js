import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar/NavbarRender';
import Home from './components/Home/HomeRender';
import Footer from './components/Footer/FooterRender';


const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

// const Wrapper = styled.div`
//   flex-grow: 1; 
// `

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Container>
        <Home />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;
