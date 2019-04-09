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

import { fullWidth, fullHeight, round } from './visualProps';

const layout = compose(
  space,
  color,
  display,
  width,
  maxWidth,
  height,
  maxHeight,
  fullWidth,
  fullHeight,
  round,
);

export default layout;