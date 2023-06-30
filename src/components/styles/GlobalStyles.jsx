import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    width: 90%;
    margin: 1rem auto 1rem auto
  }
  
`;
export default GlobalStyles;
