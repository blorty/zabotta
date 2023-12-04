import styled from 'styled-components';
import { motion } from 'framer-motion';

// Section container
export const Section = styled(motion.section)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgStone};
`;

// Heading
export const Heading = styled.h2`
    color: ${({ theme }) => theme.bgGrassLightest};
    font-size: 2rem;
    margin-bottom: 1rem;
`;

// Service and Project Cards
export const CardContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
`;

export const Card = styled(motion.div)`
    background-color: ${({ theme }) => theme.bgSalmonLight};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

// Content inside the card
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

// Image for services and projects
export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
`;

// Title for the card
export const CardTitle = styled.h3`
    color: ${({ theme }) => theme.white};
    font-size: 1.25rem;
    margin-bottom: 10px;
`;

// Description for the card
export const CardDescription = styled.p`
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    line-height: 1.5;
`;

// Motion variants for animations
export const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// Container variants for staggered children
export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger the children by 0.1 seconds each
        },
    },
};  