import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: white;
  }

  main {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
  }
  
`;
export default GlobalStyles;
