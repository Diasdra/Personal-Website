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
                    <CardH2>This Website</CardH2>
                    <CardP>Written in JavaScipt with React and ReactScroll for Animations. This is my personal website that I used as a way to practise React.</CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>Trackify - An Inventory Solution</CardH2>
                    <CardP>A CRUD application made with Agile Methodology. Utilizes NodeJs and Prisma to manage a SQLite database with HTTP requests</CardP>
                </Card>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>Work'in Title</CardH2>
                    <CardP>Can you capture the birds and find your way home in time? A Maze game built with Python and PyGame. </CardP>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
