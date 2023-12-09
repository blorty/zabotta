import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Headshot from '../Images/hs3.png';

// Page container
const HomeContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgStone};
    height: calc(100vh - 40px); // Subtracting the top and bottom padding
    overflow: hidden; // Prevents any child content from causing overflow
    @media (max-width: 576px) and (orientation: landscape) {
        height: calc(100vh - 20px);
    }

    @media (max-width: 768px) and (orientation: landscape) {
        padding-top: 15vh;
        padding-bottom: 15vh;
    }
`;

// Section container
const Section = styled(motion.section)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgStone};
    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

// Header text container
const HeaderTextContainer = styled(motion.div)` // Changed to motion.div
    font-family: 'TitleFont', sans-serif;
    position: absolute;
    top: -50px; // Adjust as necessary
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1; // Ensure this is below the image z-index
    color: black; // Text color
    font-size: 14em; // This font size is very large; you might want to reduce it
    padding: 10px 10px; // Add some padding
    cursor: default; // Prevent the cursor from changing to a text selection cursor
    user-select: none; // Prevent text selection
    overflow: hidden; // Added to prevent overflow issues
    text-shadow: 1px 1px 15px rgba(0,0,0,0.5); // Adjust color and opacity as needed
    @media (max-width: 430px) {
        font-size: 16vw; // Slightly larger to fill width but not height
        top: 5vh;
        transform: scaley(2.8);
    }

`;

// Header Footer container
const HeaderFooterContainer = styled(motion.div)`
    font-family: 'TitleFont', sans-serif;
    position: absolute;
    bottom: -50px; // Positioned at the bottom of the HomeContainer
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1; // Make sure it's above the background but below other elements if necessary
    color: black; // Text color
    font-size: 14em; // This font size is very large; you might want to reduce it
    padding: 10px 10px; // Add some padding
    cursor: default; // Prevent the cursor from changing to a text selection cursor
    user-select: none; // Prevent text selection
    overflow: hidden; // Added to prevent overflow issues
    text-shadow: 1px 1px 15px rgba(0,0,0,0.5);
    @media (max-width: 430px) {
        font-size: 16vw; // Slightly larger to fill width but not height
    }
`;

// Headshot container
const HeadshotContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    z-index: 2;
    user-select: none;

    @media (max-width: 430px) {
        max-width: 100%; 
        img {
            object-fit: cover;
            object-position: center; 
        }
`;



// Header text animation variants
const headerTextVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.3 },
    },
};

const headerFooterVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100, damping: 15, duration: 0.3 },
    },
};


const headshotVariants = {
    hidden: { 
      y: '-100vh', // Start below the screen
      scale: 4, // Start scaled down
      opacity: 0, // Start invisible
    },
    visible: { 
      y: 0, // End at its original position
      scale: 1, // Scale up to full size
      opacity: 1, // Fade in
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 20,
            delay: 0.35, // Delay the start to ensure it comes after the preloader
        },
    },
};

const headshotHoverVariants = {
    hover: {
        scale: 1.025, // Adjust the scale value as needed
        transition: {
            duration: 0.2, // Duration of the scaling animation
            ease: "easeInOut"
        }
    }
};

// HomePage component
const HomePage = () => {
    const [showHeadshot, setShowHeadshot] = useState(false);
    const [showHeaderText, setShowHeaderText] = useState(false);
    const [showHeaderFooter, setShowHeaderFooter] = useState(false);

    useEffect(() => {
    // Start the headshot animation
    const headshotTimer = setTimeout(() => {
        setShowHeadshot(true);
    }, 1000);

    // Start the header text animation after a delay
    const headerTextTimer = setTimeout(() => {
        setShowHeaderText(true);
    }, 1500); // Delay until the headshot has finished its entrance

    // Start the header footer animation after a delay
    const headerFooterTimer = setTimeout(() => {
        setShowHeaderFooter(true);
    }, 1500); // Delay until the headshot has finished its entrance

    return () => {
        clearTimeout(headshotTimer);
        clearTimeout(headerTextTimer);
        clearTimeout(headerFooterTimer);
        };
    }, []);

    return (
    <HomeContainer>
        <Section>
        {showHeadshot && (
            <HeadshotContainer>
            <motion.img
                src={Headshot}
                alt="Headshot"
                variants={headshotVariants}
                // variants={headshotHoverVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            />
            </HeadshotContainer>
        )}
        {showHeaderText && (
            <HeaderTextContainer
                variants={headerTextVariants}
                initial="hidden"
                animate="visible"
            >
            ZABOTTA
            </HeaderTextContainer>
        )}
        {showHeaderFooter && (
            <HeaderFooterContainer
                variants={headerFooterVariants}
                initial="hidden"
                animate="visible"
            >
                STUDIO
            </HeaderFooterContainer>
        )}
        </Section>
    </HomeContainer>
    );
};

export default HomePage;
