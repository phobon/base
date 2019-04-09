import styled from 'styled-components';

import Box from './Box';
import { grid } from '../../utils';

const Grid = styled(Box)({
    display: 'grid',
  },
  grid,
);

Grid.displayName = 'Grid';

Grid.propTypes = {
  ...grid.propTypes,
};

Grid.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};

export default Grid;
