import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion'; // Import motion
import { ZabottaData } from "../ZabottaData/ZabottaData";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
    background-color: ${({ theme }) => theme.bgStone};
`;

const FooterWrapper = styled(motion.footer)`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.black}; 
`;

const SocialMediaIcons = styled(motion.div)`
    display: flex;
    margin-top: 0.5rem;
`;
const SocialMediaIcon = styled(motion.a)`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.black}; 
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.bgMocha}; 
    }
`;

const Copyright = styled(motion.p)`
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.black}; 
    text-align: center;
    user-select: none;
`;

const FooterRender = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
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
