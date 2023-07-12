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

  button,
  a {
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
  }

  *::selection {
    background-color: ${({ theme }) => theme.colors.elementsBackground};
  }

  @media (min-width: 1000px) {
    html {
      font-size: 18px;
    }
  }
  
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sticky {
    width: 100%;
    position: sticky;
    top: 1rem;
    z-index: 500;
  }
`;
export default GlobalStyles;
