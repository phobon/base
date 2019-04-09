import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  layout,
  flexbox,
  border,
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
  cover,
);

Box.displayName = 'Box';

Box.propTypes = {
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...border.propTypes,
  ...cover.propTypes,
};

Box.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};

export default Box;
