import React from 'react'
import { SkillContainer, SkillWrapper, SkillH1, Column, SkillH2, SkillUl, SkillLi} from './SkillElements'

const SkillSection = () => {
    return (
        <>
            <SkillContainer id='skills'>
                <SkillH1>Skills and Technologies</SkillH1>
                <SkillWrapper>
                        <Column>
                            <SkillH2>Languages & Frameworks</SkillH2>
                            <SkillUl>
                                <SkillLi>JavaScript</SkillLi>
                                <SkillLi>Python</SkillLi>
                                <SkillLi>React</SkillLi>
                                <SkillLi>HTML/CSS</SkillLi>
                                <SkillLi>Shell, Bash</SkillLi>
                            </SkillUl>
                        </Column>  
                        <Column>
                            <SkillH2>Tools</SkillH2>
                            <SkillUl>
                            <SkillLi>SQL</SkillLi>
                            <SkillLi>Prisma</SkillLi>
                            <SkillLi>CircleIO</SkillLi>
                            <SkillLi>Ubuntu, Vagrant</SkillLi>
                            </SkillUl>   
                        </Column>
                        <Column>
                            <SkillH2> Development Skills</SkillH2>
                            <SkillUl>
                                <SkillLi>Agile Development</SkillLi>
                                <SkillLi>Object Oriented Programming</SkillLi>
                                <SkillLi>Test Driven Development</SkillLi>
                                <SkillLi>Continuous Integration & Deployment</SkillLi>
                            </SkillUl>
                        </Column>
                </SkillWrapper>
            </SkillContainer>
        </>
    )
}

export default SkillSection
