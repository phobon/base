import {
  compose,
  borders,
  borderRadius,
} from 'styled-system';

const border = compose(
  borders,
  borderRadius,
);

export default border;