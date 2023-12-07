import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <div>
            <HomeContainer>
                <Section>
                    <Heading>Home Page</Heading>
                </Section>
            </HomeContainer>
        </div>
    );
};

export default HomePage;


// Page container
export const HomeContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgStone};
    height: 100vh; /* Updated from 100% to 100vh */
`;

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