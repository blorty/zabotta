import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PreloaderContainer = styled(motion.div)`
    font-family: 'TitleFont', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #bebeb8;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow: hidden; // Prevent overflow during animation
`;

const TitleContainer = styled(motion.div)`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap; // Allow the letters to wrap if necessary
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 10%; // Add padding to prevent letters from touching the edges
`;

const AnimatedLetter = styled(motion.span)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 8vw; // Adjust the font size to be smaller
    line-height: 1;
    margin: 0 0.5vw; // Adds spacing between letters
    drop-shadow: 1px 1px; // Adjust the x, y offset and color for the desired effect

    @media (max-width: 768px) {
        font-size: 6vw;
    }

    @media (max-width: 480px) {
        font-size: 4vw;
    }
`;


// Letter animation variants
const letterVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
        }
    },
    exit: {
        y: '-100%',
        opacity: 0,
        transition: {
            ease: "easeIn",
            duration: 0.5
        }
    }
};

// Title animation container variants
const titleContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5 // This delay allows all letters to finish the entrance animation
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1, // Animate out from last letter to first
            when: "afterChildren" // Ensure exit animations start after the children have finished animating in
        }
    }
};

// Title animation container variants
const AnimatedTitle = ({ title }) => {
    const letters = title.split('');

    return (
        <TitleContainer
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {letters.map((letter, index) => (
                <AnimatedLetter
                    custom={index}
                    key={index}
                    variants={letterVariants}
                    // Removed the inline width style
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </AnimatedLetter>
            ))}
        </TitleContainer>
    );
};

// Page container variants
const containerVariants = {
    initial: { 
        y: '100vh', // Start above the screen
        opacity: 0
    },
    animate: { 
        y: 0, // Move to its original position
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.5
        }
    },
    exit: {
        y: '-100vh', // Move up and out of the screen
        opacity: 0,
        transition: {
            ease: "easeOut",
            duration: 0.25
        }
    }
};

const Preloader = () => {
    const title = "ZABOTTA";
    const [exitAnimation, setExitAnimation] = useState(false);

    useEffect(() => {
        const totalDuration = (title.length * 0.05 + 0.5) * 1000 + 500;
        const timer = setTimeout(() => {
            setExitAnimation(true);
        }, totalDuration);

        return () => clearTimeout(timer);
    }, [title.length]);

    return (
        <PreloaderContainer
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit={exitAnimation ? "exit" : undefined}
        >
            <AnimatedTitle title={title} />
        </PreloaderContainer>
    );    
};

export default Preloader;