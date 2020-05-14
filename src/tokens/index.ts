import { white, black, focus, grayscale, colour } from './palettes';

const boxShadows: string[] = [
  '0 1px 3px hsla(0, 0%, 0%, .12), 0 1px 2px hsla(0, 0%, 0%, .24)',
  '0 3px 6px hsla(0, 0%, 0%, .15), 0 2px 4px hsla(0, 0%, 0%, .12)',
  '0 10px 20px hsla(0, 0%, 0%, .15), 0 3px 6px hsla(0, 0%, 0%, .10)',
  '0 15px 25px hsla(0, 0%, 0%, .15), 0 5px 10px hsla(0, 0%, 0%, .2)',
  '0 20px 40px hsla(0, 0%, 0%, .2)',
];

const breakpoints: string[] = ['48em', '60em', '80em'];

const densities: { [key: string]: number } = {
  compact: 32,
  normal: 40,
  spacious: 48,
};

const fonts: { [key: string]: string } = {
  default: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  monospace: 'SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',
};

const fontSizes: number[] = [
  12,   // 0
  14,   // 1: text
  16,   // 2
  18,   // 3: h6
  20,   // 4: h5
  24,   // 5: h4
  30,   // 6: h3
  36,   // 7: h2
  48,   // 8: h1
  60,   // 9
  72,   // 10
];

const fontWeights: { [key: string]: number } = {
  light: 400,
  normal: 500,
  bold: 700,
};

const letterSpacings: { [key: string]: string } = {
  normal: 'normal',
  caps: '0.25em',
};

const lineHeights: number[] = [
  1,      // Headings
  1.125,
  1.25,
  1.4,
  1.5,    // Copy
];

const radii: (number | string)[] = [
  0, 1, 2, 4, 8, 16, '50%',
];

const space: number[] = [
  0,   // 0
  4,   // 1
  8,   // 2
  16,  // 3
  24,  // 4
  32,  // 5
  48,  // 6
  64,  // 7
  96,  // 8
  128, // 9
  192, // 10
  256, // 11
  384, // 12
  512, // 13
  640, // 14
];

// A set of common text styles that can be consumed by a Text component.
const textStyles: { [key: string]: { [key: string]: string } } = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  monospace: {
    fontFamily: '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;',
  },
  italic: {
    fontStyle: 'italic',
  },
};

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

export const theme = { ...baseTheme, ...{ colors: lightColors }};

export { randomA11y, randomColor } from './palettes';