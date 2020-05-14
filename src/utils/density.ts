import { system } from 'styled-system';

type Density = 'compact' | 'normal' | 'spacious';
export interface DensityProps {
  density?: Density;
}
export const density = system({
  space: {
    property: 'height',
    transform: n => {
      const densities = {
        compact: {
          height: 32,
        },
        normal: {
          height: 40,
        },
        spacious: {
          height: 48,
        },
      };
    
      return densities[n];
    },
  },
});