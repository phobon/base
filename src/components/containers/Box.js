import styled from 'styled-components';
import { space, layout, flexbox, border, color, position, background } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import {
  gridPosition,
  cover,
} from '../../utils';

const Box = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,
},
  space,
  layout,
  flexbox,
  border,
  color,
  position,
  background,
  gridPosition,
  cover,
);

Box.displayName = 'Box';

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.position,
  ...propTypes.background,
  ...gridPosition.propTypes,
  ...cover.propTypes,
};

Box.defaultProps = {
  flex: 'none',
  color: 'foreground',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Box;
