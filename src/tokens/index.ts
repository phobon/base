import { white, black, focus, grayscale, colour } from './palettes';
import {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  boxShadows,
  space,
  textStyles,
  densities
} from './tokens';

const lightSwatch: { [key: string]: string | object[] | object } = {
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

const lightColors = { ...baseColors, ...lightSwatch };

// Construct a base theme with values we want.
const baseTheme = {
  breakpoints,
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

export const theme = { ...baseTheme, ...{ colors: lightColors }};
export { randomA11y, randomColor } from './palettes';