/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text'

const Truncate = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.lines};
`;

Truncate.displayName = 'Truncate';

Truncate.propTypes = {
  /* The number of lines to clamp text length to */
  lines: PropTypes.number,
};

Truncate.defaultProps = {
  lines: 1,
  lineHeight: 4,
};

export default Truncate;