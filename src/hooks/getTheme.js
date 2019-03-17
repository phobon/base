import { theme } from '../tokens';
import { colour } from '../tokens/palettes';

const getTheme = (type) => {
  const themeDefinitions = {
    light: {
      foreground: 'hsl(228, 34%, 11%)',
      background: 'hsl(0, 0%, 100%)',
      grayscale: [...colour.grayscale],
    },
    dark: {
      foreground: 'hsl(220, 4%, 98%)',
      background: 'hsl(228, 22%, 22%)',
      grayscale: [...colour.reverseGrayscale],
    },
  };

  return themeDefinitions[type];
};

export default getTheme;