/* eslint-disable react/prop-types */
/* eslint-disable react/default-props-match-prop-types */
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text'

const boxAlign = ({ textAlign }) => {
  const boxAlignments = {
    left: {
      '-webkit-box-align': 'start',
    },
    center: {
      '-webkit-box-align': 'center',
    },
    right: {
      '-webkit-box-align': 'end',
    },
  };

  return boxAlignments[textAlign || 'center'];
};

const Truncate = styled(Text)(
  boxAlign,
  ({ lines, wordBreak }) => ({
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': `${lines}`,
    wordBreak,
  }),
);

Truncate.displayName = 'Truncate';

Truncate.propTypes = {
  /* The number of lines to clamp text length to */
  lines: PropTypes.number,
};

Truncate.defaultProps = {
  lines: 1,
  lineHeight: 4,
  textAlign: 'left',
  wordBreak: 'break-word',
};

export default Truncate;