import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { presets } from './presets';
import { theme } from './theme';

Object.assign(theme, presets);

const ThemeProvider = props => (
  <StyledThemeProvider theme={ theme }>
    {props.children}
  </StyledThemeProvider>
);

export { ThemeProvider };
