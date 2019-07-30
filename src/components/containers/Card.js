import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Stack from './Stack';

const boxShadow = props => {
  const boxShadows = {
    none: css`box-shadow: 0;`,
    s: css`box-shadow: ${props.theme.boxShadows[0]};`,
    m: css`box-shadow: ${props.theme.boxShadows[1]};`,
    l: css`box-shadow: ${props.theme.boxShadows[2]};`,
    xl: css`box-shadow: ${props.theme.boxShadows[3]};`,
    xxl: css`box-shadow: ${props.theme.boxShadows[4]};`,
  };

  return boxShadows[props.boxShadowSize];
};

const Card = styled(Stack)`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    ${boxShadow}
    pointer-events: none;
    border-radius: inherit;
    opacity: ${props => props.boxShadowIntensity};
    left: 0;
    top: 0;
    transition: opacity 180ms ease-out;
  }
`;

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