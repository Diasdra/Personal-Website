import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarMenu ,SidebarLink , SideBtnWrap ,SidebarRoute} from './SidebarElements'



const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="Skills" onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to="Portfolio" onClick={toggle}>Portfolio</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
