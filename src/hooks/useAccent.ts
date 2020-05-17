import { useEffect } from 'react';
import { useCachedState } from '@phobon/hooks';

import { colour, PaletteType } from '../tokens/palettes';

export const useAccent = (initial: PaletteType = 'greens', accentFunction: (key: PaletteType) => string[] = null): Array<PaletteType | React.Dispatch<React.SetStateAction<PaletteType>>> => {
  const [accent, setAccent] = useCachedState<PaletteType>('phobon__base:accent', initial);

  useEffect(() => void requestAnimationFrame(() => {
    const root: HTMLElement = document.querySelector(':root');

    const newColours = accentFunction(accent as PaletteType) || [...colour[accent as PaletteType]] as string[];
    newColours.forEach((c, i) => {
      root.style.setProperty(`--c-accent-${i}`, c);
    });
  }), [accent]);

  return [accent, setAccent];
};