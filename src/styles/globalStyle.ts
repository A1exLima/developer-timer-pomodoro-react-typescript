import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --font-roboto: "Roboto", sans-serif;
    --font-robotoMono: "Roboto Mono", monospace;

    @media (max-width: 768px) {
      font-size: 52.5%;
    }
  }

  body {
    background: ${({theme})=> theme.COLORS.GRAY1};
    color: ${({theme})=> theme.COLORS.GRAY7};
    -webkit-font-smoothing: antialiased;
  }

  input:focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${({theme})=> theme.COLORS.BLUE_DARK};
    border-radius: 2px;

    @media (max-width: 468px) {
      box-shadow: none;
    }
  }

  :focus {
    outline: transparent;
  }

  body, input, button {
    font-size: 1.6rem;
    font-family: var(--font-roboto);
    font-weight: 400;
    line-height: 1.6;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    
    @media (max-width: 768px) {
      width: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    border-radius: 8px;
    
  }
`