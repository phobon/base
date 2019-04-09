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

import { cover } from '../../utils';

const Text = styled.div({
  boxSizing: 'border-box',
},
  space,
  color,
  fontSize,
  lineHeight,
  width,
  textStyle,
  cover,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...width.propTypes,
  ...textStyle.propTypes,
  ...cover.propTypes,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
