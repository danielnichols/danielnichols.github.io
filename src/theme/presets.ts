import { theme } from './theme';

const textPresets = {
  title: {
    'font-size': theme.fontSizes[6],
    'font-weight': theme.fontWeights.bold,
    margin: '0px',
  },
  subtitle: {
    'font-size': theme.fontSizes[5],
    'font-weight': theme.fontWeights.normal,
    margin: '0px',
  },
  sectionHeading: {
    'font-size': theme.fontSizes[4],
    'font-weight': theme.fontWeights.semibold,
    margin: '0px',
  },
  sectionSubheading: {
    'font-size': theme.fontSizes[3],
    'font-weight': theme.fontWeights.normal,
    margin: '0px',
  },
  paragraph: {
    'font-size': theme.fontSizes[2],
    'font-weight': theme.fontWeights.light,
    margin: '0px',
  },
  button: {
    'font-size': theme.fontSizes[2],
    'font-weight': theme.fontWeights.semibold,
    margin: '0px',
  },
  imageCaption: {
    'font-size': theme.fontSizes[0],
    'font-weight': theme.fontWeights.semibold,
    margin: '0px',
  },
};

export const presets = { textPresets };
