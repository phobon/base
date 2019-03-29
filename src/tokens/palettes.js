export const white = 'hsl(0, 0%, 100%)';
export const black = 'hsl(0, 0%, 0%)';
export const transparent = 'hsla(0, 0%, 0%, 0)';
export const focus = 'hsl(211, 97%, 61%)';

// https://www.colorbox.io/#steps=8#hue_start=220#hue_end=230#hue_curve=easeOutQuad#sat_start=3#sat_end=15#sat_curve=easeInOutSine#sat_rate=126#lum_start=99#lum_end=19#lum_curve=easeInOutSine#minor_steps_map=none
const lightGrayscale = [
  'hsl(227, 10%, 17%)',
  'hsl(229, 10%, 21%)',
  'hsl(231, 8%, 30%)',
  'hsl(229, 7%, 46%)',
  'hsl(226, 10%, 66%)',
  'hsl(223, 16%, 82%)',
  'hsl(224, 31%, 93%)',
  'hsl(220, 60%, 97%)',
];
// https://www.colorbox.io/#steps=8#hue_start=220#hue_end=230#hue_curve=easeOutQuad#sat_start=27#sat_end=5#sat_curve=easeInOutSine#sat_rate=126#lum_start=31#lum_end=93#lum_curve=easeInOutSine#minor_steps_map=none
const darkGrayscale = [
  'hsl(228, 29%, 90%)',
  'hsl(229, 25%, 86%)',
  'hsl(230, 20%, 77%)',
  'hsl(228, 16%, 64%)',
  'hsl(227, 13%, 48%)',
  'hsl(225, 17%, 35%)',
  'hsl(221, 20%, 28%)',
  'hsl(215, 22%, 26%)',
];

// https://www.colorbox.io/#steps=7#hue_start=174#hue_end=175#hue_curve=easeInOutSine#sat_start=93#sat_end=17#sat_curve=easeInSine#sat_rate=107#lum_start=29#lum_end=96#lum_curve=linear#minor_steps_map=0
const greens = [
  'hsl(174, 100%, 15%)',
  'hsl(174, 96%, 18%)',
  'hsl(175, 94%, 21%)',
  'hsl(174, 81%, 28%)',
  'hsl(174, 61%, 39%)',
  'hsl(174, 45%, 53%)',
  'hsl(175, 50%, 69%)',
  'hsl(175, 69%, 87%)',
];
// https://www.colorbox.io/#steps=7#hue_start=28#hue_end=33#hue_curve=easeInOutSine#sat_start=93#sat_end=26#sat_curve=easeInQuad#sat_rate=100#lum_start=53#lum_end=96#lum_curve=easeInExpo#minor_steps_map=0
const oranges = [
  'hsl(28, 88%, 28%)',
  'hsl(28, 84%, 37%)',
  'hsl(28, 82%, 47%)',
  'hsl(29, 84%, 53%)',
  'hsl(30, 87%, 59%)',
  'hsl(32, 86%, 66%)',
  'hsl(33, 83%, 75%)',
  'hsl(33, 76%, 84%)',
];
// https://www.colorbox.io/#steps=7#hue_start=8#hue_end=9#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=29#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const reds = [
  'hsl(8, 100%, 15%)',
  'hsl(8, 98%, 19%)',
  'hsl(8, 95%, 24%)',
  'hsl(9, 81%, 36%)',
  'hsl(8, 61%, 49%)',
  'hsl(9, 67%, 63%)',
  'hsl(9, 72%, 76%)',
  'hsl(9, 68%, 88%)',
];
// https://www.colorbox.io/#steps=7#hue_start=198#hue_end=200#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=29#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const blues = [
  'hsl(198, 100%, 15%)',
  'hsl(198, 98%, 19%)',
  'hsl(198, 95%, 24%)',
  'hsl(198, 81%, 36%)',
  'hsl(199, 61%, 49%)',
  'hsl(199, 67%, 63%)',
  'hsl(200, 72%, 76%)',
  'hsl(200, 68%, 88%)',
];
// https://www.colorbox.io/#steps=7#hue_start=284#hue_end=287#hue_curve=easeInOutSine#sat_start=50#sat_end=21#sat_curve=easeInQuad#sat_rate=100#lum_start=32#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const purples = [
  'hsl(284, 33%, 24%)',
  'hsl(285, 33%, 30%)',
  'hsl(284, 32%, 37%)',
  'hsl(285, 31%, 51%)',
  'hsl(285, 45%, 63%)',
  'hsl(287, 58%, 72%)',
  'hsl(287, 67%, 80%)',
  'hsl(287, 72%, 86%)',
];

const accent = blues.map((g, i) => `var(--c-accent-${i}, ${g})`)

export const grayscale = lightGrayscale.map((g, i) => `var(--c-grayscale-${i}, ${g})`);

export const colour = {
  accent, lightGrayscale, darkGrayscale,
  greens, oranges, reds, blues, purples,
};

const palettes = ['greens', 'oranges', 'reds', 'blues', 'purples'];

export const randomA11y = () => {
  const r = Math.floor(Math.random() * palettes.length);
  const palette = palettes[r];
  return [
    colour[palette][0],
    colour[palette][5],
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
    foreground: 'hsl(228, 62%, 95%)',
    background: 'hsl(221, 20%, 22%)',
    grayscale: [...colour.darkGrayscale],
  },
};