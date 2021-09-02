import styled from 'styled-components'

export const CardContainer = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const CardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 24px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const CardLink = styled.a`
    text-decoration: none;
`

export const Card = styled.div`
    background: #8686df;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const CardIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const CardH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 36px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const CardH2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const CardP = styled.p`
    color: #fff;
    font-size: 1rem;
    text-align: center;
`
