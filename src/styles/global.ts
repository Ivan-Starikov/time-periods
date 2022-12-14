import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0 2rem;
    overflow: hidden;
    background-color: #e5e5e5;
    font-family: 'PT Sans', sans-serif;
    color: #42567a;
    user-select: none;
  }
`;

export default GlobalStyle;
