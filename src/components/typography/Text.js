import styled from 'styled-components';
import PropTypes from 'prop-types';
import { 
  space, 
  color, 
  fontSize, 
  lineHeight, 
  width,
  textStyle,
} from 'styled-system';

import { fullWidth } from '../../utils';

const Text = styled.div({
  boxSizing: 'border-box',
},
  space,
  color,
  fontSize,
  lineHeight,
  width,
  textStyle,
  fullWidth,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...width.propTypes,
  ...textStyle.propTypes,

  /** Text contianer should take up all available width */
  fullWidth: PropTypes.bool,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
