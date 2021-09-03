import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    justify-self: start;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: left;
    margin-bottom: 16px;
    font-weight: bold;
`
export const Logo = styled.img`
  width: 75px;
  height: 75px;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    justify-self: center;
` 

export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    justify-content: space-between;
    font-size: 24px;
`