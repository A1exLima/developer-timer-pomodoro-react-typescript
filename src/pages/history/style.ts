import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 468px){
    padding: 1.5rem;
  }
`

export const Main = styled.main`
  max-width: 112rem;
  margin: 8rem auto;
  padding: 5rem 9.3rem 6.7rem;
  background-color: rgba(32, 32, 36, 0.9); 
  border-radius: .8rem;

  @media (max-width: 468px){
    margin: 4rem auto;
  }
`

export const Article = styled.article`
  width: 100%;
  display: flex;
`

export const Content = styled.div`
  width: 100%;
  padding-top: 5rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.6;
    color: ${({theme})=> theme.COLORS.GRAY7};
  }
`

export const HistoryBox = styled.section`
  width: 100%;
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1.3fr 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 2.4rem;
  background-color: ${({theme})=> theme.COLORS.GRAY3};
  border-top-left-radius: .8rem;
  border-top-right-radius: .8rem;
  margin: 3.2rem 0 .4rem;
`

export const TableContent = styled.div`
  overflow: auto;
  height: 41rem;
  border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY3};
`