import { colors as colorPrimitives, typography, shadows as shadowPrimitives } from './primitives';
import { createFontSet } from './utils';

const {
  black,
  white,
  greys,
  blues,
  greens,
  yellows,
  oranges,
  reds,
  pinks,
  purples,
} = colorPrimitives;

const colors = {
  black,
  white,

  greys,
  grey: greys[5],

  reds,
  greens,
  blues,
  red: reds[5],
  green: greens[5],
  blue: blues[5],

  yellows,
  oranges,
  yellow: yellows[5],
  orange: oranges[5],

  pinks,
  purples,
  pink: pinks[5],
  purple: purples[5],

  state: {
    error: reds[6],
    warning: yellows[5],
    info: blues[6],
    success: greens[5],
    unknown: greys[5],
  },

};

const fonts = {
  normal: createFontSet(['Quicksand', 'Arial', 'Helvetica', 'sans-serif']),
  mono: createFontSet(['Courier New', 'Courier', 'monospace']),
};
const { fontSizes } = typography;
const fontWeights = {
  xlight: typography.fontWeights[1],
  light: typography.fontWeights[3],
  normal: typography.fontWeights[4],
  semibold: typography.fontWeights[5],
  bold: typography.fontWeights[7],
  xbold: typography.fontWeights[9],
};
const { lineHeights } = typography;
const { letterSpacings } = typography;

const shadows = {
  ...shadowPrimitives,
  xsmall: shadowPrimitives[1],
  small: shadowPrimitives[2],
  medium: shadowPrimitives[4],
  large: shadowPrimitives[6],
  xlarge: shadowPrimitives[8],
};
const borders = {};
const borderWidths = [0, '1px'];
const borderStyles = {};
const radii = [
  '0',
  '2px',
  '5px',
  '1000px',
];

const sizes = {
  small: '480px',
  medium: '768px',
  large: '1280px',
  xlarge: '2560px',
};
const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '64px',
  '80px',
  '96px',
  '112px',
  '128px',
];
const zIndices = {};

/**
 * 0-768: mobile/tablet
 * 768-1280: laptop
 * 1280-2560: large screen
 * 2560+: extra large/4k
 */
const breakpoints = ['0px', '768px', '1280px', '2560px'];

const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  shadows,
  borders,
  borderWidths,
  borderStyles,
  radii,
  sizes,
  space,
  zIndices,
  breakpoints,
};

export { theme };
