import React from 'react'

const Cards = () => {
    return (
        <CardContainer id='Card'>
            <CardH1>My Projects</CardH1>
            <CardWrapper>
                <Card>
                    <CardIcon src={Icon1}/>
                    <CardH2>H2</CardH2>
                    <CardP>Paragraph</CardP>
                </Card>
            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
