import { styled } from "styled-components"

export const Container = styled.section`
  width: 100%;  
`

export const BoxTimer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  padding-bottom: 5.62rem;
  user-select: none;

  @media (max-width: 768px){
    gap: clamp(1rem, 2vw, 2.2rem);      
  }

  > li {
    width: 12.8rem;
    height: 19.8rem;
    background-color: ${({theme})=> theme.COLORS.GRAY0};
    border-radius: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--font-robotoMono);
    font-weight: 600;
    font-size: 16rem;
    color: ${({theme})=> theme.COLORS.GRAY7};

    @media (max-width: 768px){
      width: clamp(6.8rem, 15vw, 12.8rem);
      height: clamp(9.8rem,22vw, 19.8rem);
      font-size: clamp(8rem, 18vw, 16rem);
    }
  }

  .point {
    width: 6.5rem;
    height: 19.8rem;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 7rem;
      color: ${({theme})=> theme.COLORS.BLUE};
    }

    @media (max-width: 768px){
      width: 2.5rem;
      
      > svg {
        font-size: 5rem;
      }
    }

    @media (max-width: 468px){
      > svg {
        font-size: 4rem;
      }
    }
  }
`

