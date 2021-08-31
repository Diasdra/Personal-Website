import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, 
    FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
 
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Links</FooterLink>
                            <FooterLink to='/signin'>Links</FooterLink>
                            <FooterLink to='/signin'>Links</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            jw
                        </SocialLogo>
                        <WebsiteRights>jw © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                                <FaLinkedin />
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
