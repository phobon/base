import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Box from './Box';

const stackDirections = props => {
  const directions = {
    column: css`
      > * + * {
        margin-top: ${typeof props.space === 'string' ? props.space : `${props.theme.space[props.space]}px`}
      }
    `,
    row: css`
      > * + * {
        margin-left: ${typeof props.space === 'string' ? props.space : `${props.theme.space[props.space]}px`}
      }
    `,
  };

  return directions[props.flexDirection];
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
