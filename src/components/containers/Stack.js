import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from './Box';

const stackDirections = ({ space, theme, flexDirection }) => {
  const directions = {
    column: {
      '> * + *': {
        marginTop: typeof space === 'string' ? space : theme.space[space],
      },
    },
    row: {
      '> * + *': {
        marginLeft: typeof space === 'string' ? space : theme.space[space],
      },
    },
  };

  return directions[flexDirection];
};

const Stack = styled(Box)(
  stackDirections,
);

Stack.propTypes = {
  space: PropTypes.node,
};

Stack.defaultProps = {
  ...Box.defaultProps,

  space: 0,
  flexDirection: 'column',
};

export default Stack;
