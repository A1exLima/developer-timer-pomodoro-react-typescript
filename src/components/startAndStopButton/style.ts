import { styled } from "styled-components"

interface CssButtonProps {
  $status: boolean
}

export const Button = styled.button<CssButtonProps>`
  cursor: pointer;
  width: 100%;
  height: 6.4rem;
  background-color: ${({theme, $status})=> !$status ? theme.COLORS.BLUE : theme.COLORS.RED};
  border: none;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  color: ${({theme})=> theme.COLORS.GRAY7};
  font-weight: 600;

  transition: all .4s ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({theme, $status})=> !$status ? theme.COLORS.BLUE_DARK : theme.COLORS.RED_DARK};
    color: ${({theme})=> theme.COLORS.GRAY6};

    > svg { 
      color: ${({theme})=> theme.COLORS.GRAY6};
    }
  }

  > svg {
    color: ${({theme})=> theme.COLORS.GRAY7};
    font-size: 2.4rem;

    transition: color .4s ease-in-out;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
` 