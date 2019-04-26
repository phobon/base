import breakpoints from './breakpoints';
import timingFunctions from './timingFunctions';

import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import textStyles from './textStyles';

import boxShadows from './boxShadows';

import space from './space';
import radii from './radii';

import { white, black, focus, grayscale, colour } from './palettes';

const lightSwatch = {
  background: `var(--c-background, ${white})`,
  foreground: `var(--c-foreground, ${grayscale[0]})`,
  
  grayscale: [...grayscale],
};

// Construct a base colors object to use in a theme.
const baseColors = {
  // Primary palettes
  black,
  white,
  accent: [...colour.accent],

  // Secondary palettes
  blues: [...colour.blues],
  reds: [...colour.reds],
  oranges: [...colour.oranges],
  greens: [...colour.greens],
  purples: [...colour.purples],

  // Guidance palettes
  guidance: {
    info: [colour.blues[0], colour.blues[9]],
    error: [colour.reds[0], colour.reds[9]],
    warning: [colour.oranges[0], colour.oranges[9]],
    success: [colour.greens[0], colour.greens[9]],
    focus,
  },
};

const lightColors = Object.assign({}, baseColors, lightSwatch);

// Construct a base theme with values we want.
const baseTheme = {
  breakpoints,
  timingFunctions,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  boxShadows,
  space,
  textStyles,
};

const lightTheme = Object.assign({}, baseTheme, { colors: lightColors });
export default lightTheme;
