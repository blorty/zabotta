import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion'; // Import motion
import { ZabottaData } from "../ZabottaData/ZabottaData";
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

const FooterContainer = styled(motion.div)`
    font-family: 'TitleFont', sans-serif;
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.bgSalmonLight};
`;

const FooterWrapper = styled(motion.footer)`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
`;

const Logo = styled(motion.h1)`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.bgAquaDark};
`;

const Footer = styled(motion.footer)`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const FooterLink = styled(motion.a)`
    color: ${({ theme }) => theme.bgGrassLightest}; 
    padding: 0 30px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.bgAquaMedium}; 
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SocialMediaIcons = styled(motion.div)`
    display: flex;
    margin-top: 0.5rem;
`;
const SocialMediaIcon = styled(motion.a)`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.bgAquaMedium}; 
    }
`;

const Copyright = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
    text-align: center;
`;

const FooterRender = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                {/* <Logo>Logo</Logo> */}
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
