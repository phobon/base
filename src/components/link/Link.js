import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../typography';
import { focus } from '../../utils';

const Link = styled(Text).attrs(() => ({ as: 'a' }))`
  text-decoration: ${props => props.clean ? 'none' : 'underline dashed'};
  position: relative;
  border-radius: ${props => props.theme.radii[3]}px;

  &:hover {
    color: ${props => props.theme.colors.accent[3]};
    text-decoration: underline;
  }

  &:visited, &:focus {
    text-decoration: none;
  }

  ${focus}
`;

Link.displayName = 'Link';

Link.propTypes = {
  ...Text.propTypes,

  /** Represents a link with text-decoration removed. */
  clean: PropTypes.bool,

  /** Represents an active link. */
  active: PropTypes.bool,
};

Link.defaultProps = Object.assign({}, Text.defaultProps, {
  color: 'accent.1',
  fontSize: 1,
  textAlign: 'left',
  active: false,
});

export default Link;
