import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
    font-family: 'TitleFont', sans-serif;
    background-color: ${({theme}) => theme.bgStone};
    backdrop-filter: blur(10px);
    background-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    height: 40px;
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

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
    position: relative;
`;

const NavLogo = styled(LinkR)`
    position: absolute; 
    left: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    filter: invert(100%);
    @media (max-width: 640px) {
        left: 10px;
    }
`;

const NavItems = styled(motion.ul)`
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
        gap: 10px;
    }
`;
const NavLink = styled(motion.a)`
    color: ${({ theme }) => theme.black};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 30px;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold; // Make the font bold
    user-select: none;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.bgSalmonLight};
    }
    @media screen and (max-width: 768px) {
        padding: 0 10px;
        font-size: 12px;
    }
`;

const navListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.215,
            delayChildren: 1
        }
    }
};

const navItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        stiffness: 25,
        transition: { ease: "easeInOut", duration: 1 } 
    }
};

const NavbarRender = () => {

    return (
        <NavStyled>
            <NavContainer>
                <NavLogo to='/'>
                    {/* ZABOTTA STUDIO LOGO */}
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