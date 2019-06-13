import {
  compose,
  gridRow,
  gridColumn,
  gridArea,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const gridPosition = compose(
  gridRow,
  gridColumn,
  gridArea,
);
gridPosition.propTypes = {
  ...propTypes.gridRow,
  ...propTypes.gridColumn,
  ...propTypes.gridArea,
};

export default gridPosition;