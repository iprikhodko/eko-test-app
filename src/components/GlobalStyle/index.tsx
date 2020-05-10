import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Helvetica,Arial,sans-serif;
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  
  input, select, button {
    background: transparent;
    border: none;
    outline: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
