import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled(motion.div)`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.bgSalmonLight};
`;

export const FooterWrapper = styled(motion.footer)`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
`;

export const Logo = styled(motion.h1)`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.bgAquaDark};
`;

export const Footer = styled(motion.footer)`
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

export const FooterLink = styled(motion.a)`
    color: ${({ theme }) => theme.bgGrassLightest}; 
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

export const SocialMediaIcons = styled(motion.div)`
    display: flex;
    margin-top: 0.5rem;
`;

export const SocialMediaIcon = styled(motion.a)`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.bgAquaMedium}; 
    }
`;

export const Copyright = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.bgGrassLightest}; 
    text-align: center;
`;
