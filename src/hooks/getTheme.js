import { theme } from '../tokens';
import { colour } from '../tokens/palettes';

const getTheme = (type) => {
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

export default getTheme;