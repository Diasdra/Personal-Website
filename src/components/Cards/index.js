import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import ReactIcon from '../../images/react-1.svg'
import InventoryIcon from '../../images/inventory.svg'
import CatHorse from '../../images/cathorse.png'
import { CardContainer, CardH1, CardH2, CardWrapper, Card, CardLink, CardIcon, CardP } from './CardElements'

const Cards = () => {
    return (
        <CardContainer id='projects'>
            <CardH1>My Projects</CardH1>
            <CardWrapper>
                <CardLink href="https://github.com/Diasdra/Personal-Website" target='_blank'>
                    <Card>
                        <CardIcon src={ReactIcon}/>
                        <CardH2>This Website</CardH2>
                        <CardP>Written in JavaScipt with React and ReactScroll for animations. This is my personal website that I used as a way to practise React.</CardP>
                    </Card>
                </CardLink>
                <CardLink href="https://github.com/Diasdra/Trackify" target='_blank'>
                    <Card>
                        <CardIcon src={InventoryIcon}/>
                        <CardH2>Trackify - An Inventory Solution</CardH2>
                        <CardP>A CRUD application made with Agile Methodology. Utilizes NodeJs and Prisma to manage a SQLite database with HTTP requests</CardP>
                    </Card>
                </CardLink>
                <CardLink href="https://github.com/UnknownTy/Workin-title" target='_blank'>
                    <Card>
                        <CardIcon src={CatHorse}/>
                        <CardH2>Work'in Title</CardH2>
                        <CardP>Can you capture the birds and find your way home in time? A maze game built with Python and PyGame. </CardP>
                    </Card>
                </CardLink>
            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
