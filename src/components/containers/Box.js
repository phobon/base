import styled from 'styled-components';
import { compose, space, layout, flexbox, border, color, position, background } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import {
  gridPosition,
  cover,
  round,
} from '../../utils';

const boxSystem = compose(space, layout, flexbox, border, color, position, background);

const Box = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,
},
  boxSystem,
  gridPosition,
  cover,
  round,
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
  ...round.propTypes,
};

Box.defaultProps = {
  flex: 'none',
  color: 'foreground',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Box;
