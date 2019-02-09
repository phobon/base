export const white = 'hsl(0, 0%, 100%)';
export const black = 'hsl(0, 0%, 0%)';
export const transparent = 'hsla(0, 0%, 0%, 0)';
export const focus = 'hsl(211, 97%, 61%)';

export const grayscale = [
  'var(--c-grayscale-0, hsl(228, 34%, 11%))',
  'var(--c-grayscale-1, hsl(227, 14%, 25%))',
  'var(--c-grayscale-2, hsl(229, 8%, 38%))',
  'var(--c-grayscale-3, hsl(226, 5%, 51%))',
  'var(--c-grayscale-4, hsl(228, 6%, 65%))',
  'var(--c-grayscale-5, hsl(223, 6%, 78%))',
  'var(--c-grayscale-6, hsl(220, 7%, 91%))',
];

export const colour = {
  accent: [
    'var(--c-accent-0, hsl(197, 100%, 17%))',
    'var(--c-accent-1, hsl(197, 94%, 25%))',
    'var(--c-accent-2, hsl(197, 81%, 33%))',
    'var(--c-accent-3, hsl(197, 69%, 40%))',
    'var(--c-accent-4, hsl(197, 59%, 56%))',
    'var(--c-accent-5, hsl(197, 72%, 74%))',
    'var(--c-accent-6, hsl(199, 84%, 90%))',
  ],

  grayscale: [
    'hsl(228, 34%, 11%)',
    'hsl(227, 14%, 25%)',
    'hsl(229, 8%, 38%)',
    'hsl(226, 5%, 51%)',
    'hsl(228, 6%, 65%)',
    'hsl(223, 6%, 78%)',
    'hsl(220, 7%, 91%)',
  ],

  greens: [
    'hsl(173, 100%, 15%)',
    'hsl(173, 100%, 21%)',
    'hsl(173, 93%, 28%)',
    'hsl(173, 81%, 35%)',
    'hsl(173, 48%, 50%)',
    'hsl(173, 53%, 65%)',
    'hsl(172, 58%, 81%)',
  ],

  oranges: [
    'hsl(34, 83%, 28%)',
    'hsl(31, 68%, 40%)',
    'hsl(29, 65%, 54%)',
    'hsl(27, 87%, 67%)',
    'hsl(26, 98%, 75%)',
    'hsl(28, 100%, 82%)',
    'hsl(29, 100%, 89%)',
  ],

  reds: [
    'hsl(8, 96%, 27%)',
    'hsl(8, 78%, 38%)',
    'hsl(7, 67%, 51%)',
    'hsl(7, 77%, 61%)',
    'hsl(6, 87%, 71%)',
    'hsl(7, 96%, 80%)',
    'hsl(7, 100%, 88%)',
  ],

  blues: [
    'hsl(197, 100%, 17%)',
    'hsl(197, 94%, 25%)',
    'hsl(197, 81%, 33%)',
    'hsl(197, 69%, 40%)',
    'hsl(197, 59%, 56%)',
    'hsl(197, 72%, 74%)',
    'hsl(199, 84%, 90%)',
  ],

  purples: [
    'hsl(283, 38%, 25%)',
    'hsl(284, 34%, 37%)',
    'hsl(284, 30%, 48%)',
    'hsl(283, 37%, 60%)',
    'hsl(283, 38%, 72%)',
    'hsl(283, 38%, 84%)',
    'hsl(285, 40%, 96%)',
  ],
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