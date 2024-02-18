import { styled } from "styled-components"

interface ContProps {
  $disabled: boolean
}

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5.8rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: .8rem;

  @media (max-width: 768px){
    flex-direction: column;
    gap: 2rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    > input {
      outline: none;
      min-width: 27.5rem;
      height: 4rem;
      border: none;
      padding: 1rem;
      background-color: ${({theme})=> theme.COLORS.GRAY0};
      border-radius: .5rem;
      color: ${({theme})=> theme.COLORS.GRAY7};
      font-size: 1.8rem;

      @media (max-width: 768px){
        width: 100%;
        min-width: 0;
      }

      transition: all .4s ease-in-out;
      
      &::placeholder {
        color: ${({theme})=> theme.COLORS.GRAY4};
        font-weight: 600;
        font-size: clamp(1.3rem, 2.8vw, 1.8rem);
        text-align: center;
        opacity: .5;
      }
    }

    > p  {
      color: ${({theme})=> theme.COLORS.GRAY7};
      font-size: 1.8rem;
      line-height: 1.6;
      white-space: nowrap;
    }
  }
`

export const Cont = styled.div<ContProps>`
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .5rem;
  background-color: ${({theme})=> theme.COLORS.GRAY0};
  border-radius: .5rem;

  > p {
    color: ${({theme})=> theme.COLORS.GRAY7};
    font-size: 1.8rem;
    font-weight: 600;
    user-select: none;
    padding-top: .1rem;
    opacity: ${({$disabled}) => $disabled ? .5 : 1};
  }

  > button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${({theme})=> theme.COLORS.GRAY7};
    flex: 1;
    padding-top: .4rem;

    transition: transform .3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }

    > svg {
      font-size: 1.6rem;
    }
  }


`