import styled from 'styled-components'

export const SkillContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const SkillWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and  (max-width: 768px) {
    height: 100vh;
  }
`
export const SkillRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const TextWrapper = styled.p`
    color: #010606;
    font-size: 1rem;
    text-align: center;
`