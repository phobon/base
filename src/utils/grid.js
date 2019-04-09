import {
  compose,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns,
} from 'styled-system';

const grid = compose(
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns,
);

export default grid;