import hsluv from 'hsluv';

export const white = 'hsl(0, 0%, 100%)';
export const black = 'hsl(0, 0%, 0%)';
export const transparent = 'hsla(0, 0%, 0%, 0)';
export const focus = 'hsl(211, 97%, 61%)';

const colourMap = c => `hsl(${c[0]}, ${c[1]}%, ${c[2]}%)`;
const hsluvMap = c => hsluv.hsluvToHex(c);

const hues = {
  lightGrayscale: 240,
  darkGrayscale: 216,
  blues: 258,
  cyans: 232,
  greens: 127,
  yellows: 69,
  oranges: 39,
  reds: 12,
  purples: 288,
  violets: 272,
};

const baseSaturations = [
  95,
  94,
  92,
  89,
  86,
  81,
  74,
  66,
  57,
  47,
];

const baseLightnesses = [
  18,
  27,
  36,
  45,
  54,
  62,
  71,
  80,
  89,
  98,
];

const saturations = {
  lightGrayscale: [
    29,// 10,
    25,// 10,
    21,// 9,
    16,// 8,
    12,// 6,
    9,// 7,
    6,// 9,
    4,// 7,
    3,// 7,
    3,// 5,
  ],
  darkGrayscale: [
    3,
    3,
    4,
    6,
    9,
    12,
    16,
    21,
    25,
    29,
  ],
};

const lightnesses = {
  darkGrayscale: [
    91,
    88,
    81,
    72,
    60,
    47,
    36,
    28,
    24,
    22,
  ],
};

const hsl = (key, colour) => {
  const c = [];
  for (let i = 0; i < baseLightnesses.length; i++) {
    const l = lightnesses[key] ? lightnesses[key][i] : baseLightnesses[i];
    const s = saturations[key] ? saturations[key][i] : baseSaturations[i];
    c.push([colour, s, l]);
  }

  return c;
}

// Map each of the palettes
const paletteMapper = () => {
  const p = {};
  Object.keys(hues).forEach(k => {
    p[k] = hsl(k, hues[k]).map(hsluvMap);
  });

  return p;
};
const hsluvColours = paletteMapper();

// https://www.colorbox.io/#steps=10#hue_start=220#hue_end=215#hue_curve=easeOutQuad#sat_start=0#sat_end=15#sat_curve=easeInOutSine#sat_rate=126#lum_start=100#lum_end=19#lum_curve=easeInOutSine#minor_steps_map=none
const lightGrayscaleRaw = [
  [213, 10, 17],
  [213, 10, 20],
  [215, 9, 25],
  [214, 8, 35],
  [216, 6, 49],
  [217, 7, 65],
  [220, 9, 79],
  [216, 10, 90],
  [240, 7, 97],
  [240, 5, 99],
];
const lightGrayscale = lightGrayscaleRaw.map(colourMap);
const lightGrayscaleHsluv = lightGrayscaleRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=10#hue_start=219#hue_end=216#hue_curve=easeOutQuad#sat_start=27#sat_end=8#sat_curve=easeInSine#sat_rate=100#lum_start=25#lum_end=95#lum_curve=easeInOutSine#minor_steps_map=none
const darkGrayscaleRaw = [
  [215, 42, 91],
  [216, 40, 88],
  [217, 33, 81],
  [217, 24, 72],
  [215, 17, 60],
  [217, 13, 47],
  [217, 14, 36],
  [218, 15, 28],
  [217, 15, 24],
  [220, 16, 22],
];
const darkGrayscale = darkGrayscaleRaw.map(colourMap);
const darkGrayscaleHsluv = darkGrayscaleRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=9#hue_start=174#hue_end=175#hue_curve=easeInOutSine#sat_start=93#sat_end=19#sat_curve=easeInSine#sat_rate=107#lum_start=29#lum_end=99#lum_curve=linear#minor_steps_map=0
const greensRaw = [
  [174, 100, 15],
  [174, 98, 17],
  [174, 98, 19],
  [174, 89, 25],
  [174, 76, 31],
  [175, 62, 39],
  [174, 46, 50],
  [175, 52, 62],
  [175, 61, 75],
  [175, 45, 89],
];
const greens = greensRaw.map(colourMap);
// const greensHsluv = greensRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=9#hue_start=28#hue_end=33#hue_curve=easeInOutSine#sat_start=100#sat_end=26#sat_curve=easeInQuad#sat_rate=100#lum_start=73#lum_end=96#lum_curve=easeInExpo#minor_steps_map=0
const orangesRaw = [
  [28, 100, 36],
  [28, 98, 40],
  [28, 96, 45],
  [29, 90, 49],
  [30, 88, 52],
  [30, 89, 57],
  [32, 88, 62],
  [32, 86, 69],
  [33, 82, 76],
  [33, 76, 84],
];
const oranges = orangesRaw.map(colourMap);
// const orangesHsluv = orangesRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=9#hue_start=8#hue_end=9#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=53#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const redsRaw = [
  [8, 100, 26],
  [8, 99, 29],
  [8, 97, 31],
  [8, 88, 37],
  [8, 76, 45],
  [9, 68, 53],
  [9, 73, 62],
  [9, 76, 71],
  [10, 74, 80],
  [9, 68, 88],
];
const reds = redsRaw.map(colourMap);
// const redsHsluv = redsRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=9#hue_start=198#hue_end=200#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=29#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const bluesRaw = [
  [238, 100, 15],
  [238, 100, 18],
  [238, 100, 21],
  [238, 100, 30],
  [238, 100, 39],
  [238, 100, 49],
  [238, 100, 59],
  [238, 80, 70],
  [238, 100, 80],
  [238, 100, 88],
];
const blues = bluesRaw.map(colourMap);
// const bluesHsluv = bluesRaw.map(hsluvMap);

// https://www.colorbox.io/#steps=9#hue_start=284#hue_end=287#hue_curve=easeInOutSine#sat_start=57#sat_end=21#sat_curve=easeInQuad#sat_rate=100#lum_start=32#lum_end=98#lum_curve=easeInQuad#minor_steps_map=0
const purplesRaw = [
  [283, 40, 23],
  [284, 39, 28],
  [284, 39, 32],
  [284, 37, 43],
  [285, 39, 53],
  [285, 51, 62],
  [286, 61, 70],
  [287, 70, 76],
  [287, 77, 83],
  [288, 65, 88],
];
const purples = purplesRaw.map(colourMap);
// const purplesHsluv = purplesRaw.map(hsluvMap);

const accent = blues.map((g, i) => `var(--c-accent-${i}, ${g})`)

export const grayscale = lightGrayscale.map((g, i) => `var(--c-grayscale-${i}, ${g})`);

export const colour = {
  accent, lightGrayscale, darkGrayscale,
  greens, oranges, reds, blues, purples,
};
export const colourHsluv = {
  lightGrayscale: lightGrayscaleHsluv,
  darkGrayscale: darkGrayscaleHsluv,
  colours: { ...hsluvColours },
};

const palettes = ['greens', 'oranges', 'reds', 'blues', 'purples'];

export const randomA11y = () => {
  const r = Math.floor(Math.random() * palettes.length);
  const palette = palettes[r];
  return [
    colour[palette][0],
    colour[palette][9],
  ];
};

export const randomColor = () => {
  const r = Math.floor(Math.random() * palettes.length);
  const palette = palettes[r];

  const item = Math.floor(Math.random() * palette.length);
  return colour[palette][item];
};

export const themeDefinitions = {
  light: {
    foreground: 'hsl(228, 34%, 11%)',
    background: 'hsl(0, 0%, 100%)',
    grayscale: [...colour.lightGrayscale],
  },
  dark: {
    foreground: 'hsl(220, 62%, 95%)',
    background: 'hsl(219, 12%, 18%)',
    grayscale: [...colour.darkGrayscale],
  },
};