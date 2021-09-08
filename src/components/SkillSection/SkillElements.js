import styled from 'styled-components'

export const SkillContainer = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    
    @media screen and (max-width: 800px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
export const SkillWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 24px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const SkillRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`
export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const SkillH2 = styled.h2`
    color: #010606;
    font-size: 2rem;
    text-align: center;
`

export const SkillH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 36px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const SkillUl = styled.ul`
    text-align: center;
    list-style-type: none;
`

export const SkillLi = styled.li`
    font-size: 1.5rem;
    color: #010606;
`