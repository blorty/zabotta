import React, { useState } from 'react';
import { NavStyled, NavContainer, NavLogo, NavItems, NavLink, MobileIcon, MobileMenu, MobileMenuLink } from './NavbarStyled';
import { FaBars } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

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

const mobileMenuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 }
};

const mobileLinkVariants = {
    closed: { y: -20, opacity: 0 },
    open: { y: 0, opacity: 1 }
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
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </MobileIcon>
                <NavItems variants={navListVariants} initial="hidden" animate="visible">
                    {/* Desktop Navigation Links */}
                    <NavLink href="#about" variants={navItemVariants} whileHover={{ scale: 1.25 }} >About</NavLink>
                    <NavLink href="services" variants={navItemVariants} whileHover={{ scale: 1.25 }}>Services</NavLink>
                    <NavLink href="#projects" variants={navItemVariants} whileHover={{ scale: 1.25 }}>Projects</NavLink>
                    <NavLink href="#contact" variants={navItemVariants} whileHover={{ scale: 1.25 }}>Contact</NavLink>
                    {/* Add other links as needed */}
                </NavItems>
                <AnimatePresence>
                    {isOpen && (
                        <MobileMenu
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {/* Mobile Navigation Links */}
                            <MobileMenuLink variants={mobileLinkVariants} href="#about">About</MobileMenuLink>
                            <MobileMenuLink variants={mobileLinkVariants} href="#services">Services</MobileMenuLink>
                            <MobileMenuLink variants={mobileLinkVariants} href="#projects">Projects</MobileMenuLink>
                            <MobileMenuLink variants={mobileLinkVariants} href="#contact">Contact</MobileMenuLink>
                        </MobileMenu>
                    )}
                </AnimatePresence>
            </NavContainer>
        </NavStyled>
    );
};

export default NavbarRender;
