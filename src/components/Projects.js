import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import {
    left1,
    left2,
    left3,
    middle1,
    middle2,
    middle3,
    right1,
    right2,
    right3,
} from "../ZabottaData/ZabottaData";

const ProjectPageContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: ${({ theme }) => theme.bgStone};
`;

const ProjectWrapper = styled.div`
width: 900px;
height: 900px;
padding: 50px;
`;

const ProjectTitle = styled.div`
    font-family: 'TitleFont', sans-serif;
    text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ProjectHeading = styled.h1`
    font-size: 100px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
`;


const ProjectParagraph = styled.p`
    margin: 0;
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
`;

const Plane = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    &:nth-child(1) {
        filter: brightness(0.7);
    }
    &:nth-child(2) {
        filter: brightness(0.6);
    }
    &:nth-child(3) {
        filter: brightness(0.5);
    }
`;

const StyledImage = styled.img.attrs((props) => ({
    src: props.src,
    alt: 'image',
    }))`
        position: absolute;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: ${(props) => props.width}px;
        left: ${(props) => props.left};
        top: ${(props) => props.top};
`;


const ProjectPage = () => {
    const leftRef = useRef(null);
    const middleRef = useRef(null);
    const rightRef = useRef(null);

    let requestAnimationFrameId = null;

    let x = 0;
    let y = 0;

    const easing = 0.05;
    const speed = 0.01;

    const mouseMotion = (e) => {
        const { movementX, movementY } = e;
        x += (movementX - x) * speed;
        y += (movementY - y) * speed;

        if(requestAnimationFrameId == null) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    }

    const lerp = (start, taraget, amount) => start * (1 - amount) + taraget * amount;

    const animate = () => {
        x = lerp(x, 0, easing);
        y = lerp(y, 0, easing);
        gsap.set(leftRef.current, { x: `+=${x}`, y: `+=${y}` });
        gsap.set(middleRef.current, { x: `+=${x * 0.5}`, y: `+=${y * 0.5}` });
        gsap.set(rightRef.current, { x: `+=${x * 0.25}`, y: `+=${y * 0.25}` });

        if(Math.abs(x) < 0.01) x = 0;
        if(Math.abs(y) < 0.01) y = 0;

        if(x !== 0 || y !== 0) {
            requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    }

    return (
        <ProjectPageContainer onMouseMove={(e) => {mouseMotion(e)}}>
            <ProjectWrapper>
            <Plane ref={leftRef}>
                <StyledImage src={left1} width={300} left="65%" top="70%" />
                <StyledImage src={left2} width={300} left="5%" top="65%" />
                <StyledImage src={left3} width={225} left="35%" top="5%" />
            </Plane>
            <Plane ref={middleRef}>
                <StyledImage src={middle1} width={250} left="5%" top="10%" />
                <StyledImage src={middle2} width={200} left="80%" top="5%" />
                <StyledImage src={middle3} width={225} left="60%" top="60%" />
            </Plane>
            <Plane ref={rightRef}>
                <StyledImage src={right1} width={150} left="65%" top="2.5%" />
                <StyledImage src={right2} width={200} left="40%" top="75%" />
                <StyledImage src={right3} width={200} left="20%" top="80%" />
            </Plane>
            </ProjectWrapper>
            <ProjectTitle>
                <ProjectHeading>Zobotta Proudly Presents</ProjectHeading>
                {/* <ProjectParagraph>Woodwrking Porjects</ProjectParagraph> */}
            </ProjectTitle>
        </ProjectPageContainer>
    );      
}

export default ProjectPage