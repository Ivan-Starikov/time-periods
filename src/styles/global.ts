import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #e5e5e5;
  }
`;

export default GlobalStyle;
