import { useState, useEffect } from 'react';
import getTheme from './getTheme';

const useTheme = (initial = 'light') => {
  const [theme, setTheme] = useState(initial);

  useEffect(() => void requestAnimationFrame(() => { // eslint-disable-line no-void
    const root = document.querySelector(':root');
    const newTheme = getTheme(theme);

    root.style.setProperty('--c-foreground', newTheme.foreground);
    root.style.setProperty('--c-background', newTheme.background);
    newTheme.grayscale.forEach((c, i) => {
      root.style.setProperty(`--c-grayscale-${i}`, c);
    });
  }, [theme]));

  return [theme, setTheme];
};

export default useTheme;