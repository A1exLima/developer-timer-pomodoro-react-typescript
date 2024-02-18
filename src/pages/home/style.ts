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
  padding: 4rem 4rem 12.5rem;
  background-color: rgba(32, 32, 36, 0.9); 
  border-radius: .8rem;

  @media (max-width: 468px){
    margin: 4rem auto;
  }
`

export const Article = styled.article`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: fit-content;
  padding-top: 7.2rem;
`