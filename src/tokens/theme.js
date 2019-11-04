import breakpoints from './breakpoints';
import timingFunctions from './timingFunctions';

import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import textStyles from './textStyles';
import densities from './densities';

import boxShadows from './boxShadows';

import space from './space';
import radii from './radii';

import { white, black, focus, grayscale, colour } from './palettes';

const lightSwatch = {
  background: `var(--c-background, ${white})`,
  foreground: `var(--c-foreground, ${grayscale[0]})`,
  
  grayscale: [...grayscale],
};

const secondary = { ...colour };
delete secondary.lightGrayscale;
delete secondary.darkGrayscale;

// Construct a base colors object to use in a theme.
const baseColors = {
  // Primary palettes
  black,
  white,
  
  ...secondary,

  // Guidance palettes
  guidance: {
    info: [colour.blues[0], colour.blues[8]],
    error: [colour.reds[0], colour.reds[8]],
    warning: [colour.oranges[0], colour.oranges[8]],
    success: [colour.greens[0], colour.greens[8]],
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
  densities,
};

const lightTheme = Object.assign({}, baseTheme, { colors: lightColors });
export default lightTheme;
