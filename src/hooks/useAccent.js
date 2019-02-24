import { useState, useEffect } from 'react';
import { colour } from '../tokens/palettes';

const useAccent = () => {
  const [accent, setAccent] = useState('blues');

  useEffect(() => void requestAnimationFrame(() => {
    const root = document.querySelector(':root');

    const newColours = [...colour[accent]];
    newColours.forEach((c, i) => {
      root.style.setProperty(`--c-accent-${i}`, c);
    });
  }, [accent]));

  return [accent, setAccent];
};

export default useAccent;

