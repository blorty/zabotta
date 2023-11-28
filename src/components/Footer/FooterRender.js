import React from "react";
import { motion } from 'framer-motion'; // Import motion
import { ZabottaData } from "../../ZabottaData/ZabottaData";
import { FooterContainer, Footer, FooterLink, FooterWrapper, Logo, SocialMediaIcon, SocialMediaIcons, Copyright } from "./FooterStyled";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { 
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const FooterRender = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Logo</Logo>
                <Footer as={motion.div} variants={footerVariants} initial="hidden" animate="visible">
                    <FooterLink as={motion.a} variants={linkVariants} href="/about" whileHover={{ scale: 1.25 }}>About</FooterLink>
                    <FooterLink as={motion.a} variants={linkVariants} href="/services" whileHover={{ scale: 1.25 }}>Services</FooterLink>
                    <FooterLink as={motion.a} variants={linkVariants} href="/contact" whileHover={{ scale: 1.25 }}>Contact</FooterLink>
                    <FooterLink as={motion.a} variants={linkVariants} href="/blog" whileHover={{ scale: 1.25 }}>Blog</FooterLink>
                </Footer>
                <SocialMediaIcons>
                    <SocialMediaIcon
                        as={motion.a} variants={iconVariants} initial="hidden" animate="visible"
                        href={ZabottaData.facebook} 
                        target="_blank" 
                        whileHover={{ scale: 1.25 }}>
                            <FacebookIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon
                        as={motion.a} variants={iconVariants} initial="hidden" animate="visible" 
                        href={ZabottaData.instagram} 
                        target="_blank" 
                        whileHover={{ scale: 1.25 }}>
                            <InstagramIcon />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; {new Date().getFullYear()} Zabotta Studio. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default FooterRender;
