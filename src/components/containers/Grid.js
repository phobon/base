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
  display: grid;
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

export default Grid;
