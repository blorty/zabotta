import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

// Import your data and logo
// import { mydata } from '../../MyData/mydata';
// import YourLogo from '../../images/YourLogo.png'; // Replace 'YourLogo.png' with your logo file

// Define your variants here (as in your portfolio component)
const navListVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.175 }
    }
};

const navItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const NavbarRender = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavStyled>
            <NavContainer>
                <NavLogo to='/'>
                    ZABOTTA STUDIO LOGO
                    {/* {mydata.name} // <img src={YourLogo} alt="Your Logo" /> // Replace 'Your Logo' with your logo name */}
                </NavLogo>
                <NavItems variants={navListVariants} initial="hidden" animate="visible">
                    {/* Desktop Navigation Links */}
                    <NavLink href="#about" variants={navItemVariants} whileHover={{ scale: 1.25 }} >ABOUT</NavLink>
                    <NavLink href="services" variants={navItemVariants} whileHover={{ scale: 1.25 }}>SERVICES</NavLink>
                    <NavLink href="#projects" variants={navItemVariants} whileHover={{ scale: 1.25 }}>PROJECTS</NavLink>
                    <NavLink href="#contact" variants={navItemVariants} whileHover={{ scale: 1.25 }}>CONTACT</NavLink>
                    {/* Add other links as needed */}
                </NavItems>
            </NavContainer>
        </NavStyled>
    );
};

export default NavbarRender;



export const NavStyled = styled.div`
    background-color: ${({theme}) => theme.bgStone};
    backdrop-filter: blur(10px);
    background-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
    position: relative;
`;

export const NavLogo = styled(LinkR)`
    position: absolute; 
    left: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    filter: invert(100%);
    @media (max-width: 640px) {
        left: 10px; // Adjust for smaller screens if necessary
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const NavItems = styled(motion.ul)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    position: relative;
    flex: 1;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(motion.a)`
    color: ${({ theme }) => theme.bgGrassLightest};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold; // Make the font bold
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.bgSalmonLight};
    }
`;