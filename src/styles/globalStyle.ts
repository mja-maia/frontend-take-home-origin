import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
    color: #1E2A32;
  }
  body{
    font-size: 16px;
    font-weight: 400;
    text-rendering: optimizeLegibility !important;
    -webkit-smoothing: antialiased !important;
    font-family: 'Work Sans', sans-serif;
    button{
      cursor: pointer;
      outline:none;
    }
  }
`;

export default globalStyles;
