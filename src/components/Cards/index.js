import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import { CardContainer, CardH1, CardH2, CardWrapper, Card, CardIcon, CardP } from './CardElements'

const Cards = () => {
    return (
        <CardContainer id='projects'>
            <CardH1>My Projects</CardH1>
            <CardWrapper>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>Typing some more words</CardH2>
                    <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque eleifend turpis elementum commodo. </CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>Typing some more words</CardH2>
                    <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque eleifend turpis elementum commodo. </CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>Typing some more words</CardH2>
                    <CardP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique neque eleifend turpis elementum commodo. </CardP>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
