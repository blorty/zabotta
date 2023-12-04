import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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


    /// Mobile Nav ///


    export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.bgAquaMedium};
    }
    `

    export const MobileMenu = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px; // Adjusted to position below the navbar
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    // Removed the transform and opacity properties here
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`

    export const MobileMenuItems = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    width: 100%;
    height: 100%;
    `

    export const MobileMenuLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
    `;

    export const MobileMenuButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    `;

    export const MobileLink = styled(motion.a)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

    export const MobileNavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;