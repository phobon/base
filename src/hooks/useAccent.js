import { useEffect } from 'react';

import useCachedState from './useCachedState';
import { colour } from '../tokens/palettes';

const useAccent = (initial = 'greens', accentFunction = null) => {
  const [accent, setAccent] = useCachedState('theme', initial);

  useEffect(() => void requestAnimationFrame(() => { // eslint-disable-line no-void
    const root = document.querySelector(':root');

    const newColours = accentFunction || [...colour[accent]];
    newColours.forEach((c, i) => {
      root.style.setProperty(`--c-accent-${i}`, c);
    });
  }, [accent]));

  return [accent, setAccent];
};

export default useAccent;

