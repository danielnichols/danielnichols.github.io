import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
  }
`;
