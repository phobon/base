import { colour } from '../tokens/palettes';

const getTheme = (type) => {
  const themeDefinitions = {
    light: {
      foreground: 'hsl(228, 34%, 11%)',
      background: 'hsl(0, 0%, 100%)',
      grayscale: [...colour.grayscale],
    },
    dark: {
      foreground: 'hsl(228, 62%, 95%)',
      background: 'hsl(221, 20%, 22%)',
      grayscale: [...colour.reverseGrayscale],
    },
  };

  return themeDefinitions[type];
};

export default getTheme;