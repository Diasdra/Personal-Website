import React , {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, 
    NavItem, NavLinks, NavBtn, NavBtnLink, Logo} from './NavbarElements';
import WhiteLogo from '../../images/logo-2.svg'
import {IconContext} from 'react-icons/lib'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } 
        else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <Logo src={WhiteLogo}></Logo>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                        <   NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-79}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-79}>Skills</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav> 
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
