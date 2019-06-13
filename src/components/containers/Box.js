import styled from 'styled-components';
import { layout, flexbox, border } from 'styled-system';
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
  layout,
  flexbox,
  border,
  gridPosition,
  cover,
);

Box.displayName = 'Box';

Box.propTypes = {
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.border,
  ...gridPosition.propTypes,
  ...cover.propTypes,
};

Box.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};

export default Box;
