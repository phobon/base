import { theme } from '../../tokens';
import { colour } from '../../tokens/palettes';

const reverseGrayscale = [...colour.grayscale.slice(1), theme.colors.white];
reverseGrayscale.reverse();

const getTheme = (type) => {
  const themeDefinitions = {
    light: {
      foreground: colour.grayscale[0],
      background: theme.colors.white,
      grayscale: [...colour.grayscale],
    },
    dark: {
      foreground: theme.colors.white,
      background: colour.grayscale[0],
      grayscale: reverseGrayscale,
    },
  };

  return themeDefinitions[type];
};

export const changeTheme = (type) => {
  const root = document.querySelector(':root');
  const newTheme = getTheme(type, root);

  root.style.setProperty('--c-foreground', newTheme.foreground);
  root.style.setProperty('--c-background', newTheme.background);
  newTheme.grayscale.forEach((c, i) => {
    root.style.setProperty(`--c-grayscale-${i}`, c);
  });
};

changeTheme.defaultProps = {
  type: 'light',
};

export const changeAccent = (colour) => {
  const root = document.querySelector(':root');

  const newColours = [...theme.colors[colour]];
  newColours.forEach((c, i) => {
    root.style.setProperty(`--c-accent-${i}`, c);
  });
};