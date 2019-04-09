import {
  compose,
  position as styledPosition,
  zIndex,
  left,
  right,
  top,
  bottom,
} from 'styled-system';

const position = compose(
  styledPosition,
  zIndex,
  left,
  right,
  top,
  bottom,
);

export default position;