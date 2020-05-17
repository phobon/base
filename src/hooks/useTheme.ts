import { useEffect } from 'react';
import { useCachedState } from '@phobon/hooks';

import { getTheme, ThemeType, IThemeDefinition } from '../tokens/palettes';

export const useTheme = (initial: ThemeType = 'light', themeFunction: (type: ThemeType) => IThemeDefinition = getTheme): Array<ThemeType | React.Dispatch<React.SetStateAction<ThemeType>>> => {
  const [theme, setTheme] = useCachedState<ThemeType>('phobon__base:theme', initial);

  useEffect(() => {
    if (!theme) {
      return;
    }

    requestAnimationFrame(() => {
      const root: HTMLElement = document.querySelector(':root');
      const newTheme = themeFunction(theme as ThemeType);
  
      root.style.setProperty('--c-foreground', newTheme.foreground);
      root.style.setProperty('--c-background', newTheme.background);
      newTheme.grayscale.forEach((c, i) => {
        root.style.setProperty(`--c-grayscale-${i}`, c);
      });
    });
  }, [theme]);

  return [theme, setTheme];
};