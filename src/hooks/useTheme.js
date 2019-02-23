import { useState, useEffect } from 'react';
import { theme } from '../tokens';
import { colour } from '../tokens/palettes';

const getTheme = type => {
  const themeDefinitions = {
    light: {
      foreground: colour.grayscale[0],
      background: theme.colors.white,
      grayscale: [...colour.grayscale],
    },
    dark: {
      foreground: 'hsl(220, 4%, 98%)',
      background: 'hsl(228, 34%, 9%)',
      grayscale: [...colour.reverseGrayscale],
    },
  };

  return themeDefinitions[type];
};

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => void requestAnimationFrame(() => {
    const root = document.querySelector(':root');
    const newTheme = getTheme(theme, root);

    root.style.setProperty('--c-foreground', newTheme.foreground);
    root.style.setProperty('--c-background', newTheme.background);
    newTheme.grayscale.forEach((c, i) => {
      root.style.setProperty(`--c-grayscale-${i}`, c);
    });
  }, [theme]));

  return [theme, setTheme];
};

export default useTheme;