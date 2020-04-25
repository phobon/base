import PropTypes from 'prop-types';
import styled from 'styled-components';

import Stack from './Stack';

const boxShadow = ({ boxShadowSize, theme }) => {
  const boxShadows = {
    none: 0,
    s: 0,
    m: 1,
    l: 2,
    xl: 3,
    xxl: 4,
  };

  return {
    '&::before': {
      boxShadow: theme.boxShadows[boxShadows[boxShadowSize]],
    },
  };
};

const Card = styled(Stack)(
  ({ boxShadowIntensity }) => ({
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      opacity: boxShadowIntensity,
      left: 0,
      top: 0,
      transition: 'opacity 180ms ease-out',
    },
  }),
  boxShadow,
);

Card.displayName = 'Card';

Card.propTypes = {
  ...Stack.propTypes,

  /** Card box shadow size */
  boxShadowSize: PropTypes.oneOf([ 'none', 's', 'm', 'l', 'xl', 'xxl' ]),

  /** Card box shadow intensity between 0 and 1 (higher is more intense) */
  boxShadowIntensity: PropTypes.number,
};

Card.defaultProps = {
  ...Stack.defaultProps,

  color: 'foreground',
  bg: 'background',
  borderRadius: 3,
  boxShadowSize: 'l',
  boxShadowIntensity: 1,
};

export default Card;