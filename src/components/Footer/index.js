import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa'
import WhiteLogo from '../../images/logo-2.svg'
import {FooterContainer, FooterWrap, Logo, LogoP, SocialMedia, SocialMediaWrap, SocialLogo, SocialP, EmailP, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements'
 
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Logo src={WhiteLogo}></Logo>
                            <LogoP>Jennie Wu</LogoP>
                        </SocialLogo>
                        <WebsiteRights>jw © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialP>
                                Contact Me:
                            </SocialP>
                            <SocialIconLink href="https://www.linkedin.com/in/jennie-jh-wu/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.github.com/Diasdra/" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="mailto: Jenniewu888@hotmail.com" target="blank" aria-label="Email">
                                <FaMailBulk /> 
                                <EmailP>Jenniewu888@hotmail.com</EmailP>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
