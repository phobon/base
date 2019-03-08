import styled from 'styled-components';
import {
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
import Box from './Box';

const Grid = styled(Box)`
  flex: unset;

  ${gridGap}
  ${gridRowGap}
  ${gridColumnGap}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridAutoColumns}
  ${gridTemplateAreas}
  ${gridTemplateRows}
  ${gridTemplateColumns}
`;

Grid.displayName = 'Grid';

Grid.defaultProps = Object.assign({}, Box.defaultProps, {
  display: 'grid',
})

/** @component */
export default Grid;
