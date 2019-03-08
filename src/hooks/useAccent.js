import { useState, useEffect } from 'react';
import { colour } from '../tokens/palettes';

const useAccent = () => {
  const [accent, setAccent] = useState('greens');

  useEffect(() => void requestAnimationFrame(() => { // eslint-disable-line no-void
    const root = document.querySelector(':root');

    const newColours = [...colour[accent]];
    newColours.forEach((c, i) => {
      root.style.setProperty(`--c-accent-${i}`, c);
    });
  }, [accent]));

  return [accent, setAccent];
};

export default useAccent;

