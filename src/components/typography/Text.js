import styled from 'styled-components';
import {
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { cover, gridPosition } from '../../utils';

const Text = styled.span({
  boxSizing: 'border-box',
  display: 'block',
},
  space,
  color,
  layout,
  typography,
  position,
  textStyle,
  cover,
  gridPosition,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.position,
  ...propTypes.textStyle,
  ...cover.propTypes,
  ...gridPosition.propTypes,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
