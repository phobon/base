import {
  compose,
  space,
  color,
  display,
  width,
  maxWidth,
  height,
  maxHeight,
} from 'styled-system';

import cover from './cover';
import round from './round';

const layout = compose(
  space,
  color,
  display,
  width,
  maxWidth,
  height,
  maxHeight,
  cover,
  round,
);

export default layout;