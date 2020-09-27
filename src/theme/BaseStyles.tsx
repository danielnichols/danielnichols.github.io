import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;
