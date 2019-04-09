import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  layout,
  flexbox,
  border,
} from '../../utils';

const Box = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
  minWidth: 0,
},
  layout,
  flexbox,
  border,
);

Box.displayName = 'Box';

Box.propTypes = {
  ...layout,
  ...flexbox,
  ...border,

  /** Whether container should take up all available width, or not */
  fullWidth: PropTypes.bool,

  /** Whether container should take up all available height, or not */
  fullHeight: PropTypes.bool,

  /** Container is round */
  round: PropTypes.bool,
};

Box.defaultProps = {
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'foreground',
};

export default Box;
