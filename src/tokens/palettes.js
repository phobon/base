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
  'var(--c-grayscale-7, hsl(220, 6%, 96%))',
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
    'hsl(220, 6%, 96%)',
  ],
  reverseGrayscale: [
    'hsl(220, 6%, 60%)',
    'hsl(220, 7%, 52%)',
    'hsl(223, 6%, 47%)',
    'hsl(228, 8%, 42%)',
    'hsl(226, 10%, 38%)',
    'hsl(226, 16%, 34%)',
    'hsl(229, 19%, 30%)',
    'hsl(227, 20%, 26%)',
  ],

  greens: [
    'hsl(174, 100%, 15%)',
    'hsl(174, 100%, 21%)',
    'hsl(174, 93%, 28%)',
    'hsl(174, 81%, 35%)',
    'hsl(174, 48%, 50%)',
    'hsl(174, 53%, 65%)',
    'hsl(173, 58%, 81%)',
  ],

  oranges: [
    'hsl(35, 83%, 28%)',
    'hsl(32, 68%, 40%)',
    'hsl(30, 65%, 54%)',
    'hsl(28, 87%, 67%)',
    'hsl(27, 98%, 75%)',
    'hsl(29, 100%, 82%)',
    'hsl(30, 100%, 89%)',
  ],

  reds: [
    'hsl(9, 96%, 27%)',
    'hsl(9, 78%, 38%)',
    'hsl(8, 67%, 51%)',
    'hsl(8, 77%, 61%)',
    'hsl(7, 87%, 71%)',
    'hsl(8, 96%, 80%)',
    'hsl(8, 100%, 88%)',
  ],

  blues: [
    'hsl(198, 100%, 17%)',
    'hsl(198, 94%, 25%)',
    'hsl(198, 81%, 33%)',
    'hsl(198, 69%, 40%)',
    'hsl(198, 59%, 56%)',
    'hsl(198, 72%, 74%)',
    'hsl(200, 84%, 90%)',
  ],

  purples: [
    'hsl(284, 38%, 25%)',
    'hsl(285, 34%, 37%)',
    'hsl(285, 30%, 48%)',
    'hsl(284, 37%, 60%)',
    'hsl(284, 38%, 72%)',
    'hsl(284, 38%, 84%)',
    'hsl(286, 40%, 96%)',
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