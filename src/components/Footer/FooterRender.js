import React from "react";
import { FooterContainer, Footer, FooterLink, FooterWrapper, Logo, SocialMediaIcon, SocialMediaIcons, Copyright } from "./FooterStyled";

const FooterRender = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Logo</Logo>
                <Footer>
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/about">About</FooterLink>
                    <FooterLink href="/contact">Contact</FooterLink>
                    <FooterLink href="/blog">Blog</FooterLink>
                </Footer>
                <SocialMediaIcons>
                    <SocialMediaIcon href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
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
