import { system } from 'styled-system';

const paintConfig = {
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
};

const paint = system(paintConfig);

export default paint;