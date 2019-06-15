import styled from 'styled-components';
import { grid } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import Box from './Box';

const Grid = styled(Box)({
    display: 'grid',
  },
  grid,
);

Grid.displayName = 'Grid';

Grid.propTypes = {
  ...propTypes.grid,
};

Grid.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};

export default Grid;
