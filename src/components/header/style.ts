import { styled } from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > a {
    display: flex;
    > img {
      height: 6rem;

      animation: rotate 60s linear infinite;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  > ul {
    list-style: none;
    display: flex;
    gap: 2rem;

   > li {
    display: flex;
    cursor: pointer;

    > svg {
      font-size: 3rem;
      color: ${({theme})=> theme.COLORS.BLUE};
    }

    transition: transform .4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
   }

   > li:last-child {
    > svg {
      color: ${({theme})=> theme.COLORS.GRAY7};
    }
   }
  }
`