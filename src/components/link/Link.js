import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../typography';

const Link = styled(Text).attrs(props => ({ as: 'a' }))`
  text-decoration: ${props => props.clean ? 'none' : 'underline dotted'};
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.accent[3]};
    text-decoration: underline;
  }

  &:visited, &:focus {
    text-decoration: none;
  }

  &:focus {
    outline: 0;

    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      content: "";
      box-shadow: 0 0 0 2px ${props => props.theme.colors.guidance.focus};
      border-radius: ${props => props.theme.radii[2]}px;
      pointer-events: none;
    }
  }
`;

Link.displayName = 'Link';

Link.propTypes = {
  ...Text.propTypes,

  clean: PropTypes.bool,

  active: PropTypes.bool,
};

Link.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false,
});

export default Link;
