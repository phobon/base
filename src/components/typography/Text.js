import styled from 'styled-components';
import { layout, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

import { cover } from '../../utils';

const Text = styled.div({
  boxSizing: 'border-box',
},
  layout,
  typography,
  cover,
);

Text.displayName = 'Text';

Text.propTypes = {
  ...propTypes.layout,
  ...propTypes.typography,
  ...cover.propTypes,
};

Text.defaultProps = {
  color: 'foreground',
  fontSize: 1,
  textAlign: 'left',
  lineHeight: 4,
};

export default Text;
