import { useEffect } from 'react';
import useCachedState from './useCachedState';
import getTheme from './getTheme';

const useTheme = (initial = 'light', themeFunction = getTheme) => {
  const [theme, setTheme] = useCachedState('phobon__base:theme', initial);

  if (typeof window === 'undefined') {
    return null;
  }

  useEffect(() => void requestAnimationFrame(() => { // eslint-disable-line no-void
    const root = document.querySelector(':root');
    const newTheme = themeFunction(theme);

    root.style.setProperty('--c-foreground', newTheme.foreground);
    root.style.setProperty('--c-background', newTheme.background);
    newTheme.grayscale.forEach((c, i) => {
      root.style.setProperty(`--c-grayscale-${i}`, c);
    });
  }, [theme]));

  return [theme, setTheme];
};

export default useTheme;