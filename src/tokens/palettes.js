export const white = 'hsl(0, 0%, 100%)';
export const black = 'hsl(0, 0%, 0%)';
export const transparent = 'hsla(0, 0%, 0%, 0)';
export const focus = 'hsl(211, 97%, 61%)';

// https://www.colorbox.io/#steps=10#hue_start=220#hue_end=215#hue_curve=easeOutQuad#sat_start=0#sat_end=15#sat_curve=easeInOutSine#sat_rate=126#lum_start=100#lum_end=19#lum_curve=easeInOutSine#minor_steps_map=none
const lightGrayscale = [
  'hsl(213, 10%, 17%)',
  'hsl(213, 10%, 20%)',
  'hsl(215, 9%, 25%)',
  'hsl(214, 8%, 35%)',
  'hsl(216, 6%, 49%)',
  'hsl(217, 7%, 65%)',
  'hsl(220, 9%, 79%)',
  'hsl(216, 10%, 90%)',
  'hsl(240, 7%, 97%)',
  'hsl(240, 5%, 99%)',
];
// https://www.colorbox.io/#steps=10#hue_start=219#hue_end=216#hue_curve=easeOutQuad#sat_start=27#sat_end=8#sat_curve=easeInSine#sat_rate=100#lum_start=25#lum_end=95#lum_curve=easeInOutSine#minor_steps_map=none
const darkGrayscale = [
  'hsl(215, 42%, 91%)',
  'hsl(216, 40%, 88%)',
  'hsl(217, 33%, 81%)',
  'hsl(217, 24%, 72%)',
  'hsl(215, 17%, 60%)',
  'hsl(217, 13%, 47%)',
  'hsl(217, 14%, 36%)',
  'hsl(218, 15%, 28%)',
  'hsl(217, 15%, 24%)',
  'hsl(220, 16%, 22%)',
];

// https://www.colorbox.io/#steps=9#hue_start=174#hue_end=175#hue_curve=easeInOutSine#sat_start=93#sat_end=19#sat_curve=easeInSine#sat_rate=107#lum_start=29#lum_end=99#lum_curve=linear#minor_steps_map=0
const greens = [
  'hsl(174, 100%, 15%)',
  'hsl(174, 98%, 17%)',
  'hsl(174, 98%, 19%)',
  'hsl(174, 89%, 25%)',
  'hsl(174, 76%, 31%)',
  'hsl(175, 62%, 39%)',
  'hsl(174, 46%, 50%)',
  'hsl(175, 52%, 62%)',
  'hsl(175, 61%, 75%)',
  'hsl(175, 89%, 89%)',
];
// https://www.colorbox.io/#steps=9#hue_start=28#hue_end=33#hue_curve=easeInOutSine#sat_start=100#sat_end=26#sat_curve=easeInQuad#sat_rate=100#lum_start=73#lum_end=96#lum_curve=easeInExpo#minor_steps_map=0
const oranges = [
  'hsl(28, 100%, 36%)',
  'hsl(28, 98%, 40%)',
  'hsl(28, 96%, 45%)',
  'hsl(29, 90%, 49%)',
  'hsl(30, 88%, 52%)',
  'hsl(30, 89%, 57%)',
  'hsl(32, 88%, 62%)',
  'hsl(32, 86%, 69%)',
  'hsl(33, 82%, 76%)',
  'hsl(33, 76%, 84%)',
];
// https://www.colorbox.io/#steps=9#hue_start=8#hue_end=9#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=53#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const reds = [
  'hsl(8, 100%, 26%)',
  'hsl(8, 99%, 29%)',
  'hsl(8, 97%, 31%)',
  'hsl(8, 88%, 37%)',
  'hsl(8, 76%, 45%)',
  'hsl(9, 68%, 53%)',
  'hsl(9, 73%, 62%)',
  'hsl(9, 76%, 71%)',
  'hsl(10, 74%, 80%)',
  'hsl(9, 68%, 88%)',
];
// https://www.colorbox.io/#steps=9#hue_start=198#hue_end=200#hue_curve=easeInOutSine#sat_start=100#sat_end=17#sat_curve=easeInSine#sat_rate=100#lum_start=29#lum_end=96#lum_curve=easeInQuad#minor_steps_map=0
const blues = [
  'hsl(198, 100%, 15%)',
  'hsl(198, 98%, 18%)',
  'hsl(198, 96%, 21%)',
  'hsl(198, 89%, 30%)',
  'hsl(199, 76%, 39%)',
  'hsl(199, 61%, 49%)',
  'hsl(200, 66%, 59%)',
  'hsl(200, 70%, 70%)',
  'hsl(200, 71%, 80%)',
  'hsl(200, 68%, 88%)',
];
// https://www.colorbox.io/#steps=9#hue_start=284#hue_end=287#hue_curve=easeInOutSine#sat_start=57#sat_end=21#sat_curve=easeInQuad#sat_rate=100#lum_start=32#lum_end=98#lum_curve=easeInQuad#minor_steps_map=0
const purples = [
  'hsl(283, 40%, 23%)',
  'hsl(284, 39%, 28%)',
  'hsl(284, 39%, 32%)',
  'hsl(284, 37%, 43%)',
  'hsl(285, 39%, 53%)',
  'hsl(285, 51%, 62%)',
  'hsl(286, 61%, 70%)',
  'hsl(287, 70%, 76%)',
  'hsl(287, 77%, 83%)',
  'hsl(288, 84%, 88%)',
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