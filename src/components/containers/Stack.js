import styled from 'styled-components';
import { get, system } from 'styled-system';
import PropTypes from 'prop-types';

import Box from './Box';

// eslint-disable-next-line no-restricted-globals
const isNumber = n => typeof n === 'number' && !isNaN(n)

const getMargin = (n, scale, { flexDirection }) => {
  if (!isNumber(n)) {
    return get(scale, n, n)
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute, absolute)
  if (!isNumber(value)) {
    return isNegative ? `-${value}` : value
  }

  const r = {};
  const v = value * (isNegative ? -1 : 1);
  r[flexDirection === 'row' ? 'marginLeft': 'marginTop'] = v;
  return r;
}

const stackSpace = system({
  space: {
    property: '> * + *',
    scale: 'space',
    transform: getMargin,
  },
});

const Stack = styled(Box)(
  stackSpace,
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
